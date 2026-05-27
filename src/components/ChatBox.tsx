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
    "Hola, soy el asistente de Adrián Pollán. Cuéntame brevemente qué está pasando en tu negocio y te digo si tiene sentido que hablemos.",
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Detecta exit intent
  const handleExitIntent = useCallback(() => {
    const dismissed = sessionStorage.getItem("chatbox_dismissed");
    if (!dismissed && !open) {
      setShowExitPopup(true);
      setOpen(true);
    }
  }, [open]);

  useExitIntent({
    onExitIntent: handleExitIntent,
    threshold: 20,
    delay: 5000,
  });

  // Scroll al último mensaje
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus en el input al abrir
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

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

      if (!res.ok) {
        throw new Error("API error");
      }

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? `HTTP ${res.status}`);
      }
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err);
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: `Error técnico: ${detail}`,
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

  // Renderiza los mensajes convirtiendo URLs en enlaces clicables
  const renderMessage = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);
    return parts.map((part, i) =>
      urlRegex.test(part) ? (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline opacity-80 hover:opacity-100"
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <>
      {/* Chatbox panel */}
      {open && (
        <div
          className={`
            fixed z-50 shadow-2xl flex flex-col
            bottom-0 right-0 w-full h-full
            sm:bottom-6 sm:right-6 sm:w-[360px] sm:h-[480px] sm:rounded-2xl
            bg-neutral-900 border border-neutral-700
            ${showExitPopup ? "animate-slide-up" : ""}
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-700 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-sm font-semibold text-white shrink-0">
                AP
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">
                  Adrián Pollán
                </p>
                <p className="text-xs text-neutral-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Asistente disponible
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-neutral-400 hover:text-white transition-colors text-xl leading-none p-1"
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
                    max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed
                    ${
                      m.role === "user"
                        ? "bg-white text-neutral-900"
                        : "bg-neutral-800 text-neutral-100 border border-neutral-700"
                    }
                  `}
                >
                  {renderMessage(m.content)}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 border border-neutral-700 px-3 py-2 rounded-xl">
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-neutral-700 shrink-0">
            <div className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                rows={1}
                className="
                  flex-1 bg-neutral-800 text-white text-sm rounded-xl px-3 py-2
                  border border-neutral-600 focus:outline-none focus:border-neutral-400
                  placeholder-neutral-500 resize-none
                "
                placeholder="Escribe tu mensaje..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="
                  bg-white text-neutral-900 rounded-xl px-3 py-2 text-sm font-medium
                  disabled:opacity-30 disabled:cursor-not-allowed
                  hover:bg-neutral-100 transition-colors shrink-0
                "
              >
                Enviar
              </button>
            </div>
            <p className="text-[11px] text-neutral-600 mt-2 text-center">
              Asistente de IA de adrianpollan.com
            </p>
          </div>
        </div>
      )}

      {/* Botón flotante (solo visible cuando el chat está cerrado) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-6 right-6 z-50
            w-14 h-14 bg-neutral-900 border border-neutral-700
            text-white rounded-full shadow-xl
            flex items-center justify-center
            hover:bg-neutral-800 transition-colors
          "
          aria-label="Abrir chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}
    </>
  );
}
