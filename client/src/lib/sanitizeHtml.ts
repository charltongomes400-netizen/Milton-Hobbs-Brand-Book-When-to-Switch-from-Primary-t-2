import DOMPurify from "dompurify";

const ALLOWED_TAGS = [
  "p",
  "h2",
  "h3",
  "h4",
  "ul",
  "ol",
  "li",
  "blockquote",
  "aside",
  "strong",
  "em",
  "b",
  "i",
  "a",
  "img",
  "figure",
  "figcaption",
  "br",
  "span",
];

const ALLOWED_ATTR = ["class", "href", "src", "alt", "target", "rel"];

let hookRegistered = false;

function ensureHook() {
  if (hookRegistered) return;
  DOMPurify.addHook("afterSanitizeAttributes", (node) => {
    if (node.tagName === "A" && node.getAttribute("target") === "_blank") {
      node.setAttribute("rel", "noopener noreferrer");
    }
  });
  hookRegistered = true;
}

export function sanitizeHtml(dirty: string): string {
  ensureHook();
  return DOMPurify.sanitize(dirty ?? "", {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    FORBID_TAGS: ["script", "style"],
  });
}
