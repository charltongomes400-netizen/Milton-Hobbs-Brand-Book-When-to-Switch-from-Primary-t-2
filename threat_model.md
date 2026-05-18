# Threat Model

## Project Overview

Milton Hobbs is a public-facing React + Express marketing site for a law firm. In production it serves static frontend assets and a small public API used by the careers feature. The only server-side stateful workflow currently exposed to the public internet is job application submission, including CV file uploads stored on the server filesystem and applicant data stored in PostgreSQL.

Production assumptions for this repository: Replit terminates TLS for deployed traffic, `NODE_ENV` is `production`, and mockup sandbox artifacts are not deployed. Security analysis should therefore focus on the Express server, shared schema, persistence layer, and client flows that reach production API routes.

## Assets

- **Applicant personal data** — names, email addresses, phone numbers, cover letters, and CV contents submitted through the careers flows. This is sensitive personal information and its compromise would expose candidates to privacy harm and the firm to regulatory and reputational risk.
- **Uploaded CV files on disk** — documents are stored in the server-side `uploads/` directory. Uncontrolled growth, unauthorized disclosure, or unsafe file handling would affect confidentiality and availability.
- **Application records in PostgreSQL** — the `applications` table links uploaded CV paths with applicant contact details. Database compromise would reveal the full applicant dataset.
- **Job listings and site content** — public content is lower sensitivity, but integrity matters because visitors rely on the site as an official firm presence.
- **Application secrets and infrastructure configuration** — `DATABASE_URL` and deployment configuration enable access to the backing database and runtime.

## Trust Boundaries

- **Browser to Express API** — all client input, especially multipart form-data for `/api/jobs/:id/apply` and `/api/spontaneous-apply`, crosses from an untrusted browser into trusted server code.
- **Express to filesystem** — multer writes uploaded files to the server’s `uploads/` directory. This boundary matters for file validation, storage exhaustion, and any future file retrieval or processing.
- **Express to PostgreSQL** — the application persists job and applicant records through Drizzle ORM. Query construction and response shaping must prevent unauthorized disclosure and injection.
- **Public internet to application submission workflow** — there is currently no authenticated/admin boundary in production routes; all careers endpoints are public. Abuse resistance therefore depends on server-side validation and rate controls rather than identity.
- **Production vs dev-only artifacts** — `artifacts/mockup-sandbox/`, Vite dev middleware, and build/generation scripts are out of scope unless separately shown to be reachable in production.

## Scan Anchors

- **Production entry points:** `server/index.ts`, `server/routes.ts`, `server/storage.ts`, `server/static.ts`, `shared/schema.ts`
- **Highest-risk code areas:** multer upload handling in `server/routes.ts`; applicant persistence in `server/storage.ts`; application schema in `shared/schema.ts`
- **Public surfaces:** `GET /api/jobs`, `GET /api/jobs/:id`, `POST /api/jobs/:id/apply`, `POST /api/spontaneous-apply`
- **Authenticated/admin surfaces:** none currently implemented in production
- **Usually ignore as dev-only:** `artifacts/mockup-sandbox/**`, `server/vite.ts`, one-off scripts under `scripts/` and `script/`

## Threat Categories

### Tampering

The public application endpoints accept attacker-controlled multipart form data and uploaded files. The server must treat all request fields, filenames, MIME metadata, and file contents as untrusted. Career application records MUST only be created from validated inputs, and file handling MUST not allow an attacker to write outside the intended upload area or smuggle unexpected active content through weak validation.

### Information Disclosure

The system stores applicant PII and filesystem paths for CV uploads. API responses, logs, and error handling MUST not expose applicant data, internal file paths, stack traces, or database details to unauthorized users. Uploaded CVs MUST not become web-accessible unless protected by deliberate authorization controls.

### Denial of Service

Because the submission endpoints are public and accept up to 10 MB file uploads, an attacker can repeatedly invoke storage-heavy operations without authentication. The application MUST enforce practical abuse controls such as request throttling, quotas, or equivalent protections so that unauthenticated users cannot exhaust disk, database capacity, or worker time by flooding upload endpoints.

### Elevation of Privilege

There are no user/admin roles exposed today, so classic privilege-escalation risk is limited. The main elevation concern in this project is whether unsafe file handling, injection, or future retrieval paths could let an attacker move from public submission access into filesystem or database access beyond intended scope. Database operations MUST remain parameterized, and file paths consumed by the server MUST stay under application control.
