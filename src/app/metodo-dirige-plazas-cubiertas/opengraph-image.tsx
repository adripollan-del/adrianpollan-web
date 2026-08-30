import { ImageResponse } from "next/og";
import { metodoDirigeOgImage } from "@/lib/metodoDirigeOg";

export const runtime = "edge";
export const alt = "Método Dirige — el programa de 90 días para que tu negocio te dé dinero, no solo trabajo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(metodoDirigeOgImage(), { ...size });
}
