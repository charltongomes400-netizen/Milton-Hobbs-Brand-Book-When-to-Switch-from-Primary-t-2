export interface Post {
  id: number;
  slug: string;
  titleEn: string;
  titleFr: string;
  excerptEn: string;
  excerptFr: string;
  bodyEn: string;
  bodyFr: string;
  seoDescriptionEn: string | null;
  seoDescriptionFr: string | null;
  category: string | null;
  coverImage: string | null;
  published: boolean;
  createdAt: string;
}

export interface LocalizedPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  seoDescription: string;
  category: string | null;
  coverImage: string | null;
  createdAt: string;
}

export type ApiLang = "en" | "fr";

export function localizePost(post: Post, lang: ApiLang): LocalizedPost {
  const fr = lang === "fr";
  return {
    slug: post.slug,
    title: fr ? post.titleFr : post.titleEn,
    excerpt: fr ? post.excerptFr : post.excerptEn,
    body: fr ? post.bodyFr : post.bodyEn,
    seoDescription: (fr ? post.seoDescriptionFr : post.seoDescriptionEn) ?? (fr ? post.excerptFr : post.excerptEn),
    category: post.category,
    coverImage: post.coverImage,
    createdAt: post.createdAt,
  };
}

const CATEGORY_LABELS: Record<string, { en: string; fr: string }> = {
  COMPLIANCE: { en: "Compliance", fr: "Conformité" },
  CORPORATE: { en: "Corporate", fr: "Corporate" },
  TECHNOLOGY: { en: "Technology", fr: "Technologie" },
  "M&A": { en: "M&A", fr: "M&A" },
};

export function categoryLabel(category: string | null, lang: ApiLang): string {
  if (!category) return "";
  const entry = CATEGORY_LABELS[category.toUpperCase()];
  return entry ? entry[lang] : category;
}

export function readingMinutes(html: string): number {
  const text = (html ?? "").replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatPostDate(iso: string, lang: ApiLang): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    month: "long",
    year: "numeric",
  });
}
