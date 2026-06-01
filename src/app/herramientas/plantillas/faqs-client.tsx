"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "¿Necesito saber Excel para usar estas plantillas?",
    a: "No. Todas las plantillas están diseñadas para que solo tengas que rellenar las celdas marcadas en amarillo. Las fórmulas, cálculos y dashboards funcionan solos. Si sabes usar un Excel básico (escribir en celdas, filtrar columnas), es más que suficiente.",
  },
  {
    q: "¿Funcionan en Google Sheets o solo en Excel?",
    a: "Funcionan en los dos. Están optimizadas para Google Sheets, que además te permite usarlas desde el móvil, compartirlas con tu equipo y editarlas en tiempo real desde cualquier dispositivo. También funcionan en Excel para Mac y Windows.",
  },
  {
    q: "¿Cómo recibo las plantillas después de comprar?",
    a: "Nada más completar el pago recibes un email con el enlace de descarga. El acceso es inmediato, sin cuentas ni procesos de activación. Los archivos son tuyos para siempre.",
  },
  {
    q: "¿Aplican a cualquier tipo de restaurante?",
    a: "Sí. Están construidas sobre situaciones reales de restaurantes de distintos tamaños y formatos: desde negocios independientes hasta propiedades de hotel, pasando por locales con delivery y take away. Cada plantilla incluye datos de ejemplo que puedes borrar y sustituir por los tuyos.",
  },
  {
    q: "¿Qué diferencia hay entre estas plantillas y las que encuentro gratis en internet?",
    a: "Las plantillas gratuitas suelen ser estructuras vacías sin lógica detrás. Estas incluyen fórmulas automáticas, alertas configurables, dashboards con lectura inmediata y una guía operativa de primeros pasos. La diferencia no está en el archivo, está en si el sistema funciona cuando lo usas en condiciones reales.",
  },
  {
    q: "¿Puedo personalizarlas para mi restaurante?",
    a: "Sí, y está pensado así. Puedes cambiar nombres de productos, categorías, proveedores, umbrales de alerta y cualquier dato de entrada. Las columnas con fórmulas están protegidas para que no rompas la lógica por accidente, pero todo lo demás es editable.",
  },
  {
    q: "¿Qué pasa si tengo dudas al usarlas?",
    a: "Puedes escribirme directamente a adrian@adrianpollan.com. No hay un sistema de tickets ni un formulario: hay una persona que conoce cada plantilla y puede ayudarte a adaptarla a tu situación concreta.",
  },
  {
    q: "¿Puedo comprar primero una plantilla y añadir más después?",
    a: "Sí. Cada plantilla se compra por separado y si después quieres ampliar con otra, el precio es el mismo. Si sabes desde el principio que vas a necesitar varias, los packs te ahorran entre un 20% y un 37% sobre el precio individual.",
  },
];

export default function FaqsClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-10">
          Preguntas frecuentes sobre las plantillas
        </h2>

        <div className="border-t border-navy/10">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-navy/10">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-navy text-base font-semibold leading-snug">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 text-amber transition-transform duration-200">
                  {openIndex === i ? <X size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="font-body text-ink/65 text-sm leading-relaxed pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
