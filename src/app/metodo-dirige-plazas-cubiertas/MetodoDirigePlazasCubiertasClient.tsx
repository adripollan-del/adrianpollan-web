"use client";

import { useEffect, useRef, useState } from "react";
import {
  Calculator,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Gift,
  MessageCircle,
  PackageSearch,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserCheck,
  Users,
  UtensilsCrossed,
  Video,
  Wallet,
  XCircle,
} from "lucide-react";
import TrackingLink from "@/components/TrackingLink";

const WHATSAPP_URL =
  "https://wa.me/34698961632?text=" +
  encodeURIComponent("Hola Adrián. Quiero entrar en la formación, mandame el link de pago.");

const resultados = [
  "Sabrás cuánto te cuesta cada plato de tu carta, con mermas y sub-recetas incluidas.",
  "Sabrás qué platos te dan dinero y cuáles te lo quitan, con los precios ajustados con criterio.",
  "Controlarás tu caja cada semana, en diez minutos, en vez de enterarte cada trimestre con el gestor.",
  "Tendrás un inventario con punto de pedido automático: dejas de pedir a ojo.",
  "Tendrás checklists y protocolos para que el negocio funcione aunque tú no estés.",
  "Tendrás un horario planificado por coste, no por costumbre, con alerta si te pasas del objetivo.",
  "Tendrás un cuadro de mando con tus KPIs, tu cuenta de explotación y tus alertas.",
  "Tendrás tu antes y después medido: el mismo diagnóstico del día 1, repetido y comparado.",
  "Tendrás un sistema para gestionar a tu personal de forma más eficiente, con roles, onboarding y checklists ya definidos: viene incluido con el Sistema de Bienvenida 360º.",
];

const modulos = [
  {
    question: "Semana 0",
    answer: "Diagnóstico inicial, bienvenida, arranque del registro desde el primer día.",
  },
  {
    question: "Módulo 1 · Tus números (semanas 1-2)",
    answer: "Diagnóstico profundo, escandallo, cierre semanal, tesorería.",
  },
  {
    question: "Módulo 2 · Tu carta (semana 3)",
    answer: "Ingeniería de menú, pricing con criterio, delivery.",
  },
  {
    question: "Módulo 3 · Compras y stock (semana 4)",
    answer: "Proveedores, negociación, inventario, punto de pedido.",
  },
  {
    question: "Módulo 4 · Tu operativa (semana 5)",
    answer: "Checklists, producción con previsión, mermas.",
  },
  {
    question: "Módulo 5 · Tu equipo (semana 6)",
    answer: "Roles, horarios por coste, Sistema de Bienvenida 360º.",
  },
  {
    question: "Módulo 6 · Tu dirección (semanas 7-8)",
    answer: "Upselling, marketing rentable, plan a 12 meses.",
  },
  {
    question: "Semanas 9-12",
    answer: "Implementación pura. Sin formación nueva: aplicar, medir, ajustar.",
  },
];

const acompanamiento = [
  { icon: Target, text: "Diagnóstico inicial: 67 preguntas, tu score de 0 a 100 y tu radar por áreas." },
  { icon: UserCheck, text: "Sesión de arranque 1:1 conmigo, para construir tu plan de 90 días sobre tus números reales." },
  { icon: RefreshCw, text: "Revisión mensual 1:1 de tu progreso durante los 90 días." },
  { icon: Video, text: "12 salas de implementación grupal en directo, una por semana, con casos reales de otros participantes." },
  { icon: Sparkles, text: "Panel de especialistas invitados en cocina y marketing." },
  { icon: Users, text: "Grupo privado durante 90 días con propietarios que están resolviendo lo mismo que tú." },
  { icon: MessageCircle, text: "Soporte directo conmigo por WhatsApp durante los 90 días, de lunes a viernes, con respuesta en un máximo de 24 horas laborables." },
];

const herramientas = [
  "Cuadro de Mando Financiero: registro, PyG, KPIs, cash flow, simulador de precios, alertas.",
  "Escandallo y Calculadora de Precios: coste real por ración, mermas, sub-recetas.",
  "Ingeniería de Menú: matriz de rentabilidad, coeficiente de Omnes.",
  "Control de Inventario y Pedidos Sugeridos: stock, proveedores, punto de pedido.",
  "Kit de Gestión Operativa: producción, mermas, roturas, checklists.",
  "Horarios y Coste de Personal: horario semanal, coste por hora, alerta de personal.",
];

const valorPrograma = [
  { label: "Herramientas (5 de 6 se venden sueltas en mi web)", value: "345 €" },
  { label: "Sesiones 1:1 (arranque + revisiones, a 89€/45 min)", value: "356 €" },
  { label: "12 salas grupales en directo (a 89€ cada una)", value: "1.068 €" },
  { label: "Formación grabada (6 módulos y 30 vídeos)", value: "597 €" },
  { label: "Bonus Sistema de Bienvenida 360º", value: "197 €" },
  { label: "Panel de expertos en cocina y marketing", value: "597 €" },
  { label: "Grupo privado durante 90 días", value: "197 €" },
  { label: "Soporte directo conmigo por WhatsApp durante 90 días", value: "597 €" },
];

const testimonios = [
  {
    text: "Dejé de ser un esclavo de mi propio negocio y ahora el restaurante por fin trabaja para mí.",
    name: "Luis Marín",
    role: "Propietario, Casa Luis",
    metric: "Food cost del +40% al 28%",
  },
  {
    text: "Pasé de ser un barista estresado a ser un empresario, y mi negocio por fin es escalable.",
    name: "Santiago Fernández",
    role: "Fundador, Café Central",
    metric: "Local 2: de pérdidas a 12% de margen neto",
  },
  {
    text: "Pasé de heredar un negocio que me daba miedo a dirigir un bar que por fin es rentable y me hace ilusión abrir cada mañana.",
    name: "Laura Herrero",
    role: "Gerente, Bar & Tapas La Esquinita",
    metric: "Facturación diaria: de 500€ a 750-800€",
  },
];

const esParaTi = [
  "Tienes un negocio de hostelería en marcha, o estás pensando en abrir uno.",
  "Facturas, pero no ganas lo que deberías.",
  "Estás dispuesto a mirar tus números de frente y a aplicar.",
];

const noEsParaTi = [
  "Buscas solo motivación, no un sistema.",
  "Crees que la solución es hacer más marketing.",
  "No estás dispuesto a dejar de improvisar.",
];

const KLARNA_DISCLAIMER =
  "Pago aplazado en España: Klarna puede ofrecer 3 pagos sin intereses, sujeto a su aprobación. La autorización depende exclusivamente de Klarna y no de Adrián Pollán ni de Método Dirige.";

const faqs = [
  {
    question: "¿Cuánto me costaría esto si lo comprara por separado?",
    answer:
      "Sumando herramientas, sesiones 1:1, las 12 salas grupales, la formación grabada, el bonus, el panel de expertos, el grupo privado y el soporte por WhatsApp, el valor total del programa es de 3.954€. Tu precio hoy es 1.997€: ahorras 1.957€.",
  },
  {
    question: "¿Qué es el Sistema de Bienvenida 360º que incluye el programa?",
    answer:
      "Un sistema completo de incorporación de personal que, por sí solo, se vende como producto aparte. Incluye manual de bienvenida, manuales por rol, cuaderno de onboarding 7-30-90, checklists operativos, plantillas de evaluación y guía de implantación.",
  },
  {
    question: "¿Puedo pagar a plazos?",
    answer: KLARNA_DISCLAIMER,
  },
  {
    question: "¿Sirve si todavía no he abierto mi negocio?",
    answer:
      "Sí. El programa es para ti si tienes un negocio de hostelería en marcha o si estás pensando en abrir uno. Lo que importa es que factures (o vayas a facturar) pero no ganes lo que deberías, y que estés dispuesto a mirar tus números de frente y a aplicar.",
  },
  {
    question: "¿Qué pasa si aplico todo el sistema y no consigo resultados?",
    answer:
      "Si completas los 6 módulos, asistes a las sesiones de acompañamiento (arranque, revisiones mensuales y salas grupales) y aplicas el sistema en tu negocio, y aun así no consigues resultados, seguimos trabajando contigo, sin coste adicional, hasta que los consigas.",
  },
];

/** Hook genérico: detecta cuándo un elemento entra en el viewport, una sola vez. */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Envuelve una sección con un fade + slide-up al entrar en pantalla. */
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/** Dos manchas de luz color coral, decorativas, para las secciones oscuras. */
function GlowBg() {
  return (
    <>
      <div className="pointer-events-none absolute -top-24 left-[8%] w-[420px] h-[420px] rounded-full bg-[#E8623D]/20 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 right-[6%] w-[400px] h-[400px] rounded-full bg-[#E8623D]/14 blur-[90px]" />
    </>
  );
}

function Counter({
  target,
  animate,
  decimals = 0,
}: {
  target: number;
  animate: boolean;
  decimals?: number;
}) {
  const [n, setN] = useState(target);

  useEffect(() => {
    if (!animate) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- reinicia el contador al activar la animación desde IntersectionObserver; solo tiene sentido en cliente
    setN(0);
    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setN(Math.round(target * eased * 10 ** decimals) / 10 ** decimals);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate, target, decimals]);

  return (
    <span className="tabular-nums">
      {decimals > 0 ? n.toFixed(decimals).replace(".", ",") : n.toLocaleString("es-ES")}
    </span>
  );
}

function CasoRealVisual() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={ref}>
      <div className="flex items-end justify-center gap-10 lg:gap-16 h-[150px] max-w-md mx-auto mb-14">
        <div className="flex flex-col items-center gap-2.5 flex-1 h-full justify-end">
          <span className="font-display text-[#E8623D] text-xl font-extrabold">38%</span>
          <div
            className="w-full max-w-16 rounded-t-lg rounded-b-sm bg-[#F5F3F0]/25 transition-[height] duration-1000 ease-out"
            style={{ height: inView ? "100%" : "0%" }}
          />
          <span className="text-[#F5F3F0]/55 text-[11px] text-center leading-tight max-w-[110px]">
            Food cost de partida
          </span>
        </div>
        <div className="flex flex-col items-center gap-2.5 flex-1 h-full justify-end">
          <span className="font-display text-[#E8623D] text-xl font-extrabold">31,5%</span>
          <div
            className="w-full max-w-16 rounded-t-lg rounded-b-sm bg-[#E8623D] shadow-[0_10px_24px_-8px_rgba(232,98,61,0.5)] transition-[height] duration-1000 ease-out delay-150"
            style={{ height: inView ? "83%" : "0%" }}
          />
          <span className="text-[#F5F3F0]/55 text-[11px] text-center leading-tight max-w-[110px]">
            Food cost a las 8 semanas
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-md mx-auto text-center">
        <div>
          <div className="font-display text-[#E8623D] text-4xl lg:text-5xl font-bold leading-none mb-2">
            <Counter target={16993} animate={inView} />€
          </div>
          <p className="font-body text-[#F5F3F0]/55 text-xs lg:text-sm leading-snug">
            Menos en coste de materia prima, solo ese mes
          </p>
        </div>
        <div>
          <div className="font-display text-[#E8623D] text-4xl lg:text-5xl font-bold leading-none mb-2">
            +<Counter target={200000} animate={inView} />€
          </div>
          <p className="font-body text-[#F5F3F0]/55 text-xs lg:text-sm leading-snug">
            Proyección de mejora al año, y se mantiene
          </p>
        </div>
      </div>
    </div>
  );
}

function ScoreDial() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-white rounded-[20px] shadow-[0_1px_2px_rgba(21,34,56,0.04),0_20px_44px_-18px_rgba(21,34,56,0.18)] border border-[#152238]/[0.06] px-8 py-8 text-center max-w-[320px]">
        <svg width="180" height="110" viewBox="0 0 180 110" className="mx-auto">
          <path d="M15,100 A75,75 0 0,1 165,100" fill="none" stroke="rgba(21,34,56,0.09)" strokeWidth="14" strokeLinecap="round" />
          <path d="M15,100 A75,75 0 0,1 133,32" fill="none" stroke="#E8623D" strokeWidth="14" strokeLinecap="round" />
          <text x="90" y="86" textAnchor="middle" className="fill-[#152238]" style={{ fontSize: 44, fontWeight: 800 }}>
            67
          </text>
        </svg>
        <p className="font-display text-[#152238] text-[15px] font-semibold mt-1">Tu score de partida</p>
        <p className="text-[#6B6F7A] text-[13px] mt-2.5 leading-relaxed">
          Diagnóstico de 67 preguntas · radar por áreas de tu negocio, medido el día 1 y comparado al día 90.
        </p>
      </div>
      <div className="max-w-[320px] bg-white border-l-4 border-[#E8623D] rounded-lg px-6 py-5">
        <p className="font-body font-bold text-[#152238] text-sm mb-2">Lo que cuesta esto suelto</p>
        <p className="font-body text-[#6B6F7A] text-[13px] leading-relaxed">
          4 sesiones 1:1 (356€) + 12 salas grupales (1.068€), sin contar el panel de especialistas ni el grupo
          privado.
        </p>
      </div>
    </div>
  );
}

function TimelineItem({
  index,
  label,
  modulo,
  isOpen,
  onToggle,
}: {
  index: number;
  label: string;
  modulo: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative pl-[56px] lg:pl-[66px] pb-8 last:pb-0">
      <div className="absolute left-0 top-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#152238] text-[#E8623D] flex items-center justify-center font-bold text-[13px] lg:text-sm border-[3px] border-[#F5F3F0] shadow-[0_4px_10px_-2px_rgba(21,34,56,0.3)]">
        {label}
      </div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left bg-white border border-[#152238]/[0.08] rounded-2xl px-5 py-4 flex items-center justify-between gap-4 shadow-[0_1px_2px_rgba(21,34,56,0.04)] hover:shadow-[0_10px_24px_-12px_rgba(21,34,56,0.2)] hover:border-[#E8623D]/35 transition-all"
      >
        <span className="font-display text-[#152238] text-[15px] lg:text-base font-semibold leading-snug">
          {modulo.question}
        </span>
        <span
          className={`flex-shrink-0 text-[#E8623D] transition-transform duration-300 text-2xl leading-none font-light ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div className={`service-body ${isOpen ? "open" : ""}`}>
        <div>
          <p className="font-body text-[#6B6F7A] text-sm lg:text-base leading-relaxed pt-3 pb-1 px-1">
            {modulo.answer}
          </p>
        </div>
      </div>
      {index < modulos.length - 1 && (
        <div className="absolute left-5 lg:left-6 top-10 lg:top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#E8623D] to-[#E8623D]/15" />
      )}
    </div>
  );
}

function FAQItem({ faq, isOpen, onToggle }: { faq: { question: string; answer: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-[#152238]/[0.07] shadow-[0_1px_2px_rgba(21,34,56,0.04)] px-6">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left py-5 flex items-center justify-between gap-6 group"
      >
        <span className="font-display text-[#152238] text-[15px] lg:text-base font-semibold leading-snug">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 text-[#E8623D] transition-transform duration-300 text-2xl leading-none font-light ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div className={`service-body ${isOpen ? "open" : ""}`}>
        <div>
          <p className="font-body text-[#6B6F7A] text-sm lg:text-base leading-relaxed pb-5">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="text-[#E8623D]" fill="#E8623D" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function MetodoDirigePlazasCubiertasClient() {
  const [openModulo, setOpenModulo] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroSentinelRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const node = heroSentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => setShowStickyBar(!entries[0].isIntersecting),
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#F5F3F0]">
      {/* ─── Hero ───────────────────────────────────────────── */}
      <section className="relative bg-[#152238] overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <GlowBg />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-[#E8623D] text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Método Dirige
          </p>
          <h1 className="font-display text-[#F5F3F0] text-3xl lg:text-5xl font-light leading-[1.15] mb-6">
            El programa de 90 días para que tu negocio te dé dinero,
            <span className="text-[#E8623D]"> no solo trabajo.</span>
          </h1>
          <p className="font-body text-[#F5F3F0]/60 text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Diagnóstico, sistema y acompañamiento 1:1 durante 90 días para que dejes de operar a ciegas y
            empieces a dirigir tu negocio con datos reales.
          </p>

          <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-[#F5F3F0]/[0.12] rounded-2xl p-6 lg:p-8 mb-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] animate-slide-up">
            <p className="font-display text-[#E8623D] text-3xl lg:text-4xl font-bold mb-1">
              1.997€ <span className="text-[#F5F3F0]/50 text-base lg:text-lg font-normal">· precio del programa</span>
            </p>
            <p className="font-body text-[#F5F3F0]/45 text-xs">90 días de acompañamiento</p>
          </div>

          <TrackingLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            eventName="metodo_dirige_cta"
            eventLabel="hero"
            className="inline-block bg-[#E8623D] hover:bg-[#C94F2E] text-white font-body font-semibold text-base px-9 py-4 rounded-lg shadow-[0_18px_40px_-12px_rgba(232,98,61,0.55)] hover:shadow-[0_22px_46px_-10px_rgba(232,98,61,0.6)] hover:-translate-y-0.5 transition-all"
          >
            Reservar mi plaza →
          </TrackingLink>
          <p className="font-body text-[#F5F3F0]/35 text-[11px] leading-relaxed mt-4 max-w-sm mx-auto">
            {KLARNA_DISCLAIMER}
          </p>
        </div>
        <div ref={heroSentinelRef} className="absolute bottom-0 h-px w-full" />
      </section>

      {/* ─── Intro ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <Reveal className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-[#1B2233]/80 text-base lg:text-lg leading-relaxed">
            Esto no es un curso más. Es un sistema de acompañamiento de 90 días, con diagnóstico, plan a
            medida y revisión de tus números reales, para que al final del programa tu negocio funcione con
            criterio, no de memoria.
          </p>
        </Reveal>
      </section>

      {/* ─── Qué vas a tener instalado y funcionando ───────────── */}
      <section className="relative bg-[#152238] overflow-hidden py-20 lg:py-32">
        <GlowBg />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
            <div className="flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] rounded-full bg-[#E8623D]/35 blur-md" />
                <div className="relative font-display text-[#E8623D] text-[110px] lg:text-[150px] font-extrabold leading-none tracking-tight">
                  90
                  <span className="absolute -bottom-1.5 right-1.5 bg-[#152238] text-[#F5F3F0] text-[11px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full border border-[#F5F3F0]/10">
                    días
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-[#F5F3F0] text-2xl lg:text-4xl font-semibold leading-tight mb-3">
                Qué vas a tener instalado y funcionando
              </h2>
              <p className="font-body text-[#F5F3F0]/50 text-sm lg:text-base mb-8 max-w-xl">
                No son promesas. Son entregables concretos que se quedan funcionando en tu negocio.
              </p>
              <div className="grid gap-3.5">
                {resultados.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-9 h-9 rounded-[10px] bg-white/[0.08] text-[#E8623D] flex items-center justify-center">
                      <CheckCircle2 size={18} />
                    </span>
                    <p className="font-body text-[#F5F3F0]/85 text-sm lg:text-base leading-relaxed pt-1.5">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Cómo se organiza ───────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#EAE7E1]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-[#152238] text-2xl lg:text-4xl font-semibold leading-tight mb-3">
              Cómo se organiza
            </h2>
            <p className="font-body text-[#6B6F7A] text-sm lg:text-base">6 módulos, 30 vídeos, 90 días</p>
          </Reveal>
          <Reveal>
            {modulos.map((m, i) => (
              <TimelineItem
                key={i}
                index={i}
                label={i === 0 ? "0" : i === modulos.length - 1 ? "9-12" : String(i)}
                modulo={m}
                isOpen={openModulo === i}
                onToggle={() => setOpenModulo(openModulo === i ? null : i)}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── Acompañamiento ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-[#152238] text-2xl lg:text-4xl font-semibold leading-tight mb-8">
                No estás solo: seguimiento real en cada paso
              </h2>
              <div className="grid gap-3.5">
                {acompanamiento.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-9 h-9 rounded-[10px] bg-[#E8623D]/[0.12] text-[#E8623D] flex items-center justify-center">
                      <Icon size={16} />
                    </span>
                    <p className="font-body text-[#1B2233]/75 text-sm lg:text-base leading-relaxed pt-1.5">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:order-2">
              <ScoreDial />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Herramientas ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#EAE7E1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-11">
            <h2 className="font-display text-[#152238] text-2xl lg:text-4xl font-semibold leading-tight">
              Herramientas que se quedan funcionando en tu negocio
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              { icon: Wallet, text: herramientas[0] },
              { icon: Calculator, text: herramientas[1] },
              { icon: UtensilsCrossed, text: herramientas[2] },
              { icon: PackageSearch, text: herramientas[3] },
              { icon: ClipboardList, text: herramientas[4] },
              { icon: CalendarCheck, text: herramientas[5] },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#152238]/[0.07] shadow-[0_1px_2px_rgba(21,34,56,0.04)] hover:shadow-[0_16px_32px_-16px_rgba(21,34,56,0.2)] hover:border-[#E8623D]/30 hover:-translate-y-1 transition-all p-5 flex items-start gap-3.5"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-[10px] bg-[#E8623D]/[0.12] text-[#E8623D] flex items-center justify-center">
                  <Icon size={16} />
                </span>
                <p className="font-body text-[#1B2233]/75 text-sm lg:text-base leading-relaxed pt-1">{text}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="bg-white border-l-4 border-[#E8623D] rounded-lg px-6 py-5 mt-6">
            <p className="font-body font-bold text-[#152238] text-sm mb-2">Lo que cuesta esto suelto</p>
            <p className="font-body text-[#6B6F7A] text-sm leading-relaxed">
              Cinco de estas seis plantillas las vendo por separado en mi web, entre 49€ y 89€ cada una: 345€
              compradas sueltas, o 219€ en el pack Suite Completa. La sexta, Horarios y Coste de Personal, no
              está a la venta en ningún sitio. Solo la tienes aquí, dentro del programa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Bonus ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <Reveal className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-4 bg-[#152238] rounded-2xl p-6 lg:p-8 shadow-[0_24px_50px_-20px_rgba(21,34,56,0.4)]">
            <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.08] text-[#E8623D] flex items-center justify-center">
              <Gift size={22} />
            </span>
            <div>
              <p className="font-display text-[#F5F3F0] text-lg lg:text-xl font-semibold mb-2">
                Bonus incluido: Sistema de Bienvenida 360º
              </p>
              <p className="font-body text-[#F5F3F0]/70 text-sm lg:text-base leading-relaxed">
                Un sistema completo de incorporación de personal que, por sí solo, se vende como producto
                aparte. Lo recibes incluido: manual de bienvenida, manuales por rol, cuaderno de onboarding
                7-30-90, checklists operativos, plantillas de evaluación y guía de implantación.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Caso real ──────────────────────────────────────── */}
      <section className="relative bg-[#152238] overflow-hidden py-20 lg:py-28">
        <GlowBg />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-[#F5F3F0] text-2xl lg:text-4xl font-semibold leading-tight mb-4">
              Caso real
            </h2>
            <p className="font-body text-[#F5F3F0]/60 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
              Un restaurante con buena ocupación bajó su food cost del 38% al 31,5% en ocho semanas, sin
              reducir calidad ni afectar a las ventas. En julio de 2026, con una facturación en comida de
              261.430,70€, esos 6,5 puntos de mejora son 16.993€ menos en coste de materia prima solo ese mes,
              más de 200.000€ al año si se mantiene. Pasó de mirar la facturación a controlar el margen real
              por plato. Resultados así, medibles, son la base del programa.
            </p>
          </Reveal>
          <CasoRealVisual />
        </div>
      </section>

      {/* ─── Testimonios reales ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <p className="font-body text-[#E8623D] text-xs font-bold tracking-[0.18em] uppercase mb-4">
              En sus palabras
            </p>
            <h2 className="font-display text-[#152238] text-2xl lg:text-4xl font-semibold leading-tight">
              No es solo lo que digo yo
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonios.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#152238]/[0.06] shadow-[0_1px_2px_rgba(21,34,56,0.04),0_12px_28px_-14px_rgba(21,34,56,0.14)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(21,34,56,0.22)] transition-all p-6 lg:p-7 flex flex-col"
              >
                <Stars />
                <p className="font-display text-[#152238] text-[15px] italic leading-relaxed mb-5 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-[#152238]/[0.08]">
                  <p className="font-display text-[#152238] text-sm font-bold">{t.name}</p>
                  <p className="font-body text-[#6B6F7A] text-xs mb-1.5">{t.role}</p>
                  <p className="font-body text-[#E8623D] text-xs font-bold">{t.metric}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── Todo lo que incluye tu plaza ───────────────── */}
      <section className="py-20 lg:py-28 bg-[#EAE7E1]">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-[#152238] text-2xl lg:text-4xl font-semibold leading-tight mb-3">
              Todo lo que incluye tu plaza
            </h2>
            <p className="font-body text-[#6B6F7A] text-sm lg:text-base">Valorado en 3.954 €</p>
          </Reveal>
          <Reveal className="bg-white rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(21,34,56,0.04),0_24px_50px_-22px_rgba(21,34,56,0.2)] border border-[#152238]/[0.06]">
            {valorPrograma.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 px-6 lg:px-8 py-4 border-b border-[#152238]/[0.07]"
              >
                <p className="font-body text-[#6B6F7A] text-sm lg:text-base">{row.label}</p>
                <p className="font-display text-[#152238] font-semibold text-sm lg:text-base flex-shrink-0">
                  {row.value}
                </p>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 px-6 lg:px-8 py-4 border-b border-[#152238]/[0.07] bg-[#EAE7E1]">
              <p className="font-body text-[#152238] text-sm lg:text-base font-semibold">
                Valor total del programa
              </p>
              <p className="font-display text-[#152238] font-bold text-sm lg:text-base flex-shrink-0">
                3.954 €
              </p>
            </div>
            <div className="relative flex items-center justify-between gap-4 px-6 lg:px-8 py-5 bg-[#152238]">
              <p className="font-body text-[#F5F3F0] text-sm lg:text-base font-semibold">Tu precio</p>
              <p className="font-display text-[#E8623D] font-bold text-xl lg:text-2xl flex-shrink-0">1.997 €</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Para ti / no es para ti ───────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <Reveal className="max-w-3xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 lg:p-8 bg-white border-t-4 border-[#E8623D] shadow-[0_1px_2px_rgba(21,34,56,0.04),0_16px_34px_-18px_rgba(21,34,56,0.18)]">
            <p className="font-display text-[#152238] text-lg font-semibold mb-5">Es para ti si:</p>
            <div className="space-y-4">
              {esParaTi.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#E8623D] flex-shrink-0 mt-0.5" />
                  <p className="font-body text-[#1B2233]/75 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6 lg:p-8 bg-white border-t-4 border-[#6B6F7A] shadow-[0_1px_2px_rgba(21,34,56,0.04),0_16px_34px_-18px_rgba(21,34,56,0.18)]">
            <p className="font-display text-[#152238] text-lg font-semibold mb-5">No es para ti si:</p>
            <div className="space-y-4">
              {noEsParaTi.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle size={18} className="text-[#6B6F7A] flex-shrink-0 mt-0.5" />
                  <p className="font-body text-[#1B2233]/75 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Garantía ───────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#EAE7E1]">
        <Reveal className="max-w-2xl mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-4 border border-[#E8623D]/30 rounded-2xl p-6 lg:p-8 bg-white shadow-[0_1px_2px_rgba(21,34,56,0.04)]">
            <ShieldCheck size={24} className="text-[#E8623D] flex-shrink-0 mt-0.5" />
            <p className="font-body text-[#1B2233]/80 text-sm lg:text-base leading-relaxed italic">
              <strong className="not-italic text-[#152238]">La garantía:</strong> si completas los 6 módulos,
              asistes a las sesiones de acompañamiento (arranque, revisiones mensuales y salas grupales) y
              aplicas el sistema en tu negocio, y aun así no consigues resultados, seguimos trabajando contigo
              sin coste adicional hasta que los consigas. Aplicando todo el sistema, no funcionar es
              prácticamente imposible.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-8">
            <h2 className="font-display text-[#152238] text-2xl lg:text-3xl font-semibold leading-tight">
              Preguntas frecuentes
            </h2>
          </Reveal>
          <Reveal className="grid gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── CTA final ──────────────────────────────────────── */}
      <section className="relative bg-[#152238] overflow-hidden py-20 lg:py-28">
        <GlowBg />
        <Reveal className="relative max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-display text-[#F5F3F0] text-2xl lg:text-3xl font-light leading-snug mb-8">
            El precio del programa es 1.997€.
          </p>
          <TrackingLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            eventName="metodo_dirige_cta"
            eventLabel="final"
            className="inline-block bg-[#E8623D] hover:bg-[#C94F2E] text-white font-body font-semibold text-base px-9 py-4 rounded-lg mb-4 shadow-[0_18px_40px_-12px_rgba(232,98,61,0.55)] hover:shadow-[0_22px_46px_-10px_rgba(232,98,61,0.6)] hover:-translate-y-0.5 transition-all"
          >
            Reservar mi plaza →
          </TrackingLink>
          <p className="font-body text-[#F5F3F0]/40 text-xs mb-3">Te respondo yo mismo con el link de pago seguro</p>
          <p className="font-body text-[#F5F3F0]/35 text-[11px] leading-relaxed max-w-sm mx-auto">
            {KLARNA_DISCLAIMER}
          </p>
        </Reveal>
      </section>

      {/* ─── Barra CTA fija ─────────────────────────────────── */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 bg-[#152238] border-t border-[#F5F3F0]/10 transition-transform duration-300 lg:hidden ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="font-display text-[#F5F3F0] text-sm font-semibold leading-none mb-1">1.997€</p>
            <p className="font-body text-[#F5F3F0]/50 text-[11px] leading-none">Precio del programa</p>
          </div>
          <TrackingLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            eventName="metodo_dirige_cta"
            eventLabel="sticky_bar"
            className="flex-shrink-0 inline-block bg-[#E8623D] hover:bg-[#C94F2E] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Reservar plaza →
          </TrackingLink>
        </div>
      </div>
    </main>
  );
}
