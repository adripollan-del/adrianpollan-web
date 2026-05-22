"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

interface ChecklistBlock {
  title: string;
  items: string[];
}

const blocks: ChecklistBlock[] = [
  {
    title: "Control de precios",
    items: [
      "Los precios de los proveedores principales se revisan al menos mensualmente",
      "Se comparan precios entre al menos 2 proveedores para cada categoría clave",
      "Las subidas de precio se registran y se negocian cuando son injustificadas",
      "Se hace una negociación formal de condiciones al menos una vez al año",
    ],
  },
  {
    title: "Calidad y servicio",
    items: [
      "Existen criterios definidos de evaluación para cada proveedor clave",
      "Las incidencias de calidad se registran y se comunican al proveedor",
      "Los criterios de aceptación de mercancía están definidos y se aplican",
      "Hay un proveedor alternativo identificado para las referencias críticas",
    ],
  },
  {
    title: "Condiciones comerciales",
    items: [
      "Se han negociado rappels o descuentos por volumen con los proveedores principales",
      "Las condiciones de pago están optimizadas para la tesorería del negocio",
      "El pedido mínimo está ajustado a las necesidades reales, sin exceso de stock",
      "Los albaranes se controlan y cuadran contra las facturas recibidas",
    ],
  },
  {
    title: "Gestión operativa",
    items: [
      "Los pedidos se planifican con antelación suficiente, no por urgencia",
      "Hay un responsable claro de compras y gestión de proveedores",
      "El almacén está organizado con FIFO y control de ubicaciones",
      "Las caducidades se controlan activamente para evitar pérdidas de producto",
    ],
  },
];

const total = blocks.reduce((sum, b) => sum + b.items.length, 0);

function getResult(count: number) {
  if (count >= 13) return {
    label: "Gestión profesional",
    body: "Tu gestión de proveedores es sistemática y profesional. Asegúrate de mantener las revisiones periódicas y no perder el pulso sobre precios y condiciones.",
    style: "bg-green-50 border-green-200 text-green-800",
    dot: "bg-green-500",
  };
  if (count >= 9) return {
    label: "Gestión estructurada",
    body: "Tienes procesos claros en la mayoría de áreas. Los puntos pendientes son los que más impacto tienen en condiciones y costes: comparación de precios y negociación anual.",
    style: "bg-amber-50 border-amber-200 text-amber-800",
    dot: "bg-amber-500",
  };
  if (count >= 5) return {
    label: "Gestión básica",
    body: "Tienes algún control, pero sin sistematización. Hay margen real de mejora en condiciones comerciales y control de precios que se traduce directamente en food cost.",
    style: "bg-orange-50 border-orange-200 text-orange-800",
    dot: "bg-orange-500",
  };
  return {
    label: "Gestión reactiva",
    body: "Tu gestión de proveedores es completamente reactiva. Estás pagando más de lo necesario. Empieza por comparar precios, fijar criterios de calidad y tener alternativas para referencias críticas.",
    style: "bg-red-50 border-red-200 text-red-800",
    dot: "bg-red-500",
  };
}

export default function AuditoriaClient() {
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

  const trackedRef = useRef(false);
  useEffect(() => {
    if (count === total && !trackedRef.current) {
      trackedRef.current = true;
      trackEvent("auditoria_completada", { event_category: "herramienta", event_label: "Auditoría Proveedores" });
    }
  }, [count]);

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
              ? "La gestión de proveedores en tu negocio tiene margen de mejora significativo. Es una de las áreas donde se pueden recuperar varios puntos de food cost con cambios concretos."
              : progressPct <= 75
              ? "Tienes algunas prácticas correctas, pero hay elementos sin implantar que pueden estar afectando al coste de compra."
              : "Tienes una gestión de proveedores ordenada. El trabajo ahora es mantener la disciplina y revisar condiciones periódicamente."}
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
