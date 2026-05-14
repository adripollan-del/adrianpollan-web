const phrases = [
  "20+ años en restauración internacional",
  "España · Francia · Reino Unido · Irlanda",
  "Diagnóstico · Operativa · Aperturas",
  "Rentabilidad como resultado",
  "Cada negocio tiene su propia lógica",
  "Sin planes estratégicos que acaban en una carpeta",
  "¿Vendes bien pero no ganas lo que deberías?",
  "Resultados medibles, no informes bonitos",
  "El problema no siempre está donde crees",
  "Menos teoría, más operativa",
  "Un negocio que funciona sin depender solo de ti",
  "Acompañamiento real, no consultoría de PDF",
];

export default function Ticker() {
  const items = [...phrases, ...phrases];

  return (
    <div className="bg-amber overflow-hidden py-6 lg:py-9 select-none">
      <div className="flex animate-ticker whitespace-nowrap items-center">
        {items.map((phrase, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display italic font-light text-2xl lg:text-3xl text-navy/80 px-10 lg:px-14 tracking-wide">
              {phrase}
            </span>
            <span className="text-navy/20 text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
