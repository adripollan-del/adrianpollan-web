"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem(STORAGE_KEY);
    if (!choice) setVisible(true);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(STORAGE_KEY, "essential");
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
