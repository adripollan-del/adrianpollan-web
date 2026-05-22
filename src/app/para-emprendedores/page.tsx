import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, Rocket, CheckCircle, AlertTriangle, TrendingDown } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Para Emprendedores que Quieren Abrir un Restaurante | Adrián Pollán" },
  description:
    "Acompañamiento para emprendedores que quieren abrir un restaurante con criterio. Evita los errores más costosos antes de comprometer tu inversión.",
  alternates: {
    canonical: "https://adrianpollan.com/para-emprendedores",
  },
  openGraph: {
    title: "Para Emprendedores que Quieren Abrir un Restaurante | Adrián Pollán",
    description:
      "Acompañamiento para emprendedores que quieren abrir un restaurante con criterio. Evita los errores más costosos antes de comprometer tu inversión.",
    url: "https://adrianpollan.com/para-emprendedores",
  },
};

const moments = [
  "Tienes el concepto en la cabeza pero no sabes si es realmente viable",
  "Estás buscando local y no sabes cómo evaluar si uno es bueno o una trampa",
  "Ya has firmado y quieres asegurarte de que todo lo demás lo haces bien",
  "Acabas de abrir y algo no está funcionando como esperabas",
];

export default function ParaEmprendedoresPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <Link href="/servicios" className="hover:text-amber transition-colors">Servicios</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Para emprendedores</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Para emprendedores
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Antes de firmar el local, hay decisiones<br />
              <span className="font-semibold">que conviene tomar con alguien que ya ha estado ahí.</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed max-w-2xl">
              Abrir un restaurante con ilusión no es suficiente. También lo hice yo.
              Lo que marca la diferencia es con qué criterio tomas cada decisión antes
              de que el dinero esté comprometido.
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
                ¿Dónde estás tú?
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                ¿Estás en alguno de estos momentos?
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                No importa en qué punto del proceso estés. Hay algo que hacer en
                cada etapa para reducir el riesgo y aumentar las probabilidades
                de que esto funcione.
              </p>
            </div>
            <div className="space-y-4">
              {moments.map((moment, i) => (
                <div key={i} className="flex items-start gap-4 bg-cream-dark border border-navy/8 rounded-xl p-5">
                  <CheckCircle size={20} className="text-amber mt-0.5 flex-shrink-0" />
                  <p className="font-body text-ink/75 text-base leading-relaxed">{moment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RIESGO — crema oscuro ─────────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Lo que nadie te dice
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Los errores más costosos se cometen antes de abrir
              </h2>
              <div className="space-y-5 font-body text-ink/70 text-base leading-relaxed">
                <p>
                  Una vez que has firmado el contrato de alquiler, comprometido
                  la inversión en obra y contratado al equipo, hay decisiones que
                  ya no se pueden deshacer. O son muy caras de deshacer.
                </p>
                <p>
                  La mayoría de los restaurantes que cierran en el primer año no
                  fallaron durante la operación. Fallaron en las decisiones previas:
                  el local equivocado, el concepto mal validado, los costes de
                  estructura mal calculados.
                </p>
                <p className="font-medium text-ink/90">
                  Acompañar una apertura antes de que el dinero esté comprometido
                  es la intervención con mayor retorno de inversión que existe en hostelería.
                </p>
              </div>
            </div>
            <div className="bg-white border border-navy/10 rounded-xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle size={20} className="text-amber flex-shrink-0" />
                <p className="font-body text-amber text-xs tracking-widest uppercase">
                  Decisiones críticas antes de abrir
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Validación real del concepto y del público objetivo",
                  "Análisis de viabilidad financiera del local",
                  "Estructura de costes fijos y punto de equilibrio",
                  "Diseño de carta y pricing con margen real",
                  "Plan de apertura y primeras semanas de operación",
                  "Procesos mínimos viables para el primer equipo",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-amber mt-0.5 font-display text-lg leading-none">—</span>
                    <span className="font-body text-ink/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIO — blanco ─────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Cómo puedo ayudarte
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Acompañamiento a aperturas
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-cream-dark border border-navy/10 rounded-xl p-8">
              <div className="mb-5">
                <Rocket size={36} className="text-amber" />
              </div>
              <h3 className="font-display text-navy text-xl font-semibold mb-3">
                Desde la validación hasta los primeros servicios
              </h3>
              <p className="font-body text-ink/65 text-sm leading-relaxed mb-6">
                Trabajo contigo desde que tienes el concepto hasta que el negocio está
                en marcha con los sistemas correctos. Evaluación del local, plan de negocio,
                diseño de operación, formación del equipo y seguimiento en los primeros meses.
              </p>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
              >
                Ver todos los servicios <ArrowRight size={15} />
              </Link>
            </div>
            <div className="space-y-5 font-body text-ink/65 text-base leading-relaxed pt-2">
              <p>
                El acompañamiento a aperturas no es un servicio estándar. Se adapta
                al punto en el que estás y a lo que necesitas resolver. Hay quien
                llega con un concepto y necesita validarlo; hay quien ya ha firmado
                y necesita estructurar la operación.
              </p>
              <p>
                Lo que es común en todos los casos es que el trabajo más valioso
                se hace antes de que el dinero esté comprometido. Cuanto antes
                empieza el acompañamiento, más impacto tiene.
              </p>
            </div>
          </div>

          {/* Herramienta destacada */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 bg-cream-dark border border-amber/40 rounded-xl p-6 lg:p-8">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-1">
                Herramienta gratuita
              </p>
              <p className="font-display text-navy text-xl font-semibold">
                Descarga el checklist de apertura gratuito
              </p>
              <p className="font-body text-ink/60 text-sm mt-1">
                24 puntos clave para abrir tu restaurante con criterio.
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

      {/* ── CASO REAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Resultado real
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Un caso concreto
            </h2>
          </div>
          <div className="bg-white border border-navy/10 rounded-xl p-8 lg:p-12 max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
              Emprendedor · Primera apertura · España
            </p>
            <p className="font-body text-ink/70 text-base leading-relaxed mb-8">
              Un emprendedor estaba a punto de firmar un local que le parecía perfecto.
              Buena zona, buenas condiciones aparentes, ilusión máxima. Antes de firmar,
              hicimos juntos el análisis de viabilidad real del espacio.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-body text-ink/40 text-xs uppercase tracking-widest mb-2">Sin análisis</p>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown size={20} className="text-red-400 flex-shrink-0" />
                  <p className="font-display text-navy text-2xl font-bold">Local firmado</p>
                </div>
                <p className="font-body text-ink/60 text-sm leading-relaxed">
                  El coste de alquiler representaba más del 18% de las ventas proyectadas.
                  Un punto de partida inviable.
                </p>
              </div>
              <div>
                <p className="font-body text-amber text-xs uppercase tracking-widest mb-2">Con análisis</p>
                <p className="font-display text-navy text-4xl font-bold mb-1">–30%</p>
                <p className="font-body text-ink/60 text-sm leading-relaxed italic">
                  No firmó. Encontró otro local con condiciones viables.
                  Ahorró el 30% en coste de alquiler desde el primer mes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-navy/10">
              <CheckCircle size={18} className="text-amber flex-shrink-0" />
              <p className="font-body text-ink/60 text-sm leading-relaxed">
                A veces el mejor consejo es no hacer algo. Eso también es parte del trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            ¿Quieres abrir con criterio y sin los errores más costosos?
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
              eventLabel="Para emprendedores — CTA final"
            >
              Recibir Diagnóstico Gratuito <ArrowRight size={15} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
              eventName="calendly_click"
              eventLabel="Para emprendedores — CTA final"
            >
              Reservar sesión gratuita →
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
