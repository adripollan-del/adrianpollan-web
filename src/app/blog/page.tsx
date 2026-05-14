import type { Metadata } from "next";
import Link from "next/link";
import BlogGrid from "@/components/BlogGrid";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Adrián Pollán",
  description:
    "Artículos prácticos sobre rentabilidad en restaurantes, gestión de equipos, aperturas y El Método ADRIÁN.",
};

export default function BlogPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        {/* Sutil grano amber arriba */}
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Blog
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-7xl font-light leading-[1.05] mb-6">
              Blog
            </h1>
            <p className="font-display text-cream/50 text-xl lg:text-2xl italic mb-5">
              Ideas que vienen del terreno, no de un manual.
            </p>
            <p className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl">
              Llevo más de veinte años dentro de operaciones reales, en cuatro
              países y en contextos muy distintos. Lo que escribo aquí viene de
              esa experiencia, de los problemas que he visto repetirse una y
              otra vez, y de las soluciones que funcionan cuando se aplican con
              criterio. No hay contenido de relleno. Cada artículo tiene un
              propósito concreto.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRID DE ARTÍCULOS — fondo blanco ────────────────────── */}
      <BlogGrid />

      {/* ── CTA — navy ───────────────────────────────────────────── */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                ¿Quieres ir más allá?
              </p>
              <h2 className="font-display text-cream text-3xl lg:text-4xl font-semibold leading-tight mb-4">
                Analiza tu restaurante con la herramienta de diagnóstico IA
              </h2>
              <p className="font-body text-cream/55 text-base leading-relaxed">
                Los artículos te dan contexto. El diagnóstico te dice exactamente
                qué está pasando en tu negocio. Gratis, en 10 minutos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <a
                href="https://diagnostico.adrianpollan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-navy text-sm font-semibold tracking-wide hover:bg-amber-hover transition-colors"
              >
                Hacer el diagnóstico <ExternalLink size={15} />
              </a>
              <Link
                href="/hablemos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/25 text-cream text-sm font-medium hover:bg-cream/10 transition-colors"
              >
                O reserva una sesión →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
