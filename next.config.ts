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
