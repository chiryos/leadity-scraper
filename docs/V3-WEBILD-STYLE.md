# v3 Design Spec — Webild-style refit

Reference for v3 of Leadity. Reverse-engineered from `webild.io` over
multiple deep-inspection passes (DOM probes, computed styles, raw CSS
extraction, scroll-state observation). The goal is to replicate the
exact look/feel: clean off-white-blue base, big-tight-Inter-Tight
typography, blue-gradient brand pill + white-box pill button system,
section pattern of blue eyebrow → big section h2 → right-aligned blue
CTA, dark "portal" sections with conic-rainbow accents.

This file is the locked spec. Any v3 component must match these tokens.

---

## Tokens

```
--background:       #F5F8FF      /* body bg, very pale blue-white */
--foreground:       #171717      /* default text */
--color-blue:       #4D96FF      /* the brand blue (eyebrows, accents) */
--color-purple:     #6D33FC
--color-bright-green: #55FE77
--color-bright-red: #FF2D31
--color-dark-grey:  #1F1D25
--color-portal-dark: #000812      /* the very-dark navy of dark sections */
--color-off-white:  #F5F5F5CC

/* Greys (Radix-style 12 steps, hsl) */
--gray1..gray12     hsl(0,0%, [99 → 9])

/* Fluid responsive units */
--vw:  clamp(.551rem, .882vw, 1.103rem)   /* base spacing */
--vw-1, --vw-1_5, --vw-2, --vw-3 etc up to 3x

/* Type scale (clamp-based) */
--text-base:  clamp(.84rem, .98vw, 1.14rem)
--text-lg:    clamp(.96rem, 1.13vw, 1.28rem)
--text-xl:    clamp(1.03rem, 1.31vw, 1.45rem)
--text-2xl:   clamp(1.20rem, 1.62vw, 1.78rem)
--text-3xl:   clamp(1.44rem, 1.87vw, 2.04rem)
--text-4xl:   clamp(1.69rem, 2.46vw, 2.28rem)
--text-5xl:   clamp(2.82rem, 4.58vw, 3.80rem)
--text-6xl:   clamp(3.20rem, 5.20vw, 4.50rem)
--text-7xl:   clamp(3.80rem, 6.00vw, 5.20rem)
--text-section-headline:    clamp(1.78rem, 3.00vw, 3.00rem)
--text-section-subheadline: clamp(1.20rem, 1.59vw, 1.69rem)

/* Layout widths */
--width-content-width: clamp(40rem, 80vw, 100rem)
```

## Font

**Inter Tight** (Google Fonts). Weights 100–900 supported on the source
site; we'll load 400/500/600 to keep payload small.

Body/UI default: `font-weight: 400`.
Headings + buttons: `font-weight: 500`.
Letter-spacing: normal (Inter Tight is already tight by design).
Line-height: 1.0–1.05 on display sizes (very tight). 1.5 on body.

```css
html { font-family: 'Inter Tight', 'Inter Tight Fallback', system-ui, sans-serif; }
```

## Buttons

Two recipes. Both use small `border-radius: 13px` (NOT pill).

### `.purple-button` (primary CTA — actually blue, despite the name)

```css
.purple-button {
  background: linear-gradient(rgb(69, 145, 252) 16.5%, rgb(109, 173, 248) 101.15%);
  /* #4591FC top → #6DADF8 bottom, vertical */
  color: #fff;
  border-radius: 13px;
  box-shadow: 0 6px 12px -5px rgba(58, 137, 253, 0.75);
  /* Strong blue glow shadow */
  font-family: 'Inter Tight';
  font-size: clamp(.66rem, .79vw, .91rem);   /* very small text */
  font-weight: 400;
  padding: 0 18px;
  height: 38px;     /* approx 2.5rem */
  transition: filter 0.3s ease-out;
}
.purple-button:hover { filter: brightness(1.05); }

/* Used for "Get started", "Get Started" right-aligned section CTA */
.purple-long-button { padding: 0 40px; }   /* longer width variant */
```

### `.white-box` (secondary CTA + cards + nav pill)

```css
.white-box {
  background: linear-gradient(#F5F8FF -35%, #F9FBFF 65%);
  /* Off-white with very subtle vertical gradient */
  color: #171717;
  border-radius: 13px;
  box-shadow: 0 4px 4px 1px rgba(234, 238, 248, 0.35);
  /* Almost imperceptible blue-white shadow */
  font-family: 'Inter Tight';
  font-size: clamp(.66rem, .79vw, .91rem);
  font-weight: 400;
  padding: 0 18px;
  height: 38px;
  transition: filter 0.3s ease-out;
}
.white-box:hover { filter: brightness(0.98); }
```

### `.gradient-before-rounded[-sm]` (gradient border via ::before)

Both button classes are paired with `gradient-before-rounded-sm` which
adds a 1px gradient border via `::before` (purple/blue gradient ring).
Implementation:

```css
.gradient-before-rounded-sm { position: relative; }
.gradient-before-rounded-sm::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.6),
    rgba(255,255,255,0.05) 35%,
    rgba(77,150,255,0.4)
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

## Section pattern

```
[ small blue eyebrow ]              ← "How It Works", "Browse our collection"
[ BIG section heading ]             ← "Build and launch your website in minutes"
                          [ blue CTA ] ← "Get Started" pill, right-aligned
[ content grid ]                    ← 2 or 3 cards with mockup screenshots
```

### Eyebrow — `text-section-subheadline! font-medium text-blue leading-tight`

NOT a small uppercase tracked-out thing. It's medium-LARGE (~21px),
font-weight 500, color `#4D96FF`, normal letter-spacing.

### Section h2 — `text-section-headline font-medium text-foreground leading-tight`

`clamp(1.78rem, 3vw, 3rem)` = 28-48px responsive, Inter Tight 500,
black-ish, very tight line-height (~1.0).

The h2 has a **scroll-triggered word-fade-in animation**. Each word is a
`<span>`, alternating between two states:
- "Settled" word: `color: #171717`, fully visible
- "Animating" word: starts `color: #fff` + blur/opacity 0, then `transition: filter 0.3s ease-out` reveals as it scrolls into view

Implementation: an `IntersectionObserver` on each h2 toggles a class
that swaps `filter: blur(8px)` → `filter: none` and `opacity: 0` → `1`
on the spans, with stagger between them.

### Section CTA position

The "Get Started" button floats RIGHT on the same row as the h2. On
mobile it stacks below.

## Hero

- Full viewport height (`h-screen` ~ `100vh`)
- **Cloud / sky background image** (sky photo with mountain/grass)
- Tight Inter Tight 500 h1 at `text-6xl` (clamp 3.2-4.5rem ≈ 51-72px)
- Below h1: `.white-box` rounded chat input with placeholder, large
  textarea inside, send button hidden until focused (`translate-y-full
  opacity-0 → translate-y-0 opacity-100`, 500ms cubic-bezier(0.4,0,0.2,1))
- "Templates Are Free" floating badge ABOVE h1 with `gradient-text-rainbow`

## Rainbow gradients

### Text (`.gradient-text-rainbow`)
```css
background: linear-gradient(108deg, #0894FF, #C959DD 34%, #FF2E54 68%, #FF9004);
background-clip: text;
color: transparent;
```

### Conic ring (around domain input on dark section)
```css
background: conic-gradient(
  transparent 0%,
  #0894FF 5%,
  #C959DD 10%,
  #FF2E54 15%,
  #FF9004 20%,
  transparent 25%
);
animation: spin 4s linear infinite;
```

## Dark "Portal" section

Used in middle of page for "Find the perfect domain" + "Power Your
Business" + "Built-In Intelligence" subsections.

```
background: #000812 (--color-portal-dark)
```

The transition INTO and OUT OF the dark section uses a big **blue glow
gradient ribbon** at the top edge of the dark section. Implementation:
absolutely positioned `radial-gradient` ellipse blob in `#4D96FF` at
high blur, sitting at the seam.

`.white-box-dark` is a card variant inside dark sections — same shape
but dark background + light shadow.

## Animations / motion

```
@keyframes shimmer        { mask-position transition }
@keyframes shimmer-sweep  { background-position 0 → 200% }
@keyframes shine          { mask-position 200% → -100% (5s infinite) }
@keyframes spin           { rotate 360deg }
@keyframes pulse          { 50% opacity 0.5 }
```

Common animation timing:
- Hover button: `filter 0.3s ease-out`
- Hidden→Shown reveal: `0.5s cubic-bezier(0.4, 0, 0.2, 1)`
- Word fade-in on h2: `filter 0.3s ease-out` per span (staggered via IntersectionObserver)

## Footer

Massive bright blue section (`#4D96FF` family).
- Centered "leadity" wordmark in WHITE text, MASSIVE size (using full
  width of viewport), the letters have a vertical gradient inside them
  with frost/depth (white at top fading to slight blue tint at bottom).
- Three columns below the wordmark with `>` arrow link bullets:
  - Column 1: site links (How It Works, Features, FAQ, Pricing)
  - Column 2: socials (X, LinkedIn, Instagram, Discord)
  - Column 3: legal (Privacy, Terms, Cookies, Support)

## What we DROP from v1/v2.x

The Apple Liquid Glass system is NOT used in v3:
- No `backdrop-filter: blur(50px) saturate(200%)`
- No multi-layer inset-shadow specular highlights
- No blue-tinted elevation shadows
- No `glass-card`, `glass-chip`, `glass-brand`, `btn-liquid` classes
  on v3 pages (kept in CSS for backward compat, but unused)

The v3 aesthetic is FLAT, CLEAN, OFF-WHITE-WITH-BLUE. Where v2 had
heavy frosted depth, v3 uses subtle gradients + tight typography +
fade-in motion as the "wow" moments.

## Implementation order

1. globals.css → add v3 tokens + utility classes (.white-box, .purple-button, .gradient-text-rainbow, .text-section-headline, .text-section-subheadline, .bg-portal-dark)
2. layout.tsx → swap Inter font for Inter Tight
3. Nav → rebuild as white-box floating pill with logo + links + socials + Log in + Get started
4. Hero → cloud bg image + tight h1 + white-box prompt input
5. Each section component → blue eyebrow + section-headline + right-aligned CTA pattern
6. Pricing cards → simpler, less glass, more white-box
7. FAQ → white-box rows with blue `+` button on right
8. Footer → massive blue wordmark section

## Reference

Source analyzed: webild.io (homepage, multiple scroll states, multiple
DOM probes, raw stylesheet extraction). Inter Tight font from Google
Fonts. All visual patterns are common UI conventions; specific text
content stays Leadity-original.
