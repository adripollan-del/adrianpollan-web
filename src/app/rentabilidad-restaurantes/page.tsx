import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Rentabilidad de Restaurantes | Guía Completa | Adrián Pollán" },
  description:
    "Guía completa sobre rentabilidad en restaurantes: food cost, prime cost, labour cost, escandallo y margen por plato. Con herramientas gratuitas y diagnóstico online.",
  alternates: { canonical: "https://adrianpollan.com/rentabilidad-restaurantes" },
  openGraph: {
    title: "Rentabilidad de Restaurantes | Guía Completa | Adrián Pollán",
    description:
      "Aprende a mejorar la rentabilidad de tu restaurante. Food cost, prime cost, labour cost, carta rentable y control de costes. Guía práctica basada en experiencia real.",
    url: "https://adrianpollan.com/rentabilidad-restaurantes",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://adrianpollan.com" },
    { "@type": "ListItem", position: 2, name: "Rentabilidad de restaurantes", item: "https://adrianpollan.com/rentabilidad-restaurantes" },
  ],
};

const clusterArticles = [
  {
    slug: "como-calcular-el-food-cost-de-tu-restaurante",
    title: "Cómo calcular el food cost paso a paso",
    readTime: "8 min",
  },
  {
    slug: "que-es-un-escandallo-y-por-que-lo-necesitas",
    title: "Qué es un escandallo y por qué lo necesitas",
    readTime: "9 min",
  },
  {
    slug: "labour-cost-en-hosteleria-cuanto-gastar-en-personal",
    title: "Labour cost: cuánto deberías gastar en personal",
    readTime: "9 min",
  },
  {
    slug: "que-es-el-prime-cost-y-por-que-es-el-indicador-mas-importante",
    title: "Qué es el prime cost y por qué es el indicador más importante",
    readTime: "9 min",
  },
  {
    slug: "como-mejorar-el-margen-de-un-restaurante-sin-subir-precios",
    title: "Cómo mejorar el margen sin subir precios",
    readTime: "8 min",
  },
  {
    slug: "como-disenar-una-carta-de-restaurante-rentable",
    title: "Cómo diseñar una carta de restaurante rentable",
    readTime: "9 min",
  },
  {
    slug: "por-que-tu-restaurante-no-es-rentable-aunque-este-lleno",
    title: "Por qué tu restaurante no es rentable aunque esté lleno",
    readTime: "8 min",
  },
  {
    slug: "como-reducir-desperdicio-alimentario-restaurante",
    title: "Cómo reducir el desperdicio alimentario en un restaurante",
    readTime: "8 min",
  },
];

const concepts = [
  {
    title: "Food cost",
    slug: "como-calcular-el-food-cost-de-tu-restaurante",
    summary:
      "(Consumo real / Ventas) × 100. Sostenible entre el 28% y el 35% en restauración a la carta. Por encima del 40% de forma sostenida, hay un problema que resolver.",
    metric: "28–35%",
    metricLabel: "rango sostenible a la carta",
  },
  {
    title: "Prime cost",
    slug: "que-es-el-prime-cost-y-por-que-es-el-indicador-mas-importante",
    summary:
      "(Coste de materia prima + Coste de personal) / Ventas × 100. Por debajo del 65% en un restaurante de servicio completo. Por encima, queda muy poco margen para el resto de gastos.",
    metric: "<65%",
    metricLabel: "referencia para restaurante a la carta",
  },
  {
    title: "Labour cost",
    slug: "labour-cost-en-hosteleria-cuanto-gastar-en-personal",
    summary:
      "(Coste total de personal / Ventas) × 100. Entre el 28% y el 35% en restauración a la carta. Por encima del 40% sostenido, es un problema estructural que no se arregla trabajando más horas.",
    metric: "28–35%",
    metricLabel: "rango sostenible a la carta",
  },
  {
    title: "Escandallo y mermas",
    slug: "que-es-un-escandallo-y-por-que-lo-necesitas",
    summary:
      "Las mermas mal controladas representan entre el 3% y el 8% del coste de materia prima. En un restaurante que gasta 10.000 € al mes en producto, son entre 300 y 800 € que se van a la basura cada mes.",
    metric: "3–8%",
    metricLabel: "del coste de materia prima",
  },
  {
    title: "Margen por plato",
    slug: "como-mejorar-el-margen-de-un-restaurante-sin-subir-precios",
    summary:
      "La ingeniería de menú clasifica cada plato en una matriz de popularidad y margen: estrella (popular y rentable), caballo de batalla (popular, poco rentable), puzzle (rentable, poco popular) y perro (ni una cosa ni la otra, hay que eliminarlo).",
    metric: null,
    metricLabel: null,
  },
  {
    title: "Carta rentable",
    slug: "como-disenar-una-carta-de-restaurante-rentable",
    summary:
      "Una carta más corta, bien escandallada y con la mezcla de ventas trabajada, mejora el margen sin tocar un solo precio.",
    metric: null,
    metricLabel: null,
  },
];

const faqs = [
  {
    question: "¿Cuál es un buen margen neto para un restaurante?",
    answer:
      "Entre el 6% y el 12%, según mi experiencia en cuatro países. Por debajo del 5% de forma sostenida, el negocio está en riesgo aunque la ocupación sea buena.",
  },
  {
    question: "¿Qué diferencia hay entre food cost y prime cost?",
    answer:
      "El food cost mide solo el coste de materia prima. El prime cost suma materia prima y personal, y es el indicador más completo porque entre ambos se va entre el 55% y el 70% de cada euro que factura un restaurante.",
  },
  {
    question: "¿Por qué mi restaurante está lleno y aun así no gana dinero?",
    answer:
      "Casi siempre porque el prime cost o el labour cost están descontrolados sin que nadie los esté midiendo semana a semana. La ocupación resuelve el problema de ventas, no el de estructura de costes.",
  },
  {
    question: "¿Cada cuánto debo revisar la rentabilidad de mi restaurante?",
    answer:
      "Cada semana, no a fin de mes. Cuando el dato llega treinta días tarde, el problema ya lleva un mes comiéndose el margen.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function RentabilidadRestaurantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-grafito pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grafito/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Rentabilidad de restaurantes</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Guía completa
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Rentabilidad de restaurantes:<br />
              <span className="font-semibold">guía completa para mejorar tu margen</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed max-w-2xl">
              Llenar el restaurante no es suficiente. La diferencia entre un negocio
              rentable y uno que sobrevive está en cómo se gestionan los costes,
              la carta y el equipo. Aquí están los conceptos que importan, explicados
              desde la operativa real.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO — blanco ────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-grafito text-3xl lg:text-4xl font-semibold leading-tight mb-6">
              Por qué tantos restaurantes ocupados no son rentables
            </h2>
            <p className="font-body text-ink/65 text-lg leading-relaxed mb-5">
              En más de veinte años trabajando en hostelería en cuatro países, he visto
              el mismo patrón repetirse: negocios con buena ocupación, equipo trabajador
              y clientes satisfechos que a fin de mes no generan el beneficio que deberían,
              o directamente no cuadran.
            </p>
            <p className="font-body text-ink/65 text-lg leading-relaxed mb-5">
              El problema casi nunca es la falta de clientes. Es la estructura de costes,
              una carta que no tiene en cuenta los márgenes, un food cost que nadie mide
              con precisión, o un coste de personal que crece sin control a medida que
              crece el volumen.
            </p>
            <p className="font-body text-ink/65 text-lg leading-relaxed">
              La rentabilidad de un restaurante se construye gestionando bien seis variables
              clave. Aquí explico cada una y te enlazo a los artículos donde profundizo
              en cada concepto.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES Y CÓMO SE CALCULA — crema oscuro ─────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              La base
            </p>
            <h2 className="font-display text-grafito text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              ¿Qué es la rentabilidad de un restaurante y cómo se calcula?
            </h2>
            <p className="font-body text-ink/65 text-lg leading-relaxed mb-5">
              La rentabilidad de un restaurante se mide en dos niveles que conviene no confundir. El <strong>margen bruto</strong> es lo que te queda después de descontar solo el coste de la materia prima: <strong>(Ventas − Coste de materia prima) / Ventas × 100</strong>. El <strong>margen neto</strong> es lo que de verdad te llevas a casa, después de descontar también personal, alquiler, suministros, impuestos y el resto de costes fijos: <strong>Beneficio neto / Ventas × 100</strong>.
            </p>
            <p className="font-body text-ink/65 text-lg leading-relaxed mb-5">
              El margen bruto te dice si tu carta y tus escandallos están bien construidos. El margen neto te dice si el negocio, en conjunto, es viable. Puedes tener un margen bruto excelente y un margen neto que no da para vivir, si tu estructura de costes fijos está mal dimensionada para el volumen que haces.
            </p>
            <p className="font-body text-ink/65 text-lg leading-relaxed">
              En más de veinte años viendo cuentas de explotación de restaurantes en cuatro países, mi criterio es este: un restaurante bien gestionado se mueve entre el 6% y el 12% de margen neto. Por debajo del 5% de forma sostenida, aunque el local esté lleno cada noche, el negocio está en una posición frágil. No es un número mágico ni universal, pero es la referencia con la que trabajo cuando entro a diagnosticar un negocio.
            </p>
          </div>
        </div>
      </section>

      {/* ── UMBRAL DE RENTABILIDAD — blanco ───────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              El punto de partida
            </p>
            <h2 className="font-display text-grafito text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              El umbral de rentabilidad: la pregunta que casi nadie se hace
            </h2>
            <p className="font-body text-ink/65 text-lg leading-relaxed mb-5">
              Antes de hablar de mejorar el margen, hay una pregunta más básica que la mayoría de propietarios no ha respondido nunca: ¿cuánto tengo que facturar cada mes solo para no perder dinero? Esa cifra es tu punto de equilibrio, y se calcula así:
            </p>
            <p className="font-body text-grafito text-xl font-semibold leading-relaxed mb-5">
              Punto de equilibrio = Costes fijos / (1 − % coste variable)
            </p>
            <p className="font-body text-ink/65 text-lg leading-relaxed mb-5">
              Por ejemplo, con 18.000 € de costes fijos mensuales y un 62% de coste variable sobre ventas, el punto de equilibrio está en unos 47.000 € facturados al mes. Cualquier euro por debajo de esa cifra es pérdida; cualquier euro por encima empieza a ser beneficio real.
            </p>
            <p className="font-body text-ink/65 text-lg leading-relaxed">
              Es la cifra que menos propietarios conocen y la que más cambia la forma de gestionar el día a día. Si quieres el desarrollo completo, con los errores más frecuentes al calcularlo, tienes el artículo dedicado: <Link href="/blog/como-calcular-punto-equilibrio-restaurante" className="text-amber hover:text-amber/80 transition-colors">cómo calcular el punto de equilibrio de tu restaurante</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONCEPTOS CLAVE — crema oscuro ────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Las palancas
            </p>
            <h2 className="font-display text-grafito text-4xl lg:text-5xl font-semibold leading-tight">
              Las seis palancas que mueven la rentabilidad
            </h2>
          </div>

          <div className="space-y-6">
            {concepts.map((c, i) => (
              <div key={i} className="bg-white border border-grafito/10 rounded-xl p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-display text-amber/30 text-3xl font-light leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-grafito text-2xl font-semibold">{c.title}</h3>
                    </div>
                    <p className="font-body text-ink/65 text-base leading-relaxed mb-5">{c.summary}</p>
                    <Link
                      href={`/blog/${c.slug}`}
                      className="inline-flex items-center gap-2 font-body text-sm text-amber hover:text-amber/80 transition-colors"
                    >
                      Leer el artículo completo <ArrowRight size={14} />
                    </Link>
                  </div>
                  {c.metric && (
                    <div className="lg:col-span-4 bg-cream-dark border border-grafito/10 rounded-lg p-6 text-center">
                      <p className="font-display text-grafito text-4xl font-bold mb-1">{c.metric}</p>
                      <p className="font-body text-ink/50 text-xs leading-relaxed">{c.metricLabel}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS DEL CLUSTER — blanco ────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Profundiza en cada concepto
            </p>
            <h2 className="font-display text-grafito text-4xl lg:text-5xl font-semibold leading-tight">
              Artículos relacionados
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clusterArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group flex flex-col justify-between bg-cream-dark border border-grafito/10 rounded-xl p-6 hover:border-amber/40 transition-colors"
              >
                <div>
                  <p className="font-body text-amber/70 text-xs uppercase tracking-wide mb-2">
                    {a.readTime}
                  </p>
                  <h3 className="font-display text-grafito text-base font-semibold leading-snug mb-4 group-hover:text-amber transition-colors">
                    {a.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 font-body text-xs text-amber">
                  Leer <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — blanco ───────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32 border-t border-grafito/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Preguntas frecuentes
            </p>
            <h2 className="font-display text-grafito text-4xl lg:text-5xl font-semibold leading-tight">
              Preguntas sobre rentabilidad de restaurantes
            </h2>
          </div>
          <div className="max-w-3xl space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-grafito/10 pb-8 last:border-0">
                <h3 className="font-display text-grafito text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="font-body text-ink/65 text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-grafito text-4xl lg:text-5xl font-semibold leading-tight mb-5">
              ¿Qué está fallando en la rentabilidad de tu restaurante?
            </h2>
            <p className="font-body text-ink/60 text-lg leading-relaxed mb-10">
              El diagnóstico gratuito analiza tu estructura de costes, carta y operación
              en diez minutos. Sabrás exactamente qué palancas activar primero.
            </p>
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-grafito text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Rentabilidad restaurantes — CTA final"
            >
              Empezar mi diagnóstico gratuito <ArrowRight size={15} />
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
