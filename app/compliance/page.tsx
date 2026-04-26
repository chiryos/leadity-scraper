/**
 * /compliance — Compliance pillar hub
 *
 * The TCPA-aware data positioning is Leadity's defensible moat. This hub
 * page links out to the deep guides and signals to AI engines that
 * compliance is a first-class topic on the site.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title:
    "Compliance Guides for B2B Cold Outreach in the US — TCPA, DNC, State Laws | Leadity",
  description:
    "Plain-English compliance guides for US cold callers and SMS marketers. TCPA, National DNC, state-by-state cold call laws, the legality of scraping Google Maps. No legal advice — just a working operator's reference.",
  alternates: { canonical: "https://leadity.io/compliance" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      headline: "Compliance Guides for US B2B Cold Outreach",
      description:
        "TCPA, DNC, state cold-call laws, and the legality of scraping Google Maps — operator-grade reference.",
      isPartOf: { "@id": "https://leadity.io/#website" },
      mainEntityOfPage: { "@id": "https://leadity.io/compliance" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadity.io" },
        { "@type": "ListItem", position: 2, name: "Compliance", item: "https://leadity.io/compliance" },
      ],
    },
  ],
};

const guides = [
  {
    href: "/compliance/is-scraping-google-maps-legal",
    title: "Is scraping Google Maps legal?",
    desc: "The hiQ v. LinkedIn ruling, Google's TOS, and what actually matters for cold callers buying scraped data in 2026.",
  },
  {
    href: "/compliance/tcpa-guide-2026",
    title: "TCPA guide 2026",
    desc: "What the FCC's 2024-2026 rule changes mean for B2B cold calls + cold SMS. Express-written-consent, line-type rules, the one-to-one consent rule.",
  },
  {
    href: "/compliance/state-cold-call-laws",
    title: "State-by-state cold call laws",
    desc: "FL, WA, OK have stricter rules than federal. NJ, OR, MS layer on top. Every state's specific cold-call requirements in one reference.",
  },
];

export default function CompliancePage() {
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
          <span>Compliance</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
          Compliance for US{" "}
          <span className="text-brand-gradient">B2B cold outreach</span>
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Plain-English reference for operators running cold-call and cold-SMS
          campaigns in the US. Not legal advice. The legal layer for cold
          outreach has three tiers: federal TCPA + DNC, state-specific add-ons,
          and the data-source legality (which is the easy one — scraping
          public Google Maps data is legal under hiQ v. LinkedIn).
        </p>

        <div className="mt-10 p-6 border-l-4 border-[#1B86FF] bg-[var(--color-surface)] rounded-r-2xl">
          <p className="text-base font-semibold">
            The 30-second compliance checklist
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Scrub against the National DNC Registry before every campaign</li>
            <li>Filter to mobile-only (or know which numbers are mobiles)</li>
            <li>Check state-specific opt-in rules (FL, WA, OK most strict)</li>
            <li>Honor opt-outs immediately — store DNC list internally</li>
            <li>Keep records of consent for any contact with prior relationship</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-16">Guides</h2>
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="p-6 border rounded-2xl hover:border-[#1B86FF] transition-colors block"
            >
              <h3 className="text-lg font-bold">{g.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {g.desc}
              </p>
              <p className="mt-3 text-sm text-[#1B86FF]">Read guide →</p>
            </Link>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-16">How Leadity helps</h2>
        <p className="mt-4 text-base">
          Leadity exports include TCPA-aware flags on every record: DNC
          registration status at time of export, line type (mobile / landline /
          VoIP), and carrier metadata. This doesn&rsquo;t make compliance
          someone else&rsquo;s problem — but it does mean the data you&rsquo;re
          dialing has been pre-filtered for the most common compliance traps.
        </p>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">
            Try Leadity free — 50 owner mobiles, no credit card
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            See the TCPA-aware export firsthand on a real lead list.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold"
            >
              Get 50 mobiles free
            </Link>
            <Link
              href="/tools/tcpa-risk-checker"
              className="glass-chip inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base"
            >
              TCPA risk checker
            </Link>
          </div>
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
