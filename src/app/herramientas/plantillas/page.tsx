import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, BookOpen, Mail } from "lucide-react";
import TrackingLink from "@/components/TrackingLink";
import FaqsClient from "./faqs-client";

export const metadata: Metadata = {
  title: { absolute: "Plantillas Excel para Gestión de Restaurantes | Adrián Pollán" },
  description:
    "Plantillas profesionales en Excel y Google Sheets para gestionar tu restaurante: escandallos, ingeniería de menú, inventario, cuadro de mando y operaciones. Listas para usar hoy.",
  alternates: {
    canonical: "https://adrianpollan.com/herramientas/plantillas",
  },
  openGraph: {
    title: "Plantillas Excel para Gestión de Restaurantes | Adrián Pollán",
    description:
      "Plantillas profesionales en Excel y Google Sheets para gestionar tu restaurante: escandallos, ingeniería de menú, inventario, cuadro de mando y operaciones. Listas para usar hoy.",
    url: "https://adrianpollan.com/herramientas/plantillas",
  },
};

const individuales = [
  {
    title: "Ingeniería de Menú",
    description:
      "Analiza ventas, costes y popularidad de tu carta. Clasifica cada plato por rentabilidad real y deja de empujar los que más salen si no son los que más dejan.",
    descriptionLong:
      "La mayoría de restaurantes llena la carta de platos que se venden, no de platos que generan margen. Esta plantilla clasifica cada plato según su rentabilidad y popularidad real, así sabes exactamente en cuáles tienes que subir precio, simplificar o apostar fuerte. Todo con los datos de tus propias ventas, no con suposiciones.",
    bullets: [
      "Clasificación BCG automática (Estrella, Vaca, Incógnita, Perro)",
      "Análisis de mix de ventas y margen por plato",
      "Coeficiente de Omnes para detectar cartas mal estructuradas",
      "Dashboard ejecutivo con lectura inmediata",
      "Datos de ejemplo del restaurante La Mesa + plantilla en blanco",
    ],
    price: "49 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/4495b9a9-0195-4cf2-a68e-504f0edec8d4",
  },
  {
    title: "Escandallo y Calculadora de Precios",
    description:
      "Calcula el coste real de cada receta con mermas incluidas y fija precios con margen garantizado por canal. Deja de adivinar si un plato deja dinero.",
    descriptionLong:
      "Cuando suben los proveedores, ¿sabes exactamente qué platos absorben ese golpe y cuáles empiezan a perder margen? Sin un escandallo actualizado, se fijan precios por intuición o copiando a la competencia. Esta plantilla calcula el coste real de cada receta, aplica mermas automáticamente y te dice el precio mínimo para cada canal: sala, delivery o take away.",
    bullets: [
      "Coste por receta con mermas aplicadas automáticamente",
      "Calculadora de precio por canal (sala, Uber Eats, Glovo, take away)",
      "Alerta de margen crítico configurable",
      "Historial de variación de costes por ingrediente",
      "Sub-recetas para masas, salsas y preparaciones intermedias",
    ],
    price: "59 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/cc2272c9-eb28-45af-86fd-97f00aaf60cb",
  },
  {
    title: "Control de Inventario y Pedidos",
    description:
      "Controla el stock en tiempo real y recibe pedidos sugeridos automáticos por proveedor. Deja de vivir entre roturas de stock y cámaras llenas de producto inmovilizado.",
    descriptionLong:
      "El dinero que un restaurante tiene parado en cámaras y almacén es dinero que no trabaja. Y las urgencias de última hora con proveedores cuestan más que el pedido planificado. Esta plantilla calcula el punto de pedido de cada producto según tu consumo real y tu plazo de reposición, y te genera una lista de pedido sugerida filtrable por proveedor.",
    bullets: [
      "Cálculo automático de punto de pedido por producto",
      "Pedido sugerido filtrable por proveedor y categoría",
      "Valoración del inventario en tiempo real",
      "Registro de recepciones y seguimiento de pedidos",
      "Compatible con importación desde la plantilla de escandallo",
    ],
    price: "69 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/7f6c6c39-17ab-4ebb-b1ba-e6b921d4f118",
  },
  {
    title: "Cuadro de Mando Financiero",
    description:
      "Registra ingresos y gastos y visualiza tu PyG, KPIs y caja en tiempo real. Deja de tardar días en saber si el mes fue bueno o malo.",
    descriptionLong:
      "Sin un cuadro de mando, saber si el negocio gana dinero implica juntar ventas del TPV, extractos bancarios, facturas de proveedores y nóminas. Con esta plantilla introduces cada movimiento en un registro central y el sistema actualiza solo la cuenta de resultados, los KPIs clave y las alertas de desviación. Una estructura mensual clara en lugar de números dispersos.",
    bullets: [
      "PyG mensual con actualización automática vía SUMIFS",
      "KPIs: food cost, labour cost, EBITDA y margen por canal",
      "Alertas configurables de desviación sobre umbrales",
      "Simulador de comisiones por plataforma de delivery",
      "Compatible con registro desde Google Forms en móvil",
    ],
    price: "79 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/368c6b4a-fd85-4a12-864b-febd05665eb5",
  },
  {
    title: "Kit de Gestión Operativa",
    description:
      "Checklists y plantillas para cocina, barra y sala: aperturas, cierres, producción, mermas, temperaturas y limpieza. El mismo estándar en todos los turnos, sin depender de la memoria de nadie.",
    descriptionLong:
      "En la mayoría de restaurantes cada turno abre, produce y cierra a su manera. Las tareas críticas dependen de quién esté ese día y de lo que recuerde. Este kit estandariza todas las operaciones del día con checklists listos para imprimir o usar en pantalla, para que el equipo siga el mismo proceso independientemente de quién esté al frente.",
    bullets: [
      "Checklist de apertura y cierre por área (cocina, barra, sala)",
      "Control diario de temperaturas y APPCC simplificado",
      "Registro de mermas y producción por turno",
      "Control de pedidos y recepciones de mercancía",
      "Plantillas en blanco + ejemplos rellenos del restaurante La Mesa",
    ],
    price: "89 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/85495638-c754-4fdb-a7f0-d98a849e50a8",
  },
];

const bundles = [
  {
    title: "Starter Pack",
    description:
      "El punto de partida para cualquier restaurante que quiera controlar sus márgenes: saber qué platos dejan dinero y cuánto cuesta producir cada uno.",
    price: "79 €",
    savings: "Ahorras 29 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/bdf998c1-be1e-4905-b613-5d64713e7784",
  },
  {
    title: "Pack Control",
    description:
      "El sistema completo para controlar compras, costes y carta. Desde el precio del ingrediente hasta el margen del plato, sin puntos ciegos.",
    price: "129 €",
    savings: "Ahorras 48 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/db756f4e-fb8d-4b02-9459-ce113370ffcd",
  },
  {
    title: "Pack Gestión",
    description:
      "Para el restaurante que quiere tomar decisiones financieras con datos reales: costes, márgenes y resultados en una sola estructura.",
    price: "149 €",
    savings: "Ahorras 38 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/e5142082-3c6c-47c4-ac14-392211d0cfb7",
  },
  {
    title: "Pack Operación Pro",
    description:
      "Para estandarizar el día a día y controlar el stock al mismo tiempo. El equipo sabe qué hacer en cada turno y el almacén deja de ser una caja negra.",
    price: "139 €",
    savings: "Ahorras 19 €",
    featured: false,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/a8470b16-0c8f-458b-af26-9280a6a11808",
  },
  {
    title: "Suite Completa",
    description:
      "El sistema completo de gestión para restaurantes. Costes, inventario, carta, operaciones y finanzas en un solo pack. Para el restaurante que quiere dejar de gestionar por intuición.",
    price: "219 €",
    savings: "Ahorras 126 €",
    featured: true,
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/8ba24dda-671a-45f2-a3e2-5276f83c104a",
  },
];

const garantias = [
  {
    icon: <Zap size={24} className="text-amber" />,
    title: "Acceso inmediato",
    body: "Recibes los archivos en tu email nada más completar la compra. Sin esperas ni procesos de activación.",
  },
  {
    icon: <BookOpen size={24} className="text-amber" />,
    title: "Listas para usar desde hoy",
    body: "Cada plantilla incluye datos de ejemplo del restaurante La Mesa y una guía de primeros pasos. No necesitas saber Excel para empezar.",
  },
  {
    icon: <Mail size={24} className="text-amber" />,
    title: "Soporte directo incluido",
    body: "Si tienes dudas sobre cómo adaptar cualquier plantilla a tu negocio, escríbeme directamente. No hay un formulario de soporte, hay una persona.",
  },
];

export default function PlantillasPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          alt="Análisis y datos para gestión de restaurantes — plantillas profesionales"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <Link href="/herramientas" className="hover:text-amber transition-colors">Herramientas</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Plantillas</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Plantillas · Excel
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-5">
              Plantillas de gestión para restaurantes<br />
              <span className="font-semibold">en Excel y Google Sheets</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Cinco herramientas diseñadas para restaurantes reales: con datos de ejemplo,
              manual operativo y fórmulas automáticas. Sin necesidad de ser experto en
              Excel para empezar a usarlas hoy.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLANTILLAS INDIVIDUALES — crema oscuro ────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
              Plantillas individuales
            </p>
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Plantillas individuales de gestión para restaurantes
            </h2>
            <p className="font-body text-ink/60 text-base leading-relaxed">
              Cada plantilla ataca un problema concreto de operación o rentabilidad. No son
              archivos genéricos descargados de internet: están construidas sobre situaciones
              reales de restaurantes en funcionamiento, con instrucciones paso a paso para que
              tu equipo las adopte desde el primer turno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individuales.map((p) => (
              <div
                key={p.href}
                className="bg-white border border-navy/8 rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40"
              >
                <h3 className="font-display text-navy text-lg font-semibold leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <p className="font-body text-ink/70 text-sm leading-relaxed mb-4">
                  {p.descriptionLong}
                </p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-amber mt-0.5 flex-shrink-0 text-xs">✓</span>
                      <span className="font-body text-ink/65 text-xs leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-display text-amber text-3xl font-bold mb-5">
                  {p.price}
                </p>
                <TrackingLink
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-amber text-navy text-sm font-semibold tracking-wide"
                  eventName="plantilla_compra"
                  eventLabel={p.title}
                >
                  Comprar ahora <ArrowRight size={14} />
                </TrackingLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUNDLES — blanco ──────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
              Packs con descuento
            </p>
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Packs con descuento: combina plantillas y ahorra hasta un 37%
            </h2>
            <p className="font-body text-ink/60 text-base leading-relaxed">
              Si el problema no es solo uno, la solución tampoco debería serlo. Estos packs
              combinan las plantillas que más se complementan entre sí, con un descuento sobre
              el precio individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundles.map((b) => (
              <div
                key={b.href}
                className={[
                  "relative rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1",
                  b.featured
                    ? "bg-white border-2 border-amber shadow-[0_12px_28px_-8px_rgba(186,117,23,0.35)]"
                    : "bg-white border border-navy/8 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40",
                ].join(" ")}
              >
                {b.featured && (
                  <span className="absolute top-4 right-4 bg-amber text-navy text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                    Más popular
                  </span>
                )}
                <h3 className="font-display text-navy text-lg font-semibold leading-snug mb-3 pr-20">
                  {b.title}
                </h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed flex-1 mb-4">
                  {b.description}
                </p>
                <p className="font-body text-green-600 text-xs font-medium mb-3">
                  {b.savings}
                </p>
                <p className="font-display text-amber text-3xl font-bold mb-5">
                  {b.price}
                </p>
                <TrackingLink
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-amber text-navy text-sm font-semibold tracking-wide"
                  eventName="bundle_compra"
                  eventLabel={b.title}
                >
                  Comprar ahora <ArrowRight size={14} />
                </TrackingLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs — crema ─────────────────────────────────────────── */}
      <FaqsClient />

      {/* ── GARANTÍAS — navy ─────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-cream text-2xl lg:text-3xl font-semibold leading-tight mb-10 lg:mb-12">
            Diseñadas para restaurantes reales, no para demos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {garantias.map((g) => (
              <div key={g.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber/20 border border-amber/30 rounded-lg flex items-center justify-center mt-0.5">
                  {g.icon}
                </div>
                <div>
                  <h3 className="font-display text-cream text-base font-semibold mb-1.5">
                    {g.title}
                  </h3>
                  <p className="font-body text-cream/60 text-sm leading-relaxed">
                    {g.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — blanco ───────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            ¿No sabes qué plantilla necesitas primero?
          </h2>
          <p className="font-body text-ink/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
            En 20 minutos puedo ayudarte a identificar cuál es el problema más urgente de
            tu restaurante y qué herramienta atacarlo primero. Sin coste y sin compromiso.
          </p>
          <TrackingLink
            href="https://calendly.com/adrianpollan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="calendly_click"
            eventLabel="Plantillas — CTA final"
          >
            Agendar sesión gratuita <ArrowRight size={15} />
          </TrackingLink>
        </div>
      </section>
    </>
  );
}
