import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { CheckCircle, ArrowRight, ExternalLink, AlertTriangle, Lightbulb, X } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Casos Reales de Consultoría para Restaurantes | Adrián Pollán" },
  description:
    "Casos reales de consultoría para restaurantes y hoteles: food cost reducido del 38% al 31,5%, aperturas sin errores y F&B hotelero rentable. Resultados con datos reales.",
  alternates: {
    canonical: "https://adrianpollan.com/casos-reales",
  },
  openGraph: {
    title: "Casos Reales de Consultoría para Restaurantes | Adrián Pollán",
    description:
      "Casos reales anónimos de consultoría en hostelería: restaurantes con margen bajo, aperturas y F&B hotelero.",
    url: "https://adrianpollan.com/casos-reales",
  },
};

const cases = [
  {
    label: "Rentabilidad",
    tipo: "Restaurante independiente · 50 cubiertos",
    title: "Restaurante con buena ocupación y margen insuficiente",
    situacion:
      "Buena ocupación los fines de semana, reputación local positiva, pero margen insuficiente a fin de mes. El propietario llevaba tres años sin entender por qué los números no cuadraban. La causa no era visible desde dentro: los platos que más salían eran los que menos margen dejaban, y los escandallos nunca se habían actualizado tras la última subida de precios de los proveedores.",
    antes: [
      "Food cost estimado sin escandallos actualizados",
      "Carta con 48 referencias activas",
      "Merma no controlada ni medida",
      "Sin sistema de seguimiento de margen",
    ],
    despues: [
      "Escandallos actualizados para el 100% de la carta",
      "Carta reducida a 31 referencias",
      "Control semanal de merma implantado",
      "Sistema de seguimiento de margen funcionando",
    ],
    acciones: [
      "Reducción de carta de 48 a 31 referencias eliminando platos de baja rotación y bajo margen",
      "Actualización de escandallos para el 100% de los platos con costes reales actualizados",
      "Reorganización visual del menú para potenciar platos rentables",
      "Formación del equipo de sala en recomendación con criterio de margen",
      "Implantación de control semanal de merma con responsable asignado",
    ],
    resultado:
      "En 12 semanas el propietario pasó de gestionar por intuición a tomar decisiones con datos reales. El control de costes dejó de ser una estimación y se convirtió en un proceso medible y repetible.",
    leccion:
      "El problema no era la ocupación. Era que los platos que más salían eran los que menos margen dejaban.",
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
];

const bgClasses = ["bg-cream-dark", "bg-white", "bg-cream-dark"] as const;

export default function CasosRealesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1920&q=80"
          alt="Interior de restaurante — casos reales de consultoría en hostelería"
          fill
          priority
          sizes="100vw"
          quality={50}
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Casos reales</span>
          </nav>
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Trabajo real
            </p>
            <h1 className="font-display text-cream text-3xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Casos reales.<br />
              <span className="font-semibold">Situaciones concretas, resultados medibles.</span>
            </h1>
            <p className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl">
              Los casos se presentan de forma anónima para proteger la confidencialidad
              de los negocios. Cada uno refleja una situación real, las acciones aplicadas
              y el resultado obtenido.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO — blanco ────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-6">
          <p className="font-body text-ink/65 text-lg leading-relaxed border-l-4 border-amber pl-6">
            Los tres casos que siguen tienen algo en común: el problema visible no era el problema real.
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
        const bg = bgClasses[idx];
        const cardBg = bg === "bg-white" ? "bg-cream-dark" : "bg-white";

        return (
          <section key={idx} className={`${bg} py-20 lg:py-28`}>
            <div className="max-w-4xl mx-auto px-6 lg:px-10">

              {/* ── Cabecera ───────────────────────────────────────── */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="font-body text-xs tracking-widest uppercase text-navy bg-amber px-3 py-1 font-semibold">
                  {caso.label}
                </span>
                <span className="font-body text-xs text-ink/45">{caso.tipo}</span>
              </div>
              <h2 className="font-display text-navy text-2xl lg:text-4xl font-semibold leading-tight mb-10">
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
              <div className={`${cardBg} border border-navy/10 rounded-xl p-6 lg:p-8 mb-10`}>
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

              {/* ── Resultado — navy bg ────────────────────────────── */}
              <div className="bg-navy rounded-xl p-6 lg:p-8 mb-8">
                <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
                  Resultado
                </p>
                <p className="font-body text-cream/85 text-base leading-relaxed">
                  {caso.resultado}
                </p>
              </div>

              {/* ── Lección principal ─────────────────────────────── */}
              <div className="flex items-start gap-3 mb-10">
                <Lightbulb size={18} className="text-amber flex-shrink-0 mt-1" strokeWidth={1.75} />
                <p className="font-display text-navy/60 text-lg italic leading-relaxed">
                  &ldquo;{caso.leccion}&rdquo;
                </p>
              </div>

              {/* ── CTA del caso ──────────────────────────────────── */}
              <TrackingLink
                href="https://diagnostico.adrianpollan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 btn-amber text-navy text-sm font-semibold tracking-wide"
                eventName="diagnostico_click"
                eventLabel={`Casos reales — caso ${idx + 1}`}
              >
                Recibir Diagnóstico Gratuito
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
          <h2 className="font-display text-navy text-2xl lg:text-5xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
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
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Casos reales — CTA final"
            >
              Recibir Diagnóstico Gratuito
              <ExternalLink size={14} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
              eventName="calendly_click"
              eventLabel="Casos reales — CTA final"
            >
              O reservar una sesión de 20 minutos →
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
