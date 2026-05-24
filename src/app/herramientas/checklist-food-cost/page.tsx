import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TrackingLink from "@/components/TrackingLink";
import ChecklistFoodCostClient from "./checklist-food-cost-client";

export const metadata: Metadata = {
  title: { absolute: "Checklist de Food Cost para Restaurantes | Control de Costes | Adrián Pollán" },
  description:
    "Evalúa si tienes los sistemas básicos de control de food cost implementados. 16 ítems en 4 bloques: escandallos, stock, porciones y análisis. Gratuito.",
  alternates: {
    canonical: "https://adrianpollan.com/herramientas/checklist-food-cost",
  },
  openGraph: {
    title: "Checklist de Food Cost para Restaurantes | Adrián Pollán",
    description:
      "Revisa si tienes implementados los sistemas básicos para controlar el food cost de tu restaurante.",
    url: "https://adrianpollan.com/herramientas/checklist-food-cost",
  },
};

export default function ChecklistFoodCostPage() {
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
            <span className="text-amber">Checklist de Food Cost</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Herramienta gratuita
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-5">
              Checklist de Control<br />
              <span className="font-semibold">de Food Cost</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Revisa si tienes implementados los sistemas básicos para controlar el food cost
              de tu restaurante. 16 ítems en 4 bloques.
            </p>
          </div>
        </div>
      </section>

      {/* ── HERRAMIENTA ───────────────────────────────────────────── */}
      <ChecklistFoodCostClient />

      {/* ── CTA FINAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            ¿Quieres cerrar los puntos de fuga de margen de tu negocio?
          </h2>
          <p className="font-body text-ink/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
            El checklist identifica lo que falta. El diagnóstico gratuito analiza por qué
            está pasando y qué hacer para resolverlo.
          </p>
          <TrackingLink
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="diagnostico_click"
            eventLabel="Checklist food cost — CTA"
          >
            Recibir Diagnóstico Gratuito <ArrowRight size={15} />
          </TrackingLink>
        </div>
      </section>
    </>
  );
}
