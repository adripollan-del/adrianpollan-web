import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Zap, BookOpen, Mail,
  Users, MessageSquare, AlertTriangle,
  CheckSquare, Thermometer, Trash2, ShoppingCart, FileSpreadsheet,
} from "lucide-react";
import TrackingLink from "@/components/TrackingLink";

export const metadata: Metadata = {
  title: { absolute: "Kit de Gestión Operativa para Restaurantes | Adrián Pollán" },
  description:
    "Checklists y plantillas para cocina, barra y sala: aperturas, cierres, producción, mermas y temperaturas. El mismo estándar en todos los turnos. 89 €.",
  alternates: { canonical: "https://adrianpollan.com/herramientas/plantillas/kit-gestion-operativa" },
  openGraph: {
    title: "Kit de Gestión Operativa para Restaurantes | Adrián Pollán",
    description:
      "Checklists y plantillas para cocina, barra y sala: aperturas, cierres, producción, mermas y temperaturas. El mismo estándar en todos los turnos. 89 €.",
    url: "https://adrianpollan.com/herramientas/plantillas/kit-gestion-operativa",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Kit de Gestión Operativa para Restaurantes",
  description: "Checklists y plantillas para cocina, barra y sala: aperturas, cierres, producción, mermas y temperaturas.",
  url: "https://adrianpollan.com/herramientas/plantillas/kit-gestion-operativa",
  brand: { "@type": "Brand", name: "Adrián Pollán" },
  offers: {
    "@type": "Offer",
    price: "89",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://adrianpollan.com/#person" },
  },
};

const symptoms = [
  { icon: <Users size={28} className="text-amber" />, text: "Cada turno abre, produce y cierra a su manera dependiendo de quién esté" },
  { icon: <MessageSquare size={28} className="text-amber" />, text: "Las instrucciones operativas viajan por WhatsApp o de boca en boca" },
  { icon: <AlertTriangle size={28} className="text-amber" />, text: "Cuando fallas tú o falla el encargado, el estándar baja o desaparece" },
];

const actions = [
  "Estandarizar aperturas, cierres y producción con checklists que cualquier turno puede seguir",
  "Controlar temperaturas de cámaras, abatidor y zonas críticas con registro diario",
  "Registrar mermas por turno y detectar patrones de desperdicio por área",
  "Documentar pedidos y recepciones de mercancía con trazabilidad completa",
  "Tener un registro de limpieza por área que cumple con los requisitos básicos de APPCC",
  "Delegar operaciones con confianza porque el proceso está escrito, no en la cabeza de nadie",
];

const includes = [
  { icon: <CheckSquare size={24} className="text-amber" />, title: "Checklists de apertura y cierre", description: "Por área: cocina, barra y sala. Listos para imprimir o usar en pantalla" },
  { icon: <Thermometer size={24} className="text-amber" />, title: "Control de temperaturas", description: "Registro diario de cámaras, congelador, abatidor y zonas críticas" },
  { icon: <Trash2 size={24} className="text-amber" />, title: "Registro de mermas", description: "Por turno y área, con categorías de causa para detectar patrones" },
  { icon: <ShoppingCart size={24} className="text-amber" />, title: "Control de pedidos", description: "Registro de pedidos realizados y recepciones con fecha y responsable" },
  { icon: <FileSpreadsheet size={24} className="text-amber" />, title: "Datos de ejemplo incluidos", description: "El restaurante La Mesa ya relleno para que veas cómo funciona en operación real" },
  { icon: <BookOpen size={24} className="text-amber" />, title: "Guía de primeros pasos", description: "Instrucciones paso a paso para implementarlo en tu restaurante desde el primer turno" },
];

const forWhom = [
  "Restaurantes donde el estándar operativo depende de quién esté ese día",
  "Propietarios que quieren delegar pero no tienen los procesos documentados",
  "Negocios que han tenido problemas de APPCC o quieren prevenirlos",
  "Cualquier restaurante que gestione turnos, mermas y producción con notas o memoria",
];

const garantias = [
  { icon: <Zap size={24} className="text-amber" />, title: "Acceso inmediato", body: "Recibes los archivos en tu email nada más completar la compra. Sin esperas ni procesos de activación." },
  { icon: <BookOpen size={24} className="text-amber" />, title: "Listas para usar desde hoy", body: "Incluyen datos de ejemplo del restaurante La Mesa y una guía de primeros pasos. No necesitas saber Excel para empezar." },
  { icon: <Mail size={24} className="text-amber" />, title: "Soporte directo incluido", body: "Si tienes dudas sobre cómo adaptar la plantilla a tu negocio, escríbeme directamente a adrian@adrianpollan.com" },
];

export default function KitGestionOperativaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
          alt="Equipo de cocina y operaciones de restaurante — Kit de Gestión Operativa"
          fill priority sizes="100vw" className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">Inicio</Link>
            <span className="mx-2">›</span>
            <Link href="/herramientas" className="hover:text-amber transition-colors">Herramientas</Link>
            <span className="mx-2">›</span>
            <Link href="/herramientas/plantillas" className="hover:text-amber transition-colors">Plantillas</Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Kit Operativo</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">Plantilla · Excel &amp; Google Sheets</p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-5">
              Kit de Gestión<br /><span className="font-semibold">Operativa para Restaurantes</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Deja de depender de la memoria de tu equipo. Estandariza aperturas, cierres, producción y limpieza con checklists listos para usar.
            </p>
          </div>
        </div>
      </section>

      {/* ── ¿TE SUENA ESTO? ───────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-12 text-center">
            ¿Te suena esto?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {symptoms.map((s, i) => (
              <div key={i} className="bg-[#f5f0e8] border-l-4 border-amber rounded-r-xl p-7">
                <div className="mb-4">{s.icon}</div>
                <p className="font-body text-ink/80 text-base leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿QUÉ PUEDES HACER? ────────────────────────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-12">
            ¿Qué puedes hacer con esta plantilla?
          </h2>
          <ol className="space-y-5">
            {actions.map((a, i) => (
              <li key={i} className="flex items-start gap-5">
                <span className="font-display text-amber text-2xl font-bold leading-none flex-shrink-0 w-8 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-ink/75 text-base leading-relaxed">{a}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── ¿QUÉ INCLUYE? ─────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-12">
            ¿Qué incluye?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="border border-navy/8 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber/10 border border-amber/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-navy text-base font-semibold mb-1">{item.title}</h3>
                    <p className="font-body text-ink/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIO ───────────────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-display text-amber text-7xl font-bold mb-3">89 €</p>
          <p className="font-body text-cream/60 text-base mb-8">
            El coste de un turno mal ejecutado, con un incidente de higiene o producto tirado, supera fácilmente esto. Una sola vez.
          </p>
          <TrackingLink
            href="https://adrianpollan.lemonsqueezy.com/checkout/buy/85495638-c754-4fdb-a7f0-d98a849e50a8"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="plantilla_compra" eventLabel="Kit de Gestión Operativa"
          >
            Comprar ahora — 89 € <ArrowRight size={15} />
          </TrackingLink>
          <p className="font-body text-cream/40 text-xs mt-5">
            Acceso inmediato · Excel y Google Sheets · Soporte incluido
          </p>
        </div>
      </section>

      {/* ── ¿PARA QUIÉN ES? ───────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-10">
            ¿Para quién es esta plantilla?
          </h2>
          <ul className="space-y-5">
            {forWhom.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-amber mt-0.5 flex-shrink-0 text-lg font-bold">✓</span>
                <p className="font-body text-ink/75 text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── GARANTÍAS ────────────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-cream text-2xl lg:text-3xl font-semibold leading-tight mb-10 lg:mb-12">
            Diseñadas para restaurantes reales, no para demos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {garantias.map((g) => (
              <div key={g.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber/20 border border-amber/30 rounded-lg flex items-center justify-center mt-0.5">
                  {g.icon}
                </div>
                <div>
                  <h3 className="font-display text-cream text-base font-semibold mb-1.5">{g.title}</h3>
                  <p className="font-body text-cream/60 text-sm leading-relaxed">{g.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            ¿No sabes si esta plantilla es la que necesitas?
          </h2>
          <p className="font-body text-ink/60 text-base leading-relaxed mb-8 max-w-md mx-auto">
            En 20 minutos puedo ayudarte a identificar cuál es el problema más urgente de tu restaurante. Sin coste y sin compromiso.
          </p>
          <TrackingLink
            href="https://calendly.com/adrianpollan" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="calendly_click" eventLabel="Kit Operativo — CTA final"
          >
            Agendar sesión gratuita <ArrowRight size={15} />
          </TrackingLink>
          <div className="mt-6">
            <Link href="/herramientas/plantillas" className="font-body text-sm text-ink/50 hover:text-amber transition-colors">
              ← Ver todas las plantillas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
