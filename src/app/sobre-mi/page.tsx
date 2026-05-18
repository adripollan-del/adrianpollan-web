import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
                  src="/Adrian Sobre Mi.png"
                  alt="Adrián Pollán, consultor de hostelería y restaurantes con 20 años de experiencia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
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

      {/* ── CIERRE CTA — fondo crema oscuro ───────────────────────── */}
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
              <a
                href="https://calendly.com/adrianpollan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              >
                Reserva una sesión gratuita de 20 minutos <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
