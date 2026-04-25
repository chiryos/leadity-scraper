/**
 * /b2b-cold-calling-list — Generated from Template A (raw-keyword SEO landing)
 *
 * Targets: "B2B cold calling list" + variations.
 * Schema: Article + FAQPage + BreadcrumbList.
 * Soft cornerstone — indexable but not in main nav.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title: "B2B Cold Calling List — 2,000 Verified Mobiles for $59 | Leadity",
  description:
    "Build a B2B cold-call list in under 5 minutes. 2,000 verified owner-direct mobile numbers for $59 flat — no credits, no per-task multipliers. Filter by industry × geography, scrub against the National DNC Registry, export with line-type and DNC flags ready for your dialer.",
  alternates: { canonical: "https://leadity.io/b2b-cold-calling-list" },
  openGraph: {
    title: "B2B Cold Calling List — Leadity",
    description: "Build a B2B cold-call list in under 5 minutes. 2,000 verified owner-direct mobile numbers for $59 flat — no credits, no per-task multipliers. Filter by industry × geography, scrub against the National DNC Registry, export with line-type and DNC flags ready for your dialer.",
    type: "article",
    url: "https://leadity.io/b2b-cold-calling-list",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "B2B Cold Calling List — 2,000 Verified Mobiles for $59 | Leadity",
      datePublished: "2026-04-26T00:00:00Z",
      dateModified: "2026-04-26T00:00:00Z",
      wordCount: 1400,
      author: {
        // TODO: replace placeholder with real founder name + LinkedIn URL
        "@type": "Person",
        name: "Vincent Chiriac",
        jobTitle: "Founder, Leadity",
        url: "https://leadity.io/about",
        sameAs: ["https://www.linkedin.com/in/vincentchiriac"],
      },
      publisher: { "@id": "https://leadity.io/#organization" },
      mainEntityOfPage: { "@id": "https://leadity.io/b2b-cold-calling-list" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Leadity do as a B2B cold calling list?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leadity extracts owner-direct mobile phone numbers from Google Business Profile listings across 1,255+ US local business categories. Unlike generic scrapers that return whatever Google publishes (mostly receptionist landlines), Leadity uses carrier-level HLR lookup to filter for verified mobile numbers only. Output is exported as CSV or pushed natively to HubSpot, Pipedrive, Close, Smartlead, Instantly, or Lemlist.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Leadity cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Flat pay-as-you-go: $59 for 2,000 verified mobiles, $129 for 5,000, $229 for 10,000. No credit math, no per-seat fees, no monthly minimums. Free tier: 50 owner mobiles, no credit card required.",
          },
        },
        {
          "@type": "Question",
          name: "Is using a B2B cold calling list legal in the US?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Public Google Business Profile data is legally scrapeable in the US under hiQ Labs v. LinkedIn (2019). The compliance risk for cold callers using scraped data isn&rsquo;t the scraping itself — it&rsquo;s the outreach (TCPA + state-specific cold-call laws). Leadity exports include TCPA-aware flags (DNC + line-type) to help operators stay compliant.",
          },
        },
        {
          "@type": "Question",
          name: "How does Leadity compare to Outscraper or Apify as a B2B cold calling list?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Outscraper and Apify are generic Google Maps scrapers — they return whatever Google publishes (mostly receptionist landlines, ~8-15% mobile coverage). Leadity is purpose-built for cold outreach: 84%+ verified mobile rate via carrier-level HLR lookup, TCPA-aware export flags, flat pricing instead of credit math. Real cost-per-usable-mobile: $0.027 (Leadity) vs ~$0.10 (Outscraper).",
          },
        },
        {
          "@type": "Question",
          name: "Can I integrate B2B cold calling list output with my CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — Leadity supports CSV export, Google Sheets export, and native push to HubSpot, Pipedrive, Close, Smartlead, Instantly, Lemlist, n8n, Zapier, and Make.com. There&rsquo;s also a REST API and an MCP server for AI-agent integration.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadity.io" },
        { "@type": "ListItem", position: 2, name: "B2B Cold Calling List", item: "https://leadity.io/b2b-cold-calling-list" },
      ],
    },
  ],
};

export default function LandingPage() {
  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
          B2B Cold Calling List <span className="text-brand-gradient">of US local business owners</span>
        </h1>

        <div className="mt-6 flex items-center gap-4 text-sm text-[var(--color-text-secondary)]">
          <span>Last updated April 2026</span>
        </div>

        <p className="mt-8 text-xl leading-relaxed">
          Build a B2B cold-call list in under 5 minutes. 2,000 verified owner-direct mobile numbers for $59 flat — no credits, no per-task multipliers. Filter by industry × geography, scrub against the National DNC Registry, export with line-type and DNC flags ready for your dialer.
        </p>

        <div className="mt-12 p-6 border-l-4 border-[#1B86FF] bg-[var(--color-surface)] rounded-r-2xl">
          <p className="text-base font-semibold">What you get</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>* 84%+ verified mobile rate (vs ~8-15% on generic scrapers)</li>
            <li>* 1,255+ US local business categories</li>
            <li>* Filter by state, metro, ZIP, or polygon</li>
            <li>* TCPA-aware export (DNC flags + line-type tags)</li>
            <li>* Flat pay-as-you-go pricing: $59 for 2,000 mobiles</li>
            <li>* CSV / Sheets / HubSpot / Pipedrive / Close / Smartlead / Instantly / Lemlist</li>
            <li>* Free tier: 50 mobiles, no credit card</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-16">How B2B cold calling list works at Leadity</h2>
        <ol className="mt-4 space-y-3 text-base list-decimal list-inside">
          <li><strong>Pick a category</strong> from 1,255+ US local business types.</li>
          <li><strong>Filter by geography</strong> — state, metro, ZIP, or custom polygon.</li>
          <li><strong>Toggle &quot;Mobile only&quot;</strong> — carrier-level HLR lookup runs before delivery.</li>
          <li><strong>Export</strong> — CSV, Google Sheets, or native CRM push.</li>
          <li><strong>Run outreach</strong> — DNC-scrub before dialing (Leadity exports include flags).</li>
        </ol>

        <h2 className="text-3xl font-bold mt-16">Why teams choose Leadity</h2>
        <p className="mt-4 text-base">
          Generic Google Maps scrapers (Outscraper, Apify, Scrap.io) return
          whatever Google publishes — typically a mix of receptionist
          landlines, business landlines, and the occasional owner mobile.
          For cold callers, that means burning through 1,000 records to
          find ~80 dialable mobiles. Leadity inverts the math: every
          number we deliver has been carrier-verified as a mobile, so
          you&rsquo;re working a list that&rsquo;s 84%+ usable from the start.
        </p>

        <p className="mt-4 text-base">
          Apollo, ZoomInfo, and Cognism are excellent for enterprise
          firmographic data but have weak coverage on local SMBs (8-12%
          mobile coverage on roofing, dental, HVAC, solar, pest, etc.).
          Leadity sources from where local SMB owners actually are: Google
          Business Profiles + carrier line-type verification.
        </p>

        <h2 className="text-3xl font-bold mt-16">Pricing</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <div className="p-6 border rounded-2xl">
            <h3 className="text-base font-bold">Starter</h3>
            <p className="text-3xl font-bold mt-2">$59</p>
            <p className="text-sm">2,000 verified mobiles</p>
          </div>
          <div className="p-6 border-2 border-[#1B86FF] rounded-2xl">
            <h3 className="text-base font-bold">Growth</h3>
            <p className="text-3xl font-bold mt-2">$129</p>
            <p className="text-sm">5,000 verified mobiles</p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h3 className="text-base font-bold">Scale</h3>
            <p className="text-3xl font-bold mt-2">$229</p>
            <p className="text-sm">10,000 verified mobiles</p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">Try Leadity free — 50 owner mobiles, no credit card</h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            See the verified-mobile difference on a real list before you spend a dollar.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-liquid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold">
              Get 50 mobiles free
            </Link>
            <Link href="/alternatives/outscraper" className="glass-chip inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base">
              vs Outscraper
            </Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-16">Related</h2>
        <ul className="mt-4 space-y-2 text-base">
          <li><Link href="/alternatives/outscraper" className="text-[#1B86FF] underline">Outscraper alternative</Link></li>
          <li><Link href="/alternatives/apify" className="text-[#1B86FF] underline">Apify alternative</Link></li>
          <li><Link href="/vs/apollo" className="text-[#1B86FF] underline">Apollo alternative for SMB</Link></li>
          <li><Link href="/solutions/roofing-contractors" className="text-[#1B86FF] underline">For roofing contractors</Link></li>
          <li><Link href="/compliance/tcpa-guide-2026" className="text-[#1B86FF] underline">TCPA guide 2026</Link></li>
          <li><Link href="/blog/best-google-maps-scrapers-2026" className="text-[#1B86FF] underline">Best Google Maps scrapers in 2026</Link></li>
        </ul>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
