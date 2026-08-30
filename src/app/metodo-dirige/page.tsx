import type { Metadata } from "next";
import MetodoDirigeClient from "./MetodoDirigeClient";

const OG_DESCRIPTION =
  "El programa de 90 días para dirigir tu negocio de hostelería con datos, no a ciegas.";

export const metadata: Metadata = {
  title: "Método Dirige — Programa de 90 días",
  description: OG_DESCRIPTION,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Método Dirige",
    description: OG_DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Método Dirige",
    description: OG_DESCRIPTION,
  },
};

export default function MetodoDirigePage() {
  return <MetodoDirigeClient />;
}
