// Idempotent one-time script: strips em dashes (U+2014) from text columns
// in the `posts` and `jobs` tables.
//
// Replacement: surrounding whitespace + em dash + surrounding whitespace => one space.
// Also collapses any resulting double spaces and trims.
//
// Run: npx tsx server/scripts/stripEmDash.ts

import { db } from "../db";
import { sql } from "drizzle-orm";

const EM = "\u2014";

function strip(s: string | null | undefined): string | null {
  if (!s || !s.includes(EM)) return null;
  return s.replace(/\s*\u2014\s*/g, " ").replace(/ {2,}/g, " ").trim();
}

async function main() {
  console.log("=== EM DASH STRIP - DATABASE ===\n");

  // POSTS
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
  for (const post of posts.rows as Record<string, any>[]) {
    const changes: Record<string, string> = {};
    for (const col of postCols) {
      const stripped = strip(post[col]);
      if (stripped !== null) changes[col] = stripped;
    }
    if (Object.keys(changes).length === 0) continue;

    const setClauses = Object.entries(changes)
      .map(([col, val]) => `${col} = '${val.replace(/'/g, "''")}'`)
      .join(", ");

    await db.execute(sql.raw(`UPDATE posts SET ${setClauses} WHERE id = ${post.id}`));
    postsUpdated++;
    console.log(`  post id=${post.id} - updated: ${Object.keys(changes).join(", ")}`);
  }
  console.log(`\nPosts rows updated: ${postsUpdated}`);

  // JOBS
  const jobScalarCols = ["title", "department", "location", "type", "level", "summary", "description"];

  const jobs = await db.execute(
    sql.raw(`SELECT id, title, department, location, type, level, summary, description, requirements FROM jobs`)
  );

  let jobsUpdated = 0;
  for (const job of jobs.rows as Record<string, any>[]) {
    const changes: Record<string, string> = {};

    for (const col of jobScalarCols) {
      const stripped = strip(job[col]);
      if (stripped !== null) changes[col] = stripped;
    }

    let reqClause = "";
    const rawReqs = job.requirements;
    if (Array.isArray(rawReqs)) {
      const mapped = rawReqs.map((r: string) => strip(r) ?? r);
      if (mapped.some((r: string, i: number) => r !== rawReqs[i])) {
        reqClause = `requirements = '${JSON.stringify(mapped).replace(/'/g, "''")}'`;
      }
    } else if (typeof rawReqs === "string" && rawReqs.includes(EM)) {
      try {
        const parsed: string[] = JSON.parse(rawReqs);
        const mapped = parsed.map((r: string) => strip(r) ?? r);
        reqClause = `requirements = '${JSON.stringify(mapped).replace(/'/g, "''")}'`;
      } catch {
        const stripped = strip(rawReqs);
        if (stripped) reqClause = `requirements = '${stripped.replace(/'/g, "''")}'`;
      }
    }

    if (Object.keys(changes).length === 0 && !reqClause) continue;

    const parts = [
      ...Object.entries(changes).map(([col, val]) => `${col} = '${val.replace(/'/g, "''")}'`),
      ...(reqClause ? [reqClause] : []),
    ];

    await db.execute(sql.raw(`UPDATE jobs SET ${parts.join(", ")} WHERE id = ${job.id}`));
    jobsUpdated++;
    console.log(`  job id=${job.id} (${job.title}) - updated: ${[...Object.keys(changes), ...(reqClause ? ["requirements"] : [])].join(", ")}`);
  }
  console.log(`\nJobs rows updated: ${jobsUpdated}`);
  console.log("\nDone.\n");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
