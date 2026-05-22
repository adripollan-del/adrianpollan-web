import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, CheckCircle, ClipboardList, ExternalLink, Lightbulb, Target, TrendingDown, Users, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Diagnóstico y Auditoría F&B para Restaurantes",
  description:
    "Análisis completo de tu operación: concepto, rentabilidad, equipo, procesos y experiencia del cliente. Identifica dónde actuar primero y por qué.",
  alternates: {
    canonical: "https://adrianpollan.com/servicios/auditoria-fb-restaurantes",
  },
  openGraph: {
    title: "Diagnóstico y Auditoría F&B para Restaurantes | Adrián Pollán",
    description:
      "Análisis completo de tu operación: concepto, rentabilidad, equipo, procesos y experiencia del cliente.",
    url: "https://adrianpollan.com/servicios/auditoria-fb-restaurantes",
  },
};

const forWhom = [
  "Restaurantes que venden bien pero no ganan lo que deberían",
  "Negocios con food cost descontrolado o márgenes que no cuadran",
  "Propietarios que no saben exactamente dónde se escapa el margen",
];

const includes = [
  "Mapa de dónde se escapa el margen, con datos reales de tu negocio",
  "Análisis de food cost real vs. teórico, prime cost y estructura de ingresos",
  "Evaluación de carta: qué vender más, qué eliminar, dónde ajustar precio",
  "Diagnóstico del equipo y sus dinámicas operativas",
  "Informe ejecutivo con las 3-5 palancas prioritarias y plan de acción concreto",
];

const cambios = [
  { icon: Target, text: "Sabes exactamente dónde se escapa el margen, con datos, no con intuición" },
  { icon: ClipboardList, text: "Tienes un orden de prioridades claro: qué mover primero y qué puede esperar" },
  { icon: Lightbulb, text: "Las decisiones que tomabas a ciegas tienen ahora fundamento" },
  { icon: Users, text: "Tu equipo y tú habláis el mismo idioma sobre los problemas reales" },
];

const indicadores = [
  "Food cost real vs. teórico",
  "Prime cost y ratio sobre ventas",
  "Ticket medio por servicio y cobertura",
  "Mezcla de ventas por categoría",
];

export default function AuditoriaFBPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
          alt="Análisis de datos y auditoría para restaurantes"
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
            <span className="text-amber">Diagnóstico y Auditoría F&B</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Servicio de consultoría
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Diagnóstico y<br />
              <span className="font-semibold">Auditoría F&B</span>
            </h1>
            <p className="font-body text-cream/65 text-xl leading-relaxed max-w-2xl">
              Antes de cambiar nada, hay que entender qué está pasando de verdad.
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
                ¿Reconoces tu situación?
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                El diagnóstico es para negocios que trabajan bien operativamente pero que
                no ven en los números lo que esperan. El problema rara vez está donde parece.
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
                Análisis completo de tu operación
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                No es una lista de recomendaciones genéricas. Es un análisis de tu negocio
                concreto: tus números, tu equipo, tu carta y tus procesos.
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
                Empieza con el checklist de food cost
              </p>
              <p className="font-body text-ink/60 text-sm mt-1">
                Evalúa si tienes implementados los sistemas básicos de control. 16 ítems en 4 bloques.
              </p>
            </div>
            <Link
              href="/herramientas/checklist-food-cost"
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
          <div className="max-w-3xl mb-14">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Qué cambia
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Qué cambia después de la auditoría
            </h2>
            <p className="font-body text-ink/65 text-lg leading-relaxed">
              No es un informe que lees una vez. Es una conversación que cambia cómo gestionas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {cambios.map(({ icon: Icon, text }, i) => (
              <div key={i} className="bg-cream-dark border border-navy/8 rounded-xl p-6 lg:p-8">
                <Icon size={28} className="text-amber mb-5" />
                <p className="font-body text-ink/75 text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDICADORES — crema oscuro ───────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Indicadores
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Indicadores que analizamos
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {indicadores.map((item, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded-xl p-6 flex flex-col gap-4">
                <div className="w-10 h-px bg-amber" />
                <p className="font-display text-navy text-base font-semibold leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ RECIBES — blanco ──────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Qué recibes al final
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-8">
              Un mapa de acción, no un informe
            </h2>
            <div className="bg-cream-dark border border-navy/10 rounded-xl p-8 lg:p-10">
              <TrendingDown size={32} className="text-amber mb-6" />
              <p className="font-body text-ink/70 text-lg leading-relaxed mb-6">
                Al final del diagnóstico tienes claridad sobre qué palancas mover primero y
                en qué orden. Qué tiene impacto inmediato, qué puede esperar y qué no merece
                la pena tocar ahora mismo.
              </p>
              <p className="font-body text-ink/55 text-base leading-relaxed">
                Sin informe de cien páginas que nadie lee. Sin recomendaciones vagas. Solo las
                cosas que importan, priorizadas con criterio y explicadas con honestidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

          {/* Callout: cuándo no tiene sentido */}
          <div className="max-w-3xl mx-auto mb-16 bg-white border border-navy/10 rounded-xl p-8 lg:p-10 text-left">
            <div className="flex items-center gap-3 mb-6">
              <XCircle size={22} className="text-amber" />
              <p className="font-body text-amber text-xs tracking-widest uppercase">
                Cuándo no tiene sentido
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="font-display text-amber font-semibold text-base flex-shrink-0">—</span>
                <p className="font-body text-ink/70 text-base leading-relaxed">
                  Si buscas que alguien te confirme lo que ya crees. El diagnóstico revela lo que hay, no lo que quieres oír.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-display text-amber font-semibold text-base flex-shrink-0">—</span>
                <p className="font-body text-ink/70 text-base leading-relaxed">
                  Si el negocio lleva menos de 3 meses abierto. No hay datos suficientes para trabajar con criterio.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-display text-amber font-semibold text-base flex-shrink-0">—</span>
                <p className="font-body text-ink/70 text-base leading-relaxed">
                  Si no estás dispuesto a compartir los números reales. Sin datos, no hay diagnóstico.
                </p>
              </li>
            </ul>
          </div>

          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            "A veces el mayor coste no está en la nómina ni en el food cost. Está en seguir sin saber qué arreglar."
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
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Auditoría F&B — CTA final"
            >
              Recibir Diagnóstico Gratuito <ExternalLink size={14} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
              eventName="calendly_click"
              eventLabel="Auditoría F&B — CTA final"
            >
              Reservar sesión gratuita →
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
