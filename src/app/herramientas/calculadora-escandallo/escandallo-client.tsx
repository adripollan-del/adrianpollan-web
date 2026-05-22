"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

type Unit = "g" | "kg" | "ml" | "l" | "ud";

interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  unit: Unit;
  price: string;
}

interface SavedDish {
  id: string;
  name: string;
  costPerPortion: number;
  recPrice: number;
  foodCostPct: number;
  marginPct: number;
}

const FACTOR: Record<Unit, number> = { g: 1000, kg: 1, ml: 1000, l: 1, ud: 1 };
const PRICE_UNIT: Record<Unit, string> = { g: "€/kg", kg: "€/kg", ml: "€/l", l: "€/l", ud: "€/ud" };

let _n = 0;
const uid = () => `${Date.now()}-${++_n}`;
const blankIng = (): Ingredient => ({ id: uid(), name: "", quantity: "", unit: "g", price: "" });

function ingCost(i: Ingredient): number {
  const q = parseFloat(i.quantity) || 0;
  const p = parseFloat(i.price) || 0;
  return (q / FACTOR[i.unit]) * p;
}

function trafficLight(fc: number) {
  if (fc < 32) return { dot: "bg-green-500", label: "Excelente", style: "bg-green-50 border-green-200 text-green-800" };
  if (fc <= 38) return { dot: "bg-amber-500", label: "Aceptable", style: "bg-amber-50 border-amber-200 text-amber-800" };
  return { dot: "bg-red-500", label: "Atención", style: "bg-red-50 border-red-200 text-red-800" };
}

const IN = "bg-white border border-navy/20 px-3 py-2.5 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-amber transition-colors";

export default function EscandalloClient() {
  const [dishName, setDishName] = useState("");
  const [ings, setIngs] = useState<Ingredient[]>([blankIng()]);
  const [waste, setWaste] = useState("10");
  const [portions, setPortions] = useState("1");
  const [targetFC, setTargetFC] = useState(32);
  const [saved, setSaved] = useState<SavedDish[]>([]);

  const totalIngCost = ings.reduce((s, i) => s + ingCost(i), 0);
  const wasteN = Math.max(parseFloat(waste) || 0, 0);
  const portionsN = Math.max(parseFloat(portions) || 1, 1);
  const costWithWaste = totalIngCost * (1 + wasteN / 100);
  const costPerPortion = costWithWaste / portionsN;
  const recExcl = targetFC > 0 ? costPerPortion / (targetFC / 100) : 0;
  const recIncl = recExcl * 1.1;
  const marginPerPortion = recExcl - costPerPortion;
  const marginPct = 100 - targetFC;
  const tl = trafficLight(targetFC);
  const hasResults = totalIngCost > 0;

  const interpText =
    targetFC < 32
      ? "Excelente. Este plato tiene un food cost muy saludable. Potenciarlo en la carta puede mejorar el margen global."
      : targetFC <= 38
      ? "Aceptable. Está dentro del rango sostenible, pero hay margen de mejora revisando ingredientes o precio de venta."
      : "Atención. Este plato está por encima del umbral recomendado. Considera reformular la receta, ajustar el precio o revisar proveedores.";

  function addIng() { setIngs((p) => [...p, blankIng()]); }
  function removeIng(id: string) { setIngs((p) => p.filter((i) => i.id !== id)); }
  function updateIng(id: string, k: keyof Ingredient, v: string) {
    setIngs((p) => p.map((i) => (i.id === id ? { ...i, [k]: v } : i)));
  }

  function saveDish() {
    if (!hasResults) return;
    const d: SavedDish = {
      id: uid(),
      name: dishName.trim() || "Sin nombre",
      costPerPortion,
      recPrice: recExcl,
      foodCostPct: targetFC,
      marginPct,
    };
    setSaved((p) => [...p, d].sort((a, b) => b.marginPct - a.marginPct));
    setDishName("");
    setIngs([blankIng()]);
    setWaste("10");
    setPortions("1");
    setTargetFC(32);
  }

  const trackedRef = useRef(false);
  useEffect(() => {
    if (hasResults && !trackedRef.current) {
      trackedRef.current = true;
      trackEvent("escandallo_calculado", { event_category: "herramienta", event_label: "Calculadora Escandallo" });
    }
  }, [hasResults]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6">

        {/* Dish name */}
        <div className="bg-cream-dark border border-navy/10 rounded-xl p-6">
          <label className="block font-body text-navy text-sm font-medium mb-2">
            Nombre del plato
          </label>
          <input
            type="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            placeholder="Ej. Arroz meloso de gambas"
            className={`${IN} w-full`}
          />
        </div>

        {/* Ingredients */}
        <div className="bg-cream-dark border border-navy/10 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-navy/10">
            <p className="font-body text-amber text-xs tracking-widest uppercase">Ingredientes</p>
          </div>
          {/* Desktop header */}
          <div className="hidden lg:grid grid-cols-[1fr_100px_80px_140px_90px_36px] gap-2 px-6 py-2.5 bg-navy/5 border-b border-navy/8 text-xs font-body text-ink/45 uppercase tracking-wider">
            <span>Ingrediente</span>
            <span>Cantidad</span>
            <span>Unidad</span>
            <span>Precio</span>
            <span className="text-right">Coste</span>
            <span />
          </div>
          <div className="divide-y divide-navy/6">
            {ings.map((ing, idx) => {
              const cost = ingCost(ing);
              return (
                <div key={ing.id} className={`px-4 lg:px-6 py-3.5 ${idx % 2 === 1 ? "bg-white/70" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <input
                      type="text"
                      value={ing.name}
                      onChange={(e) => updateIng(ing.id, "name", e.target.value)}
                      placeholder="Ingrediente"
                      className={`${IN} flex-1 min-w-[140px]`}
                    />
                    <input
                      type="number"
                      min="0"
                      step="any"
                      value={ing.quantity}
                      onChange={(e) => updateIng(ing.id, "quantity", e.target.value)}
                      placeholder="0"
                      className={`${IN} w-20`}
                    />
                    <select
                      value={ing.unit}
                      onChange={(e) => updateIng(ing.id, "unit", e.target.value as Unit)}
                      className={`${IN} w-16`}
                    >
                      <option value="g">g</option>
                      <option value="kg">kg</option>
                      <option value="ml">ml</option>
                      <option value="l">l</option>
                      <option value="ud">ud</option>
                    </select>
                    <div className="relative w-36">
                      <input
                        type="number"
                        min="0"
                        step="any"
                        value={ing.price}
                        onChange={(e) => updateIng(ing.id, "price", e.target.value)}
                        placeholder="0.00"
                        className={`${IN} w-full pr-14`}
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 font-body text-ink/35 text-xs pointer-events-none">
                        {PRICE_UNIT[ing.unit]}
                      </span>
                    </div>
                    <span className="w-16 text-right font-body text-sm text-navy/60 tabular-nums flex-shrink-0">
                      {cost > 0 ? `€${cost.toFixed(3)}` : "—"}
                    </span>
                    <button
                      onClick={() => removeIng(ing.id)}
                      disabled={ings.length === 1}
                      aria-label="Eliminar ingrediente"
                      className="p-1 text-ink/30 hover:text-red-500 transition-colors disabled:opacity-20 disabled:cursor-not-allowed flex-shrink-0"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-6 py-3.5 border-t border-navy/8">
            <button
              onClick={addIng}
              className="inline-flex items-center gap-1.5 font-body text-sm text-amber font-medium hover:text-amber/80 transition-colors"
            >
              <Plus size={15} /> Añadir ingrediente
            </button>
          </div>
        </div>

        {/* Waste & portions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-cream-dark border border-navy/10 rounded-xl p-6">
            <label className="block font-body text-navy text-sm font-medium mb-2">
              Porcentaje de merma (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              value={waste}
              onChange={(e) => setWaste(e.target.value)}
              className={`${IN} w-full`}
            />
            <p className="font-body text-ink/40 text-xs mt-2">
              Pérdida por limpieza, cocción o preparación. Por defecto 10%.
            </p>
          </div>
          <div className="bg-cream-dark border border-navy/10 rounded-xl p-6">
            <label className="block font-body text-navy text-sm font-medium mb-2">
              Número de raciones
            </label>
            <input
              type="number"
              min="1"
              step="1"
              value={portions}
              onChange={(e) => setPortions(e.target.value)}
              className={`${IN} w-full`}
            />
            <p className="font-body text-ink/40 text-xs mt-2">
              Cuántas raciones produce esta receta.
            </p>
          </div>
        </div>

        {/* Target food cost slider */}
        <div className="bg-cream-dark border border-navy/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <label className="font-body text-navy text-sm font-medium">
              Food cost objetivo
            </label>
            <span
              className={`font-display text-2xl font-bold ${
                targetFC < 32 ? "text-green-700" : targetFC <= 38 ? "text-amber-700" : "text-red-700"
              }`}
            >
              {targetFC}%
            </span>
          </div>
          <input
            type="range"
            min="20"
            max="45"
            step="1"
            value={targetFC}
            onChange={(e) => setTargetFC(parseInt(e.target.value))}
            className="w-full"
            style={{ accentColor: "#BA7517" }}
          />
          <div className="flex justify-between font-body text-ink/40 text-xs mt-1">
            <span>20%</span>
            <span>45%</span>
          </div>
        </div>

        {/* Results */}
        {hasResults ? (
          <>
            {/* Traffic light + main metrics */}
            <div className={`border rounded-xl p-6 lg:p-8 ${tl.style}`}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-3 h-3 rounded-full flex-shrink-0 ${tl.dot}`} />
                <span className="font-display text-lg font-semibold">{tl.label}</span>
                <span className="font-body text-xs opacity-60 ml-1">
                  — Food cost objetivo {targetFC}%
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {[
                  { l: "Coste ingredientes", v: `€${totalIngCost.toFixed(3)}` },
                  { l: "Coste con merma", v: `€${costWithWaste.toFixed(3)}` },
                  { l: "Coste por ración", v: `€${costPerPortion.toFixed(3)}` },
                  { l: "Margen bruto/ración", v: `€${marginPerPortion.toFixed(2)}` },
                ].map((m) => (
                  <div key={m.l}>
                    <p className="font-body text-xs opacity-60 mb-1 leading-snug">{m.l}</p>
                    <p className="font-display text-xl font-bold">{m.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Price cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-navy rounded-xl p-5 text-center">
                <p className="font-body text-cream/50 text-xs uppercase tracking-widest mb-2 leading-snug">
                  PVP recomendado sin IVA
                </p>
                <p className="font-display text-cream text-3xl font-bold">€{recExcl.toFixed(2)}</p>
              </div>
              <div className="bg-navy/80 rounded-xl p-5 text-center">
                <p className="font-body text-cream/50 text-xs uppercase tracking-widest mb-2 leading-snug">
                  PVP con IVA 10%
                </p>
                <p className="font-display text-cream text-3xl font-bold">€{recIncl.toFixed(2)}</p>
              </div>
              <div className="bg-amber/10 border border-amber/30 rounded-xl p-5 text-center">
                <p className="font-body text-navy/60 text-xs uppercase tracking-widest mb-2 leading-snug">
                  Margen bruto
                </p>
                <p className="font-display text-navy text-3xl font-bold">{marginPct.toFixed(0)}%</p>
              </div>
            </div>

            {/* Interpretation */}
            <div className="bg-cream-dark border border-navy/10 rounded-xl p-6 lg:p-8">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">
                ¿Qué significa tu resultado?
              </p>
              <p className="font-body text-ink/70 text-base leading-relaxed mb-5">
                {interpText}
              </p>
              <a
                href="https://diagnostico.adrianpollan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber text-navy text-sm font-semibold tracking-wide hover:bg-amber/90 transition-colors"
              >
                {targetFC > 38
                  ? "Food cost por encima del umbral — ver diagnóstico gratuito →"
                  : targetFC >= 32
                  ? "Hay margen de mejora — ver diagnóstico gratuito →"
                  : "Buen resultado — analiza el resto de tu negocio →"}
              </a>
            </div>

            {/* Add another dish */}
            <div className="border-t border-navy/10 pt-8 text-center">
              <button
                onClick={saveDish}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-cream text-sm font-semibold tracking-wide hover:bg-navy/90 transition-colors rounded-lg"
              >
                <Plus size={15} /> Añadir otro plato y comparar
              </button>
              <p className="font-body text-ink/40 text-xs mt-3">
                Guarda este plato y calcula otro para comparar resultados.
              </p>
            </div>
          </>
        ) : (
          <div className="bg-cream-dark border border-navy/10 rounded-xl p-8 text-center">
            <p className="font-body text-ink/40 text-sm">
              Introduce los ingredientes para ver los resultados al instante.
            </p>
          </div>
        )}

        {/* Comparison table */}
        {saved.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-4">
              <p className="font-body text-amber text-xs tracking-widest uppercase">
                Comparativa de platos
              </p>
              <button
                onClick={() => setSaved([])}
                className="font-body text-xs text-ink/35 hover:text-ink/60 transition-colors"
              >
                Limpiar tabla
              </button>
            </div>
            <div className="overflow-x-auto border border-navy/10 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-cream">
                    {["Plato", "Coste/ración", "PVP (sin IVA)", "Food cost", "Margen"].map((h) => (
                      <th
                        key={h}
                        className={`px-4 py-3 font-body font-semibold text-xs tracking-wider uppercase whitespace-nowrap ${
                          h === "Plato" ? "text-left" : "text-right"
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/8">
                  {saved.map((d, i) => {
                    const dtl = trafficLight(d.foodCostPct);
                    return (
                      <tr key={d.id} className={i % 2 === 1 ? "bg-cream-dark/40" : "bg-white"}>
                        <td className="px-4 py-3 font-body text-navy font-medium">{d.name}</td>
                        <td className="px-4 py-3 font-body text-ink/65 text-right tabular-nums">
                          €{d.costPerPortion.toFixed(3)}
                        </td>
                        <td className="px-4 py-3 font-body text-ink/65 text-right tabular-nums">
                          €{d.recPrice.toFixed(2)}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="inline-flex items-center gap-1.5 font-body text-xs font-medium justify-end">
                            <span className={`w-2 h-2 rounded-full ${dtl.dot}`} />
                            {d.foodCostPct}%
                          </span>
                        </td>
                        <td className="px-4 py-3 font-body text-ink/70 text-right font-semibold tabular-nums">
                          {d.marginPct.toFixed(0)}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
