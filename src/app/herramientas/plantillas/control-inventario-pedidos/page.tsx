import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Zap, BookOpen, Mail,
  PackageX, Package, Clock,
  ClipboardList, DollarSign, Truck, Link2, FileSpreadsheet,
} from "lucide-react";
import TrackingLink from "@/components/TrackingLink";

export const metadata: Metadata = {
  title: { absolute: "Plantilla de Control de Inventario y Pedidos para Restaurantes | Adrián Pollán" },
  description:
    "Controla el stock en tiempo real y recibe pedidos sugeridos automáticos por proveedor. Elimina roturas de stock y compras innecesarias. 69 €.",
  alternates: { canonical: "https://adrianpollan.com/herramientas/plantillas/control-inventario-pedidos" },
  openGraph: {
    title: "Plantilla de Control de Inventario y Pedidos para Restaurantes | Adrián Pollán",
    description:
      "Controla el stock en tiempo real y recibe pedidos sugeridos automáticos por proveedor. Elimina roturas de stock y compras innecesarias. 69 €.",
    url: "https://adrianpollan.com/herramientas/plantillas/control-inventario-pedidos",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Plantilla de Control de Inventario y Pedidos Sugeridos para Restaurantes",
  description: "Controla el stock en tiempo real y recibe pedidos sugeridos automáticos por proveedor.",
  url: "https://adrianpollan.com/herramientas/plantillas/control-inventario-pedidos",
  brand: { "@type": "Brand", name: "Adrián Pollán" },
  offers: {
    "@type": "Offer",
    price: "69",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://adrianpollan.com/#person" },
  },
};

const symptoms = [
  { icon: <PackageX size={28} className="text-amber" />, text: "Tienes roturas de stock frecuentes que obligan a comprar urgente y caro" },
  { icon: <Package size={28} className="text-amber" />, text: "Las cámaras y el almacén están llenos de producto que nadie controla" },
  { icon: <Clock size={28} className="text-amber" />, text: "Cada pedido depende de que alguien recuerde qué falta o revise físicamente" },
];

const actions = [
  "Conocer el stock real de cada producto en todo momento sin contar físicamente cada día",
  "Recibir automáticamente una lista de pedido sugerida cuando un producto llega al punto de reposición",
  "Filtrar el pedido sugerido por proveedor para enviar cada pedido directamente",
  "Registrar recepciones de mercancía y mantener el inventario actualizado",
  "Ver el valor económico total de tu inventario en tiempo real",
  "Conectar el inventario con tu plantilla de escandallo para importar ingredientes",
];

const includes = [
  { icon: <Package size={24} className="text-amber" />, title: "Punto de pedido automático", description: "Calcula cuándo hay que pedir cada producto según tu consumo real y plazo de reposición" },
  { icon: <ClipboardList size={24} className="text-amber" />, title: "Pedido sugerido por proveedor", description: "Lista de pedido filtrable por proveedor lista para enviar directamente" },
  { icon: <DollarSign size={24} className="text-amber" />, title: "Valoración del inventario", description: "El valor económico de tu stock actualizado en tiempo real" },
  { icon: <Truck size={24} className="text-amber" />, title: "Registro de recepciones", description: "Anota cada entrega y el sistema actualiza el stock automáticamente" },
  { icon: <Link2 size={24} className="text-amber" />, title: "Compatible con escandallo", description: "Importa tu base de ingredientes desde la plantilla de escandallo sin volver a cargarlos" },
  { icon: <BookOpen size={24} className="text-amber" />, title: "Guía de primeros pasos", description: "Instrucciones paso a paso para empezar en menos de 30 minutos" },
];

const forWhom = [
  "Restaurantes con roturas de stock frecuentes o compras urgentes de última hora",
  "Negocios donde el almacén es una caja negra que nadie controla del todo",
  "Propietarios que quieren liberar dinero inmovilizado en stock innecesario",
  "Cualquier restaurante que haga pedidos por memoria o por revisión física diaria",
];

const garantias = [
  { icon: <Zap size={24} className="text-amber" />, title: "Acceso inmediato", body: "Recibes los archivos en tu email nada más completar la compra. Sin esperas ni procesos de activación." },
  { icon: <BookOpen size={24} className="text-amber" />, title: "Listas para usar desde hoy", body: "Incluyen datos de ejemplo del restaurante La Mesa y una guía de primeros pasos. No necesitas saber Excel para empezar." },
  { icon: <Mail size={24} className="text-amber" />, title: "Soporte directo incluido", body: "Si tienes dudas sobre cómo adaptar la plantilla a tu negocio, escríbeme directamente a adrian@adrianpollan.com" },
];

export default function ControlInventarioPedidosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80"
          alt="Almacén y gestión de inventario en restaurante — Plantilla de Control de Inventario"
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
            <span className="text-amber">Inventario y Pedidos</span>
          </nav>
          <div className="max-w-2xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">Plantilla · Excel &amp; Google Sheets</p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl font-light leading-[1.05] mb-5">
              Plantilla de Control<br /><span className="font-semibold">de Inventario y Pedidos Sugeridos</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed">
              Deja de comprar a ciegas. Controla el stock en tiempo real y recibe pedidos sugeridos automáticos según tu consumo real.
            </p>
          </div>
        </div>
      </section>

      {/* ── ASÍ SE VE LA PLANTILLA ──────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Así se ve la plantilla
            </h2>
            <p className="font-body text-ink/60 text-base">
              Datos de ejemplo incluidos para que puedas ver cómo funciona antes de meter los tuyos.
            </p>
          </div>
          <div className="max-w-[900px] mx-auto">
            <Image
              src="/images/plantillas/plantilla-control-inventario.png"
              alt="Vista previa de la plantilla de control de inventario con datos de ejemplo"
              width={1200}
              height={675}
              className="w-full rounded-xl shadow-lg border border-navy/8"
            />
            <p className="font-body text-ink/40 text-xs text-center mt-4">
              Captura real de la plantilla con datos de ejemplo del restaurante La Mesa
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
          <p className="font-display text-amber text-7xl font-bold mb-3">69 €</p>
          <p className="font-body text-cream/60 text-base mb-8">
            Una sola compra urgente de última hora suele costar más que esto. Con la plantilla, esas urgencias dejan de ocurrir.
          </p>
          <TrackingLink
            href="https://adrianpollan.lemonsqueezy.com/checkout/buy/7f6c6c39-17ab-4ebb-b1ba-e6b921d4f118"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
            eventName="plantilla_compra" eventLabel="Control de Inventario y Pedidos"
          >
            Comprar ahora — 69 € <ArrowRight size={15} />
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
            eventName="calendly_click" eventLabel="Control de Inventario — CTA final"
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
