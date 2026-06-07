---
name: Drizzle wraps DB errors — unique-violation code is on err.cause
description: How to detect PG constraint violations (e.g. 23505) when using Drizzle ORM in this repo
---

# Drizzle hides the pg error code behind `err.cause`

When a query fails, drizzle-orm throws a `DrizzleQueryError` whose message is
`"Failed query: ..."`. The original node-postgres `DatabaseError` (the one
carrying `.code`, e.g. `"23505"` for unique violation) is **not** the top-level
thrown object — it sits on `err.cause`.

**Rule:** to detect a Postgres error code, walk the `.cause` chain rather than
reading `err.code` directly.

```ts
function isUniqueViolation(err: unknown): boolean {
  let current: unknown = err;
  for (let i = 0; i < 5 && current; i++) {
    if (typeof current === "object" && (current as { code?: string }).code === "23505") return true;
    current = (current as { cause?: unknown }).cause;
  }
  return false;
}
```

**Why:** checking only `err.code` returns `undefined` on the wrapper, so a
duplicate-key insert/update silently fell through to the generic 500 handler
instead of returning 409. Confirmed shape: `DrizzleQueryError` (keys:
`query`, `params`, `cause`) → `cause` is `DatabaseError` with `code: "23505"`.

**How to apply:** any route that maps a DB constraint to an HTTP status
(409 conflict, etc.) must inspect `err.cause`, not the top-level error.
