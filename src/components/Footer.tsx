import Link from "next/link";

const footerLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/libro", label: "Mi Libro" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/blog", label: "Blog" },
  { href: "/hablemos", label: "Hablemos" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-cream text-2xl font-medium hover:text-amber transition-colors">
              adrián pollán
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Consultoría especializada en hostelería y restauración.<br />
              Restaurantes más rentables, mejor gestionados.
            </p>
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
            <Link
              href="/hablemos"
              className="inline-block px-6 py-3 border border-amber/60 text-amber text-sm tracking-wide hover:bg-amber hover:text-cream transition-colors"
            >
              Reserva sesión gratuita
            </Link>
            <div className="mt-8">
              <a
                href="https://diagnostico.adrianpollan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/50 hover:text-amber transition-colors underline underline-offset-4"
              >
                Herramienta de diagnóstico IA →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Adrián Pollán. Todos los derechos reservados.
          </p>
          <p className="text-xs text-cream/40">
            adrianpollan.com
          </p>
        </div>
      </div>
    </footer>
  );
}
