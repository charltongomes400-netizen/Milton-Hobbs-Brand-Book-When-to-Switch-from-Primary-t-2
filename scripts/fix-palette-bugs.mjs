import { readFileSync, writeFileSync } from "fs";

const fixes = {
  "client/src/pages/HomeEmerald.tsx": [
    // Fix duplicate style attr on the visual container
    [
      `style={{ backgroundColor: "#050E09" }} style={{ aspectRatio: "4/3" }}`,
      `style={{ backgroundColor: "#050E09", aspectRatio: "4/3" }}`,
    ],
    // Fix broken hover class on Differentiators CTA button
    [
      `bg-[#C8A84B] text-[#0A3020] text-xs tracking-[0.18em] uppercase font-bold px-7 py-4 hover: transition-colors" style={{ backgroundColor: "#B8943E" }}`,
      `bg-[#C8A84B] text-[#0A3020] text-xs tracking-[0.18em] uppercase font-bold px-7 py-4 hover:bg-[#B8943E] transition-colors"`,
    ],
    // Fix broken hover class on ContactForm submit button
    [
      `bg-[#C8A84B] text-[#0A3020] text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover: transition-colors disabled:opacity-60 disabled:cursor-not-allowed" style={{ backgroundColor: "#B8943E" }}`,
      `bg-[#C8A84B] text-[#0A3020] text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover:bg-[#B8943E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"`,
    ],
  ],
  "client/src/pages/HomeObsidian.tsx": [
    [
      `style={{ backgroundColor: "#080C16" }} style={{ aspectRatio: "4/3" }}`,
      `style={{ backgroundColor: "#080C16", aspectRatio: "4/3" }}`,
    ],
    [
      `bg-[#A8B4C0] text-[#141C2E] text-xs tracking-[0.18em] uppercase font-bold px-7 py-4 hover: transition-colors" style={{ backgroundColor: "#8E9FAD" }}`,
      `bg-[#A8B4C0] text-[#141C2E] text-xs tracking-[0.18em] uppercase font-bold px-7 py-4 hover:bg-[#8E9FAD] transition-colors"`,
    ],
    [
      `bg-[#A8B4C0] text-[#141C2E] text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover: transition-colors disabled:opacity-60 disabled:cursor-not-allowed" style={{ backgroundColor: "#8E9FAD" }}`,
      `bg-[#A8B4C0] text-[#141C2E] text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover:bg-[#8E9FAD] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"`,
    ],
  ],
  "client/src/pages/HomeClaret.tsx": [
    [
      `style={{ backgroundColor: "#18030B" }} style={{ aspectRatio: "4/3" }}`,
      `style={{ backgroundColor: "#18030B", aspectRatio: "4/3" }}`,
    ],
    [
      `bg-[#C9A84C] text-[#3B0A1E] text-xs tracking-[0.18em] uppercase font-bold px-7 py-4 hover: transition-colors" style={{ backgroundColor: "#B8943E" }}`,
      `bg-[#C9A84C] text-[#3B0A1E] text-xs tracking-[0.18em] uppercase font-bold px-7 py-4 hover:bg-[#B8943E] transition-colors"`,
    ],
    [
      `bg-[#C9A84C] text-[#3B0A1E] text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover: transition-colors disabled:opacity-60 disabled:cursor-not-allowed" style={{ backgroundColor: "#B8943E" }}`,
      `bg-[#C9A84C] text-[#3B0A1E] text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover:bg-[#B8943E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"`,
    ],
  ],
};

for (const [filePath, replacements] of Object.entries(fixes)) {
  let src = readFileSync(filePath, "utf8");
  for (const [find, replace] of replacements) {
    if (!src.includes(find)) {
      console.warn(`  ⚠ NOT FOUND in ${filePath}:\n    "${find}"`);
      continue;
    }
    src = src.replace(find, replace);
    console.log(`  ✓ Fixed: "${find.slice(0, 60)}..."`);
  }
  writeFileSync(filePath, src, "utf8");
  console.log(`✓ Wrote ${filePath}`);
}
console.log("Done.");
