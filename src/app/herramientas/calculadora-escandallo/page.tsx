import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TrackingLink from "@/components/TrackingLink";
import EscandalloClient from "./escandallo-client";

export const metadata: Metadata = {
  title: "Calculadora de Escandallo para Restaurantes | Adrián Pollán",
  description:
    "Calcula el escandallo de tus platos de forma profesional. Introduce ingredientes, cantidades y costes y obtén el food cost, precio de venta recomendado y margen real.",
  alternates: {
    canonical: "https://adrianpollan.com/herramientas/calculadora-escandallo",
  },
  openGraph: {
    title: "Calculadora de Escandallo para Restaurantes | Adrián Pollán",
    description:
      "Calcula el food cost, el precio de venta recomendado y el margen real de cada plato de tu carta.",
    url: "https://adrianpollan.com/herramientas/calculadora-escandallo",
  },
};

export default function CalculadoraEscandalloPage() {
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
            <span className="text-amber">Calculadora de Escandallo</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Herramienta gratuita
            </p>
            <h1 className="font-display text-cream text-3xl lg:text-5xl font-light leading-[1.05] mb-5">
              Calculadora de<br />
              <span className="font-semibold">Escandallo</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Calcula el coste exacto de producción de cualquier plato de tu carta.
              Introduce los ingredientes, las cantidades y los precios de compra y obtén
              el food cost, el precio de venta recomendado y el margen real.
            </p>
          </div>
        </div>
      </section>

      {/* ── HERRAMIENTA ───────────────────────────────────────────── */}
      <EscandalloClient />

      {/* ── CTA FINAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            ¿Quieres saber qué más está afectando a tu margen?
          </h2>
          <p className="font-body text-ink/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
            El escandallo muestra el coste de cada plato. El diagnóstico gratuito analiza
            el negocio completo y te dice dónde actuar primero.
          </p>
          <TrackingLink
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="diagnostico_click"
            eventLabel="Calculadora escandallo — CTA"
          >
            Recibir Diagnóstico Gratuito <ArrowRight size={15} />
          </TrackingLink>
        </div>
      </section>
    </>
  );
}
