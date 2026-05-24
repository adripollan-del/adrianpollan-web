import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, Search, LineChart, CheckCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "F&B Hotelero | Rentabilidad y Gestión para Hoteles con Restaurante | Adrián Pollán" },
  description:
    "Convierte el F&B de tu hotel en una línea de negocio rentable. Control de costes, oferta alineada con el huésped y equipos que venden. Adrián Pollán, consultor F&B.",
  alternates: {
    canonical: "https://adrianpollan.com/para-hoteles-fb",
  },
  openGraph: {
    title: "Consultoría F&B para Hoteles | Adrián Pollán",
    description:
      "Consultoría especializada en F&B para hoteles. Rentabilidad, operaciones y gestión de restauración hotelera con más de 20 años de experiencia real.",
    url: "https://adrianpollan.com/para-hoteles-fb",
  },
};

const painPoints = [
  "El F&B genera más problemas que ingresos: quejas, incidencias, tensión constante",
  "El equipo tiene alta rotación y no hay procesos claros que sostengan la operación",
  "Los huéspedes del hotel no usan el restaurante, o lo usan solo por obligación",
  "No tienes datos reales sobre la rentabilidad del departamento, solo sensaciones",
];

const services = [
  {
    icon: <Search size={36} className="text-amber" />,
    title: "Diagnóstico y auditoría F&B",
    body: "Análisis completo del departamento: rentabilidad por outlet, estructura de costes, equipo y procesos. Un mapa claro de dónde está el problema y cómo resolverlo.",
  },
  {
    icon: <LineChart size={36} className="text-amber" />,
    title: "Consultoría operativa continuada",
    body: "Acompañamiento mensual para transformar el F&B de centro de coste a centro de beneficio. Food cost, labour cost, experiencia de cliente y sistemas sostenibles.",
  },
];

const references = [
  { name: "Ballynahinch Castle", location: "Irlanda" },
  { name: "Kilronan Castle", location: "Irlanda" },
  { name: "Les Bordes Estate", location: "Francia" },
  { name: "Hotel Hard Rock", location: "España" },
  { name: "Mare Nostrum Resort", location: "España" },
  { name: "Thistle Hotels", location: "Reino Unido" },
];

export default function ParaHotelesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <Link href="/servicios" className="hover:text-amber transition-colors">Servicios</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Para hoteles F&B</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Consultoría F&B para hoteles
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Tu F&B no tiene que ser<br />
              <span className="font-semibold">el departamento más problemático del hotel.</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed max-w-2xl">
              El F&B hotelero tiene sus propias reglas. He trabajado en propiedades
              de lujo en Europa durante más de veinte años. Sé lo que funciona y lo
              que parece que funciona.
            </p>
          </div>
        </div>
      </section>

      {/* ── IDENTIFICACIÓN — blanco ───────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Reconócelo
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                ¿Te suena alguna de estas situaciones?
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                Son las señales más comunes en hoteles donde el F&B no está
                rindiendo como debería. No es un problema de plantilla ni de
                concepto. Casi siempre es un problema de sistema y de datos.
              </p>
            </div>
            <div className="space-y-4">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 bg-cream-dark border border-navy/8 rounded-xl p-5">
                  <CheckCircle size={20} className="text-amber mt-0.5 flex-shrink-0" />
                  <p className="font-body text-ink/75 text-base leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA — crema oscuro ────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Experiencia en hoteles
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                He trabajado en propiedades como estas
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
                El F&B hotelero es un mundo distinto al del restaurante independiente.
                Gestionar la experiencia del huésped, los eventos, el desayuno, el bar
                y la rentabilidad de todo eso simultáneamente requiere otro tipo de
                enfoque. Lo conozco desde dentro.
              </p>
              <Link
                href="/sobre-mi"
                className="inline-flex items-center gap-2 font-body text-sm text-amber hover:text-amber/80 transition-colors"
              >
                Ver mi trayectoria completa <ArrowRight size={15} />
              </Link>
            </div>
            <div className="space-y-4">
              {references.map((ref, i) => (
                <div key={i} className="bg-white border border-navy/10 rounded-xl p-6 flex items-center justify-between">
                  <div>
                    <p className="font-display text-navy text-lg font-semibold">{ref.name}</p>
                    <p className="font-body text-ink/50 text-sm mt-1">{ref.location}</p>
                  </div>
                  <span className="font-display text-amber/30 text-3xl font-light">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Cómo puedo ayudarte
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Dos formas de trabajar juntos
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {services.map((s, i) => (
              <div key={i} className="bg-cream-dark border border-navy/10 rounded-xl p-8">
                <div className="mb-5">{s.icon}</div>
                <h3 className="font-display text-navy text-xl font-semibold mb-3">{s.title}</h3>
                <p className="font-body text-ink/65 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
          >
            Ver todos los servicios con detalle <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── CASO REAL — crema oscuro ──────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Resultado real
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Un caso concreto
            </h2>
          </div>
          <div className="bg-white border border-navy/10 rounded-xl p-8 lg:p-12 max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
              Hotel boutique · F&B con pérdidas · Europa
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-body text-ink/40 text-xs uppercase tracking-widest mb-2">Antes</p>
                <p className="font-display text-navy text-4xl font-bold mb-1">–8%</p>
                <p className="font-body text-ink/60 text-sm leading-relaxed">
                  El departamento F&B generaba pérdidas. Alta rotación de personal,
                  sin procesos y sin datos de rentabilidad por área.
                </p>
              </div>
              <div>
                <p className="font-body text-amber text-xs uppercase tracking-widest mb-2">Después</p>
                <p className="font-display text-navy text-4xl font-bold mb-1">+6%</p>
                <p className="font-body text-ink/60 text-sm leading-relaxed italic">
                  Reestructuración de operación, costes y experiencia de huésped.
                  El F&B pasó de problema a activo del hotel.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-navy/10">
              <TrendingUp size={18} className="text-amber flex-shrink-0" />
              <p className="font-body text-ink/60 text-sm leading-relaxed">
                El F&B hotelero no tiene que ser un centro de coste. Con los sistemas correctos, puede ser uno de los activos más rentables de la propiedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — blanco ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-5 max-w-2xl mx-auto">
            ¿Quieres que el F&B de tu hotel empiece a rendir?
          </h2>
          <p className="font-body text-ink/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Empieza con el diagnóstico gratuito o reserva una sesión de 20 minutos.
            Sin presión, sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Para hoteles FB — CTA final"
            >
              Recibir Diagnóstico Gratuito <ArrowRight size={15} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-navy transition-colors"
              eventName="calendly_click"
              eventLabel="Para hoteles FB — CTA final"
            >
              O reservar una sesión de 20 minutos →
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
