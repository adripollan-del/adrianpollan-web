import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import FAQAccordion from "@/components/FAQAccordion";
import { ExternalLink, ArrowRight, Calendar, Mail, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Hablemos — Adrián Pollán",
  description:
    "Tres formas de empezar: diagnóstico IA gratuito, sesión de 20 minutos o mensaje directo. Consultoría en hostelería y restauración.",
};

const faqs = [
  {
    question: "¿Trabajas solo con negocios de España?",
    answer:
      "No. Trabajo de forma completamente online, lo que me permite trabajar con negocios en cualquier país de habla hispana y también en inglés si el proyecto lo requiere.",
  },
  {
    question: "¿Cuánto dura un proceso de consultoría?",
    answer:
      "Depende del servicio y de la situación de cada negocio. En la primera sesión lo vemos juntos.",
  },
  {
    question: "¿Cómo sé qué servicio necesito?",
    answer:
      "No hace falta saberlo antes de contactar. En la sesión gratuita de 20 minutos te ayudo a identificar qué tipo de acompañamiento encaja mejor con tu situación.",
  },
  {
    question: "¿Trabajas con negocios que acaban de abrir?",
    answer:
      "Sí. Cuanto antes se incorpora el acompañamiento en una apertura, más impacto tiene.",
  },
];

export default function HablemosPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1756564800880-7a24d6c6cc15?auto=format&fit=crop&w=1920&q=80"
          alt="Interior de bar con botellas iluminadas tenuemente"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Hablemos
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-7xl font-light leading-[1.05] mb-6">
              Hablemos.
            </h1>
            <p className="font-body text-cream/60 text-lg leading-relaxed mb-4">
              Si tienes un negocio de hostelería y sientes que algo podría
              funcionar mejor, este es el sitio por donde empezar.
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
          <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-5">
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
          <a
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-amber inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
          >
            Hacer el diagnóstico ahora
            <ExternalLink size={15} />
          </a>
        </div>
      </section>

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
              <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
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
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-5">
                ¿Prefieres escribir primero?
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
                Si tienes una pregunta concreta o prefieres el email, puedes
                escribirme directamente. Respondo en menos de 48 horas.
              </p>

              {/* Mini perfil */}
              <div className="flex items-center gap-4 bg-cream-dark border border-navy/10 rounded-xl p-5">
                <div className="w-12 h-12 bg-amber/20 border border-amber/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-amber font-bold text-lg">AP</span>
                </div>
                <div>
                  <p className="font-display text-navy font-semibold">Adrián Pollán</p>
                  <p className="font-body text-ink/50 text-sm">Respuesta personal · &lt; 24h</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FAQ — fondo crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Preguntas frecuentes
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Lo que suelen preguntar
              </h2>
              <p className="font-body text-ink/60 text-base leading-relaxed mb-8">
                Si tienes alguna duda que no está aquí, escríbeme directamente.
              </p>
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 font-body text-sm text-amber border-b border-amber/40 pb-0.5 hover:border-amber transition-colors"
              >
                Hacer una pregunta <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-2">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — fondo blanco ──────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-4xl lg:text-5xl font-light leading-tight mb-5 max-w-2xl mx-auto">
            El primer paso es siempre el más sencillo.
          </h2>
          <p className="font-body text-ink/65 text-lg leading-relaxed max-w-lg mx-auto mb-10">
            Reserva tu sesión gratuita de 20 minutos o escríbeme directamente.
            Sin presión, sin compromisos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hablemos#calendly"
              className="inline-flex items-center gap-2 px-9 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            >
              Reserva tu sesión gratuita <ArrowRight size={15} />
            </Link>
            <a
              href={`mailto:adripollan@gmail.com`}
              className="font-body text-sm text-navy/60 hover:text-navy transition-colors"
            >
              O escríbeme por email →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
