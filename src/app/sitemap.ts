import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://adrianpollan.com";
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/sobre-mi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hablemos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/libro`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/consultor-restaurantes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/rentabilidad-restaurantes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/abrir-un-restaurante`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/consultoria-fb-hoteles`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
