import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Rentabilidad de Restaurantes | Guía Completa | Adrián Pollán",
  description:
    "Aprende a mejorar la rentabilidad de tu restaurante. Food cost, prime cost, labour cost, carta rentable y control de costes. Guía práctica basada en experiencia real.",
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

const concepts = [
  {
    title: "Food cost",
    slug: "como-calcular-el-food-cost-de-tu-restaurante",
    summary:
      "El porcentaje de tus ingresos que se va en materia prima. El estándar saludable en un restaurante a la carta está entre el 28% y el 32%. Por encima de eso, o tienes un problema de compras, o de mermas, o de precios mal calculados.",
    metric: "28–32%",
    metricLabel: "rango saludable",
  },
  {
    title: "Prime cost",
    slug: "que-es-el-prime-cost-y-por-que-es-el-indicador-mas-importante",
    summary:
      "La suma de food cost y labour cost expresada como porcentaje de ventas. Es el indicador más completo de eficiencia operativa. Un prime cost por encima del 65% en un restaurante de servicio completo es una señal de alerta.",
    metric: "<65%",
    metricLabel: "referencia para restaurante a la carta",
  },
  {
    title: "Labour cost",
    slug: "labour-cost-en-hosteleria-cuanto-gastar-en-personal",
    summary:
      "El coste total del equipo — salarios, seguridad social, extras — como porcentaje de ventas. Entre el 30% y el 38% es el rango habitual. Más del 40% sin una justificación operativa clara es insostenible a medio plazo.",
    metric: "30–38%",
    metricLabel: "rango operativo habitual",
  },
  {
    title: "Escandallo y mermas",
    slug: "que-es-un-escandallo-y-por-que-lo-necesitas",
    summary:
      "El escandallo es el cálculo exacto del coste de cada plato, incluyendo las mermas de transformación. Sin escandallos actualizados, no sabes realmente cuánto cuesta lo que vendes. Y si no lo sabes, no puedes poner el precio correcto.",
    metric: null,
    metricLabel: null,
  },
  {
    title: "Margen por plato",
    slug: "como-mejorar-el-margen-de-un-restaurante-sin-subir-precios",
    summary:
      "No todos los platos dejan el mismo margen. La ingeniería de menú consiste en entender qué te compran más y qué deja más dinero, y usar esa información para diseñar la carta y entrenar al equipo para vender mejor.",
    metric: null,
    metricLabel: null,
  },
  {
    title: "Carta rentable",
    slug: "como-disenar-una-carta-de-restaurante-rentable",
    summary:
      "La carta es la herramienta comercial más importante de un restaurante. Su diseño, extensión, estructura de precios y presentación tienen un impacto directo en el ticket medio y en el food cost. Una carta mal diseñada cuesta dinero cada día.",
    metric: null,
    metricLabel: null,
  },
];

export default function RentabilidadRestaurantesPage() {
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
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-6">
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

      {/* ── CONCEPTOS CLAVE — crema oscuro ────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Los indicadores que importan
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Los seis conceptos clave de rentabilidad
            </h2>
          </div>

          <div className="space-y-6">
            {concepts.map((c, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded-xl p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-display text-amber/30 text-3xl font-light leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-navy text-2xl font-semibold">{c.title}</h3>
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
                    <div className="lg:col-span-4 bg-cream-dark border border-navy/10 rounded-lg p-6 text-center">
                      <p className="font-display text-navy text-4xl font-bold mb-1">{c.metric}</p>
                      <p className="font-body text-ink/50 text-xs leading-relaxed">{c.metricLabel}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-5">
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
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Rentabilidad restaurantes — CTA final"
            >
              Recibir Diagnóstico Gratuito <ArrowRight size={15} />
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
