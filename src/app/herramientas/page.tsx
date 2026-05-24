import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calculator, ListChecks, TrendingDown, Truck, UtensilsCrossed } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Herramientas Gratuitas para Restaurantes | Food Cost, Prime Cost y Más | Adrián Pollán" },
  description:
    "Calculadoras y checklists gratuitos para restaurantes: prime cost, escandallo, food cost, apertura y auditoría de proveedores. Sin registro. Resultados inmediatos.",
  alternates: { canonical: "https://adrianpollan.com/herramientas" },
  openGraph: {
    title: "Herramientas Gratuitas para Restaurantes | Adrián Pollán",
    description:
      "Calculadoras y checklists gratuitos para gestionar mejor tu restaurante.",
    url: "https://adrianpollan.com/herramientas",
  },
};

const tools = [
  {
    href: "/herramientas/calculadora-prime-cost",
    icon: <Calculator size={28} className="text-amber" />,
    num: "01",
    title: "Calculadora de Prime Cost",
    description:
      "Calcula al instante tu food cost, labour cost y prime cost con interpretación incluida según los rangos de referencia del sector.",
    cta: "Calcular ahora →",
  },
  {
    href: "/herramientas/checklist-apertura",
    icon: <ListChecks size={28} className="text-amber" />,
    num: "02",
    title: "Checklist de Apertura",
    description:
      "Revisa punto por punto si tienes todo lo necesario antes de abrir tu restaurante. 24 ítems en 6 bloques clave.",
    cta: "Ver checklist →",
  },
  {
    href: "/herramientas/checklist-food-cost",
    icon: <TrendingDown size={28} className="text-amber" />,
    num: "03",
    title: "Checklist de Food Cost",
    description:
      "Evalúa si tienes implementados los sistemas básicos para controlar el food cost de tu restaurante. 16 ítems en 4 bloques.",
    cta: "Ver checklist →",
  },
  {
    href: "/herramientas/auditoria-proveedores",
    icon: <Truck size={28} className="text-amber" />,
    num: "04",
    title: "Auditoría de Proveedores",
    description:
      "Evalúa la gestión actual de tus proveedores e identifica dónde puedes mejorar condiciones y reducir costes. 16 ítems en 4 bloques.",
    cta: "Hacer auditoría →",
  },
  {
    href: "/herramientas/calculadora-escandallo",
    icon: <UtensilsCrossed size={28} className="text-amber" />,
    num: "05",
    title: "Calculadora de Escandallo",
    description:
      "Calcula el coste exacto de producción de cualquier plato. Obtén el food cost, el precio de venta recomendado y el margen real por ración.",
    cta: "Calcular escandallo →",
  },
];

export default function HerramientasPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
          alt="Análisis de datos y gestión para restaurantes — herramientas gratuitas"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
              Herramientas gratuitas
            </p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-6">
              Herramientas para<br />
              <span className="font-semibold">gestionar mejor tu restaurante</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Calculadoras y checklists prácticos para tomar mejores decisiones en
              tu negocio de hostelería. Sin registro, sin coste.
            </p>
          </div>
        </div>
      </section>

      {/* ── HERRAMIENTAS — crema oscuro ───────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-white border border-navy/8 rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(186,117,23,0.3)] hover:border-amber/40"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-amber/10 border border-amber/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {tool.icon}
                  </div>
                  <span className="font-display text-amber/30 text-4xl font-light">
                    {tool.num}
                  </span>
                </div>
                <h2 className="font-display text-navy text-xl font-semibold mb-3">
                  {tool.title}
                </h2>
                <p className="font-body text-ink/65 text-sm leading-relaxed flex-1 mb-5">
                  {tool.description}
                </p>
                <span className="font-body text-amber text-sm font-medium group-hover:underline">
                  {tool.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
