---
name: server entry module side effects
description: Why standalone-runnable server scripts must not import from server/index.ts
---

# server/index.ts runs the server on import

`server/index.ts` starts Express (top-level IIFE + listen) as a side effect of being imported.

**Rule:** Any module that is also meant to run standalone (e.g. a seed script invoked via `tsx server/seedAdmin.ts`) must NOT import anything from `server/index.ts` — doing so boots the whole web server when you only wanted the script. Duplicate small helpers (like `log`) or use `console.log` instead.

**Why:** seedAdmin originally imported `log` from index; running it standalone would have launched the server. Caught before it shipped.

**How to apply:** When adding a CLI/seed/migration script under `server/`, pull shared helpers from leaf modules (`server/db.ts`, `server/storage.ts`, `server/auth.ts`), never from `index.ts`.
