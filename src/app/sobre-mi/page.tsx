import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, CheckCircle, Quote, X } from "lucide-react";
import LinkedinIcon from "@/components/LinkedinIcon";
import MetodoADRIAN from "@/components/MetodoADRIAN";

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
          quality={50}
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Sobre mí
            </p>
            <h1 className="font-display text-cream text-3xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
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
                <h2 className="font-display text-navy text-2xl lg:text-4xl font-semibold mb-6">
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
                    de operaciones y dirección general.
                  </p>
                  <p>
                    Trabajé en España, Francia, Reino Unido e Irlanda, en
                    propiedades muy distintas: desde hoteles boutique en entornos
                    rurales hasta establecimientos de lujo con operativas complejas
                    y equipos grandes.
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
          <h2 className="font-display text-navy text-2xl lg:text-4xl font-semibold mb-6">
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
              visibilidad sobre lo que está pasando realmente.
            </p>
            <p>
              Es operar sin los datos correctos, tomar decisiones sin la
              información suficiente, o estar tan dentro del día a día que
              resulta imposible ver el negocio con perspectiva.
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
          <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-8">
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

      <MetodoADRIAN />

      {/* ── QUÉ ME DIFERENCIA — fondo crema oscuro ──────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            04 — Qué me diferencia
          </p>
          <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-6">
            Lo que me distingue no es lo que sé. Es desde dónde lo sé.
          </h2>
          <div className="space-y-4 font-body text-ink/65 text-base leading-relaxed mb-10">
            <p>
              Hay muchos consultores que conocen la teoría de la gestión
              hostelera. Yo conozco la práctica.
            </p>
            <p>
              Cuando hablo de food cost, de gestión de turnos o de mezcla de
              ventas, no lo hago desde la distancia de quien ha estudiado el
              tema. Lo hago desde la experiencia de quien ha tenido que
              resolverlo con un servicio a punto de empezar y sin margen para
              equivocarse.
            </p>
          </div>
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

      {/* ── QUÉ NO HAGO — fondo blanco ───────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            05 — Qué no hago
          </p>
          <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-4">
            Qué no hago
          </h2>
          <p className="font-body text-ink/60 text-lg leading-relaxed mb-10">
            Tan importante como saber qué hago es saber qué no hago.
          </p>
          <ul className="space-y-5">
            {[
              "No vendo plantillas genéricas que sirven para cualquier negocio y para ninguno en concreto.",
              "No hago informes largos que nadie implementa. El trabajo real ocurre en la ejecución, no en el papel.",
              "No prometo resultados sin datos. Antes de hablar de mejoras, hay que entender qué está pasando realmente.",
              "No acepto proyectos donde no creo que pueda aportar valor real. Si no encajamos, te lo digo en la primera conversación.",
              "No desaparezco después de entregar un diagnóstico. Me quedo en el proceso mientras tenga sentido estar.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-amber/10 flex items-center justify-center">
                  <X size={12} className="text-amber" strokeWidth={2.5} />
                </span>
                <p className="font-body text-ink/75 text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PARA QUIÉN TRABAJO — fondo crema oscuro ──────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              06 — Para quién trabajo
            </p>
            <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-8">
              Si reconoces tu situación aquí, probablemente podemos trabajar juntos.
            </h2>
            <ul className="space-y-4">
              {[
                "Propietarios de restaurantes que venden bien pero no ganan lo que deberían.",
                "Gerentes que sienten que el negocio depende demasiado de ellos.",
                "Emprendedores a punto de abrir que quieren evitar los errores que cuestan años y dinero.",
                "Hoteles que quieren que su área de restauración deje de ser un coste y empiece a ser un activo real.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber font-display text-lg flex-shrink-0 mt-0.5">—</span>
                  <p className="font-body text-ink/70 text-base leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── NO TRABAJO CON TODO EL MUNDO — fondo navy ───────────── */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-cream text-2xl lg:text-5xl font-semibold leading-tight mb-3">
            No trabajo con todo el mundo.
          </h2>
          <p className="font-display text-cream/50 text-xl italic mb-6 leading-relaxed">
            Y eso es parte de cómo funciona.
          </p>
          <p className="font-body text-cream/55 text-base leading-relaxed mb-12">
            Prefiero decirlo con claridad desde el principio. Hay tipos de proyectos y perfiles con los que trabajo mejor, y hay situaciones donde no soy la persona adecuada. Saberlo antes ahorra tiempo a los dos.
          </p>

          {/* Grid de 2 columnas — los pares comparten fila, CSS grid iguala la altura automáticamente */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Cabeceras de columna */}
            <p className="font-body text-xs tracking-widest uppercase text-amber">Trabajo mejor con</p>
            <p className="font-body text-xs tracking-widest uppercase text-red-400">Probablemente no encajamos si</p>

            {/* Pares intercalados: col izq → col der, fila a fila */}
            {[
              { type: "good", text: "Propietarios que quieren mirar los números con honestidad, aunque lo que encuentren sea incómodo." },
              { type: "bad",  text: "Buscas alguien que te diga que todo está bien cuando no lo está." },
              { type: "good", text: "Negocios que quieren cambiar cosas de verdad, no solo tener un informe que justifique no cambiar nada." },
              { type: "bad",  text: "Quieres resultados en días sin cambiar nada en la operativa." },
              { type: "good", text: "Gestores que entienden que mejorar lleva tiempo y que los resultados no son inmediatos ni mágicos." },
              { type: "bad",  text: "El negocio no está dispuesto a dedicar tiempo al proceso de mejora." },
              { type: "good", text: "Personas que valoran el criterio y la experiencia operativa por encima de las promesas fáciles." },
              { type: "bad",  text: "Prefieres un consultor que valide decisiones ya tomadas en lugar de uno que las cuestione." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                {item.type === "good"
                  ? <CheckCircle size={18} className="text-amber flex-shrink-0 mt-0.5" strokeWidth={2} />
                  : <X size={18} className="text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                }
                <p className="font-body text-cream/80 text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS REALES — fondo blanco ──────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Casos reales
            </p>
            <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-4 max-w-2xl">
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
                antes: [
                  "Food cost estimado sin escandallos actualizados",
                  "Carta con 48 referencias activas",
                  "Merma no controlada",
                  "Sin sistema de seguimiento de margen",
                ],
                despues: [
                  "Escandallos actualizados para el 100% de la carta",
                  "Carta reducida a 31 referencias",
                  "Control semanal de merma implantado",
                  "Propietario con sistema real de seguimiento de margen",
                ],
                resultado:
                  "En 12 semanas el propietario pasó de gestionar por intuición a tomar decisiones con datos reales. El control de costes dejó de ser una estimación y se convirtió en un proceso medible y repetible.",
              },
              {
                label: "Apertura",
                title: "Emprendedor antes de firmar el local",
                antes: [
                  "Alquiler proyectado: 18% sobre ventas en escenario optimista",
                  "Concepto sin diferenciación clara frente a 2 competidores directos en la misma calle",
                  "Inversión inicial sobredimensionada en equipamiento",
                ],
                despues: [
                  "Local alternativo con alquiler un 30% inferior",
                  "Concepto reposicionado con propuesta de valor diferenciada",
                  "Plan de inversión ajustado con partidas priorizadas",
                ],
                resultado:
                  "El emprendedor no firmó ese local. Tres meses después abrió con una estructura financiera más sólida y una propuesta más definida desde el primer día.",
              },
              {
                label: "F&B Hotelero",
                title: "Hotel con operación F&B poco rentable",
                antes: [
                  "F&B sin KPIs propios ni seguimiento mensual",
                  "Rotación de equipo alta, sin procesos documentados",
                  "Clientes del hotel raramente usaban el restaurante",
                ],
                despues: [
                  "Concepto gastronómico alineado con el perfil del huésped",
                  "Carta rediseñada y precios recalibrados",
                  "KPIs mensuales implantados: food cost, labour cost y ticket medio",
                  "Equipo formado en venta contextual",
                ],
                resultado:
                  "El F&B pasó de ser un departamento problemático a convertirse en un elemento diferenciador de la experiencia del hotel. El propietario tuvo datos reales sobre el rendimiento del área por primera vez.",
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
                <div className="grid grid-cols-2 gap-4 flex-1 mb-5">
                  <div>
                    <p className="font-body text-ink/40 text-xs uppercase tracking-wider mb-2">Antes</p>
                    <ul className="space-y-1.5">
                      {caso.antes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-ink/30 text-xs mt-0.5 flex-shrink-0">—</span>
                          <p className="font-body text-ink/55 text-xs leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-body text-amber text-xs uppercase tracking-wider mb-2">Después</p>
                    <ul className="space-y-1.5">
                      {caso.despues.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-amber text-xs mt-0.5 flex-shrink-0">✓</span>
                          <p className="font-body text-ink/70 text-xs leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-5 border-t border-navy/10 flex items-start gap-3">
                  <CheckCircle size={18} className="text-amber mt-0.5 flex-shrink-0" />
                  <p className="font-body text-ink/75 text-sm leading-relaxed italic">
                    {caso.resultado}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Sobre mí — casos reales"
            >
              ¿Tu situación se parece a alguna de estas? Recibir Diagnóstico Gratuito
              <ArrowRight size={15} />
            </TrackingLink>
            <Link
              href="/casos-reales"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
            >
              Ver página completa de casos <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS — fondo crema oscuro ────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <h2 className="font-display text-navy text-2xl lg:text-4xl font-semibold leading-tight">
              Lo que dicen quienes han trabajado conmigo
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              {
                text: "Llevábamos tres años con el restaurante lleno casi todos los fines de semana y sin entender por qué el margen no aparecía. En dos meses de trabajo con Adrián identificamos dónde se escapaba el dinero y lo corregimos. El cambio fue inmediato.",
                name: "Carlos M.",
                role: "Propietario · Restaurante independiente · 50 cubiertos · Miami",
              },
              {
                text: "Estaba a punto de firmar el local para mi primer restaurante cuando empecé a trabajar con Adrián. Me hizo las preguntas que nadie me había hecho y me ayudó a tomar decisiones mucho más sólidas antes de comprometer mi inversión.",
                name: "Laura G.",
                role: "Emprendedora · Apertura de primer restaurante · Valencia",
              },
              {
                text: "Lo que más me sorprendió fue que no llegó con soluciones preparadas. Primero entendió el negocio, luego propuso. Esa forma de trabajar marca la diferencia respecto a otros consultores que había contratado antes.",
                name: "Javier R.",
                role: "Director de F&B · Hotel de 4 estrellas · Ciudad de México",
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
          <p className="font-body text-ink/40 text-xs mt-8 text-center">
            Los nombres han sido anonimizados a petición de los clientes.
          </p>
        </div>
      </section>

      {/* ── ENCUÉNTRAME EN — fondo blanco ────────────────────────── */}
      <section className="bg-white py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl">
            <h2 className="font-display text-navy text-2xl font-semibold mb-6">
              Encuéntrame también en
            </h2>
            <a
              href="https://www.linkedin.com/in/adrianpollanfernandez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy text-cream group-hover:bg-amber group-hover:text-navy transition-colors">
                <LinkedinIcon size={18} />
              </span>
              <span className="font-body text-navy text-sm font-medium group-hover:text-amber transition-colors">
                LinkedIn — Adrián Pollán
              </span>
            </a>
            <p className="font-body text-ink/55 text-sm leading-relaxed mt-4 max-w-sm">
              Comparto ideas semanales sobre rentabilidad, gestión y operaciones en hostelería.
            </p>
          </div>
        </div>
      </section>

      {/* ── CIERRE CTA — fondo crema oscuro ──────────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-navy text-2xl lg:text-5xl font-light leading-tight mb-5">
                Si algo de lo que has leído te resuena, el siguiente paso es sencillo.
              </h2>
              <p className="font-body text-ink/65 text-base leading-relaxed mb-3">
                No hace falta tener todo claro antes de contactar. Para eso está
                la primera conversación: para que puedas explicarme dónde estás
                y ver si tiene sentido trabajar juntos.
              </p>
              <p className="font-body text-ink/50 text-base leading-relaxed">
                Sin compromiso. Sin presión. Solo claridad.
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
