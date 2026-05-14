"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  includes: string[];
  ideal?: string;
  closing?: string;
  icon?: React.ReactNode;
  image?: string;
  cta?: string;
  ctaHref?: string;
  variant?: "light" | "dark";
}

export default function ServiceCard({
  number,
  title,
  subtitle,
  summary,
  includes,
  ideal,
  closing,
  icon,
  image,
  cta = "Más información",
  ctaHref = "/hablemos",
  variant = "light",
}: ServiceCardProps) {
  const [open, setOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <div
      className={`border transition-all duration-300 ${
        isDark
          ? "border-cream/20 hover:border-amber/50"
          : "border-navy/15 hover:border-amber"
      }`}
    >
      {/* Card header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-8 lg:p-10 flex items-start justify-between gap-6 group"
        aria-expanded={open}
      >
        <div className="flex-1">
          {icon && (
            <div className={`mb-3 ${isDark ? "text-amber" : "text-amber"}`}>
              {icon}
            </div>
          )}
          <span
            className={`font-display text-5xl font-light block mb-4 ${
              isDark ? "text-amber/40" : "text-amber/30"
            }`}
          >
            {number}
          </span>
          <h3
            className={`font-display text-2xl lg:text-3xl font-semibold leading-tight mb-2 ${
              isDark ? "text-cream" : "text-navy"
            }`}
          >
            {title}
          </h3>
          <p
            className={`font-body text-sm tracking-wide uppercase ${
              isDark ? "text-amber/70" : "text-amber"
            }`}
          >
            {subtitle}
          </p>
        </div>
        <div
          className={`flex-shrink-0 mt-2 w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
            open
              ? "bg-amber border-amber text-navy"
              : isDark
              ? "border-cream/30 text-cream/60 group-hover:border-amber group-hover:text-amber"
              : "border-navy/30 text-navy/60 group-hover:border-amber group-hover:text-amber"
          }`}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      {/* Expandable body */}
      <div className={`service-body ${open ? "open" : ""}`}>
        <div>
          <div className="px-8 lg:px-10 pb-8 lg:pb-10">
            {image && (
              <div className="relative aspect-[16/9] overflow-hidden mb-8 -mx-8 lg:-mx-10 lg:mb-10">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
            )}
            <div
              className={`w-12 h-px mb-6 ${isDark ? "bg-amber/40" : "bg-amber/50"}`}
            />
            <p
              className={`font-body text-base leading-relaxed mb-6 ${
                isDark ? "text-cream/75" : "text-ink/75"
              }`}
            >
              {summary}
            </p>
            <ul className="space-y-2.5 mb-8">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber mt-1 flex-shrink-0">—</span>
                  <span
                    className={`font-body text-sm ${
                      isDark ? "text-cream/70" : "text-ink/70"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {ideal && (
              <div className={`mb-6 pt-5 border-t ${isDark ? "border-cream/10" : "border-navy/10"}`}>
                <p className="font-body text-amber text-xs tracking-widest uppercase mb-2">Ideal para</p>
                <p className={`font-body text-sm leading-relaxed ${isDark ? "text-cream/65" : "text-ink/65"}`}>
                  {ideal}
                </p>
              </div>
            )}
            {closing && (
              <p className={`font-display italic text-base leading-relaxed mb-8 ${isDark ? "text-cream/45" : "text-ink/45"}`}>
                &ldquo;{closing}&rdquo;
              </p>
            )}
            <a
              href={ctaHref}
              className={`inline-block px-6 py-3 text-sm font-medium tracking-wide transition-colors ${
                isDark
                  ? "bg-amber text-navy hover:bg-amber-hover"
                  : "border border-navy text-navy hover:bg-navy hover:text-cream"
              }`}
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
