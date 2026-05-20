import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/aviso-legal", "/politica-de-privacidad", "/politica-de-cookies", "/terminos-y-condiciones", "/herramientas-libro"],
      },
    ],
    sitemap: "https://adrianpollan.com/sitemap.xml",
  };
}
