"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function WaitlistForm({ buttonText = "Apuntarme" }: { buttonText?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: connect to email service (Mailchimp, ConvertKit, Resend, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("done");
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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        className="flex-1 bg-navy/10 border border-navy/20 px-4 py-3.5 font-body text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-navy transition-colors"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy text-cream text-sm font-semibold tracking-wide hover:bg-navy/85 disabled:opacity-60 transition-colors whitespace-nowrap"
      >
        {status === "sending" ? "..." : buttonText}
        {status === "idle" && <ArrowRight size={14} />}
      </button>
    </form>
  );
}
