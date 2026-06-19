import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*\\.webp|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.ico|.*\\.woff2|.*\\.woff)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Security headers estáticos aplicados a todas las rutas.
        // La CSP (con nonce por request) va en proxy.ts, no aquí.
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog/por-que-tu-restaurante-no-es-rentable",
        destination:
          "/blog/por-que-tu-restaurante-no-es-rentable-aunque-este-lleno",
        permanent: true,
      },
      {
        source: "/blog/errores-mas-comunes-al-abrir-un-restaurante",
        destination: "/blog/los-10-errores-que-matan-una-apertura",
        permanent: true,
      },
      {
        source: "/blog/ticket-medio-restaurante-como-aumentarlo",
        destination:
          "/blog/ticket-medio-restaurante-como-aumentarlo-sin-subir-precios",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
