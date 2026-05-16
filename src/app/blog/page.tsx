import type { Metadata } from "next";
import Image from "next/image";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: "Blog — Adrián Pollán",
  description:
    "Artículos prácticos sobre rentabilidad en restaurantes, gestión de equipos, aperturas y El Método ADRIÁN.",
};

export default function BlogPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1709548145082-04d0cde481d4?auto=format&fit=crop&w=1920&q=80"
          alt="Interior de restaurante con iluminación tenue"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />
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

      {/* ── PRESENTACIÓN/CATEGORÍAS (blanco) + GRID (crema) ─────── */}
      <BlogGrid />
    </>
  );
}
