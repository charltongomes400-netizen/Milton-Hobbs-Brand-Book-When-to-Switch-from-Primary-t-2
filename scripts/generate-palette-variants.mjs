import { readFileSync, writeFileSync } from "fs";

// ── Source files ─────────────────────────────────────────────────────────────
const hero = readFileSync("client/src/components/sections/Hero.tsx", "utf8");
const diff = readFileSync("client/src/components/sections/Differentiators.tsx", "utf8");
const prac = readFileSync("client/src/components/sections/PracticeAreas.tsx", "utf8");
const ins  = readFileSync("client/src/components/sections/Insights.tsx", "utf8");
const cont = readFileSync("client/src/components/sections/ContactForm.tsx", "utf8");
const foot = readFileSync("client/src/components/sections/Footer.tsx", "utf8");

// Strip per-file import lines (we provide them at page level)
function stripImports(src) {
  const lines = src.split("\n");
  let inImport = false;
  const out = [];
  for (const line of lines) {
    const trimmed = line.trimStart();
    if (trimmed.startsWith("import ") && trimmed.includes(" from ")) {
      inImport = true;
    }
    if (inImport) {
      // skip until the import statement ends (semi-colon or closing brace+from)
      if (line.includes(";")) { inImport = false; }
      continue;
    }
    out.push(line);
  }
  return out.join("\n").trimStart();
}

// Strip individual export keywords so functions become internal helpers
function stripExports(src) {
  return src.replace(/^export function /gm, "function ");
}

function prep(src) {
  return stripExports(stripImports(src));
}

// ── Palette swaps ─────────────────────────────────────────────────────────────
// [find, Emerald, Obsidian, Claret]
// Ordered longest/most-specific first to avoid partial matches
const swaps = [
  ["#8099FF", "#5AAA82", "#8A9BB8", "#B07890"],
  ["#E8C97E", "#DCC06A", "#C8D0D8", "#DCC070"],
  ["#C9A030", "#B8943E", "#8E9FAD", "#B8943E"],
  ["#C4A030", "#B8943E", "#8E9FAD", "#B8943E"],
  ["#D4AF36", "#C8A84B", "#A8B4C0", "#C9A84C"],
  ["#000335", "#020904", "#030508", "#0C0106"],
  ["#000A3D", "#040C08", "#06090F", "#120209"],
  ["#000A4F", "#050E09", "#080C16", "#18030B"],
  ["#001070", "#071E14", "#0D1220", "#2A0615"],
  ["#001489", "#0A3020", "#141C2E", "#3B0A1E"],
  ["#051FA7", "#0D5235", "#1C283D", "#6A1535"],
  ["#0028B8", "#0F6844", "#253347", "#7A1A40"],
  ["#EEF2FB", "#EDF5F1", "#F2F3F5", "#FDF0F4"],
  ["#E5EAF4", "#E0EDE8", "#E2E5EC", "#F5E5EC"],
  // case variants just in case
  ["#001489".toLowerCase(), "#0A3020", "#141C2E", "#3B0A1E"],
];

function applyPalette(src, idx) {
  let out = src;
  for (const [find, ...replacements] of swaps) {
    // case-insensitive global replace
    const re = new RegExp(find.replace(/#/g, "\\#"), "gi");
    out = out.replace(re, replacements[idx]);
  }
  return out;
}

// ── Shared imports ────────────────────────────────────────────────────────────
const SHARED_IMPORTS = `import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";
import { articles } from "@/data/articles";
import imgCorp    from "@assets/stock_images/corporate_commercial.jpg";
import imgEstate  from "@assets/stock_images/real_estate.jpg";
import imgLitig   from "@assets/stock_images/litigation.jpg";
import imgArb     from "@assets/stock_images/arbitration.jpg";
import imgEmploy  from "@assets/stock_images/employment.jpg";
import imgBank    from "@assets/stock_images/banking_finance.jpg";
import imgTax     from "@assets/stock_images/tax_planning.jpg";
import imgImmig   from "@assets/stock_images/immigration.jpg";
import imgIp      from "@assets/stock_images/intellectual_property.jpg";
import imgTech    from "@assets/stock_images/technology_startups.jpg";
import imgCompliance     from "@assets/generated_images/insight-compliance.png";
import imgFamilyBusiness from "@assets/generated_images/insight-family-business.png";
import imgDigitalPrivacy from "@assets/generated_images/insight-digital-privacy.png";
import imgMA             from "@assets/generated_images/insight-ma-structuring.png";
`;

// ── Generate ──────────────────────────────────────────────────────────────────
const PALETTES = [
  { name: "Emerald",  bgColor: "#0A3020" },
  { name: "Obsidian", bgColor: "#141C2E" },
  { name: "Claret",   bgColor: "#3B0A1E" },
];

const preppedSections = [hero, diff, prac, ins, cont, foot].map(prep).join("\n\n// ─────────────────────────────────────────────────\n\n");

PALETTES.forEach(({ name, bgColor }, idx) => {
  const palettedBody = applyPalette(preppedSections, idx);
  const slug = `home-v${5 + idx}`;
  const wrapBg = bgColor;

  const file = `${SHARED_IMPORTS}
${palettedBody}

function ${name}Inner() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "${wrapBg}" }} data-testid="${slug}-page">
      <Header />
      <main>
        <Hero />
        <Insights />
        <Differentiators />
        <PracticeAreas />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}

export default function ${name}() {
  return (
    <LanguageProvider>
      <${name}Inner />
    </LanguageProvider>
  );
}
`;

  const outPath = `client/src/pages/Home${name}.tsx`;
  writeFileSync(outPath, file, "utf8");
  console.log(`✓ Wrote ${outPath}`);
});

console.log("Done.");
