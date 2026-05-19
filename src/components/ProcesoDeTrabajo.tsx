const steps = [
  {
    num: 1,
    title: "Diagnóstico gratuito",
    desc: "Recibes una foto clara de dónde está tu negocio en 10 minutos.",
  },
  {
    num: 2,
    title: "Primera sesión",
    desc: "Revisamos juntos los resultados y vemos si tiene sentido trabajar juntos.",
  },
  {
    num: 3,
    title: "Propuesta",
    desc: "Si encajamos, preparo una propuesta adaptada a tu situación concreta.",
  },
  {
    num: 4,
    title: "Implementación",
    desc: "Trabajamos juntos para aplicar los cambios mientras el negocio sigue abierto.",
  },
];

export default function ProcesoDeTrabajo() {
  return (
    <section className="bg-cream-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">Proceso</p>
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight">
            De donde estás a donde quieres llegar
          </h2>
        </div>

        {/* Container: connecting amber line sits behind the circles on desktop */}
        <div className="relative">
          {/* Horizontal line — desktop only, vertically centered on the circles (h-10 = 40px, top-5 = 20px) */}
          <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-amber/35" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-row lg:flex-col items-start lg:items-center gap-5 lg:gap-0"
              >
                {/* Amber circle with step number */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-amber flex items-center justify-center flex-shrink-0 lg:mb-6">
                  <span className="font-display text-navy font-bold text-base leading-none">
                    {step.num}
                  </span>
                </div>

                {/* Text */}
                <div className="lg:text-center">
                  <h3 className="font-display text-navy text-base font-semibold mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-body text-ink/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
