"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire up to email service (e.g. Resend, Formspree)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <CheckCircle size={36} className="text-amber" />
        <h3 className="font-display text-navy text-2xl font-semibold">Mensaje recibido</h3>
        <p className="font-body text-ink/65 text-base">
          Gracias por escribirme. Te respondo personalmente en menos de 24 horas.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full bg-white border border-navy/20 px-4 py-3.5 font-body text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-amber transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-body text-xs text-navy/50 uppercase tracking-wider block mb-1.5">
            Nombre *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={inputBase}
          />
        </div>
        <div>
          <label className="font-body text-xs text-navy/50 uppercase tracking-wider block mb-1.5">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label className="font-body text-xs text-navy/50 uppercase tracking-wider block mb-1.5">
          Tu negocio
        </label>
        <input
          type="text"
          name="business"
          value={form.business}
          onChange={handleChange}
          placeholder="Nombre y tipo de negocio"
          className={inputBase}
        />
      </div>

      <div>
        <label className="font-body text-xs text-navy/50 uppercase tracking-wider block mb-1.5">
          ¿En qué puedo ayudarte? *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Cuéntame brevemente tu situación y qué quieres mejorar..."
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-navy text-sm font-semibold tracking-wide hover:bg-amber-hover disabled:opacity-60 transition-colors"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        {status !== "sending" && <ArrowRight size={16} />}
      </button>
    </form>
  );
}
