/**
 * /pricing — dedicated pricing route, v1-styled rewrite
 *
 * Reuses the existing <Pricing /> component (toggle + 3-card grid + mobile
 * accordion, all glass-brand for Growth, glass-chip-ringed for Starter/Scale).
 * Adds a hero, a cost-per-usable-mobile glass-card strip, an 8-question
 * glass-card FAQ accordion, and a closing CTA — all in v1 design language.
 *
 * Schema: Product (with AggregateOffer + AggregateRating) + FAQPage +
 * BreadcrumbList. The Product schema is the SERP rich-snippet weapon —
 * star rating + price range surface in Google results.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";
import { Reveal } from "@/components/reveal";
import { Pricing as PricingSection } from "@/components/pricing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title:
    "Pricing — Flat $59 for 2,000 Verified Owner Mobiles | Leadity",
  description:
    "Simple flat pricing. No credits, no per-task multipliers, no surprises. $59 for 2,000 US owner mobiles, $129 for 5,000, $229 for 10,000. Free tier: 50 mobiles, no credit card.",
  alternates: { canonical: "https://leadity.io/pricing" },
  openGraph: {
    title: "Leadity Pricing — Flat $59 for 2,000 Verified Owner Mobiles",
    description:
      "No credits. No surprises. The pay-as-you-go alternative to Outscraper credit math.",
    type: "website",
    url: "https://leadity.io/pricing",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://leadity.io/pricing#product",
      name: "Leadity — US Owner Mobile Numbers",
      description:
        "Verified owner-direct mobile phone numbers from US local businesses across 1,255+ categories.",
      brand: { "@id": "https://leadity.io/#organization" },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "0",
        highPrice: "229",
        priceCurrency: "USD",
        offerCount: 4,
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "47",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does Leadity charge per mobile instead of per record?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We charge for verified mobiles only. If we can't find a verified mobile for a business, you don't pay for it. Generic scrapers like Outscraper charge per record regardless of phone availability or line type, so your real cost per usable mobile ends up 3-5x higher than the headline price.",
          },
        },
        {
          "@type": "Question",
          name: "What's included in the free tier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "50 verified owner mobile numbers, no credit card, no expiration. Full feature set: niche x geo filtering, 1,255+ categories, TCPA-aware export with DNC + line-type flags, CSV/Sheets export.",
          },
        },
        {
          "@type": "Question",
          name: "Do credits or unused mobiles expire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leadity does not use a credit system. When you purchase a tier (2,000 / 5,000 / 10,000 mobiles), the mobiles are delivered as a CSV export to your dashboard. No expiry concept.",
          },
        },
        {
          "@type": "Question",
          name: "What's your refund policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "7-day refund on any record that fails our quality guarantee — wrong line type, DNC-listed at time of export, or geographic mismatch. Submit refund requests via the dashboard or hello@leadity.io.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer enterprise pricing or volume discounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For volumes above 10,000 mobiles per request or recurring monthly purchases, contact us via hello@leadity.io. Enterprise plans include annual contracts, dedicated success manager, custom integrations, and SLA guarantees.",
          },
        },
        {
          "@type": "Question",
          name: "Can I cancel anytime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There's nothing to cancel — Leadity is pay-as-you-go, not subscription. You purchase a tier, receive the data, and that's the entire transaction. No recurring billing.",
          },
        },
        {
          "@type": "Question",
          name: "What payment methods do you accept?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Credit cards (Visa, Mastercard, American Express, Discover) via Stripe. ACH transfer for enterprise plans. Currently US-only billing.",
          },
        },
        {
          "@type": "Question",
          name: "How does Leadity's pricing compare to Outscraper, Apollo, and ZoomInfo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leadity: $59 for 2,000 verified mobiles ($0.027 per usable mobile). Outscraper: $3 per 1,000 records but ~8.5% mobile coverage (real cost ~$0.10 per usable). Apollo: $99/user/month with ~10% SMB coverage. ZoomInfo: $15K-$30K annual contract for SMB plan with ~12% local SMB coverage. Leadity is roughly 5-10x cheaper per usable mobile in the SMB space.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadity.io" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: "https://leadity.io/pricing" },
      ],
    },
  ],
};

const pricingFaqs = [
  {
    q: "Why does Leadity charge per mobile instead of per record?",
    a: "We charge for verified mobiles only. If we can't find a verified mobile for a business, you don't pay for it. Generic scrapers like Outscraper charge per record regardless of phone availability — your real cost per usable mobile ends up 3-5× higher than the headline.",
  },
  {
    q: "What's included in the free tier?",
    a: "50 verified owner mobile numbers, no credit card, no expiration. Full feature set: niche × geo filtering, 1,255+ categories, TCPA-aware export with DNC + line-type flags, CSV/Sheets export.",
  },
  {
    q: "Do credits or unused mobiles expire?",
    a: "Leadity doesn't use credits. When you purchase a tier, mobiles are delivered as a CSV to your dashboard. No expiry concept — you keep what you bought.",
  },
  {
    q: "What's your refund policy?",
    a: "7-day refund on any record that fails our quality guarantee — wrong line type, DNC-listed at time of export, or geographic mismatch. Refund requests via dashboard or hello@leadity.io.",
  },
  {
    q: "Do you offer enterprise or volume pricing?",
    a: "Yes — for volumes above 10K mobiles per request or recurring monthly buys. Reach hello@leadity.io for custom contract, dedicated success manager, SLA guarantees, custom integrations.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Nothing to cancel — pay-as-you-go, not subscription. Purchase a tier, receive the data, transaction complete.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "Credit cards (Visa, Mastercard, Amex, Discover) via Stripe. ACH for enterprise. US-only billing for now.",
  },
  {
    q: "How does pricing compare to Outscraper / Apollo / ZoomInfo?",
    a: "Leadity: $0.027 per usable mobile flat. Outscraper: ~$0.10 per usable mobile (after the ~8.5% mobile coverage hit). Apollo: $0.50–$2+ on local SMB (~10% mobile coverage). ZoomInfo: $15K–$30K annual contract, ~12% local SMB coverage. We're 5-10× cheaper for SMB outreach.",
  },
];

const costComparison = [
  { tool: "Leadity", headline: "$59 / 2,000", coverage: "84.6%", real: "$0.027", isUs: true },
  { tool: "Outscraper", headline: "$3 / 1,000 records", coverage: "~8.5%", real: "~$0.10" },
  { tool: "Apify", headline: "$2.10 / 1,000 places", coverage: "~12%", real: "~$0.022 (no TCPA)" },
  { tool: "Apollo", headline: "$99/user/month", coverage: "~10%", real: "~$0.50–$2+" },
  { tool: "Pay-per-lead", headline: "$55–$300 per lead", coverage: "100%", real: "$55–$300" },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />

        {/* Hero */}
        <section className="section-py relative overflow-hidden">
          <div className="relative container-page">
            <Reveal>
              <div className="mx-auto max-w-[820px] text-center">
                <h1 className="text-h2 text-balance text-[var(--color-text-primary)]">
                  <span className="block">Simple flat pricing.</span>
                  <span className="block text-brand-gradient">
                    No credits. No surprises.
                  </span>
                </h1>
                <p className="mt-6 max-w-[640px] mx-auto text-balance text-[18px] leading-[1.55] text-[var(--color-text-secondary)]">
                  Pay only for verified owner mobiles. Free tier: 50 mobiles,
                  no credit card. No expiry, no contracts, no per-seat fees.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pricing cards (existing v1 component) */}
        <PricingSection />

        {/* Cost-per-usable-mobile comparison */}
        <section className="section-py relative overflow-hidden">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[820px] text-center">
                <h2 className="text-h2 text-balance text-[var(--color-text-primary)]">
                  <span className="block">Real cost</span>
                  <span className="block text-brand-gradient">
                    per usable mobile.
                  </span>
                </h2>
                <p className="mt-5 max-w-[640px] mx-auto text-[16px] leading-[1.55] text-[var(--color-text-secondary)]">
                  Headline price isn&rsquo;t what you actually pay. Mobile
                  coverage varies wildly between tools — that&rsquo;s the
                  number that determines real cost-per-dial.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mx-auto mt-12 max-w-[920px]">
                <div className="glass-card rounded-3xl p-6 md:p-8 overflow-x-auto">
                  <table className="w-full text-[14px] md:text-[15px]">
                    <thead>
                      <tr className="border-b border-[var(--color-border)]">
                        <th className="text-left py-3 pr-4 font-semibold">Tool</th>
                        <th className="text-left py-3 pr-4 font-semibold">Headline price</th>
                        <th className="text-left py-3 pr-4 font-semibold">Mobile coverage</th>
                        <th className="text-left py-3 font-semibold">$/usable mobile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costComparison.map((row) => (
                        <tr
                          key={row.tool}
                          className={
                            row.isUs
                              ? "border-b border-[var(--color-border)] bg-[rgba(27,134,255,0.08)]"
                              : "border-b border-[var(--color-border)]"
                          }
                        >
                          <td className="py-4 pr-4">
                            <strong>{row.tool}</strong>
                          </td>
                          <td className="py-4 pr-4 tabular-nums">
                            {row.headline}
                          </td>
                          <td className="py-4 pr-4 tabular-nums">
                            {row.coverage}
                          </td>
                          <td className="py-4 tabular-nums">
                            {row.isUs ? <strong>{row.real}</strong> : row.real}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-6 text-center text-[13px] text-[var(--color-text-muted)]">
                  Based on April 2026 benchmark across 500 US SMBs in 12
                  verticals.{" "}
                  <Link
                    href="/blog/best-google-maps-scrapers-2026"
                    className="underline hover:text-[var(--color-text-primary)]"
                  >
                    Read full benchmark →
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ — pricing-specific, glass-card accordion (matches v1 FAQ pattern) */}
        <section className="section-py relative z-10 overflow-hidden">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[720px] text-center">
                <h2 className="text-h2 text-balance text-[var(--color-text-primary)]">
                  <span className="block">Pricing questions,</span>
                  <span className="block text-brand-gradient">answered.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mx-auto mt-12 max-w-[720px]">
                <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col gap-3"
                >
                  {pricingFaqs.map((item, i) => (
                    <AccordionItem
                      key={item.q}
                      value={`item-${i}`}
                      className="glass-card rounded-2xl border-0 px-5 md:px-6"
                    >
                      <AccordionTrigger className="py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section-py">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[640px] text-center">
                <h2 className="text-h2 text-balance text-[var(--color-text-primary)]">
                  <span className="block">Get 50 mobiles free.</span>
                  <span className="block text-brand-gradient">
                    No credit card.
                  </span>
                </h2>
                <p className="mt-5 text-[16px] leading-[1.55] text-[var(--color-text-secondary)]">
                  See the verified-mobile difference firsthand on a real list
                  before you spend a dollar.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="#pricing"
                    className="btn-liquid inline-flex items-center justify-center rounded-full px-8 py-4 text-[15px] font-semibold"
                  >
                    Start with 50 free
                  </Link>
                  <Link
                    href="/alternatives/outscraper"
                    className="glass-chip inline-flex items-center justify-center rounded-full px-8 py-4 text-[15px]"
                  >
                    vs Outscraper →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <SignupPopup />
    </>
  );
}
