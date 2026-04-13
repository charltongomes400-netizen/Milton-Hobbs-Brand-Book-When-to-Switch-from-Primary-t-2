# Milton Hobbs — Brand Guidelines for Web Development

> **This file is the single source of truth for all visual and tonal decisions on the Milton Hobbs website.**
> Read this file before generating or modifying ANY code.

---

## 1. Brand Overview

**Company:** Milton Hobbs — a boutique law firm operating across UAE, France, and the Gulf region.
**Languages:** English, French, Arabic.
**Industry:** Legal / Law Firm.

**Brand Promise:** Precision to complexity, composure to challenge, and a client-first mindset to every engagement.

**Core Values:** Trust, professionalism, sophistication, integrity, clarity, strategic thinking.

**Brand Personality:**
- 75% Serious / 25% Playful
- 75% Contemporary / 25% Classic
- 65% Approachable / 35% Elite
- 85% Mass Appeal / 15% Exclusive
- 70% Casual / 30% Elegant
- 60% Industrial / 40% Natural

**Tone of Voice:** Confident yet approachable. Intentional, composed, clear. Never flashy or aggressive. Every word should feel considered and purposeful. Use language that conveys authority without arrogance.

**Tagline / Motto:** Reason. Rigor. Resolution.

---

## 2. Colors

### 2.1 Primary Colors

| Name            | HEX       | RGB              | Role                                                  |
|-----------------|-----------|------------------|-------------------------------------------------------|
| Deep Blue       | `#001489` | 0, 20, 137       | **Main brand color.** Backgrounds, headers, CTAs, overlays. |
| Blue 80         | `#192B94` | 25, 43, 148      | Tint/shade variant of Deep Blue                       |
| Blue 60         | `#4A58AA` | 74, 88, 170      | Tint/shade variant of Deep Blue                       |
| Blue 40         | `#7A84BE` | 122, 132, 190    | Tint/shade variant of Deep Blue                       |
| Charcoal Black  | `#151515` | 21, 21, 21       | Depth, contrast, body text on light backgrounds       |
| Dark Gray       | `#2C2C2C` | 44, 44, 44       | Secondary text                                        |
| Mid Gray        | `#595959` | 89, 89, 89       | Tertiary text, captions                               |
| Light Gray      | `#848484` | 132, 132, 132    | Subtle text, borders, dividers                        |
| Pure White      | `#FFFFFF` | 255, 255, 255    | Backgrounds, text on dark surfaces                    |
| Off-White 1     | `#FEFEFE` | 254, 254, 254    | Subtle background variation                           |
| Off-White 2     | `#FCFCFC` | 252, 252, 252    | Section background alternation                        |
| Off-White 3     | `#F9F9F9` | 249, 249, 249    | Card/panel backgrounds                                |

### 2.2 Secondary Colors (Accent Use Only)

| Name       | HEX       | RGB              | Role                                                          |
|------------|-----------|------------------|---------------------------------------------------------------|
| Maroon     | `#6B1E3E` | 107, 30, 62      | Tradition, authority — legal seals, callout tags, quotes       |
| Maroon 80  | `#793451` | 121, 52, 81      | Lighter maroon tint                                           |
| Maroon 60  | `#955F75` | 149, 95, 117     | Lighter maroon tint                                           |
| Gold       | `#D4AF37` | 212, 175, 55     | Prestige — highlights, seals, infographics. Use sparingly.    |
| Gold 80    | `#D8B64A` | 216, 182, 74     | Lighter gold tint                                             |
| Gold 60    | `#DEC470` | 222, 196, 112    | Lighter gold tint                                             |
| Soft Blue  | `#8099FF` | 128, 153, 255    | Calming digital accent — icons, UI highlights, backgrounds    |
| Soft Blue 80 | `#8CA3FE` | 140, 163, 254  | Lighter soft blue tint                                        |
| Soft Blue 60 | `#A4B5FC` | 164, 181, 252  | Lighter soft blue tint                                        |

### 2.3 Color Usage Rules

**DO:**
- Use `#001489` (Deep Blue) or `#FFFFFF` (White) as the main background or accent.
- Pair white text/logo on Deep Blue backgrounds. Use blue/black text on white backgrounds.
- Use `#FCFCFC` / `#F9F9F9` for clean, spacious layouts and section alternation.
- Deep Blue overlays on images: 80–90% opacity + Multiply blend mode.
- White overlays on images: 70–90% opacity + Screen blend mode.

**DON'T:**
- Never use secondary colors (Maroon, Gold, Soft Blue) for main headers, body paragraphs, navigation, or backgrounds.
- Never use the logo in secondary colors.
- Never mix unrelated tones (e.g., blue with saturated reds). Stick with navy, charcoal, and soft neutrals.
- Never mix primary and secondary blues in the same layout.
- Never layer text on low-contrast combinations (e.g., gray text on white).

---

## 3. Typography

### 3.1 Font Families

| Role       | Font               | Fallback   | Google Fonts Available |
|------------|---------------------|------------|------------------------|
| Headings   | **Satoshi**         | Manrope    | Satoshi via Fontshare; Manrope via Google Fonts |
| Body       | **Plus Jakarta Sans** | Inter    | Yes — Google Fonts     |

**Logo typeface:** GIVENY (serif) — used ONLY for the logo. Download: https://www.dafont.com/giveny.font. Do NOT use GIVENY for website text.

### 3.2 Text Hierarchy

| Level         | Font               | Size (px)  | Line Height (px) | Weight     | Case           |
|---------------|---------------------|-----------|-------------------|------------|----------------|
| H1            | Satoshi             | 36–55     | 42–60             | Bold       | Title Case     |
| H2            | Satoshi             | 22–30     | 28–36             | Bold/Semi  | Title Case     |
| H3            | Satoshi             | 18–22     | 24–28             | Semi-Bold  | Title Case     |
| Body          | Plus Jakarta Sans   | 14–18     | 20–26             | Regular    | Sentence case  |
| Sub-body/Caption | Plus Jakarta Sans | 12–14    | 16–20             | Regular    | Sentence case  |

### 3.3 Typography Rules

- Letter-spacing (tracking): 0 for all levels.
- Line spacing (leading): 2–6px greater than the font size.
- Default alignment: **left-aligned**. Use center alignment only when left doesn't work visually.
- Headings: limit to 1–2 lines. Ideal structure: bold first line, supporting second line.
- Never break prepositions, names, or closely connected phrases across lines.
- All headings in Title Case. All body text in sentence case.

### 3.4 Typography Don'ts

- Don't use more than 3 lines in a heading.
- Don't use random/off-brand fonts.
- Don't break words mid-syllable across lines.
- Don't use low-contrast color combinations for text.
- Don't stretch or squish text.
- Don't use poor/mixed alignments (e.g., mixing center and left in the same text block).

---

## 4. Grid System

### Desktop
- Container: **1440px**
- Columns: **12**
- Margin: **100px** (each side)
- Gutter: **20px**
- Column width: ~125px (derived)

### Tablet
- Container: **780px**
- Columns: **6**
- Margin: **100px**
- Gutter: **20px**
- Column width: ~80px

### Mobile
- Container: **393px**
- Columns: **4**
- Margin: **20px**
- Gutter: **16px**
- Column width: ~76px

---

## 5. UI Components

### 5.1 Buttons

**Primary Button:**
- Background: `#001489`
- Text: `#FFFFFF`
- Hover: `#000E45` or `#7E98FF` (subtle tonal shift)
- Padding: 20px top/bottom, 40px left/right
- Icon size (if used): 24px

**Secondary Button (Outline):**
- Background: transparent
- Border/Stroke: `#001489`
- Text: `#001489`
- Hover: fill with `#001489`, text becomes `#FFFFFF`

**States:** Default, Hover, Active, Disabled (reduced opacity for disabled).

**Button formats:** Text-only, Icon + Text, Icon-only.

### 5.2 Icons

- Style: Minimalist, line-based (outlined, not filled).
- Stroke weight: **1.5px** (adjustable slightly for larger formats, never thick or overpowering).
- Minimum size: **16px**.
- Colors: Blue (`#001489`), White (`#FFFFFF`), Gray (`#595959`). Secondary brand colors acceptable sparingly.
- Icon backgrounds: Use abstract shapes (circle, square) as a base color for contrast when needed.

**Icon Don'ts:** Don't stretch, condense, use too-thin strokes, use random colors, remove elements, or add drop shadows.

### 5.3 Imagery Direction

**Do:**
- Highlight geometry of modern and historic architecture (lines, arches, staircases, corridors, textured walls).
- Capture subjects in natural light with a cinematic sensibility.
- Use shadow play, reflections, perspective, and depth.
- Use long exposures to suggest motion and progress.
- Keep imagery muted, tonal, and cohesive — warm neutrals, soft monochromes.
- A subtle blue wash across abstract or architectural photography reinforces the brand feel.

**Don't:**
- No overly staged, casual, or artificial compositions.
- No generic stock photos or cliché law-related imagery (gavels, scales, etc.).
- No excessively processed or heavily filtered visuals.
- No unbalanced lighting, harsh shadows, or unnatural color schemes.

---

## 6. Logo Usage (Web Context)

### Logo Versions
1. **Primary Logo** — stacked "MILTON / HOBBS" with monogram. Use whenever possible.
2. **Secondary Logo** — simplified version for flexible/compact layouts.
3. **Tertiary Logo** — horizontal "MILTON HOBBS" wordmark for headers, footers, navbars.

### Color Variations (all three logos)
- **Blue** version on white/light backgrounds (default).
- **White** version on blue/dark backgrounds.
- **Black** version for greyscale/monochrome contexts.

### Favicon / App Icon
- Simplified "MH" monogram.
- Must maintain brand-aligned colors and proportions.

### Logo Placement
- **Top-Center** — formal pages, letterhead-style layouts.
- **Top-Left** — standard web navigation (most common for website).
- **Middle-Center** — splash screens, hero sections, certificate pages.

### Logo Safe Space
- Minimum clear space around the logo = the height of the letter "O" in "Hobbs" on all four sides.
- This zone must be free of any text, images, or graphic elements.

### Logo Don'ts
- Never apply gradients, drop shadows, outlines, or random colors.
- Never stretch, rotate, or alter the letterforms.
- Never change the font of the logo.
- Never alter the color relationships within the logo.

---

## 7. Background Elements

The brand uses a signature **modular pixel grid pattern** with alternating opacities and shades of blue.

**On Blue backgrounds:** Primary blue base + pixel overlay. Accent tiles with lighter (`#0821B4`) or darker (`#010F5E`) blue shades.

**On White backgrounds:** Solid white base + pixel overlay. Accent tiles with lighter (`#E8E8E8`) or darker (`#C2C2C2`) gray shades.

**Image overlays (Blue):** Primary blue at 85% opacity, multiply blend. Some tiles use screen blend for highlights.

**Image overlays (White):** White at 75% opacity, normal blend. Some tiles filled with gray shades using multiply.

---

## 8. CSS Variables (Ready-to-Use)

```css
:root {
  /* Primary Colors */
  --color-deep-blue: #001489;
  --color-blue-80: #192B94;
  --color-blue-60: #4A58AA;
  --color-blue-40: #7A84BE;
  --color-charcoal: #151515;
  --color-dark-gray: #2C2C2C;
  --color-mid-gray: #595959;
  --color-light-gray: #848484;
  --color-white: #FFFFFF;
  --color-off-white-1: #FEFEFE;
  --color-off-white-2: #FCFCFC;
  --color-off-white-3: #F9F9F9;

  /* Secondary Colors (accent only) */
  --color-maroon: #6B1E3E;
  --color-gold: #D4AF37;
  --color-soft-blue: #8099FF;

  /* Button States */
  --color-btn-primary-bg: #001489;
  --color-btn-primary-text: #FFFFFF;
  --color-btn-primary-hover: #000E45;
  --color-btn-secondary-border: #001489;
  --color-btn-secondary-text: #001489;

  /* Typography */
  --font-heading: 'Satoshi', 'Manrope', sans-serif;
  --font-body: 'Plus Jakarta Sans', 'Inter', sans-serif;

  /* Spacing */
  --grid-max-width: 1440px;
  --grid-margin-desktop: 100px;
  --grid-margin-mobile: 20px;
  --grid-gutter: 20px;
  --grid-gutter-mobile: 16px;

  /* Button Dimensions */
  --btn-padding-x: 40px;
  --btn-padding-y: 20px;
  --btn-icon-size: 24px;
}
```

---

## 9. Quick Reference — Decision Checklist

| Question | Answer |
|----------|--------|
| What color for a page background? | `#FFFFFF`, `#FCFCFC`, `#F9F9F9`, or `#001489` |
| What color for headings? | `#001489` on light bg, `#FFFFFF` on dark bg |
| What color for body text? | `#151515` or `#2C2C2C` on light bg |
| What font for headings? | Satoshi (fallback: Manrope) |
| What font for body text? | Plus Jakarta Sans (fallback: Inter) |
| What color for primary buttons? | `#001489` bg, `#FFFFFF` text |
| What color for secondary buttons? | Transparent bg, `#001489` border + text |
| Can I use Gold or Maroon for a heading? | **No.** Accent use only (icons, highlights, callouts). |
| What icon style? | Outlined, 1.5px stroke, min 16px, brand colors only. |
| Default text alignment? | Left-aligned. Center only when left doesn't work. |
| Max heading lines? | 1–2 lines. Never more than 3. |
| Heading case? | Title Case |
| Body text case? | Sentence case |

---

## 10. Font Loading (for Replit / Web)

```html
<!-- Satoshi from Fontshare -->
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">

<!-- Plus Jakarta Sans from Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Fallbacks from Google Fonts (if Satoshi unavailable) -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```
