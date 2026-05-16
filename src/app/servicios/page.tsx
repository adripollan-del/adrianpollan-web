import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { ArrowRight, ExternalLink, Search, LineChart, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios — Adrián Pollán",
  description:
    "Diagnóstico y Auditoría F&B, Consultoría Operativa Continuada y Acompañamiento a Aperturas. Consultoría especializada en hostelería.",
};

const steps = [
  {
    num: "01",
    title: "Sesión de exploración",
    body: "20 minutos gratuitos para entender tu negocio, tus objetivos y los principales obstáculos. Si no creo que pueda ayudarte, te lo digo.",
  },
  {
    num: "02",
    title: "Diagnóstico o propuesta",
    body: "Según el caso, empezamos con una auditoría formal o directamente con una propuesta de colaboración ajustada a lo que necesitas.",
  },
  {
    num: "03",
    title: "Ejecución con seguimiento",
    body: "Trabajo contigo y con tu equipo. No entrego informes y desaparezco: me implico en que las cosas cambien de verdad.",
  },
  {
    num: "04",
    title: "Resultados medibles",
    body: "Cada proyecto tiene KPIs claros desde el día uno. Medimos, ajustamos y documentamos lo que funciona para que quede en tu negocio.",
  },
];

export default function ServiciosPage() {
  const serviceIcons = [
    <Search key="s1" size={40} className="text-amber" />,
    <LineChart key="s2" size={40} className="text-amber" />,
    <Rocket key="s3" size={40} className="text-amber" />,
  ];
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1753078944130-2fad814a01d2?auto=format&fit=crop&w=1920&q=80"
          alt="Cocina profesional con chefs en pleno servicio"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Servicios
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Cómo trabajo<br />
              <span className="font-semibold">contigo</span>
            </h1>
            <p className="font-body text-cream/60 text-lg leading-relaxed">
              Tres formas de colaborar, según el momento en que se encuentra
              tu negocio y lo que necesitas resolver.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — fondo crema con grid de 3 tarjetas ───────── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                subtitle={service.subtitle}
                summary={service.summary}
                includes={service.includes}
                ideal={service.ideal}
                closing={service.closing}
                icon={serviceIcons[i]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO — fondo blanco ───────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Cómo funciona
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              El proceso de trabajar conmigo
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <span className="font-display text-5xl font-light text-amber/25 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-display text-navy text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ¿NO SABES CUÁL? — fondo crema oscuro ─────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-5">
                ¿No sabes cuál encaja con tu situación?
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
                Antes de elegir un servicio, puede tener más sentido hacer el
                diagnóstico gratuito. En 10 minutos sabrás exactamente qué áreas
                de tu negocio necesitan más atención y qué tipo de ayuda encaja mejor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://diagnostico.adrianpollan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 btn-amber text-navy text-sm font-semibold tracking-wide"
                >
                  Hacer el diagnóstico
                  <ExternalLink size={15} />
                </a>
                <Link
                  href="/hablemos"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-navy/30 text-navy text-sm font-medium hover:border-amber hover:text-amber transition-colors"
                >
                  O reserva 20 minutos <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Checklist visual */}
            <div className="bg-white border border-navy/10 p-8 lg:p-10">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
                El diagnóstico analiza
              </p>
              <ul className="space-y-4">
                {[
                  "Rentabilidad real vs. rentabilidad potencial",
                  "Estructura de costes de producto y personal",
                  "Ingeniería de menú y pricing",
                  "Procesos operativos y puntos de pérdida",
                  "Equipo, liderazgo y dependencias",
                  "Palancas de crecimiento inmediatas",
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

    </>
  );
}
