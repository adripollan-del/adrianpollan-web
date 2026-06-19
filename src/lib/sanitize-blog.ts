import sanitizeHtml from "sanitize-html";

const OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "h2", "h3", "h4",
    "p", "ul", "ol", "li",
    "a",
    "strong", "em", "b", "i",
    "blockquote",
    "img",
    "table", "thead", "tbody", "tr", "th", "td",
    "div",
  ],
  allowedAttributes: {
    a:   ["href", "rel", "target"],
    img: ["src", "alt"],
    div: ["class"],
  },
  allowedSchemes: ["http", "https"],
  allowProtocolRelative: false,
};

export function sanitizeBlogHtml(html: string): string {
  return sanitizeHtml(html, OPTIONS);
}
