import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, BookOpen, Mail } from "lucide-react";
import TrackingLink from "@/components/TrackingLink";

export const metadata: Metadata = {
  title: { absolute: "Cuadro de Mando Financiero para Restaurantes | Adrián Pollán" },
  description:
    "Registra ingresos y gastos y visualiza tu PyG, KPIs y caja en tiempo real. Detecta desviaciones antes de que afecten tu margen. 79 €.",
  alternates: { canonical: "https://adrianpollan.com/herramientas/plantillas/cuadro-mando-financiero" },
  openGraph: {
    title: "Cuadro de Mando Financiero para Restaurantes | Adrián Pollán",
    description:
      "Registra ingresos y gastos y visualiza tu PyG, KPIs y caja en tiempo real. Detecta desviaciones antes de que afecten tu margen. 79 €.",
    url: "https://adrianpollan.com/herramientas/plantillas/cuadro-mando-financiero",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cuadro de Mando Financiero para Restaurantes",
  description: "Registra ingresos y gastos y visualiza tu PyG, KPIs y caja en tiempo real.",
  url: "https://adrianpollan.com/herramientas/plantillas/cuadro-mando-financiero",
  brand: { "@type": "Brand", name: "Adrián Pollán" },
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://adrianpollan.com/#person" },
  },
};

const bullets = [
  "PyG mensual con actualización automática",
  "KPIs: food cost, labour cost, EBITDA y margen por canal",
  "Alertas configurables de desviación sobre umbrales",
  "Simulador de comisiones por plataforma de delivery",
  "Compatible con registro desde Google Forms en móvil",
  "Guía de primeros pasos incluida",
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
    body: "Incluyen datos de ejemplo del restaurante La Mesa y una guía de primeros pasos. No necesitas saber Excel para empezar.",
  },
  {
    icon: <Mail size={24} className="text-amber" />,
    title: "Soporte directo incluido",
    body: "Si tienes dudas sobre cómo adaptar la plantilla a tu negocio, escríbeme directamente a adrian@adrianpollan.com",
  },
];

export default function CuadroMandoFinancieroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
          alt="Dashboard financiero y análisis de datos para restaurantes — Cuadro de Mando Financiero"
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
            <Link href="/herramientas/plantillas" className="hover:text-amber transition-colors">Plantillas</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Cuadro de Mando</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Plantilla · Excel &amp; Google Sheets
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-5">
              Cuadro de Mando<br />
              <span className="font-semibold">Financiero para Restaurantes</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Deja de tardar días en saber si el mes fue bueno o malo. Visualiza ventas, costes y margen en una sola estructura mensual.
            </p>
          </div>
        </div>
      </section>

      {/* ── DESCRIPCIÓN + BULLETS ─────────────────────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-6">
                El problema que resuelve
              </h2>
              <p className="font-body text-ink/70 text-base leading-relaxed">
                Sin un cuadro de mando, saber si el negocio gana dinero implica juntar ventas del TPV, extractos bancarios, facturas de proveedores y nóminas. Con esta plantilla introduces cada movimiento en un registro central y el sistema actualiza solo la cuenta de resultados, los KPIs clave y las alertas de desviación. Una estructura mensual clara en lugar de números dispersos.
              </p>
            </div>
            <div>
              <h2 className="font-display text-navy text-2xl font-semibold mb-6">Qué incluye</h2>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="text-amber mt-0.5 flex-shrink-0">✓</span>
                    <span className="font-body text-ink/70 text-sm leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRECIO ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-display text-amber text-6xl font-bold mb-3">79 €</p>
          <p className="font-body text-ink/50 text-sm mb-8">Pago único · Acceso de por vida · Excel y Google Sheets</p>
          <TrackingLink
            href="https://adrianpollan.lemonsqueezy.com/checkout/buy/368c6b4a-fd85-4a12-864b-febd05665eb5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="plantilla_compra"
            eventLabel="Cuadro de Mando Financiero"
          >
            Comprar ahora <ArrowRight size={15} />
          </TrackingLink>
        </div>
      </section>

      {/* ── GARANTÍAS ────────────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-20">
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
                  <h3 className="font-display text-cream text-base font-semibold mb-1.5">{g.title}</h3>
                  <p className="font-body text-cream/60 text-sm leading-relaxed">{g.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            ¿No sabes si esta plantilla es la que necesitas?
          </h2>
          <p className="font-body text-ink/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
            En 20 minutos puedo ayudarte a identificar cuál es el problema más urgente de tu restaurante. Sin coste y sin compromiso.
          </p>
          <TrackingLink
            href="https://calendly.com/adrianpollan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="calendly_click"
            eventLabel="Cuadro de Mando — CTA final"
          >
            Agendar sesión gratuita <ArrowRight size={15} />
          </TrackingLink>
          <div className="mt-6">
            <Link href="/herramientas/plantillas" className="font-body text-sm text-ink/50 hover:text-amber transition-colors">
              ← Ver todas las plantillas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
