#!/usr/bin/env node
/**
 * Strips em dashes (U+2014 —) from all client-facing text in client/src.
 * Rule: /\s*—\s*/g → single space, then collapse multiple spaces, then trim string edges.
 * Skips: regex literals, JS line comments, JSX block comments.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const EM = "\u2014";

function stripEmDash(text) {
  return text.replace(/\s*\u2014\s*/g, " ").replace(/ {2,}/g, " ");
}

function processFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");

  // We'll process the file preserving:
  //   1. Regex literals  /...—.../  → placeholder
  //   2. JSX block comments  {/* ... */}  → placeholder (not client-facing)
  //   3. JS line comments  //...  → placeholder (not client-facing)
  // Then apply em-dash strip to the rest, then restore.

  const placeholders = [];
  let idx = 0;

  function protect(match) {
    const key = `\x00PLACEHOLDER_${idx++}\x00`;
    placeholders.push({ key, value: match });
    return key;
  }

  let processed = original;

  // 1. Protect JSX block comments  {/* ... */}  (possibly multiline)
  processed = processed.replace(/\{\/\*[\s\S]*?\*\/\}/g, protect);

  // 2. Protect JS/TS line comments  // ...  (to end of line)
  processed = processed.replace(/\/\/[^\n]*/g, protect);

  // 3. Protect regex literals  /pattern/flags  — heuristic: / not preceded by * or space-as-division
  //    Match / ... / with no unescaped newline inside, preceded by =, (, ,, !, &, |, ?, :, [, {, ;, return, typeof
  processed = processed.replace(
    /(?<=[=(!,&|?:[\{;]\s{0,10}|return\s|typeof\s)\/(?:[^\\/\n]|\\.)+\/[gimsuy]*/g,
    protect
  );

  // Now apply em-dash strip to remaining content
  if (processed.includes(EM)) {
    processed = processed.replace(/\s*\u2014\s*/g, " ").replace(/ {2,}/g, " ");
  }

  // Restore placeholders
  for (const { key, value } of placeholders) {
    processed = processed.replace(key, value);
  }

  if (processed === original) return 0;

  const count = (original.match(/\u2014/g) || []).length;
  const remaining = (processed.match(/\u2014/g) || []).length;
  const changed = count - remaining;

  fs.writeFileSync(filePath, processed, "utf8");
  return changed;
}

// Collect all .ts / .tsx files under client/src
const files = execSync("find client/src -type f \\( -name '*.ts' -o -name '*.tsx' \\)")
  .toString()
  .trim()
  .split("\n")
  .filter(Boolean);

let total = 0;
const report = [];

for (const f of files) {
  const content = fs.readFileSync(f, "utf8");
  const count = (content.match(/\u2014/g) || []).length;
  if (count === 0) continue;

  const changed = processFile(f);
  report.push({ file: f, before: count, changed });
  total += changed;
}

console.log("\n=== EM DASH STRIP REPORT (source files) ===\n");
for (const r of report) {
  console.log(`  ${r.changed} stripped  (${r.before} found)  ${r.file}`);
}
console.log(`\nTotal em dashes removed from source: ${total}`);

// Verify the regex in CareersPage.tsx is intact
const careersContent = fs.readFileSync("client/src/pages/CareersPage.tsx", "utf8");
if (careersContent.includes("/^[-\u2013\u2014]")) {
  console.log("\n✓ CareersPage.tsx regex literal intact");
} else if (careersContent.includes("/^[-\u2013 ]")) {
  console.warn("\n⚠ CareersPage.tsx regex literal was corrupted — fixing...");
  const fixed = careersContent.replace(/\/\^\[-\u2013 \]/, "/^[-\u2013\u2014]");
  fs.writeFileSync("client/src/pages/CareersPage.tsx", fixed, "utf8");
  console.log("  Fixed.");
}
