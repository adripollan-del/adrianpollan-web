"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface ChecklistBlock {
  title: string;
  items: string[];
}

const blocks: ChecklistBlock[] = [
  {
    title: "Concepto y validación",
    items: [
      "Concepto definido con claridad: qué ofrezco, a quién y por qué",
      "Público objetivo identificado y validado, no asumido",
      "Propuesta de valor diferenciada respecto a la competencia directa",
      "Análisis de competencia en la zona realizado",
      "Viabilidad financiera del concepto calculada con números reales",
    ],
  },
  {
    title: "Local y negociación",
    items: [
      "Tráfico peatonal y perfil de cliente validados en el local",
      "Alquiler por debajo del 12% de las ventas proyectadas",
      "Superficie adecuada para el concepto y la operativa prevista",
      "Condiciones legales del contrato revisadas por profesional",
      "Obras y licencias planificadas con margen de tiempo suficiente",
    ],
  },
  {
    title: "Financiación e inversión",
    items: [
      "Inversión total calculada con un margen del 20% para imprevistos",
      "Fondo de maniobra para cubrir 3-6 meses de gastos fijos",
      "Fuentes de financiación confirmadas y disponibles",
    ],
  },
  {
    title: "Carta y operativa",
    items: [
      "Carta diseñada con criterio de margen, no solo de concepto",
      "Escandallos calculados para los platos principales",
      "Proveedores seleccionados y condiciones negociadas",
      "Procesos básicos de cocina definidos y documentados",
    ],
  },
  {
    title: "Equipo",
    items: [
      "Perfiles necesarios identificados con claridad y timing correcto",
      "Plan de contratación con fechas ajustadas a la apertura",
      "Formación planificada antes del primer servicio real",
      "Servicios de prueba (soft opening) previstos y organizados",
    ],
  },
  {
    title: "Apertura",
    items: [
      "Plan de comunicación y marketing preparado para el lanzamiento",
      "Sistemas de gestión instalados y probados antes del primer servicio",
      "KPIs definidos para hacer seguimiento en los primeros 3 meses",
    ],
  },
];

const total = blocks.reduce((sum, b) => sum + b.items.length, 0);

function getResult(pct: number) {
  if (pct >= 0.75) return {
    label: "Preparación sólida",
    body: "Tienes la mayoría de las bases bien cubiertas. Completa los ítems pendientes y revisa especialmente los bloques con menos progreso antes de lanzarte.",
    style: "bg-green-50 border-green-200 text-green-800",
    dot: "bg-green-500",
  };
  if (pct >= 0.5) return {
    label: "Buen avance",
    body: "Tienes trabajo avanzado pero hay bloques clave por cerrar. Revisa especialmente financiación, local y operativa: son los que más impacto tienen en la viabilidad.",
    style: "bg-amber-50 border-amber-200 text-amber-800",
    dot: "bg-amber-500",
  };
  if (pct >= 0.25) return {
    label: "Puntos críticos pendientes",
    body: "Hay elementos fundamentales que todavía no están cerrados. Abrir sin estos checks supone un riesgo real. Prioriza concepto, local y financiación.",
    style: "bg-orange-50 border-orange-200 text-orange-800",
    dot: "bg-orange-500",
  };
  return {
    label: "Trabajo importante pendiente",
    body: "Estás en las primeras fases. Úsalo como hoja de ruta: empieza por validar el concepto y el local antes de comprometer ninguna inversión.",
    style: "bg-red-50 border-red-200 text-red-800",
    dot: "bg-red-500",
  };
}

export default function ChecklistAperturaClient() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const count = checked.size;
  const pct = count / total;
  const progressPct = Math.round(pct * 100);
  const result = getResult(pct);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">

        {/* Progress bar */}
        <div className="bg-cream-dark border border-navy/10 rounded-xl p-6 mb-10">
          <div className="flex items-center justify-between mb-3">
            <p className="font-body text-navy text-sm font-medium">Progreso total</p>
            <p className="font-display text-navy text-2xl font-bold">{progressPct}%</p>
          </div>
          <div className="h-3 bg-navy/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progressPct}%`,
                backgroundColor: pct >= 1 ? "#22c55e" : "#D4A853",
              }}
            />
          </div>
          <p className="font-body text-ink/50 text-xs mt-2">{count} de {total} ítems completados</p>
        </div>

        {/* Blocks */}
        <div className="space-y-8 mb-12">
          {blocks.map((block, bi) => {
            const blockCount = block.items.filter((_, ii) => checked.has(`${bi}-${ii}`)).length;
            return (
              <div key={bi} className="border border-navy/10 rounded-xl overflow-hidden">
                <div className="bg-cream-dark px-6 py-4 flex items-center justify-between">
                  <h2 className="font-display text-navy text-base font-semibold">{block.title}</h2>
                  <span className="font-body text-ink/50 text-xs">{blockCount}/{block.items.length}</span>
                </div>
                <div className="divide-y divide-navy/6">
                  {block.items.map((item, ii) => {
                    const id = `${bi}-${ii}`;
                    const isChecked = checked.has(id);
                    return (
                      <label key={ii} className="flex items-start gap-4 px-6 py-4 cursor-pointer hover:bg-cream-dark/40 transition-colors">
                        <div
                          className={`w-5 h-5 border flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                            isChecked
                              ? "bg-amber border-amber"
                              : "border-navy/30 hover:border-amber/60"
                          }`}
                          onClick={() => toggle(id)}
                        >
                          {isChecked && <Check size={12} className="text-white" strokeWidth={3} />}
                        </div>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={isChecked}
                          onChange={() => toggle(id)}
                          aria-label={item}
                        />
                        <span
                          className={`font-body text-sm leading-relaxed transition-colors ${
                            isChecked ? "text-ink/40 line-through" : "text-ink/75"
                          }`}
                        >
                          {item}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Result */}
        <div className={`border rounded-xl p-6 ${result.style}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className={`w-3 h-3 rounded-full flex-shrink-0 ${result.dot}`} />
            <span className="font-display text-lg font-semibold">{result.label}</span>
            <span className="font-display text-lg font-bold ml-auto">{progressPct}%</span>
          </div>
          <p className="font-body text-sm leading-relaxed opacity-80">{result.body}</p>
        </div>

      </div>
    </section>
  );
}
