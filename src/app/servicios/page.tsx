import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { services } from "@/data/services";
import { ArrowRight, ExternalLink, Search, LineChart, Rocket, MessageSquare, Lightbulb, FileText, X, HelpCircle } from "lucide-react";
import TrackingLink from "@/components/TrackingLink";
import ProcesoDeTrabajo from "@/components/ProcesoDeTrabajo";

const ServiceCard = dynamic(() => import("@/components/ServiceCard"));
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"));

const faqs = [
  {
    question: "¿Puedes trabajar con mi negocio aunque no estés en mi ciudad?",
    answer:
      "Trabajo de forma completamente remota, lo que me permite acompañar negocios en cualquier país de habla hispana sin importar dónde estés. También trabajo en inglés si el proyecto lo requiere.",
  },
  {
    question: "¿Cómo sé si mi negocio necesita consultoría?",
    answer:
      "Si sientes que trabajas mucho pero los resultados no acompañan, si el negocio depende demasiado de ti, o si estás a punto de tomar una decisión importante como abrir o cambiar de concepto, probablemente sí. La sesión gratuita de 20 minutos existe exactamente para eso: para aclarar si tiene sentido trabajar juntos.",
  },
  {
    question: "¿Cuánto cuesta una consultoría?",
    answer:
      "Depende del servicio y del alcance del proyecto. Lo vemos juntos en la primera sesión una vez que entiendo tu situación concreta.",
  },
  {
    question: "¿Cuánto tiempo tarda en verse resultados?",
    answer:
      "Depende del punto de partida y del servicio contratado. Un diagnóstico da resultados accionables en días. Una consultoría operativa continuada genera cambios medibles en semanas.",
  },
  {
    question: "¿Cómo sé qué servicio necesito?",
    answer:
      "No hace falta saberlo antes de contactar. En la sesión gratuita de 20 minutos te ayudo a identificar qué tipo de acompañamiento encaja mejor con tu situación.",
  },
  {
    question: "¿Cuánto dura un proceso de consultoría?",
    answer:
      "Depende del servicio y de la situación de cada negocio. En la primera sesión lo vemos juntos.",
  },
  {
    question: "¿Trabajas con negocios pequeños o solo con grandes operaciones?",
    answer:
      "Trabajo con negocios de todos los tamaños, desde restaurantes familiares hasta grupos hoteleros. Lo que importa no es el tamaño, sino que haya voluntad real de mejorar.",
  },
  {
    question: "¿Trabajas con negocios que acaban de abrir?",
    answer:
      "Sí. Cuanto antes se incorpora el acompañamiento en una apertura, más impacto tiene.",
  },
  {
    question: "¿Qué pasa si el diagnóstico revela que no puedo ayudarte?",
    answer:
      "Te lo digo en la primera sesión con honestidad. No acepto proyectos donde no creo que pueda aportar valor real.",
  },
];

export const metadata: Metadata = {
  title: "Consultoría para Restaurantes y Hostelería | Servicios",
  description:
    "Diagnóstico y auditoría F&B, consultoría operativa continuada y acompañamiento a aperturas. Consultoría especializada en hostelería para restaurantes más rentables y mejor gestionados.",
  alternates: {
    canonical: "https://adrianpollan.com/servicios",
  },
  openGraph: {
    title: "Consultoría para Restaurantes y Hostelería | Adrián Pollán",
    description:
      "Diagnóstico F&B, consultoría operativa y acompañamiento a aperturas. Especializado en rentabilidad, control de costes y gestión operativa.",
    url: "https://adrianpollan.com/servicios",
  },
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServiciosPage() {
  const serviceIcons = [
    <Search key="s1" size={40} className="text-amber" />,
    <LineChart key="s2" size={40} className="text-amber" />,
    <Rocket key="s3" size={40} className="text-amber" />,
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1753078944130-2fad814a01d2?auto=format&fit=crop&w=1920&q=80"
          alt="Cocina profesional en servicio — consultoría para restaurantes y hostelería"
          fill
          priority
          sizes="100vw"
          quality={50}
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Servicios
            </p>
            <h1 className="font-display text-cream text-3xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Consultoría para restaurantes<br />
              <span className="font-semibold">y negocios de hostelería</span>
            </h1>
            <p className="font-body text-cream/60 text-lg leading-relaxed">
              Tres formas de colaborar, según el momento en que se encuentra
              tu negocio y lo que necesitas resolver.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN — fondo blanco ─────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Encuentra tu caso
            </p>
            <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight">
              ¿Para quién es esto?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Propietarios de restaurante",
                body: "Que venden bien pero no ganan lo que deberían. Que el negocio depende demasiado de ellos y no saben exactamente dónde se escapa el margen.",
                href: "/para-propietarios-de-restaurantes",
                cta: "Ver mi caso →",
              },
              {
                num: "02",
                title: "Hoteles con F&B",
                body: "Que tienen el F&B como centro de coste en lugar de activo. Con rotación de personal, sin datos de rentabilidad y huéspedes que no usan la restauración.",
                href: "/para-hoteles-fb",
                cta: "Ver mi caso →",
              },
              {
                num: "03",
                title: "Emprendedores que abren",
                body: "Que quieren abrir un restaurante con criterio y evitar los errores más costosos antes de comprometer su inversión.",
                href: "/para-emprendedores",
                cta: "Ver mi caso →",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group bg-cream-dark border border-navy/8 rounded-xl p-8 hover:border-amber/40 transition-colors flex flex-col"
              >
                <span className="font-display text-amber/40 text-4xl font-light block mb-4">
                  {item.num}
                </span>
                <h3 className="font-display text-navy text-xl font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-ink/65 text-base leading-relaxed flex-1 mb-5">{item.body}</p>
                <span className="font-body text-amber text-sm font-medium group-hover:underline">
                  {item.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿QUÉ SERVICIO ENCAJA? — fondo crema oscuro ───────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Encuentra tu punto de entrada
            </p>
            <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-3">
              ¿Qué servicio encaja contigo?
            </h2>
            <p className="font-body text-ink/60 text-lg leading-relaxed">
              Según el momento en el que está tu negocio, el punto de entrada es distinto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {[
              {
                icon: <Search size={26} className="text-amber" />,
                title: "No sabes dónde se escapa el margen",
                body: "Empieza por el Diagnóstico y Auditoría F&B. Antes de cambiar nada, hay que entender qué está pasando de verdad.",
                cta: { label: "Ver servicio", href: "/servicios/auditoria-fb-restaurantes", external: false },
              },
              {
                icon: <LineChart size={26} className="text-amber" />,
                title: "Sabes que hay problemas y quieres resolverlos",
                body: "La Consultoría Operativa Continuada es para negocios que quieren implementar cambios reales con acompañamiento sostenido.",
                cta: { label: "Ver servicio", href: "/servicios/consultoria-operativa-restaurantes", external: false },
              },
              {
                icon: <Rocket size={26} className="text-amber" />,
                title: "Vas a abrir o estás en los primeros meses",
                body: "El Acompañamiento a Aperturas te ayuda a tomar mejores decisiones antes de comprometer tu inversión.",
                cta: { label: "Ver servicio", href: "/servicios/apertura-restaurante", external: false },
              },
              {
                icon: <HelpCircle size={26} className="text-amber" />,
                title: "No estás seguro por dónde empezar",
                body: "Empieza con el diagnóstico gratuito. En 10 minutos sabrás cuáles son las áreas prioritarias de tu negocio.",
                cta: { label: "Recibir Diagnóstico Gratuito", href: "https://diagnostico.adrianpollan.com", external: true },
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-navy/10 rounded-xl p-6 lg:p-8 flex flex-col gap-5"
              >
                {card.icon}
                <div className="flex-1">
                  <h3 className="font-display text-navy text-lg font-semibold leading-snug mb-2">
                    {card.title}
                  </h3>
                  <p className="font-body text-ink/65 text-base leading-relaxed">
                    {card.body}
                  </p>
                </div>
                {card.cta.external ? (
                  <TrackingLink
                    href={card.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 btn-amber text-navy text-sm font-semibold tracking-wide self-start"
                    eventName="diagnostico_click"
                    eventLabel="Servicios — ¿qué servicio encaja?"
                  >
                    {card.cta.label} <ExternalLink size={13} />
                  </TrackingLink>
                ) : (
                  <a
                    href={card.cta.href}
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-navy border-b border-amber/60 pb-0.5 self-start hover:border-amber hover:text-amber transition-colors"
                  >
                    {card.cta.label} <ArrowRight size={13} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — fondo blanco con grid de 3 tarjetas ────────── */}
      <section className="bg-white py-24 lg:py-32">
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
                href={service.href}
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
            <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight">
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
                <p className="font-body text-ink/60 text-base leading-relaxed">
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
              <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-5">
                ¿No sabes cuál encaja con tu situación?
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
                Antes de elegir un servicio, puede tener más sentido hacer el
                diagnóstico gratuito. En 10 minutos sabrás exactamente qué áreas
                de tu negocio necesitan más atención y qué tipo de ayuda encaja mejor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <TrackingLink
                  href="https://diagnostico.adrianpollan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 btn-amber text-navy text-sm font-semibold tracking-wide"
                  eventName="diagnostico_click"
                  eventLabel="Servicios — sección ¿no sabes cuál?"
                >
                  Hacer el diagnóstico
                  <ExternalLink size={15} />
                </TrackingLink>
                <TrackingLink
                  href="https://calendly.com/adrianpollan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-navy/30 text-navy text-sm font-medium hover:border-amber hover:text-amber transition-colors"
                  eventName="calendly_click"
                  eventLabel="Servicios — sección ¿no sabes cuál?"
                >
                  O reserva 20 minutos <ArrowRight size={15} />
                </TrackingLink>
              </div>
            </div>

            {/* Checklist visual */}
            <div className="bg-white border border-navy/10 rounded-xl p-8 lg:p-10">
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

      {/* ── QUÉ PASA DESPUÉS — fondo blanco ──────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              El proceso
            </p>
            <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-4">
              Qué pasa después de la sesión gratuita
            </h2>
            <p className="font-body text-ink/60 text-lg leading-relaxed">
              Sin presión, sin sorpresas. Así funciona el proceso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-14">
            {[
              {
                icon: <MessageSquare size={24} className="text-amber" />,
                title: "Me cuentas tu situación",
                body: "Me explicas dónde está el negocio ahora mismo y qué te preocupa.",
              },
              {
                icon: <Search size={24} className="text-amber" />,
                title: "Te hago las preguntas correctas",
                body: "Pregunto sobre ventas, costes, equipo y operación para entender el problema real.",
              },
              {
                icon: <Lightbulb size={24} className="text-amber" />,
                title: "Te digo con honestidad si puedo ayudarte",
                body: "Si veo que puedo aportar valor real, te explico cómo. Si no, también te lo digo.",
              },
              {
                icon: <FileText size={24} className="text-amber" />,
                title: "Te propongo el siguiente paso",
                body: "Si tiene sentido trabajar juntos, preparo una propuesta adaptada a tu situación concreta.",
              },
              {
                icon: <X size={24} className="text-amber" />,
                title: "Si no encajamos, te lo digo",
                body: "No acepto proyectos donde no creo que pueda aportar valor real. Prefiero decirlo en la primera llamada.",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-display text-navy text-base font-semibold mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-body text-ink/60 text-base leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-ink/50 text-base leading-relaxed border-t border-navy/10 pt-8 max-w-2xl">
            No es una llamada de venta agresiva. Es una conversación breve para entender si puedo ayudarte.
          </p>
        </div>
      </section>

      <ProcesoDeTrabajo />

      {/* ── FAQ — fondo blanco ───────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Preguntas frecuentes
              </p>
              <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-6">
                Lo que suelen preguntar
              </h2>
              <p className="font-body text-ink/60 text-base leading-relaxed mb-8">
                Si tienes alguna duda que no está aquí, escríbeme directamente.
              </p>
            </div>

            <div className="lg:col-span-2">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
