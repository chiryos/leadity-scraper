/**
 * /solutions/pest-control — Generated from Template C (vertical solution)
 *
 * Pay-per-lead vertical: pest control owners typically pay
 * $25-$80 per shared lead and $60-$200
 * per exclusive lead from HomeAdvisor (Angi Leads), Bark, Networx, Thumbtack. This page reframes the math against
 * Leadity's $59 flat for 2,000 verified owner mobiles.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title: "Pest Control Owner Leads — Mobile Numbers for $59 | Leadity",
  description:
    "Build a 2,000-pest control owner call list for $59 instead of $25-$200 per lead. Verified owner-direct mobile numbers. TCPA-aware export, niche x metro filtering, mobile-only.",
  alternates: {
    canonical: "https://leadity.io/solutions/pest-control",
  },
  openGraph: {
    title: "Pest Control Leads - $59 for 2,000 Owner Mobiles",
    description:
      "Stop paying $25-$200 per lead. Build your own pest control owner call list with verified owner mobile numbers.",
    type: "article",
    url: "https://leadity.io/solutions/pest-control",
    images: [{ url: "https://leadity.io/og/solutions-pest-control.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Leads - Owner Mobiles for $59",
    description:
      "2,000 verified pest control owner mobile numbers for $59 flat. The pay-per-lead alternative.",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Pest Control Leads: Build Your Own Call List for $59 Instead of $25-$200 Per Lead",
      datePublished: "2026-04-26T00:00:00Z",
      dateModified: "2026-04-26T00:00:00Z",
      wordCount: 1850,
      author: {
        // TODO: replace placeholder with real founder name + LinkedIn URL
        "@type": "Person",
        name: "Vincent Chiriac",
        jobTitle: "Founder, Leadity",
        url: "https://leadity.io/about",
        sameAs: ["https://www.linkedin.com/in/vincentchiriac"],
      },
      publisher: { "@id": "https://leadity.io/#organization" },
    },
    {
      "@type": "Service",
      serviceType: "B2B Lead Generation",
      provider: { "@id": "https://leadity.io/#organization" },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Pest control companies and pest control lead resellers",
      },
      description:
        "Verified owner-direct mobile phone numbers for US pest control owners. Sourced from Google Business Profiles, mobile-carrier verified, TCPA-aware export.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Pest Control Leads Lists",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "2,000 pest control owner owner mobiles" },
            price: "59",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "5,000 pest control owner owner mobiles" },
            price: "129",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "10,000 pest control owner owner mobiles" },
            price: "229",
            priceCurrency: "USD",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much do pest control owners leads cost from pay-per-lead networks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pest control companies and pest control lead resellers leads from pay-per-lead networks (HomeAdvisor (Angi Leads), Bark, Networx, Thumbtack) typically cost $25-$80 for shared leads and $60-$200 for exclusive leads. Leadity provides 2,000 verified pest control owner owner mobiles for $59 flat - that&rsquo;s less than a single shared lead in most categories, with 2,000 owner-direct dial opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "What conversion rate should I expect from cold-calling pest control owners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cold-call conversion for pest control owners typically runs 2-3% from dial to appointment, depending on script quality, time of day, and offer. From 2,000 verified owner mobiles, that&rsquo;s 20-30 appointments. Even at the low end, the cost per appointment is well under what you&rsquo;d pay for a single exclusive lead from a pay-per-lead network.",
          },
        },
        {
          "@type": "Question",
          name: "Are these pest control owner leads exclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leadity sells data, not leads. Each customer downloads the same source data - public Google Business Profile listings + carrier-verified mobile numbers. This is different from \"exclusive\" pay-per-lead networks where leads are sold to one buyer. The trade-off: Leadity is roughly 50-200x cheaper per contact, but you compete with other cold callers for the same prospects. For agency or in-house outbound teams running consistent dialing, the math heavily favors Leadity.",
          },
        },
        {
          "@type": "Question",
          name: "Is cold-calling pest control owners TCPA compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "B2B cold calls to business owners are generally compliant under TCPA when the recipient has not opted out. Leadity provides TCPA-aware export flags including DNC registration status and line-type classification. Always scrub against the National DNC Registry before any outreach. Some states (Florida, Washington, Oklahoma) have stricter rules - see /compliance/state-cold-call-laws.",
          },
        },
        {
          "@type": "Question",
          name: "Can I filter pest control owners by metro or state?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Leadity supports filtering by state, metro, ZIP, or custom polygon. Common targeting for pest control owners: termite-belt states (FL, GA, SC, TX, AL), urban metros (Houston, Atlanta, Phoenix, Tampa, Charlotte), and ZIP-level targeting for residential pest routes.",
          },
        },
        {
          "@type": "Question",
          name: "What data fields do I get for each pest control owner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each Leadity record for pest control owners includes: business name, owner-direct mobile (mobile-only filtered), business address, Google Business Profile category (e.g., \"Pest control service\"), Google review count + rating, business hours, website URL, year established (when available), service area radius, and TCPA flags (DNC status, line type, carrier).",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadity.io" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://leadity.io/solutions" },
        { "@type": "ListItem", position: 3, name: "Pest Control Leads", item: "https://leadity.io/solutions/pest-control" },
      ],
    },
  ],
};

export default function SolutionsPage() {
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
          <Link href="/solutions" className="hover:underline">Solutions</Link>
          <span className="mx-2">/</span>
          <span>Pest Control Leads</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
          Pest Control Owner Leads - <span className="text-brand-gradient">$59 for 2,000 Owner Mobiles</span>
        </h1>

        <div className="mt-6 flex items-center gap-4 text-sm text-[var(--color-text-secondary)]">
          <span>By Vincent Chiriac, Founder of Leadity</span>
          <span>&middot;</span>
          <span>Last updated April 2026</span>
        </div>

        <p className="mt-8 text-xl leading-relaxed">
          Why pay $25-$200 per pest control lead when you can build a 2,000-owner call list for $59? 2,000 verified owner-direct mobile numbers, sourced from
          Google Business Profiles, carrier-verified to filter out landlines
          and VoIP, and exported with TCPA-aware flags.
        </p>

        <div className="mt-12 p-6 border-l-4 border-[#1B86FF] bg-[var(--color-surface)] rounded-r-2xl">
          <p className="text-lg font-semibold">The math at a glance</p>
          <ul className="mt-4 space-y-2 text-base">
            <li>
              <strong>Pay-per-lead:</strong> $25-$80 per shared lead, $60-$200 per exclusive lead. To
              run a 2,000-conversation outreach, you'd spend $50K+.
            </li>
            <li>
              <strong>Leadity:</strong> $59 flat for 2,000 verified owner mobiles.
              At 2-3% cold-call conversion, that's 20-30 appointments per
              campaign.
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-16">
          Where pay-per-lead breaks down for pest control owners
        </h2>
        <p className="mt-4 text-base">
          HomeAdvisor (Angi Leads), Bark, Networx, Thumbtack all aggregate consumer demand and resell it as
          contractor leads. The unit economics work for the platforms because
          they sell each lead 3-5x (shared) or charge a steep premium for
          exclusivity. For the contractor, the math is brutal at scale: a
          single rep running consistent outbound burns through a
          $1,500-$5,000 monthly lead budget without consistent close volume.
        </p>

        <h2 className="text-3xl font-bold mt-16">
          The Leadity workflow for pest control owners
        </h2>
        <ol className="mt-4 space-y-3 text-base list-decimal list-inside">
          <li>
            <strong>Pick your category</strong>: "Pest control service" or related
            sub-categories within Leadity's 1,255+ US business taxonomy.
          </li>
          <li>
            <strong>Filter by geography</strong>: state, metro, ZIP, or custom
            polygon. termite-belt states (FL, GA, SC, TX, AL), urban metros (Houston, Atlanta, Phoenix, Tampa, Charlotte), and ZIP-level targeting for residential pest routes.
          </li>
          <li>
            <strong>Toggle &quot;Mobile only&quot;</strong>: carrier-level HLR
            lookup filters out landlines, VoIP, and disconnected numbers.
            84%+ verified mobile rate on US local SMBs.
          </li>
          <li>
            <strong>Export</strong>: CSV, Google Sheets, or native push to
            HubSpot, Pipedrive, Close, Smartlead, Instantly, Lemlist, n8n,
            Zapier.
          </li>
          <li>
            <strong>Run outreach</strong>: cold call, cold SMS, or
            multi-touch sequence. Always DNC-scrub before dialing - Leadity
            exports include DNC flags but compliance is the buyer's
            responsibility.
          </li>
        </ol>

        <h2 className="text-3xl font-bold mt-16">TCPA + state-law notes</h2>
        <p className="mt-4 text-base">
          B2B cold calls to pest control owners are generally TCPA-compliant
          when calling business owners who have not opted out. Mobile
          numbers raise the stakes vs landlines under TCPA, which is why
          Leadity exports include line-type tags. State laws layer on top:
          Florida, Washington, and Oklahoma have stricter requirements.
          See <Link href="/compliance/tcpa-guide-2026" className="text-[#1B86FF] underline">
          /compliance/tcpa-guide-2026</Link> for the full breakdown.
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
          <h2 className="text-2xl font-bold">
            Try Leadity free - 50 pest control owner mobiles, no credit card
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            See whether Leadity beats your current pay-per-lead provider
            before you spend a dollar.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold"
            >
              Get 50 mobiles free
            </Link>
            <Link
              href="/compliance/tcpa-guide-2026"
              className="glass-chip inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base"
            >
              TCPA guide
            </Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-16">Related</h2>
        <ul className="mt-4 space-y-2 text-base">
          <li><Link href="/alternatives/outscraper" className="text-[#1B86FF] underline">Outscraper alternative</Link></li>
          <li><Link href="/vs/apollo" className="text-[#1B86FF] underline">Apollo alternative for SMB</Link></li>
          <li><Link href="/blog/best-google-maps-scrapers-2026" className="text-[#1B86FF] underline">Best Google Maps scrapers in 2026</Link></li>
          <li><Link href="/compliance/state-cold-call-laws" className="text-[#1B86FF] underline">State-by-state cold call laws</Link></li>
        </ul>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
