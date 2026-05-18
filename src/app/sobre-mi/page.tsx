import type { Metadata } from "next";
import Image from "next/image";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, CheckCircle, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Mí — Adrián Pollán | Consultor de Hostelería con 20 Años de Experiencia",
  description:
    "Conoce a Adrián Pollán: consultor en restauración y F&B con más de 20 años de experiencia operativa en España, Francia, Reino Unido e Irlanda. Trabajo desde dentro del negocio, no desde un despacho.",
  alternates: {
    canonical: "https://adrianpollan.com/sobre-mi",
  },
  openGraph: {
    title: "Adrián Pollán — Consultor de Hostelería | 20 Años de Experiencia Real",
    description:
      "Más de 20 años en operaciones reales de hostelería en cuatro países. Consultor especializado en rentabilidad, F&B y gestión operativa.",
    url: "https://adrianpollan.com/sobre-mi",
  },
};

export default function SobreMiPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1613929298076-735f9cf15ed2?auto=format&fit=crop&w=1920&q=80"
          alt="Ambiente de restaurante de hostelería — consultor con más de 20 años de experiencia"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Sobre mí
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Veinte años dentro del negocio.<br />
              <span className="font-semibold">Ahora trabajo para que el tuyo funcione mejor.</span>
            </h1>
            <p className="font-display text-cream/50 text-xl lg:text-2xl italic leading-relaxed">
              Consultor en restauración y F&B para negocios que quieren ser
              más rentables, más organizados y más sostenibles.
            </p>
          </div>
        </div>
      </section>

      {/* ── MI HISTORIA — fondo blanco ──────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Foto */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/Adrian Sobre Mi.webp"
                  alt="Adrián Pollán, consultor de hostelería y restaurantes con 20 años de experiencia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                  quality={85}
                  className="object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { num: "20+", label: "años en la industria" },
                  { num: "4", label: "países de experiencia" },
                ].map((stat) => (
                  <div key={stat.num} className="bg-cream-dark border border-navy/10 rounded-xl p-4">
                    <p className="font-display text-amber text-3xl font-semibold">{stat.num}</p>
                    <p className="font-body text-navy/60 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contenido derecho — intro + 01 Mi historia */}
            <div className="lg:col-span-8 space-y-14">
              {/* Intro */}
              <div>
                <p className="font-body text-ink/70 text-lg leading-relaxed">
                  No llegué a la consultoría desde una carrera académica ni desde
                  un despacho. Llegué después de más de veinte años trabajando
                  dentro de la hostelería real, en distintos países, distintos
                  tipos de negocio y distintos niveles de responsabilidad. Desde
                  la operativa diaria hasta la dirección general. Desde la cocina
                  hasta los números.
                </p>
              </div>

              {/* 01 Mi historia */}
              <div>
                <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">01 — Mi historia</p>
                <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold mb-6">
                  Consultor de hostelería con más de 20 años de experiencia operativa
                </h2>
                <div className="space-y-4 font-body text-ink/70 text-base leading-relaxed">
                  <p>
                    Mi relación con la hostelería no empezó en un aula. Empezó en
                    la operación, aprendiendo cómo funcionan las cosas de verdad,
                    con presión de servicio, problemas de personal, márgenes
                    ajustados y la exigencia de tomar decisiones constantes sin
                    margen de error.
                  </p>
                  <p>
                    Con el tiempo fui asumiendo más responsabilidad. Pasé por
                    cocina, sala, gestión de equipos, control de costes, dirección
                    de operaciones y dirección general. Trabajé en España, Francia,
                    Reino Unido e Irlanda, en propiedades muy distintas entre sí,
                    desde hoteles boutique en entornos rurales hasta
                    establecimientos de lujo con una operativa compleja y equipos
                    grandes.
                  </p>
                  <p>
                    Cometí errores. Tomé decisiones equivocadas y aprendí de
                    ellas. Todo eso forma parte de lo que soy como profesional,
                    y es exactamente lo que pongo encima de la mesa cuando trabajo
                    con un cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ HAGO ESTO — fondo crema oscuro ──────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">02 — Por qué hago esto</p>
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold mb-6">
            Muchos negocios no fallan por falta de trabajo. Fallan por falta de método.
          </h2>
          <div className="space-y-4 font-body text-ink/70 text-base leading-relaxed">
            <p>
              A lo largo de mi carrera he visto una y otra vez el mismo
              patrón: propietarios y gestores que trabajan muchísimo, que
              conocen su negocio mejor que nadie, y que aun así no consiguen
              los resultados que esperaban.
            </p>
            <p>
              No es falta de esfuerzo. Casi nunca lo es. Es falta de
              visibilidad sobre lo que está pasando realmente. Es operar sin
              los datos correctos, tomar decisiones sin la información
              suficiente, o estar tan dentro del día a día que es imposible
              ver el negocio con perspectiva.
            </p>
          </div>
        </div>
      </section>

      {/* ── MI FORMA DE TRABAJAR — fondo blanco ─────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            03 — Mi forma de trabajar
          </p>
          <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-8">
            Primero entender. Después actuar.
          </h2>
          <div className="space-y-5 font-body text-ink/70 text-base leading-relaxed">
            <p>
              Cada negocio es distinto. Tiene su historia, su equipo, su
              mercado y sus propias tensiones. Por eso nunca empiezo un
              proyecto con recomendaciones. Empiezo con preguntas.
            </p>
            <p>
              La fase de diagnóstico es la más importante de cualquier
              proceso de consultoría, aunque también es la que más se suele
              saltarse. Una vez que tengo una foto completa del negocio,
              definimos juntos qué mover primero y por qué.
            </p>
            <p>
              No entrego un informe y desaparezco. Me quedo en el proceso,
              acompañando los cambios mientras el negocio sigue abierto.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ ME DIFERENCIA — fondo crema oscuro ──────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            04 — Qué me diferencia
          </p>
          <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Lo que me distingue no es lo que sé. Es desde dónde lo sé.
          </h2>
          <p className="font-body text-ink/65 text-base leading-relaxed mb-10">
            Hay muchos consultores que conocen la teoría de la gestión
            hostelera. Yo conozco la práctica. Cuando hablo de food cost,
            de gestión de turnos, de estructura de equipos o de mezcla de
            ventas, no lo hago desde la distancia de quien ha estudiado el
            tema. Lo hago desde la experiencia de quien ha tenido que
            resolverlo con un servicio a punto de empezar y sin margen para
            equivocarse.
          </p>
          <ul className="space-y-4">
            {[
              "Experiencia real en operaciones, no solo en consultoría",
              "He trabajado en España, Francia, Reino Unido e Irlanda",
              "Me implico en la ejecución, no solo en el diagnóstico",
              "Resultados medibles desde el primer día de trabajo",
              "Acceso directo: sin intermediarios ni cuentas de cliente",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-amber font-display text-lg flex-shrink-0 mt-0.5">—</span>
                <p className="font-body text-ink/75 text-base">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PARA QUIÉN TRABAJO — fondo blanco ────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              05 — Para quién trabajo
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-8">
              Si reconoces tu situación aquí, probablemente podemos trabajar juntos.
            </h2>
            <div className="space-y-4 font-body text-ink/70 text-base leading-relaxed">
              <p>
                Trabajo con propietarios de restaurantes que venden bien pero no
                ganan lo que deberían. Con gerentes que sienten que el negocio
                depende demasiado de ellos. Con emprendedores que están a punto
                de abrir y quieren evitar los errores que cuestan años y dinero.
              </p>
              <p>
                Con hoteles y establecimientos que quieren que su área de
                restauración deje de ser un dolor de cabeza y empiece a ser un
                activo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASOS REALES — fondo crema oscuro ────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Casos reales
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-4 max-w-2xl">
              Situaciones reales, resultados concretos
            </h2>
            <p className="font-body text-ink/65 text-lg leading-relaxed max-w-2xl mb-2">
              Cada proyecto es distinto. Estos son tres ejemplos de lo que puede
              cambiar cuando se trabaja con criterio y método.
            </p>
            <p className="font-body text-ink/40 text-xs">
              Los casos se presentan de forma anónima para proteger la
              confidencialidad de los negocios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "Rentabilidad",
                title: "Restaurante con buena ocupación y margen insuficiente",
                situacion:
                  "Un restaurante independiente de 50 cubiertos con buena reputación local y ocupación alta los fines de semana. Facturaban bien, pero a fin de mes apenas quedaba margen.",
                problema:
                  "Carta demasiado amplia con merma constante, escandallos desactualizados y mezcla de ventas desfavorable donde los platos más populares eran los de menor margen.",
                acciones:
                  "Reducción de carta en un 35%, actualización de escandallos, reorganización del menú para potenciar platos rentables y formación del equipo de sala.",
                resultado:
                  "En doce semanas el propietario tenía por primera vez una foto clara de dónde estaba yendo el dinero. El control de costes dejó de ser una intuición y pasó a ser un proceso medible y repetible.",
              },
              {
                label: "Apertura",
                title: "Emprendedor antes de firmar el local",
                situacion:
                  "Un emprendedor con experiencia en sala estaba a punto de firmar un local. Tenía el concepto claro, ilusión y algunos ahorros. Contactó para pedir una segunda opinión antes de comprometerse.",
                problema:
                  "El alquiler representaba casi el 18% de las ventas proyectadas en el escenario optimista y el concepto era muy similar a dos negocios ya establecidos en la misma calle.",
                acciones:
                  "Validación del concepto, ajuste del posicionamiento, análisis de tres locales alternativos y revisión del plan de inversión inicial.",
                resultado:
                  "No firmó ese local. Tres meses después encontró una opción con un alquiler un 30% inferior y en una zona con menos competencia directa. Abrió con una propuesta más definida y una estructura financiera más sólida.",
              },
              {
                label: "F&B Hotelero",
                title: "Hotel con operación F&B poco rentable",
                situacion:
                  "Un hotel boutique con restaurante y bar trataba su F&B como un servicio complementario casi obligatorio. El departamento generaba más problemas que ingresos y el equipo tenía alta rotación.",
                problema:
                  "Sin identidad propia, carta genérica, precios no calibrados para el perfil del cliente y equipo sin sistema de venta activa. Coste de personal desproporcionado para el volumen generado.",
                acciones:
                  "Redefinición del concepto gastronómico, rediseño de carta, ajuste de precios, formación en venta contextual y creación de KPIs mensuales.",
                resultado:
                  "El F&B pasó de ser percibido como un coste inevitable a convertirse en un elemento diferenciador de la experiencia del hotel. El propietario empezó a tener datos reales sobre el rendimiento del departamento por primera vez.",
              },
            ].map((caso, i) => (
              <div
                key={i}
                className="bg-white border border-navy/10 rounded-xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40"
              >
                <span className="inline-block font-body text-amber text-xs tracking-widest uppercase mb-4">
                  {caso.label}
                </span>
                <h3 className="font-display text-navy text-lg font-semibold leading-snug mb-5">
                  {caso.title}
                </h3>
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="font-body text-ink/40 text-xs uppercase tracking-wider mb-1">
                      Situación
                    </p>
                    <p className="font-body text-ink/65 text-sm leading-relaxed">
                      {caso.situacion}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-ink/40 text-xs uppercase tracking-wider mb-1">
                      Problema
                    </p>
                    <p className="font-body text-ink/65 text-sm leading-relaxed">
                      {caso.problema}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-ink/40 text-xs uppercase tracking-wider mb-1">
                      Acciones
                    </p>
                    <p className="font-body text-ink/65 text-sm leading-relaxed">
                      {caso.acciones}
                    </p>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-navy/10 flex items-start gap-3">
                  <CheckCircle size={18} className="text-amber mt-0.5 flex-shrink-0" />
                  <p className="font-body text-ink/75 text-sm leading-relaxed">
                    {caso.resultado}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Sobre mí — casos reales"
            >
              ¿Tu situación se parece a alguna de estas? Haz el diagnóstico gratuito
              <ArrowRight size={15} />
            </TrackingLink>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS — fondo blanco ───────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight">
              Lo que dicen quienes han trabajado conmigo
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              {
                text: "Llevábamos tres años con el restaurante lleno casi todos los fines de semana y sin entender por qué el margen no aparecía. En dos meses de trabajo con Adrián identificamos dónde se escapaba el dinero y lo corregimos. El cambio fue inmediato.",
                name: "Carlos M.",
                role: "Propietario, Restaurante en Miami",
              },
              {
                text: "Estaba a punto de firmar el local para mi primer restaurante cuando empecé a trabajar con Adrián. Me hizo las preguntas que nadie me había hecho y me ayudó a tomar decisiones mucho más sólidas antes de comprometer mi inversión.",
                name: "Laura G.",
                role: "Emprendedora, Valencia",
              },
              {
                text: "Lo que más me sorprendió fue que no llegó con soluciones preparadas. Primero entendió el negocio, luego propuso. Esa forma de trabajar marca la diferencia respecto a otros consultores que había contratado antes.",
                name: "Javier R.",
                role: "Director de F&B, Hotel en Ciudad de México",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white shadow-sm border border-navy/10 rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40"
              >
                <Quote size={20} className="text-amber mb-3" strokeWidth={1.5} />
                <p className="font-body text-ink/75 text-sm leading-relaxed mb-5 flex-1">
                  {t.text}
                </p>
                <div className="pt-4 border-t border-navy/10">
                  <p className="font-display text-navy text-xs font-semibold">{t.name}</p>
                  <p className="font-body text-ink/55 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIERRE CTA — fondo crema oscuro ──────────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-light leading-tight mb-5">
                Si algo de lo que has leído te resuena, el siguiente paso es sencillo.
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                No hace falta tener todo claro antes de contactar. Para eso está
                la primera conversación: para que puedas explicarme dónde estás
                y entre los dos veamos si tiene sentido trabajar juntos. Sin
                compromiso. Sin presión. Solo claridad.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <TrackingLink
                href="https://calendly.com/adrianpollan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
                eventName="calendly_click"
                eventLabel="Sobre mí"
              >
                Reserva una sesión gratuita de 20 minutos <ArrowRight size={15} />
              </TrackingLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
