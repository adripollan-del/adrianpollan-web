import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart2, Calculator, CheckSquare, LayoutDashboard, Package, Zap, BookOpen, Mail } from "lucide-react";
import TrackingLink from "@/components/TrackingLink";
import FaqsClient from "./faqs-client";

export const metadata: Metadata = {
  title: { absolute: "Plantillas Excel para Gestión de Restaurantes | Adrián Pollán" },
  description:
    "Plantillas profesionales en Excel y Google Sheets para gestionar tu restaurante: escandallos, ingeniería de menú, inventario, cuadro de mando y operaciones. Listas para usar hoy.",
  alternates: {
    canonical: "https://adrianpollan.com/herramientas/plantillas",
  },
  openGraph: {
    title: "Plantillas Excel para Gestión de Restaurantes | Adrián Pollán",
    description:
      "Plantillas profesionales en Excel y Google Sheets para gestionar tu restaurante: escandallos, ingeniería de menú, inventario, cuadro de mando y operaciones. Listas para usar hoy.",
    url: "https://adrianpollan.com/herramientas/plantillas",
  },
};

const individuales = [
  {
    title: "Ingeniería de Menú",
    pageHref: "/herramientas/plantillas/menu-engineering",
    description: "Clasifica cada plato de tu carta por rentabilidad real y toma decisiones con datos, no con intuición.",
    price: "49 €",
    icon: <BarChart2 size={22} className="text-amber" />,
  },
  {
    title: "Escandallo y Calculadora de Precios",
    pageHref: "/herramientas/plantillas/escandallo-calculadora-precios",
    description: "Calcula el coste real de cada receta con mermas incluidas y fija precios con margen garantizado.",
    price: "59 €",
    icon: <Calculator size={22} className="text-amber" />,
  },
  {
    title: "Control de Inventario y Pedidos",
    pageHref: "/herramientas/plantillas/control-inventario-pedidos",
    description: "Elimina roturas de stock y pedidos urgentes con puntos de pedido automáticos por proveedor.",
    price: "69 €",
    icon: <Package size={22} className="text-amber" />,
  },
  {
    title: "Cuadro de Mando Financiero",
    pageHref: "/herramientas/plantillas/cuadro-mando-financiero",
    description: "Cierra el mes con una lectura clara de ventas, costes y margen. Sin juntar números de mil sitios.",
    price: "79 €",
    icon: <LayoutDashboard size={22} className="text-amber" />,
  },
  {
    title: "Kit de Gestión Operativa",
    pageHref: "/herramientas/plantillas/kit-gestion-operativa",
    description: "El mismo estándar operativo en todos los turnos, sin depender de la memoria de nadie.",
    price: "89 €",
    icon: <CheckSquare size={22} className="text-amber" />,
  },
];

const bundles = [
  {
    title: "Starter Pack",
    description:
      "El punto de partida para cualquier restaurante que quiera controlar sus márgenes: saber qué platos dejan dinero y cuánto cuesta producir cada uno.",
    price: "79 €",
    savings: "Ahorras 29 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/c7ef3d4f-ba9d-4b74-876f-af0c1376eece",
  },
  {
    title: "Pack Control",
    description:
      "El sistema completo para controlar compras, costes y carta. Desde el precio del ingrediente hasta el margen del plato, sin puntos ciegos.",
    price: "129 €",
    savings: "Ahorras 48 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/b3b79984-05a9-4a43-a742-e1a21ccd86ea",
  },
  {
    title: "Pack Gestión",
    description:
      "Para el restaurante que quiere tomar decisiones financieras con datos reales: costes, márgenes y resultados en una sola estructura.",
    price: "149 €",
    savings: "Ahorras 38 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/258b8c7e-9ef2-485b-9009-2e259d195537",
  },
  {
    title: "Pack Operación Pro",
    description:
      "Para estandarizar el día a día y controlar el stock al mismo tiempo. El equipo sabe qué hacer en cada turno y el almacén deja de ser una caja negra.",
    price: "139 €",
    savings: "Ahorras 19 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/a29df315-c6e6-4d79-9cbb-fa3ee24c07e3",
  },
  {
    title: "Suite Completa",
    description:
      "El sistema completo de gestión para restaurantes. Costes, inventario, carta, operaciones y finanzas en un solo pack. Para el restaurante que quiere dejar de gestionar por intuición.",
    price: "219 €",
    savings: "Ahorras 126 €",
    featured: true,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/e169cc11-fc65-44f4-8c5b-83ae0732c6cf",
  },
];

const garantias = [
  {
    icon: <Zap size={24} className="text-amber" />,
    title: "Acceso inmediato",
    body: "Recibes los archivos en tu email nada más completar la compra. Sin esperas ni procesos de activación.",
  },
  {
    icon: <BookOpen size={24} className="text-amber" />,
    title: "Listas para usar desde hoy",
    body: "Cada plantilla incluye datos de ejemplo del restaurante La Mesa y una guía de primeros pasos. No necesitas saber Excel para empezar.",
  },
  {
    icon: <Mail size={24} className="text-amber" />,
    title: "Soporte directo incluido",
    body: "Si tienes dudas sobre cómo adaptar cualquier plantilla a tu negocio, escríbeme directamente. No hay un formulario de soporte, hay una persona.",
  },
];

const jsonLdPlantillas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Plantillas de Gestión para Restaurantes",
      url: "https://adrianpollan.com/herramientas/plantillas",
      numberOfItems: 5,
    },
    {
      "@type": "Product",
      name: "Plantilla de Ingeniería de Menú para Restaurantes",
      description: "Clasifica cada plato de tu carta por rentabilidad y popularidad real con clasificación BCG automática.",
      url: "https://adrianpollan.com/herramientas/plantillas",
      brand: { "@type": "Brand", name: "Adrián Pollán" },
      offers: { "@type": "Offer", price: "49", priceCurrency: "EUR", availability: "https://schema.org/InStock", seller: { "@id": "https://adrianpollan.com/#person" } },
    },
    {
      "@type": "Product",
      name: "Plantilla de Escandallo y Calculadora de Precios",
      description: "Calcula el coste real de cada receta con mermas incluidas y fija precios con margen garantizado por canal.",
      url: "https://adrianpollan.com/herramientas/plantillas",
      brand: { "@type": "Brand", name: "Adrián Pollán" },
      offers: { "@type": "Offer", price: "59", priceCurrency: "EUR", availability: "https://schema.org/InStock", seller: { "@id": "https://adrianpollan.com/#person" } },
    },
    {
      "@type": "Product",
      name: "Plantilla de Control de Inventario y Pedidos Sugeridos",
      description: "Controla el stock en tiempo real y recibe pedidos sugeridos automáticos por proveedor.",
      url: "https://adrianpollan.com/herramientas/plantillas",
      brand: { "@type": "Brand", name: "Adrián Pollán" },
      offers: { "@type": "Offer", price: "69", priceCurrency: "EUR", availability: "https://schema.org/InStock", seller: { "@id": "https://adrianpollan.com/#person" } },
    },
    {
      "@type": "Product",
      name: "Cuadro de Mando Financiero para Restaurantes",
      description: "Registra ingresos y gastos y visualiza tu PyG, KPIs y caja en tiempo real.",
      url: "https://adrianpollan.com/herramientas/plantillas",
      brand: { "@type": "Brand", name: "Adrián Pollán" },
      offers: { "@type": "Offer", price: "79", priceCurrency: "EUR", availability: "https://schema.org/InStock", seller: { "@id": "https://adrianpollan.com/#person" } },
    },
    {
      "@type": "Product",
      name: "Kit de Gestión Operativa para Restaurantes",
      description: "Checklists y plantillas para cocina, barra y sala: aperturas, cierres, producción, mermas y temperaturas.",
      url: "https://adrianpollan.com/herramientas/plantillas",
      brand: { "@type": "Brand", name: "Adrián Pollán" },
      offers: { "@type": "Offer", price: "89", priceCurrency: "EUR", availability: "https://schema.org/InStock", seller: { "@id": "https://adrianpollan.com/#person" } },
    },
  ],
};

export default function PlantillasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPlantillas) }}
      />
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-grafito pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          alt="Análisis y datos para gestión de restaurantes — plantillas profesionales"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-grafito/50" />
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
              Plantillas de gestión para restaurantes<br />
              <span className="font-semibold">en Excel y Google Sheets</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Cinco herramientas diseñadas para restaurantes reales: con datos de ejemplo,
              manual operativo y fórmulas automáticas. Sin necesidad de ser experto en
              Excel para empezar a usarlas hoy.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLANTILLAS INDIVIDUALES — crema oscuro ────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
              Plantillas individuales
            </p>
            <h2 className="font-display text-grafito text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Plantillas individuales de gestión para restaurantes
            </h2>
            <p className="font-body text-ink/60 text-base leading-relaxed">
              Cada plantilla ataca un problema concreto de operación o rentabilidad. No son
              archivos genéricos descargados de internet: están construidas sobre situaciones
              reales de restaurantes en funcionamiento, con instrucciones paso a paso para que
              tu equipo las adopte desde el primer turno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individuales.map((p) => (
              <Link
                key={p.pageHref}
                href={p.pageHref}
                className="group bg-white border border-grafito/8 rounded-xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 bg-amber/10 border border-amber/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {p.icon}
                  </div>
                  <span className="font-display text-amber font-bold text-xl">{p.price}</span>
                </div>
                <h3 className="font-display text-grafito text-base font-semibold leading-snug mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed flex-1 mb-5">
                  {p.description}
                </p>
                <span className="font-body text-amber text-sm font-medium group-hover:underline">
                  Ver plantilla →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUNDLES — blanco ──────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
              Packs con descuento
            </p>
            <h2 className="font-display text-grafito text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Packs con descuento: combina plantillas y ahorra hasta un 37%
            </h2>
            <p className="font-body text-ink/60 text-base leading-relaxed">
              Si el problema no es solo uno, la solución tampoco debería serlo. Estos packs
              combinan las plantillas que más se complementan entre sí, con un descuento sobre
              el precio individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundles.map((b) => (
              <div
                key={b.href}
                className={[
                  "relative rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1",
                  b.featured
                    ? "bg-white border-2 border-amber shadow-[0_12px_28px_-8px_rgba(186,117,23,0.35)]"
                    : "bg-white border border-grafito/8 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40",
                ].join(" ")}
              >
                {b.featured && (
                  <span className="absolute top-4 right-4 bg-amber text-grafito text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                    Más popular
                  </span>
                )}
                <h3 className="font-display text-grafito text-lg font-semibold leading-snug mb-3 pr-20">
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-amber text-grafito text-sm font-semibold tracking-wide"
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

      {/* ── FAQs — crema ─────────────────────────────────────────── */}
      <FaqsClient />

      {/* ── GARANTÍAS — grafito ─────────────────────────────────────── */}
      <section className="bg-grafito py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-cream text-2xl lg:text-3xl font-semibold leading-tight mb-10 lg:mb-12">
            Diseñadas para restaurantes reales, no para demos
          </h2>
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
          <h2 className="font-display text-grafito text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            ¿No sabes qué plantilla necesitas primero?
          </h2>
          <p className="font-body text-ink/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
            En 20 minutos puedo ayudarte a identificar cuál es el problema más urgente de
            tu restaurante y qué herramienta atacarlo primero. Sin coste y sin compromiso.
          </p>
          <TrackingLink
            href="https://calendly.com/adrianpollan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-grafito text-sm font-semibold tracking-wide"
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
