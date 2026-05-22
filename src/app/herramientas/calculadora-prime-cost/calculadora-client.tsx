"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/gtag";

type Level = "verde" | "amarillo" | "rojo";

function getLevel(value: number, greenMax: number, yellowMax: number): Level {
  if (value <= greenMax) return "verde";
  if (value <= yellowMax) return "amarillo";
  return "rojo";
}

const cardStyles: Record<Level, string> = {
  verde: "bg-green-50 border-green-200",
  amarillo: "bg-amber-50 border-amber-200",
  rojo: "bg-red-50 border-red-200",
};
const textStyles: Record<Level, string> = {
  verde: "text-green-800",
  amarillo: "text-amber-800",
  rojo: "text-red-800",
};
const dotStyles: Record<Level, string> = {
  verde: "bg-green-500",
  amarillo: "bg-amber-500",
  rojo: "bg-red-500",
};
const levelLabels: Record<Level, string> = {
  verde: "Óptimo",
  amarillo: "Mejorable",
  rojo: "Atención urgente",
};

const interpretations: Record<"food" | "labour" | "prime", Record<Level, string>> = {
  food: {
    verde:
      "Tu food cost está por debajo del 32%, dentro del rango óptimo. Buen control de costes de materia prima.",
    amarillo:
      "Tu food cost está entre el 32% y el 38%. Aceptable, pero con margen de mejora. Revisa escandallos, porciones y condiciones con proveedores.",
    rojo:
      "Tu food cost supera el 38%, lo que merece atención prioritaria. Revisa escandallos, mermas, porciones y precios de compra.",
  },
  labour: {
    verde:
      "Tu labour cost está bien controlado, por debajo del 32%. Asegúrate de que el equipo es suficiente para sostener la calidad del servicio.",
    amarillo:
      "Tu labour cost está entre el 32% y el 38%. Revisa la programación de turnos y la estructura de plantilla para identificar ineficiencias.",
    rojo:
      "Tu labour cost supera el 38%. Analiza la estructura de turnos, la productividad por empleado y si el volumen de ventas justifica la plantilla actual.",
  },
  prime: {
    verde:
      "Tu prime cost está por debajo del 60%, dejando margen razonable para cubrir el resto de costes operativos y generar beneficio neto.",
    amarillo:
      "Tu prime cost está entre el 60% y el 70%. Será difícil generar un beneficio neto saludable salvo que el resto de costes estén muy ajustados.",
    rojo:
      "Tu prime cost supera el 70%, lo que hace muy difícil la rentabilidad. Necesitas intervenir en food cost, labour cost o en ambos de forma urgente.",
  },
};

export default function CalculadoraClient() {
  const [ventas, setVentas] = useState("");
  const [materia, setMateria] = useState("");
  const [personal, setPersonal] = useState("");

  const ventasNum = parseFloat(ventas.replace(",", ".")) || 0;
  const materiaNum = parseFloat(materia.replace(",", ".")) || 0;
  const personalNum = parseFloat(personal.replace(",", ".")) || 0;

  const showFood = ventasNum > 0 && materiaNum > 0;
  const showLabour = ventasNum > 0 && personalNum > 0;
  const showPrime = showFood && showLabour;
  const showAny = showFood || showLabour;

  const foodCost = showFood ? (materiaNum / ventasNum) * 100 : 0;
  const labourCost = showLabour ? (personalNum / ventasNum) * 100 : 0;
  const primeCost = foodCost + labourCost;

  const fcLevel = getLevel(foodCost, 32, 38);
  const lcLevel = getLevel(labourCost, 32, 38);
  const pcLevel = getLevel(primeCost, 60, 70);

  const visibleMetrics = [
    showFood && { key: "food" as const, label: "Food Cost", value: foodCost, level: fcLevel },
    showLabour && { key: "labour" as const, label: "Labour Cost", value: labourCost, level: lcLevel },
    showPrime && { key: "prime" as const, label: "Prime Cost", value: primeCost, level: pcLevel },
  ].filter(Boolean) as Array<{ key: "food" | "labour" | "prime"; label: string; value: number; level: Level }>;

  const trackedRef = useRef(false);
  useEffect(() => {
    if (showAny && !trackedRef.current) {
      trackedRef.current = true;
      trackEvent("herramienta_calculada", { event_category: "herramienta", event_label: "Calculadora Prime Cost" });
    }
  }, [showAny]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">

        {/* Inputs */}
        <div className="bg-cream-dark border border-navy/10 rounded-xl p-8 mb-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
            Introduce tus datos
          </p>
          <div className="space-y-5">
            <div>
              <label htmlFor="ventas" className="block font-body text-navy text-sm font-medium mb-2">
                Ventas totales del período
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-ink/40 text-sm select-none">€</span>
                <input
                  id="ventas"
                  type="number"
                  min="0"
                  step="any"
                  value={ventas}
                  onChange={(e) => setVentas(e.target.value)}
                  placeholder="0"
                  className="w-full bg-white border border-navy/20 pl-9 pr-4 py-3.5 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="materia" className="block font-body text-navy text-sm font-medium mb-2">
                Coste de materia prima
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-ink/40 text-sm select-none">€</span>
                <input
                  id="materia"
                  type="number"
                  min="0"
                  step="any"
                  value={materia}
                  onChange={(e) => setMateria(e.target.value)}
                  placeholder="0"
                  className="w-full bg-white border border-navy/20 pl-9 pr-4 py-3.5 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="personal" className="block font-body text-navy text-sm font-medium mb-2">
                Coste total de personal (incluye Seguridad Social)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-ink/40 text-sm select-none">€</span>
                <input
                  id="personal"
                  type="number"
                  min="0"
                  step="any"
                  value={personal}
                  onChange={(e) => setPersonal(e.target.value)}
                  placeholder="0"
                  className="w-full bg-white border border-navy/20 pl-9 pr-4 py-3.5 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
            Resultados
          </p>
          {showAny ? (
            <div className="space-y-4">
              {visibleMetrics.map((m) => (
                <div key={m.key} className={`border rounded-xl p-6 ${cardStyles[m.level]}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${dotStyles[m.level]}`} />
                      <span className={`font-display text-lg font-semibold ${textStyles[m.level]}`}>
                        {m.label}
                      </span>
                      <span className={`font-body text-xs tracking-widest uppercase opacity-60 ${textStyles[m.level]}`}>
                        {levelLabels[m.level]}
                      </span>
                    </div>
                    <span className={`font-display text-3xl font-bold flex-shrink-0 ${textStyles[m.level]}`}>
                      {m.value.toFixed(1)}%
                    </span>
                  </div>
                  <p className={`font-body text-sm leading-relaxed opacity-80 ${textStyles[m.level]}`}>
                    {interpretations[m.key][m.level]}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-cream-dark border border-navy/10 rounded-xl p-8 text-center">
              <p className="font-body text-ink/40 text-sm">
                Introduce tus datos arriba para ver los resultados al instante.
              </p>
            </div>
          )}
        </div>

        {/* CTA parcial — solo food o labour, sin prime */}
        {showAny && !showPrime && (
          <div className="mt-6 bg-cream-dark border border-navy/10 rounded-xl p-6">
            <p className="font-body text-ink/70 text-sm leading-relaxed mb-4">
              Introduce el coste de personal para calcular el prime cost completo. O si prefieres, el diagnóstico gratuito analiza todas las áreas de tu negocio en 10 minutos.
            </p>
            <a
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber text-navy text-sm font-semibold tracking-wide hover:bg-amber/90 transition-colors"
            >
              Recibir Diagnóstico Gratuito →
            </a>
          </div>
        )}

        {/* Interpretación */}
        {showPrime && (
          <div className="mt-8 bg-cream-dark border border-navy/10 rounded-xl p-6 lg:p-8">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
              ¿Qué significa tu resultado?
            </p>
            <p className="font-body text-ink/70 text-base leading-relaxed mb-5">
              {primeCost > 70
                ? "Tu prime cost está por encima del umbral sostenible. Hay fugas de margen que conviene identificar antes de que afecten más al negocio."
                : primeCost >= 60
                ? "Tu prime cost está en zona de atención. Hay margen de mejora que con los ajustes correctos puede cambiar significativamente el resultado."
                : "Tu prime cost está en un rango saludable. El trabajo ahora es mantenerlo y optimizar otros indicadores."}
            </p>
            <a
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber text-navy text-sm font-semibold tracking-wide hover:bg-amber/90 transition-colors"
            >
              {pcLevel === "rojo"
                ? "Tu prime cost está en zona crítica — ver diagnóstico gratuito →"
                : pcLevel === "amarillo"
                ? "Hay margen de mejora real — ver diagnóstico gratuito →"
                : "Buen resultado — analiza el resto de tu negocio →"}
            </a>
          </div>
        )}

        {/* Reference ranges */}
        <div className="border-t border-navy/10 pt-8">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
            Rangos de referencia del sector
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Food Cost", green: "< 32%", yellow: "32–38%", red: "> 38%" },
              { label: "Labour Cost", green: "< 32%", yellow: "32–38%", red: "> 38%" },
              { label: "Prime Cost", green: "< 60%", yellow: "60–70%", red: "> 70%" },
            ].map((ref) => (
              <div key={ref.label} className="bg-cream-dark border border-navy/8 rounded-xl p-5">
                <p className="font-body text-navy text-xs font-semibold uppercase tracking-widest mb-3">
                  {ref.label}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="font-body text-ink/65 text-xs">Óptimo: {ref.green}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                    <span className="font-body text-ink/65 text-xs">Mejorable: {ref.yellow}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0" />
                    <span className="font-body text-ink/65 text-xs">Atención: {ref.red}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
