import Image from "next/image";
import Link from "next/link";
import Ticker from "@/components/Ticker";
import WaitlistForm from "@/components/WaitlistForm";
import { ArrowRight, TrendingDown, Users, Key, Search, LineChart, Rocket } from "lucide-react";

const PHOTOS = {
  hero: "/hero.png",
};

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
      <section className="relative min-h-screen bg-navy flex flex-col justify-end overflow-hidden">
        {/* Background photo */}
        <Image
          src={PHOTOS.hero}
          alt="Restaurante elegante"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        {/* Gradient overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/50" />

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

            <p className="font-body text-cream/65 text-lg lg:text-xl leading-relaxed max-w-xl mb-12">
              Más de 20 años de experiencia operativa real en España,
              Francia, Reino Unido e Irlanda.
            </p>

            {/* CTAs — diagnóstico primero (CTA principal), Calendly segundo */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://diagnostico.adrianpollan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-navy text-sm font-semibold tracking-wide hover:bg-amber-hover transition-colors"
              >
                Haz el diagnóstico gratuito
                <ArrowRight size={16} />
              </a>
              <Link
                href="/hablemos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/35 text-cream text-sm font-medium tracking-wide hover:bg-cream/10 transition-colors"
              >
                Reserva una sesión gratuita
                <ArrowRight size={16} />
              </Link>
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

      {/* ── INTRODUCCIÓN PERSONAL ──────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Foto real — archivo: /public/Adrian Sobre Mi.png */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/Adrian Sobre Mi.png"
                alt="Adrián Pollán — consultor en hostelería y restauración"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
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
              <Link
                href="/sobre-mi"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-navy border-b border-amber/60 pb-0.5 hover:border-amber transition-colors"
              >
                Conocer mi historia <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────────────────────── */}
      <Ticker />

      {/* ── ¿PARA QUIÉN? — fondo blanco ────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              ¿Para quién?
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              ¿Reconoces alguna de estas situaciones?
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {audienceCardData.map((card, i) => (
              <div
                key={card.num}
                className="bg-cream border border-navy/8 p-8 lg:p-10 hover:border-amber/50 hover:shadow-sm transition-all duration-300"
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

      {/* ── SERVICIOS — fondo crema ─────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Servicios
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Tres formas de trabajar juntos.
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
                className="bg-white border border-navy/8 p-8 lg:p-10 flex flex-col hover:border-amber/50 hover:shadow-sm transition-all duration-300"
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

      {/* ── HERRAMIENTA IA — fondo blanco con acento amber ──────────── */}
      <section className="bg-white border-t-4 border-amber py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            Herramienta gratuita · IA
          </p>
          <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            ¿No sabes por dónde empezar? Empieza aquí.
          </h2>
          <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
            He desarrollado una herramienta de diagnóstico gratuita con
            inteligencia artificial, diseñada específicamente para negocios
            de hostelería y restauración. En pocos minutos obtienes un
            informe personalizado con las áreas de mejora más relevantes
            para tu situación concreta. Gratuita. Sin registro. Sin compromiso.
          </p>

          <div className="space-y-3 mb-10 pl-4 border-l-2 border-amber/40">
            {[
              "Rentabilidad y control de costes",
              "Gestión de equipo y liderazgo",
              "Operativa y procesos",
              "Carta, pricing y experiencia cliente",
              "Informe personalizado con plan de acción",
            ].map((area, i) => (
              <p key={i} className="font-body text-ink/70 text-sm">
                — {area}
              </p>
            ))}
          </div>

          <a
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-navy text-sm font-semibold tracking-wide hover:bg-amber-hover transition-colors"
          >
            Hacer el diagnóstico gratuito
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ── EL MÉTODO ADRIÁN — LIBRO — fondo crema ─────────────────── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Portada del libro — placeholder elegante */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 lg:w-72 xl:w-80">
                {/* Sombra del libro */}
                <div className="absolute -bottom-4 left-4 right-0 h-full bg-navy/10 blur-xl" />
                {/* Portada */}
                <div className="relative bg-navy aspect-[2/3] flex flex-col justify-between p-8 lg:p-10 shadow-2xl">
                  {/* Línea superior decorativa */}
                  <div className="space-y-3">
                    <div className="h-px w-12 bg-amber" />
                    <p className="font-body text-amber text-xs tracking-widest uppercase">
                      Adrián Pollán
                    </p>
                  </div>
                  {/* Título */}
                  <div>
                    <p className="font-body text-cream/40 text-xs tracking-widest uppercase mb-4">
                      El Método
                    </p>
                    <h3 className="font-display text-cream text-5xl lg:text-6xl font-semibold leading-none tracking-tight">
                      ADRIÁN
                    </h3>
                    <div className="mt-6 h-px w-full bg-amber/30" />
                    <p className="font-body text-cream/35 text-xs mt-3 leading-relaxed">
                      Gestión de negocios de hostelería
                    </p>
                  </div>
                  {/* Próximamente badge */}
                  <div className="inline-flex self-start">
                    <span className="font-body text-navy text-xs font-semibold tracking-widest uppercase bg-amber px-3 py-1.5">
                      Próximamente
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
                Mi libro
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                El Método ADRIÁN
              </h2>
              <p className="font-display text-navy/50 text-xl italic mb-8 leading-relaxed">
                Un libro sobre gestión de negocios de hostelería escrito
                desde la experiencia real. Próximamente.
              </p>

              <p className="font-body text-ink/70 text-base leading-relaxed mb-10">
                Más de veinte años de operaciones reales, errores incluidos,
                destilados en un sistema de gestión que funciona. Si quieres
                ser el primero en saber cuándo sale, déjame tu email.
              </p>

              <WaitlistForm buttonText="Avísame cuando salga" />

              <p className="font-body text-navy/40 text-xs mt-4">
                Sin spam. Solo el aviso cuando esté disponible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — navy (único bloque oscuro del final) ────────── */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
            Empezar
          </p>
          <h2 className="font-display text-cream text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 max-w-3xl mx-auto">
            El primer paso es siempre el más sencillo.
          </h2>
          <p className="font-body text-cream/55 text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Una sesión gratuita de 20 minutos para ver dónde está tu negocio
            y si tiene sentido trabajar juntos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hablemos"
              className="inline-flex items-center gap-2 px-10 py-4 bg-amber text-navy text-sm font-semibold tracking-wide hover:bg-amber-hover transition-colors"
            >
              Reserva tu sesión gratuita
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-cream/60 hover:text-cream transition-colors"
            >
              O haz el diagnóstico gratuito →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
