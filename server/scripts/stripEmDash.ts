/**
 * Idempotent one-time script: strips em dashes (U+2014 —) from text columns
 * in the `posts` and `jobs` tables.
 *
 * Rule: /\s*—\s*/g → " ", then collapse double spaces.
 * Run with: npx tsx server/scripts/stripEmDash.ts
 */

import { db } from "../db";
import { sql } from "drizzle-orm";

const EM = "\u2014";

function strip(s: string | null | undefined): string | null {
  if (!s || !s.includes(EM)) return null; // null means "unchanged"
  return s.replace(/\s*\u2014\s*/g, " ").replace(/ {2,}/g, " ").trim();
}

function applyStrip(obj: Record<string, string | null>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj)) {
    const stripped = strip(v);
    if (stripped !== null) out[k] = stripped;
  }
  return out;
}

async function main() {
  console.log("=== EM DASH STRIP — DATABASE ===\n");

  // ── POSTS ──────────────────────────────────────────────────────────────────
  const postCols = [
    "title_en", "title_fr",
    "excerpt_en", "excerpt_fr",
    "body_en", "body_fr",
    "seo_description_en", "seo_description_fr",
    "category",
  ];

  const posts = await db.execute(
    sql.raw(`SELECT id, ${postCols.join(", ")} FROM posts`)
  );

  let postsUpdated = 0;
  for (const post of posts.rows as any[]) {
    const changes = applyStrip({
      title_en: post.title_en,
      title_fr: post.title_fr,
      excerpt_en: post.excerpt_en,
      excerpt_fr: post.excerpt_fr,
      body_en: post.body_en,
      body_fr: post.body_fr,
      seo_description_en: post.seo_description_en,
      seo_description_fr: post.seo_description_fr,
      category: post.category,
    });

    if (Object.keys(changes).length === 0) continue;

    const setClauses = Object.keys(changes)
      .map((col) => `${col} = '${changes[col]!.replace(/'/g, "''")}'`)
      .join(", ");

    await db.execute(sql.raw(`UPDATE posts SET ${setClauses} WHERE id = ${post.id}`));
    postsUpdated++;
    console.log(`  post id=${post.id} — updated: ${Object.keys(changes).join(", ")}`);
  }

  console.log(`\nPosts rows updated: ${postsUpdated}`);

  // ── JOBS ───────────────────────────────────────────────────────────────────
  const jobCols = [
    "title", "department", "location", "type", "level",
    "summary", "description", "requirements",
  ];

  const jobs = await db.execute(
    sql.raw(`SELECT id, ${jobCols.join(", ")} FROM jobs`)
  );

  let jobsUpdated = 0;
  for (const job of jobs.rows as any[]) {
    // requirements may be a JSON array stored as text or actual array
    const rawReqs = job.requirements;
    let reqsChanged = false;
    let newReqs: string[] | null = null;

    if (Array.isArray(rawReqs)) {
      const mapped = rawReqs.map((r: string) => strip(r) ?? r);
      if (mapped.some((r: string, i: number) => r !== rawReqs[i])) {
        newReqs = mapped;
        reqsChanged = true;
      }
    } else if (typeof rawReqs === "string" && rawReqs.includes(EM)) {
      // stored as JSON string
      try {
        const parsed: string[] = JSON.parse(rawReqs);
        const mapped = parsed.map((r: string) => strip(r) ?? r);
        if (mapped.some((r: string, i: number) => r !== parsed[i])) {
          newReqs = mapped;
          reqsChanged = true;
        }
      } catch {
        // plain text fallback
      }
    }

    const scalarCols = jobCols.filter((c) => c !== "requirements");
    const changes = applyStrip(
      Object.fromEntries(scalarCols.map((c) => [c, job[c]]))
    );

    if (Object.keys(changes).length === 0 && !reqsChanged) continue;

    const parts: string[] = Object.keys(changes).map(
      (col) => `${col} = '${changes[col]!.replace(/'/g, "''")}'`
    );
    if (reqsChanged && newReqs) {
      parts.push(`requirements = '${JSON.stringify(newReqs).replace(/'/g, "''")}'`);
    }

    await db.execute(
      sql.raw(`UPDATE jobs SET ${parts.join(", ")} WHERE id = ${job.id}`)
    );
    jobsUpdated++;
    console.log(`  job  id=${job.id} (${job.title}) — updated: ${[...Object.keys(changes), ...(reqsChanged ? ["requirements"] : [])].join(", ")}`);
  }

  console.log(`\nJobs rows updated: ${jobsUpdated}`);
  console.log("\nDone.\n");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
