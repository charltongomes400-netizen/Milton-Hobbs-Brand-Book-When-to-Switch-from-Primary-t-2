# Milton Hobbs - Brand Book Site

## Project Overview
A full-stack React + Express web application imported from Figma, representing the Milton Hobbs brand book and site. The project uses a client/server architecture with Vite for the frontend and Express for the backend.

## Architecture
- **Frontend**: React 18 with TypeScript, Vite, TailwindCSS, shadcn/ui components, Wouter for routing
- **Backend**: Express.js with TypeScript (tsx), served on port 5000
- **Database**: PostgreSQL via Drizzle ORM (configured but not yet used)
- **Styling**: TailwindCSS v3 with custom brand colors (blue-1, blue-5, neutral-colorswhite)

## Project Structure
```
client/         - React frontend
  src/
    pages/      - Page components (generated from Figma)
    components/ - UI components (shadcn/ui)
    hooks/      - Custom React hooks
    lib/        - Utilities and query client
server/         - Express backend
  index.ts      - Server entry point
  routes.ts     - API routes
  storage.ts    - Data storage interface
shared/         - Shared types/schema between client and server
script/         - Build scripts
```

## Key Pages
- `/` - WhenToSwitchFrom page (brand book content from Figma)

## Brand Colors
- `--blue-1`: rgba(231, 234, 255, 1) - Light blue
- `--blue-5`: rgba(50, 77, 221, 1) - Primary blue
- `--neutral-colorswhite`: rgba(255, 255, 255, 1) - White

## Fonts
- **Satoshi-Medium**: Commercial font used for headings, loaded via local() fallback
- **Plus Jakarta Sans**: Loaded from Google Fonts, used for body text

## Development
- Run: `npm run dev` (starts Express + Vite dev server on port 5000)
- Build: `npm run build`
- Database: `npm run db:push` to sync schema

## Figma Source
- Brand Book: https://www.figma.com/design/Y5XBzCBRCZvxaKq1bzW0x7/Milton-Hobbs---Brand-Book
- Site Map: https://www.figma.com/design/4IdOLDC5H8si1PL1Q2B9JS/Milton-Hobbs--Site-Map
