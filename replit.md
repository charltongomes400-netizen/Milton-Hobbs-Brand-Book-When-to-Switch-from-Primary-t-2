# Milton Hobbs — Website

## Project Overview
A full-stack React + Express website for Milton Hobbs, a boutique corporate law firm bridging Europe and the GCC. The homepage is a premium, dark-themed marketing site with smooth Framer Motion animations.

## Architecture
- **Frontend**: React 18 with TypeScript, Vite, TailwindCSS, shadcn/ui, Framer Motion, Wouter routing
- **Backend**: Express.js with TypeScript (tsx), served on port 5000
- **Database**: PostgreSQL via Drizzle ORM (configured, not yet used)
- **Styling**: TailwindCSS v3 with custom brand colors

## Design System
- **Background**: `#060B1F` (deep navy) / `#0A0F2E` (lighter navy for alternating sections)
- **Gold accent**: `#C9A84C` / `#E8C77A` (hover state)
- **Text**: White (#FFFFFF) / White/60, White/40 for muted
- **Border-radius**: 0 (sharp square corners everywhere — geometric aesthetic)
- **Font**: Inter (primary), Plus Jakarta Sans (fallback)
- **Tagline**: "Reason. Rigor. Resolution."

## Project Structure
```
client/src/
  pages/
    Home.tsx               — Main homepage (assembles all sections)
    WhenToSwitchFrom.tsx   — Original Figma import (legacy)
    not-found.tsx          — 404 page
  components/
    layout/
      Header.tsx           — Sticky header: logo, nav, EN/FR toggle, mobile menu
    sections/
      Hero.tsx             — Animated geometric hero with headline + CTAs
      Differentiators.tsx  — 4-column grid: boutique model differentiators
      PracticeAreas.tsx    — Bento-box grid of 10 practice areas
      Insights.tsx         — 4 editorial article cards
      Footer.tsx           — Dual-city footer + contact + disclaimer
    ui/                    — shadcn/ui component library
  index.css                — Global styles + CSS variables
server/
  index.ts, routes.ts, storage.ts
shared/
  schema.ts
```

## Homepage Sections
1. **Header** — Fixed/sticky, transparent → solid on scroll, EN/FR language toggle
2. **Hero** — Dark navy + animated rotating wireframe squares, headline, two CTAs
3. **Differentiators** — Boutique model / Trilingual / Cross-border / Savoir-faire
4. **Practice Areas** — 10 areas in asymmetric bento grid with hover border-trace animation
5. **Insights** — 4 thought leadership article cards
6. **Footer** — Dubai + Paris offices, contact info, legal disclaimer

## Key Interactions
- **Square border-tracing on hover**: Gold (#C9A84C) 1px line traces around cards
- **Hero geometry**: Rotating wireframe squares using Framer Motion
- **Scroll-triggered animations**: Sections fade/slide in on viewport entry
- **Mobile menu**: Hamburger toggle with animated collapse

## Figma Sources
- Brand Book: https://www.figma.com/design/Y5XBzCBRCZvxaKq1bzW0x7/Milton-Hobbs---Brand-Book
- Site Map: https://www.figma.com/design/4IdOLDC5H8si1PL1Q2B9JS/Milton-Hobbs--Site-Map

## Development
- Run: `npm run dev` (Express + Vite on port 5000)
- Build: `npm run build`
