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
          {
            // 'unsafe-inline' necesario para los scripts de RSC streaming que
            // Next.js inyecta en el HTML estático (self.__next_f.push([...])).
            // No se usan nonces porque harían todas las páginas dinámicas.
            // El riesgo de inyección inline ya está cerrado: sanitize-html en
            // el blog y escapeHtml en herramientas/email.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // vercel.live: toolbar de feedback de Vercel (solo en previews, inocuo en producción)
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://assets.calendly.com https://www.clarity.ms https://vercel.live",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
              "img-src 'self' data: https://images.unsplash.com",
              "font-src 'self'",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms https://api.calendly.com https://assets.calendly.com",
              "frame-src https://calendly.com",
              "object-src 'none'",
              "base-uri 'self'",
              "frame-ancestors 'none'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
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
