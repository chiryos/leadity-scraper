/**
 * / — Homepage
 *
 * Restored to the v1 liquid-glass design after Plan A's generic SEO-pack
 * homepage was rejected visually. The component-based v1 stack stays;
 * SEO is handled at the layout level (metadata + Organization +
 * SoftwareApplication + WebSite schema in app/layout.tsx) plus the
 * 47 new routes built in Phases 2-12 (alternatives/, vs/, solutions/,
 * compliance/, blog/, tools/, integrations/, mcp/, api, pricing).
 *
 * Net result: design = v1 (the polish you actually built), SEO surface
 * = the full master-pack inventory.
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

// SEO metadata stays — this is the brand-equity page, indexed at /
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
