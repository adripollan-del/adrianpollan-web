import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBannerLazy from "@/components/CookieBannerLazy";
import ChatBoxLazy from "@/components/ChatBoxLazy";
import AnalyticsScripts from "@/components/AnalyticsScripts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adrianpollan.com"),
  title: {
    default: "Adrián Pollán | Consultor de Hostelería y Restauración",
    template: "%s | Adrián Pollán",
  },
  description:
    "Consultor especializado en rentabilidad de restaurantes, control de costes y gestión operativa. Más de 20 años de experiencia en España, Francia, UK e Irlanda. Diagnóstico gratuito.",
  keywords: [
    "consultor hostelería",
    "consultor restaurantes",
    "consultoría gastronómica",
    "consultoría F&B",
    "rentabilidad restaurantes",
    "control de costes hostelería",
    "gestión operativa restaurantes",
    "auditoría F&B",
    "diagnóstico restaurantes",
    "food cost",
    "labour cost hostelería",
  ],
  authors: [{ name: "Adrián Pollán", url: "https://adrianpollan.com" }],
  creator: "Adrián Pollán",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Adrián Pollán",
    title: "Adrián Pollán | Consultor de Hostelería y Restauración",
    description:
      "Consultor especializado en rentabilidad de restaurantes, control de costes y gestión operativa. Más de 20 años de experiencia real.",
    url: "https://adrianpollan.com",
    images: [
      {
        url: "/og-image-square.png",
        width: 1200,
        height: 1200,
        alt: "Adrián Pollán — Consultor de Hostelería y Restauración",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrián Pollán | Consultor de Hostelería y Restauración",
    description:
      "Consultor especializado en rentabilidad de restaurantes, control de costes y gestión operativa. Más de 20 años de experiencia real.",
    images: ["/og-image-square.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon/favicon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/favicon/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/favicon/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://adrianpollan.com/#person",
      name: "Adrián Pollán",
      url: "https://adrianpollan.com",
      image: "https://adrianpollan.com/og-image-square.png",
      jobTitle: "Consultor de Hostelería y Restauración",
      description:
        "Consultor especializado en rentabilidad de restaurantes, gestión operativa y F&B con más de 20 años de experiencia en España, Francia, Reino Unido e Irlanda.",
      knowsAbout: [
        "Consultoría de hostelería",
        "Rentabilidad de restaurantes",
        "Gestión F&B",
        "Control de costes",
        "Auditoría operativa",
        "Acompañamiento a aperturas",
        "Revenue management hotelero",
      ],
      worksFor: {
        "@id": "https://adrianpollan.com/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://adrianpollan.com/#organization",
      name: "Adrián Pollán Consultoría",
      url: "https://adrianpollan.com",
      description:
        "Consultoría especializada en hostelería, restauración y F&B. Diagnóstico, rentabilidad, operaciones y acompañamiento a aperturas.",
      founder: { "@id": "https://adrianpollan.com/#person" },
      areaServed: ["España", "México", "Argentina", "Colombia", "Chile"],
      serviceType: [
        "Consultoría de hostelería",
        "Auditoría F&B",
        "Consultoría operativa",
        "Acompañamiento a aperturas",
      ],
      priceRange: "Consultar",
    },
    {
      "@type": "WebSite",
      "@id": "https://adrianpollan.com/#website",
      name: "Adrián Pollán",
      url: "https://adrianpollan.com",
      publisher: { "@id": "https://adrianpollan.com/#person" },
      inLanguage: "es-ES",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieBannerLazy />
        <ChatBoxLazy />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
