"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Check, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  summary: string;
  includes: string[];
  ideal: string;
  closing: string;
  icon: React.ReactNode;
  href?: string;
}

export default function ServiceCard({
  title,
  subtitle,
  summary,
  includes,
  ideal,
  closing,
  icon,
  href,
}: ServiceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-md border border-navy/10 rounded-xl flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_-8px_rgba(186,117,23,0.4)] hover:border-amber/40">
      {/* Cabecera siempre visible — clic toggle */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-left w-full p-8 lg:p-10 flex flex-col flex-1 group"
        aria-expanded={open}
      >
        <div className="mb-6">{icon}</div>

        <h3 className="font-display text-navy text-2xl lg:text-[1.7rem] font-bold leading-tight mb-3 lg:min-h-[4rem]">
          {title}
        </h3>

        <p className="font-body text-ink/55 text-base leading-relaxed mb-6 lg:min-h-[3.75rem]">
          {subtitle}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-body text-amber text-xs tracking-widest uppercase">
            {open ? "Ver menos" : "Ver más"}
          </span>
          <ChevronDown
            size={20}
            className={`text-amber transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Cuerpo expandible */}
      <div className={`service-body ${open ? "open" : ""}`}>
        <div>
          <div className="px-8 lg:px-10 pb-8 lg:pb-10">
            <div className="w-10 h-px bg-amber mb-6" />

            {/* Descripción */}
            <div className="space-y-4 font-body text-ink/70 text-base leading-relaxed mb-7">
              {summary.split("\n\n").map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>

            {/* Lista de incluidos */}
            <ul className="space-y-2.5 mb-7">
              {includes.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <Check size={16} className="text-amber mt-0.5 flex-shrink-0" />
                  <span className="font-body text-ink/70 text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Ideal para */}
            <div className="mb-6 pt-5 border-t border-navy/10">
              <p className="font-body text-amber text-xs tracking-widest uppercase mb-2">
                Ideal para:
              </p>
              <p className="font-body text-ink/65 text-base leading-relaxed">
                {ideal}
              </p>
            </div>

            {/* Frase de cierre */}
            <p className="font-display italic text-ink/50 text-base leading-relaxed mb-8">
              &ldquo;{closing}&rdquo;
            </p>

            {/* Botón al final */}
            <a
              href="https://calendly.com/adrianpollan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber inline-flex items-center justify-center gap-2 px-6 py-3.5 text-navy text-sm font-semibold tracking-wide w-full"
              onClick={() => trackEvent("calendly_click", { event_category: "conversion", event_label: "Tarjeta de servicio" })}
            >
              Reserva una sesión gratuita
              <ArrowRight size={14} />
            </a>

            {href && (
              <Link
                href={href}
                className="inline-flex items-center justify-center gap-1.5 w-full mt-3 font-body text-sm text-navy/50 hover:text-amber transition-colors"
              >
                Ver más detalles <ArrowRight size={13} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
