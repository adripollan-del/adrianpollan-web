import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import {
  ArrowRight,
  TrendingDown,
  FileText,
  Users,
  BarChart2,
  CheckCircle,
  Search,
  LineChart,
  Rocket,
  ExternalLink,
} from "lucide-react";

const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"));

export const metadata: Metadata = {
  title: { absolute: "Consultoría de Restaurantes y Hostelería | Adrián Pollán" },
  description:
    "Consultoría especializada para restaurantes, hoteles y negocios de hostelería. Diagnóstico gratuito, control de costes, rentabilidad y acompañamiento operativo. 20+ años de experiencia real.",
  alternates: { canonical: "https://adrianpollan.com/consultoria-restaurantes-hosteleria" },
  openGraph: {
    title: "Consultoría de Restaurantes y Hostelería | Adrián Pollán",
    description:
      "Consultoría especializada para restaurantes y hostelería. Diagnóstico gratuito, control de costes y acompañamiento operativo. 20+ años de experiencia real.",
    url: "https://adrianpollan.com/consultoria-restaurantes-hosteleria",
  },
};

const faqs = [
  {
    question: "¿Qué es la consultoría de restaurantes?",
    answer:
      "La consultoría de restaurantes es un servicio profesional de análisis, diagnóstico y acompañamiento para mejorar la rentabilidad, la gestión operativa y la sostenibilidad de un negocio de hostelería. Incluye revisión de costes, carta, equipo, procesos y toma de decisiones basada en datos reales.",
  },
  {
    question: "¿Cuándo necesita un restaurante un consultor de hostelería?",
    answer:
      "Cuando vende bien pero no gana lo que debería, cuando el negocio depende demasiado del propietario, cuando se va a tomar una decisión importante como abrir o cambiar de concepto, o cuando los números no cuadran y no está claro por qué. La sesión gratuita de 20 minutos existe para aclarar si tiene sentido trabajar juntos.",
  },
  {
    question: "¿Cuánto cuesta la consultoría de hostelería?",
    answer:
      "Depende del servicio y del alcance del proyecto. Lo vemos juntos en la primera sesión una vez que entiendo tu situación concreta. El diagnóstico gratuito y la sesión de 20 minutos no tienen coste.",
  },
  {
    question: "¿Cuánto tiempo tarda en verse resultados?",
    answer:
      "Depende del punto de partida y del servicio. Un diagnóstico da claridad en días. Una consultoría operativa genera cambios medibles en semanas. Los resultados más sólidos se consolidan en dos o tres meses de trabajo continuado.",
  },
  {
    question: "¿Trabajas de forma remota?",
    answer:
      "Sí. Trabajo completamente en remoto, lo que me permite acompañar negocios en cualquier país de habla hispana. También trabajo en inglés si el proyecto lo requiere.",
  },
  {
    question: "¿Qué diferencia hay entre consultoría gastronómica y consultoría de hostelería?",
    answer:
      "En la práctica, los términos se usan de forma intercambiable. La consultoría gastronómica suele referirse más al trabajo de carta, concepto y experiencia culinaria. La consultoría de hostelería cubre también gestión operativa, equipos, costes y estrategia de negocio. Mi trabajo abarca ambas dimensiones.",
  },
  {
    question: "¿Trabajas con restaurantes pequeños o solo con grandes operaciones?",
    answer:
      "Con negocios de todos los tamaños, desde restaurantes familiares hasta grupos hoteleros. Lo que importa no es el tamaño sino que haya voluntad real de mejorar.",
  },
  {
    question: "¿Qué pasa si el diagnóstico revela que no puedo ayudarte?",
    answer:
      "Te lo digo en la primera sesión con honestidad. No acepto proyectos donde no creo que pueda aportar valor real. Prefiero decirlo en la primera llamada que comprometer tu tiempo y tu dinero.",
  },
];

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Consultoría de Restaurantes y Hostelería",
  provider: {
    "@type": "Person",
    name: "Adrián Pollán",
    url: "https://adrianpollan.com",
  },
  url: "https://adrianpollan.com/consultoria-restaurantes-hosteleria",
  areaServed: ["España", "Latinoamérica"],
  serviceType: "Consultoría de hostelería y restauración",
};

const faqSchema = {
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

export default function ConsultoriaRestaurantesHosteleariaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO — grafito ──────────────────────────────────────────── */}
      <section className="relative bg-grafito pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Consultoría de restaurantes y hostelería
            </p>
            <h1 className="font-display text-cream text-4xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Consultoría para restaurantes{" "}
              <span className="font-semibold">
                que venden bien<br />pero no ganan lo que deberían
              </span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed mb-10 max-w-xl">
              Ayudo a propietarios de restaurantes y operaciones F&B a recuperar margen, ordenar
              la gestión y tomar decisiones con datos reales. No desde un despacho. Desde dentro
              del negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <TrackingLink
                href="https://diagnostico.adrianpollan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 btn-amber text-grafito text-sm font-semibold tracking-wide"
                eventName="diagnostico_click"
                eventLabel="Pilar consultoría — hero"
              >
                Empezar mi diagnóstico gratuito
                <ExternalLink size={15} />
              </TrackingLink>
              <a
                href="https://calendly.com/adrianpollan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream/30 text-cream text-sm font-medium hover:border-cream/60 transition-colors"
              >
                Agendar sesión gratuita
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. EL PROBLEMA REAL — blanco ────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Por qué no basta con vender
            </p>
            <h2 className="font-display text-grafito text-2xl lg:text-5xl font-semibold leading-tight mb-8">
              El margen no aparece aunque el restaurante esté lleno
            </h2>
            <div className="space-y-5">
              <p className="font-body text-ink/70 text-lg leading-relaxed">
                La mayoría de restaurantes que llegan a consultoría no tienen un problema de ventas.
                Tienen buena ocupación, buen producto y un equipo que trabaja duro. El problema es
                que a final de mes los números no reflejan ese esfuerzo.
              </p>
              <p className="font-body text-ink/70 text-lg leading-relaxed">
                Las causas son casi siempre las mismas: food cost que nadie controla con datos
                reales, una carta con platos que drenan margen sin que nadie lo sepa, decisiones
                tomadas por intuición y costumbre, un equipo que depende demasiado del propietario,
                y costes fijos que han ido creciendo sin que el negocio los haya absorbido. No es un
                problema de trabajar más. Es un problema de información y método.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PARA QUIÉN ES — crema ────────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Encuentra tu caso
            </p>
            <h2 className="font-display text-grafito text-2xl lg:text-5xl font-semibold leading-tight">
              ¿Reconoces tu situación?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Propietarios de restaurante",
                body: "Tienes buena ocupación pero el margen es insuficiente. El negocio depende demasiado de tu presencia. Sabes que hay margen de mejora pero no sabes exactamente dónde actuar primero.",
                href: "/para-propietarios-de-restaurantes",
              },
              {
                num: "02",
                title: "Hoteles con F&B",
                body: "El F&B funciona como centro de coste en lugar de activo. Hay rotación de personal, los huéspedes raramente usan el restaurante y no tienes KPIs claros sobre qué está pasando.",
                href: "/para-hoteles-fb",
              },
              {
                num: "03",
                title: "Emprendedores que abren",
                body: "Tienes el proyecto, la ilusión y la inversión comprometida o a punto de comprometerse. Quieres abrir con criterio y evitar los errores que luego son difíciles de deshacer.",
                href: "/para-emprendedores",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white border border-grafito/10 rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40"
              >
                <span className="font-display text-amber/40 text-4xl font-light block mb-4">
                  {item.num}
                </span>
                <h3 className="font-display text-grafito text-xl font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-ink/65 text-base leading-relaxed flex-1 mb-5">
                  {item.body}
                </p>
                <span className="font-body text-amber text-sm font-medium group-hover:underline">
                  Ver mi caso →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. QUÉ RESUELVE — blanco ────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Qué cambia
            </p>
            <h2 className="font-display text-grafito text-2xl lg:text-5xl font-semibold leading-tight">
              Lo que la consultoría de hostelería resuelve en la práctica
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                icon: <TrendingDown size={28} className="text-amber" />,
                title: "Control real del food cost",
                body: "No solo saber el porcentaje. Saber exactamente en qué platos, en qué días y por qué razones se escapa el margen. Con escandallos actualizados, control de mermas y seguimiento semanal.",
              },
              {
                icon: <FileText size={28} className="text-amber" />,
                title: "Carta que rinde",
                body: "Identificar qué platos venden y qué margen dejan. Eliminar lo que no aporta, reforzar lo que funciona y ajustar precios donde tiene sentido. La carta como herramienta de rentabilidad, no solo de concepto.",
              },
              {
                icon: <Users size={28} className="text-amber" />,
                title: "Equipo con autonomía",
                body: "Un negocio que depende de que estés tú en todo momento no escala. El objetivo es que el equipo tenga criterio propio, procesos documentados y capacidad de tomar decisiones sin tu validación constante.",
              },
              {
                icon: <BarChart2 size={28} className="text-amber" />,
                title: "Decisiones con datos",
                body: "Pasar de gestionar por intuición a gestionar con KPIs reales: food cost semanal, prime cost mensual, ticket medio por servicio, ratio de cobertura. Números que te dicen qué está pasando antes de que el mes esté cerrado.",
              },
              {
                icon: <CheckCircle size={28} className="text-amber" />,
                title: "Acompañamiento en la implementación",
                body: "No entrego un informe y desaparezco. Me quedo en el proceso mientras tiene sentido estar, ajustando cuando la realidad no encaja con el plan y asegurando que los cambios se consolidan en el negocio.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-amber/10 border border-amber/20 rounded-xl flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-grafito text-lg font-semibold mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-ink/65 text-base leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MÉTODO ADRIÁN — grafito ─────────────────────────────────── */}
      <section className="bg-grafito py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Cómo trabajo
            </p>
            <h2 className="font-display text-cream text-2xl lg:text-5xl font-semibold leading-tight mb-5">
              Un método basado en diagnóstico y datos, no en intuiciones
            </h2>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              La consultoría de restaurantes que funciona no empieza con soluciones. Empieza con
              entender qué está pasando de verdad. Por eso trabajo con un método propio estructurado
              en seis fases:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              {
                letter: "A",
                name: "Analizar",
                desc: "Entender el negocio en profundidad: concepto, mercado, posicionamiento, estructura de costes y situación del equipo.",
              },
              {
                letter: "D",
                name: "Diagnosticar",
                desc: "Identificar con precisión dónde está el problema, no donde parece estar. Muchas veces el food cost alto es el síntoma de algo más profundo.",
              },
              {
                letter: "R",
                name: "Revisar",
                desc: "Revisar números, operativa y procesos con datos reales. Food cost, prime cost, ticket medio, mezcla de ventas, ratios de personal.",
              },
              {
                letter: "I",
                name: "Implementar",
                desc: "Aplicar los cambios con criterio de prioridad. Primero lo que tiene más impacto inmediato, luego lo que consolida resultados a medio plazo.",
              },
              {
                letter: "A",
                name: "Acompañar",
                desc: "Estar presente durante la implementación para ajustar, resolver obstáculos y asegurar que el equipo integra los cambios.",
              },
              {
                letter: "N",
                name: "Normalizar",
                desc: "Convertir los cambios en procesos estables que funcionan sin depender de la consultoría.",
              },
            ].map((phase, i) => (
              <div
                key={i}
                className="border border-amber/20 p-5 lg:p-6 flex flex-col items-center text-center"
              >
                <span className="font-display text-amber text-5xl font-bold leading-none mb-3">
                  {phase.letter}
                </span>
                <h3 className="font-display text-cream text-xs font-bold tracking-wide uppercase mb-2">
                  {phase.name}
                </h3>
                <p className="font-body text-cream/60 text-xs leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-amber/40 text-amber text-sm font-medium hover:border-amber hover:bg-amber/5 transition-colors"
            >
              Conocer más sobre el método
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. EXPERIENCIA — crema ──────────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Texto */}
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Por qué confiar en esta consultoría
              </p>
              <h2 className="font-display text-grafito text-2xl lg:text-5xl font-semibold leading-tight mb-8">
                20 años de operación real, no de teoría
              </h2>
              <div className="space-y-5">
                <p className="font-body text-ink/70 text-lg leading-relaxed">
                  Empecé en hostelería a los 13 años ayudando a mi padre. Cuando era adolescente,
                  mis padres abrieron su propio negocio. Lo vi de cerca: el entusiasmo, el trabajo,
                  y también las dificultades de gestionar un negocio de hostelería sin método. Esa
                  experiencia me marcó.
                </p>
                <p className="font-body text-ink/70 text-lg leading-relaxed">
                  He gestionado desde la operación diaria hasta la dirección general en restaurantes
                  independientes, grupos y propiedades hoteleras de distintos tamaños en cuatro
                  países. Negocios con contextos muy distintos, problemas muy distintos y soluciones
                  que no se pueden copiar de un manual.
                </p>
                <p className="font-body text-ink/70 text-lg leading-relaxed">
                  Cuando abrí mi primer negocio con mi pareja, cometí los errores que ahora ayudo a
                  evitar. El negocio cerró. Gestioné las deudas durante años. Esa experiencia, más
                  que cualquier otra, es la que dio origen al Método ADRIÁN y al trabajo que hago
                  hoy como consultor de restaurantes.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { stat: "20+", label: "Años de experiencia operativa" },
                { stat: "4", label: "Países: España, Francia, UK, Irlanda" },
                { stat: "100+", label: "Negocios acompañados", note: "Experiencia acumulada en dirección, operaciones, aperturas y consultoría" },
                { stat: "3", label: "Tipos: restaurantes, hoteles, grupos" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-grafito/10 rounded-xl p-6 flex flex-col justify-between"
                >
                  <span className="font-display text-amber text-5xl font-bold leading-none mb-3">
                    {item.stat}
                  </span>
                  <div>
                    <p className="font-body text-ink/65 text-sm leading-snug">{item.label}</p>
                    {item.note && (
                      <p className="font-body text-ink/45 text-xs mt-1">{item.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. CASOS DE ÉXITO — blanco ────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Casos de éxito
            </p>
            <h2 className="font-display text-grafito text-2xl lg:text-5xl font-semibold leading-tight">
              Situaciones reales, resultados concretos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: "Rentabilidad",
                metrica: "−6,5 puntos de food cost en 8 semanas",
                title: "Restaurante con buena ocupación y margen insuficiente",
                desc: "Escandallos desactualizados, porciones sin control y compras urgentes fuera de proveedor. Resultado: 6,5 puntos de food cost recuperados sin reducir calidad percibida.",
              },
              {
                label: "Apertura",
                metrica: "Primeras semanas con reseñas positivas",
                title: "Emprendedor antes de abrir",
                desc: "Apertura replanteada con carta reducida, soft opening controlado y procesos definidos antes del primer servicio real. Sin quemar reputación en las primeras semanas.",
              },
              {
                label: "F&B Hotelero",
                metrica: "F&B convertido en activo estratégico",
                title: "Hotel con operación F&B poco rentable",
                desc: "Rediseño de oferta, implantación de KPIs y formación del equipo en venta contextual. GP mejorado y gasto medio por huésped al alza.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-cream-dark border border-grafito/10 rounded-xl p-6 flex flex-col"
              >
                <span className="font-body text-xs tracking-widest uppercase text-ink/40 mb-3">
                  {item.label}
                </span>
                <p className="font-display text-amber text-base font-semibold mb-4 leading-snug">
                  {item.metrica}
                </p>
                <h3 className="font-display text-grafito text-lg font-semibold mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-ink/65 text-sm leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/casos-reales"
              className="font-body text-amber text-sm font-medium hover:underline"
            >
              Ver todos los casos →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. SERVICIOS — crema ────────────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Cómo puedo ayudarte
            </p>
            <h2 className="font-display text-grafito text-2xl lg:text-5xl font-semibold leading-tight">
              Tres formas de trabajar juntos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Search size={32} className="text-amber" />,
                title: "Diagnóstico y Auditoría F&B",
                body: "Para negocios que trabajan bien operativamente pero no ven en los números lo que esperan. Análisis completo con informe de prioridades y plan de acción.",
                href: "/servicios/auditoria-fb-restaurantes",
              },
              {
                icon: <LineChart size={32} className="text-amber" />,
                title: "Consultoría Operativa Continuada",
                body: "Acompañamiento sostenido mientras el negocio sigue abierto. Para propietarios que quieren implementar cambios reales con apoyo continuo.",
                href: "/servicios/consultoria-operativa-restaurantes",
              },
              {
                icon: <Rocket size={32} className="text-amber" />,
                title: "Acompañamiento a Aperturas",
                body: "Para emprendedores que quieren abrir con criterio antes de que el dinero esté comprometido. Concepto, local, carta, equipo y primeros meses.",
                href: "/servicios/apertura-restaurante",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white border border-grafito/10 rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40"
              >
                <div className="w-14 h-14 bg-amber/10 border border-amber/20 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display text-grafito text-xl font-semibold mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-ink/65 text-base leading-relaxed flex-1 mb-5">
                  {item.body}
                </p>
                <span className="font-body text-amber text-sm font-medium group-hover:underline">
                  Ver servicio →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ — blanco ─────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Preguntas frecuentes
              </p>
              <h2 className="font-display text-grafito text-2xl lg:text-4xl font-semibold leading-tight mb-6">
                Lo que suelen preguntar sobre la consultoría de restaurantes
              </h2>
              <p className="font-body text-ink/60 text-base leading-relaxed">
                Si tienes alguna duda que no está aquí, escríbeme directamente.
              </p>
            </div>

            <div className="lg:col-span-2">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. CTA FINAL — crema ───────────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-grafito text-2xl lg:text-5xl font-semibold leading-tight max-w-2xl mx-auto mb-5">
            El primer paso es siempre el más sencillo
          </h2>
          <p className="font-body text-ink/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Empieza con el diagnóstico gratuito. En 10 minutos tienes una foto clara de las ocho
            áreas prioritarias de tu negocio. Sin registro, sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-grafito text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Pilar consultoría — CTA final"
            >
              Empezar mi diagnóstico gratuito
              <ExternalLink size={15} />
            </TrackingLink>
            <a
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-ink/60 hover:text-amber transition-colors self-center"
            >
              O reservar una sesión de 20 minutos →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
