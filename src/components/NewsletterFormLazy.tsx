"use client";
import dynamic from "next/dynamic";

const NewsletterForm = dynamic(() => import("@/components/NewsletterForm"), {
  ssr: false,
  loading: () => null,
});

export default function NewsletterFormLazy() {
  return <NewsletterForm />;
}
