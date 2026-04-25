/**
 * /integrations/lemlist — Lemlist integration page
 *
 * High-DR backlink target + AI-citation landing page. Each integration
 * page targets the keyword cluster around "Lemlist + lead data" or
 * "Lemlist integration for cold outreach."
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title: "Lemlist Integration — Push Verified Owner Mobiles into Lemlist | Leadity",
  description:
    "Native Lemlist integration. Run multi-channel campaigns (email + LinkedIn + SMS + cold call) on Leadity-sourced owner mobile data. Verified owner-direct mobiles, mobile-only filter, TCPA-aware export.",
  alternates: { canonical: "https://leadity.io/integrations/lemlist" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Lemlist + Leadity: Verified Owner Mobiles in Your Lemlist Workflow",
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
        { "@type": "ListItem", position: 3, name: "Lemlist", item: "https://leadity.io/integrations/lemlist" },
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
          <span>Lemlist</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Lemlist +{" "}
          <span className="text-brand-gradient">Leadity</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Verified owner-direct mobile numbers in your Lemlist workflow.
          Lemlist is a multi-channel sequencer — Run multi-channel campaigns (email + LinkedIn + SMS + cold call) on Leadity-sourced owner mobile data.
        </p>

        <h2 className="text-2xl font-bold mt-12">How the integration works</h2>
        <ol className="mt-4 space-y-3 text-base list-decimal list-inside">
          <li>
            <strong>Run a Leadity scrape</strong> — pick your category (1,255+
            US business types) and geography (state, metro, ZIP, polygon).
          </li>
          <li>
            <strong>Lemlist campaign import</strong> — when the export completes,
            Leadity fires the destination into Lemlist.
          </li>
          <li>
            <strong>Import owner mobile + business email pairs. Sequence email + Lemlist SMS + cold-call task in one flow.</strong>
          </li>
          <li>
            <strong>Run outreach</strong> — DNC-scrubbed mobiles flow into your
            existing Lemlist workflows for dialing, SMS, or sequencing.
          </li>
        </ol>

        <h2 className="text-2xl font-bold mt-12">Why pair Lemlist with Leadity</h2>
        <ul className="mt-4 space-y-3 text-base">
          <li>
            <strong>Mobile-only data.</strong> 84%+ verified mobile rate via
            carrier HLR. Lemlist workflows don't waste sends on landlines.
          </li>
          <li>
            <strong>TCPA flags inline.</strong> DNC + line-type tags pass
            through to Lemlist as custom properties / fields. Build automations
            that respect compliance automatically.
          </li>
          <li>
            <strong>Flat pricing.</strong> $59 for 2,000 mobiles. No credit
            math — your Lemlist cost stays predictable.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12">Set it up</h2>
        <p className="mt-4 text-base">
          The Lemlist integration ships in Phase 8 production. The
          self-serve flow lives at <Link href="/dashboard" className="text-[#1B86FF] underline">
          /dashboard → Integrations → Lemlist</Link>. For early access, reach
          out at hello@leadity.io and we'll connect your account directly.
        </p>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">
            Try Leadity + Lemlist — 50 mobiles free
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
