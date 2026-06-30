"use client";

import { useState, useEffect } from "react";
import { Lock, FolderOpen, ExternalLink, LogOut } from "lucide-react";

const PASSWORD = "herramientas29";
const LS_KEY = "herramientas_libro_v1";

const chapters = [
  { num: 1,  title: "El Método ADRIÁN",                  href: "https://drive.google.com/drive/folders/1g_3fampR_pRUozUg6dDWnNegFf7sdYy6?usp=drive_link" },
  { num: 2,  title: "El mapa del negocio",                href: "https://drive.google.com/drive/folders/172yycLl3baa5mxPdgrW1bwbqQ1KcbTlS?usp=drive_link" },
  { num: 3,  title: "El restaurante que evoluciona",      href: "https://drive.google.com/drive/folders/12halagTHF6uWPDic9uPKgF9m7Tc0KL6A?usp=drive_link" },
  { num: 4,  title: "El ADN del restaurante",             href: "https://drive.google.com/drive/folders/1EsSSSa-8rotw6PaDNw4MOnetF5cBnnSj?usp=drive_link" },
  { num: 5,  title: "El arte del diagnóstico",            href: "https://drive.google.com/drive/folders/1aHiBnHy6e7nqJ4j4msctF-e466SIyR0v?usp=drive_link" },
  { num: 6,  title: "Síntomas, causas y soluciones",      href: "https://drive.google.com/drive/folders/1L1FqSLYQ3htPualFfy6RydVHY5eTXJ2-?usp=drive_link" },
  { num: 7,  title: "La caja de herramientas",            href: "https://drive.google.com/drive/folders/15qm6A-NPksl3VQuvCVhNLjiNelb9hx9J?usp=drive_link" },
  { num: 8,  title: "El líder que el sector necesita",    href: "https://drive.google.com/drive/folders/1FloKAUgZ6sj6Y-9GCoQVDpvDQXVlInc-?usp=drive_link" },
  { num: 9,  title: "La experiencia que fideliza",        href: "https://drive.google.com/drive/folders/1rKnBAsu854Hhx1x_jEZ7TNN6qUvbzP1F?usp=drive_link" },
  { num: 10, title: "Acompañar al que empieza",           href: "https://drive.google.com/drive/folders/1aehfDVrRdKOPpyyPWFynOkPiv6j9qjwU?usp=drive_link" },
  { num: 11, title: "Tu práctica consultora",             href: "https://drive.google.com/drive/folders/1q8q9ElFwZpanvsTURFJg7Z-jZzzMvO-n?usp=drive_link" },
  { num: 12, title: "Tu marca y tu autoridad",            href: "https://drive.google.com/drive/folders/169wBG_4F1GK6RPnj0oUx9ERB5bHWVSdO?usp=drive_link" },
];

export default function HerramientasLibroClient() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(LS_KEY) === "1") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hidrata estado de sesión desde localStorage al montar; useState(false) en servidor evita hydration mismatch
      setUnlocked(true);
    }
    setMounted(true);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim() === PASSWORD) {
      localStorage.setItem(LS_KEY, "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  }

  function handleLogout() {
    localStorage.removeItem(LS_KEY);
    setUnlocked(false);
    setInput("");
  }

  if (!mounted) {
    return <div className="min-h-[60vh] bg-grafito" />;
  }

  if (!unlocked) {
    return (
      <div className="min-h-[calc(100vh-5rem)] bg-[#23272B] flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="text-center mb-10">
            <p className="font-display text-amber text-2xl font-medium mb-1">Adrián Pollán</p>
            <p className="font-body text-cream/40 text-xs tracking-widest uppercase">Consultoría en hostelería</p>
          </div>

          {/* Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center justify-center w-10 h-10 bg-amber/15 rounded-xl mb-6 mx-auto">
              <Lock size={18} className="text-amber" />
            </div>
            <h1 className="font-display text-cream text-xl font-semibold text-center mb-2 leading-snug">
              Herramientas del Método ADRIÁN
            </h1>
            <p className="font-body text-cream/50 text-sm text-center leading-relaxed mb-8">
              Introduce la contraseña que encontrarás en el libro para acceder a las 29 herramientas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={input}
                  onChange={(e) => { setInput(e.target.value); setError(false); }}
                  placeholder="Contraseña"
                  autoComplete="current-password"
                  className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 font-body text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-amber/60 transition-colors"
                />
                {error && (
                  <p className="font-body text-red-400 text-xs mt-2">
                    Contraseña incorrecta. Compruébala en el libro.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full btn-amber py-3 font-body font-semibold text-sm text-grafito tracking-wide rounded-lg transition-colors"
              >
                Acceder
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* ── HEADER ── */}
      <section className="bg-grafito py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">Contenido exclusivo</p>
          <h1 className="font-display text-cream text-3xl lg:text-5xl font-semibold leading-tight mb-4">
            Las 29 herramientas del Método ADRIÁN
          </h1>
          <p className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl mb-2">
            Descarga las herramientas de cada capítulo directamente desde Google Drive.
          </p>
          <p className="font-body text-cream/40 text-sm leading-relaxed max-w-2xl">
            Estas herramientas están diseñadas para usarse junto al libro. Cada una corresponde a un capítulo específico y puede aplicarse directamente en tu negocio.
          </p>
        </div>
      </section>

      {/* ── CHAPTERS GRID ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grafito/10 border border-grafito/10 rounded-xl overflow-hidden">
            {chapters.map((ch, i) => (
              <div
                key={ch.num}
                className={`bg-white p-6 lg:p-8 flex flex-col gap-4 ${
                  i < chapters.length - 2 ? "border-b border-grafito/8" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-amber font-bold text-3xl leading-none flex-shrink-0 w-10">
                    {String(ch.num).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="font-body text-ink/40 text-xs tracking-widest uppercase mb-1">
                      Capítulo {ch.num}
                    </p>
                    <h2 className="font-display text-grafito font-semibold text-base lg:text-lg leading-snug">
                      {ch.title}
                    </h2>
                  </div>
                </div>
                <a
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 btn-amber text-grafito text-xs font-semibold tracking-wide self-start"
                >
                  <FolderOpen size={13} />
                  Ver herramientas del capítulo
                  <ExternalLink size={11} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <section className="bg-cream-dark py-12 border-t border-grafito/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-body text-ink/55 text-sm">
            Si tienes algún problema para acceder a las herramientas, escríbeme a{" "}
            <a
              href="mailto:adrian@adrianpollan.com"
              className="text-grafito underline underline-offset-2 hover:text-amber transition-colors"
            >
              adrian@adrianpollan.com
            </a>
          </p>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 font-body text-xs text-ink/35 hover:text-ink/60 transition-colors flex-shrink-0"
          >
            <LogOut size={12} />
            Cerrar sesión
          </button>
        </div>
      </section>
    </div>
  );
}
