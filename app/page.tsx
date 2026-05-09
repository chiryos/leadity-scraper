/**
 * / — Homepage (v3 — webild-style refit)
 *
 * Replaces the v2.1 liquid-glass stack with the new webild-style v3
 * layout. v2 components remain in components/* and v2.1 lives at
 * commit 0f1be2f (recoverable via git checkout).
 *
 * v3 components live in components/v3/*.
 *
 * Sections currently shipped in v3:
 *   ✓ NavV3        — white-box pill, fixed top
 *   ✓ HeroV3       — cloud sky bg, tight Inter Tight h1, white-box prompt
 *   ✓ SectionFrame — eyebrow + h2 + right-aligned CTA pattern (used as
 *                     placeholders below until each section is fully
 *                     rebuilt)
 *   ✓ FooterV3     — massive blue wordmark + 3-column links
 *
 * Sections still v2 (will be rebuilt in v3 over the next commits):
 *   • Showcase, Comparison, Pricing, Guarantee, Testimonials, FAQ, CTA
 *     — these are placeholders right now (SectionFrame headers, no body)
 *     so you can see the v3 architecture rendered end-to-end.
 *
 * SignupPopup kept as-is (v1 styling).
 */

import type { Metadata } from "next";
import { NavV3 } from "@/components/v3/nav";
import { HeroV3 } from "@/components/v3/hero";
import { SectionFrame } from "@/components/v3/section-frame";
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

        {/* Placeholder sections — full body rebuilds incoming. */}
        <SectionFrame
          id="how-it-works"
          eyebrow="How it works"
          headlineLead="Owners&rsquo; mobiles in"
          headlineEmphasis="three clean steps."
          ctaLabel="Get started"
          ctaHref="#pricing"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Pick a niche.",
                body: "1,255+ categories and 32,741 ZIPs already mapped. Choose by industry × geography in plain English.",
              },
              {
                step: "02",
                title: "Run the scrape.",
                body: "Live carrier verification filters for mobile numbers only — no landlines, no VOIP slipping through.",
              },
              {
                step: "03",
                title: "Export the CSV.",
                body: "TCPA-aware export with DNC + line-type flags. CSV, Sheets, or native HubSpot/Pipedrive/Close push.",
              },
            ].map((card) => (
              <div
                key={card.step}
                className="v3-white-box v3-grad-ring rounded-[14px] p-6 md:p-7"
              >
                <div className="v3-rainbow-text v3-font text-[12px] font-medium tracking-tight">
                  Step {card.step}
                </div>
                <h3 className="v3-font mt-3 text-[var(--v3-fg)] text-[22px] md:text-[26px] font-medium leading-tight">
                  {card.title}
                </h3>
                <p className="v3-font mt-3 text-[14.5px] leading-relaxed text-[var(--v3-fg)]/70">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </SectionFrame>

        <SectionFrame
          id="features"
          eyebrow="Built for cold outreach"
          headlineLead="Mobile-only filter."
          headlineEmphasis="TCPA-aware export."
          ctaLabel="See pricing"
          ctaHref="#pricing"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="v3-white-box v3-grad-ring rounded-[14px] p-7">
              <div className="v3-text-eyebrow text-[14px]">Verified</div>
              <h3 className="v3-font mt-2 text-[26px] font-medium leading-tight text-[var(--v3-fg)]">
                95% verified mobile rate
              </h3>
              <p className="v3-font mt-3 text-[14.5px] leading-relaxed text-[var(--v3-fg)]/70">
                Live carrier line-type lookup before delivery. Refund + 50%
                bonus on anything that doesn&rsquo;t text.
              </p>
            </div>
            <div className="v3-white-box v3-grad-ring rounded-[14px] p-7">
              <div className="v3-text-eyebrow text-[14px]">Compliant</div>
              <h3 className="v3-font mt-2 text-[26px] font-medium leading-tight text-[var(--v3-fg)]">
                DNC + line-type tags
              </h3>
              <p className="v3-font mt-3 text-[14.5px] leading-relaxed text-[var(--v3-fg)]/70">
                Every export ships TCPA-aware flags so your team can scrub
                state DNC + federal DNC before any dial.
              </p>
            </div>
          </div>
        </SectionFrame>

        <SectionFrame
          id="pricing"
          eyebrow="Pricing"
          headlineLead="Pay only for"
          headlineEmphasis="verified mobiles."
          ctaLabel="Start free"
          ctaHref="#pricing"
          centered
        >
          <div className="v3-white-box v3-grad-ring mx-auto max-w-[640px] rounded-[14px] p-8 text-center">
            <p className="v3-font text-[15px] text-[var(--v3-fg)]/75">
              Full v3 pricing card grid coming in the next commit. Free 400 +
              Starter 2k + Growth 5k + Scale 10k tiers, the same hero-count-
              first hierarchy from v2.1, restyled with v3 typography &amp;
              white-box surfaces.
            </p>
          </div>
        </SectionFrame>

        <SectionFrame
          id="faq"
          eyebrow="Frequently asked"
          headlineLead="Questions outbound"
          headlineEmphasis="teams actually ask."
          centered
        >
          <div className="v3-white-box v3-grad-ring mx-auto max-w-[640px] rounded-[14px] p-8 text-center">
            <p className="v3-font text-[15px] text-[var(--v3-fg)]/75">
              v3 FAQ component (white-box rows with blue-pill `+` toggle on
              the right) is the next build target.
            </p>
          </div>
        </SectionFrame>
      </main>

      <FooterV3 />
      <SignupPopup />
    </>
  );
}
