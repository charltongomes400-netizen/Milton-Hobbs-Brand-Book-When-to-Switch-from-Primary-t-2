#!/usr/bin/env node
// Strips em dashes (U+2014) from all client-facing text in client/src.
// Replacement rule: em dash plus surrounding whitespace becomes one space.
// Skips: regex literals, JS line comments, JSX block comments.

import fs from "fs";
import { execSync } from "child_process";

const EM = "\u2014";

function processFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  if (!original.includes(EM)) return 0;

  const placeholders = [];
  let idx = 0;

  function protect(match) {
    const key = `\x00P${idx++}\x00`;
    placeholders.push({ key, value: match });
    return key;
  }

  let processed = original;

  // Protect JSX block comments  {/* ... */}
  processed = processed.replace(/\{\/\*[\s\S]*?\*\/\}/g, protect);

  // Protect JS/TS line comments  // ... to end of line
  processed = processed.replace(/\/\/[^\n]*/g, protect);

  // Protect regex literals (heuristic: preceded by operator/keyword chars)
  processed = processed.replace(
    /(?<=[=(,!&|?:[\{;]\s{0,10}|return\s|typeof\s)\/(?:[^\\/\n]|\\.)+\/[gimsuy]*/g,
    protect
  );

  // Strip em dashes from remaining content
  if (processed.includes(EM)) {
    processed = processed.replace(/\s*\u2014\s*/g, " ").replace(/ {2,}/g, " ");
  }

  // Restore placeholders
  for (const { key, value } of placeholders) {
    processed = processed.split(key).join(value);
  }

  if (processed === original) return 0;

  const before = (original.match(/\u2014/g) || []).length;
  const after = (processed.match(/\u2014/g) || []).length;
  const changed = before - after;

  fs.writeFileSync(filePath, processed, "utf8");
  return changed;
}

const files = execSync("find client/src -type f \\( -name '*.ts' -o -name '*.tsx' \\)")
  .toString().trim().split("\n").filter(Boolean);

let total = 0;
const report = [];

for (const f of files) {
  const content = fs.readFileSync(f, "utf8");
  const count = (content.match(/\u2014/g) || []).length;
  if (count === 0) continue;
  report.push({ file: f, before: count, changed: 0 });
}

console.log("\n=== EM DASH COUNTS PER FILE (before) ===\n");
for (const r of report) {
  console.log(`  ${String(r.before).padStart(3)}  ${r.file}`);
}

for (const r of report) {
  r.changed = processFile(r.file);
  total += r.changed;
}

console.log("\n=== EM DASH STRIP RESULTS ===\n");
for (const r of report) {
  console.log(`  ${String(r.changed).padStart(3)} stripped of ${r.before}  ${r.file}`);
}
console.log(`\nTotal em dashes removed from source files: ${total}`);

// Verify the regex in CareersPage.tsx is intact
const careersContent = fs.readFileSync("client/src/pages/CareersPage.tsx", "utf8");
if (careersContent.includes("/^[-\u2013\u2014]")) {
  console.log("\nCareersPage.tsx regex literal: OK (untouched)");
} else if (careersContent.includes("/^[-\u2013 ]")) {
  console.warn("\nCareersPage.tsx regex was corrupted - restoring...");
  const fixed = careersContent.replace(/\/\^\[-\u2013 \]/, "/^[-\u2013\u2014]");
  fs.writeFileSync("client/src/pages/CareersPage.tsx", fixed, "utf8");
  console.log("  Restored.");
}
