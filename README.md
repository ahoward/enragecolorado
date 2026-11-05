# enragecolorado.org

A public, independently-maintained **critical mirror** on techno-authoritarian, venture-funded
politics as it shows up in Colorado. Built to be a **standing monument** that the public adds to
over time, not a one-off post.

## Stack

| piece | choice |
|---|---|
| framework | [Astro](https://astro.build) (static output) |
| content / CMS | Astro **Content Collections** — file-based; each entry is a markdown file |
| host | **Cloudflare Pages** (serves `./dist` directly; no adapter needed) |
| license | content **CC BY-SA**, code MIT |

The "CMS" is the filesystem: `src/content/assessments/*.md`. Add a file, open a PR, the monument
grows. An optional admin UI ([Keystatic](https://keystatic.com)) is tracked as an issue, not a
dependency — markdown + git is the source of truth.

## Develop

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # -> ./dist  (static)
npm run preview
```

Requires Node ≥ 22.

## Add an assessment

Create `src/content/assessments/YYYY-MM-slug.md`:

```md
---
title: "Your title"
date: 2026-11-05
author: "a handle — not your legal name"
summary: "One or two sentences. Shown in lists and meta."
tags: ["election-2026", "colorado"]
draft: false            # omit or false to publish; files starting with _ are ignored
---

Your commentary in markdown. House rule: **show your work.** Opinion and hyperbole are welcome;
fabricated facts about private individuals are not. Link public sources.
```

Open a pull request. Corrections and counter-arguments are entries too.

## Deploy (Cloudflare Pages)

Static build, no server. Two ways:

- **Dashboard (recommended):** connect this repo in Cloudflare Pages →
  build command `npm run build`, output directory `dist`, Node 22. Add the custom domain
  `enragecolorado.org` in the Pages project.
- **CLI:** `npx wrangler pages deploy dist` (after `npm run build`).

Security headers ship in `public/_headers`.

## Governance

A monument kept by the public. Entries are owned by their authors under CC BY-SA; the record is
collective. Be accurate before loud. Bring receipts.
