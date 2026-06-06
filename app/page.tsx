/**
 * / — Homepage (v4.1 — v2 liquid-glass surfaces + v4 typography & CTAs)
 *
 * v4.1 keeps the v2 hand-crafted aesthetic (glass cards, blue-glass
 * Guarantee + CTA sections, comparison glass card with grow-up
 * animation, testimonial marquee, FAQ glass accordion, footer
 * watermark) but swaps:
 *   • font  → Roboto Flex (v4)
 *   • CTAs  → solid #3B5BDB pill, 12px radius (v4)
 *   • nav   → v4's light glass pill (matches the rest of the buttons)
 *
 * Implementation:
 *   The whole tree is wrapped in `.v41-scope`. `globals.css` has a
 *   CSS layer scoped to `.v41-scope` that:
 *     – cascades `font-family: var(--v4-font)` to every text node
 *     – repaints v2 button classes (`.btn-liquid`, `.glass-chip`,
 *       `.glass-chip-dark`, `.glass-brand` on buttons) as v4 buttons
 *     – squashes `rounded-full` button sizing to v4's 12px radius
 *     – keeps `.glass-brand` as section card surface (pricing Growth
 *       tier), only flipping it when on a button/anchor
 *
 * Per-version git anchors:
 *   v1    b82d5e8   pure liquid-glass, pre-SEO
 *   v2.1  0f1be2f   v1 design + SEO inventory + pricing hero-count flip
 *   v3    b4a832d   webild-style refit (Inter Tight, cloud sky hero)
 *   v4    a1c5859   Material-3 light landing matching live app
 *   v4.1  HEAD      hybrid: v2 visuals + v4 type + v4 CTAs
 */

import type { Metadata } from "next";
import { NavV4 } from "@/components/v4/nav";
import { Hero } from "@/components/hero";
import { Showcase } from "@/components/showcase";
import { Comparison } from "@/components/comparison";
import { Pricing } from "@/components/pricing";
import { Guarantee } from "@/components/guarantee";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title:
    "Leadity — Owner mobile numbers. CSV in 60 seconds.",
  description:
    "Carrier-validated US owner mobile leads. Buy a credit pack, scrape by niche + state, get a CSV in 60 seconds. 1 credit = 1 validated mobile. Credits never expire.",
  alternates: { canonical: "https://leadity.io" },
};

export default function Page() {
  return (
    <div className="v41-scope">
      <NavV4 />
      <main>
        <Hero />
        <Showcase />
        <Comparison />
        <Pricing />
        <Guarantee />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
