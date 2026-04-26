/**
 * /google-maps-scraper — Full page (raw keyword landing)
 *
 * Drop into: app/google-maps-scraper/page.tsx
 *
 * The HARD keyword. ~5,000+ monthly searches in US. Apify, Outscraper,
 * Bright Data, ScrapingBee all fight for this. Leadity won&rsquo;t rank top 3
 * for 12+ months without massive content + backlinks.
 *
 * BUT — the page must exist. It&rsquo;s the soft cornerstone for raw scraper-
 * intent traffic. NOT linked from main nav. Linked from blog and footer.
 *
 * Strategy: Be honest. Position Leadity as "the focused alternative for
 * US B2B cold-call use cases." Concede that for general scraping, Apify
 * is better. Capture the buyer-intent slice, ignore the broad slice.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SignupPopup } from "@/components/signup-popup"

export const metadata: Metadata = {
  title: 'Google Maps Scraper for B2B Owner Mobile Numbers | Leadity',
  description:
    'A focused Google Maps scraper for US B2B cold-call teams. Extract verified owner-direct mobile phone numbers across 1,255+ business categories. Mobile-only filter, TCPA-aware export, $59 flat for 2,000 mobiles.',
  alternates: { canonical: 'https://leadity.io/google-maps-scraper' },
  openGraph: {
    title: 'Google Maps Scraper for Owner Mobile Numbers — Leadity',
    description:
      'The focused alternative to Outscraper and Apify for US B2B cold-call teams.',
    type: 'website',
    url: 'https://leadity.io/google-maps-scraper',
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Leadity Google Maps Scraper',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Sales Intelligence',
      operatingSystem: 'Web',
      url: 'https://leadity.io/google-maps-scraper',
      description:
        'Google Maps scraper specialized for US business owner mobile number extraction. Mobile-only filter, TCPA-aware export, niche × geo targeting.',
      offers: [
        { '@type': 'Offer', name: '50 free mobiles', price: '0', priceCurrency: 'USD' },
        { '@type': 'Offer', name: '2,000 mobiles', price: '59', priceCurrency: 'USD' },
        { '@type': 'Offer', name: '5,000 mobiles', price: '139', priceCurrency: 'USD' },
        { '@type': 'Offer', name: '10,000 mobiles', price: '229', priceCurrency: 'USD' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '47',
        bestRating: '5',
      },
      featureList: [
        'Owner-direct mobile filter',
        'US-only data',
        '1,255+ business categories',
        'TCPA-aware export with DNC flags',
        'CSV, Google Sheets, HubSpot, Pipedrive export',
        'Niche × ZIP × state × metro filtering',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a Google Maps scraper?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Google Maps scraper is a tool that extracts business listing data from Google Maps — business names, addresses, phone numbers, hours, websites, ratings, reviews. Most scrapers (Apify, Outscraper) extract whatever Google publishes publicly. Leadity is a specialized Google Maps scraper that filters for verified owner-direct mobile numbers only — not receptionist landlines — for US B2B cold-call teams.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is using a Google Maps scraper legal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Scraping publicly available Google Maps data is legal in the US under hiQ Labs v. LinkedIn (Ninth Circuit, 2019). It may violate Google&rsquo;s Terms of Service (a private contract matter), but is not a federal crime. The legal risk for cold callers is in the outreach that follows scraping, governed by TCPA and state laws. See our /compliance/is-scraping-google-maps-legal page for the full breakdown.',
          },
        },
        {
          '@type': 'Question',
          name: 'What&rsquo;s the best Google Maps scraper for cold-calling?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For US B2B cold-call teams specifically, Leadity is the most focused option — mobile-only filtering, TCPA-aware export, US-only data, 1,255+ categories, $59 flat for 2,000 mobiles. For general-purpose scraping (multiple platforms beyond Google Maps), Apify is better. For multi-tool scraping suites with AppSumo lifetime deal, Outscraper. The right choice depends on whether your use case is cold-call-specific (Leadity) or broader scraping (Apify/Outscraper).',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a Google Maps scraper cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pricing varies by tool: Leadity charges flat $59 for 2,000 verified mobiles. Outscraper uses credit pricing starting at $29/500 credits ($3/1,000 records baseline, plus enrichment multipliers). Apify uses platform pricing ($5 free, $29/month Starter, plus per-actor variable costs). Bright Data starts at $1.27/1,000 records on enterprise plans. For US B2B cold-call use cases requiring mobile filtering, Leadity&rsquo;s flat $0.0295/mobile typically beats credit-based pricing by 2-4×.',
          },
        },
        {
          '@type': 'Question',
          name: 'What data fields can I extract with Leadity&rsquo;s Google Maps scraper?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Leadity returns: business name, address, owner-direct mobile (mobile-only filtered), business category (one of 1,255+), Google rating + review count, business hours, website URL, year established (when available), service area radius, plus TCPA flags (DNC status, line type, carrier). Email and additional enrichment fields available via integrations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I integrate Leadity&rsquo;s scraper with my CRM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Native integrations with HubSpot, Pipedrive, Close, Smartlead, Instantly, Lemlist. Plus Zapier, n8n, Make.com for any HTTP-trigger workflow tool. Direct CSV export and Google Sheets push also available. For AI agents, an MCP server is hosted at mcp.leadity.io.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leadity.io' },
        { '@type': 'ListItem', position: 2, name: 'Google Maps Scraper', item: 'https://leadity.io/google-maps-scraper' },
      ],
    },
  ],
}

export default function GoogleMapsScraperPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="prose mx-auto max-w-4xl px-6 py-20 dark:prose-invert">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/">Home</Link> / <span>Google Maps Scraper</span>
        </nav>

        <h1 className="text-5xl font-bold tracking-tight">
          Google Maps Scraper for{' '}
          <span className="text-brand-gradient">B2B Owner Mobile Numbers</span>
        </h1>

        <p className="lead text-xl text-[var(--color-text-secondary)] mt-6">
          Leadity is a focused Google Maps scraper for US B2B cold-call teams.
          Where Apify and Outscraper return whatever Google publishes (mostly
          receptionist landlines), Leadity filters for verified owner-direct
          mobile numbers across 1,255+ US business categories. Mobile-only
          export, TCPA-aware flags, flat $59 for 2,000 mobiles.
        </p>

        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated April 2026
        </p>

        {/* PRICING */}
        <h2 className="text-3xl font-bold mt-16">Pricing</h2>

        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <div className="p-6 border rounded-xl">
            <h3 className="text-base font-bold">Free</h3>
            <p className="text-2xl font-bold">$0</p>
            <p className="text-sm">50 mobiles</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-base font-bold">Starter</h3>
            <p className="text-2xl font-bold">$59</p>
            <p className="text-sm">2,000 mobiles</p>
          </div>
          <div className="p-6 border-2 border-[#1B86FF] rounded-xl">
            <h3 className="text-base font-bold">Pro</h3>
            <p className="text-2xl font-bold">$139</p>
            <p className="text-sm">5,000 mobiles</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-base font-bold">Scale</h3>
            <p className="text-2xl font-bold">$229</p>
            <p className="text-sm">10,000 mobiles</p>
          </div>
        </div>

        <p className="mt-6 text-sm">
          Inline cost comparison: Outscraper at 2,000 records ≈ $20-30 after
          enrichment (real cost ~$0.10/usable mobile). Leadity flat $59 ≈
          $0.027/usable mobile. ~3-4× cheaper at scale.
        </p>

        {/* HOW IT COMPARES */}
        <h2 className="text-3xl font-bold mt-16">How Leadity&rsquo;s Google Maps scraper compares</h2>

        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm">
            <thead>
              <tr><th>Tool</th><th>Best for</th><th>Mobile-only filter</th><th>US focus</th><th>Entry price</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Leadity</strong></td>
                <td>US B2B cold-call</td>
                <td></td>
                <td></td>
                <td>$59 (2,000)</td>
              </tr>
              <tr>
                <td>Apify</td>
                <td>General + custom workflows</td>
                <td></td>
                <td></td>
                <td>$5 credit</td>
              </tr>
              <tr>
                <td>Outscraper</td>
                <td>Multi-platform suite</td>
                <td></td>
                <td></td>
                <td>$29 (500 credits)</td>
              </tr>
              <tr>
                <td>Bright Data</td>
                <td>Enterprise scale</td>
                <td></td>
                <td></td>
                <td>~$1.27/1k</td>
              </tr>
              <tr>
                <td>Octoparse</td>
                <td>No-code visual</td>
                <td></td>
                <td></td>
                <td>$75/month</td>
              </tr>
              <tr>
                <td>Lobstr.io</td>
                <td>Reviews-specific</td>
                <td></td>
                <td></td>
                <td>$20/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6">
          For US B2B cold-call use cases specifically, Leadity is the most
          focused option. For general-purpose scraping, Apify wins on breadth.
          For enterprise infrastructure, Bright Data. Choose based on your
          actual use case.
        </p>

        {/* FEATURES */}
        <h2 className="text-3xl font-bold mt-16">Features</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-bold mt-0">Mobile-Only Verified</h3>
            <p>Carrier-level line-type lookup before delivery. ~84% verified mobile rate.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-bold mt-0">US-Only Coverage</h3>
            <p>All 50 states, 2.4M+ businesses, 1,255+ categories.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-bold mt-0">TCPA-Aware Export</h3>
            <p>DNC flags + line-type tags built into every export.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-bold mt-0">Flat Pricing</h3>
            <p>$0.0295/mobile flat. No credits, no per-task multipliers.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-bold mt-0">Niche × Geo Filtering</h3>
            <p>By state, metro, ZIP, polygon. Combine with category for precise targeting.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-bold mt-0">Native Integrations</h3>
            <p>HubSpot, Pipedrive, Close, Smartlead, Instantly, Lemlist, Zapier, n8n.</p>
          </div>
        </div>

        {/* DATA DICTIONARY */}
        <h2 className="text-3xl font-bold mt-16">What you get per business</h2>

        <p>Default columns:</p>
        <ul>
          <li><code>business_name</code> — Business listing name</li>
          <li><code>owner_mobile_e164</code> — Owner-direct mobile in E.164 format (verified)</li>
          <li><code>address</code> — Full street address</li>
          <li><code>category</code> — Google Business Profile primary category</li>
          <li><code>google_rating</code> — Star rating (1-5)</li>
          <li><code>google_review_count</code> — Number of reviews</li>
          <li><code>website</code> — Website URL (when available)</li>
          <li><code>hours_of_operation</code> — Business hours</li>
          <li><code>tcpa_dnc_status</code> — National DNC registry status</li>
          <li><code>line_type</code> — Mobile / Landline / VoIP</li>
          <li><code>carrier</code> — Mobile carrier (Verizon, T-Mobile, AT&T, etc.)</li>
          <li><code>timezone</code> — Local time zone (for compliant dialing)</li>
        </ul>

        <p className="mt-6">Optional columns (via integrations):</p>
        <ul>
          <li><code>email</code> — Business email (when available)</li>
          <li><code>year_established</code> — Founding year</li>
          <li><code>service_area_radius</code> — Service area in miles</li>
          <li><code>num_employees</code> — Estimated employee count</li>
          <li><code>linkedin_url</code> — Owner LinkedIn (when available)</li>
        </ul>

        {/* LEGAL */}
        <h2 className="text-3xl font-bold mt-16">Is using a Google Maps scraper legal?</h2>

        <p>
          Scraping publicly available Google Maps data is legal in the US under{' '}
          <strong>hiQ Labs v. LinkedIn (Ninth Circuit, 2019, reaffirmed 2022)</strong>.
          Public business data is protected from CFAA claims. The legal risk for
          B2B cold-call teams isn&rsquo;t the scraping itself — it&rsquo;s the cold outreach
          that follows, governed by TCPA, CAN-SPAM, and state laws.
        </p>

        <p>
          See:{' '}
          <Link href="/compliance/is-scraping-google-maps-legal">Is Scraping Google Maps Legal? (full guide)</Link> ·{' '}
          <Link href="/compliance/tcpa-guide-2026">TCPA Compliance Guide 2026</Link>
        </p>

        {/* TESTIMONIAL */}
        <blockquote className="border-l-4 border-[#1B86FF] pl-6 italic my-12">
          <p className="text-lg">
            "We ran 16,000 leads through Outscraper last quarter and found about
            500 that were workable mobiles. With Leadity&rsquo;s mobile-only filter
            we bought 2,000 mobiles for $59 and booked 4 meetings from the
            first day&rsquo;s calls. <strong>10× better than Outscraper.</strong>"
          </p>
          <footer className="not-italic mt-4 text-sm text-[var(--color-text-secondary)]">
            — Cold-call agency owner, Leadity customer
          </footer>
        </blockquote>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[rgba(27,134,255,0.05)] p-8 text-center">
          <h3 className="text-2xl font-bold">Try Leadity&rsquo;s Google Maps Scraper — Free 50 Mobiles</h3>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            No credit card. CSV export in 5 minutes.
          </p>
          <div className="mt-6">
            <Link href="/pricing" className="btn-liquid inline-block">
              Get 50 free mobiles
            </Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-16">Frequently asked questions</h2>
        {/* Render FAQ Q&As as <details> */}

        <h2 className="text-3xl font-bold mt-16">Related</h2>
        <ul>
          <li><Link href="/alternatives/outscraper">Leadity vs Outscraper for cold callers</Link></li>
          <li><Link href="/alternatives/apify">Leadity vs Apify</Link></li>
          <li><Link href="/business-owner-mobile-numbers">Business Owner Mobile Numbers (data only)</Link></li>
          <li><Link href="/google-maps-phone-number-extractor">Phone Number Extractor</Link></li>
          <li><Link href="/google-maps-email-extractor">Email Extractor</Link></li>
          <li><Link href="/compliance/is-scraping-google-maps-legal">Is scraping Google Maps legal?</Link></li>
          <li><Link href="/blog/best-google-maps-scrapers-2026">10 Best Google Maps Scrapers 2026 (listicle)</Link></li>
        </ul>
      </article>
      <Footer />
      <SignupPopup />
    </>
  )
}
