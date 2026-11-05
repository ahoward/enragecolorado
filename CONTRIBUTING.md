# Contributing

The monument grows by contribution. Entries, corrections, and counter-arguments are all welcome.

## Add an assessment

Create `src/content/assessments/YYYY-MM-slug.md`:

```md
---
title: "Your title"
date: 2026-11-05
author: "a handle"
summary: "One or two sentences. Shown in lists and meta."
tags: ["election-2026", "colorado"]
draft: false            # omit or false to publish; files starting with _ are ignored
---

Your commentary in markdown.
```

Then open a pull request.

## House rules — show your work

These keep the record durable and worth citing:

1. **Link public sources.** Public budgets, public statements, filed votes, public filings. If a
   claim can't be sourced to the public record, it isn't ready.
2. **Public conduct, public money, public ideology.** Criticize what people did in public and with
   public consequence — not their private lives.
3. **Say which parts are opinion.** Argument and hyperbole are welcome; label them as argument.
4. **Be accurate before loud.** A correct, cited entry outlasts a hot one.
5. **Corrections are first-class.** Found an error? Open a PR or an issue. The record self-heals.

## Develop

```sh
npm install
npm run dev
npm run build
```

## Licensing

By contributing content you agree to publish it under **CC BY-SA 4.0** (see `LICENSE-content.md`).
Code contributions are MIT (see `LICENSE`).
