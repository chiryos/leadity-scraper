/**
 * /pricing — Full page
 *
 * Drop into: app/pricing/page.tsx
 *
 * The #1 conversion page after homepage. Must be optimized for:
 * - Decision-stage buyers (already convinced of value)
 * - Comparison-stage buyers (vs Outscraper credit math)
 * - Trust signals (refund, no card, transparent pricing)
 *
 * Schema: Product + Offer (multiple) + AggregateRating + FAQPage + BreadcrumbList
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SignupPopup } from "@/components/signup-popup"

export const metadata: Metadata = {
  title: 'Pricing — Flat $59 for 2,000 Verified Owner Mobiles | Leadity',
  description:
    'Simple flat pricing. No credits, no per-task multipliers, no surprises. $59 for 2,000 US owner mobiles, $129 for 5,000, $229 for 10,000. Free tier: 50 mobiles, no credit card.',
  alternates: { canonical: 'https://leadity.io/pricing' },
  openGraph: {
    title: 'Leadity Pricing — Flat $59 for 2,000 Verified Owner Mobiles',
    description: 'No credits. No surprises. The pay-as-you-go alternative to Outscraper credit math.',
    type: 'website',
    url: 'https://leadity.io/pricing',
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': 'https://leadity.io/pricing#product',
      name: 'Leadity — US Owner Mobile Numbers',
      description: 'Verified owner-direct mobile phone numbers from US local businesses across 1,255+ categories.',
      brand: { '@id': 'https://leadity.io/#organization' },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '0',
        highPrice: '229',
        priceCurrency: 'USD',
        offerCount: 4,
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '47',
        bestRating: '5',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why does Leadity charge per mobile instead of per record?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We charge for verified mobiles only. If we can&rsquo;t find a verified mobile for a business, you don&rsquo;t pay for it. This makes pricing predictable and aligned with what cold-call teams actually need: usable mobiles, not raw records mixing landlines and mobiles. Generic scrapers like Outscraper charge per record (regardless of phone availability or line type), so your real cost per usable mobile is 3-5× higher than the headline price.',
          },
        },
        {
          '@type': 'Question',
          name: 'What&rsquo;s included in the free tier?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The free tier includes 50 verified owner mobile numbers, no credit card required, no expiration. You get the full feature set: niche × geo filtering, 1,255+ business categories, TCPA-aware export with DNC + line-type flags, CSV/Sheets export. The free tier is enough to test data quality on a small batch before committing to a paid tier.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do credits or unused mobiles expire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Leadity does not use a credit system. When you purchase a tier (2,000 / 5,000 / 10,000 mobiles), the mobiles are delivered as a CSV export to your dashboard. There&rsquo;s no concept of expiring credits. The free tier 50 mobiles are also non-expiring.',
          },
        },
        {
          '@type': 'Question',
          name: 'What&rsquo;s your refund policy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We refund any number that fails our quality guarantee within 7 days of delivery. Quality guarantee covers: line-type accuracy (mobile vs landline), DNC scrubbing accuracy, geographic accuracy. If a record we delivered as "mobile" turns out to be a landline, we refund that record. If a number was on the National DNC at time of export, we refund. Submit refund requests via the dashboard or hello@leadity.io.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer enterprise pricing or volume discounts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For volumes above 10,000 mobiles per request or recurring monthly purchases, contact us via hello@leadity.io. We offer custom enterprise pricing with annual contracts, dedicated success manager, custom integrations, and SLA guarantees. Typical enterprise ranges: 50,000-500,000 mobiles per quarter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I cancel anytime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There&rsquo;s nothing to cancel — Leadity is pay-as-you-go, not subscription. You purchase a tier (2k / 5k / 10k), receive the data, and that&rsquo;s the entire transaction. No recurring billing, no subscription to cancel, no contracts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What payment methods do you accept?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Credit cards (Visa, Mastercard, American Express, Discover) via Stripe. ACH transfer for enterprise plans. Currently US-only billing. Crypto payments coming Q3 2026.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Leadity&rsquo;s pricing compare to Outscraper, Apollo, and ZoomInfo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Outscraper: $3 per 1,000 records baseline + enrichment multipliers. Real cost per usable mobile: ~$0.10. Apollo: $49-$99/user/month subscription with weak SMB mobile coverage. Per usable SMB mobile: $0.50-$2+. ZoomInfo: enterprise pricing $15K-$50K/year, weak SMB. Leadity: flat $0.027 per verified mobile. For US B2B cold-call use cases targeting local SMBs, Leadity is 4-50× cheaper per usable mobile.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there tax / VAT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'US customers: state sales tax applies based on billing address (Stripe handles automatically). International customers: VAT/GST may apply per local regulations. Tax is shown at checkout before payment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I get an invoice for accounting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Stripe-generated invoices are emailed automatically after each purchase. Custom enterprise invoices with PO numbers available on request via hello@leadity.io.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leadity.io' },
        { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://leadity.io/pricing' },
      ],
    },
  ],
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="max-w-6xl mx-auto px-6 py-20">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/">Home</Link> / <span>Pricing</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight">
            Simple flat pricing.{' '}
            <span className="text-brand-gradient">No credits. No surprises.</span>
          </h1>

          <p className="mt-6 text-xl text-[var(--color-text-secondary)]">
            While other scrapers charge by the record and surprise you at scale,
            Leadity charges flat for verified owner mobiles. If we can&rsquo;t find a
            mobile, you don&rsquo;t pay.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-4 gap-4 mt-16">
          {/* Free tier */}
          <div className="p-6 border rounded-2xl">
            <h3 className="text-lg font-bold mt-0">Free</h3>
            <p className="text-4xl font-bold mt-2">$0</p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">50 mobiles</p>
            <ul className="text-sm mt-6 space-y-2">
              <li>50 verified owner mobiles</li>
              <li>No credit card required</li>
              <li>No expiration</li>
              <li>Full feature set</li>
              <li>TCPA-aware export</li>
              <li>CSV / Sheets export</li>
            </ul>
            <Link href="/signup" className="glass-chip mt-6 block text-center">
              Start free
            </Link>
          </div>

          {/* Starter */}
          <div className="p-6 border rounded-2xl">
            <h3 className="text-lg font-bold mt-0">Starter</h3>
            <p className="text-4xl font-bold mt-2">$59</p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">2,000 mobiles</p>
            <ul className="text-sm mt-6 space-y-2">
              <li>2,000 verified mobiles</li>
              <li>$0.030 per mobile</li>
              <li>~40-80 appointments at 2-4% conv.</li>
              <li>All free-tier features</li>
              <li>HubSpot / Pipedrive / Close export</li>
              <li>Email support</li>
            </ul>
            <Link href="/checkout?tier=starter" className="btn-liquid mt-6 block text-center">
              Get 2,000 mobiles
            </Link>
          </div>

          {/* Pro - HIGHLIGHTED */}
          <div className="p-6 border-2 border-[#1B86FF] rounded-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1B86FF] text-xs font-semibold rounded-full text-white">
              Most popular
            </div>
            <h3 className="text-lg font-bold mt-0">Pro</h3>
            <p className="text-4xl font-bold mt-2">$129</p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">5,000 mobiles</p>
            <ul className="text-sm mt-6 space-y-2">
              <li>5,000 verified mobiles</li>
              <li>$0.028 per mobile</li>
              <li>~100-200 appointments</li>
              <li>All Starter features</li>
              <li>Smartlead / Instantly / Lemlist</li>
              <li>Priority support</li>
            </ul>
            <Link href="/checkout?tier=pro" className="btn-liquid mt-6 block text-center">
              Get 5,000 mobiles
            </Link>
          </div>

          {/* Scale */}
          <div className="p-6 border rounded-2xl">
            <h3 className="text-lg font-bold mt-0">Scale</h3>
            <p className="text-4xl font-bold mt-2">$229</p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">10,000 mobiles</p>
            <ul className="text-sm mt-6 space-y-2">
              <li>10,000 verified mobiles</li>
              <li>$0.023 per mobile</li>
              <li>~200-400 appointments</li>
              <li>All Pro features</li>
              <li>MCP server access</li>
              <li>Founder-direct support</li>
            </ul>
            <Link href="/checkout?tier=scale" className="btn-liquid mt-6 block text-center">
              Get 10,000 mobiles
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-[var(--color-text-secondary)] mt-6">
          Need 25,000+ mobiles or recurring monthly volume?{' '}
          <Link href="/contact" className="underline">Talk to founders →</Link>
        </p>

        {/* THE COST COMPARISON */}
        <div className="mt-20 p-10 rounded-2xl bg-[var(--color-surface)] border">
          <h2 className="text-3xl font-bold text-center mt-0">
            How Leadity compares on real cost-per-usable-mobile
          </h2>

          <p className="text-center text-[var(--color-text-secondary)] mt-2 max-w-2xl mx-auto">
            Most scrapers advertise low headline prices but charge per record
            (regardless of usability). Real cost is the dollar spend divided by
            verified mobiles. Here&rsquo;s the math:
          </p>

          <div className="overflow-x-auto mt-8">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Headline price</th>
                  <th>Mobile coverage</th>
                  <th>Real cost per usable mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[rgba(27,134,255,0.1)]">
                  <td><strong>Leadity</strong></td>
                  <td>$59 / 2,000 mobiles flat</td>
                  <td>84.6% verified</td>
                  <td><strong>$0.027</strong></td>
                </tr>
                <tr>
                  <td>Outscraper</td>
                  <td>$3 / 1,000 records + multipliers</td>
                  <td>~8.5% mobile</td>
                  <td>~$0.10 (3.7× more)</td>
                </tr>
                <tr>
                  <td>Apify (with email actor)</td>
                  <td>$2.10 / 1,000 places + per-event</td>
                  <td>~12% mobile</td>
                  <td>~$0.022 (similar) but no TCPA flags</td>
                </tr>
                <tr>
                  <td>Apollo</td>
                  <td>$99/user/mo subscription</td>
                  <td>~10% local SMB mobile</td>
                  <td>~$0.50-$2+ depending on usage</td>
                </tr>
                <tr>
                  <td>ZoomInfo</td>
                  <td>$15K-$50K/yr enterprise</td>
                  <td>~8% local SMB mobile</td>
                  <td>$2-$10+ for SMB</td>
                </tr>
                <tr>
                  <td>Pay-per-lead (Angi, ServiceDirect)</td>
                  <td>$55 shared / $100-$300 exclusive</td>
                  <td>100% (pre-qualified)</td>
                  <td>$55-$300 per lead</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center mt-8 text-sm text-[var(--color-text-secondary)]">
            Numbers verified via independent benchmark, April 2026.{' '}
            <Link href="/blog/best-google-maps-scrapers-2026">See full benchmark →</Link>
          </p>
        </div>

        {/* THE OUTSCRAPER TESTIMONIAL */}
        <div className="mt-20 max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-[#1B86FF] pl-6 italic">
            <p className="text-xl">
              "We ran 16,000 leads through Outscraper last quarter and found
              about 500 that were workable mobiles. With Leadity&rsquo;s mobile-only
              filter we bought 2,000 mobiles for $59 and booked 4 meetings from
              the first day&rsquo;s calls. <strong>10× better than Outscraper.</strong>"
            </p>
            <footer className="not-italic mt-4 text-sm text-[var(--color-text-secondary)]">
              — Cold-call agency owner, Leadity customer
            </footer>
          </blockquote>
        </div>

        {/* TRUST BADGES */}
        <div className="mt-20 grid md:grid-cols-4 gap-4 text-center">
          <div className="p-6 border rounded-xl">
            <p className="text-3xl font-semibold text-[#1B86FF]">G</p>
            <h3 className="text-base font-bold mt-2">Stripe-secured</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">PCI-compliant payments</p>
          </div>
          <div className="p-6 border rounded-xl">
            <p className="text-3xl font-semibold text-[#1B86FF]">L</p>
            <h3 className="text-base font-bold mt-2">TCPA-aware export</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">DNC + line-type flags built in</p>
          </div>
          <div className="p-6 border rounded-xl">
            <p className="text-3xl">🇺🇸</p>
            <h3 className="text-base font-bold mt-2">US-only data</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">All 50 states, 1,255+ categories</p>
          </div>
          <div className="p-6 border rounded-xl">
            <p className="text-3xl">↩️</p>
            <h3 className="text-base font-bold mt-2">Refund guarantee</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">7-day refund on bad numbers</p>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-bold mt-20 mb-8 text-center">Frequently asked questions</h2>

        <div className="max-w-3xl mx-auto">
          <details className="rounded-lg border p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Why does Leadity charge per mobile instead of per record?</summary>
            <p className="mt-2">We charge for verified mobiles only. If we can&rsquo;t find a verified mobile for a business, you don&rsquo;t pay for it. This makes pricing predictable and aligned with what cold-call teams actually need.</p>
          </details>

          <details className="rounded-lg border p-4 mb-3">
            <summary className="font-semibold cursor-pointer">What&rsquo;s included in the free tier?</summary>
            <p className="mt-2">50 verified owner mobile numbers, no credit card required, no expiration. Full feature set including niche × geo filtering, 1,255+ categories, TCPA-aware export.</p>
          </details>

          <details className="rounded-lg border p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Do credits or unused mobiles expire?</summary>
            <p className="mt-2">No. Leadity does not use a credit system. Mobiles are delivered as a CSV. There&rsquo;s no concept of expiring credits.</p>
          </details>

          <details className="rounded-lg border p-4 mb-3">
            <summary className="font-semibold cursor-pointer">What&rsquo;s your refund policy?</summary>
            <p className="mt-2">We refund any number that fails our quality guarantee within 7 days of delivery. If a record we delivered as "mobile" turns out to be a landline, we refund that record.</p>
          </details>

          <details className="rounded-lg border p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Do you offer enterprise pricing?</summary>
            <p className="mt-2">Yes — for volumes above 10,000 mobiles per request or recurring monthly purchases, contact us via hello@leadity.io for custom enterprise pricing.</p>
          </details>

          <details className="rounded-lg border p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Can I cancel anytime?</summary>
            <p className="mt-2">Nothing to cancel — Leadity is pay-as-you-go, not subscription. You purchase a tier, receive data, transaction complete. No recurring billing.</p>
          </details>

          <details className="rounded-lg border p-4 mb-3">
            <summary className="font-semibold cursor-pointer">What payment methods do you accept?</summary>
            <p className="mt-2">Credit cards via Stripe (Visa, Mastercard, AmEx, Discover). ACH for enterprise plans. Crypto coming Q3 2026.</p>
          </details>

          <details className="rounded-lg border p-4 mb-3">
            <summary className="font-semibold cursor-pointer">How does pricing compare to Outscraper, Apollo, ZoomInfo?</summary>
            <p className="mt-2">For US B2B cold-call use cases targeting local SMBs: Leadity is 4-50× cheaper per usable mobile than Outscraper, Apollo, or ZoomInfo. See the comparison table above.</p>
          </details>

          <details className="rounded-lg border p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Is there tax / VAT?</summary>
            <p className="mt-2">US customers: state sales tax applies. International: VAT/GST may apply. Tax shown at checkout.</p>
          </details>

          <details className="rounded-lg border p-4 mb-3">
            <summary className="font-semibold cursor-pointer">Can I get an invoice?</summary>
            <p className="mt-2">Stripe invoices emailed automatically. Custom enterprise invoices with PO available via hello@leadity.io.</p>
          </details>
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold">Start with 50 free verified owner mobiles</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">No credit card. No expiration. Test the data on your own niche.</p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/signup" className="btn-liquid">Get 50 mobiles free</Link>
            <Link href="/alternatives/outscraper" className="glass-chip">Compare to Outscraper</Link>
          </div>
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  )
}
