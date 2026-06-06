/**
 * / — Homepage (v4 — Material-3 / Google-Workspace feel)
 *
 * v4 ships per the message-7 brief: high-converting Leadity landing
 * that matches the live app's brand (glassmorphism nav · signature blue
 * gradient · 12px radii · Roboto Flex · Material Symbols icons · no
 * fake proof). v1/v2.1/v3 components remain in their respective folders
 * and are recoverable by reverting this file's imports.
 *
 * Section order (per brief):
 *   Nav · Hero · Promise · How it works · Coverage · Pricing
 *   · Guarantee + Compare · FAQ · Final CTA · Footer
 *
 * Per-version git anchors:
 *   v1    b82d5e8   pure liquid-glass, pre-SEO
 *   v2.1  0f1be2f   v1 design + SEO inventory + pricing hero-count flip
 *   v3    b4a832d   webild-style refit (Inter Tight, cloud sky hero)
 *   v4    HEAD      Material-3 light landing matching live app
 */

import type { Metadata } from "next";
import { NavV4 } from "@/components/v4/nav";
import { HeroV4 } from "@/components/v4/hero";
import { PromiseV4 } from "@/components/v4/promise";
import { HowItWorksV4 } from "@/components/v4/how-it-works";
import { CoverageV4 } from "@/components/v4/coverage";
import { PricingV4 } from "@/components/v4/pricing";
import { GuaranteeCompareV4 } from "@/components/v4/guarantee-compare";
import { FaqV4 } from "@/components/v4/faq";
import { FinalCtaV4 } from "@/components/v4/final-cta";
import { FooterV4 } from "@/components/v4/footer";

export const metadata: Metadata = {
  title:
    "Leadity — Owner mobile numbers. CSV in 60 seconds.",
  description:
    "Carrier-validated US owner mobile leads. Buy a credit pack, scrape by niche + state, get a CSV in 60 seconds. 1 credit = 1 validated mobile. Credits never expire.",
  alternates: { canonical: "https://leadity.io" },
};

export default function Page() {
  return (
    <>
      <NavV4 />
      <main>
        <HeroV4 />
        <PromiseV4 />
        <HowItWorksV4 />
        <CoverageV4 />
        <PricingV4 />
        <GuaranteeCompareV4 />
        <FaqV4 />
        <FinalCtaV4 />
      </main>
      <FooterV4 />
    </>
  );
}
