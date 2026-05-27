"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useExitIntent } from "@/hooks/useExitIntent";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hola, soy Luka, el asistente virtual de Adrián. Cuéntame brevemente en qué puedo ayudarte.",
};

const STORAGE_MESSAGES = "chatbox_messages";
const STORAGE_OPEN     = "chatbox_open";

/* ─── Avatar ilustrado de Luka ──────────────────────────────────── */
function LukaAvatar({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fondo */}
      <circle cx="50" cy="50" r="50" fill="#dcf8e8" />
      {/* Cuerpo / camisa */}
      <path d="M10 100C10 68 30 63 50 63C70 63 90 68 90 100Z" fill="#25D366" />
      {/* Cuello corbata hint */}
      <path d="M44 63L50 73L56 63" fill="white" opacity="0.85" />
      {/* Cuello */}
      <rect x="43" y="55" width="14" height="10" rx="3" fill="#F1A06B" />
      {/* Cabeza */}
      <circle cx="50" cy="40" r="24" fill="#F1A06B" />
      {/* Pelo */}
      <path
        d="M26 38C26 22 37 13 50 13C63 13 74 22 74 38C74 28 64 22 50 22C36 22 26 28 26 38Z"
        fill="#1C0F07"
      />
      {/* Patillas sutiles */}
      <rect x="25" y="36" width="4" height="10" rx="2" fill="#1C0F07" />
      <rect x="71" y="36" width="4" height="10" rx="2" fill="#1C0F07" />
      {/* Oreja izquierda */}
      <ellipse cx="26" cy="42" rx="4.5" ry="6" fill="#F1A06B" />
      <ellipse cx="26" cy="42" rx="2.5" ry="4" fill="#E8925C" />
      {/* Oreja derecha */}
      <ellipse cx="74" cy="42" rx="4.5" ry="6" fill="#F1A06B" />
      <ellipse cx="74" cy="42" rx="2.5" ry="4" fill="#E8925C" />
      {/* Blanco ojo izquierdo */}
      <ellipse cx="41" cy="41" rx="6.5" ry="6.5" fill="white" />
      {/* Blanco ojo derecho */}
      <ellipse cx="59" cy="41" rx="6.5" ry="6.5" fill="white" />
      {/* Iris izquierdo */}
      <circle cx="42" cy="42" r="4" fill="#1B4F8A" />
      {/* Iris derecho */}
      <circle cx="60" cy="42" r="4" fill="#1B4F8A" />
      {/* Pupila izquierda */}
      <circle cx="42.5" cy="42.5" r="2.2" fill="#0A1628" />
      {/* Pupila derecha */}
      <circle cx="60.5" cy="42.5" r="2.2" fill="#0A1628" />
      {/* Brillo ojo izquierdo */}
      <circle cx="43.8" cy="41" r="1" fill="white" />
      {/* Brillo ojo derecho */}
      <circle cx="61.8" cy="41" r="1" fill="white" />
      {/* Ceja izquierda */}
      <path
        d="M35 34Q41 30 47 34"
        stroke="#1C0F07"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Ceja derecha */}
      <path
        d="M53 34Q59 30 65 34"
        stroke="#1C0F07"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Nariz */}
      <path
        d="M49 45C48 49 48 52 50 53C52 52 52 49 51 45"
        stroke="#D4845A"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Sonrisa */}
      <path
        d="M43 54Q50 61 57 54"
        stroke="#B56030"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Mejilla sutil izquierda */}
      <ellipse cx="34" cy="51" rx="5" ry="3" fill="#F4845A" opacity="0.25" />
      {/* Mejilla sutil derecha */}
      <ellipse cx="66" cy="51" rx="5" ry="3" fill="#F4845A" opacity="0.25" />
    </svg>
  );
}

/* ─── Icono estilo WhatsApp ─────────────────────────────────────── */
function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2C8.27 2 2 8.27 2 16c0 2.44.65 4.73 1.79 6.71L2 30l7.49-1.96A13.94 13.94 0 0 0 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm0 25.5c-2.21 0-4.28-.6-6.06-1.64l-.43-.26-4.45 1.17 1.18-4.34-.28-.45A11.48 11.48 0 0 1 4.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.3-8.62c-.34-.17-2.03-1-2.34-1.12-.32-.11-.55-.17-.78.17-.23.34-.88 1.12-1.08 1.35-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59h-.67c-.23 0-.6.09-.91.43-.32.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.69 5.86 5.17.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.09-.14-.32-.23-.66-.4z" />
    </svg>
  );
}

/* ─── Icono enviar ──────────────────────────────────────────────── */
function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function ChatBox() {
  // Inicializa desde sessionStorage si existe (persiste entre páginas y reloads)
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return [WELCOME_MESSAGE];
    try {
      const saved = sessionStorage.getItem(STORAGE_MESSAGES);
      return saved ? (JSON.parse(saved) as Message[]) : [WELCOME_MESSAGE];
    } catch {
      return [WELCOME_MESSAGE];
    }
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(STORAGE_OPEN) === "true";
  });
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasNotification, setHasNotification] = useState(() => {
    if (typeof window === "undefined") return true;
    // Si ya hay historial real (más de 1 mensaje), no mostrar badge
    try {
      const saved = sessionStorage.getItem(STORAGE_MESSAGES);
      const msgs = saved ? (JSON.parse(saved) as Message[]) : [WELCOME_MESSAGE];
      return msgs.length <= 1;
    } catch {
      return true;
    }
  });
  const bottomRef    = useRef<HTMLDivElement>(null);
  const inputRef     = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Persiste mensajes en sessionStorage cada vez que cambian
  useEffect(() => {
    sessionStorage.setItem(STORAGE_MESSAGES, JSON.stringify(messages));
  }, [messages]);

  // Persiste estado abierto/cerrado
  useEffect(() => {
    sessionStorage.setItem(STORAGE_OPEN, String(open));
  }, [open]);

  // ── Visual Viewport API: ajusta la altura cuando aparece el teclado ──
  // Funciona en iOS Safari y Android Chrome. Sin esto, el input queda
  // oculto bajo el teclado en móvil.
  useEffect(() => {
    if (!open || typeof window === "undefined") return;
    const vv = window.visualViewport;
    if (!vv) return;

    const update = () => {
      const el = containerRef.current;
      if (!el || window.innerWidth >= 640) return; // solo móvil
      el.style.height = `${vv.height}px`;
      el.style.top    = `${vv.offsetTop}px`;
    };

    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);

    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
      // Limpia estilos inline al cerrar
      const el = containerRef.current;
      if (el) { el.style.height = ""; el.style.top = ""; }
    };
  }, [open]);

  const handleExitIntent = useCallback(() => {
    const dismissed = sessionStorage.getItem("chatbox_dismissed");
    if (!dismissed && !open) {
      setShowExitPopup(true);
      setOpen(true);
      setHasNotification(false);
    }
  }, [open]);

  useExitIntent({ onExitIntent: handleExitIntent, threshold: 20, delay: 5000 });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    setHasNotification(false);
  };

  const handleClose = () => {
    setOpen(false);
    setShowExitPopup(false);
    sessionStorage.setItem("chatbox_dismissed", "true");
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const { reply } = await res.json();
      setMessages([...updatedMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Ha habido un problema técnico. Puedes contactar directamente en adrianpollan.com/hablemos",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Parsea markdown básico: **negrita**, URLs coloreadas y saltos de línea
  const renderMessage = (content: string) => {
    const tokenRegex = /(\*\*[^*]+\*\*|https?:\/\/[^\s]+|\n)/g;
    const parts = content.split(tokenRegex);
    return parts.map((part, i) => {
      if (!part) return null;
      if (part === "\n") return <br key={i} />;
      if (/^https?:\/\//.test(part)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline break-all text-[#075e54] hover:text-[#25D366] transition-colors"
          >
            {part}
          </a>
        );
      }
      if (/^\*\*[^*]+\*\*$/.test(part)) {
        return (
          <strong key={i} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* ── Panel de chat ────────────────────────────────────────── */}
      {open && (
        <div
          ref={containerRef}
          className={[
            "fixed z-50 shadow-2xl flex flex-col overflow-hidden",
            // Móvil: cubre toda la pantalla desde arriba (inset-0)
            "inset-0",
            // Desktop: panel flotante en esquina
            "sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[375px] sm:h-[540px] sm:rounded-2xl",
            "border-0 sm:border sm:border-gray-200",
            showExitPopup ? "animate-slide-up" : "",
          ].join(" ")}
        >
          {/* Header verde — con padding top para el notch de iOS */}
          <div
            className="flex items-center justify-between px-4 bg-[#075e54] text-white shrink-0"
            style={{
              paddingTop:    "max(12px, env(safe-area-inset-top))",
              paddingBottom: "12px",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30">
                  <LukaAvatar size={40} />
                </div>
                {/* Punto verde online */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#075e54]" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm leading-tight">Luka</p>
                <p className="text-xs text-green-200">
                  Asistente virtual · IA
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white/60 hover:text-white transition-colors text-2xl leading-none p-1 ml-2 shrink-0"
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          {/* Sub-header contexto */}
          <div className="px-4 py-1.5 bg-[#128c7e] text-center shrink-0">
            <p className="text-[11px] text-green-100">
              Asistente de{" "}
              <span className="font-semibold text-white">Adrián Pollán</span>
              {" "}· Consultor de hostelería
            </p>
          </div>

          {/* Área de mensajes — fondo WhatsApp */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-2"
            style={{
              backgroundColor: "#e5ddd5",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8b9a8' fill-opacity='0.25'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-end gap-1.5 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mb-0.5 shadow">
                    <LukaAvatar size={28} />
                  </div>
                )}
                <div
                  className={[
                    "max-w-[78%] px-3 py-2 text-sm leading-relaxed shadow-sm",
                    m.role === "user"
                      ? "bg-[#d9fdd3] text-gray-800 rounded-2xl rounded-br-sm"
                      : "bg-white text-gray-800 rounded-2xl rounded-bl-sm",
                  ].join(" ")}
                >
                  {renderMessage(m.content)}
                  <span className="block text-[10px] text-gray-400 text-right mt-0.5 -mb-0.5">
                    {new Date().toLocaleTimeString("es-ES", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}

            {/* Indicador escribiendo */}
            {loading && (
              <div className="flex items-end gap-1.5 justify-start">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mb-0.5">
                  <LukaAvatar size={28} />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input — con padding bottom para el home indicator de iPhone */}
          <div
            className="shrink-0 px-3 bg-[#f0f2f5] border-t border-gray-200"
            style={{
              paddingTop:    "10px",
              paddingBottom: "max(10px, env(safe-area-inset-bottom))",
            }}
          >
            <div className="flex gap-2 items-end">
              <div className="flex-1 bg-white rounded-2xl px-3 py-2 shadow-sm border border-gray-100 flex items-end">
                <textarea
                  ref={inputRef}
                  rows={1}
                  // text-[16px] es crítico en iOS: evita el auto-zoom al enfocar
                  className="flex-1 text-gray-800 text-[16px] sm:text-sm focus:outline-none placeholder-gray-400 resize-none bg-transparent max-h-28 leading-relaxed"
                  placeholder="Escribe un mensaje…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  // Al enfocar, espera a que suba el teclado y luego hace scroll
                  onFocus={() =>
                    setTimeout(
                      () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
                      350
                    )
                  }
                />
              </div>
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shrink-0 shadow disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1eb858] transition-colors"
                aria-label="Enviar"
              >
                <SendIcon />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-1.5 mb-0.5 text-center">
              Asistente de IA · adrianpollan.com
            </p>
          </div>
        </div>
      )}

      {/* ── Botón flotante ───────────────────────────────────────── */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
          {/* Badge notificación */}
          {hasNotification && (
            <span className="absolute -top-1 -right-1 z-10 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow">
              1
            </span>
          )}

          <button
            onClick={handleOpen}
            className="relative w-14 h-14 bg-[#BA7517] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#9a6214] transition-colors"
            aria-label="Hablar con Luka"
          >
            <WhatsAppIcon size={28} />
          </button>
        </div>
      )}
    </>
  );
}
