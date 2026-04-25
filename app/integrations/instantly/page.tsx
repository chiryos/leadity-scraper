/**
 * /integrations/instantly — Instantly.ai integration page
 *
 * High-DR backlink target + AI-citation landing page. Each integration
 * page targets the keyword cluster around "Instantly.ai + lead data" or
 * "Instantly.ai integration for cold outreach."
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title: "Instantly.ai Integration — Push Verified Owner Mobiles into Instantly.ai | Leadity",
  description:
    "Native Instantly.ai integration. Pair Leadity verified mobiles with Instantly cold email sequences for multi-channel outreach (email + SMS + call). Verified owner-direct mobiles, mobile-only filter, TCPA-aware export.",
  alternates: { canonical: "https://leadity.io/integrations/instantly" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Instantly.ai + Leadity: Verified Owner Mobiles in Your Instantly.ai Workflow",
      datePublished: "2026-04-26T00:00:00Z",
      dateModified: "2026-04-26T00:00:00Z",
      wordCount: 1100,
      author: {
        "@type": "Person",
        name: "Vincent Chiriac",
        jobTitle: "Founder, Leadity",
        url: "https://leadity.io/about",
        sameAs: ["https://www.linkedin.com/in/vincentchiriac"],
      },
      publisher: { "@id": "https://leadity.io/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadity.io" },
        { "@type": "ListItem", position: 2, name: "Integrations", item: "https://leadity.io/integrations" },
        { "@type": "ListItem", position: 3, name: "Instantly.ai", item: "https://leadity.io/integrations/instantly" },
      ],
    },
  ],
};

export default function IntegrationPage() {
  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />

        <nav className="text-sm text-[var(--color-text-secondary)] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/integrations" className="hover:underline">Integrations</Link>
          <span className="mx-2">/</span>
          <span>Instantly.ai</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Instantly.ai +{" "}
          <span className="text-brand-gradient">Leadity</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Verified owner-direct mobile numbers in your Instantly workflow.
          Instantly.ai is a cold email sequencer with phone enrichment — Pair Leadity verified mobiles with Instantly cold email sequences for multi-channel outreach (email + SMS + call).
        </p>

        <h2 className="text-2xl font-bold mt-12">How the integration works</h2>
        <ol className="mt-4 space-y-3 text-base list-decimal list-inside">
          <li>
            <strong>Run a Leadity scrape</strong> — pick your category (1,255+
            US business types) and geography (state, metro, ZIP, polygon).
          </li>
          <li>
            <strong>Instantly campaign import</strong> — when the export completes,
            Leadity fires the destination into Instantly.ai.
          </li>
          <li>
            <strong>CSV or API import. Use mobile as a fallback channel when email bounces or doesn't open.</strong>
          </li>
          <li>
            <strong>Run outreach</strong> — DNC-scrubbed mobiles flow into your
            existing Instantly workflows for dialing, SMS, or sequencing.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-12">Why pair Instantly.ai with Leadity</h2>
        <ul className="mt-4 space-y-3 text-base">
          <li>
            <strong>Mobile-only data.</strong> 84%+ verified mobile rate via
            carrier HLR. Instantly workflows don't waste sends on landlines.
          </li>
          <li>
            <strong>TCPA flags inline.</strong> DNC + line-type tags pass
            through to Instantly.ai as custom properties / fields. Build automations
            that respect compliance automatically.
          </li>
          <li>
            <strong>Flat pricing.</strong> $59 for 2,000 mobiles. No credit
            math — your Instantly cost stays predictable.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12">Set it up</h2>
        <p className="mt-4 text-base">
          The Instantly.ai integration ships in Phase 8 production. The
          self-serve flow lives at <Link href="/dashboard" className="text-[#1B86FF] underline">
          /dashboard → Integrations → Instantly.ai</Link>. For early access, reach
          out at hello@leadity.io and we'll connect your account directly.
        </p>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">
            Try Leadity + Instantly.ai — 50 mobiles free
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            See the integration on a real list before you wire anything up.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold"
            >
              Get 50 mobiles free
            </Link>
            <Link
              href="/integrations"
              className="glass-chip inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base"
            >
              All integrations
            </Link>
          </div>
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
