"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useExitIntent } from "@/hooks/useExitIntent";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hola, soy Robi, el asistente virtual de Adrián. Cuéntame brevemente en qué puedo ayudarte.",
};

const STORAGE_MESSAGES = "chatbox_messages";
const STORAGE_OPEN     = "chatbox_open";

/* ─── Avatar robot de Robi ──────────────────────────────────────
   SVG inline: robot con colores de marca (grafito + amber).         */
function RobiAvatar({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/robi-avatar.jpg"
      alt="Robi, asistente virtual de Adrián Pollán"
      width={size}
      height={size}
      style={{ display: "block", flexShrink: 0, objectFit: "cover" }}
    />
  );
}

/* ─── Icono estilo WhatsApp ─────────────────────────────────────── */
/* ─── Icono burbuja de mensaje de móvil ─────────────────────────── */
function MessageIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      {/* Burbuja principal */}
      <path
        d="M24 2H4C2.9 2 2 2.9 2 4v14c0 1.1.9 2 2 2h2.5l-1.8 5.5 6-5.5H24c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
        fill="white"
      />
      {/* Tres puntos — sugieren conversación activa */}
      <circle cx="9.5" cy="11" r="1.8" fill="#23272B" />
      <circle cx="14"  cy="11" r="1.8" fill="#23272B" />
      <circle cx="18.5" cy="11" r="1.8" fill="#23272B" />
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

/* ─── Icono minimizar ───────────────────────────────────────────── */
function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
function ChevronUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function ChatBox() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return [WELCOME_MESSAGE];
    try {
      const saved = sessionStorage.getItem(STORAGE_MESSAGES);
      return saved ? (JSON.parse(saved) as Message[]) : [WELCOME_MESSAGE];
    } catch { return [WELCOME_MESSAGE]; }
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(STORAGE_OPEN) === "true";
  });
  const [minimized, setMinimized] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasNotification, setHasNotification] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const saved = sessionStorage.getItem(STORAGE_MESSAGES);
      const msgs = saved ? (JSON.parse(saved) as Message[]) : [WELCOME_MESSAGE];
      return msgs.length <= 1;
    } catch { return true; }
  });

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLTextAreaElement>(null);


  /* ── Body scroll lock en mobile ───────────────────────────────── */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 640) return;

    if (open && !minimized) {
      const scrollY = window.scrollY;
      document.body.dataset.chatScrollY = String(scrollY);
      document.body.style.position = "fixed";
      document.body.style.top      = `-${scrollY}px`;
      document.body.style.left     = "0";
      document.body.style.right    = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = Number(document.body.dataset.chatScrollY ?? 0);
      document.body.style.position = "";
      document.body.style.top      = "";
      document.body.style.left     = "";
      document.body.style.right    = "";
      document.body.style.overflow = "";
      if (scrollY) window.scrollTo(0, scrollY);
    }

    return () => {
      if (document.body.style.position === "fixed") {
        const scrollY = Number(document.body.dataset.chatScrollY ?? 0);
        document.body.style.position = "";
        document.body.style.top      = "";
        document.body.style.left     = "";
        document.body.style.right    = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      }
    };
  }, [open, minimized]);

  /* ── Auto-minimizar en desktop al hacer scroll ────────────────── */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.innerWidth >= 640 && open && !minimized) {
        setMinimized(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open, minimized]);

  /* ── Auto-minimizar en desktop al cambiar de página ──────────── */
  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    if (typeof window !== "undefined" && window.innerWidth >= 640 && open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- minimiza el chat al navegar en desktop; detectar navegación sin effect requeriría prop drilling desde el layout
      setMinimized(true);
    }
  }, [pathname, open]);

  /* ── Scroll al último mensaje ─────────────────────────────────── */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* ── Focus al abrir ───────────────────────────────────────────── */
  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, minimized]);

  /* ── Exit intent ──────────────────────────────────────────────── */
  const handleExitIntent = useCallback(() => {
    const dismissed = sessionStorage.getItem("chatbox_dismissed");
    if (!dismissed && !open) {
      setShowExitPopup(true);
      setOpen(true);
      sessionStorage.setItem(STORAGE_OPEN, "true");
      setMinimized(false);
      setHasNotification(false);
    }
  }, [open]);

  useExitIntent({ onExitIntent: handleExitIntent, threshold: 20, delay: 5000 });

  /* ── Acciones ─────────────────────────────────────────────────── */
  const handleOpen = () => {
    setOpen(true);
    sessionStorage.setItem(STORAGE_OPEN, "true");
    setMinimized(false);
    setHasNotification(false);
  };

  const handleMinimize = () => setMinimized(true);
  const handleExpand   = () => setMinimized(false);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_OPEN, "false");
    setMinimized(false);
    setShowExitPopup(false);
    sessionStorage.setItem("chatbox_dismissed", "true");
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    sessionStorage.setItem(STORAGE_MESSAGES, JSON.stringify(updatedMessages));
    setInput("");
    // Reset altura del textarea al enviar
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const { reply } = await res.json();
      const withReply: Message[] = [...updatedMessages, { role: "assistant", content: reply }];
      setMessages(withReply);
      sessionStorage.setItem(STORAGE_MESSAGES, JSON.stringify(withReply));
    } catch {
      const withError: Message[] = [...updatedMessages, {
        role: "assistant",
        content: "Ha habido un problema técnico. Puedes contactar directamente en adrianpollan.com/hablemos",
      }];
      setMessages(withError);
      sessionStorage.setItem(STORAGE_MESSAGES, JSON.stringify(withError));
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

  /* ── Renderizado de mensajes ─────────────────────────────────── */
  const renderMessage = (content: string) => {
    // Captura URLs sin incluir puntuación de cierre al final
    const tokenRegex = /(\*\*[^*]+\*\*|https?:\/\/[^\s]+|\n)/g;
    const parts = content.split(tokenRegex);
    return parts.map((part, i) => {
      if (!part) return null;
      if (part === "\n") return <br key={i} />;
      if (/^https?:\/\//.test(part)) {
        // Elimina puntuación final que no forma parte de la URL
        const cleanUrl = part.replace(/[.,;:!?)]+$/, "");
        const trailing = part.slice(cleanUrl.length);
        return (
          <span key={i}>
            <a
              href={cleanUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-medium underline break-all text-[#A3814B] hover:text-[#876B3E] transition-colors"
            >
              {cleanUrl}
            </a>
            {trailing}
          </span>
        );
      }
      if (/^\*\*[^*]+\*\*$/.test(part)) {
        return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  /* ── Preview del último mensaje (sin markdown) para minimizado ── */
  const lastMessagePreview = () => {
    const last = messages[messages.length - 1];
    if (!last) return "";
    const clean = last.content.replace(/\*\*/g, "").replace(/\n/g, " ");
    return clean.length > 42 ? clean.slice(0, 42) + "…" : clean;
  };

  /* ══════════════════════════════════════════════════════════════ */
  return (
    <>
      {/* ══ Chat completo ════════════════════════════════════════ */}
      {open && !minimized && (
        <div className={[
          "fixed z-50 flex flex-col overflow-hidden",
          // Mobile: pantalla completa con altura dinámica
          "inset-x-0 top-0 h-dvh",
          // Desktop: panel flotante
          "sm:inset-auto sm:top-auto sm:bottom-6 sm:right-6 sm:w-[375px] sm:h-[540px] sm:rounded-2xl sm:shadow-2xl",
          "border-0 sm:border sm:border-gray-200",
          showExitPopup ? "animate-slide-up" : "",
        ].join(" ")}>

          {/* Header grafito */}
          <div
            className="flex items-center justify-between px-4 bg-[#23272B] text-white shrink-0"
            style={{ paddingTop: "max(12px, env(safe-area-inset-top))", paddingBottom: "12px" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20">
                  <RobiAvatar size={40} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#A3814B] rounded-full border-2 border-[#23272B]" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm leading-tight">Robi</p>
                <p className="text-xs text-[#A3814B]/80">Asistente virtual · IA</p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0 ml-2">
              {/* Minimizar — solo en desktop */}
              <button
                onClick={handleMinimize}
                className="hidden sm:flex text-white/50 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                aria-label="Minimizar chat"
              >
                <ChevronDownIcon />
              </button>
              {/* Cerrar */}
              <button
                onClick={handleClose}
                className="text-white/50 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 text-xl leading-none"
                aria-label="Cerrar chat"
              >
                ×
              </button>
            </div>
          </div>

          {/* Sub-header amber */}
          <div className="px-4 py-1.5 bg-[#A3814B] text-center shrink-0">
            <p className="text-[11px] text-[#EDE6D8]">
              Asistente de <span className="font-semibold text-white">Adrián</span> · Consultor de hostelería
            </p>
          </div>

          {/* Mensajes */}
          <div
            className="flex-1 overflow-y-auto overscroll-y-contain p-4 space-y-2"
            style={{
              backgroundColor: "#f5ede0",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8a87a' fill-opacity='0.18'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex items-end gap-1.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mb-0.5 shadow">
                    <RobiAvatar size={28} />
                  </div>
                )}
                <div className={[
                  "max-w-[78%] min-w-0 px-3 py-2 text-sm leading-relaxed shadow-sm break-words overflow-hidden",
                  m.role === "user"
                    ? "bg-[#fde9bb] text-gray-800 rounded-2xl rounded-br-sm"
                    : "bg-white text-gray-800 rounded-2xl rounded-bl-sm",
                ].join(" ")}>
                  {renderMessage(m.content)}
                  <span className="block text-[10px] text-gray-400 text-right mt-0.5 -mb-0.5">
                    {new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-end gap-1.5 justify-start">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mb-0.5">
                  <RobiAvatar size={28} />
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

          {/* Input */}
          <div
            className="shrink-0 px-3 bg-[#E8E2D6] border-t border-[#C4A070]/40"
            style={{ paddingTop: "10px", paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}
          >
            <div className="flex gap-2 items-end">
              <div className="flex-1 bg-white rounded-2xl px-3 py-2 shadow-sm border border-[#C4A070]/25 flex items-end">
                <textarea
                  ref={inputRef}
                  rows={1}
                  className="flex-1 text-gray-800 text-[16px] sm:text-sm focus:outline-none placeholder-gray-400 resize-none bg-transparent leading-relaxed"
                  style={{ maxHeight: "112px", overflowY: "auto" }}
                  placeholder="Escribe un mensaje…"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    // Auto-resize: colapsa primero, luego expande al scrollHeight real
                    e.target.style.height = "auto";
                    e.target.style.height = Math.min(e.target.scrollHeight, 112) + "px";
                  }}
                  onKeyDown={handleKeyDown}
                  onFocus={() =>
                    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 350)
                  }
                />
              </div>
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="w-10 h-10 bg-[#A3814B] text-white rounded-full flex items-center justify-center shrink-0 shadow disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#876B3E] transition-colors"
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

      {/* ══ Chat minimizado (solo desktop) ═══════════════════════ */}
      {open && minimized && (
        <div className="hidden sm:block fixed bottom-0 right-6 z-50 w-72 animate-slide-up">
          <div className="bg-[#23272B] rounded-t-xl shadow-2xl border border-neutral-700 border-b-0 overflow-hidden">
            <div className="flex items-center gap-2.5 px-3 py-2.5">
              {/* Avatar + última frase */}
              <button
                onClick={handleExpand}
                className="flex items-center gap-2.5 flex-1 min-w-0 text-left"
                aria-label="Expandir chat"
              >
                <div className="relative shrink-0">
                  <div className="w-9 h-9 rounded-full overflow-hidden">
                    <RobiAvatar size={36} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#A3814B] rounded-full border-2 border-[#23272B]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm leading-tight">Robi</p>
                  <p className="text-neutral-400 text-xs truncate leading-snug mt-0.5">
                    {lastMessagePreview()}
                  </p>
                </div>
              </button>
              {/* Controles */}
              <div className="flex items-center gap-0.5 shrink-0">
                <button
                  onClick={handleExpand}
                  className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded hover:bg-white/10"
                  aria-label="Expandir chat"
                >
                  <ChevronUpIcon />
                </button>
                <button
                  onClick={handleClose}
                  className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded hover:bg-white/10 text-lg leading-none"
                  aria-label="Cerrar chat"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ Botón flotante (solo cuando el chat está cerrado) ════ */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
          {hasNotification && (
            <span className="absolute -top-1 -right-1 z-10 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow">
              1
            </span>
          )}
          <button
            onClick={handleOpen}
            className="relative w-14 h-14 bg-[#A3814B] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#876B3E] transition-colors"
            aria-label="Hablar con Robi"
          >
            <MessageIcon size={28} />
          </button>
        </div>
      )}
    </>
  );
}
