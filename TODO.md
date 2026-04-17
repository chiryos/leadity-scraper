# Open decisions to validate

- Confirm the wordmark mark — currently a 6px mint dot beside `leadity` (Inter 600, -0.04em). If a real logo SVG exists, swap it into `nav.tsx` and `footer.tsx`.
- Hero "Sign in" link points to `#` — wire it once an auth provider is chosen.
- All pricing CTAs scroll to `#pricing-cta`; replace with a real Stripe Checkout (or Outseta / LemonSqueezy) URL per plan in `lib/plans.ts`.
- "Talk to a human" mailto goes to `hello@leadity.com` — confirm the inbox actually exists.
- Logo cloud uses 6 plain wordmark placeholders. Replace with monochrome SVGs once real customer permissions are in.
- Affiliate-price toggle is UI-only state. Decide whether to gate it behind a `?ref=` query param, a cookie set by a `/r/[code]` route, or community-only login.
- Outscraper / Clearoutphone comparison numbers are pulled from the brief — re-verify against current public pricing before launch.
- OG image is generated at the edge with system Inter — Next/font OG support is limited; if pixel-perfect typography matters, swap to a static `og.png` in `/public`.
- Footer "Terms" and "Privacy" links go to `#`. Wire to real policy pages before going live.
