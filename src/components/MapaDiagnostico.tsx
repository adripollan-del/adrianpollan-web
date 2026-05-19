import { TrendingUp, BarChart2, ShoppingCart, Users, Star, Settings, Target, Package } from "lucide-react";

const areas = [
  { Icon: TrendingUp,   name: "Rentabilidad",         desc: "Márgenes, costes y estructura financiera" },
  { Icon: BarChart2,    name: "Operativa",             desc: "Procesos, flujos y eficiencia del negocio" },
  { Icon: ShoppingCart, name: "Carta y producto",      desc: "Diseño, pricing y mezcla de ventas" },
  { Icon: Users,        name: "Equipo",                desc: "Estructura, liderazgo y formación" },
  { Icon: Star,         name: "Experiencia de cliente",desc: "Servicio, calidad y percepción" },
  { Icon: Settings,     name: "Gestión",               desc: "Indicadores, control y toma de decisiones" },
  { Icon: Target,       name: "Estrategia",            desc: "Posicionamiento, concepto y diferenciación" },
  { Icon: Package,      name: "Proveedores y compras", desc: "Control, negociación y costes" },
];

export default function MapaDiagnostico({ bg = "bg-cream-dark" }: { bg?: string }) {
  return (
    <section className={`${bg} py-20 lg:py-28`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">El diagnóstico analiza</p>
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight">
            8 áreas clave de tu negocio
          </h2>
        </div>

        {/* 4×2 en desktop, 2×4 en móvil */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {areas.map(({ Icon, name, desc }, i) => (
            <div
              key={i}
              className="bg-white border border-navy/8 rounded-xl p-5 lg:p-6 flex flex-col gap-3"
            >
              <Icon size={24} className="text-amber flex-shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-navy text-sm font-semibold mb-1 leading-snug">{name}</h3>
                <p className="font-body text-ink/55 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
