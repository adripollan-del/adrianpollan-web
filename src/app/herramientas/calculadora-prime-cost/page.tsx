import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TrackingLink from "@/components/TrackingLink";
import CalculadoraClient from "./calculadora-client";

export const metadata: Metadata = {
  title: { absolute: "Calculadora de Prime Cost para Restaurantes | Gratis | Adrián Pollán" },
  description:
    "Calcula tu food cost, labour cost y prime cost al instante con interpretación incluida. Herramienta gratuita para restaurantes. Sin registro, sin tarjeta de crédito.",
  alternates: {
    canonical: "https://adrianpollan.com/herramientas/calculadora-prime-cost",
  },
  openGraph: {
    title: "Calculadora de Prime Cost para Restaurantes | Adrián Pollán",
    description:
      "Calcula al instante tu food cost, labour cost y prime cost con interpretación incluida.",
    url: "https://adrianpollan.com/herramientas/calculadora-prime-cost",
  },
};

export default function CalculadoraPrimeCostPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <Link href="/herramientas" className="hover:text-amber transition-colors">Herramientas</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Calculadora de Prime Cost</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Herramienta gratuita
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-5">
              Calculadora de<br />
              <span className="font-semibold">Prime Cost</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Introduce los datos de tu restaurante y calcula al instante tu food cost,
              labour cost y prime cost con interpretación incluida.
            </p>
          </div>
        </div>
      </section>

      {/* ── HERRAMIENTA ───────────────────────────────────────────── */}
      <CalculadoraClient />

      {/* ── CTA FINAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            ¿Quieres saber exactamente dónde mejorar?
          </h2>
          <p className="font-body text-ink/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
            La calculadora da una foto del momento. El diagnóstico gratuito analiza las causas
            y te dice qué hacer primero.
          </p>
          <TrackingLink
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="diagnostico_click"
            eventLabel="Calculadora prime cost — CTA"
          >
            Recibir Diagnóstico Gratuito <ArrowRight size={15} />
          </TrackingLink>
        </div>
      </section>
    </>
  );
}
