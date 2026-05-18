import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import TrackingLink from "@/components/TrackingLink";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://adrianpollan.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Adrián Pollán"],
      url: `https://adrianpollan.com/blog/${post.slug}`,
      images: [{ url: post.coverImage, width: 800, height: 450, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      "@id": "https://adrianpollan.com/#person",
      name: "Adrián Pollán",
      url: "https://adrianpollan.com",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://adrianpollan.com/#person",
      name: "Adrián Pollán",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://adrianpollan.com/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://adrianpollan.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://adrianpollan.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://adrianpollan.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative hero-navy pt-40 pb-0 lg:pt-48 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-cream/50 hover:text-amber transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Volver al blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-body text-xs text-amber tracking-widest uppercase border border-amber/40 px-3 py-1">
              {post.category}
            </span>
            <span className="text-cream/20">·</span>
            <span className="font-body text-xs text-cream/40">{post.readTime} de lectura</span>
            <span className="text-cream/20">·</span>
            <span className="font-body text-xs text-cream/40">
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-display text-cream text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Cover image al borde del hero */}
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={`${post.title} — Adrián Pollán`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CUERPO DEL ARTÍCULO — fondo blanco ──────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {/* Lead / extracto */}
          <p className="font-body text-ink/65 text-xl leading-relaxed border-l-3 border-amber pl-6 mb-14">
            {post.excerpt}
          </p>

          {/* Cuerpo con prose */}
          <div
            className="
              prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-navy prose-headings:font-semibold prose-headings:leading-tight
              prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5
              prose-p:font-body prose-p:text-ink/70 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-navy prose-strong:font-semibold
              prose-a:text-amber prose-a:no-underline hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Firma del autor */}
          <div className="mt-16 pt-10 border-t border-navy/10 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber/20 border border-amber/30 flex items-center justify-center flex-shrink-0">
              <span className="font-display text-amber font-bold text-lg">AP</span>
            </div>
            <div>
              <p className="font-display text-navy font-semibold">Adrián Pollán</p>
              <p className="font-body text-ink/50 text-sm">Consultor en hostelería y restauración</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS RELACIONADOS — fondo crema ─────────────────── */}
      {related.length > 0 && (
        <section className="bg-cream-dark py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <p className="font-body text-amber text-xs tracking-widest uppercase mb-8">
              Artículos relacionados
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-white border border-navy/10 rounded-xl p-6 hover:border-amber/50 transition-colors"
                >
                  <p className="font-body text-amber text-xs tracking-widest uppercase mb-3">{rel.category}</p>
                  <h3 className="font-display text-navy text-lg font-semibold leading-tight group-hover:text-amber transition-colors mb-2">
                    {rel.title}
                  </h3>
                  <p className="font-body text-ink/50 text-xs">{rel.readTime} de lectura</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA — fondo blanco ────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            ¿Quieres aplicar esto?
          </p>
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold mb-4">
            Analiza primero cómo está tu restaurante
          </h2>
          <p className="font-body text-ink/65 text-base mb-10 max-w-md mx-auto">
            El diagnóstico gratuito te dice exactamente qué áreas de tu negocio
            necesitan más atención. En 10 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 btn-amber text-navy text-sm font-semibold"
              eventName="diagnostico_click"
              eventLabel="Blog — CTA artículo"
            >
              Hacer el diagnóstico gratuito <ExternalLink size={14} />
            </TrackingLink>
            <TrackingLink
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-navy/60 hover:text-navy transition-colors"
              eventName="calendly_click"
              eventLabel="Blog — CTA artículo"
            >
              O reserva una sesión →
            </TrackingLink>
          </div>
        </div>
      </section>
    </>
  );
}
