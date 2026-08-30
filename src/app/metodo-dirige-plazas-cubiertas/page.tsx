import type { Metadata } from "next";
import MetodoDirigePlazasCubiertasClient from "./MetodoDirigePlazasCubiertasClient";

export const metadata: Metadata = {
  title: "Método Dirige — Programa de 90 días",
  description:
    "El programa de 90 días para que tu negocio te dé dinero, no solo trabajo. Precio: 1.997€.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MetodoDirigePlazasCubiertasPage() {
  return <MetodoDirigePlazasCubiertasClient />;
}
