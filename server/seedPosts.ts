import fs from "fs";
import path from "path";
import { storage } from "./storage";
import { insightsCopy } from "../client/src/data/insightsCopy";
import type { InsightArticle, BilingualString } from "../client/src/data/insightsCopy";
import type { InsertPost } from "@shared/schema";

const blogUploadsDir = path.join(process.cwd(), "uploads", "blog");
const sourceImagesDir = path.join(process.cwd(), "attached_assets", "generated_images");

const slugToImage: Record<string, string> = {
  "navigating-cross-border-compliance-gulf": "insight-compliance.png",
  "family-business-succession-uae": "insight-family-business.png",
  "digital-transformation-data-privacy-gcc": "insight-digital-privacy.png",
  "strategic-ma-structuring-2026": "insight-ma-structuring.png",
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildBody(article: InsightArticle, lang: "en" | "fr"): string {
  const parts: string[] = [];
  parts.push(`<p class="lead">${escapeHtml(article.lead[lang])}</p>`);

  for (const section of article.sections) {
    parts.push(`<h2>${escapeHtml(section.h2[lang])}</h2>`);
    for (const p of section.paragraphs) {
      parts.push(`<p>${escapeHtml(p[lang])}</p>`);
    }
    if (section.pullQuote) {
      parts.push(`<blockquote>${escapeHtml(section.pullQuote[lang])}</blockquote>`);
    }
  }

  const bullets = article.callout.bullets.map((b: BilingualString) => `<li>${escapeHtml(b[lang])}</li>`).join("");
  parts.push(`<aside class="callout"><p class="eyebrow">${escapeHtml(article.callout.eyebrow[lang])}</p><ul>${bullets}</ul></aside>`);

  return parts.join("\n");
}

function copyCoverImage(slug: string): string | null {
  const filename = slugToImage[slug];
  if (!filename) return null;

  const source = path.join(sourceImagesDir, filename);
  if (!fs.existsSync(source)) return null;

  if (!fs.existsSync(blogUploadsDir)) fs.mkdirSync(blogUploadsDir, { recursive: true });
  const dest = path.join(blogUploadsDir, filename);
  fs.copyFileSync(source, dest);
  return `/uploads/blog/${filename}`;
}

export async function seedPosts(): Promise<void> {
  const existing = await storage.getPosts(false);
  if (existing.length > 0) return;

  for (const article of insightsCopy.articles) {
    const coverImage = copyCoverImage(article.slug);

    const post: InsertPost = {
      slug: article.slug,
      titleEn: article.title.en,
      titleFr: article.title.fr,
      excerptEn: article.meta.en.description,
      excerptFr: article.meta.fr.description,
      bodyEn: buildBody(article, "en"),
      bodyFr: buildBody(article, "fr"),
      seoDescriptionEn: article.meta.en.description,
      seoDescriptionFr: article.meta.fr.description,
      category: article.category.en,
      coverImage,
      published: true,
    };

    await storage.createPost(post);
  }

  console.log(`[seed] seeded ${insightsCopy.articles.length} posts`);
}

const isMain = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  seedPosts()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("seedPosts failed:", err);
      process.exit(1);
    });
}
