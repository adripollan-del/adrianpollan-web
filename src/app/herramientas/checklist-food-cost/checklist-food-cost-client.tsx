"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface ChecklistBlock {
  title: string;
  items: string[];
}

const blocks: ChecklistBlock[] = [
  {
    title: "Escandallos",
    items: [
      "Todos los platos de la carta tienen escandallo actualizado",
      "Los escandallos se han revisado en los últimos 3 meses",
      "El food cost está calculado por plato y por familia",
      "La carta se ha revisado eliminando o ajustando platos con margen negativo",
    ],
  },
  {
    title: "Control de stock",
    items: [
      "Se realiza inventario de almacén al menos una vez por semana",
      "El sistema de rotación FIFO está implementado en todos los almacenes",
      "Las mermas y pérdidas se registran y analizan periódicamente",
      "Las recepciones de mercancía se verifican contra el pedido y el albarán",
    ],
  },
  {
    title: "Porciones y producción",
    items: [
      "Las porciones están estandarizadas para todos los platos",
      "El equipo pesa y mide según las fichas técnicas durante el servicio",
      "Las fichas técnicas están accesibles en cocina y actualizadas",
      "Las producciones previas al servicio están planificadas y controladas",
    ],
  },
  {
    title: "Análisis y seguimiento",
    items: [
      "El food cost real se calcula mensualmente y se compara con el objetivo",
      "Se analiza la mezcla de ventas para detectar platos que dañan el margen",
      "Existe un objetivo de food cost definido y conocido por el equipo",
      "Se hacen reuniones periódicas para revisar resultados con el equipo",
    ],
  },
];

const total = blocks.reduce((sum, b) => sum + b.items.length, 0);

function getResult(count: number) {
  if (count >= 13) return {
    label: "Control sólido",
    body: "Tu sistema de control de food cost está bien estructurado. El foco ahora es la mejora continua: comparar históricos, detectar tendencias y optimizar la mezcla de ventas.",
    style: "bg-green-50 border-green-200 text-green-800",
    dot: "bg-green-500",
  };
  if (count >= 9) return {
    label: "Buen control",
    body: "Tienes una base sólida. Completa los ítems pendientes para cerrar los últimos puntos de fuga de margen. El bloque de análisis y seguimiento suele ser el que más impacto tiene.",
    style: "bg-amber-50 border-amber-200 text-amber-800",
    dot: "bg-amber-500",
  };
  if (count >= 5) return {
    label: "Control básico",
    body: "Tienes algunas bases en marcha, pero faltan elementos clave para un control real del food cost. Prioriza escandallos actualizados e inventarios semanales.",
    style: "bg-orange-50 border-orange-200 text-orange-800",
    dot: "bg-orange-500",
  };
  return {
    label: "Control insuficiente",
    body: "Tu negocio no tiene los sistemas básicos para controlar el food cost. Cada mes sin estos controles supone pérdida de margen invisible. Empieza por escandallos e inventario.",
    style: "bg-red-50 border-red-200 text-red-800",
    dot: "bg-red-500",
  };
}

export default function ChecklistFoodCostClient() {
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
  const progressPct = Math.round((count / total) * 100);
  const result = getResult(count);

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
                backgroundColor: count >= total ? "#22c55e" : "#D4A853",
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
                            isChecked ? "bg-amber border-amber" : "border-navy/30 hover:border-amber/60"
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
            <span className="font-display text-lg font-bold ml-auto">{count}/{total}</span>
          </div>
          <p className="font-body text-sm leading-relaxed opacity-80">{result.body}</p>
        </div>

        {/* Interpretación */}
        <div className="mt-8 bg-cream-dark border border-navy/10 rounded-xl p-6 lg:p-8">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
            ¿Qué significa tu resultado?
          </p>
          <p className="font-body text-ink/70 text-base leading-relaxed mb-5">
            {progressPct < 50
              ? "El control de food cost en tu negocio tiene margen de mejora importante. Sin un sistema claro, el margen se escapa sin que nadie lo vea."
              : progressPct <= 75
              ? "Tienes algunas bases, pero hay procesos sin implantar que pueden estar costando margen cada mes."
              : "Tienes un buen nivel de control. El siguiente paso es asegurarte de que se mantiene actualizado y que el equipo lo aplica de forma consistente."}
          </p>
          <a
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber text-navy text-sm font-semibold tracking-wide hover:bg-amber/90 transition-colors"
          >
            Recibir diagnóstico completo de tu negocio →
          </a>
        </div>

      </div>
    </section>
  );
}
