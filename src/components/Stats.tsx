"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Globe, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Clock, value: 20, suffix: "+", label: "Años de experiencia operativa" },
  { icon: Globe, value: 4, suffix: "", label: "Países: España, Francia, UK, Irlanda" },
  { icon: Users, value: 100, suffix: "+", label: "Negocios acompañados" },
];

function Counter({ target, animate }: { target: number; animate: boolean }) {
  // Start at the real value so SSR/crawlers/screen readers always see correct data.
  // When JS fires and the section becomes visible, restart from 0 for the animation.
  const [n, setN] = useState(target);

  useEffect(() => {
    if (!animate) return;

    setN(0);
    const duration = 1500;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setN(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate, target]);

  return <span className="tabular-nums">{n}</span>;
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 text-center">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex flex-col items-center">
                <Icon size={32} strokeWidth={1.5} className="text-amber mb-4" />
                <div className="font-display text-amber text-5xl lg:text-6xl font-bold leading-none mb-3">
                  <Counter target={s.value} animate={visible} />
                  {s.suffix}
                </div>
                <p className="font-body text-cream/65 text-sm leading-relaxed max-w-xs">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
