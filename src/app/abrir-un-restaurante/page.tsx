import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Cómo Abrir un Restaurante | Guía Paso a Paso | Adrián Pollán" },
  description:
    "Guía práctica para abrir un restaurante con criterio. Concepto, inversión, local, carta, equipo y errores que evitar. Basada en experiencia real en aperturas.",
  alternates: { canonical: "https://adrianpollan.com/abrir-un-restaurante" },
  openGraph: {
    title: "Cómo Abrir un Restaurante | Guía Paso a Paso | Adrián Pollán",
    description:
      "Guía práctica para abrir un restaurante con criterio. Concepto, inversión, local, carta, equipo y errores que evitar. Basada en experiencia real en aperturas.",
    url: "https://adrianpollan.com/abrir-un-restaurante",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://adrianpollan.com" },
    { "@type": "ListItem", position: 2, name: "Cómo abrir un restaurante", item: "https://adrianpollan.com/abrir-un-restaurante" },
  ],
};

const clusterArticles = [
  {
    slug: "los-10-errores-que-matan-una-apertura",
    title: "Los 10 errores que matan una apertura antes de los 6 meses",
    excerpt:
      "Los errores más costosos en una apertura se cometen antes de abrir. Aquí están los diez patrones que se repiten y cómo evitarlos.",
    readTime: "10 min",
  },
];

const phases = [
  {
    num: "01",
    title: "Validación del concepto",
    body: "Antes de buscar local, el concepto tiene que responder tres preguntas: ¿para quién es?, ¿qué lo diferencia de lo que ya existe?, ¿tiene viabilidad económica con los márgenes reales del sector? Un concepto mal definido no se arregla con marketing.",
  },
  {
    num: "02",
    title: "Selección del local",
    body: "El local no es solo metros cuadrados y precio de alquiler. Es la ubicación, el tráfico peatonal, el perfil del vecindario, la distribución interior, la carga eléctrica, la ventilación y las licencias necesarias. Cada uno de estos factores puede multiplicar o destruir la inversión.",
  },
  {
    num: "03",
    title: "Plan de inversión realista",
    body: "La mayoría de las aperturas se quedan sin liquidez antes de alcanzar velocidad de crucero. El error más frecuente: subestimar la inversión y sobreestimar los ingresos de los primeros meses. La regla que aplico: calcula la inversión, auméntala un 20%, y asegúrate de tener capital para aguantar seis meses sin beneficio.",
  },
  {
    num: "04",
    title: "Carta y escandallos",
    body: "La carta tiene que estar diseñada antes de abrir, con escandallos reales y precios que generen margen desde el día uno. No se ajusta después: si abres con un food cost del 40%, lo que consigues ajustando después no compensa lo que perdiste al principio.",
  },
  {
    num: "05",
    title: "Selección y formación del equipo",
    body: "El equipo de apertura marca el tono del negocio durante meses. El proceso de selección, el periodo de formación y los primeros servicios antes de abrir al público son decisivos. Un equipo mal formado en el arranque genera problemas que se tardan meses en corregir.",
  },
  {
    num: "06",
    title: "Primeros servicios y ajuste operativo",
    body: "Los primeros meses son de aprendizaje. Los indicadores que hay que medir desde el primer día: ticket medio, cobertura, food cost real vs. teórico, y feedback del cliente. Los ajustes rápidos en esta fase ahorran meses de pérdidas.",
  },
];

const errors = [
  "Subestimar el tiempo y el coste de la reforma del local",
  "Abrir sin haber formado al equipo en servicio real",
  "Lanzar una carta demasiado amplia que sube el food cost y baja la calidad",
  "No tener sistemas de control desde el día uno (escandallos, inventarios, cierres de caja)",
  "Calcular la rentabilidad con las ventas del mejor mes, no con la media real",
  "Depender de un solo perfil clave que si se va paraliza el negocio",
];

export default function AbrirUnRestaurantePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Cómo abrir un restaurante</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Guía para emprendedores
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Cómo abrir un restaurante:<br />
              <span className="font-semibold">todo lo que necesitas saber antes de empezar</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed max-w-2xl">
              He acompañado aperturas en España, Francia, Reino Unido e Irlanda. Los errores
              que cierran negocios en el primer año no son imprevisibles — casi siempre
              son los mismos y casi siempre se pueden evitar.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO — blanco ────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-6">
              La mayoría de aperturas fracasan por razones evitables
            </h2>
            <p className="font-body text-ink/65 text-lg leading-relaxed mb-5">
              Abrir un restaurante requiere una inversión económica importante, mucha energía
              y la capacidad de gestionar decenas de decisiones simultáneas bajo presión.
              Lo que no se dice suficiente es que la mayoría de los problemas que llevan
              al cierre prematuro se originan antes de abrir la puerta al público.
            </p>
            <p className="font-body text-ink/65 text-lg leading-relaxed">
              Esta guía recorre las seis fases clave de una apertura y los errores más
              frecuentes en cada una. No es teoría: es lo que he visto funcionar y fallar
              en proyectos reales.
            </p>
          </div>
        </div>
      </section>

      {/* ── FASES — crema oscuro ──────────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              El proceso
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Las seis fases de una apertura con criterio
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {phases.map((p) => (
              <div key={p.num} className="bg-white border border-navy/10 rounded-xl p-8">
                <span className="font-display text-5xl font-light text-amber/25 block mb-4 leading-none">
                  {p.num}
                </span>
                <h3 className="font-display text-navy text-xl font-semibold mb-3">{p.title}</h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ERRORES — blanco ──────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Lo que hay que evitar
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Los errores más frecuentes al abrir un restaurante
              </h2>
              <p className="font-body text-ink/65 text-base leading-relaxed mb-8">
                Estos son los patrones que veo repetirse. Todos son evitables con
                planificación y con alguien que los haya visto antes.
              </p>
              <div className="space-y-4">
                {errors.map((e, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle size={16} className="text-amber mt-0.5 flex-shrink-0" />
                    <p className="font-body text-ink/70 text-sm leading-relaxed">{e}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/errores-mas-comunes-al-abrir-un-restaurante"
                  className="inline-flex items-center gap-2 font-body text-sm text-amber hover:text-amber/80 transition-colors"
                >
                  Artículo: errores comunes al abrir <ArrowRight size={14} />
                </Link>
                <Link
                  href="/blog/los-10-errores-que-matan-una-apertura"
                  className="inline-flex items-center gap-2 font-body text-sm text-amber hover:text-amber/80 transition-colors"
                >
                  Artículo: los 10 errores que matan una apertura <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Servicio de acompañamiento */}
            <div className="bg-cream-dark border border-navy/10 rounded-xl p-8 lg:p-10">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Acompañamiento a aperturas
              </p>
              <h3 className="font-display text-navy text-2xl font-semibold mb-4 leading-snug">
                Si vas a abrir, cuanto antes empieces a planificarlo bien, más impacto tendrá
              </h3>
              <p className="font-body text-ink/65 text-sm leading-relaxed mb-6">
                Trabajo contigo desde la fase de concepto hasta los primeros meses de
                operación. El objetivo es que el negocio arranque con la estructura
                correcta: márgenes sanos, equipo formado y sistemas que funcionen
                sin que tengas que estar en todo.
              </p>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 font-body text-sm text-navy/70 hover:text-navy transition-colors"
              >
                Ver el servicio de acompañamiento a aperturas <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS DEL CLUSTER — crema oscuro ─────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Profundiza en el tema
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Artículos relacionados
            </h2>
          </div>
          <div className="max-w-2xl">
            {clusterArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group flex flex-col bg-white border border-navy/10 rounded-xl p-8 hover:border-amber/40 transition-colors"
              >
                <p className="font-body text-amber/70 text-xs uppercase tracking-wide mb-3">
                  {a.readTime} de lectura
                </p>
                <h3 className="font-display text-navy text-xl font-semibold leading-snug mb-3 group-hover:text-amber transition-colors">
                  {a.title}
                </h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed mb-5">{a.excerpt}</p>
                <span className="inline-flex items-center gap-2 font-body text-sm text-amber">
                  Leer el artículo <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            ¿Estás pensando en abrir un restaurante?
          </h2>
          <p className="font-body text-ink/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            El diagnóstico gratuito te ayuda a identificar qué has considerado y qué
            se te puede estar escapando antes de comprometer tu inversión.
          </p>
          <TrackingLink
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="diagnostico_click"
            eventLabel="Abrir un restaurante — CTA final"
          >
            Recibir Diagnóstico Gratuito <ArrowRight size={15} />
          </TrackingLink>
          <p className="font-body text-ink/40 text-xs mt-8">
            ¿Prefieres hablar directamente?{" "}
            <Link href="/hablemos" className="underline hover:text-ink/70 transition-colors">
              Escríbeme o reserva una sesión
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
