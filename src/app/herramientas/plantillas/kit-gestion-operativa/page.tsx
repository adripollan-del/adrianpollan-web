import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Zap, BookOpen, Mail,
  Users, MessageSquare, AlertTriangle,
  CheckSquare, Thermometer, Trash2, ShoppingCart, FileSpreadsheet,
} from "lucide-react";
import TrackingLink from "@/components/TrackingLink";
import TeReconoces from "../TeReconoces";

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

const bundles = [
  {
    title: "Pack Operación Pro",
    includes: ["Kit de Gestión Operativa", "Control de Inventario"],
    savings: "Ahorras 19 €",
    price: "139 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/a8470b16-0c8f-458b-af26-9280a6a11808",
  },
  {
    title: "Suite Completa",
    includes: ["Las 5 plantillas"],
    savings: "Ahorras 126 €",
    price: "219 €",
    href: "https://adrianpollan.lemonsqueezy.com/checkout/buy/8ba24dda-671a-45f2-a3e2-5276f83c104a",
  },
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

      {/* ── ASÍ SE VE LA PLANTILLA ──────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Así se ve la plantilla
            </h2>
            <p className="font-body text-ink/60 text-base">
              Datos de ejemplo incluidos para que puedas ver cómo funciona antes de meter los tuyos.
            </p>
          </div>
          <div className="max-w-[900px] mx-auto">
            <Image
              src="/images/plantillas/plantilla-kit-gestion-operativa.png"
              alt="Vista previa del kit de gestión operativa con datos de ejemplo"
              width={1200}
              height={675}
              className="w-full rounded-xl shadow-lg border border-navy/8"
            />
            <p className="font-body text-ink/40 text-xs text-center mt-4">
              Captura real de la plantilla con datos de ejemplo
            </p>
          </div>
        </div>
      </section>

      {/* ── ¿QUÉ INCLUYE? ─────────────────────────────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
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

      {/* ── ¿QUÉ PUEDES HACER? ────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
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

      {/* ── PRIMER CTA ───────────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-cream/80 text-lg mb-8">
            Accede ahora por <span className="font-semibold text-amber">89 €</span> y empieza a usarla hoy.
          </p>
          <TrackingLink
            href="https://adrianpollan.lemonsqueezy.com/checkout/buy/85495638-c754-4fdb-a7f0-d98a849e50a8"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="plantilla_compra" eventLabel="Kit de Gestión Operativa"
          >
            Comprar ahora <ArrowRight size={15} />
          </TrackingLink>
          <p className="font-body text-cream/40 text-xs mt-5">
            Acceso inmediato · Excel y Google Sheets · Soporte incluido
          </p>
        </div>
      </section>

      {/* ── ¿PARA QUIÉN ES? ───────────────────────────────────────── */}
      <section className="bg-cream-dark py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
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

      {/* ── LO QUE CAMBIA CUANDO LO USAS ────────────────────────── */}
      <TeReconoces symptoms={symptoms} title="Lo que cambia cuando lo usas" />

      {/* ── GARANTÍAS ────────────────────────────────────────────── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
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

      {/* ── TAMBIÉN EN PACK ──────────────────────────────────────── */}
      <section className="bg-[#f5f0e8] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-3">
            También disponible en pack
          </h2>
          <p className="font-body text-ink/60 text-base mb-10">
            Combina esta plantilla con otras y ahorra.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bundles.map((b) => (
              <div key={b.title} className="bg-white border border-navy/8 rounded-xl p-7 flex flex-col transition-shadow hover:shadow-[0_8px_24px_-6px_rgba(186,117,23,0.2)] hover:border-amber/30">
                <h3 className="font-display text-navy text-lg font-semibold mb-4">{b.title}</h3>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {b.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-amber text-xs mt-0.5 flex-shrink-0">✓</span>
                      <span className="font-body text-ink/65 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-green-600 text-sm font-medium mb-1">{b.savings}</p>
                <p className="font-display text-amber text-2xl font-bold mb-5">{b.price}</p>
                <TrackingLink
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 border border-amber text-amber text-sm font-semibold tracking-wide hover:bg-amber/5 transition-colors self-start"
                  eventName="bundle_compra"
                  eventLabel={b.title}
                >
                  Ver pack →
                </TrackingLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[700px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-8">
            ¿Listo para estandarizar tu operación?
          </h2>
          <TrackingLink
            href="https://adrianpollan.lemonsqueezy.com/checkout/buy/85495638-c754-4fdb-a7f0-d98a849e50a8"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="plantilla_compra" eventLabel="Kit Operativo — CTA final"
          >
            Comprar ahora <ArrowRight size={15} />
          </TrackingLink>
          <div className="border-t border-navy/10 my-10" />
          <p className="font-body text-ink/60 text-base mb-6">
            ¿No sabes si es la plantilla que necesitas?
          </p>
          <TrackingLink
            href="https://calendly.com/adrianpollan"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-amber text-amber text-sm font-semibold tracking-wide hover:bg-amber/5 transition-colors"
            eventName="calendly_click" eventLabel="Kit Operativo — CTA final"
          >
            Agendar sesión gratuita de 20 minutos
          </TrackingLink>
          <p className="font-body text-ink/40 text-xs mt-4">
            Sin coste · Sin compromiso
          </p>
        </div>
      </section>
    </>
  );
}
