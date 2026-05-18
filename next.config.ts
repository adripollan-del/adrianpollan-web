import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
