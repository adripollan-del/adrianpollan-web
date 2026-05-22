import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import TrackingLink from "@/components/TrackingLink";
import { ExternalLink, ArrowRight, Calendar, Mail, Zap } from "lucide-react";
import ProcesoDeTrabajo from "@/components/ProcesoDeTrabajo";
import MapaDiagnostico from "@/components/MapaDiagnostico";

export const metadata: Metadata = {
  title: { absolute: "Habla con Adrián Pollán | Consultor de Restaurantes y Hostelería" },
  description:
    "Diagnóstico gratuito de tu negocio, sesión gratuita de 20 minutos o mensaje directo. Primera conversación sin compromiso para ver si tiene sentido trabajar juntos.",
  alternates: {
    canonical: "https://adrianpollan.com/hablemos",
  },
  openGraph: {
    title: "Habla con Adrián Pollán | Sesión Gratuita de Consultoría",
    description:
      "Tres formas de empezar: diagnóstico gratuito, sesión de 20 minutos o mensaje directo. Sin compromiso.",
    url: "https://adrianpollan.com/hablemos",
  },
};

export default function HablemosPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1756564800880-7a24d6c6cc15?auto=format&fit=crop&w=1920&q=80"
          alt="Interior de bar de hostelería — consultor especializado en restaurantes y F&B"
          fill
          priority
          sizes="100vw"
          quality={50}
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Hablemos
            </p>
            <h1 className="font-display text-cream text-3xl lg:text-7xl font-light leading-[1.05] mb-6">
              Hablemos.
            </h1>
            <p className="font-body text-cream/60 text-lg leading-relaxed mb-4">
              Habla con un consultor especializado en restaurantes y F&amp;B.
            </p>
            <p className="font-body text-cream/45 text-base leading-relaxed mb-10">
              No hace falta tener todo claro antes de contactar. La mayoría de
              las personas que trabajan conmigo llegaron con una sensación,
              no con un diagnóstico hecho.
            </p>

            {/* Tres opciones en pequeño */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              {[
                { icon: <Zap size={14} />, label: "Diagnóstico IA — gratis e inmediato" },
                { icon: <Calendar size={14} />, label: "Sesión 20 min — sin compromiso" },
                { icon: <Mail size={14} />, label: "Mensaje directo" },
              ].map((opt, i) => (
                <div key={i} className="flex items-center gap-2 text-cream/50 font-body">
                  <span className="text-amber">{opt.icon}</span>
                  {opt.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNÓSTICO IA — fondo blanco ─────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/30 px-3 py-1.5 mb-6">
            <Zap size={13} className="text-amber" />
            <span className="font-body text-amber text-xs tracking-widest uppercase">Opción 1 — gratis e inmediato</span>
          </div>
          <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-5">
            Descubre en minutos qué está frenando a tu negocio.
          </h2>
          <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
            He desarrollado una herramienta de diagnóstico que analiza tu
            negocio a través de preguntas clave sobre tu operación,
            rentabilidad, equipo y gestión. En pocos minutos obtienes un
            informe personalizado. Es completamente gratuita. No necesitas
            registrarte.
          </p>
          <div className="space-y-3 mb-10 pl-4 border-l-2 border-amber/40">
            {[
              "Rentabilidad y estructura de costes",
              "Gestión de equipo y dependencias",
              "Operativa, procesos y eficiencia",
              "Carta, pricing y experiencia cliente",
              "Informe personalizado con plan de acción",
            ].map((area, i) => (
              <p key={i} className="font-body text-ink/65 text-sm">— {area}</p>
            ))}
          </div>
          <TrackingLink
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-amber inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="diagnostico_click"
            eventLabel="Hablemos — diagnóstico"
          >
            Hacer el diagnóstico ahora
            <ExternalLink size={15} />
          </TrackingLink>
          <p className="font-body text-ink/40 text-sm text-center max-w-md mt-5">
            Tus respuestas se usan únicamente para generar tu diagnóstico y, si decides contactar, entender mejor tu situación. No se venden, no se comparten y no recibirás spam.{" "}
            <a href="/politica-de-privacidad" className="underline hover:text-cream/60 transition-colors">
              Política de privacidad
            </a>
            .
          </p>
        </div>
      </section>

      <ProcesoDeTrabajo />

      <MapaDiagnostico bg="bg-white" />

      {/* ── CALENDLY — fondo crema oscuro ─────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Header a la izquierda */}
            <div className="lg:col-span-1 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 bg-navy/8 border border-navy/15 px-3 py-1.5 mb-6">
                <Calendar size={13} className="text-navy/60" />
                <span className="font-body text-navy/60 text-xs tracking-widest uppercase">Opción 2 — sesión gratuita</span>
              </div>
              <h2 className="font-display text-navy text-2xl lg:text-4xl font-semibold leading-tight mb-4">
                Empieza con una sesión gratuita de 20 minutos.
              </h2>
              <p className="font-body text-ink/60 text-base leading-relaxed mb-6">
                La primera conversación no tiene coste ni compromiso. Es una
                llamada corta para que puedas explicarme qué está pasando en
                tu negocio y entre los dos veamos si tiene sentido trabajar
                juntos. No es una llamada de ventas. Es una conversación
                honesta para ver si encajamos.
              </p>
              <div className="space-y-3">
                {[
                  "Sin coste ni compromiso",
                  "Te digo honestamente si puedo ayudarte",
                  "Video llamada o llamada telefónica",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-amber mt-0.5 text-lg font-display leading-none">—</span>
                    <p className="font-body text-ink/65 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendly a la derecha ocupa 2/3 */}
            <div className="lg:col-span-2">
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO — fondo blanco ────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-navy/8 border border-navy/15 px-3 py-1.5 mb-6">
                <Mail size={13} className="text-navy/60" />
                <span className="font-body text-navy/60 text-xs tracking-widest uppercase">Opción 3 — mensaje directo</span>
              </div>
              <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-5">
                ¿Prefieres escribir primero?
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
                Si tienes una pregunta concreta o prefieres el email, puedes
                escribirme directamente. Respuesta personal en menos de 24 horas laborables.
              </p>

              {/* Mini perfil */}
              <div className="flex items-center gap-4 bg-cream-dark border border-navy/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-amber/20 border border-amber/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-amber font-bold text-lg">AP</span>
                </div>
                <div>
                  <p className="font-display text-navy font-semibold">Adrián Pollán</p>
                  <p className="font-body text-ink/50 text-sm">Respuesta personal en menos de 24 horas laborables</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — fondo crema oscuro ───────────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-2xl lg:text-5xl font-light leading-tight mb-5 max-w-2xl mx-auto">
            El primer paso es siempre el más sencillo.
          </h2>
          <p className="font-body text-ink/65 text-lg leading-relaxed max-w-lg mx-auto mb-10">
            Reserva tu sesión gratuita de 20 minutos o escríbeme directamente.
            Sin presión, sin compromisos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="calendly_click"
              eventLabel="Hablemos — CTA final"
            >
              Reserva tu sesión gratuita <ArrowRight size={15} />
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
