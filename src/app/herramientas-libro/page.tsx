import type { Metadata } from "next";
import HerramientasLibroClient from "./HerramientasLibroClient";

export const metadata: Metadata = {
  title: "Herramientas del Método ADRIÁN",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HerramientasLibroPage() {
  return <HerramientasLibroClient />;
}
