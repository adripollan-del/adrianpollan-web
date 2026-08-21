import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { CheckCircle, ArrowRight, ExternalLink, AlertTriangle, Lightbulb, X } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Casos de Éxito de Consultoría para Restaurantes | Adrián Pollán" },
  description:
    "Casos de éxito de consultoría para restaurantes y hoteles: food cost reducido del 38% al 31,5%, aperturas sin errores y F&B hotelero rentable. Resultados con datos reales.",
  alternates: {
    canonical: "https://adrianpollan.com/casos-reales",
  },
  openGraph: {
    title: "Casos de Éxito de Consultoría para Restaurantes | Adrián Pollán",
    description:
      "Casos de éxito anónimos de consultoría en hostelería: restaurantes con margen bajo, aperturas y F&B hotelero.",
    url: "https://adrianpollan.com/casos-reales",
  },
};

const cases = [
  {
    label: "Rentabilidad",
    tipo: "Restaurante familiar · Menú del día",
    title: "De trabajar 12 horas sin ganar dinero a pagarse un sueldo digno",
    situacion:
      "El restaurante llenaba, pero la caja no lo reflejaba. Luis y su mujer trabajaban 12 horas diarias sin que quedara beneficio real a fin de mes. Creía tener un food cost del 30-32%, ya alto, pero al calcularlo bien estaba muy por encima. Su miedo antes de empezar era que un consultor le impusiera un modelo \"de manual\" que le hiciera perder la esencia de su negocio de barrio.",
    antes: [
      "Food cost real por encima del 40%, sin saberlo",
      "Facturación de unos 45.000€/mes sin beneficio real",
      "12 horas diarias de trabajo sin sueldo digno",
      "Carta \"de siempre\", sin revisar raciones ni proveedores",
    ],
    despues: [
      "Food cost bajado al 28% de media",
      "Facturación estable en 50.000-52.000€/mes, con beneficio",
      "Sueldo digno recuperado y ahorro para inversión",
      "Carta reestructurada, mermas controladas",
    ],
    acciones: [
      "Cálculo real del food cost, revelando que estaba muy por encima de lo que Luis creía",
      "Ajuste de raciones y cambio de dos proveedores clave",
      "Mejora de presentación de los platos, sin aumentar coste",
      "Implantación de control de mermas en cocina",
    ],
    resultado:
      "En pocos meses, el food cost bajó del más de 40% al 28% de media. Por primera vez, Luis pudo pagarse un sueldo digno y ahorrar para renovar equipamiento sin pedir financiación.",
    leccion:
      "Dejé de ser un esclavo de mi propio negocio y ahora el restaurante por fin trabaja para mí.",
    autor: "Luis Marín, propietario de Casa Luis",
  },
  {
    label: "Apertura",
    tipo: "Primera apertura · Restaurante independiente",
    title: "Emprendedor antes de firmar el local",
    situacion:
      "Emprendedor con experiencia en sala a punto de firmar un contrato de arrendamiento en una zona con mucho tráfico. Tenía el concepto claro, algunos ahorros y muchas ganas. Buscaba una segunda opinión antes de comprometerse. El análisis reveló que el local era atractivo pero financieramente inviable para el modelo planteado, y que el concepto necesitaba diferenciarse de dos competidores directos en la misma calle.",
    antes: [
      "Alquiler proyectado al 18% sobre ventas en escenario optimista",
      "Concepto sin diferenciación frente a 2 competidores directos en la misma calle",
      "Inversión inicial sobredimensionada en equipamiento",
    ],
    despues: [
      "Local alternativo con alquiler un 30% inferior",
      "Concepto reposicionado con propuesta de valor diferenciada",
      "Plan de inversión ajustado con partidas priorizadas",
    ],
    acciones: [
      "Análisis de viabilidad financiera del local con tres escenarios de ventas",
      "Revisión del concepto y reposicionamiento de la propuesta de valor frente a la competencia",
      "Análisis de tres locales alternativos en la misma zona",
      "Ajuste del plan de inversión inicial eliminando partidas sobredimensionadas",
    ],
    resultado:
      "El emprendedor no firmó ese local. Tres meses después encontró una opción con un alquiler un 30% inferior y menos competencia directa. Abrió con una propuesta más definida y una estructura financiera más sólida desde el inicio.",
    leccion:
      "El error más caro en una apertura casi siempre se comete antes de abrir.",
  },
  {
    label: "F&B Hotelero",
    tipo: "Hotel boutique · Restaurante y bar",
    title: "Hotel con operación F&B poco rentable",
    situacion:
      "El área de F&B generaba más problemas que ingresos. Alta rotación de equipo, clientes del hotel que raramente usaban el restaurante y sin datos reales sobre la rentabilidad del departamento. El F&B no tenía identidad propia ni propuesta de valor diferenciada del hotel. Sin procesos claros ni sistema de venta activa, el coste de personal era desproporcionado para el volumen generado.",
    antes: [
      "F&B sin KPIs propios ni seguimiento mensual",
      "Rotación de equipo alta, sin procesos documentados",
      "Clientes del hotel raramente usaban el restaurante",
      "Precios no calibrados para el perfil del huésped",
    ],
    despues: [
      "Concepto gastronómico alineado con el perfil del huésped",
      "Carta rediseñada y precios recalibrados",
      "KPIs mensuales implantados: food cost, labour cost y ticket medio",
      "Equipo formado en técnicas de venta contextual",
    ],
    acciones: [
      "Redefinición del concepto gastronómico alineado con el perfil y expectativas del huésped",
      "Rediseño de carta y recalibración de precios según segmento objetivo",
      "Formación del equipo en técnicas de venta contextual adaptadas al entorno hotelero",
      "Creación de procesos básicos de operativa con responsables asignados",
      "Implantación de KPIs mensuales: food cost, labour cost y ticket medio",
    ],
    resultado:
      "El F&B pasó de ser percibido como un coste inevitable a convertirse en un elemento diferenciador de la experiencia del hotel. El propietario tuvo datos reales sobre el rendimiento del área por primera vez.",
    leccion:
      "Un F&B hotelero sin identidad propia no compite. Solo sobrevive.",
  },
  {
    label: "Expansión",
    tipo: "Cafetería de especialidad · 2 locales",
    title: "El segundo local que daba pérdidas hasta que llegó la estructura",
    situacion:
      "Tras abrir un segundo local pensando que clonar el primero funcionaría igual, Santiago se encontró con un equipo desalineado, tiempos de servicio lentos y el nuevo local en pérdidas. Le preocupaba que un consultor de hostelería genérico no entendiera el nicho de café de especialidad y le empujara a bajar calidad.",
    antes: [
      "Ticket medio del local 2 en 3,20€ frente a 4,80€ del local 1",
      "Coste de personal disparado por mala organización de turnos",
      "Equipo nuevo desalineado con la cultura del negocio",
      "Sin tiempo para dirigir, apagando fuegos en dos locales",
    ],
    despues: [
      "Ticket medio conjunto en torno a 5,50€",
      "Turnos reorganizados con coste controlado",
      "Manual de operaciones estandarizando el servicio",
      "Capacidad de ausentarse una semana sin que el negocio se resienta",
    ],
    acciones: [
      "Rediseño de carta y del mostrador (visual merchandising)",
      "Reformulación de combos para subir el ticket medio (menú de desayuno en vez de piezas sueltas)",
      "Manual de operaciones para estandarizar el servicio entre los dos locales",
      "Reorganización de turnos para controlar el coste de personal",
    ],
    resultado:
      "El local 2 pasó de números rojos a un margen neto del 12%. El ticket medio conjunto subió hasta los 5,50€, y el negocio ganó la estructura necesaria para escalar sin depender de la presencia constante del fundador.",
    leccion:
      "Pasé de ser un barista estresado a ser un empresario, y mi negocio por fin es escalable.",
    autor: "Santiago Fernández, fundador de Café Central",
  },
  {
    label: "Relevo generacional",
    tipo: "Bar de barrio · Traspaso familiar",
    title: "Coger el bar de sus padres sin saber ni el coste de una caña",
    situacion:
      "Al hacerse cargo del bar de sus padres, Laura no sabía calcular el coste real de lo que servía. El negocio funcionaba por inercia y por clientela fija, pero ella no tenía datos para tomar ninguna decisión. Quería modernizarlo sin perder la esencia de bar de barrio.",
    antes: [
      "Facturación media de 500€/día entre barra y terraza",
      "Sin control de stock ni certeza sobre mermas o descuadres",
      "Sin carta propia para la terraza",
      "Laura sola 14 horas diarias",
    ],
    despues: [
      "750-800€/día en temporada alta, 650€ en invierno",
      "Merma del 15% del stock identificada y corregida",
      "Carta específica de terraza con productos de salida rápida",
      "Equipo ampliado con una persona más",
    ],
    acciones: [
      "Implantación de cierre de caja e inventario básico",
      "Identificación de una merma del 15% del stock y corrección",
      "Carta específica para terraza con bebidas frescas y tapas frías",
      "Ajuste de compras con criterio de coste",
    ],
    resultado:
      "La facturación diaria pasó de 500€ de media a 750-800€ en temporada alta. Laura pudo contratar refuerzo y dejar de trabajar sola 14 horas al día.",
    leccion:
      "Pasé de heredar un negocio que me daba miedo a dirigir un bar que por fin es rentable y me hace ilusión abrir cada mañana.",
    autor: "Laura Herrero, gerente de Bar & Tapas La Esquinita",
  },
];

const bgClasses = ["bg-cream-dark", "bg-white"] as const;

export default function CasosRealesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-grafito pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1920&q=80"
          alt="Interior de restaurante — casos de éxito de consultoría en hostelería"
          fill
          priority
          sizes="100vw"
          quality={50}
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-grafito/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Casos de éxito</span>
          </nav>
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Trabajo real
            </p>
            <h1 className="font-display text-cream text-3xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Casos de éxito.<br />
              <span className="font-semibold">Situaciones concretas, resultados medibles.</span>
            </h1>
            <p className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl">
              Cada caso refleja una situación real, las acciones aplicadas y el resultado
              obtenido. Algunos se presentan con nombre real, con el permiso del cliente;
              otros de forma anónima para proteger la confidencialidad del negocio.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO — blanco ────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-6">
          <p className="font-body text-ink/65 text-lg leading-relaxed border-l-4 border-amber pl-6">
            Los casos que siguen tienen algo en común: el problema visible no era el problema real.
            En todos ellos, el trabajo empezó por entender qué estaba pasando antes de proponer ningún cambio.
          </p>
          <p className="font-body text-ink/55 text-base leading-relaxed pl-10">
            Cada proyecto es distinto. Lo que comparten es el punto de partida: un propietario, un gerente
            o un emprendedor que necesitaba ver con más claridad lo que estaba pasando en su negocio.
            Lo que encontramos, lo que hicimos y lo que cambió es lo que ves aquí.
          </p>
        </div>
      </section>

      {/* ── CASOS ─────────────────────────────────────────────────── */}
      {cases.map((caso, idx) => {
        const bg = bgClasses[idx % bgClasses.length];
        const cardBg = bg === "bg-white" ? "bg-cream-dark" : "bg-white";

        return (
          <section key={idx} className={`${bg} py-20 lg:py-28`}>
            <div className="max-w-4xl mx-auto px-6 lg:px-10">

              {/* ── Cabecera ───────────────────────────────────────── */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="font-body text-xs tracking-widest uppercase text-grafito bg-amber px-3 py-1 font-semibold">
                  {caso.label}
                </span>
                <span className="font-body text-xs text-ink/45">{caso.tipo}</span>
              </div>
              <h2 className="font-display text-grafito text-2xl lg:text-4xl font-semibold leading-tight mb-10">
                {caso.title}
              </h2>

              {/* ── La situación ───────────────────────────────────── */}
              <div className="mb-10">
                <div className="flex items-center gap-2.5 mb-4">
                  <AlertTriangle size={16} className="text-amber flex-shrink-0" />
                  <p className="font-body text-amber text-xs tracking-widest uppercase">La situación</p>
                </div>
                <p className="font-body text-ink/70 text-base leading-relaxed">
                  {caso.situacion}
                </p>
              </div>

              {/* ── Métricas de partida ────────────────────────────── */}
              <div className={`${cardBg} border border-grafito/10 rounded-xl p-6 lg:p-8 mb-10`}>
                <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
                  Métricas de partida
                </p>
                <div>
                  <div className="grid grid-cols-2 gap-x-6 mb-4">
                    <p className="font-body text-xs uppercase tracking-wider text-red-500">Antes</p>
                    <p className="font-body text-xs uppercase tracking-wider text-amber">Después</p>
                  </div>
                  <div className="space-y-3">
                    {caso.antes.map((m, j) => (
                      <div key={j} className="grid grid-cols-2 gap-x-6 items-start">
                        <div className="flex items-start gap-2.5">
                          <X size={14} className="text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <p className="font-body text-ink/65 text-sm leading-relaxed">{m}</p>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle size={14} className="text-amber flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <p className="font-body text-ink/65 text-sm leading-relaxed">{caso.despues[j]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Qué hicimos ───────────────────────────────────── */}
              <div className="mb-10">
                <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
                  Qué hicimos
                </p>
                <ol className="space-y-4">
                  {caso.acciones.map((a, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <span className="font-display text-amber font-bold text-sm leading-none mt-0.5 flex-shrink-0 w-6 text-right">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <p className="font-body text-ink/70 text-base leading-relaxed">{a}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── Resultado — grafito bg ────────────────────────────── */}
              <div className="bg-grafito rounded-xl p-6 lg:p-8 mb-8">
                <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
                  Resultado
                </p>
                <p className="font-body text-cream/85 text-base leading-relaxed">
                  {caso.resultado}
                </p>
              </div>

              {/* ── Lección principal ─────────────────────────────── */}
              <div className={caso.autor ? "flex items-start gap-3 mb-3" : "flex items-start gap-3 mb-10"}>
                <Lightbulb size={18} className="text-amber flex-shrink-0 mt-1" strokeWidth={1.75} />
                <p className="font-display text-grafito/60 text-lg italic leading-relaxed">
                  &ldquo;{caso.leccion}&rdquo;
                </p>
              </div>
              {caso.autor && (
                <p className="font-body text-ink/45 text-sm pl-8 mb-10">— {caso.autor}</p>
              )}

              {/* ── CTA del caso ──────────────────────────────────── */}
              <TrackingLink
                href="https://diagnostico.adrianpollan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 btn-amber text-grafito text-sm font-semibold tracking-wide"
                eventName="diagnostico_click"
                eventLabel={`Casos de éxito — caso ${idx + 1}`}
              >
                Quiero resultados como estos
                <ExternalLink size={14} />
              </TrackingLink>

            </div>
          </section>
        );
      })}

      {/* ── CTA FINAL — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            Siguiente paso
          </p>
          <h2 className="font-display text-grafito text-2xl lg:text-5xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            ¿Tu situación se parece a alguna de estas?
          </h2>
          <p className="font-body text-ink/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            No hace falta tener todo claro antes de hablar. En una primera conversación de
            20 minutos puedo ayudarte a ver si hay un patrón reconocible en lo que está
            pasando en tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-grafito text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Casos de éxito — CTA final"
            >
              Quiero resultados como estos
              <ExternalLink size={14} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-grafito/60 hover:text-grafito transition-colors"
              eventName="calendly_click"
              eventLabel="Casos de éxito — CTA final"
            >
              O reservar una sesión de 20 minutos →
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
