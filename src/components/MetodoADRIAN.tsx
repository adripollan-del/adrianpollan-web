const phases = [
  { letter: "A", name: "Analizar", desc: "Entender qué es el negocio y para quién existe" },
  { letter: "D", name: "Diagnosticar", desc: "Identificar qué está pasando de verdad" },
  { letter: "R", name: "Revisar", desc: "Leer los números y la operativa con precisión" },
  { letter: "I", name: "Implementar", desc: "Aplicar cambios con criterio y orden" },
  { letter: "A", name: "Acompañar", desc: "Estar presente mientras el negocio mejora" },
  { letter: "N", name: "Normalizar", desc: "Crear rutinas y sistemas sostenibles" },
];

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 9h12M9 3l6 6-6 6" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2v12M3 9l6 6 6-6" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MetodoADRIAN() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">El método</p>
          <h2 className="font-display text-cream text-3xl lg:text-4xl font-semibold leading-tight">
            Seis fases. Una secuencia que funciona.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          {phases.flatMap((phase, i) => {
            const block = (
              <div
                key={`block-${i}`}
                className="flex-1 border border-amber/20 p-6 lg:p-7 flex flex-col items-center text-center min-w-0"
              >
                <span className="font-display text-amber text-5xl lg:text-6xl font-bold leading-none mb-3">
                  {phase.letter}
                </span>
                <h3 className="font-display text-cream text-sm font-bold mb-2 tracking-wide uppercase">
                  {phase.name}
                </h3>
                <p className="font-body text-cream/50 text-xs leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            );

            if (i < phases.length - 1) {
              return [
                block,
                <div
                  key={`arrow-${i}`}
                  className="flex items-center justify-center flex-shrink-0 py-1 lg:py-0 lg:w-7"
                >
                  <span className="hidden lg:flex"><ArrowRight /></span>
                  <span className="flex lg:hidden"><ArrowDown /></span>
                </div>,
              ];
            }
            return [block];
          })}
        </div>
      </div>
    </section>
  );
}
