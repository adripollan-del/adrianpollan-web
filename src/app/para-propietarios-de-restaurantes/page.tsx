import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, Search, LineChart, CheckCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Consultoría para Propietarios de Restaurantes | Recupera el Margen | Adrián Pollán" },
  description:
    "Consultoría para propietarios de restaurantes que venden bien pero no ganan lo que deberían. Diagnóstico gratuito y acompañamiento para recuperar el margen real.",
  alternates: {
    canonical: "https://adrianpollan.com/para-propietarios-de-restaurantes",
  },
  openGraph: {
    title: "Para Propietarios de Restaurantes | Adrián Pollán",
    description:
      "Consultoría especializada para propietarios de restaurantes que venden bien pero no ganan lo que deberían. Diagnóstico, operativa y rentabilidad real.",
    url: "https://adrianpollan.com/para-propietarios-de-restaurantes",
  },
};

const painPoints = [
  "Vendes bien, pero a final de mes el dinero no cuadra como debería",
  "El negocio depende demasiado de ti: si no estás, las cosas se complican",
  "No sabes exactamente dónde se escapa el margen ni cómo frenarlo",
  "Llevas tiempo queriendo cambiar cosas, pero el día a día no te deja",
];

const services = [
  {
    icon: <Search size={36} className="text-amber" />,
    title: "Diagnóstico y auditoría F&B",
    body: "Análisis completo de rentabilidad, estructura de costes, carta y operación. En días tienes un mapa claro de dónde está el problema y qué hacer primero.",
  },
  {
    icon: <LineChart size={36} className="text-amber" />,
    title: "Consultoría operativa continuada",
    body: "Acompañamiento mensual para mejorar resultados de forma sistemática: food cost, labour cost, equipo, sistemas y procesos. Cambios que se mantienen.",
  },
];

export default function ParaPropietariosPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-grafito pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grafito/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <Link href="/servicios" className="hover:text-amber transition-colors">Servicios</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Para propietarios</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Para propietarios de restaurantes
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Si tu restaurante trabaja bien<br />
              <span className="font-semibold">pero el dinero no cuadra, esto es para ti.</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed max-w-2xl">
              Hay restaurantes que están llenos y no son rentables. El problema
              rara vez está en las ventas. Está en el sistema.
            </p>
          </div>
        </div>
      </section>

      {/* ── IDENTIFICACIÓN — blanco ───────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Reconócete
              </p>
              <h2 className="font-display text-grafito text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                ¿Reconoces alguna de estas situaciones?
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                Son las más comunes entre propietarios de restaurantes que trabajan
                mucho y no ven los resultados que merecen. No es falta de esfuerzo.
                Es falta de sistema.
              </p>
            </div>
            <div className="space-y-4">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 bg-cream-dark border border-grafito/8 rounded-xl p-5">
                  <CheckCircle size={20} className="text-amber mt-0.5 flex-shrink-0" />
                  <p className="font-body text-ink/75 text-base leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Cómo puedo ayudarte
            </p>
            <h2 className="font-display text-grafito text-4xl lg:text-5xl font-semibold leading-tight">
              Dos formas de trabajar juntos
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-grafito/10 rounded-xl p-8">
                <div className="mb-5">{s.icon}</div>
                <h3 className="font-display text-grafito text-xl font-semibold mb-3">{s.title}</h3>
                <p className="font-body text-ink/65 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 font-body text-sm text-grafito/60 hover:text-grafito transition-colors"
          >
            Ver todos los servicios con detalle <ArrowRight size={15} />
          </Link>

          {/* Herramienta destacada */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white border border-amber/40 rounded-xl p-6 lg:p-8">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-1">
                Herramienta gratuita
              </p>
              <p className="font-display text-grafito text-xl font-semibold">
                Calcula tu prime cost ahora
              </p>
              <p className="font-body text-ink/60 text-sm mt-1">
                Food cost, labour cost y prime cost en segundos, con interpretación incluida.
              </p>
            </div>
            <Link
              href="/herramientas/calculadora-prime-cost"
              className="inline-flex items-center gap-2 px-6 py-3 btn-amber text-grafito text-sm font-semibold tracking-wide flex-shrink-0"
            >
              Ir a la calculadora <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CASO REAL — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Resultado real
            </p>
            <h2 className="font-display text-grafito text-4xl lg:text-5xl font-semibold leading-tight">
              Un caso concreto
            </h2>
          </div>
          <div className="bg-cream-dark border border-grafito/10 rounded-xl p-8 lg:p-12 max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
              Restaurante · 60 cubiertos · España
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-body text-ink/40 text-xs uppercase tracking-widest mb-2">Antes</p>
                <p className="font-display text-grafito text-4xl font-bold mb-1">4%</p>
                <p className="font-body text-ink/60 text-sm leading-relaxed">
                  Margen neto. El restaurante estaba lleno casi todas las noches,
                  pero apenas quedaba nada a final de mes.
                </p>
              </div>
              <div>
                <p className="font-body text-amber text-xs uppercase tracking-widest mb-2">Después</p>
                <p className="font-display text-grafito text-4xl font-bold mb-1">11%</p>
                <p className="font-body text-ink/60 text-sm leading-relaxed italic">
                  Mismo volumen de ventas, misma sala. Reestructuración de costes,
                  carta y turnos de personal.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-grafito/10">
              <TrendingUp size={18} className="text-amber flex-shrink-0" />
              <p className="font-body text-ink/60 text-sm leading-relaxed">
                El problema no era el volumen. Era dónde se iba el margen sin que nadie lo viera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-grafito text-4xl lg:text-5xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            ¿Quieres saber dónde se escapa el margen en tu negocio?
          </h2>
          <p className="font-body text-ink/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Empieza con el diagnóstico gratuito o reserva una sesión de 20 minutos.
            Sin presión, sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-grafito text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Para propietarios — CTA final"
            >
              Empezar mi diagnóstico gratuito <ArrowRight size={15} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-grafito/60 hover:text-grafito transition-colors"
              eventName="calendly_click"
              eventLabel="Para propietarios — CTA final"
            >
              O reservar una sesión de 20 minutos →
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
