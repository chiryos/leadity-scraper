# iorshik.md — Leadity Scraper Internal Memory

> **Purpose:** single-source context for every future Claude session on this
> project. Read top-to-bottom and you know everything — the product, the
> codebase, the design system, the user's voice, the decisions made, and
> what's left to do. When in doubt, trust this file.

---

## 1. Product & Business Context

**Product:** Leadity Scraper.
A SaaS that scrapes **business-owners' mobile phone numbers** directly from
Google Maps listings, classifies them by carrier (mobile vs VOIP vs
landline), and ships a clean CSV ready to drop into an SMS / cold-call
stack.

**Target buyer:**
- Cold-SMS / cold-call outbound agencies
- Solo operators running outbound campaigns (roofing, dentists, HVAC,
  solar, kitchen-remodeling niches are the common cases)
- Performance lead-gen agencies running multi-client, multi-niche campaigns
- Users that have **outgrown** stitching Outscraper + Clearoutphone + a
  dedupe sheet

**NOT for:**
- D2C / consumer-list buyers (we only carry business-owner mobiles)
- Email enrichment customers (we only do phones)
- Non-US geographies (US-only, 32,741 ZIPs)
- One-off batch buyers (built for recurring scrapes)

**Core promises:**
- 95% mobile, 5% other — carrier-verified
- 1,255+ business categories covered, 32,741 ZIPs, full US
- Refund + 50% bonus leads on anything that doesn't text
- One product, one price, one refund policy (no tool-stacking)
- Real human in chat (no ticket queues)

**Pricing tiers (from `lib/plans.ts`):**
| Plan | Standard | Affiliate (−40%) | Mobiles | Popular |
|---|---|---|---|---|
| Starter | $59 | $35 | 2,000 | no |
| Growth | $139 | $83 | 5,000 | **YES** |
| Scale | $229 | $137 | 10,000 | no |

Affiliate pricing = "for Aditya's community members" (referenced in the
toggle tooltip). Toggle flips prices and reveals a "Up to −40% off when
you invite your friends" banner above the cards.

**Business model / urgency:**
The site has a time-delayed popup (6.5s after load, localStorage
dismissed): "Sign Up NOW and get 300 Owners Mobile Phones for FREE."

**Deployment:**
- Repo: `github.com/chiryos/leadity-scraper`
- Branch: `main` (push direct, no PRs — Vercel auto-deploys)
- URL: `leadity.vercel.app`

---

## 2. Tech Stack

```json
Next.js 15.5.15 (App Router) — NOT 16 (we downgraded; 16's opengraph-image broke)
React 19
TypeScript (strict)
Tailwind CSS v4 — CSS-first @theme tokens, no tailwind.config.ts
shadcn/ui primitives wrapping Radix (Accordion, Tooltip, Button, Badge)
framer-motion — all animation (Reveal, StaggerGroup, AnimatePresence, layout, layoutId)
Lenis 1.3.23 — inertial smooth-scroll, DESKTOP ONLY (disabled on (hover: none))
lucide-react — every icon
next/image — every raster asset
```

No extra design libs. No @radix-ui/themes. No Framer Studio / Motion One.

---

## 3. Repository & Workflow

**Absolute path** to the active worktree (this is THE code that ships):
```
/Users/chiriacion/Desktop/Claude Max/.claude/worktrees/festive-tharp/leadity/
```

> `.claude/` is a **hidden** folder on macOS — Finder won't show it unless
> `Cmd+Shift+.` is pressed or the user uses `Cmd+Shift+G` with the full
> path. The user got confused about this once — if asked "where are the
> files", remind them.

Other `Leadity*` folders on Desktop (`Leadity Scrapper`, `leadity-website`,
`Leadity Claude/…`) are **old copies or asset folders, NOT git repos**.
Only the `.claude/worktrees/festive-tharp/leadity/` path is live.

**Shell behaviour:**
The worktree at `/Users/chiriacion/Desktop/Claude Max/.claude/worktrees/cool-curran-0eb1c2/`
is a DIFFERENT project (`instagram-story-creator`). The Claude bash tool
auto-resets CWD to `cool-curran-0eb1c2` between calls, so every single
Leadity bash command **must** `cd` back explicitly:

```bash
cd "/Users/chiriacion/Desktop/Claude Max/.claude/worktrees/festive-tharp/leadity" && <command>
```

**Workflow:**
1. Edit files.
2. `npx tsc --noEmit -p .` to typecheck. Silence = clean.
3. `git add -A && git commit -m "<multi-line message>"` — always
   multi-line, always explain *what* and *why*.
4. `git push origin HEAD` (pushes to `main` on the remote).
5. Vercel auto-deploys in ~60s.
6. Tell user to hard-refresh (`Cmd+Shift+R`) if they say "nothing
   changed" — it's nearly always browser cache.

**Commit message style:**
```
feat/fix/style/copy/redesign(scope): one-line summary

Body with context. Explain the why, not just the what. Reference the
user's exact request if relevant. Multi-paragraph OK.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

Latest commit as of this memory dump: `8e2fcb9`
(feat: remove qualifier, full glass coverage, full-width CTA section).

---

## 4. File Structure

```
leadity/
├── app/
│   ├── globals.css          ← @theme tokens + all utility classes (.glass-card etc.)
│   ├── layout.tsx           ← body bg-white, Inter + Instrument Serif fonts, JSON-LD
│   ├── opengraph-image.tsx  ← satori-rendered OG; gradient must be split into
│   │                          backgroundColor + backgroundImage separately
│   │                          (satori rejects shorthand with gradient + color)
│   └── page.tsx             ← Nav · Hero · Showcase · Features · Comparison
│                              · Pricing · Guarantee · Testimonials · FAQ
│                              · CTA · Footer · SignupPopup
├── components/
│   ├── nav.tsx              ← sticky top-0, glass backdrop, mobile drawer island
│   ├── hero.tsx             ← 100svh-72 min-height, eyebrow+H1+sub+CTAs+trust row
│   ├── showcase.tsx         ← "A look inside" — 5 glass step frames with screenshots
│   ├── features.tsx         ← 6 glass-card feature tiles, colored badges
│   ├── comparison.tsx       ← Ours vs Theirs cards + TierPills overlay
│   ├── pricing.tsx          ← desktop 3-card grid (glass-brand Growth) + mobile
│   │                          accordion + Standard/Affiliate toggle + -40% banner
│   ├── guarantee.tsx        ← ghost-in-recycle-arrows seal + refund copy + chips
│   ├── testimonials.tsx     ← manual-scroll carousel, screenshot-only cards,
│   │                          expand-to-modal via layoutId
│   ├── faq.tsx              ← 8 glass accordion items, 12px gap stack
│   ├── cta.tsx              ← full-width blue-glass SECTION (not a card)
│   ├── footer.tsx           ← dark bg, giant "Leadity" watermark, social row
│   ├── signup-popup.tsx     ← delayed modal, glass-brand
│   ├── smooth-scroll.tsx    ← Lenis + anchor-click interceptor
│   ├── reveal.tsx           ← Reveal / StaggerGroup / StaggerItem helpers
│   └── ui/
│       ├── accordion.tsx    ← shadcn accordion, no list border anymore
│       ├── badge.tsx
│       ├── button.tsx       ← primary/gradient/ghost/muted/link — all glass
│       └── tooltip.tsx
├── lib/
│   ├── plans.ts             ← the Plan[] array (Starter/Growth/Scale)
│   └── utils.ts             ← cn() (clsx+twMerge)
├── public/
│   ├── logo.png             ← blue ghost (primary wordmark icon)
│   ├── logo-white.png       ← white-icon variant for dark/gradient bgs
│   ├── favicon.ico
│   ├── leadity-refund-recycle.png  ← guarantee seal (ghost + recycle arrows)
│   ├── competitors/
│   │   ├── outscraper.png
│   │   └── clearoutphone.png
│   ├── product/
│   │   ├── 01-categories.png    ← showcase step 1
│   │   ├── 02-location.png      ← showcase step 2
│   │   ├── 03-launch.png        ← showcase step 3
│   │   ├── 04-dashboard.png     ← showcase step 4
│   │   └── 05-classification.png← showcase step 5
│   └── testimonials/
│       ├── t1.jpg  → "10× better than Outscraper."
│       ├── t2.jpg  → "Really like the leads — booked 4 meetings yesterday."
│       ├── t3.jpg  → "I love ur leads man. Direct business owner."
│       ├── t4.jpg  → "Got 4 meetings coming up. Let's run it."
│       ├── t5.jpg  → "Closed — $300 depo, 3k."
│       ├── t6.jpg  → "From 0 to 5 booked meetings — only 600 texts."
│       └── t7.jpg  → "Tons of responses to call."
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── iorshik.md               ← THIS FILE
```

**Removed from the codebase** (in case history confuses future sessions):
- `components/qualifier.tsx` — "Is this for you?" section. The file still
  exists on disk but is no longer imported or mounted. Delete safely if
  user wants tree cleaned up.
- `public/leadity-guarantee.png` — replaced by `leadity-refund-recycle.png`.
  Old filename still exists on disk.
- `public/refund-seal.png` — renamed earlier to cache-bust.

---

## 5. Design System

### Colour tokens (`app/globals.css` `@theme` block)

```
--color-background:        #ffffff
--color-surface:           #fafaf9
--color-surface-muted:     #f4f4f2
--color-border:            #ececea
--color-border-strong:     #e0e0dc
--color-text-primary:      #0a0a0a
--color-text-secondary:    #525252
--color-text-muted:        #8a8a8a
--color-accent:            #111111
--color-accent-hover:      #1f1f1f
--color-brand-mint:        #d5eefd      (legacy, now blue-tinted)
--color-brand-mint-ink:    #0b5394
--color-brand-glow:        rgba(34, 201, 245, 0.2)
--color-brand-glow-strong: rgba(27, 134, 255, 0.22)
--color-warning-amber:     #f6d38a

--font-sans:  var(--font-inter), ui-sans-serif, system-ui, …
--font-serif: var(--font-instrument-serif), ui-serif, Georgia, serif
```

### Brand gradients

Primary brand gradient (cards, buttons, hero H1 accent):
```
linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)
```

Text gradient (`.text-brand-gradient`):
```
linear-gradient(180deg, #22c9f5 0%, #1b86ff 55%, #0951ff 100%)
```

Unified ambient glow recipe used across sections:
```
radial-gradient(… at 50% 0%|100%,
  rgba(34, 201, 245, 0.16) 0%,
  rgba(27, 134, 255, 0.06) 40%,
  transparent 75%)
```

### Typography utilities

```
.text-display   clamp(44px, 7vw, 88px),   weight 600, -0.04em, lh 1.02
.text-h2        clamp(32px, 4vw,  52px),  weight 600, -0.03em, lh 1.08
.text-eyebrow   12px uppercase, 0.12em tracking, muted grey
.serif-italic   Instrument Serif italic
```

### Spacing utilities

```
.container-page   max-w 1200px, mx-auto, px-24 md:px-48 lg:px-64
.section-py       py-96 md:py-128 lg:py-160 (px)
```

### Apple Liquid Glass system (crown jewel of the design)

Four tiers in `app/globals.css`. Full recipes:

**`.glass-card`** — primary surfaces (cards, modals, big panels):
```
background:
  radial-gradient(140% 90% at 18% -5%,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.12) 30%,
    transparent 62%),
  linear-gradient(178deg,
    rgba(255,255,255,0.72) 0%,
    rgba(255,255,255,0.48) 45%,
    rgba(255,255,255,0.4) 100%);
backdrop-filter: blur(30px) saturate(220%) brightness(1.04);
border: 1.5px solid rgba(255,255,255,0.6);
box-shadow:
  inset 0 8px 36px rgba(255,255,255,0.55),   /* pooled light inside */
  inset 0 -4px 28px rgba(255,255,255,0.22),  /* ambient bounce */
  inset 0 2px 0 rgba(255,255,255,1),         /* sharp top edge */
  inset 2px 0 0 rgba(255,255,255,0.6),       /* left rim light */
  inset -1.5px 0 0 rgba(255,255,255,0.2),    /* right rim dim */
  inset 0 -1.5px 0 rgba(255,255,255,0.32),   /* bottom rim */
  0 1px 2px rgba(15,23,42,0.04),
  0 20px 48px -16px rgba(15,23,42,0.18),
  0 48px 96px -36px rgba(27,134,255,0.32);   /* brand-tinted glow */
transition: 0.35s cubic-bezier(0.22, 1, 0.36, 1) all glass props;
```
Hover state deepens every layer in lockstep.

**`.glass-chip`** — buttons, toggles, pills (blur 20px variant).
**`.glass-chip-dark`** — for elements over brand gradients.
**`.glass-brand`** — translucent blue-tinted glass with backdrop-blur for
focal cards that used to be opaque brand gradients.

### Critical insights about Apple Liquid Glass (from research):

1. **`saturate(200%)` is 80% of the "Apple" look.** Generic glassmorphism
   uses only `blur()` and looks milky. Saturation boost makes colours
   behind *punch through* more vividly than reality.
2. **The inner top glow is NOT a 1px line.** It's a diffuse
   `inset 0 8px 36px rgba(255,255,255,0.55)` — light *pools inside* the
   glass like a convex surface catching an overhead source. This is the
   second most important property.
3. **Specular corner highlight** painted as a radial-gradient BG LAYER
   (top-left 15-18%) simulates an imaginary light source hitting the
   glass.
4. **Asymmetric rim lights** — top + left edges bright (lit), bottom +
   right subtler (shadow side). Gives 2D surfaces 3D curvature.
5. **Brand-tinted elevation shadow** — not grey, not black; carries
   `rgba(27, 134, 255, 0.32)` so cards feel native to the site's
   atmosphere.

Research sources saved for future reference:
- https://css-tricks.com/getting-clarity-on-apples-liquid-glass/
- https://dev.to/kevinbism/recreating-apples-liquid-glass-effect-with-pure-css-3gpl
- https://blog.logrocket.com/how-create-liquid-glass-effects-css-and-svg/

### House style rules (non-negotiable)

- **Hyphen with spaces** (`-`), never em-dash (`—`) or en-dash (`–`) in copy.
  The user asked for this explicitly. Code comments can use em-dash.
- **"Owners Mobiles"** — exact capitalisation, always plural.
  Not "Owner's Mobile", not "owner mobiles", not "Owners Mobile Phones"
  unless in the signup popup headline.
- **"Scraper"**, not "Scrapper". The user asked for this fix.
- **Parallel imperative structure** for paired headlines: "Scrape Google
  Maps. / Get Owners Mobiles." and similar. The two-beat rhythm is the
  brand's voice.
- **No emojis in UI copy.** Emojis only if the user explicitly asks.

### Ease curves

```
ease = [0.16, 1, 0.3, 1]        ← the primary "Apple" ease, 600-800ms
easeOut = [0.22, 1, 0.36, 1]    ← glass transitions, testimonials, 250-350ms
```
Springs (for framer-motion layout animations):
```
stiffness 140, damping 26, mass 1    ← mobile pricing expand, testimonials
stiffness 180, damping 24, mass 1    ← signup popup entrance
stiffness 260, damping 28, mass 0.9  ← mobile drawer island
```

---

## 6. Component Inventory

### `Nav` — `components/nav.tsx`
- Sticky `top-0 z-50`
- Glass header: `bg-white/55 backdrop-blur-[24px] backdrop-saturate-[200%]`
- Scrolled state adds a glass bottom rim + soft elevation shadow
- Mobile drawer: rounded island (not fullscreen), positioned
  `left-4 right-4 top-[calc(72px+8px)]`, uses `.glass-card`
- Drawer spring: `stiffness 260, damping 28, mass 0.9`
- Menu-item stagger: `staggerChildren 0.035, delayChildren 0.08`

### `Hero` — `components/hero.tsx`
- `min-h-[calc(100svh-72px)]`, flex-col, `items-center justify-center`
- Top ambient wash: 900px tall radial, peak at 50% 0%
- Content stack: eyebrow → H1 → sub (hidden on mobile, `md:block`) →
  CTAs → trust row (240+ agencies · ★★★★★ 4.9/5)
- NO stats row anymore (removed)
- CTAs: `ghost` variant (See how it works) + `gradient` variant
  (Start Scraping →)

### `Showcase` — `components/showcase.tsx`
- Section `bg-white overflow-hidden py-24 md:py-28 lg:py-32`
- 5 steps stacked with `divide-y`, each Step:
  - Grid: text `col-span-5`, image `col-span-7`
  - Alternates `textFirst` based on index % 2
  - Image frame: `.glass-card rounded-2xl p-3 sm:p-4` containing
    a 16:11 rounded inner div with the screenshot
- Reveal-on-enter via `useInView(..., { once: true, amount: 0.2 })` +
  motion.div opacity + y fade. **No parallax** — scroll-driven parallax
  was removed because it fought the reveal animation under Lenis.
- Each step data: `step` ("01"), `label` ("Choose"), `title`, `body`,
  `src`, `alt`, `width: 1600, height: 1100`

### `Features` — `components/features.tsx`
- 6 `.glass-card` tiles in a `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Each has a colour-coded badge (blue/mint/amber/green) + a lucide icon
- `StaggerGroup` / `StaggerItem` reveal
- CSS transition explicitly scoped to `[border-color, box-shadow]` so
  framer-motion owns transform (fixed the "twitch on enter" bug)
- Features:
  - Core / Instant lead capture / Zap
  - AI-Powered / Mobile-only classification / ShieldCheck
  - Smart Filter / Niche-precise scraping / Filter
  - Always On / Speed-tunable workers / RefreshCw
  - Critical / Live pipeline tracking / BarChart3
  - Visibility / Centralized dashboard / LayoutDashboard

### `Comparison` — `components/comparison.tsx`
- Section `section-py bg-[var(--color-surface)]` with top glow
- H2: "One tool or / three bills." — **no subhead** anymore (removed)
- Grid 2-col at lg, 1-col mobile with `gap-20 lg:gap-6`, `max-w-[720px]`
- **Ours** card (order-2, on the right at lg): `.glass-brand` — translucent
  blue-tinted glass. Ghost logo 108×108 floats on top, NO shadow. Title
  "Ours" 24-34px. Prices in `tabular-nums`. 4 feature rows with white
  check chips on blue.
- **Theirs** card (order-1, on the left at lg): `.glass-card` with Outscraper
  + Clearoutphone logos floating above (78×78 each, rotated -6° / +6°,
  white rings). Title "Theirs" in primary text. Prices in `#FF5A5A` red
  with subtle red text-shadow. 4 feature rows with muted X chips.
- **TierPill overlay** (lg only): absolute overlay at `top-[70px]` with
  3 `.glass-chip` pills (2,000 / 5,000 / 10,000) centered vertically
  aligned with each price row via shared `pricePadY = "py-4"`.
- Card sizes are 40% smaller than the original Attio-style design (user
  asked for shrink).
- Footnote: "Pricing snapshot captured from public Outscraper + Clearoutphone
  rates. Your actual mileage may vary - ours won't."

### `Pricing` — `components/pricing.tsx`
- Section `id="pricing" section-py`, grid bg, top glow
- H2: "Pick your / scrape volume."
- **Affiliate toggle** (`.glass-chip`, rounded-full): Standard ↔ Affiliate
  switch with "SAVE MORE" gradient chip. Has a Tooltip: "Pricing for
  Aditya's community members."
- **Affiliate discount banner** (slides in when toggle=on): gradient pill
  "🎁 Up to −40% off when you invite your friends"
- **Mobile accordion (lg:hidden)**: 3 stacked rows, one expanded at a time
  (Growth default). Spring layout transitions. Active row uses
  `.glass-brand` (blue), inactive uses `.glass-chip`. Row shows volume
  primary, plan name secondary; click expands to show description,
  features, CTA, compareNote.
- **Desktop grid (hidden lg:grid-cols-3)**:
  - Non-popular cards: `.glass-card`, hover `-translate-y-0.5`
  - Growth popular card: `.glass-brand` with `lg:-translate-y-3` lifted,
    "MOST POPULAR" pill on top. CTA button is a **plain solid-white pill**
    (not glass) per user request — intentional inconsistency.
- Plan data in `lib/plans.ts`. See §8.

### `Guarantee` — `components/guarantee.tsx`
- Section with glow blobs left + bottom-right
- Left column (col-span-4): `/leadity-refund-recycle.png` seal 260–300px
  with ambient radial halo behind
- Right column (col-span-8):
  - Eyebrow: "The Leadity guarantee"
  - H2: "Bad lead? We don't just replace it. We pay you back in bonus
    leads."
  - Paragraph explaining refund + 50% bonus mechanic
  - 3 `.glass-chip` pills: "Verified at source", "Automatic replacement",
    "Human account manager"

### `Testimonials` — `components/testimonials.tsx`
- Section `overflow-x-clip pt-24 pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28`
  (not `overflow-hidden` — would clip shadow below cards)
- Bg-grid texture + top radial glow
- H2: "Receipts, / not testimonials." — sub: "Every card is a real
  screenshot from a real customer. Tap any card to read the full
  conversation."
- **Carousel (manual, no auto-scroll)**: horizontal `overflow-x-auto
  scroll-smooth` track with scroll-snap-x. Track padding
  `pt-6 pb-12 md:pt-8 md:pb-16` so card shadows don't get clipped.
  Edge mask `linear-gradient(to right, transparent 0%, black 4%,
  black 96%, transparent 100%)` for soft left/right fade.
- **Cards**: 320×460 mobile, 360×500 md+. **Screenshot-only** —
  `<button>` with the screenshot filling via `fill` + `object-cover
  object-top`, no text, no icons, no attribution. Subtle border
  `border-white/60` + soft shadows + hover shadow bloom.
- **Click → modal**: framer-motion `layoutId="card-${i}"` and
  `layoutId="thumb-${i}"` smoothly expand the card into a centered
  modal showing the full-size screenshot. Close via X (glass-chip),
  backdrop click, or Esc. Body scroll locks while open.
- **Arrow nav**: two `.glass-chip` rounded buttons below the carousel,
  left/right with `ArrowLeft`/`ArrowRight` icons. Disabled state dims.
  Each click scrolls the track ±360px.
- 7 testimonials total. See §8 for data.

### `FAQ` — `components/faq.tsx`
- Section `id="faq" section-py` with blob glow
- H2: "Questions outbound teams actually ask."
- 8 items in a `gap-3` stack (was an underline list — changed to glass
  cards). Each `AccordionItem` has `.glass-card rounded-2xl border-0
  px-5 md:px-6`.
- `AccordionTrigger` rotates chevron 180° when open.

### `CTA` (closing) — `components/cta.tsx`
- **FULL-WIDTH SECTION, not a contained card** (per user request)
- `py-28 md:py-36 lg:py-44`
- Background is the brand gradient with specular corner highlight
  painted directly via multi-layer `background` style
- **Smooth top fade** (260px tall `linear-gradient(180deg, #fff 0%,
  … transparent 100%)`) so the previous FAQ section's white bg blends
  seamlessly into the blue
- Faint hairline grid texture (56px × 56px) for depth
- Content centered, max-w-[820px]:
  - White-icon ghost logo (80/92px, no shadow)
  - Eyebrow: `LESS STACK. MORE PIPELINE.`
  - H1: `Your next 5,000 leads, / pulled in one click.`
  - Sub: "Pick a niche. Hit start. We deliver carrier-verified Owners
    Mobiles straight to a clean CSV - refund plus 50% bonus on anything
    that doesn't text."
  - Primary CTA (solid white pill): `Get my 5k leads →` → `#pricing`
  - Secondary (text link): `Talk to the founders →` →
    `mailto:hello@leadity.com`

> **Pending enhancement from the user:** add a gradient-blur soft glow
> blob over the CTA section — duplicate the blue shape, apply Gaussian
> blur 150–200px, blend-mode `plus-lighter` or `screen`, opacity 70–80%.
> Not yet implemented. See §14.

### `Footer` — `components/footer.tsx`
- Dark bg with giant "Leadity" watermark fully visible at the bottom
  (font-size clamp(96px, 22vw, 380px), white/[0.1] opacity)
- Logo = `/logo-white.png` for the dark bg (swapped from blue)
- Columns: Product / Company / Legal (or similar) + social row
- Bottom strip has ONLY the copyright now ("© 2026 Leadity Scraper.
  All rights reserved."). **"All systems operational" + green dot
  removed** per user request.

### `SignupPopup` — `components/signup-popup.tsx`
- Fires **6.5s** after first load (not shown if dismissed — stored in
  `localStorage.setItem('leadity-signup-popup-dismissed-v1', '1')`)
- Centered on ALL viewports (was bottom-sheet on mobile, flipped to
  centered per user request)
- Modal body: `.glass-brand` translucent blue
- White-icon ghost logo, NO shadow, NO halo (removed white radial halo
  that was behind it)
- Eyebrow: `LIMITED OFFER`
- H3 (two lines, balanced):
  - Line 1: `Sign Up **NOW** and get`
  - Line 2: `300 Owners Mobile Phones for **FREE**`
  - NOW and FREE are `font-extrabold`
- Sub: "Carrier-verified Owners Mobiles in your niche, delivered as a
  clean CSV. No credit card."
- Primary CTA: `Claim my 300 free leads →` → `#pricing`
- Secondary: "No thanks, I'll browse first" (text link, dismisses)
- Close button (`.glass-chip-dark`) top-right X
- Escape key + backdrop click both close. Body scroll locks while open.

### `SmoothScroll` — `components/smooth-scroll.tsx`
- Lenis init with `duration: 1.15`, Stripe-ish ease
- **Disabled on mobile** (`(hover: none) and (pointer: coarse)` OR
  `innerWidth < 768`) — falls back to native `window.scrollTo
  { behavior: 'smooth' }` because Lenis causes lag on touch
- `respect prefers-reduced-motion` — no inertia, native scroll
- **Anchor-click interceptor** (for `a[href^="#"]`):
  Finds the **first content element** inside the target section
  (`.text-eyebrow`, `h1`, `h2`, or `[data-section-start]`) and scrolls
  to it with offset `-(72 + 8)` so it lands at viewport Y = 80.
  - Previously tried a `paddingTop`-based offset but that overshot on
    iOS Safari pricing. The "target the first content element" approach
    is deterministic and works everywhere.
- `history.pushState(null, '', '#id')` updates URL without extra scroll
- Exposes `window.__lenis` for debugging

### `Reveal` + `StaggerGroup` + `StaggerItem` — `components/reveal.tsx`
- Reveal: opacity 0 → 1, y 12 → 0, 0.6s ease, `viewport { once: true,
  amount: 0.2 }`, `whileInView`
- StaggerGroup: parent container with `staggerChildren` transition
- StaggerItem: individual child with the same y-variant reveal

---

## 7. Copy Reference

Canonical strings — if any section needs editing, grep for these first
to find the exact location.

### Nav
```
Features · Pricing · How it works · FAQ
Sign in · Get leads
```

### Hero
```
eyebrow: Reach Decision Makers Directly
H1:      Scrape Google Maps.
         Get Owners Mobiles.
sub:     Business Owners Mobiles, pulled from Google Maps in your exact niche
         - carrier-verified and exported as a clean CSV for SMS marketing.
CTA:     See how it works  ·  Start Scraping →
trust:   Trusted by 240+ Agencies  ·  ★★★★★ 4.9 / 5
```

### Showcase
```
eyebrow: A look inside
H2:      From a single niche
         to verified Owners Mobiles.
sub:     Five screens tell the whole story. Scroll through each one to see
         exactly what you get - from the moment you click Start to the
         moment your CSV lands.

Step 01 · Choose — "Pick your niche."
  1,255+ business categories, already organised into clean sectors.
  Start with Roofing, Dentist, or any of the other 1,254. Plain English
  - no SIC codes, no picklists.

Step 02 · Target — "Choose where to scrape."
  By state, by ZIP, or the full US - 32,741 ZIPs included. Dial in the
  exact regions your team can actually service, and leave the rest on
  the shelf.

Step 03 · Launch — "Launch at your pace."
  Careful, balanced, or aggressive workers. Pick the throughput that
  matches your rate limits and deadline - we handle the retries, the
  backoff, and the clean-up.

Step 04 · Track — "Watch your pipeline fill."
  Total leads, today, this week, this month - side by side. Every active
  job shows real-time progress, and the queue chart tells you when
  you'll land.

Step 05 · Ship — "Mobile-only, every time."
  Live carrier classification splits Mobile, Landline, VoIP, Toll-Free,
  and Unknown. Pay only for numbers your SMS stack can actually text.
  Export any segment as a clean CSV.
```

### Features
```
eyebrow: What it does
H2:      Scrape. Classify.
         Export.
sub:     One scraper that pulls from Google Maps, splits mobiles from
         landlines, and drops a clean CSV in your inbox. No second tool.

(6 tiles — see data in §8)
```

### Comparison
```
eyebrow: Compared
H2:      One tool or
         three bills.
(no subhead)
Ours: Scrape + validate in one product · 4× higher quality filter
      built in · 2× faster scraping, tunable workers · Refund + 50%
      bonus on bad leads
Theirs: Two separate tools, two bills · No quality filter - pay for
        VOIPs · Slow crawls and rate-limits · No refund, no safety net
Footnote: Pricing snapshot captured from public Outscraper + Clearoutphone
          rates. Your actual mileage may vary - ours won't.
```

### Pricing
```
eyebrow: Pricing
H2:      Pick your
         scrape volume.
sub:     Every plan ships with verified Owners Mobiles, refund + 50% bonus
         on bad leads, and a real human in chat. No tool-stacking.
toggle:  Standard ⇄ Affiliate  ·  SAVE MORE
tooltip: Pricing for Aditya's community members.
banner:  (shown when affiliate=on) Up to −40% off when you invite your friends
below-grid: Need more than 10k/month?  Talk to us →
```

Plan-specific copy in §8.

### Guarantee
```
eyebrow: The Leadity guarantee
H2:      Bad lead? We don't just replace it. We pay you back in bonus leads.
body:    Every mobile number we deliver is live-verified before it hits
         your inbox. If any number turns out to be VOIP, a landline, or
         off-niche, we replace it free - and throw in 50% more clean
         Owners Mobiles on top. No support tickets. No chasing us down.
         Buy 2,000 Owners Mobiles, 150 come back bad? You get 150
         replacements plus 75 bonus numbers. Simple as that.
chips:   Verified at source  ·  Automatic replacement  ·  Human account manager
```

### Testimonials
```
eyebrow: Real DMs · real customers
H2:      Receipts,
         not testimonials.
sub:     Every card is a real screenshot from a real customer. Tap any
         card to read the full conversation.
```

### FAQ
```
eyebrow: FAQ
H2:      Questions outbound teams actually ask.
(8 Q+A pairs — see items array in components/faq.tsx)
```

### CTA (closing, full-width section)
```
eyebrow: Less stack. More pipeline.
H2:      Your next 5,000 leads,
         pulled in one click.
sub:     Pick a niche. Hit start. We deliver carrier-verified Owners
         Mobiles straight to a clean CSV - refund plus 50% bonus on
         anything that doesn't text.
CTAs:    Get my 5k leads →  ·  Talk to the founders →
```

Comments in `cta.tsx` preserve two alternate H1s for easy swap:
- "Pick a niche. / Ship a CSV."
- "Niche in. / CSV out."

### Signup popup
```
eyebrow: Limited offer
H3:      Sign Up NOW and get
         300 Owners Mobile Phones for FREE
         (NOW + FREE are extrabold)
sub:     Carrier-verified Owners Mobiles in your niche, delivered as a
         clean CSV. No credit card.
CTAs:    Claim my 300 free leads →  ·  No thanks, I'll browse first
```

### Footer
```
Leadity
Mobile-only lead infrastructure for SMS marketing teams. Scrape Google
Maps, classify carriers, ship clean CSVs.

[product / company / legal columns]

© 2026 Leadity Scraper. All rights reserved.
(NO "All systems operational" line anymore)
```

---

## 8. Data Structures

### `lib/plans.ts`

```ts
type Plan = {
  name: "Starter" | "Growth" | "Scale";
  standard: number;
  affiliate: number;
  mobiles: number;
  popular: boolean;
  description: string;
  features: string[];
  cta: string;
  compareNote: string;
};

plans = [
  Starter   — $59 / $35  — 2k   — "For testing a new niche or running a
                                   first outbound campaign."
    features: 2,000 verified Owners Mobiles · 4× higher quality than
              legacy scrapers · 2× faster scraping · Refund + 50% bonus
              on bad leads · Live human support
    cta: "Start with 2k Owners Mobiles"
    compareNote: "vs. $67–$211 with Outscraper + Clearoutphone"

  Growth    — $139 / $83 — 5k   — popular:true
              "For agencies and outbound teams running multiple campaigns."
    features: 5,000 verified Owners Mobiles · Everything in Starter ·
              Priority scraping queue · Dedicated account manager in chat ·
              CSV + webhook delivery
    cta: "Get 5k Owners Mobiles"
    compareNote: "vs. $133–$522 with Outscraper + Clearoutphone"

  Scale     — $229 / $137 — 10k  — "For teams running high-volume outbound
                                     or list-building at scale."
    features: 10,000 verified Owners Mobiles · Everything in Growth ·
              Multi-niche splitting · Same-day turnaround on most orders ·
              Private Slack channel with your AM
    cta: "Get 10k Owners Mobiles"
    compareNote: "vs. $307–$1,053 with Outscraper + Clearoutphone"
]
```

### Comparison tiers + features — in `components/comparison.tsx`

```
tiers = [
  { label: "2,000",  leadity: "$59",  competitor: "$67 – $211"   },
  { label: "5,000",  leadity: "$139", competitor: "$133 – $522"  },
  { label: "10,000", leadity: "$229", competitor: "$307 – $1,053" },
];

features = 4 pairs (ours / theirs) — see §7 Comparison
```

### Features grid — in `components/features.tsx`

```
tones: { blue, mint, amber, green } — each with bg + text + iconBg + iconColor
Each feature: { badge, tone, title, body, icon }
```

### Testimonials — in `components/testimonials.tsx`

```
7 testimonials, each:
  src: "/testimonials/tN.jpg"
  alt: descriptive
  pull: punchy one-liner (used only in sub-heading context now — cards
        are screenshot-only)
  role: "Outbound agency" | "Cold SMS operator" | etc.
  width/height: original image dims
```

---

## 9. Interactions & Behaviors

### Smooth scroll (`components/smooth-scroll.tsx`)
- Desktop: Lenis inertia
- Mobile: native `window.scrollTo { behavior: 'smooth' }`
- Anchor-click targets first `.text-eyebrow`/`h1`/`h2` inside the
  section → lands at viewport Y = 80

### Hero trust-row animation
- Entrance stagger (framer-motion): opacity + y, delays 0 / 0.1 / 0.2 /
  0.3 / 0.45s

### Showcase step entrance
- `useInView(ref, { once: true, amount: 0.2 })`
- Text: opacity 0 + y 24 → 0, 0.8s ease
- Image: opacity 0 + y 40 → 0, 1s ease, delay 0.1s
- **No scroll-driven parallax** — that was removed because it caused
  jitter under Lenis

### Features stagger
- `StaggerGroup` with `staggerChildren 0.06`
- Each card: opacity 0 + y 12 → 0, 0.6s

### Pricing toggle
- Standard/Affiliate switch: knob animates via translate-x
- Affiliate banner: AnimatePresence, height + opacity + y, 0.45s ease

### Pricing mobile accordion
- Spring layout transition on the active row (stiffness 140, damping
  26, mass 1)
- Inner content fades in with a +80ms delay for "inside the card"
  materialisation
- Radio dot pops in via its own snappy spring

### Testimonials carousel
- Never auto-scrolls
- `scrollSnapType: x mandatory`
- Arrow buttons scroll ±360px with `scrollBy({ behavior: 'smooth' })`
- Arrow disabled state if at scroll start/end
- Card hover: `y: -4` (desktop only)
- Click-to-expand: shared `layoutId` animates card into modal smoothly

### FAQ accordion
- Radix `type="single" collapsible`
- Chevron rotates 180° when open
- Cards gap-3

### CTA
- Reveal wrapper with opacity 0 + y 12 → 0 on scroll-in
- Primary CTA pill has `hover:-translate-y-0.5`
- Secondary is a text link with underline on hover

### Signup popup
- 6.5s timeout after first load (skipped if localStorage has
  `leadity-signup-popup-dismissed-v1`)
- Spring entrance: stiffness 180, damping 24, mass 1
- Backdrop click / X / Esc all dismiss + persist
- Body scroll locks while open

### Nav
- `scrolled` state flips on after `window.scrollY > 8`
- Mobile drawer spring: stiffness 260, damping 28, mass 0.9 — scales
  from top-center, staggered menu items

---

## 10. Known Quirks & Fixes

1. **Next.js 16 broke opengraph-image.** We downgraded to `next@^15`
   (resolves to 15.5.15). The fix for the OG "Invalid background image"
   error was splitting the gradient + color into `backgroundColor`
   + `backgroundImage` separately in the satori config.

2. **Vercel deploy required a public repo** because the Vercel GitHub
   App wasn't granted. Repo was flipped public. SMS verification was
   required on the Vercel account; user handled this manually.

3. **Seal PNG CDN cache stuck after overwrite.** Fix: renamed the file
   (old `/refund-seal.png` → `/leadity-guarantee.png` → currently
   `/leadity-refund-recycle.png`) to cache-bust. Always rename if an
   overwrite-in-place doesn't show.

4. **Showcase images glitched on scroll.** Root cause: framer-motion's
   `animate={{ y: 0 }}` reveal fought `style={{ y: imageY }}` parallax
   under Lenis (two sources of truth for transform). Fix: removed
   `useScroll`, `useTransform`, and the `style` transforms. Reveal
   animation alone is enough.

5. **Features cards twitched on entry.** Root cause: `transition-all
   duration-200` CSS transition fought framer-motion's StaggerItem
   y-variant reveal. Fix: scoped CSS transition to
   `transition-[border-color,box-shadow]` so transform is fully owned
   by framer.

6. **Testimonials "weird shadow cutoff" below cards.** Root causes:
   - Section had `overflow-hidden` clipping card shadows at the section
     boundary. Fixed by switching to `overflow-x-clip`.
   - Track had `py-4` only — not enough vertical padding for drop
     shadows. Fixed with `pt-6 pb-12 md:pt-8 md:pb-16`.

7. **Anchor-scroll overshoot on iOS pricing.** Fixed by switching the
   offset strategy from `paddingTop`-based math to targeting the first
   content element inside each section (`.text-eyebrow`/`h1`/`h2`) and
   scrolling to viewport Y = 80.

8. **Hero → Showcase seam was visible.** Tried multiple approaches:
   - Two separate gradients meeting at the seam → visible line
   - Peaks pushed outside → still visible
   - Single gradient spanning both (via showcase overflow-y visible) →
     worked but had a concentration peak at centre
   - Plateau linear gradient → fixed
   - **Final decision:** user asked for the seam glow to be removed
     entirely. Currently there's NO transition glow between hero and
     showcase — just the hero's own top glow.

9. **Nav anchor clicks on the hamburger menu item "Pricing" specifically
   undershot on iOS.** Related to #7; fixed by the same commit.

10. **Testimonial auto-scroll was intrusive.** User wanted it to NEVER
    pause on hover. Then later: replace the whole auto-scroll carousel
    with a manual scroll + arrow navigation (retro-testimonial pattern,
    styled with liquid glass). Done.

11. **Button variant `primary` was applying `glass-chip-dark` + black
    tint** but the className override `bg-white` on the Growth plan's
    CTA button partially leaked the glass shadows underneath. User
    explicitly wanted NO glass on that one button. Fixed by using a
    plain `<a>` pill with no Button wrapper.

12. **Old images cached in browser even after hard-refresh.** If user
    reports "nothing changed", the fixes are (in order):
    - `Cmd+Shift+R` hard refresh
    - Incognito
    - Check `curl -sI https://leadity.vercel.app/ | grep x-vercel-cache`
      — if HIT, deploy is live but edge cache is serving old
    - Wait ~60-90s and retry

13. **Image upload size limit.** The Anthropic API enforces a 2000px
    dimension limit for many-image requests. If the user pastes large
    screenshots, the session can error out. Next time, advise them to
    keep screenshots at 1500px max, or describe in text.

---

## 11. Assets (public/)

- `logo.png` — blue ghost, primary ghost icon
- `logo-white.png` — white-icon variant for use on dark/gradient bgs
  (nav drawer on mobile? no. Footer? yes. CTA ghost? yes.
  Signup popup? yes)
- `favicon.ico`
- `leadity-refund-recycle.png` — refund+recycle guarantee seal
  (current guarantee image; supersedes `leadity-guarantee.png` and the
  even older `refund-seal.png`)
- `competitors/outscraper.png`, `competitors/clearoutphone.png`
- `product/01-05.png` — five Showcase step screenshots
- `testimonials/t1-t7.jpg` — seven real DM screenshots
- The user frequently drops new assets into `~/Downloads/` then asks to
  swap. Always `cp` them into `public/` with a distinctive filename
  (for cache-busting) and update the component's `src`.

---

## 12. User's Voice & Preferences

The user runs the product and codes nothing — they're a busy operator who
wants the site shipped, fast, good, final. Communication style:

**Language mix:** Romanian + English, code-switches freely. Commands
are often in Romanian ("lock in", "fa", "vreau", "schimba"). English
for technical/product terms.

**Tone:** direct, impatient with friction, low tolerance for
back-and-forth. If they ask for something, just do it. Don't ask
clarifying questions unless the ambiguity is existential.

**Specific phrases / signals:**
- **"lock in bro"** / **"lock in please"** / **"please bro"** —
  STOP asking, just ship. Maximum urgency.
- **"continue"** — resume the interrupted task
- **"nothing changed"** — almost always browser cache. Say hard-refresh.
- **"e bine dar..."** — it's good BUT. Soften the critiqued thing.
- **"preaa tare / prea subtil"** — too strong / too subtle. Tune.
- **"fa mai smooth"** — make smoother (springs, longer durations)
- **"remove shadow"** — literal. Strip all shadow filters / halos.
- **"make it liquid glass"** — apply `.glass-card` or `.glass-brand`
- **"send me the link"** — `https://leadity.vercel.app/`
- **"what you want me to do"** — means "am I blocking anything? what's
  next?" Answer: "nothing, ship looks good" or give a concrete action.

**Format they like:**
- Short numbered summary of what changed
- Commit hash
- "Live on Vercel in ~60s"
- Tables when comparing before/after
- Emojis OK in chat (NOT in UI copy)

**Things to never do:**
- Don't attach emojis to UI strings unless asked
- Don't suggest PR workflow — they want direct-to-main
- Don't over-explain CSS — the user trusts Claude on taste
- Don't push back on edgy copy requests (they like punchy / honest /
  sometimes sarcastic lines, within reason — e.g. "Love overpaying
  for trash." in the qualifier was their direction)

**Copy sensibilities:**
- Benefit-driven > feature-driven
- Short parallel pairs (the "Scrape today. / Text tomorrow." rhythm
  is their north star)
- Specific numbers (5,000, 10×, −40%) > vague claims
- Direct address ("you") > third person
- Honest disqualifiers ("Not for you if…") > fluffy "everyone is
  welcome"
- No corporate-speak. No "synergy", "empower", "unlock potential."

---

## 13. History of Decisions (abridged)

A rough timeline of major pivots so future sessions understand why
things are the way they are:

1. **v1 build** — original spec was the whole landing: Nav, Hero,
   Showcase, Features, Comparison, Pricing, Guarantee, Testimonials,
   FAQ, CTA, Footer, SignupPopup. User bookmarked this as "v1".
2. **Copy pass** — user objected that hero copy was copied from inspo
   screenshots (generic SaaS). Rewrote scraper-specific: "Scrape Google
   Maps. / Get Owners Mobiles." Confirmed keeper.
3. **Scrapper → Scraper** — fixed the spelling everywhere.
4. **Guarantee image swap** — refund-seal.png → leadity-guarantee.png →
   leadity-refund-recycle.png. Last one is the ghost-in-recycle-arrows
   and is current.
5. **Mobile pass** — nav drawer redesigned to rounded island; CTA order
   flipped; island glass; all mobile paddings tightened.
6. **Testimonials infinite loop → manual carousel** with arrows + glass
   cards + expand-to-modal + layoutId choreography.
7. **Smooth-scroll anchor fixes** — several rounds. Final strategy:
   target first content element, scroll to viewport Y = 80.
8. **Hero→Showcase seam glow** — multiple attempts (mirrored peaks,
   peak-offset, single plateau gradient). User ultimately said remove
   it entirely. Currently no seam glow exists; hero ends in white and
   showcase starts white.
9. **Qualifier redesign** — edgy pain-framed copy ("Love overpaying
   for trash." etc.) → later removed entirely per user request.
10. **Apple Liquid Glass pass** — two iterations:
    - First: tasteful subtle glass on white cards
    - User wanted more visible / more liquid. Research dive into the
      actual Apple Liquid Glass recipe (css-tricks, dev.to, logrocket).
      Upgraded to heavier inner glow, higher saturation (200→220%),
      asymmetric rim lights, brand-tinted elevation.
11. **All cards + all buttons → glass** — including blue-gradient focal
    cards (Ours, Growth, CTA, signup popup) via `.glass-brand`
    translucent blue tint.
12. **Growth plan button → NOT glass** — explicit exception.
13. **CTA card → full-width section** — no more contained card; section
    itself is the blue glass with a smooth top fade from FAQ.
14. **Testimonial cards → screenshot-only** — no internal text / quote /
    attribution. Full-bleed image with light border + shadow.
15. **Pricing mobile accordion hierarchy swap** — mobile count primary,
    plan name secondary. Then softer spring animations ("10× smoother").
16. **Closing CTA copy** — "Scrape today. / Text tomorrow." →
    user wanted "10× better" → "Your next 5,000 leads, pulled in
    one click." + "LESS STACK. MORE PIPELINE." eyebrow.

---

## 14. Pending / Ideas

**Not yet implemented — user has requested but session ran out:**

### Gradient-blur glow on the CTA section (pending)

> **User's exact ask** (Romanian + English): "la sfarsit de pagina
> transition for cta vreau sa fie Gradient blur soft peste shape-ul
> albastru. Practic, duplici layer-ul, aplici Gaussian Blur mare
> (150–200), apoi îl setezi pe blend mode 'Plus Lighter' sau 'Screen'
> cu opacitate ~70–80% ca să creeze acel glow/fade smooth. Sa fie o
> forma abstracta."

Concrete implementation plan for the next session:

1. Inside `components/cta.tsx`, inside the `<section>` but under the
   text content, add 2–3 absolutely-positioned blurred blobs:
   ```tsx
   <div
     aria-hidden
     className="pointer-events-none absolute -top-[10%] left-[10%] h-[600px] w-[600px] opacity-70"
     style={{
       background: "radial-gradient(circle, #7B5CFF 0%, #22C9F5 50%, transparent 70%)",
       filter: "blur(180px)",
       mixBlendMode: "plus-lighter",
       borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%", // organic blob
     }}
   />
   ```
2. Give them asymmetric `border-radius` values (the "63% 37% 54% 46% /
   55% 48% 52% 45%" pattern) for organic glass-blob shapes.
3. Layer 2–3 with different positions, sizes, opacities.
4. Optionally animate slow drift via the existing `.glow-breathe` and
   `.glow-breathe-slow` keyframes.
5. Keep `mix-blend-mode: plus-lighter` (or `screen`) to additively
   brighten the blue gradient underneath.

### Other nice-to-haves on the backlog

- Could delete unused `components/qualifier.tsx` file from disk (it's
  no longer imported, but the file itself lingers)
- Could delete unused `public/leadity-guarantee.png` and
  `public/refund-seal.png`
- Could refactor the inline brand-gradient backgrounds that still live
  in a few places (`components/pricing.tsx` mobile row variable,
  popup bg ghost spot, etc.) into a shared const or the `.bg-brand-gradient`
  utility. Low priority.
- FAQ could gain keyboard shortcut hints (like Stripe's) — not asked
  for, just an idea.

### Things the user might ask next session

Based on their pattern, the next iteration might touch:
- Polish the new gradient-blur glow (tuning after they see it live)
- More copy revisions on specific sections
- A new section (they've asked to add/remove several times)
- Another glass tuning round (they love iterating on glass)

---

## 15. How to Continue From a New Session

1. **Read this file first.** All of it. Then proceed.

2. Confirm the worktree CWD:
   ```bash
   cd "/Users/chiriacion/Desktop/Claude Max/.claude/worktrees/festive-tharp/leadity"
   ```

3. Pull latest before editing:
   ```bash
   git pull origin main
   git log --oneline -5   # latest should match or be past 8e2fcb9
   ```

4. Make the edit. Typecheck. Commit with multi-line message. Push.

5. Tell the user the commit hash and "Live on Vercel in ~60s".

6. If the user says "nothing changed" — it's cache. Suggest
   `Cmd+Shift+R`. Do NOT re-ship the same commit.

7. If the user asks for a new component / section — follow the
   existing patterns (eyebrow → H2 → sub → content → CTAs), use the
   glass system (`.glass-card` / `.glass-chip` / `.glass-brand`), and
   preserve the Apple/Stripe/Linear sensibility.

8. Copy in Romanian + English mix is fine from the user — write back
   in English (mostly) with occasional Romanian phrases to mirror when
   it helps clarity.

9. When in doubt on tone: punchy > verbose, specific > vague, honest >
   polished.

10. **Ship fast. Lock in.**

---

## Appendix A — Environment Snapshot

```
macOS (user: chiriacion, Desktop-based workflow)
Node via npm (no pnpm/bun)
Default browser: likely Chrome (uses Cmd+Shift+R to bust cache)
iPhone screenshots common (references iOS 26)
```

## Appendix B — Commits worth remembering

```
8e2fcb9  feat: remove qualifier, full glass coverage, full-width CTA section
         ← latest as of this memory file
a6f0976  feat: testimonial cards=PNG only + fix shadow cutoff + rewrite CTA copy
587a1d5  feat: full Apple Liquid Glass pass — every card + every button
20cfdf8  feat: high-quality Apple Liquid Glass + manual-carousel testimonials
1792cf8  feat: Apple "Liquid Glass" material across cards, buttons, chips
d9e3805  feat: simplify hero + apply glassmorphism across supporting cards
bc9c54f  style(pricing-mobile): lead with mobile count + softer spring animation
7f6dcc2  feat(pricing): mobile-only accordion selector with blue-gradient expand
fa6c6cc  feat: affiliate discount banner + delayed 300-free-leads signup popup
4f83853  feat: batch polish — comparison, guarantee, testimonials, CTA, footer
e709b13  redesign(qualifier): spec-sheet layout + tighter parallel copy
6c05152  redesign(cta): climactic blue-gradient card with ghost + trust row
```

---

_End of iorshik.md — keep this file in sync after major sessions._
