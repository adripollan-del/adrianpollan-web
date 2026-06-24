"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "cookie-consent";
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 12 meses

type ConsentValue = "accepted" | "essential";

function readConsent(): ConsentValue | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    // Formato nuevo: { value, ts }
    try {
      const parsed = JSON.parse(raw) as { value: ConsentValue; ts: number };
      if (Date.now() - parsed.ts > CONSENT_MAX_AGE_MS) {
        localStorage.removeItem(CONSENT_KEY);
        return null;
      }
      return parsed.value;
    } catch {
      // Formato legacy (string plano): decisión tomada bajo el sistema anterior,
      // donde los scripts se cargaban igualmente. No es consentimiento válido
      // para el nuevo sistema — invalidar y pedir de nuevo.
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
  } catch {
    return null;
  }
}

export default function AnalyticsScripts() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lee localStorage al montar y suscribe evento custom del DOM; ambas APIs son solo cliente
    setConsented(readConsent() === "accepted");

    const handler = () => setConsented(readConsent() === "accepted");
    window.addEventListener("cookie-consent-updated", handler);
    return () => window.removeEventListener("cookie-consent-updated", handler);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RJSBHMJ9BL"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RJSBHMJ9BL');
        `}
      </Script>
      <Script id="clarity-sdk" strategy="lazyOnload">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","wthj8c4zuf");`}
      </Script>
      <Script id="event-tracking" strategy="lazyOnload">
        {`document.addEventListener('click',function(e){var el=e.target.closest('[data-event]');if(!el)return;if(typeof window.gtag==='function'){window.gtag('event',el.dataset.event,{event_category:'conversion',event_label:el.dataset.label||''});}},{passive:true});`}
      </Script>
    </>
  );
}
