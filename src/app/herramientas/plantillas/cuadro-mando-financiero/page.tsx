import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Zap, BookOpen, Mail,
  Clock, FileWarning, TrendingDown,
  FileText, BarChart, Bell, Smartphone, TrendingUp,
} from "lucide-react";
import TrackingLink from "@/components/TrackingLink";
import TeReconoces from "../TeReconoces";

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

const symptoms = [
  { icon: <Clock size={28} className="text-amber" />, text: "Tardas días en saber si el mes fue bueno o malo porque los datos están dispersos" },
  { icon: <FileWarning size={28} className="text-amber" />, text: "Tienes ventas del TPV, facturas y extractos pero no un resumen claro" },
  { icon: <TrendingDown size={28} className="text-amber" />, text: "Detectas los problemas financieros demasiado tarde, cuando ya han impactado" },
];

const actions = [
  "Ver tu cuenta de resultados mensual actualizada en tiempo real con un solo registro central",
  "Controlar food cost, labour cost, EBITDA y margen por canal en un solo dashboard",
  "Configurar alertas automáticas que te avisan cuando un KPI supera su umbral",
  "Simular el impacto de las comisiones de delivery en tu margen real",
  "Registrar desde el móvil con un Google Form conectado a la plantilla",
  "Comparar resultados mes a mes y detectar tendencias antes de que se conviertan en problemas",
];

const includes = [
  { icon: <FileText size={24} className="text-amber" />, title: "PyG mensual automática", description: "La cuenta de resultados se actualiza sola cuando introduces cada ingreso o gasto" },
  { icon: <BarChart size={24} className="text-amber" />, title: "KPIs clave", description: "Food cost, labour cost, prime cost, EBITDA y margen por canal siempre visibles" },
  { icon: <Bell size={24} className="text-amber" />, title: "Alertas configurables", description: "Define tus umbrales y recibe aviso automático cuando un indicador se desvía" },
  { icon: <Smartphone size={24} className="text-amber" />, title: "Registro desde móvil", description: "Conecta un Google Form a la plantilla y registra movimientos desde cualquier lugar" },
  { icon: <TrendingUp size={24} className="text-amber" />, title: "Simulador de delivery", description: "Calcula el impacto real de las comisiones de Uber Eats, Glovo y otras plataformas" },
  { icon: <BookOpen size={24} className="text-amber" />, title: "Guía de primeros pasos", description: "Instrucciones paso a paso para empezar en menos de 30 minutos" },
];

const forWhom = [
  "Propietarios que no saben si el mes fue rentable hasta que llega el contable",
  "Restaurantes con delivery que no controlan el margen real por canal",
  "Negocios donde los KPIs financieros solo se revisan cuando hay un problema",
  "Cualquier restaurante que gestione las finanzas con Excel disperso o sin estructura",
];

const garantias = [
  { icon: <Zap size={24} className="text-amber" />, title: "Acceso inmediato", body: "Recibes los archivos en tu email nada más completar la compra. Sin esperas ni procesos de activación." },
  { icon: <BookOpen size={24} className="text-amber" />, title: "Listas para usar desde hoy", body: "Incluyen datos de ejemplo del restaurante La Mesa y una guía de primeros pasos. No necesitas saber Excel para empezar." },
  { icon: <Mail size={24} className="text-amber" />, title: "Soporte directo incluido", body: "Si tienes dudas sobre cómo adaptar la plantilla a tu negocio, escríbeme directamente a adrian@adrianpollan.com" },
];

export default function CuadroMandoFinancieroPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
          alt="Dashboard financiero y análisis de datos para restaurantes — Cuadro de Mando Financiero"
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
            <span className="text-amber">Cuadro de Mando</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">Plantilla · Excel &amp; Google Sheets</p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-5">
              Cuadro de Mando<br /><span className="font-semibold">Financiero para Restaurantes</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Deja de tardar días en saber si el mes fue bueno o malo. Visualiza ventas, costes y margen en una sola estructura mensual.
            </p>
          </div>
        </div>
      </section>

      {/* ── ASÍ SE VE LA PLANTILLA ──────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto mb-10">
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Así se ve la plantilla
            </h2>
            <p className="font-body text-ink/60 text-base">
              Datos de ejemplo incluidos para que puedas ver cómo funciona antes de meter los tuyos.
            </p>
          </div>
          <div className="max-w-[900px] mx-auto">
            <Image
              src="/images/plantillas/plantilla-cuadro-mando-financiero.png"
              alt="Vista previa del cuadro de mando financiero con datos de ejemplo"
              width={1200}
              height={675}
              className="w-full rounded-xl shadow-lg border border-navy/8"
            />
            <p className="font-body text-ink/40 text-xs text-center mt-4">
              Captura real de la plantilla con datos de ejemplo del restaurante La Mesa
            </p>
          </div>
        </div>
      </section>

      {/* ── ¿TE SUENA ESTO? ───────────────────────────────────────── */}
      <TeReconoces symptoms={symptoms} />

      {/* ── ¿QUÉ PUEDES HACER? ────────────────────────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-12 text-center">
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
          <p className="font-display text-amber text-7xl font-bold mb-3">79 €</p>
          <p className="font-body text-cream/60 text-base mb-8">
            Si tardas tres días al mes en cuadrar los números de tu negocio, ya has perdido más tiempo del que vale esta plantilla.
          </p>
          <TrackingLink
            href="https://adrianpollan.lemonsqueezy.com/checkout/buy/368c6b4a-fd85-4a12-864b-febd05665eb5"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="plantilla_compra" eventLabel="Cuadro de Mando Financiero"
          >
            Comprar ahora <ArrowRight size={15} />
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
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            ¿No sabes si esta plantilla es la que necesitas?
          </h2>
          <p className="font-body text-ink/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
            En 20 minutos puedo ayudarte a identificar cuál es el problema más urgente de tu restaurante. Sin coste y sin compromiso.
          </p>
          <TrackingLink
            href="https://calendly.com/adrianpollan" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="calendly_click" eventLabel="Cuadro de Mando — CTA final"
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
