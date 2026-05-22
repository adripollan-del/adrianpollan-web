"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicios", label: "Servicios" },
  { href: "/casos-reales", label: "Casos reales" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/blog", label: "Blog" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/hablemos", label: "Hablemos" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-navy/80 backdrop-blur-xl border-b border-amber/50 shadow-lg";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center opacity-100 hover:opacity-80 transition-opacity">
              <Image
                src="/logo-transparente.webp"
                alt="Adrián Pollán — Consultor de hostelería y restaurantes"
                width={180}
                height={44}
                quality={85}
                className="h-9 lg:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-amber"
                      : "text-cream/80 hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="https://diagnostico.adrianpollan.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("diagnostico_click", { event_category: "conversion", event_label: "Navegación desktop" })}
              className="hidden lg:inline-flex items-center px-5 py-2 btn-amber text-white text-sm font-semibold tracking-wide rounded-sm"
            >
              Diagnóstico gratuito
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-cream p-2 -mr-2"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 bg-navy transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav aria-label="Menú móvil" className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {/* Mobile CTA — primer elemento destacado */}
          <a
            href="https://diagnostico.adrianpollan.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("diagnostico_click", { event_category: "conversion", event_label: "Navegación móvil" })}
            style={{ transitionDelay: isOpen ? "0ms" : "0ms" }}
            className={`inline-flex items-center px-7 py-3 btn-amber text-white text-lg font-semibold tracking-wide rounded-sm transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Diagnóstico gratuito
          </a>

          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ transitionDelay: isOpen ? `${(i + 1) * 60}ms` : "0ms" }}
              className={`font-display text-3xl font-light tracking-wide transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } ${pathname === link.href ? "text-amber" : "text-cream hover:text-amber"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
