import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, TrendingDown, Users, Key, Search, LineChart, Rocket, CheckCircle, ClipboardList, BarChart2, AlertTriangle, Shield, Calculator, Phone, Clock, Globe, Building2, Target, BookOpen } from "lucide-react";
import MapaDiagnostico from "@/components/MapaDiagnostico";
import LinkedinIcon from "@/components/LinkedinIcon";

const Stats = dynamic(() => import("@/components/Stats"));
const WaitlistForm = dynamic(() => import("@/components/WaitlistForm"));

export const metadata: Metadata = {
  title: "Consultor de Restaurantes y Hostelería | Adrián Pollán",
  description:
    "Consultoría especializada para restaurantes y operaciones F&B. Diagnóstico gratuito, control de costes, rentabilidad y acompañamiento operativo. Más de 20 años de experiencia real.",
  alternates: {
    canonical: "https://adrianpollan.com",
  },
  openGraph: {
    title: "Adrián Pollán | Consultor de Hostelería y Restauración",
    description:
      "Consultor especializado en rentabilidad de restaurantes, control de costes y gestión operativa. Más de 20 años de experiencia real.",
    url: "https://adrianpollan.com",
  },
};

const PHOTOS = {
  hero: "/hero.webp",
};

const testimonials = [
  {
    text: "Llevábamos tres años con el restaurante lleno casi todos los fines de semana y sin entender por qué el margen no aparecía. En dos meses de trabajo con Adrián identificamos dónde se escapaba el dinero y lo corregimos. El cambio fue inmediato.",
    name: "Carlos M.",
    role: "Propietario, Restaurante en Madrid",
  },
  {
    text: "Estaba a punto de firmar el local para mi primer restaurante cuando empecé a trabajar con Adrián. Me hizo las preguntas que nadie me había hecho y me ayudó a tomar decisiones mucho más sólidas antes de comprometer mi inversión.",
    name: "Laura G.",
    role: "Emprendedora, Barcelona",
  },
  {
    text: "Lo que más me sorprendió fue que no llegó con soluciones preparadas. Primero entendió el negocio, luego propuso. Esa forma de trabajar marca la diferencia respecto a otros consultores que había contratado antes.",
    name: "Javier R.",
    role: "Director de F&B, Hotel en Sevilla",
  },
];

const audienceCardData = [
  {
    num: "01",
    title: "Vendes pero no ganas lo que deberías",
    body: "Tu restaurante tiene ocupación, el trabajo no falta, pero a fin de mes los números no cuadran. El problema casi nunca está donde crees.",
  },
  {
    num: "02",
    title: "El negocio depende demasiado de ti",
    body: "Si no estás, las cosas no funcionan igual. Necesitas estructura, equipo y un sistema que no dependa de tu presencia constante.",
  },
  {
    num: "03",
    title: "Quieres abrir y hacerlo bien desde el principio",
    body: "Tienes el proyecto, la ilusión y las ganas. Antes de comprometer tu inversión, conviene tener a alguien con criterio al lado.",
  },
];

export default function Home() {
  const audienceIcons = [
    <TrendingDown key="a1" size={28} className="text-amber" />,
    <Users key="a2" size={28} className="text-amber" />,
    <Key key="a3" size={28} className="text-amber" />,
  ];
  return (
    <>
      {/* ── HERO — navy + imagen de fondo ──────────────────────────── */}
      <section className="relative min-h-screen hero-navy flex flex-col justify-end overflow-hidden">
        {/* Background photo */}
        <Image
          src={PHOTOS.hero}
          alt="Interior de restaurante profesional — consultoría de hostelería y restaurantes"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover opacity-25"
        />
        {/* Gradient overlay to keep text readable */}
        <div className="absolute inset-0 bg-navy/50" />

        {/* Amber accent top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28 pt-40 lg:pt-48">
          <div className="max-w-4xl">
            <p className="font-body text-amber text-sm tracking-widest uppercase mb-7">
              Consultoría en hostelería y restauración
            </p>

            <h1 className="font-display text-cream text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] tracking-tight mb-8">
              Restaurantes más<br />
              <em className="not-italic font-semibold text-amber">rentables</em>{" "}
              y mejor<br />
              gestionados
            </h1>

            <p className="font-body text-cream/75 text-lg lg:text-xl leading-relaxed max-w-2xl mb-4">
              Ayudo a propietarios de restaurantes y operaciones F&B a recuperar margen,
              ordenar la gestión y tomar decisiones con datos, no con intuición.
            </p>
            <p className="font-body text-cream/45 text-sm lg:text-base leading-relaxed max-w-xl mb-12">
              Diagnóstico, control de costes, carta, equipo y operación para negocios
              que venden, pero no ganan lo que deberían.
            </p>

            {/* CTAs — diagnóstico primero (CTA principal), Calendly segundo */}
            <div className="flex flex-col sm:flex-row gap-4">
              <TrackingLink
                href="https://diagnostico.adrianpollan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
                eventName="diagnostico_click"
                eventLabel="Hero home"
              >
                Recibir Diagnóstico Gratuito
                <ArrowRight size={16} />
              </TrackingLink>
              <TrackingLink
                href="https://calendly.com/adrianpollan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/35 text-cream text-sm font-medium tracking-wide hover:bg-cream/10 transition-colors"
                eventName="calendly_click"
                eventLabel="Hero home"
              >
                Reserva una sesión gratuita
                <ArrowRight size={16} />
              </TrackingLink>
            </div>
          </div>
        </div>

        {/* Quote corner */}
        <div className="absolute bottom-12 right-10 lg:right-16 hidden lg:block text-right">
          <p className="font-display text-cream/20 text-xs italic leading-relaxed">
            &ldquo;Un restaurante rentable<br />es un restaurante libre.&rdquo;
          </p>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-px h-12 bg-cream animate-pulse" />
        </div>
      </section>

      {/* ── DIAGNÓSTICO — cómo funciona — blanco ──────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Diagnóstico gratuito
            </p>
            <h2 className="font-display text-navy text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
              El diagnóstico gratuito no es un formulario. Es una primera foto real de tu negocio.
            </h2>
            <p className="font-body text-ink/60 text-base leading-relaxed mt-5">
              En 10 minutos obtienes una foto clara de 8 áreas clave de tu negocio: rentabilidad, costes, operativa, carta, equipo, experiencia de cliente, gestión y estrategia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-14">
            {[
              {
                icon: <ClipboardList size={28} className="text-amber" />,
                title: "Respondes preguntas sobre tu operación",
                body: "66 preguntas breves organizadas en 8 bloques. No necesitas preparar documentación. Tarda unos 10 minutos.",
              },
              {
                icon: <BarChart2 size={28} className="text-amber" />,
                title: "Recibes tu score global",
                body: "Un número entre 0 y 100 que refleja el estado actual de tu negocio en rentabilidad, operativa, equipo y experiencia de cliente.",
              },
              {
                icon: <AlertTriangle size={28} className="text-amber" />,
                title: "Identificas tus prioridades",
                body: "Las áreas críticas ordenadas por impacto. Sabes exactamente dónde actuar primero y por qué.",
              },
              {
                icon: <ArrowRight size={28} className="text-amber" />,
                title: "Decides el siguiente paso",
                body: "Si quieres profundizar, puedes reservar una sesión gratuita de 20 minutos para revisar los resultados juntos.",
              },
              {
                icon: <Shield size={28} className="text-amber" />,
                title: "Completamente confidencial",
                body: "Tus respuestas son solo tuyas. No se comparten, no se venden y no recibirás spam.",
              },
            ].map((item, i) => (
              <div key={i} className="border-t border-amber/30 pt-6">
                <div className="mb-5">{item.icon}</div>
                <h3 className="font-display text-navy text-base font-semibold leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <TrackingLink
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="diagnostico_click"
            eventLabel="Sección diagnóstico home"
          >
            Recibir Diagnóstico Gratuito
            <ArrowRight size={16} />
          </TrackingLink>
        </div>
      </section>

      <MapaDiagnostico />

      {/* ── INTRODUCCIÓN PERSONAL ──────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Foto real — archivo: /public/Adrian Sobre Mi.png */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/Adrian Sobre Mi.webp"
                alt="Adrián Pollán, consultor de hostelería y restaurantes con 20 años de experiencia"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                quality={85}
                className="object-cover object-top"
              />
            </div>

            {/* Texto */}
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
                Quién está detrás
              </p>
              <p className="font-body text-navy text-xl lg:text-2xl font-light leading-relaxed mb-6">
                Soy Adrián Pollán, consultor en restauración y F&B con más de
                20 años de experiencia operativa real en España, Francia,
                Reino Unido e Irlanda.
              </p>
              <p className="font-body text-ink/60 text-base leading-relaxed mb-8">
                Ayudo a negocios de hostelería a ser más rentables, más
                organizados y más sostenibles.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="/sobre-mi"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-navy border-b border-amber/60 pb-0.5 hover:border-amber transition-colors"
                >
                  Conocer mi historia <ArrowRight size={14} />
                </Link>
                <a
                  href="https://www.linkedin.com/in/adrianpollanfernandez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-ink/50 hover:text-navy transition-colors"
                >
                  <LinkedinIcon size={14} />
                  Sígueme en LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESTADÍSTICAS — fondo amber ─────────────────────────────── */}
      <Stats />

      {/* ── POR QUÉ TRABAJAR CONMIGO — fondo crema oscuro ──────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Por qué confiar en mí
            </p>
            <h2 className="font-display text-navy text-3xl lg:text-5xl font-semibold leading-tight">
              Por qué trabajar conmigo
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Clock size={24} className="text-amber" />,
                title: "20+ años en operaciones reales",
                body: "No desde un despacho. Desde cocina, sala, gestión y dirección general en negocios abiertos.",
              },
              {
                icon: <Globe size={24} className="text-amber" />,
                title: "4 países de experiencia",
                body: "España, Francia, Reino Unido e Irlanda. Contextos distintos, problemas distintos, soluciones distintas.",
              },
              {
                icon: <Building2 size={24} className="text-amber" />,
                title: "Hoteles y restaurantes de todos los tamaños",
                body: "Desde restaurantes familiares hasta propiedades de lujo con operativas complejas.",
              },
              {
                icon: <Target size={24} className="text-amber" />,
                title: "Especialización en rentabilidad y F&B",
                body: "Food cost, prime cost, carta, equipos, operativa y experiencia de cliente.",
              },
              {
                icon: <BookOpen size={24} className="text-amber" />,
                title: "Método propio basado en diagnóstico y datos",
                body: "No trabajo con intuiciones. Trabajo con información real y decisiones fundamentadas.",
              },
              {
                icon: <CheckCircle size={24} className="text-amber" />,
                title: "Acompañamiento real, no informes",
                body: "Me quedo en el proceso mientras tiene sentido estar. No entrego un PDF y desaparezco.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber/10 border border-amber/20 rounded-lg flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-navy text-base font-semibold leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-body text-ink/60 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿PARA QUIÉN? — fondo blanco ────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              ¿Para quién?
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              ¿Necesitas un consultor para tu restaurante?
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {audienceCardData.map((card, i) => (
              <div
                key={card.num}
                className="bg-cream-dark shadow-md border border-navy/10 rounded-xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_-8px_rgba(186,117,23,0.4)] hover:border-amber/40"
              >
                <div className="mb-4">{audienceIcons[i]}</div>
                <span className="font-display text-4xl font-light text-amber/50 block mb-5">
                  {card.num}
                </span>
                <h3 className="font-display text-navy text-xl lg:text-2xl font-semibold mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="font-body text-ink/65 text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMPIEZA SEGÚN TU SITUACIÓN — fondo crema oscuro ─────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Empieza aquí
            </p>
            <h2 className="font-display text-navy text-3xl lg:text-5xl font-semibold leading-tight">
              Empieza según tu situación
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {[
              {
                icon: <TrendingDown size={26} className="text-amber" />,
                situation: "Vendo bien pero no gano lo que debería",
                cta: (
                  <TrackingLink
                    href="https://diagnostico.adrianpollan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 btn-amber text-navy text-sm font-semibold tracking-wide self-start mt-auto"
                    eventName="diagnostico_click"
                    eventLabel="Empieza según situación — home"
                  >
                    Recibir Diagnóstico Gratuito <ArrowRight size={14} />
                  </TrackingLink>
                ),
              },
              {
                icon: <Calculator size={26} className="text-amber" />,
                situation: "Quiero controlar mis costes",
                cta: (
                  <Link
                    href="/herramientas/calculadora-prime-cost"
                    className="inline-flex items-center gap-2 px-5 py-3 btn-amber text-navy text-sm font-semibold tracking-wide self-start mt-auto"
                  >
                    Calcular mi prime cost <ArrowRight size={14} />
                  </Link>
                ),
              },
              {
                icon: <Key size={26} className="text-amber" />,
                situation: "Voy a abrir un restaurante",
                cta: (
                  <Link
                    href="/herramientas/checklist-apertura"
                    className="inline-flex items-center gap-2 px-5 py-3 btn-amber text-navy text-sm font-semibold tracking-wide self-start mt-auto"
                  >
                    Usar el checklist de apertura <ArrowRight size={14} />
                  </Link>
                ),
              },
              {
                icon: <Phone size={26} className="text-amber" />,
                situation: "Necesito ayuda directa",
                cta: (
                  <TrackingLink
                    href="https://calendly.com/adrianpollan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 btn-amber text-navy text-sm font-semibold tracking-wide self-start mt-auto"
                    eventName="calendly_click"
                    eventLabel="Empieza según situación — home"
                  >
                    Reservar sesión gratuita <ArrowRight size={14} />
                  </TrackingLink>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-navy/10 rounded-xl p-6 lg:p-8 flex flex-col gap-5"
              >
                {card.icon}
                <p className="font-display text-navy text-lg font-semibold leading-snug flex-1">
                  {card.situation}
                </p>
                {card.cta}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — fondo blanco ────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Servicios
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Mis servicios como consultor de restaurantes
            </h2>
            <p className="font-body text-ink/60 text-lg leading-relaxed">
              Según el momento en el que está tu negocio, el acompañamiento
              que necesitas es distinto.
            </p>
          </div>

          {/* Tarjetas simplificadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Search size={28} className="text-amber" />,
                title: "Diagnóstico y Auditoría F&B",
                line: "Entiende qué está pasando de verdad antes de cambiar nada.",
              },
              {
                icon: <LineChart size={28} className="text-amber" />,
                title: "Consultoría Operativa Continuada",
                line: "Acompañamiento real mientras el negocio sigue abierto.",
              },
              {
                icon: <Rocket size={28} className="text-amber" />,
                title: "Acompañamiento a Aperturas",
                line: "Mejores decisiones antes de comprometer tu inversión.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-cream-dark shadow-md border border-navy/10 rounded-xl p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_-8px_rgba(186,117,23,0.4)] hover:border-amber/40"
              >
                <div className="mb-5">{s.icon}</div>
                <h3 className="font-display text-navy text-xl lg:text-2xl font-semibold leading-tight mb-3">
                  {s.title}
                </h3>
                <p className="font-body text-ink/65 text-sm leading-relaxed mb-6 flex-1">
                  {s.line}
                </p>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-navy border-b border-amber/60 pb-0.5 self-start hover:border-amber hover:text-amber transition-colors"
                >
                  Ver más <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA central */}
          <div className="flex justify-center mt-14 lg:mt-16">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-8 py-4 border border-navy text-navy text-sm font-medium tracking-wide hover:bg-navy hover:text-cream transition-colors"
            >
              Conoce todos los servicios en detalle
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HERRAMIENTA IA — navy con gradiente del hero ──────────── */}
      <section className="hero-navy py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            Herramienta gratuita · IA
          </p>
          <h2 className="font-display text-cream text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            ¿No sabes por dónde empezar? Empieza aquí.
          </h2>
          <p className="font-body text-cream/70 text-lg leading-relaxed mb-8">
            He desarrollado una herramienta de diagnóstico gratuita con
            inteligencia artificial, diseñada específicamente para negocios
            de hostelería y restauración. En pocos minutos obtienes un
            informe personalizado con las áreas de mejora más relevantes
            para tu situación concreta. Gratuita. Sin registro. Sin compromiso.
          </p>

          <div className="space-y-3 mb-10 pl-4 border-l-2 border-amber/50">
            {[
              "Rentabilidad y control de costes",
              "Gestión de equipo y liderazgo",
              "Operativa y procesos",
              "Carta, pricing y experiencia cliente",
              "Informe personalizado con plan de acción",
            ].map((area, i) => (
              <p key={i} className="font-body text-cream/75 text-sm">
                — {area}
              </p>
            ))}
          </div>

          <TrackingLink
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-amber inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="diagnostico_click"
            eventLabel="Sección problemas home"
          >
            Recibir Diagnóstico Gratuito
            <ArrowRight size={16} />
          </TrackingLink>
        </div>
      </section>

      {/* ── HERRAMIENTAS GRATUITAS — fondo blanco ────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
                Herramientas gratuitas
              </p>
              <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight">
                Herramientas gratuitas para tu restaurante
              </h2>
              <p className="font-body text-ink/60 text-base mt-2">
                Calcula, analiza y mejora con estas herramientas prácticas.
              </p>
            </div>
            <Link
              href="/herramientas"
              className="inline-flex items-center gap-1.5 font-body text-sm text-navy/55 hover:text-navy transition-colors whitespace-nowrap flex-shrink-0"
            >
              Ver todas las herramientas <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                href: "/herramientas/calculadora-escandallo",
                label: "Calculadora",
                title: "Escandallo",
                description: "Calcula el coste exacto de producción de tus platos, el food cost y el precio de venta recomendado.",
              },
              {
                href: "/herramientas/checklist-apertura",
                label: "Checklist",
                title: "Apertura",
                description: "Revisa los 24 puntos clave antes de abrir tu restaurante.",
              },
              {
                href: "/herramientas/checklist-food-cost",
                label: "Checklist",
                title: "Food Cost",
                description: "Evalúa si tienes los sistemas básicos de control de costes implementados.",
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-cream-dark border border-navy/8 rounded-xl p-6 hover:border-amber/40 transition-colors flex flex-col"
              >
                <span className="font-body text-amber text-xs tracking-widest uppercase mb-2">
                  {tool.label}
                </span>
                <h3 className="font-display text-navy text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed flex-1 mb-4">
                  {tool.description}
                </p>
                <span className="font-body text-amber text-sm font-medium group-hover:underline">
                  Usar herramienta →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS REALES (compacto) — fondo crema oscuro ─────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
                Casos reales
              </p>
              <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight">
                Situaciones reales, resultados concretos
              </h2>
            </div>
            <Link
              href="/casos-reales"
              className="inline-flex items-center gap-1.5 font-body text-sm text-navy/55 hover:text-navy transition-colors whitespace-nowrap flex-shrink-0"
            >
              Ver todos los casos <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              {
                label: "Rentabilidad",
                title: "Restaurante con buena ocupación y margen insuficiente",
                antes: ["48 referencias activas", "Merma no controlada", "Sin seguimiento de margen"],
                despues: ["Carta reducida a 31 referencias", "Control semanal de merma", "Sistema real de seguimiento"],
                resultado: "En 12 semanas: de gestionar por intuición a tomar decisiones con datos reales.",
              },
              {
                label: "Apertura",
                title: "Emprendedor antes de firmar el local",
                antes: ["Alquiler al 18% sobre ventas proyectadas", "Concepto sin diferenciación clara", "Inversión sobredimensionada"],
                despues: ["Local alternativo un 30% más barato", "Concepto reposicionado", "Plan de inversión ajustado"],
                resultado: "No firmó ese local. Abrió tres meses después con estructura financiera más sólida.",
              },
              {
                label: "F&B Hotelero",
                title: "Hotel con operación F&B poco rentable",
                antes: ["F&B sin KPIs ni seguimiento", "Alta rotación, sin procesos", "Clientes raramente usaban el restaurante"],
                despues: ["Concepto alineado con el huésped", "KPIs implantados: food cost, labour cost", "Equipo formado en venta contextual"],
                resultado: "El F&B dejó de ser un problema y se convirtió en un diferenciador real.",
              },
            ].map((caso, i) => (
              <div
                key={i}
                className="bg-white border border-navy/10 rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40"
              >
                <span className="font-body text-amber text-xs tracking-widest uppercase mb-3">
                  {caso.label}
                </span>
                <h3 className="font-display text-navy text-base font-semibold leading-snug mb-4">
                  {caso.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 flex-1 mb-4">
                  <div>
                    <p className="font-body text-ink/40 text-xs uppercase tracking-wider mb-1.5">Antes</p>
                    <ul className="space-y-1">
                      {caso.antes.map((item, j) => (
                        <li key={j} className="flex items-start gap-1.5">
                          <span className="text-ink/30 text-xs mt-0.5 flex-shrink-0">—</span>
                          <p className="font-body text-ink/55 text-xs leading-snug">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-body text-amber text-xs uppercase tracking-wider mb-1.5">Después</p>
                    <ul className="space-y-1">
                      {caso.despues.map((item, j) => (
                        <li key={j} className="flex items-start gap-1.5">
                          <span className="text-amber text-xs mt-0.5 flex-shrink-0">✓</span>
                          <p className="font-body text-ink/70 text-xs leading-snug">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pt-4 border-t border-navy/10">
                  <CheckCircle size={16} className="text-amber mt-0.5 flex-shrink-0" />
                  <p className="font-body text-ink/65 text-sm leading-relaxed italic">
                    {caso.resultado}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL MÉTODO ADRIÁN — LIBRO — fondo blanco ─────────────── */}
      <section className="bg-white py-10 lg:py-14 border-t border-navy/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
              Mi libro
            </p>
            <h2 className="font-display text-navy text-2xl lg:text-3xl font-semibold leading-tight mb-2">
              El Método ADRIÁN
            </h2>
            <p className="font-body text-navy/50 text-sm italic mb-5">
              Gestión de hostelería desde la experiencia real. Próximamente.
            </p>
            <p className="font-body text-ink/60 text-sm leading-relaxed mb-5">
              Si quieres ser el primero en saber cuándo sale, déjame tu email.
            </p>
            <WaitlistForm buttonText="Avísame cuando salga" />
            <p className="font-body text-navy/40 text-xs mt-3">
              Sin spam. Solo el aviso cuando esté disponible.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — fondo crema oscuro ────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
            Empezar
          </p>
          <h2 className="font-display text-navy text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 max-w-3xl mx-auto">
            El primer paso es siempre el más sencillo.
          </h2>
          <p className="font-body text-ink/65 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Una sesión gratuita de 20 minutos para ver dónde está tu negocio
            y si tiene sentido trabajar juntos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="calendly_click"
              eventLabel="CTA final home"
            >
              Reserva tu sesión gratuita
              <ArrowRight size={16} />
            </TrackingLink>
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
              eventName="diagnostico_click"
              eventLabel="CTA final home secundario"
            >
              O haz el diagnóstico gratuito →
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
