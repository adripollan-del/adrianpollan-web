import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, TrendingDown, Users, BookOpen, Star } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Consultoría F&B para Hoteles | Adrián Pollán" },
  description:
    "Consultoría especializada en F&B para hoteles. Rentabilidad, operaciones, costes y gestión de restauración hotelera. Experiencia en propiedades de lujo y boutique.",
  alternates: { canonical: "https://adrianpollan.com/consultoria-fb-hoteles" },
  openGraph: {
    title: "Consultoría F&B para Hoteles | Adrián Pollán",
    description:
      "Consultoría especializada en F&B para hoteles. Rentabilidad, operaciones, costes y gestión de restauración hotelera. Experiencia en propiedades de lujo y boutique.",
    url: "https://adrianpollan.com/consultoria-fb-hoteles",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://adrianpollan.com" },
    { "@type": "ListItem", position: 2, name: "Consultoría F&B para hoteles", item: "https://adrianpollan.com/consultoria-fb-hoteles" },
  ],
};

const problems = [
  {
    icon: <TrendingDown size={28} className="text-amber" />,
    title: "El F&B funciona como centro de coste, no como activo",
    body: "En muchos hoteles el restaurante existe porque tiene que existir, no porque sea rentable. Se gestiona para no perder demasiado en lugar de para generar beneficio real. Con la estructura correcta, el F&B puede ser un diferenciador y un generador de margen.",
  },
  {
    icon: <Users size={28} className="text-amber" />,
    title: "Equipos sin estructura ni autonomía",
    body: "Los departamentos de F&B en hoteles suelen tener mucho volumen de trabajo y poca claridad en roles, responsabilidades y procesos. El resultado es dependencia total del responsable, inconsistencia en el servicio y alta rotación de personal.",
  },
  {
    icon: <BookOpen size={28} className="text-amber" />,
    title: "Carta sin criterio de margen",
    body: "La oferta gastronómica del hotel rara vez se diseña desde los números. Se lanza pensando en la imagen o en lo que hace la competencia, sin escandallos reales, sin análisis de mix de ventas y sin una estrategia de pricing que dé margen sostenible.",
  },
  {
    icon: <Star size={28} className="text-amber" />,
    title: "Experiencia de cliente inconsistente",
    body: "En el F&B hotelero la consistencia es especialmente crítica: el cliente que desayuna, come y cena en el hotel espera el mismo nivel en cada punto de contacto. Cuando eso no ocurre, impacta directamente en las valoraciones y en la repetición.",
  },
];

const approach = [
  {
    title: "Auditoría de rentabilidad F&B",
    body: "Análisis completo de costes de materia prima, personal y operación por punto de venta. Identificamos dónde se pierde margen y qué ajustes tienen impacto inmediato.",
  },
  {
    title: "Diseño de oferta gastronómica",
    body: "Revisión o creación de la carta con criterio de margen, coherencia con el concepto del hotel y adaptación al perfil del huésped. Incluye escandallos, pricing y formación al equipo de sala.",
  },
  {
    title: "Estructura de equipo y procesos",
    body: "Definición de roles, responsabilidades y protocolos operativos para que el departamento funcione con consistencia y sin depender de una sola persona.",
  },
  {
    title: "Seguimiento y KPIs",
    body: "Implantación de un cuadro de mando con los indicadores clave del F&B: food cost, labour cost, RevPASH, ticket medio y satisfacción. Revisión periódica para ajustar y mejorar.",
  },
];

export default function ConsultoriaFbHotelesPage() {
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
            <span className="text-amber">Consultoría F&amp;B para hoteles</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Especialización hotelera
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Consultoría F&amp;B para hoteles:<br />
              <span className="font-semibold">rentabilidad y operaciones</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed max-w-2xl">
              El F&amp;B hotelero tiene su propia lógica. He trabajado en propiedades
              de distintos tamaños y categorías en cuatro países. Sé lo que diferencia
              un departamento de F&amp;B que genera valor de uno que simplemente existe.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROBLEMAS FRECUENTES — blanco ─────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Lo que suelo encontrar
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Los problemas más frecuentes en el F&amp;B hotelero
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="bg-cream-dark border border-navy/10 rounded-xl p-8">
                <div className="mb-4">{p.icon}</div>
                <h3 className="font-display text-navy text-xl font-semibold mb-3 leading-snug">{p.title}</h3>
                <p className="font-body text-ink/65 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO LO ABORDAMOS — crema oscuro ─────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              El enfoque
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Cómo abordo la consultoría F&amp;B en hoteles
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {approach.map((a, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded-xl p-8">
                <span className="font-display text-4xl font-light text-amber/25 block mb-4 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-navy text-xl font-semibold mb-3">{a.title}</h3>
                <p className="font-body text-ink/65 text-sm leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
            >
              Ver todos los servicios disponibles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            ¿Tu F&amp;B podría generar más valor para el hotel?
          </h2>
          <p className="font-body text-ink/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Empieza con el diagnóstico gratuito o reserva una sesión para hablar
            de la situación concreta de tu propiedad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Consultoría F&B hoteles — CTA final"
            >
              Recibir Diagnóstico Gratuito <ArrowRight size={15} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
              eventName="calendly_click"
              eventLabel="Consultoría F&B hoteles — CTA final"
            >
              O reservar una sesión de 20 minutos →
            </TrackingLink>
          </div>
          <p className="font-body text-ink/40 text-xs mt-8">
            ¿Prefieres escribir primero?{" "}
            <Link href="/hablemos" className="underline hover:text-ink/70 transition-colors">
              Contacta desde aquí
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
