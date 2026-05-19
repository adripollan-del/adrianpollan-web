import Link from "next/link";
import LinkedinIcon from "@/components/LinkedinIcon";
import NewsletterForm from "@/components/NewsletterForm";
import TrackingLink from "@/components/TrackingLink";

const footerLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/libro", label: "Mi Libro" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/blog", label: "Blog" },
  { href: "/hablemos", label: "Hablemos" },
  { href: "/herramientas", label: "Herramientas gratuitas" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1219] text-cream/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-amber text-2xl font-medium hover:text-amber/80 transition-colors">
              Adrián Pollán
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Consultoría especializada en hostelería y restauración.<br />
              Restaurantes más rentables, mejor gestionados.
            </p>
            <a
              href="https://www.linkedin.com/in/adrianpollanfernandez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Adrián Pollán"
              className="inline-flex items-center justify-center w-9 h-9 mt-5 rounded-lg bg-cream/10 text-cream/60 hover:bg-amber hover:text-navy transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-xs uppercase tracking-widest text-amber mb-5">Navegación</h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs uppercase tracking-widest text-amber mb-5">Empezar</h3>
            <p className="text-sm text-cream/60 mb-5">
              ¿Quieres saber si puedo ayudarte? Empieza con una sesión gratuita de 20 minutos.
            </p>
            {/* Primary CTA: diagnóstico — botón amber sólido */}
            <TrackingLink
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-amber text-cream text-sm font-medium tracking-wide hover:bg-amber-hover transition-colors"
              eventName="diagnostico_click"
              eventLabel="Footer"
            >
              Recibir Diagnóstico Gratuito
            </TrackingLink>
            {/* Secondary CTA: Calendly — texto simple */}
            <div className="mt-5">
              <TrackingLink
                href="https://calendly.com/adrianpollan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/50 hover:text-amber transition-colors underline underline-offset-4"
                eventName="calendly_click"
                eventLabel="Footer"
              >
                O reserva una sesión de 20 minutos →
              </TrackingLink>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-body text-xs uppercase tracking-widest text-amber mb-5">Una idea práctica cada semana</h3>
            <p className="text-sm text-cream/60 mb-5">
              Rentabilidad, costes y gestión para restaurantes. Sin spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Adrián Pollán. Todos los derechos reservados.
          </p>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-cream/40">
            <Link href="/aviso-legal" className="hover:text-cream/70 transition-colors">
              Aviso legal
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/politica-de-privacidad" className="hover:text-cream/70 transition-colors">
              Política de privacidad
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/politica-de-cookies" className="hover:text-cream/70 transition-colors">
              Política de cookies
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/terminos-y-condiciones" className="hover:text-cream/70 transition-colors">
              Términos y condiciones
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
