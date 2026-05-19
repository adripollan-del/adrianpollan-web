import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Consultoría Operativa para Restaurantes",
  description:
    "Acompañamiento continuado para implementar mejoras reales mientras tu negocio sigue abierto. Sin planes estratégicos que acaban en una carpeta.",
  alternates: {
    canonical: "https://adrianpollan.com/servicios/consultoria-operativa-restaurantes",
  },
  openGraph: {
    title: "Consultoría Operativa para Restaurantes | Adrián Pollán",
    description:
      "Acompañamiento continuado para implementar mejoras reales mientras tu negocio sigue abierto.",
    url: "https://adrianpollan.com/servicios/consultoria-operativa-restaurantes",
  },
};

const forWhom = [
  "Negocios que funcionan pero quieren dar un salto real, no cosmético",
  "Propietarios que necesitan acompañamiento sostenido para implementar cambios",
  "Gestores que quieren resultados medibles con seguimiento mes a mes",
];

const includes = [
  "Sesiones de trabajo periódicas por videollamada",
  "Seguimiento continuo de indicadores clave",
  "Soporte en la toma de decisiones del día a día",
  "Formación y acompañamiento al equipo de gestión",
  "Acceso directo entre sesiones para resolver lo urgente",
];

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    body: "Empezamos entendiendo dónde está el negocio ahora mismo: costes, procesos, equipo y resultados. Sin esto, cualquier intervención es improvisar.",
  },
  {
    num: "02",
    title: "Plan de acción",
    body: "Definimos qué hay que mejorar, en qué orden y con qué métricas de éxito. Sin planes de cien páginas: solo lo que importa, priorizado.",
  },
  {
    num: "03",
    title: "Implementación con seguimiento mensual",
    body: "Trabajamos juntos mientras el negocio sigue abierto. Ajustamos sobre la marcha. Medimos los resultados mes a mes y documentamos lo que funciona.",
  },
];

export default function ConsultoriaOperativaPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
          alt="Consultoría operativa para restaurantes — gestión y seguimiento"
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
            <span className="text-amber">Consultoría Operativa Continuada</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Servicio de consultoría
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Consultoría Operativa<br />
              <span className="font-semibold">Continuada</span>
            </h1>
            <p className="font-body text-cream/65 text-xl leading-relaxed max-w-2xl">
              Un consultor que trabaja contigo, no uno que te deja un PDF y desaparece.
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
                ¿Es esto para tu negocio?
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                La consultoría operativa es para negocios que ya tienen tracción pero necesitan
                alguien que ayude a convertir esa energía en resultados consistentes y medibles.
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
                Acompañamiento real, no teoría
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                No paro la operación ni exijo cambios traumáticos de golpe. El trabajo se
                hace mientras el negocio sigue funcionando, ajustando sobre la marcha.
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
                Calcula tu prime cost ahora
              </p>
              <p className="font-body text-ink/60 text-sm mt-1">
                Food cost, labour cost y prime cost en segundos, con interpretación incluida.
              </p>
            </div>
            <Link
              href="/herramientas/calculadora-prime-cost"
              className="inline-flex items-center gap-2 px-6 py-3 btn-amber text-navy text-sm font-semibold tracking-wide flex-shrink-0"
            >
              Ir a la calculadora <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA — blanco ────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Cómo funciona
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              El proceso, paso a paso
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <span className="font-display text-5xl font-light text-amber/25 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-display text-navy text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            "Los resultados no vienen de tener el mejor plan. Vienen de implementarlo bien, con alguien que sabe lo que está haciendo."
          </h2>
          <p className="font-body text-ink/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Empieza con el diagnóstico gratuito para ver si encaja con tu momento. Sin presión.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Consultoría Operativa — CTA final"
            >
              Recibir Diagnóstico Gratuito <ExternalLink size={14} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
              eventName="calendly_click"
              eventLabel="Consultoría Operativa — CTA final"
            >
              Reservar sesión gratuita →
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
