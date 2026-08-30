"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBoxLazy from "@/components/ChatBoxLazy";

// Rutas donde no se muestra el header/footer/chatbot del sitio (landings de venta
// directa, para que el visitante no tenga forma de salir ni distraerse sin usar el CTA).
const HIDE_CHROME_ON = ["/metodo-dirige"];

function hideChrome(pathname: string | null): boolean {
  return HIDE_CHROME_ON.some((prefix) => pathname?.startsWith(prefix));
}

export function ConditionalNavigation() {
  const pathname = usePathname();
  if (hideChrome(pathname)) return null;
  return <Navigation />;
}

export function ConditionalFooter() {
  const pathname = usePathname();
  if (hideChrome(pathname)) return null;
  return <Footer />;
}

export function ConditionalChatBox() {
  const pathname = usePathname();
  if (hideChrome(pathname)) return null;
  return <ChatBoxLazy />;
}
