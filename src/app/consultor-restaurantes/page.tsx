import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, Search, LineChart, Rocket, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Consultor de Restaurantes y Hostelería | Rentabilidad y Gestión | Adrián Pollán" },
  description:
    "Consultor de restaurantes especializado en rentabilidad, control de costes y gestión operativa. Diagnóstico gratuito disponible. 20+ años de experiencia real en hostelería.",
  alternates: { canonical: "https://adrianpollan.com/consultor-restaurantes" },
  openGraph: {
    title: "Consultor de Restaurantes | Adrián Pollán",
    description:
      "Consultor especializado en restaurantes y negocios de hostelería. Más de 20 años de experiencia operativa en España, Francia, Reino Unido e Irlanda.",
    url: "https://adrianpollan.com/consultor-restaurantes",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Adrián Pollán — Consultor de Restaurantes",
  description:
    "Consultor especializado en restaurantes y negocios de hostelería con más de 20 años de experiencia operativa en España, Francia, Reino Unido e Irlanda.",
  url: "https://adrianpollan.com/consultor-restaurantes",
  areaServed: ["España", "Francia", "Reino Unido", "Irlanda"],
  serviceType: "Consultoría de hostelería y restauración",
  provider: {
    "@type": "Person",
    name: "Adrián Pollán",
    jobTitle: "Consultor de restaurantes y hostelería",
    url: "https://adrianpollan.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://adrianpollan.com" },
    { "@type": "ListItem", position: 2, name: "Consultor de restaurantes", item: "https://adrianpollan.com/consultor-restaurantes" },
  ],
};

const services = [
  {
    icon: <Search size={36} className="text-amber" />,
    title: "Diagnóstico y auditoría F&B",
    body: "Análisis completo de rentabilidad, estructura de costes, carta y operación. En días tienes un mapa claro de dónde está el problema y qué hacer primero.",
  },
  {
    icon: <LineChart size={36} className="text-amber" />,
    title: "Consultoría operativa continuada",
    body: "Acompañamiento mensual para negocios que quieren mejorar resultados de forma sistemática: food cost, labour cost, equipo, sistemas y procesos.",
  },
  {
    icon: <Rocket size={36} className="text-amber" />,
    title: "Acompañamiento a aperturas",
    body: "Desde la validación del concepto hasta los primeros servicios. Evita los errores que cierran negocios en el primer año y arranca con los sistemas correctos desde el día uno.",
  },
];

const forWhom = [
  "Restaurantes independientes que no consiguen rentabilizar el volumen que ya tienen",
  "Grupos de restauración que necesitan sistematizar operaciones antes de crecer",
  "Hoteles con operación F&B que funciona como centro de coste en lugar de como activo",
  "Emprendedores que van a abrir y quieren hacerlo con criterio desde el principio",
  "Negocios establecidos donde el dueño no puede desconectar porque todo depende de él",
];

export default function ConsultorRestaurantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Consultor de restaurantes</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Consultoría especializada
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Consultor de restaurantes<br />
              <span className="font-semibold">con experiencia operativa real</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed max-w-2xl">
              No trabajo desde un despacho. He dirigido operaciones en España, Francia,
              Reino Unido e Irlanda durante más de veinte años. Eso es lo que traigo a
              cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUIÉN SOY — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Quién soy
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Veinte años dentro del negocio antes de ser consultor
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed mb-5">
                Soy Adrián Pollán. He gestionado restaurantes, grupos de restauración y
                operaciones F&B en hoteles en cuatro países. He cometido los errores que
                cuestan dinero y he visto de cerca lo que separa un negocio que funciona
                de uno que sobrevive.
              </p>
              <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
                Cuando trabajo como consultor de restaurantes, no entrego informes y
                desaparezco. Me implico en que las cosas cambien de verdad: en los números,
                en el equipo y en la operación del día a día.
              </p>
              <Link
                href="/sobre-mi"
                className="inline-flex items-center gap-2 font-body text-sm text-amber hover:text-amber/80 transition-colors"
              >
                Conoce mi trayectoria completa <ArrowRight size={15} />
              </Link>
            </div>
            <div className="bg-cream-dark border border-navy/10 rounded-xl p-8 lg:p-10">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
                En números
              </p>
              <div className="space-y-6">
                {[
                  { num: "20+", label: "Años de experiencia operativa en hostelería" },
                  { num: "4", label: "Países: España, Francia, Reino Unido e Irlanda" },
                  { num: "100+", label: "Negocios acompañados", note: "Experiencia acumulada en dirección, operaciones, aperturas y consultoría" },
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-5">
                    <span className="font-display text-4xl font-bold text-navy leading-none w-20 flex-shrink-0">
                      {s.num}
                    </span>
                    <div>
                      <span className="font-body text-ink/65 text-sm leading-relaxed">{s.label}</span>
                      {s.note && (
                        <p className="font-body text-ink/45 text-xs mt-0.5">{s.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN — crema oscuro ─────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Para quién trabajo
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Negocios que quieren resultados, no diagnósticos bonitos
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl">
            {forWhom.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-navy/8 rounded-lg p-5">
                <CheckCircle size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <p className="font-body text-ink/70 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Cómo puedo ayudarte
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Tres formas de trabajar juntos
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {services.map((s, i) => (
              <div key={i} className="bg-cream-dark border border-navy/10 rounded-xl p-8">
                <div className="mb-5">{s.icon}</div>
                <h3 className="font-display text-navy text-xl font-semibold mb-3">{s.title}</h3>
                <p className="font-body text-ink/65 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
          >
            Ver todos los servicios con detalle <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            ¿Tu restaurante podría funcionar mejor?
          </h2>
          <p className="font-body text-ink/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Empieza con el diagnóstico gratuito o reserva una sesión de 20 minutos.
            Sin presión, sin compromiso: solo claridad sobre dónde está tu negocio
            y qué tiene más impacto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Consultor restaurantes — CTA final"
            >
              Recibir Diagnóstico Gratuito <ArrowRight size={15} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
              eventName="calendly_click"
              eventLabel="Consultor restaurantes — CTA final"
            >
              O reservar una sesión de 20 minutos →
            </TrackingLink>
          </div>
          <p className="font-body text-ink/40 text-xs mt-8">
            ¿Prefieres escribir primero?{" "}
            <Link href="/hablemos" className="underline hover:text-ink/70 transition-colors">
              Escríbeme desde aquí
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
