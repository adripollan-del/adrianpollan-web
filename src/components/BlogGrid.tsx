import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  Rentabilidad: "bg-amber/10 text-amber border-amber/30",
  Equipos: "bg-navy/8 text-navy border-navy/20",
  Aperturas: "bg-amber/10 text-amber border-amber/30",
  "El Método": "bg-navy/8 text-navy border-navy/20",
};

export default function BlogGrid() {
  return (
    <section className="bg-cream-dark py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {blogPosts.map((post, i) => (
            <article
              key={post.slug}
              className="group flex flex-col bg-white/80 backdrop-blur-sm shadow-md border border-navy/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_-8px_rgba(186,117,23,0.4)] hover:border-amber/40 overflow-hidden"
            >
              {/* Imagen de portada */}
              <Link
                href={`/blog/${post.slug}`}
                className="block relative aspect-[16/9] overflow-hidden bg-cream-dark"
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={i < 2}
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`font-body text-xs font-medium tracking-widest uppercase px-3 py-1.5 border backdrop-blur-sm ${categoryColors[post.category]}`}
                  >
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Contenido */}
              <div className="flex flex-col flex-1 p-8 lg:p-9">
                <div className="flex items-center gap-3 mb-4 text-xs font-body text-ink/40">
                  <span>{post.readTime} de lectura</span>
                  <span>·</span>
                  <span>
                    {new Date(post.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="font-display text-navy text-2xl lg:text-[1.6rem] font-semibold leading-tight mb-4 group-hover:text-amber transition-colors flex-1">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="font-body text-ink/55 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-navy border-b border-navy/20 pb-0.5 self-start group-hover:border-amber group-hover:text-amber transition-colors"
                >
                  Leer artículo <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
