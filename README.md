# Leadity Scraper

Single-page marketing site for **Leadity Scraper** — a SaaS that pulls high-intent mobile phone leads from Google Maps for SMS marketing teams.

Tagline: _"Reach Decision-Makers Directly."_

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm lint` — Next.js lint
- `pnpm typecheck` — strict TypeScript check

## Tech stack

- **Framework:** Next.js 15 (App Router) + React 19, TypeScript strict mode
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` tokens), light-only design system
- **Primitives:** shadcn/ui patterns (Button, Accordion, Tooltip, Badge) wrapping Radix
- **Icons:** `lucide-react` only
- **Animations:** `framer-motion` with `prefers-reduced-motion` honored everywhere
- **Fonts:** Inter (UI) + Instrument Serif italic (display accent), via `next/font/google`
- **Forms:** `react-hook-form` + `zod` (installed; the live form lives behind future order checkout)
- **SEO:** Next metadata API, OG image at `/opengraph-image`, JSON-LD `Product` schema in `app/layout.tsx`

File structure mirrors the spec exactly — every section lives in its own component under `components/`, kept under 250 lines.

## Design tokens

All colors, spacing, type, and breakpoints are exposed as CSS variables under `@theme` in `app/globals.css`. Tweak there, not in components.

The mint accent (`--brand-mint`) is intentionally rare — used only on the hero "New" badge, the popular-pricing tier, the guarantee seal, the verified pills in the hero table, and the comparison-table column highlight.

## What I'd build next

1. Wire `react-hook-form` + `zod` to a real checkout/waitlist endpoint (Stripe Checkout, Loops, etc.).
2. Add a thin Sanity or MDX-backed blog at `/blog` for SEO + outbound topical content.
3. Add Vercel Analytics + Plausible (or PostHog) and basic event tracking on hero CTA, pricing toggle, and FAQ opens.
4. Add a `/changelog` page powered by Markdown to keep affiliates informed of scraper improvements.
5. Add a `/affiliates` route + signup, gating the affiliate-price toggle behind a real cookie/JWT instead of a UI-only switch.
