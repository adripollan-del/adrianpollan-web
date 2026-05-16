"use client";

import { useEffect, useRef } from "react";

const CALENDLY_URL =
  "https://calendly.com/adrianpollan?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a18&primary_color=BA7517";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { parentElement: HTMLElement; url: string }) => void;
    };
  }
}

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const init = () => {
      if (window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          parentElement: containerRef.current,
          url: CALENDLY_URL,
        });
      }
    };

    // Caso 1: el script ya está cargado (ej. navegación SPA o segunda visita)
    if (window.Calendly) {
      init();
      return;
    }

    // Caso 2: el <script> ya fue inyectado pero aún no terminó de cargar
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", init, { once: true });
      return;
    }

    // Caso 3: primera carga — inyectar el script de Calendly
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", init, { once: true });
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white rounded-xl shadow-md overflow-hidden border border-navy/10 h-[900px] lg:h-[700px]"
      style={{ minWidth: "320px" }}
    />
  );
}
