import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, BookOpen, Mail } from "lucide-react";
import TrackingLink from "@/components/TrackingLink";

export const metadata: Metadata = {
  title: { absolute: "Plantillas de Gestión para Restaurantes | Adrián Pollán" },
  description:
    "Plantillas profesionales en Excel para gestionar tu restaurante: escandallos, ingeniería de menú, inventario, cuadro de mando y operaciones.",
  alternates: {
    canonical: "https://adrianpollan.com/herramientas/plantillas",
  },
  openGraph: {
    title: "Plantillas de Gestión para Restaurantes | Adrián Pollán",
    description:
      "Plantillas profesionales en Excel para gestionar tu restaurante: escandallos, ingeniería de menú, inventario, cuadro de mando y operaciones.",
    url: "https://adrianpollan.com/herramientas/plantillas",
  },
};

const individuales = [
  {
    title: "Ingeniería de Menú",
    description:
      "Analiza ventas, costes y popularidad de tu carta. Clasifica platos por rentabilidad y toma decisiones con datos reales.",
    price: "49 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/4495b9a9-0195-4cf2-a68e-504f0edec8d4",
  },
  {
    title: "Escandallo y Calculadora de Precios",
    description:
      "Calcula el coste real de cada receta, aplica mermas y fija precios con margen garantizado por canal de venta.",
    price: "59 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/cc2272c9-eb28-45af-86fd-97f00aaf60cb",
  },
  {
    title: "Control de Inventario y Pedidos",
    description:
      "Controla tu stock en tiempo real, calcula puntos de pedido automáticos y reduce roturas y excesos de inventario.",
    price: "69 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/7f6c6c39-17ab-4ebb-b1ba-e6b921d4f118",
  },
  {
    title: "Cuadro de Mando Financiero",
    description:
      "Registra ingresos y gastos, visualiza tu PyG en tiempo real y detecta desviaciones antes de que afecten tu caja.",
    price: "79 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/368c6b4a-fd85-4a12-864b-febd05665eb5",
  },
  {
    title: "Kit de Gestión Operativa",
    description:
      "Plantillas listas para cocina, barra y sala: control de mermas, temperaturas, pedidos, limpieza y checklists diarios.",
    price: "89 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/85495638-c754-4fdb-a7f0-d98a849e50a8",
  },
];

const bundles = [
  {
    title: "Starter Pack",
    description:
      "Ingeniería de Menú + Escandallo. Domina el coste de tus recetas y optimiza tu carta con datos reales.",
    price: "79 €",
    savings: "Ahorras 29 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/bdf998c1-be1e-4905-b613-5d64713e7784",
  },
  {
    title: "Pack Control",
    description:
      "Escandallo + Inventario + Ingeniería de Menú. El sistema completo para gestionar compras y márgenes.",
    price: "129 €",
    savings: "Ahorras 48 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/db756f4e-fb8d-4b02-9459-ce113370ffcd",
  },
  {
    title: "Pack Gestión",
    description:
      "Cuadro de Mando + Escandallo + Ingeniería de Menú. Tres plantillas para controlar costes, márgenes y resultados económicos.",
    price: "149 €",
    savings: "Ahorras 38 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/e5142082-3c6c-47c4-ac14-392211d0cfb7",
  },
  {
    title: "Pack Operación Pro",
    description:
      "Kit de Gestión + Inventario. Todo lo que necesita tu equipo para operar sin errores.",
    price: "139 €",
    savings: "Ahorras 19 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/a8470b16-0c8f-458b-af26-9280a6a11808",
  },
  {
    title: "Suite Completa",
    description:
      "Las 5 plantillas de gestión para restaurantes. El sistema completo para gestionar tu restaurante con criterio.",
    price: "219 €",
    savings: "Ahorras 126 €",
    featured: true,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/8ba24dda-671a-45f2-a3e2-5276f83c104a",
  },
];

const garantias = [
  {
    icon: <Zap size={24} className="text-amber" />,
    title: "Acceso inmediato",
    body: "Recibes los archivos en tu email nada más completar la compra.",
  },
  {
    icon: <BookOpen size={24} className="text-amber" />,
    title: "Listas para usar",
    body: "Incluyen datos de ejemplo y guía paso a paso para que puedas empezar hoy.",
  },
  {
    icon: <Mail size={24} className="text-amber" />,
    title: "Soporte incluido",
    body: "Si tienes dudas sobre cómo usar cualquier plantilla, escríbeme directamente.",
  },
];

export default function PlantillasPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          alt="Análisis y datos para gestión de restaurantes — plantillas profesionales"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <Link href="/herramientas" className="hover:text-amber transition-colors">Herramientas</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Plantillas</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Plantillas · Excel
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-5">
              Plantillas de gestión<br />
              <span className="font-semibold">para restaurantes</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Herramientas profesionales en Excel listas para usar. Con datos de ejemplo,
              instrucciones paso a paso y fórmulas automáticas.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLANTILLAS INDIVIDUALES — crema oscuro ────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
              Plantillas individuales
            </p>
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight">
              Elige la que necesitas ahora
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individuales.map((p) => (
              <div
                key={p.href}
                className="bg-white border border-navy/8 rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40"
              >
                <h3 className="font-display text-navy text-lg font-semibold leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed flex-1 mb-6">
                  {p.description}
                </p>
                <p className="font-display text-amber text-3xl font-bold mb-5">
                  {p.price}
                </p>
                <TrackingLink
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-amber text-navy text-sm font-semibold tracking-wide"
                  eventName="plantilla_compra"
                  eventLabel={p.title}
                >
                  Comprar ahora <ArrowRight size={14} />
                </TrackingLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUNDLES — blanco ──────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
              Packs con descuento
            </p>
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-2">
              Combina plantillas y ahorra hasta un 37%
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundles.map((b) => (
              <div
                key={b.href}
                className={[
                  "relative rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1",
                  b.featured
                    ? "bg-white border-2 border-amber shadow-[0_12px_28px_-8px_rgba(186,117,23,0.35)]"
                    : "bg-white border border-navy/8 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40",
                ].join(" ")}
              >
                {b.featured && (
                  <span className="absolute top-4 right-4 bg-amber text-navy text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                    Más popular
                  </span>
                )}
                <h3 className="font-display text-navy text-lg font-semibold leading-snug mb-3 pr-20">
                  {b.title}
                </h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed flex-1 mb-4">
                  {b.description}
                </p>
                <p className="font-body text-green-600 text-xs font-medium mb-3">
                  {b.savings}
                </p>
                <p className="font-display text-amber text-3xl font-bold mb-5">
                  {b.price}
                </p>
                <TrackingLink
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-amber text-navy text-sm font-semibold tracking-wide"
                  eventName="bundle_compra"
                  eventLabel={b.title}
                >
                  Comprar ahora <ArrowRight size={14} />
                </TrackingLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GARANTÍAS — navy ─────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {garantias.map((g) => (
              <div key={g.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber/20 border border-amber/30 rounded-lg flex items-center justify-center mt-0.5">
                  {g.icon}
                </div>
                <div>
                  <h3 className="font-display text-cream text-base font-semibold mb-1.5">
                    {g.title}
                  </h3>
                  <p className="font-body text-cream/60 text-sm leading-relaxed">
                    {g.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — blanco ───────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            ¿Prefieres que lo analicemos juntos?
          </h2>
          <p className="font-body text-ink/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
            Si tienes dudas sobre qué plantilla necesitas o quieres revisar los números
            de tu negocio, agenda una sesión gratuita de 20 minutos.
          </p>
          <TrackingLink
            href="https://calendly.com/adrianpollan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="calendly_click"
            eventLabel="Plantillas — CTA final"
          >
            Agendar sesión gratuita <ArrowRight size={15} />
          </TrackingLink>
        </div>
      </section>
    </>
  );
}
