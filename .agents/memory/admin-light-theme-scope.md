---
name: Admin/light surfaces need scoped theme override
description: Why clean light UI surfaces in this repo must redefine shadcn tokens locally, including portaled content
---

The site-wide shadcn CSS variables in `client/src/index.css` `:root` are set to a DARK burgundy/blue marketing theme (e.g. `--background`, `--input`, `--foreground` are dark). Any shadcn component (Input, Label, Dialog, Select, Switch, Badge) therefore renders dark by default — wrong for a clean white/light surface like the `/admin` dashboard.

**Rule:** For a light surface, define a scoped class (e.g. `.admin-theme`) that re-declares the shadcn HSL tokens to a light palette, and apply it to the surface root.

**Why:** Reusing shadcn components on a white card without overriding tokens produced burgundy input boxes and invisible (white-on-white) labels.

**How to apply:** Radix Dialog/Select/AlertDialog render their content in a PORTAL at document.body — outside your wrapper — so the scoped class must ALSO be added directly to each `DialogContent` / `SelectContent` / `AlertDialogContent` `className`, not just the page root. Otherwise modals/dropdowns inherit the dark root theme.
