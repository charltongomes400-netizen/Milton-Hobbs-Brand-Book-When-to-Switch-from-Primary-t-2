---
name: backend has no hot reload
description: Why server/schema changes need a manual workflow restart even though the frontend hot-reloads
---

# The dev server does not watch backend files

The `dev` script runs the Express app via plain `tsx server/index.ts` (no `tsx watch`). Vite HMR only reloads the **frontend**. Any change to `server/**`, `shared/schema.ts`, or storage/routes is NOT picked up until the `Start application` workflow is restarted.

**Symptom seen:** a brand-new API route returned the Vite `index.html` (route "not found" → SPA catch-all), and select responses were missing a freshly added Drizzle column (field came back `undefined`). Both were just the old server still running.

**Why:** confusing because frontend edits appear instantly, so it's easy to assume the backend reloads too. It does not.

**How to apply:** After editing any server-side file or the shared schema (and after `npm run db:push`), restart the `Start application` workflow before testing the API. If an endpoint returns HTML or a column reads as `undefined`, suspect a stale server first.
