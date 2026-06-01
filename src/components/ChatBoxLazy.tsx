"use client";

import dynamic from "next/dynamic";

const ChatBox = dynamic(() => import("@/components/ChatBox"), {
  ssr: false,
  loading: () => null,
});

export default function ChatBoxLazy() {
  return <ChatBox />;
}
