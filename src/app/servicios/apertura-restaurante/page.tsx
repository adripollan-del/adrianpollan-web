import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, CheckCircle, ExternalLink, TrendingUp, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Cómo Abrir un Restaurante con Criterio | Acompañamiento a Aperturas | Adrián Pollán" },
  description:
    "Acompañamiento experto para abrir un restaurante evitando los errores más caros. Concepto, local, inversión, carta y equipo antes de comprometer tu dinero.",
  alternates: {
    canonical: "https://adrianpollan.com/servicios/apertura-restaurante",
  },
  openGraph: {
    title: "Acompañamiento para Abrir un Restaurante | Adrián Pollán",
    description:
      "Desde la validación del concepto hasta el primer servicio. Toma mejores decisiones antes de comprometer tu inversión.",
    url: "https://adrianpollan.com/servicios/apertura-restaurante",
  },
};

const forWhom = [
  "Emprendedores antes de firmar el local o comprometer su inversión",
  "Inversores que quieren validar la viabilidad real del proyecto",
  "Propietarios en los primeros meses de operación que necesitan dirección",
];

const includes = [
  "Validación del concepto antes de comprometer la inversión",
  "Posicionamiento claro: a quién le hablas, qué ofreces, por qué te van a elegir",
  "Cocina y sala diseñadas para los tiempos de servicio reales, no para que queden bonitas en plano",
  "Carta calculada con márgenes reales desde el primer día",
  "Equipo dimensionado y perfilado según el concepto",
  "Acompañamiento durante los primeros meses, cuando más errores se cometen",
];

const riskItems = [
  "Firmar un local sin validar el tráfico real ni la viabilidad del concepto",
  "Diseñar una cocina sin pensar en los tiempos de servicio",
  "Contratar equipo antes de tener claro el concepto y los procesos",
  "Lanzar una carta sin calcular el margen por plato",
];

const jsonLdApertura = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría de Apertura de Restaurante",
  description: "Acompañamiento especializado para la apertura de tu restaurante: concepto, operaciones, equipo, costes y puesta en marcha. Con más de 20 años de experiencia en aperturas internacionales.",
  provider: { "@id": "https://adrianpollan.com/#person" },
  areaServed: ["España", "Irlanda", "Francia", "Reino Unido"],
  serviceType: "Consultoría de Apertura",
  url: "https://adrianpollan.com/servicios/apertura-restaurante",
};

export default function AperturaRestaurantePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApertura) }}
      />
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Sala de restaurante preparada para el servicio — consultoría especializada en aperturas de restaurantes"
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
            <Link href="/servicios" className="hover:text-amber transition-colors">Servicios</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Acompañamiento a Aperturas</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Servicio de consultoría
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Acompañamiento<br />
              <span className="font-semibold">a Aperturas</span>
            </h1>
            <p className="font-body text-cream/65 text-xl leading-relaxed max-w-2xl">
              Abrir un restaurante es de las decisiones más costosas que tomarás.
              Tiene sentido hacerlo con alguien que ya ha estado ahí.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN — blanco ───────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Para quién es
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                ¿Es tu momento?
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                Cuanto antes entra el acompañamiento en una apertura, más impacto tiene.
                Antes de firmar cualquier contrato es el momento ideal.
              </p>
            </div>
            <div className="space-y-4">
              {forWhom.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-cream-dark border border-navy/8 rounded-xl p-5">
                  <CheckCircle size={20} className="text-amber mt-0.5 flex-shrink-0" />
                  <p className="font-body text-ink/75 text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE — crema oscuro ────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Qué incluye
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Desde el concepto hasta el primer servicio
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                He acompañado aperturas en España, Irlanda, Francia y Reino Unido, en contextos
                muy distintos. Cada proyecto es diferente, pero los errores más costosos suelen
                ser los mismos.
              </p>
            </div>
            <div className="space-y-3">
              {includes.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-navy/10 rounded-xl p-5">
                  <span className="font-display text-amber font-bold text-base leading-none mt-0.5 flex-shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-ink/75 text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Herramienta gratuita */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white border border-amber/30 rounded-xl p-6 lg:p-8">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-1">
                Herramienta gratuita
              </p>
              <p className="font-display text-navy text-xl font-semibold">
                Descarga el checklist de apertura
              </p>
              <p className="font-body text-ink/60 text-sm mt-1">
                24 ítems en 6 bloques clave para saber exactamente si tienes todo listo antes de abrir.
              </p>
            </div>
            <Link
              href="/herramientas/checklist-apertura"
              className="inline-flex items-center gap-2 px-6 py-3 btn-amber text-navy text-sm font-semibold tracking-wide flex-shrink-0"
            >
              Ver checklist <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUÉ CAMBIA — blanco ──────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Qué cambia
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Qué cambia cuando abres con acompañamiento
            </h2>
            <p className="font-body text-ink/65 text-lg leading-relaxed">
              La diferencia no está en si algo sale mal. Está en cuánto cuesta cuando pasa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Tomas decisiones con criterio antes de que el dinero esté comprometido",
              "Evitas los errores más caros: local mal ubicado, cocina mal diseñada, carta sin margen",
              "Abres con un equipo dimensionado para tu concepto real, no para el que imaginabas",
              "Los primeros meses tienen acompañamiento, que es cuando más se aprende y más se pierde",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-cream-dark border border-navy/8 rounded-xl p-6">
                <CheckCircle size={20} className="text-amber mt-0.5 flex-shrink-0" />
                <p className="font-body text-ink/75 text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDICADORES — crema oscuro ────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Indicadores
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Indicadores que trabajamos desde el día uno
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Viabilidad financiera antes de firmar",
              "Margen por plato desde el diseño de carta",
              "Punto de equilibrio en semanas, no en años",
              "Ratio de ocupación necesaria para cubrir costes fijos",
            ].map((item, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded-xl p-6">
                <span className="font-display text-3xl font-light text-amber/30 block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-ink/75 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ IMPORTA — blanco ──────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Por qué importa
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Los errores más costosos se cometen antes de abrir
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {riskItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-cream-dark border border-navy/8 rounded-xl p-5">
                <AlertTriangle size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <p className="font-body text-ink/70 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASO REAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Caso real
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Una decisión que cambió el proyecto
            </h2>
          </div>
          <div className="bg-white border border-navy/10 rounded-xl p-8 lg:p-12 max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
              Emprendedor · Apertura · España
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-body text-ink/40 text-xs uppercase tracking-widest mb-2">Sin acompañamiento</p>
                <p className="font-display text-navy text-4xl font-bold mb-1">Local A</p>
                <p className="font-body text-ink/60 text-sm leading-relaxed">
                  Primera opción analizada. Tráfico aparente alto, pero patrón horario incompatible
                  con el concepto y alquiler inflado por expectativas del propietario.
                </p>
              </div>
              <div>
                <p className="font-body text-amber text-xs uppercase tracking-widest mb-2">Con acompañamiento</p>
                <p className="font-display text-navy text-4xl font-bold mb-1">–30%</p>
                <p className="font-body text-ink/60 text-sm leading-relaxed italic">
                  No firmó el local A. Negoció el local B con datos reales de tráfico y
                  consiguió un alquiler un 30% inferior sobre el primer presupuesto.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-navy/10">
              <TrendingUp size={18} className="text-amber flex-shrink-0" />
              <p className="font-body text-ink/60 text-sm leading-relaxed">
                Antes de comprometer la inversión es cuando más valor aporta el acompañamiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUÁNDO NO TIENE SENTIDO — blanco ─────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Honestidad ante todo
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Cuándo no tiene sentido
            </h2>
          </div>
          <div className="space-y-4 max-w-2xl">
            {[
              "Si el local ya está firmado, el equipo contratado y la carta cerrada. Cuanto antes entro, más impacto tiene.",
              "Si el proyecto todavía es una idea sin números. Primero valida la viabilidad básica.",
              "Si buscas solo validación de lo que ya has decidido. El acompañamiento sirve para mejorar decisiones, no para confirmarlas.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border border-navy/10 rounded-xl p-5">
                <span className="font-display text-base font-semibold text-navy/30 flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-ink/65 text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            &quot;No se trata de tener el restaurante perfecto desde el día uno. Se trata de no cometer los errores que luego son difíciles de deshacer.&quot;
          </h2>
          <p className="font-body text-ink/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Empieza con el diagnóstico gratuito o reserva una sesión de 20 minutos para
            hablar de tu proyecto. Sin presión, sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Apertura restaurante — CTA final"
            >
              Empezar mi diagnóstico gratuito <ExternalLink size={14} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
              eventName="calendly_click"
              eventLabel="Apertura restaurante — CTA final"
            >
              O reservar una sesión de 20 minutos →
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
