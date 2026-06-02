import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Zap, BookOpen, Mail,
  TrendingDown, HelpCircle, AlertTriangle,
  Calculator, Truck, Bell, History, ChefHat,
} from "lucide-react";
import TrackingLink from "@/components/TrackingLink";

export const metadata: Metadata = {
  title: { absolute: "Plantilla de Escandallo y Calculadora de Precios para Restaurantes | Adrián Pollán" },
  description:
    "Calcula el coste real de cada receta con mermas incluidas y fija precios con margen garantizado por canal de venta. Excel y Google Sheets. 59 €.",
  alternates: { canonical: "https://adrianpollan.com/herramientas/plantillas/escandallo-calculadora-precios" },
  openGraph: {
    title: "Plantilla de Escandallo y Calculadora de Precios para Restaurantes | Adrián Pollán",
    description:
      "Calcula el coste real de cada receta con mermas incluidas y fija precios con margen garantizado por canal de venta. Excel y Google Sheets. 59 €.",
    url: "https://adrianpollan.com/herramientas/plantillas/escandallo-calculadora-precios",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Plantilla de Escandallo y Calculadora de Precios para Restaurantes",
  description: "Calcula el coste real de cada receta con mermas incluidas y fija precios con margen garantizado por canal.",
  url: "https://adrianpollan.com/herramientas/plantillas/escandallo-calculadora-precios",
  brand: { "@type": "Brand", name: "Adrián Pollán" },
  offers: {
    "@type": "Offer",
    price: "59",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://adrianpollan.com/#person" },
  },
};

const symptoms = [
  { icon: <TrendingDown size={28} className="text-amber" />, text: "Suben los proveedores y no sabes qué platos están perdiendo margen" },
  { icon: <HelpCircle size={28} className="text-amber" />, text: "Fijas precios copiando a la competencia o por lo que crees que el cliente pagará" },
  { icon: <AlertTriangle size={28} className="text-amber" />, text: "Tienes platos que se venden mucho pero sospechas que no dejan dinero" },
];

const actions = [
  "Calcular el coste real de cada receta con las mermas ya aplicadas automáticamente",
  "Saber el precio mínimo de venta para cada canal: sala, Uber Eats, Glovo o take away",
  "Detectar al instante qué platos tienen margen crítico cuando sube un ingrediente",
  "Mantener un historial de variación de costes por ingrediente para anticipar subidas",
  "Calcular sub-recetas para masas, salsas, fondos y preparaciones intermedias",
  "Revisar toda la carta en minutos cuando negocias con un proveedor nuevo",
];

const includes = [
  { icon: <Calculator size={24} className="text-amber" />, title: "Coste por receta con mermas", description: "Las mermas se aplican automáticamente. El coste que ves es el coste real de producción" },
  { icon: <Truck size={24} className="text-amber" />, title: "Calculadora por canal de venta", description: "Precio mínimo para sala, Uber Eats, Glovo y take away según la comisión de cada canal" },
  { icon: <Bell size={24} className="text-amber" />, title: "Alertas de margen crítico", description: "Configura tu umbral de margen y recibe alerta automática cuando un plato lo supera" },
  { icon: <History size={24} className="text-amber" />, title: "Historial de costes", description: "Registra variaciones de precio por ingrediente y detecta tendencias antes de que impacten" },
  { icon: <ChefHat size={24} className="text-amber" />, title: "Sub-recetas incluidas", description: "Calcula el coste de masas, salsas, fondos y cualquier preparación intermedia" },
  { icon: <BookOpen size={24} className="text-amber" />, title: "Guía de primeros pasos", description: "Instrucciones paso a paso para empezar en menos de 30 minutos" },
];

const forWhom = [
  "Restaurantes que fijan precios por intuición o copiando a la competencia",
  "Negocios con delivery que no saben si les sale rentable por canal",
  "Propietarios que quieren saber el impacto real de una subida de proveedor",
  "Cualquier restaurante que no tenga sus escandallos actualizados",
];

const garantias = [
  { icon: <Zap size={24} className="text-amber" />, title: "Acceso inmediato", body: "Recibes los archivos en tu email nada más completar la compra. Sin esperas ni procesos de activación." },
  { icon: <BookOpen size={24} className="text-amber" />, title: "Listas para usar desde hoy", body: "Incluyen datos de ejemplo del restaurante La Mesa y una guía de primeros pasos. No necesitas saber Excel para empezar." },
  { icon: <Mail size={24} className="text-amber" />, title: "Soporte directo incluido", body: "Si tienes dudas sobre cómo adaptar la plantilla a tu negocio, escríbeme directamente a adrian@adrianpollan.com" },
];

export default function EscandalloCalculadoraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1920&q=80"
          alt="Ingredientes y recetas de restaurante — Plantilla de Escandallo y Calculadora de Precios"
          fill priority sizes="100vw" className="object-cover opacity-25"
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
            <span className="text-amber">Escandallo</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">Plantilla · Excel &amp; Google Sheets</p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-5">
              Plantilla de Escandallo<br /><span className="font-semibold">y Calculadora de Precios</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Deja de fijar precios por intuición. Calcula el coste real de cada receta y sabe exactamente qué margen deja cada plato por canal.
            </p>
          </div>
        </div>
      </section>

      {/* ── ¿TE SUENA ESTO? ───────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-12 text-center">
            ¿Te suena esto?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {symptoms.map((s, i) => (
              <div key={i} className="bg-[#f5f0e8] border-l-4 border-amber rounded-r-xl p-7">
                <div className="mb-4">{s.icon}</div>
                <p className="font-body text-ink/80 text-base leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿QUÉ PUEDES HACER? ────────────────────────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-12">
            ¿Qué puedes hacer con esta plantilla?
          </h2>
          <ol className="space-y-5">
            {actions.map((a, i) => (
              <li key={i} className="flex items-start gap-5">
                <span className="font-display text-amber text-2xl font-bold leading-none flex-shrink-0 w-8 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-ink/75 text-base leading-relaxed">{a}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── ¿QUÉ INCLUYE? ─────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-12">
            ¿Qué incluye?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="border border-navy/8 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber/10 border border-amber/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-navy text-base font-semibold mb-1">{item.title}</h3>
                    <p className="font-body text-ink/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIO ───────────────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-display text-amber text-7xl font-bold mb-3">59 €</p>
          <p className="font-body text-cream/60 text-base mb-8">
            Un solo proveedor que sube un 10% puede hacerte perder más que esto en un mes si no tienes los escandallos actualizados.
          </p>
          <TrackingLink
            href="https://adrianpollan.lemonsqueezy.com/checkout/buy/cc2272c9-eb28-45af-86fd-97f00aaf60cb"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="plantilla_compra" eventLabel="Escandallo y Calculadora de Precios"
          >
            Comprar ahora — 59 € <ArrowRight size={15} />
          </TrackingLink>
          <p className="font-body text-cream/40 text-xs mt-5">
            Acceso inmediato · Excel y Google Sheets · Soporte incluido
          </p>
        </div>
      </section>

      {/* ── ¿PARA QUIÉN ES? ───────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-10">
            ¿Para quién es esta plantilla?
          </h2>
          <ul className="space-y-5">
            {forWhom.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-amber mt-0.5 flex-shrink-0 text-lg font-bold">✓</span>
                <p className="font-body text-ink/75 text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
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
            href="https://calendly.com/adrianpollan" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="calendly_click" eventLabel="Escandallo — CTA final"
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
