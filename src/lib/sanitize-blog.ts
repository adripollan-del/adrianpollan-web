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
    a: [
      "href", "rel", "target",
      { name: "class", values: ["blog-cta-btn"] },
    ],
    img: ["src", "alt"],
    p: [
      { name: "class", values: ["blog-cta-title", "blog-cta-desc"] },
    ],
    div: [
      { name: "class", values: ["blog-cta-block", "internal-links"] },
    ],
  },
  allowedSchemes: ["http", "https"],
  allowProtocolRelative: false,
};

export function sanitizeBlogHtml(html: string): string {
  return sanitizeHtml(html, OPTIONS);
}
