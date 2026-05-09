/**
 * / — Homepage (v3 — webild-style refit, full content)
 *
 * v2 components remain in components/* and v2.1 is recoverable at
 * commit 0f1be2f. v3 components live in components/v3/*.
 *
 * v3 sections shipped:
 *   ✓ NavV3          white-box pill nav, fixed top
 *   ✓ HeroV3         cloud sky bg + tight Inter Tight h1 + category
 *                    search input (Cmd ⌘ left, "/" hotkey right)
 *   ✓ ShowcaseV3     "How it works" 5-step product tour
 *   ✓ ComparisonV3   real cost-per-mobile table (Leadity vs alts)
 *   ✓ PricingV3      4-card grid (Free / Starter / Growth / Scale),
 *                    Standard ⇄ Affiliate toggle, hero count first
 *   ✓ GuaranteeV3    refund + 50% bonus, dark portal section with
 *                    conic rainbow halo on the seal image
 *   ✓ TestimonialsV3 infinite right→left marquee inside white-box
 *   ✓ FaqV3          accordion items, blue + button rotates on open
 *   ✓ CtaV3          dark portal final CTA with rainbow ring effect
 *   ✓ FooterV3       massive blue wordmark + 3-column links
 *
 * Background: v3-bg (#F5F8FF) flows through all light sections.
 * Dark portal sections (Guarantee, Cta) bleed in/out via radial blue
 * glow ribbons.
 */

import type { Metadata } from "next";
import { NavV3 } from "@/components/v3/nav";
import { HeroV3 } from "@/components/v3/hero";
import { ShowcaseV3 } from "@/components/v3/showcase";
import { ComparisonV3 } from "@/components/v3/comparison";
import { PricingV3 } from "@/components/v3/pricing";
import { GuaranteeV3 } from "@/components/v3/guarantee";
import { TestimonialsV3 } from "@/components/v3/testimonials";
import { FaqV3 } from "@/components/v3/faq";
import { CtaV3 } from "@/components/v3/cta";
import { FooterV3 } from "@/components/v3/footer";
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
      <NavV3 />
      <main className="v3-bg">
        <HeroV3 />
        <ShowcaseV3 />
        <ComparisonV3 />
        <PricingV3 />
        <GuaranteeV3 />
        <TestimonialsV3 />
        <FaqV3 />
        <CtaV3 />
      </main>
      <FooterV3 />
      <SignupPopup />
    </>
  );
}
