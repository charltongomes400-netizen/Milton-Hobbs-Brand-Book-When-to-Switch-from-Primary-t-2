---
name: Express route with middleware widens req.params to string | string[]
description: TS quirk in this repo where parseInt(req.params.id) errors only on routes that have middleware before the handler
---

# Middleware-chained routes widen `req.params.id` typing

In this repo's Express + @types setup, a route handler registered **with one or
more middleware before it** (e.g. `app.patch(path, requireAdmin, handler)` or
`app.post(path, rateLimit, upload.single(), handler)`) infers `req.params[key]`
as `string | string[]`, so `parseInt(req.params.id)` raises
TS2345 ("string | string[] not assignable to string").

Routes with a **single** handler (`app.get(path, handler)`) do **not** hit this —
`req.params.id` stays `string`.

**Fix:** cast at the call site: `parseInt(req.params.id as string, 10)`.

**Why:** this is purely a type-checker quirk from overload resolution when extra
handlers are present; it does not affect runtime. The dev workflow (tsx) and the
prod build (vite + esbuild) do **not** type-check, so these errors never break
the build and can sit latent (the careers `/api/jobs/:id/apply` route carried one
unnoticed). Run `npx tsc --noEmit` to surface them.

**How to apply:** when adding `:id` routes guarded by middleware, cast the param
before `parseInt`. Don't be alarmed that pre-existing middleware routes show the
same error — it predates new work.
