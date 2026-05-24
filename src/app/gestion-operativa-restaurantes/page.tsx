import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import { ArrowRight, Users, ClipboardList, BarChart2, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Gestión Operativa de Restaurantes | Procesos y Rentabilidad | Adrián Pollán" },
  description:
    "Guía de gestión operativa para restaurantes: equipos con autonomía, procesos documentados, KPIs y control de proveedores. Basada en 20+ años de experiencia real.",
  alternates: { canonical: "https://adrianpollan.com/gestion-operativa-restaurantes" },
  openGraph: {
    title: "Gestión Operativa de Restaurantes | Adrián Pollán",
    description:
      "Guía completa sobre gestión operativa en restaurantes: equipos, procesos, turnos y dependencia del propietario. Basada en experiencia real.",
    url: "https://adrianpollan.com/gestion-operativa-restaurantes",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://adrianpollan.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gestión operativa de restaurantes",
      item: "https://adrianpollan.com/gestion-operativa-restaurantes",
    },
  ],
};

const pillars = [
  {
    Icon: Users,
    title: "Equipos con autonomía real",
    body: "Un equipo que funciona bien cuando estás y también cuando no estás. Se construye con roles claros, liderazgo intermedio desarrollado y una cultura que permite tomar decisiones sin pedir validación constante.",
  },
  {
    Icon: ClipboardList,
    title: "Procesos documentados",
    body: "Los procesos son las instrucciones que permiten hacer las cosas bien independientemente de quién las ejecute. Sin ellos, la calidad depende del criterio de cada persona en cada turno.",
  },
  {
    Icon: BarChart2,
    title: "KPIs que detectan problemas antes de que sean crisis",
    body: "Ventas por hora trabajada, ratio de cubiertos por empleado, porcentaje de absentismo. Medir bien el rendimiento operativo permite actuar sobre síntomas antes de que se conviertan en pérdidas.",
  },
  {
    Icon: Settings,
    title: "Gestión de proveedores como proceso, no como compra",
    body: "La relación con los proveedores es parte de la operativa, no una tarea puntual. Auditar precios, controlar recepciones y revisar condiciones trimestralmente es hábito que genera ahorro directo.",
  },
];

const processes = [
  {
    num: "01",
    title: "Apertura y cierre",
    body: "Los protocolos de apertura y cierre son la columna vertebral de la consistencia operativa. Cada acción documentada elimina un potencial problema de turno y libera energía del equipo para lo que importa: el servicio.",
  },
  {
    num: "02",
    title: "Mise en place y producción",
    body: "La producción diaria planificada sobre previsión de ventas reduce desperdicio, baja el food cost y evita la improvisación de última hora que genera errores y tensión en cocina.",
  },
  {
    num: "03",
    title: "Estándares de servicio",
    body: "Sin estándares escritos, cada empleado improvisa. Con estándares claros, el nivel de experiencia del cliente deja de depender de quién esté en sala y de cómo tenga el día.",
  },
  {
    num: "04",
    title: "Gestión de incidencias",
    body: "Un protocolo para resolver quejas, errores de servicio o imprevistos operativos permite al equipo actuar con autonomía. Sin él, cualquier problema sube al propietario, que se convierte en cuello de botella.",
  },
  {
    num: "05",
    title: "Comunicación interna",
    body: "Los flujos de información entre cocina y sala, entre turnos y entre equipo y dirección determinan la eficiencia operativa. Reuniones breves, briefings de servicio y canales definidos son más valiosos que cualquier herramienta.",
  },
  {
    num: "06",
    title: "Control de proveedores",
    body: "La recepción correcta de pedidos, la verificación de albaranes contra precios pactados y la revisión periódica de condiciones son parte de la operativa diaria, no tareas extraordinarias.",
  },
];

const kpis = [
  {
    metric: "€/h",
    label: "Ventas por hora trabajada",
    body: "Divide la facturación entre las horas totales trabajadas. Si baja de forma sostenida, tienes un problema de productividad o de sobredotación de turnos.",
  },
  {
    metric: "Cb/emp",
    label: "Cubiertos por empleado por turno",
    body: "Cuántos cubiertos gestiona cada empleado en un servicio. Permite comparar la eficiencia entre turnos e identificar si la dotación es adecuada al volumen real.",
  },
  {
    metric: "<30%",
    label: "Rotación de equipo anual",
    body: "El coste de incorporar y formar a un empleado supera los 1.500 euros. Una rotación alta es uno de los gastos más subestimados en hostelería, y casi siempre tiene causas operativas corregibles.",
  },
  {
    metric: "min",
    label: "Tiempo entre pedido y pase",
    body: "El tiempo desde que se comanda hasta que el plato sale a sala. Indicador directo de la eficiencia del proceso de producción y de la coordinación entre cocina y sala.",
  },
];

const clusterArticles = [
  {
    slug: "como-gestionar-un-equipo-de-hosteleria-que-funcione-sin-ti",
    title: "Cómo gestionar un equipo de hostelería que funcione sin ti",
    excerpt:
      "Procesos, liderazgo intermedio y cultura: cómo construir un equipo con autonomía real que no dependa de tu presencia en cada turno.",
    readTime: "9 min",
  },
  {
    slug: "como-gestionar-proveedores-restaurante-negociar-mejores-precios",
    title: "Cómo gestionar proveedores en un restaurante y negociar mejores precios",
    excerpt:
      "Auditoría de compras, palancas de negociación y protocolo de recepción: cómo recuperar entre 4 y 8 puntos de food cost sin cambiar la carta.",
    readTime: "9 min",
  },
];

export default function GestionOperativaRestaurantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-amber/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="font-body text-amber/60 text-xs tracking-wide mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber transition-colors">
              Inicio
            </Link>
            <span className="mx-2">›</span>
            <span className="text-amber">Gestión operativa de restaurantes</span>
          </nav>

          <div className="max-w-3xl">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-5">Guía completa</p>
            <h1 className="font-display text-cream text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-6">
              Gestión operativa de restaurantes:<br />
              <span className="font-semibold">cómo construir un negocio que funcione sin depender de ti</span>
            </h1>
            <p className="font-body text-cream/65 text-lg leading-relaxed max-w-2xl">
              La mayoría de los propietarios de restaurante no tienen un problema de ventas.
              Tienen un problema operativo: el negocio solo funciona bien cuando ellos están.
              Esto se resuelve con equipos, procesos y métricas. No con más horas.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-6">
              Qué es la gestión operativa de un restaurante
            </h2>
            <p className="font-body text-ink/65 text-lg leading-relaxed mb-5">
              La gestión operativa es el conjunto de decisiones, sistemas y hábitos que determinan
              cómo funciona el restaurante en el día a día: cómo se organiza el equipo, cómo se
              ejecuta el servicio, cómo se controlan los costes variables y cómo se relaciona
              el negocio con sus proveedores.
            </p>
            <p className="font-body text-ink/65 text-lg leading-relaxed mb-5">
              En la mayoría de los restaurantes que audito, la operativa no está diseñada: está
              improvisada. Los procesos existen en la cabeza del propietario, los estándares
              se transmiten de forma oral y los indicadores de rendimiento no se miden de forma
              sistemática. El resultado es un negocio que depende de la presencia constante del
              dueño para funcionar correctamente.
            </p>
            <p className="font-body text-ink/65 text-lg leading-relaxed">
              Diseñar la operativa no es burocracia ni complicación: es el trabajo que convierte
              un restaurante en un activo real en lugar de un empleo de jornada completa sin
              posibilidad de delegar.
            </p>
          </div>
        </div>
      </section>

      {/* ── CUATRO PILARES ────────────────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Las áreas que determinan la eficiencia
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Los cuatro pilares de la gestión operativa
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pillars.map(({ Icon, title, body }, i) => (
              <div key={i} className="bg-white border border-navy/10 rounded-xl p-8">
                <Icon size={28} className="text-amber mb-5" />
                <h3 className="font-display text-navy text-xl font-semibold mb-3">{title}</h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPOS ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
                El primer cambio
              </p>
              <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Equipos que funcionan cuando tú no estás
              </h2>
              <p className="font-body text-ink/65 text-base leading-relaxed mb-5">
                La dependencia del propietario casi nunca es culpa del equipo. Es el resultado
                de cómo se ha construido el negocio: sin procesos documentados, sin figuras
                intermedias con autoridad real y sin claridad sobre qué puede decidir cada
                persona por su cuenta.
              </p>
              <p className="font-body text-ink/65 text-base leading-relaxed mb-5">
                Construir un equipo con autonomía requiere definir qué decisiones puede tomar
                el equipo solo, cuáles requieren consulta y cuáles son exclusivamente del
                propietario. Sin esa claridad, cualquier intento de delegar genera confusión.
              </p>
              <p className="font-body text-ink/65 text-base leading-relaxed">
                El liderazgo intermedio —un jefe de sala, un segundo de cocina, un encargado
                de turno con autoridad real— es la pieza que falta en la mayoría de los
                restaurantes que acompaño. No el título: la autoridad y el criterio para
                usarla.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Define los niveles de decisión",
                  body: "Qué puede decidir el equipo solo, qué requiere consulta y qué es exclusivo del propietario. Sin este mapa, todo sube.",
                },
                {
                  title: "Desarrolla el liderazgo intermedio",
                  body: "Las figuras intermedias necesitan autoridad real, no solo el título. Eso implica darles margen para equivocarse y aprender sin quitarles la responsabilidad.",
                },
                {
                  title: "Formación continua, no solo inicial",
                  body: "Reuniones regulares, revisión de estándares, espacios para compartir aprendizajes. Un equipo que aprende juntos se convierte en equipo.",
                },
                {
                  title: "Cultura como sistema operativo",
                  body: "Los valores compartidos y la coherencia entre lo que se dice y lo que se hace determinan si el equipo toma buenas decisiones cuando nadie mira.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-navy/10 rounded-lg p-5">
                  <h3 className="font-display text-navy text-base font-semibold mb-2">{item.title}</h3>
                  <p className="font-body text-ink/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESOS ──────────────────────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              El sistema operativo
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Procesos que liberan en lugar de encadenar
            </h2>
            <p className="font-body text-ink/60 text-base leading-relaxed mt-5">
              Documentar procesos no significa crear manuales de cincuenta páginas que nadie
              lee. Significa tener descripciones claras, accesibles y actualizadas de cómo
              se hacen las cosas. Simples, concretas y aplicables.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {processes.map((p) => (
              <div key={p.num} className="bg-white border border-navy/10 rounded-xl p-7">
                <span className="font-display text-4xl font-light text-amber/25 block mb-4 leading-none">
                  {p.num}
                </span>
                <h3 className="font-display text-navy text-lg font-semibold mb-3">{p.title}</h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KPIs ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Lo que hay que medir
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              KPIs operativos que detectan problemas antes de que duelan
            </h2>
            <p className="font-body text-ink/60 text-base leading-relaxed mt-5">
              El food cost y el labour cost son indicadores de resultado. Los KPIs operativos
              son indicadores de proceso: muestran por qué están ocurriendo los problemas,
              no solo que están ocurriendo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((k, i) => (
              <div key={i} className="bg-cream-dark border border-navy/10 rounded-xl p-7">
                <p className="font-display text-navy text-3xl font-bold mb-1">{k.metric}</p>
                <p className="font-body text-amber text-xs font-semibold uppercase tracking-wide mb-4">
                  {k.label}
                </p>
                <p className="font-body text-ink/60 text-sm leading-relaxed">{k.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS DEL CLUSTER ─────────────────────────────────── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-xl mb-12">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
              Profundiza en cada área
            </p>
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight">
              Artículos relacionados
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {clusterArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group bg-white border border-navy/10 rounded-xl p-8 hover:border-amber/40 transition-colors"
              >
                <p className="font-body text-amber/70 text-xs uppercase tracking-wide mb-3">
                  {a.readTime} de lectura
                </p>
                <h3 className="font-display text-navy text-xl font-semibold leading-snug mb-3 group-hover:text-amber transition-colors">
                  {a.title}
                </h3>
                <p className="font-body text-ink/60 text-sm leading-relaxed mb-5">{a.excerpt}</p>
                <span className="inline-flex items-center gap-2 font-body text-sm text-amber">
                  Leer el artículo <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-navy text-4xl lg:text-5xl font-semibold leading-tight mb-5">
              ¿Cómo está la gestión operativa de tu restaurante?
            </h2>
            <p className="font-body text-ink/60 text-lg leading-relaxed mb-10">
              El diagnóstico gratuito analiza la estructura de tu equipo, tus procesos y tus
              indicadores operativos. En diez minutos sabes exactamente qué área atacar primero.
            </p>
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold tracking-wide"
              eventName="diagnostico_click"
              eventLabel="Gestión operativa restaurantes — CTA final"
            >
              Recibir Diagnóstico Gratuito <ArrowRight size={15} />
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
