/**
 * / — Homepage (v2.1 — Apple Liquid Glass design)
 *
 * Switched back from v3 (webild-style refit) per user request.
 * v3 components remain available in components/v3/* — restore by
 * reverting this file to the v3 import set. v3 tokens in globals.css
 * + Inter Tight font load are additive and harmless when unused.
 *
 * Per-version git anchors:
 *   v1    b82d5e8   pure liquid-glass, pre-SEO
 *   v2.1  0f1be2f   v1 design + SEO inventory + pricing hero-count flip
 *   v3    b4a832d   webild-style refit (current branch on git, this file
 *                   import set restores v2.1)
 */

import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Showcase } from "@/components/showcase";
import { Comparison } from "@/components/comparison";
import { Pricing } from "@/components/pricing";
import { Guarantee } from "@/components/guarantee";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title:
    "Leadity — Owner-Direct Mobile Numbers for US Local Business Outreach",
  description:
    "Direct mobile phone numbers for decision-makers at 2.4M+ US local businesses. Built for B2B cold-call and cold-SMS teams. Verified mobile-only data, 1,255+ categories, TCPA-aware export, from $59 flat.",
  alternates: { canonical: "https://leadity.io" },
};

export default function Page() {
  return (
    <>
      <Nav />
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
      <SignupPopup />
    </>
  );
}
