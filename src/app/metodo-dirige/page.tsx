import type { Metadata } from "next";
import MetodoDirigeClient from "./MetodoDirigeClient";

export const metadata: Metadata = {
  title: "Método Dirige — Programa de 90 días",
  description:
    "El programa de 90 días para que tu negocio te dé dinero, no solo trabajo. Precio de fundador: 997€, solo las primeras 10 plazas.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MetodoDirigePage() {
  return <MetodoDirigeClient />;
}
