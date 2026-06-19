"use client";

import { useEffect, useRef, useState } from "react";

type Symptom = { icon: React.ReactNode; text: string };

function TypewriterCard({
  icon,
  text,
  started,
  delay,
  instant,
}: {
  icon: React.ReactNode;
  text: string;
  started: boolean;
  delay: number;
  instant: boolean;
}) {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);
  const done = displayed.length >= text.length;

  useEffect(() => {
    if (!started) return;
    if (instant) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- aplica el resultado instantáneo de la animación en cliente; solo tiene sentido después del montaje
      setDisplayed(text);
      return;
    }
    const t = setTimeout(() => setTyping(true), delay);
    return () => clearTimeout(t);
  }, [started, delay, instant, text]);

  useEffect(() => {
    if (!typing) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        setTyping(false);
        clearInterval(id);
      }
    }, 25);
    return () => clearInterval(id);
  }, [typing, text]);

  return (
    <div className="bg-[#f5f0e8] border-l-4 border-amber rounded-r-xl p-7">
      <div className="mb-4">{icon}</div>
      <p className="font-body text-navy text-base leading-relaxed min-h-[5rem]">
        {displayed}
        {!done && started && !instant && (
          <span className="animate-pulse ml-px text-amber">|</span>
        )}
      </p>
    </div>
  );
}

export default function TeReconoces({ symptoms, title = "Lo que cambia cuando lo usas" }: { symptoms: Symptom[]; title?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- activa modo instantáneo basado en prefers-reduced-motion; API de browser, solo cliente
    if (prefersReduced) setInstant(true);

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
        <h2 className="font-display text-navy text-3xl lg:text-4xl font-semibold leading-tight mb-12 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {symptoms.map((s, i) => (
            <TypewriterCard
              key={i}
              icon={s.icon}
              text={s.text}
              started={started}
              delay={i * 800}
              instant={instant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
