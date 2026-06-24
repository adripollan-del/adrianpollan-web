import sanitizeHtml from "sanitize-html";
import { BLOG_SANITIZE_OPTIONS } from "./sanitize-blog-options.mjs";

export function sanitizeBlogHtml(html: string): string {
  return sanitizeHtml(html, BLOG_SANITIZE_OPTIONS);
}
