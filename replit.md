# Milton Hobbs — Website

## Project Overview
A full-stack React + Express website for Milton Hobbs, a boutique corporate law firm with offices in Dubai and Paris. Premium, dark-themed marketing site with smooth Framer Motion animations, bilingual EN/FR support, and a full careers module with job listings and CV upload applications.

## Architecture
- **Frontend**: React 18 with TypeScript, Vite, TailwindCSS, shadcn/ui, Framer Motion, Wouter routing
- **Backend**: Express.js with TypeScript (tsx), served on port 5000
- **Database**: PostgreSQL via Drizzle ORM (provisioned and active)
- **File Uploads**: multer (CV/résumé uploads stored in `/uploads/` directory)
- **Styling**: TailwindCSS v3 with custom brand colors

## Brand Colors
- Primary blue: `#001489`
- Gold accent: `#D4AF36`
- Dark navy: `#000A4F`
- Periwinkle: `#8099FF`

## Design System
- **Border-radius**: 0 (sharp square corners everywhere — geometric aesthetic)
- **Fonts**: Satoshi (headings, `.font-heading`), Plus Jakarta Sans (body, `.font-body`)
- **Tagline**: "Reason. Rigor. Resolution." / "Precision. Composure. Client-First."

## Project Structure
```
client/src/
  pages/
    Home.tsx               — Main homepage (assembles all sections)
    OurFirmPage.tsx        — Our Firm / About page with MissionOrbit SVG animation
    ImmigrationPage.tsx    — Immigration practice area page
    CareersPage.tsx        — Careers page: job listings + apply modal w/ CV upload
    ArticlePage.tsx        — Individual insight/article page
    not-found.tsx          — 404 page
  components/
    layout/
      Header.tsx           — Sticky header: logo, nav, EN/FR toggle, mobile menu, expertise mega-menu
    sections/
      Hero.tsx             — Animated geometric hero with headline + CTAs
      Differentiators.tsx  — 4-column boutique differentiators
      PracticeAreas.tsx    — Bento-box grid of 10 practice areas
      Insights.tsx         — 4 editorial article cards
      Footer.tsx           — Dual-city footer + contact + disclaimer
    ui/                    — shadcn/ui component library
  contexts/
    LanguageContext.tsx    — EN/FR language toggle and translations
  index.css                — Global styles + CSS variables
server/
  index.ts                 — Express app entry, middleware, port binding
  routes.ts                — API routes: /api/jobs, /api/jobs/:id/apply (multer)
  storage.ts               — DrizzleStorage (PostgreSQL CRUD for users, jobs, applications)
  db.ts                    — Drizzle + pg pool connection
shared/
  schema.ts                — Drizzle schema: users, jobs, applications + Zod types
uploads/                   — CV file storage (disk, via multer)
```

## Pages & Routes
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Full homepage |
| `/firm` | OurFirmPage | About the firm |
| `/careers` | CareersPage | Job listings + apply |
| `/expertise/immigration` | ImmigrationPage | Immigration practice area |
| `/insights/:slug` | ArticlePage | Article detail |

## API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/jobs` | List all active job listings |
| GET | `/api/jobs/:id` | Get single job detail |
| POST | `/api/jobs/:id/apply` | Submit application with CV (multipart/form-data) |

## Database Schema
- **jobs**: id, title, department, location, type, level, summary, description, requirements, is_active, created_at
- **applications**: id, job_id, name, email, phone, cover_letter, cv_filename, cv_path, created_at

## Careers Module
- 5 seeded job listings across Dubai and Paris
- Filter by location and department
- Apply modal with full job description + application form
- CV/résumé file upload (PDF, DOC, DOCX — max 10 MB)
- Applications stored in PostgreSQL with file saved to disk

## Figma Sources
- Brand Book: https://www.figma.com/design/Y5XBzCBRCZvxaKq1bzW0x7/Milton-Hobbs---Brand-Book
- Site Map: https://www.figma.com/design/4IdOLDC5H8si1PL1Q2B9JS/Milton-Hobbs--Site-Map

## Development
- Run: `npm run dev` (Express + Vite on port 5000)
- Build: `npm run build`
- DB push: `npm run db:push`
