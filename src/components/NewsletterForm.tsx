"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

type Status = "idle" | "sending" | "done" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [renderTs, setRenderTs] = useState("");
  // eslint-disable-next-line react-hooks/set-state-in-effect -- timestamp en cliente: lazy-init correría en servidor (SSG) y rompería el check de timing del antibot
  useEffect(() => { setRenderTs(Date.now().toString()); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          _hp: honeypotRef.current?.value ?? "",
          _ts: renderTs,
        }),
      });

      if (res.ok) {
        setStatus("done");
        trackEvent("newsletter_signup", { event_category: "conversion", event_label: "Newsletter footer" });
        return;
      }

      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      setErrorMsg(data?.error ?? "No se pudo completar la suscripción.");
      setStatus("error");
    } catch {
      setErrorMsg("No se pudo conectar. Inténtalo más tarde.");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="flex items-center gap-3">
        <CheckCircle size={20} className="text-amber flex-shrink-0" />
        <p className="font-body text-cream text-sm">
          ¡Gracias! Te he añadido al newsletter.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      {/* Honeypot: invisible para humanos, trampa para bots */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <input
          ref={honeypotRef}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="_ts" value={renderTs} />
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          disabled={status === "sending"}
          aria-label="Tu email"
          className="flex-1 bg-cream/5 border border-cream/20 px-4 py-2.5 font-body text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-amber transition-colors disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber text-cream text-sm font-medium tracking-wide hover:bg-amber-hover disabled:opacity-60 transition-colors whitespace-nowrap"
        >
          {status === "sending" ? "..." : "Quiero recibirlo"}
          {status === "idle" && <ArrowRight size={14} />}
        </button>
      </div>
      {status === "error" && errorMsg && (
        <p className="font-body text-xs text-amber/90" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
