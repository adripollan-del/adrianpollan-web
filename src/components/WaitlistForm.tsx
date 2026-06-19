"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

type Status = "idle" | "sending" | "done" | "error";

export default function WaitlistForm({
  buttonText = "Avísame",
  placeholder = "Tu email",
}: {
  buttonText?: string;
  placeholder?: string;
}) {
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
      const res = await fetch("/api/libro", {
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
        trackEvent("book_waitlist_signup", { event_category: "conversion", event_label: "Lista de espera libro" });
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
      <div className="flex flex-col items-center gap-3">
        <CheckCircle size={32} className="text-navy" />
        <p className="font-display text-navy text-xl font-semibold">
          ¡Estás en la lista!
        </p>
        <p className="font-body text-navy/65 text-sm">
          Te avisaré en cuanto el libro esté disponible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md mx-auto">
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
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          disabled={status === "sending"}
          className="flex-1 bg-navy/10 border border-navy/20 px-4 py-3.5 font-body text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-navy transition-colors disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy text-cream text-sm font-semibold tracking-wide hover:bg-navy/85 disabled:opacity-60 transition-colors whitespace-nowrap"
        >
          {status === "sending" ? "..." : buttonText}
          {status === "idle" && <ArrowRight size={14} />}
        </button>
      </div>
      {status === "error" && errorMsg && (
        <p className="font-body text-sm text-red-700" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
