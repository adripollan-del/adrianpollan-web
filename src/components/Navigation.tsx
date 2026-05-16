"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicios", label: "Servicios" },
  { href: "/libro", label: "Mi Libro" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/blog", label: "Blog" },
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
                src="/logo-transparente.png"
                alt="Adrián Pollán"
                width={180}
                height={44}
                className="h-9 lg:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
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
              <Link
                href="/hablemos"
                className="btn-amber ml-4 px-5 py-2.5 text-cream text-sm font-medium tracking-wide rounded-sm"
              >
                Reserva sesión
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-cream p-2 -mr-2"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
              className={`font-display text-3xl font-light tracking-wide transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } ${pathname === link.href ? "text-amber" : "text-cream hover:text-amber"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/hablemos"
            className={`btn-amber mt-4 px-8 py-3.5 text-cream text-base font-medium tracking-wide rounded-sm ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "360ms" : "0ms" }}
          >
            Reserva sesión gratuita
          </Link>
        </nav>
      </div>
    </>
  );
}
