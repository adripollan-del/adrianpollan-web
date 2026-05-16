import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adrián Pollán — Consultoría en Hostelería y Restauración",
  description:
    "Consultoría especializada en restaurantes y hostelería. Más rentabilidad, mejores equipos, aperturas exitosas. El Método ADRIÁN.",
  keywords: ["consultoría restaurantes", "hostelería", "rentabilidad", "F&B", "aperturas"],
  openGraph: {
    title: "Adrián Pollán — Consultoría en Hostelería y Restauración",
    description: "Restaurantes más rentables y mejor gestionados.",
    url: "https://adrianpollan.com",
    siteName: "Adrián Pollán",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
