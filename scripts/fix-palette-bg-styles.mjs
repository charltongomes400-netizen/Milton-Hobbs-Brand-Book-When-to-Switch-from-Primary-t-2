import { readFileSync, writeFileSync } from "fs";

// Replace bg-[#hex] Tailwind classes with equivalent inline style attribute.
// This targets only the section/div elements that use bg-[#hex] as backgrounds.
// The pattern: className="... bg-[#RRGGBB] ..." → remove bg-[#hex] from className and add style={{ backgroundColor: "#RRGGBB" }}
// Since these elements may already have style={{ ... }}, we handle both cases.

const files = [
  "client/src/pages/HomeEmerald.tsx",
  "client/src/pages/HomeObsidian.tsx",
  "client/src/pages/HomeClaret.tsx",
];

for (const filePath of files) {
  let src = readFileSync(filePath, "utf8");

  // Match className strings that contain bg-[#RRGGBB] and extract the hex value
  // Replace by removing bg-[#hex] from className and injecting style={{ backgroundColor: "hex" }}
  // Only target elements that are a section, div, or footer starting a JSX element
  src = src.replace(
    /className="([^"]*)\bbg-\[#([0-9A-Fa-f]{3,6})\]\s*([^"]*)"/g,
    (match, before, hex, after) => {
      const cleanBefore = before.trimEnd();
      const cleanAfter = after.trimStart();
      const newClass = [cleanBefore, cleanAfter].filter(Boolean).join(" ").trim();
      return `className="${newClass}" style={{ backgroundColor: "#${hex}" }}`;
    }
  );

  writeFileSync(filePath, src, "utf8");
  console.log(`✓ Fixed ${filePath}`);
}
