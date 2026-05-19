import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Stethoscope, BarChart2, Wrench, HandHeart, RefreshCw } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "El Método ADRIÁN — Libro de Gestión para Restaurantes y Hostelería",
  description:
    "El sistema práctico para transformar la rentabilidad y la operativa de tu restaurante. Basado en 20 años de experiencia real. Próxima publicación — apúntate para ser el primero en saberlo.",
  alternates: {
    canonical: "https://adrianpollan.com/libro",
  },
  openGraph: {
    title: "El Método ADRIÁN — Libro de Gestión para Restaurantes",
    description:
      "Sistema práctico de gestión para hostelería basado en 20 años de experiencia real. Rentabilidad, operaciones, equipos y aperturas.",
    url: "https://adrianpollan.com/libro",
  },
};

const phaseData = [
  { letter: "A", title: "Analizar el concepto", question: "¿Qué es realmente este negocio y para quién existe?", result: "Claridad sobre cliente, propuesta de valor, carta, servicio, marca y línea troncal." },
  { letter: "D", title: "Diagnosticar el negocio", question: "¿Qué está pasando de verdad?", result: "Separación entre síntomas visibles, causas probables y problemas prioritarios." },
  { letter: "R", title: "Revisar números y operaciones", question: "¿Dónde se gana, se pierde o se bloquea el negocio?", result: "Lectura integrada de ventas, costes, procesos, equipo y experiencia." },
  { letter: "I", title: "Implementar mejoras", question: "¿Qué acciones deben aplicarse primero?", result: "Plan de acción priorizado, medible y realista." },
  { letter: "A", title: "Acompañar al propietario", question: "¿Qué apoyo necesita la persona que decide?", result: "Decisiones mejor sostenidas, gestión del cambio y menos soledad directiva." },
  { letter: "N", title: "Normalizar procesos", question: "¿Cómo evitamos volver al caos?", result: "Rutinas, procedimientos, indicadores y hábitos sostenibles." },
];

export default function LibroPage() {
  const phaseIcons = [
    <Compass key="p1" size={18} className="text-navy/50" />,
    <Stethoscope key="p2" size={18} className="text-navy/50" />,
    <BarChart2 key="p3" size={18} className="text-navy/50" />,
    <Wrench key="p4" size={18} className="text-navy/50" />,
    <HandHeart key="p5" size={18} className="text-navy/50" />,
    <RefreshCw key="p6" size={18} className="text-navy/50" />,
  ];
  return (
    <>
      {/* ── HERO — navy con portada ────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1750943082452-c714763f73b2?auto=format&fit=crop&w=1920&q=80"
          alt="El Método ADRIÁN — libro de consultoría para restaurantes de Adrián Pollán"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Portada libro mockup */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[3/4] max-w-xs mx-auto lg:mx-0">
                {/* Sombra del libro */}
                <div className="absolute -bottom-3 -right-3 inset-0 bg-navy/50 border border-cream/5" />
                {/* Portada */}
                <div className="relative h-full bg-gradient-to-br from-amber via-amber to-[#9a6214] flex flex-col justify-between p-10 overflow-hidden border border-amber/20">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 border border-navy/20 rounded-full" />
                    <p className="font-body text-navy/40 text-xs tracking-widest uppercase">
                      Próximamente
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-navy/50 text-xs tracking-widest uppercase mb-3">
                      El sistema para transformar tu restaurante
                    </p>
                    <h2 className="font-display text-navy text-4xl lg:text-5xl font-bold leading-tight mb-4">
                      El Método<br />ADRIÁN
                    </h2>
                    <div className="w-10 h-px bg-navy/30 mb-4" />
                    <p className="font-body text-navy/60 text-sm font-medium">
                      Adrián Pollán
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido derecho */}
            <div className="order-1 lg:order-2">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">
                Mi libro
              </p>
              <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-4">
                El Método<br />
                <span className="font-semibold">ADRIÁN</span>
              </h1>
              <p className="font-display text-cream/40 text-xl lg:text-2xl italic mb-8">
                Un sistema de gestión para negocios de hostelería, escrito desde
                la experiencia real. Próximamente.
              </p>
              <a
                href="#lista-espera"
                className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              >
                Apuntarme a la lista de espera →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MI HISTORIA — fondo blanco ───────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-3">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
                Mi historia
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-8">
                Lo que me enseñó perderlo todo.
              </h2>
              <div className="space-y-5 font-body text-ink/70 text-base leading-relaxed">
                <p>
                  Crecí dentro de la hostelería. Con trece años ya ayudaba a mi
                  padre en el negocio familiar. Con dieciséis, mis padres abrieron
                  su propio establecimiento y yo estuve ahí desde el principio.
                </p>
                <p>
                  Años después, ya casado y con experiencia acumulada en distintos
                  negocios y países, decidí abrir mi propio proyecto. Tenía
                  ilusión, tenía conocimiento del sector y tenía las ganas de
                  quien lleva toda la vida preparándose para ese momento.
                </p>
                <p>
                  Y fracasé. No por falta de trabajo. No por falta de pasión.
                  Fracasé porque la experiencia sola no reemplaza al método.
                  Tuve que cerrar, asumir las consecuencias y pasar años ordenando
                  lo que había salido mal.
                </p>
                <p className="font-medium text-ink/90">
                  El Método ADRIÁN nació de ahí. Lo escribo para que otros no
                  tengan que pasar por lo mismo.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-full rounded-xl overflow-hidden lg:col-span-2">
              <Image
                src="/libro-aprendizaje.webp"
                alt="Adrián Pollán comparte su experiencia en gestión y recuperación de negocios de hostelería"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
                quality={85}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ ES — fondo crema oscuro ──────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-6">
              Qué es el libro
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-8">
              Un sistema de gestión para negocios de hostelería que funciona en la vida real.
            </h2>
            <div className="space-y-5 font-body text-ink/70 text-base leading-relaxed">
              <p>
                El Método ADRIÁN no es un libro de motivación ni una colección
                de consejos genéricos. Es un sistema estructurado para gestionar
                un negocio de restauración con criterio.
              </p>
              <p>
                Está escrito para propietarios que trabajan mucho y no ven los
                resultados que esperan, para gestores que necesitan orden y
                claridad, y para emprendedores que quieren abrir con las bases
                bien puestas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EL MÉTODO DE UN VISTAZO — fondo blanco ───────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Columna izquierda — sticky */}
            <div className="lg:sticky lg:top-24">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Qué encontrarás
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                El método de un vistazo
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                ADRIÁN no es solo un nombre. Es una secuencia de trabajo para
                diagnosticar, ordenar y transformar un negocio de hostelería.
              </p>
            </div>

            {/* Columna derecha — fases */}
            <div>
              <div className="space-y-0">
                {phaseData.map((phase, i) => (
                  <div
                    key={`${phase.letter}-${i}`}
                    className={`flex items-start gap-6 py-8 ${
                      i < phaseData.length - 1 ? "border-b border-navy/10" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2 w-10 flex-shrink-0 mt-1">
                      <span className="font-display text-amber text-4xl font-bold leading-none">
                        {phase.letter}
                      </span>
                      {phaseIcons[i]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-navy text-xl font-semibold mb-3">
                        {phase.title}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="font-body text-amber text-xs tracking-widest uppercase whitespace-nowrap mt-0.5 flex-shrink-0">Pregunta</span>
                          <p className="font-body text-ink/70 text-sm leading-relaxed italic">
                            {phase.question}
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-body text-amber text-xs tracking-widest uppercase whitespace-nowrap mt-0.5 flex-shrink-0">Resultado</span>
                          <p className="font-body text-ink/60 text-sm leading-relaxed">
                            {phase.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Texto de cierre */}
              <div className="mt-10 pt-8 border-t border-navy/10">
                <p className="font-body text-ink/65 text-base leading-relaxed">
                  <span className="font-semibold text-navy">El orden importa.</span>{" "}
                  Muchos restaurantes no fracasan por falta de esfuerzo, sino por
                  falta de secuencia. Primero se entiende el negocio. Después se
                  diagnostica. Luego se revisan números y operaciones. Más tarde
                  se implementa, se acompaña y se normaliza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES — fondo crema oscuro ────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Para quién es
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              No es un libro para estudiantes.<br />Es para quien ya está en el negocio.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Propietarios de restaurante",
                body: "Que llevan su negocio con intuición y esfuerzo, pero sienten que les falta un sistema. Que saben que pueden mejorar pero no saben exactamente cómo.",
              },
              {
                title: "Directores de operaciones",
                body: "Que gestionan varios locales y necesitan frameworks claros para estructurar su trabajo, formar a sus equipos y escalar con criterio.",
              },
              {
                title: "Emprendedores que abren",
                body: "Que quieren tomar las mejores decisiones posibles antes y durante la apertura, con una guía práctica que cubre todo el proceso.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-navy/8 rounded-xl p-8 hover:border-amber/40 transition-colors">
                <span className="font-display text-amber/40 text-4xl font-light block mb-4">
                  0{i + 1}
                </span>
                <h3 className="font-display text-navy text-xl font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-ink/65 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LISTA DE ESPERA — fondo blanco ────────────────────────── */}
      <section className="bg-white py-20 lg:py-28" id="lista-espera">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                Próximamente
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Sé el primero en saber cuándo sale
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                Déjame tu email y te aviso cuando El Método ADRIÁN esté disponible.
              </p>
            </div>
            <div>
              <WaitlistForm />
              <p className="font-body text-navy/40 text-xs mt-4">
                Sin spam. Solo lo que importa, cuando importa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
