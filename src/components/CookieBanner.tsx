"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie-consent";
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 12 meses

type ConsentValue = "accepted" | "essential";

function readConsent(): ConsentValue | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw) as { value: ConsentValue; ts: number };
      if (Date.now() - parsed.ts > CONSENT_MAX_AGE_MS) {
        localStorage.removeItem(CONSENT_KEY);
        return null;
      }
      return parsed.value;
    } catch {
      // Formato legacy: string plano — migrar
      const value = raw as ConsentValue;
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, ts: Date.now() }));
      return value;
    }
  } catch {
    return null;
  }
}

function saveConsent(value: ConsentValue) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, ts: Date.now() }));
  window.dispatchEvent(new Event("cookie-consent-updated"));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!readConsent()) setVisible(true);
  }, []);

  const handleAcceptAll = () => {
    saveConsent("accepted");
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    saveConsent("essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy border-t border-amber"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
        <p className="font-body text-cream/75 text-sm leading-relaxed flex-1">
          Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el
          tráfico de la web. Puedes aceptarlas, rechazarlas o personalizar tu elección.{" "}
          <Link
            href="/politica-de-cookies"
            className="text-amber underline underline-offset-2 hover:text-amber/80 transition-colors"
          >
            Política de cookies
          </Link>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="px-5 py-2.5 border border-cream/40 text-cream text-sm font-medium tracking-wide hover:border-cream hover:bg-cream/5 transition-colors"
          >
            Solo esenciales
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="px-5 py-2.5 bg-amber text-navy text-sm font-semibold tracking-wide hover:bg-amber-hover transition-colors"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
