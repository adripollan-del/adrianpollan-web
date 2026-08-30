"use client";

import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Calculator,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Gauge,
  Gift,
  PackageSearch,
  ShieldCheck,
  Users,
  UtensilsCrossed,
  Video,
  Wallet,
  XCircle,
} from "lucide-react";
import TrackingLink from "@/components/TrackingLink";
import FAQAccordion from "@/components/FAQAccordion";

const STRIPE_URL = "https://buy.stripe.com/cNi4gz7MCaMSa8hbiR9fW01";

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
  "Diagnóstico inicial: 67 preguntas, tu score de 0 a 100 y tu radar por áreas.",
  "Sesión de arranque 1:1 conmigo, para construir tu plan de 90 días sobre tus números reales.",
  "Revisión mensual 1:1 de tu progreso durante los 90 días.",
  "12 salas de implementación grupal en directo, una por semana, con casos reales de otros participantes.",
  "Panel de especialistas invitados en cocina y marketing.",
  "Grupo privado durante 90 días con propietarios que están resolviendo lo mismo que tú.",
  "Soporte directo conmigo por WhatsApp durante los 90 días, de lunes a viernes, con respuesta en un máximo de 24 horas laborables.",
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
      "Sumando herramientas, sesiones 1:1, las 12 salas grupales, la formación grabada, el bonus, el panel de expertos, el grupo privado y el soporte por WhatsApp, el valor total del programa es de 3.954€. Tu precio de fundador hoy es 997€: ahorras 2.957€.",
  },
  {
    question: "¿Cuántas plazas hay a este precio?",
    answer:
      "El precio de fundador (997€, frente al precio real del programa de 1.997€) es solo para las primeras 10 plazas.",
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

function CasoRealStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
      <div>
        <div className="font-display text-amber text-4xl lg:text-5xl font-bold leading-none mb-2">
          <Counter target={38} animate={visible} />%
        </div>
        <p className="font-body text-cream/60 text-xs lg:text-sm leading-snug">Food cost de partida</p>
      </div>
      <div>
        <div className="font-display text-amber text-4xl lg:text-5xl font-bold leading-none mb-2">
          <Counter target={31.5} animate={visible} decimals={1} />%
        </div>
        <p className="font-body text-cream/60 text-xs lg:text-sm leading-snug">Food cost a las 8 semanas</p>
      </div>
      <div>
        <div className="font-display text-amber text-4xl lg:text-5xl font-bold leading-none mb-2">
          <Counter target={16993} animate={visible} />€
        </div>
        <p className="font-body text-cream/60 text-xs lg:text-sm leading-snug">Menos en coste de materia prima, solo ese mes</p>
      </div>
      <div>
        <div className="font-display text-amber text-4xl lg:text-5xl font-bold leading-none mb-2">
          +<Counter target={200000} animate={visible} />€
        </div>
        <p className="font-body text-cream/60 text-xs lg:text-sm leading-snug">Proyección de mejora al año, y se mantiene</p>
      </div>
    </div>
  );
}

function ModuloItem({
  modulo,
  isOpen,
  onToggle,
}: {
  modulo: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full text-left py-5 flex items-center justify-between gap-6 group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-grafito text-base lg:text-lg font-semibold leading-snug group-hover:text-amber transition-colors">
          {modulo.question}
        </span>
        <span
          className={`flex-shrink-0 text-amber transition-transform duration-300 text-2xl leading-none font-light ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div className={`service-body ${isOpen ? "open" : ""}`}>
        <div>
          <p className="font-body text-ink/65 text-sm lg:text-base leading-relaxed pb-5">{modulo.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function MetodoDirigeClient() {
  const [openModulo, setOpenModulo] = useState<number | null>(0);
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
    <main className="bg-cream">
      {/* ─── Hero ───────────────────────────────────────────── */}
      <section className="relative hero-grafito overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-amber text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Método Dirige
          </p>
          <h1 className="font-display text-cream text-3xl lg:text-5xl font-light leading-[1.15] mb-6">
            El programa de 90 días para que tu negocio te dé dinero,
            <span className="text-amber"> no solo trabajo.</span>
          </h1>
          <p className="font-body text-cream/60 text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Diagnóstico, sistema y acompañamiento 1:1 durante 90 días para que dejes de operar a ciegas y
            empieces a dirigir tu negocio con datos reales.
          </p>

          <div className="bg-cream/[0.06] border border-cream/10 rounded-2xl p-6 lg:p-8 mb-8 animate-slide-up">
            <p className="font-display text-amber text-3xl lg:text-4xl font-bold mb-1">
              997€ <span className="text-cream/50 text-base lg:text-lg font-normal">· precio de fundador</span>
            </p>
            <p className="font-body text-cream/70 text-sm mb-3">Solo las primeras 10 plazas</p>
            <p className="font-body text-cream/45 text-xs">
              Precio real del programa: 1.997€ · 90 días de acompañamiento
            </p>
          </div>

          <TrackingLink
            href={STRIPE_URL}
            eventName="metodo_dirige_cta"
            eventLabel="hero"
            className="btn-glow-amber btn-amber inline-block text-cream font-body font-semibold text-base px-9 py-4 rounded-lg"
          >
            Quiero mi plaza de fundador →
          </TrackingLink>
          <p className="font-body text-cream/35 text-[11px] leading-relaxed mt-4 max-w-sm mx-auto">
            {KLARNA_DISCLAIMER}
          </p>
        </div>
        <div ref={heroSentinelRef} className="absolute bottom-0 h-px w-full" />
      </section>

      {/* ─── Intro ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-ink/70 text-base lg:text-lg leading-relaxed">
            Esto no es un curso más de vídeos. Es un sistema de acompañamiento de 90 días, con diagnóstico,
            plan a medida y revisión de tus números reales, para que al final del programa tu restaurante
            funcione con criterio, no de memoria.
          </p>
        </div>
      </section>

      {/* ─── Qué vas a tener instalado al día 90 ───────────────── */}
      <section className="bg-grafito py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-cream text-2xl lg:text-4xl font-semibold leading-tight mb-3 text-center">
            Qué vas a tener instalado al día 90
          </h2>
          <p className="font-body text-cream/50 text-sm lg:text-base text-center mb-14 max-w-xl mx-auto">
            No son promesas. Son entregables concretos que se quedan funcionando en tu negocio.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
            {resultados.map((item, i) => (
              <div key={i} className="flex items-start gap-3.5">
                <CheckCircle2 size={20} className="text-amber flex-shrink-0 mt-0.5" />
                <p className="font-body text-cream/80 text-sm lg:text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Cómo se organiza ───────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-grafito text-2xl lg:text-4xl font-semibold leading-tight mb-3 text-center">
            Cómo se organiza
          </h2>
          <p className="font-body text-ink/50 text-sm lg:text-base text-center mb-4">
            6 módulos, 30 vídeos, 90 días
          </p>
          <div className="w-10 h-px bg-amber/40 mx-auto mb-10" />
          <div className="divide-y divide-grafito/10 border-t border-b border-grafito/10">
            {modulos.map((m, i) => (
              <ModuloItem
                key={i}
                modulo={m}
                isOpen={openModulo === i}
                onToggle={() => setOpenModulo(openModulo === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Acompañamiento ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <Video size={22} className="text-amber" />
            <h2 className="font-display text-grafito text-2xl lg:text-4xl font-semibold leading-tight">
              No estás solo: seguimiento real en cada paso
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 mt-12 mb-10">
            {acompanamiento.map((item, i) => (
              <div key={i} className="flex items-start gap-3.5">
                <Users size={18} className="text-amber flex-shrink-0 mt-1" />
                <p className="font-body text-ink/70 text-sm lg:text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="blog-cta-block">
            <p className="blog-cta-title">Lo que cuesta esto suelto</p>
            <p className="blog-cta-desc !mb-0">
              Una llamada individual conmigo de 45 minutos cuesta 89€. Tienes 4 sesiones 1:1 dentro del
              programa: 4 × 89€ = 356€. Además, las 12 salas grupales están valoradas en 89€ cada una: 12 ×
              89€ = 1.068€, sin contar el panel de especialistas ni el grupo privado.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Herramientas ───────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Gauge size={22} className="text-amber" />
            <h2 className="font-display text-grafito text-2xl lg:text-4xl font-semibold leading-tight text-center">
              Herramientas que se quedan funcionando en tu negocio
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 mb-10">
            {[
              { icon: Wallet, text: herramientas[0] },
              { icon: Calculator, text: herramientas[1] },
              { icon: UtensilsCrossed, text: herramientas[2] },
              { icon: PackageSearch, text: herramientas[3] },
              { icon: ClipboardList, text: herramientas[4] },
              { icon: CalendarCheck, text: herramientas[5] },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3.5">
                <Icon size={18} className="text-amber flex-shrink-0 mt-1" />
                <p className="font-body text-ink/70 text-sm lg:text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="blog-cta-block">
            <p className="blog-cta-title">Lo que cuesta esto suelto</p>
            <p className="blog-cta-desc !mb-0">
              Cinco de estas seis plantillas las vendo por separado en mi web, entre 49€ y 89€ cada una: 345€
              compradas sueltas, o 219€ en el pack Suite Completa. La sexta, Horarios y Coste de Personal, no
              está a la venta en ningún sitio. Solo la tienes aquí, dentro del programa.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Bonus ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-4 bg-grafito rounded-xl p-6 lg:p-8">
            <Gift size={26} className="text-amber flex-shrink-0" />
            <div>
              <p className="font-display text-cream text-lg lg:text-xl font-semibold mb-2">
                Bonus incluido: Sistema de Bienvenida 360º
              </p>
              <p className="font-body text-cream/70 text-sm lg:text-base leading-relaxed">
                Un sistema completo de incorporación de personal que, por sí solo, se vende como producto
                aparte. Lo recibes incluido: manual de bienvenida, manuales por rol, cuaderno de onboarding
                7-30-90, checklists operativos, plantillas de evaluación y guía de implantación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Caso real ──────────────────────────────────────── */}
      <section className="bg-grafito py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-cream text-2xl lg:text-4xl font-semibold leading-tight mb-4 text-center">
            Caso real
          </h2>
          <p className="font-body text-cream/60 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto text-center mb-14">
            Un restaurante con buena ocupación bajó su food cost del 38% al 31,5% en ocho semanas, sin reducir
            calidad ni afectar a las ventas. En julio de 2026, con una facturación en comida de 261.430,70€,
            esos 6,5 puntos de mejora son 16.993€ menos en coste de materia prima solo ese mes, más de
            200.000€ al año si se mantiene. Pasó de mirar la facturación a controlar el margen real por plato.
            Resultados así, medibles, son la base del programa.
          </p>
          <CasoRealStats />
        </div>
      </section>

      {/* ─── Todo lo que incluye tu plaza ───────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-grafito text-2xl lg:text-4xl font-semibold leading-tight mb-3 text-center">
            Todo lo que incluye tu plaza
          </h2>
          <p className="font-body text-ink/50 text-sm lg:text-base text-center mb-12">
            Valorado en 3.954 €
          </p>
          <div className="border border-grafito/10 rounded-2xl overflow-hidden">
            {valorPrograma.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 px-6 lg:px-8 py-4 border-b border-grafito/10"
              >
                <p className="font-body text-ink/70 text-sm lg:text-base">{row.label}</p>
                <p className="font-display text-grafito font-semibold text-sm lg:text-base flex-shrink-0">
                  {row.value}
                </p>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 px-6 lg:px-8 py-4 border-b border-grafito/10 bg-cream-dark/50">
              <p className="font-body text-ink/70 text-sm lg:text-base">Valor total del programa</p>
              <p className="font-display text-grafito font-bold text-sm lg:text-base flex-shrink-0">3.954 €</p>
            </div>
            <div className="flex items-center justify-between gap-4 px-6 lg:px-8 py-4 border-b border-grafito/10">
              <p className="font-body text-ink/70 text-sm lg:text-base">Precio real del programa</p>
              <p className="font-display text-grafito font-semibold text-sm lg:text-base flex-shrink-0">
                1.997 €
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 px-6 lg:px-8 py-5 bg-grafito">
              <p className="font-body text-cream text-sm lg:text-base font-semibold">
                Tu precio de fundador hoy
              </p>
              <p className="font-display text-amber font-bold text-xl lg:text-2xl flex-shrink-0">997 €</p>
            </div>
            <div className="flex items-center justify-between gap-4 px-6 lg:px-8 py-4 bg-amber/10">
              <p className="font-body text-grafito text-sm lg:text-base font-semibold">
                Ahorras con tu plaza de fundador
              </p>
              <p className="font-display text-amber font-bold text-sm lg:text-base flex-shrink-0">2.957 €</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Para ti / no es para ti ───────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 lg:p-8 border border-grafito/10">
            <p className="font-display text-grafito text-lg font-semibold mb-5">Es para ti si:</p>
            <div className="space-y-4">
              {esParaTi.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber flex-shrink-0 mt-0.5" />
                  <p className="font-body text-ink/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 lg:p-8 border border-grafito/10">
            <p className="font-display text-grafito text-lg font-semibold mb-5">No es para ti si:</p>
            <div className="space-y-4">
              {noEsParaTi.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle size={18} className="text-gris-calido flex-shrink-0 mt-0.5" />
                  <p className="font-body text-ink/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Garantía ───────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-4 border border-amber/30 rounded-xl p-6 lg:p-8 bg-cream-dark/30">
            <ShieldCheck size={24} className="text-amber flex-shrink-0 mt-0.5" />
            <p className="font-body text-ink/75 text-sm lg:text-base leading-relaxed italic">
              <strong className="not-italic text-grafito">La garantía:</strong> si completas los 6 módulos,
              asistes a las sesiones de acompañamiento (arranque, revisiones mensuales y salas grupales) y
              aplicas el sistema en tu negocio, y aun así no consigues resultados, seguimos trabajando contigo
              sin coste adicional hasta que los consigas. Aplicando todo el sistema, no funcionar es
              prácticamente imposible.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-grafito text-2xl lg:text-3xl font-semibold leading-tight mb-8 text-center">
            Preguntas frecuentes
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ─── CTA final ──────────────────────────────────────── */}
      <section className="hero-grafito py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen size={18} className="text-amber" />
            <p className="font-body text-amber text-xs lg:text-sm font-semibold tracking-[0.15em] uppercase">
              ¿Entramos?
            </p>
          </div>
          <p className="font-display text-cream text-2xl lg:text-3xl font-light leading-snug mb-8">
            Quedan pocas de las 10 plazas de fundador a 997€.
            <br />
            El precio real del programa es 1.997€.
          </p>
          <TrackingLink
            href={STRIPE_URL}
            eventName="metodo_dirige_cta"
            eventLabel="final"
            className="btn-glow-amber btn-amber inline-block text-cream font-body font-semibold text-base px-9 py-4 rounded-lg mb-4"
          >
            Quiero mi plaza de fundador →
          </TrackingLink>
          <p className="font-body text-cream/40 text-xs mb-3">Pago seguro con Stripe</p>
          <p className="font-body text-cream/35 text-[11px] leading-relaxed max-w-sm mx-auto">{KLARNA_DISCLAIMER}</p>
        </div>
      </section>

      {/* ─── Barra CTA fija ─────────────────────────────────── */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 bg-grafito border-t border-cream/10 transition-transform duration-300 lg:hidden ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="font-display text-cream text-sm font-semibold leading-none mb-1">997€</p>
            <p className="font-body text-cream/50 text-[11px] leading-none">Precio de fundador</p>
          </div>
          <TrackingLink
            href={STRIPE_URL}
            eventName="metodo_dirige_cta"
            eventLabel="sticky_bar"
            className="btn-amber flex-shrink-0 inline-block text-cream font-body font-semibold text-sm px-5 py-2.5 rounded-lg"
          >
            Quiero mi plaza →
          </TrackingLink>
        </div>
      </div>
    </main>
  );
}
