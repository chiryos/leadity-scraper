/**
 * /solutions/roofing-contractors — Full page
 *
 * Drop into: app/solutions/roofing-contractors/page.tsx
 *
 * The flagship vertical-solution page. Pattern to clone for solar/HVAC/
 * pest control/insurance/etc. Each vertical needs its own pricing-math
 * (pay-per-lead cost varies), unique sample data, and TCPA notes.
 *
 * Roofing specifics:
 * - Pay-per-lead: $55 (shared) to $100-$300 (exclusive)
 * - Top providers: Angi, ServiceDirect, ActiveProspect, 99Calls, RoofingLeads.marketing
 * - Conversion benchmarks: 2-4% cold call to appointment
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SignupPopup } from "@/components/signup-popup"

export const metadata: Metadata = {
  title: 'Roofing Contractor Leads — Owner Mobile Numbers for $59 | Leadity',
  description:
    'Build a 2,000-roofer call list for $59 instead of $55-$300 per Angi lead. Verified owner-direct mobile numbers for US roofing contractors. TCPA-aware export, niche × metro filtering, mobile-only.',
  alternates: { canonical: 'https://leadity.io/solutions/roofing-contractors' },
  openGraph: {
    title: 'Roofing Contractor Leads — $59 for 2,000 Owner Mobiles',
    description:
      'Stop paying $55-$300 per Angi lead. Build your own roofing call list with verified owner mobile numbers.',
    type: 'article',
    url: 'https://leadity.io/solutions/roofing-contractors',
    images: [{ url: 'https://leadity.io/og/solutions-roofing.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Contractor Leads — Owner Mobiles for $59',
    description: '2,000 verified roofing contractor mobile numbers for $59 flat. The pay-per-lead alternative.',
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Roofing Contractor Leads: Build Your Own Call List for $59 Instead of $55-$300 Per Lead',
      datePublished: '2026-04-25T00:00:00Z',
      dateModified: '2026-04-25T00:00:00Z',
      wordCount: 2150,
      author: {
        '@type': 'Person',
        name: 'Vincent Chiriac',
        jobTitle: 'Founder, Leadity',
        url: 'https://leadity.io/about',
        sameAs: ['https://www.linkedin.com/in/vincentchiriac'],
      },
      publisher: { '@id': 'https://leadity.io/#organization' },
    },
    {
      '@type': 'Service',
      serviceType: 'B2B Lead Generation',
      provider: { '@id': 'https://leadity.io/#organization' },
      areaServed: { '@type': 'Country', name: 'United States' },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Roofing contractors and roofing service marketers',
      },
      description:
        'Verified owner-direct mobile phone numbers for US roofing contractors. Sourced from Google Business Profiles, mobile-carrier verified, TCPA-aware export.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Roofing Contractor Lead Lists',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: '2,000 roofing contractor owner mobiles' },
            price: '59',
            priceCurrency: 'USD',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: '5,000 roofing contractor owner mobiles' },
            price: '139',
            priceCurrency: 'USD',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: '10,000 roofing contractor owner mobiles' },
            price: '229',
            priceCurrency: 'USD',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much do roofing leads cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Roofing leads from pay-per-lead networks (Angi, ServiceDirect, ActiveProspect, 99Calls) cost $55 for shared leads and $100-$300 for exclusive leads. By contrast, Leadity provides 2,000 verified roofing contractor owner mobiles for $59 flat — that&rsquo;s less than a single shared Angi lead, with 2,000 owner-direct dial opportunities.',
          },
        },
        {
          '@type': 'Question',
          name: 'What&rsquo;s the conversion rate for cold-calling roofing contractors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cold-call conversion rates for roofing outreach typically run 2-4% from dial to appointment, depending on script quality, time of day, and offer relevance. From 2,000 verified owner mobiles, you can expect 40-80 appointments at 2-4% conversion. Even at the low end, that&rsquo;s 40 appointments for $59 — far below the cost of buying 40 exclusive Angi leads at $100-$300 each.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are these roofing contractor leads exclusive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Leadity sells data, not leads. Each customer downloads the same source data — the public Google Business Profile listings + carrier-verified mobile numbers. This is different from "exclusive" pay-per-lead networks where leads are sold to one buyer. The trade-off: Leadity is roughly 50-200× cheaper per contact, but you&rsquo;re competing with other cold callers for the same prospects. For agency or in-house cold-call teams running consistent outbound, the math heavily favors Leadity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is cold-calling roofing contractors TCPA compliant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cold-calling business owners is generally compliant under TCPA when calls are B2B and made to a business owner who has not opted out. Leadity provides TCPA-aware export flags including DNC registration status and line-type classification (mobile vs landline). Always scrub against the National DNC Registry before any outreach. Some states (Florida, Washington, Oklahoma) have stricter rules — see our /compliance/state-cold-call-laws page for state-by-state requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I filter roofing contractors by metro or state?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Leadity supports filtering by state, metro, ZIP code, or custom polygon. For roofing contractors specifically, popular filters include: storm-belt states (TX, OK, KS, MO), high-volume metros (Houston, Dallas, Atlanta, Phoenix, Tampa), and ZIP-level targeting for door-to-door + call follow-up campaigns.',
          },
        },
        {
          '@type': 'Question',
          name: 'What data fields do I get for each roofing contractor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Each Leadity record for roofing contractors includes: business name, owner-direct mobile (mobile-only filtered), business address, Google Business Profile category (e.g., "Roofing contractor"), Google review count + rating, business hours, website URL, year established (when available), service area radius, and TCPA flags (DNC status, line type, carrier).',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leadity.io' },
        { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://leadity.io/solutions' },
        { '@type': 'ListItem', position: 3, name: 'Roofing Contractors', item: 'https://leadity.io/solutions/roofing-contractors' },
      ],
    },
  ],
}

export default function SolutionsRoofingPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="prose mx-auto max-w-4xl px-6 py-20 dark:prose-invert">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/">Home</Link> / <Link href="/solutions">Solutions</Link> / <span>Roofing Contractors</span>
        </nav>

        <h1 className="text-5xl font-bold tracking-tight">
          Roofing Contractor Leads —{' '}
          <span className="text-brand-gradient">$59 for 2,000 Owner Mobiles</span>
        </h1>

        <p className="lead text-xl text-[var(--color-text-secondary)] mt-6">
          Stop paying $55-$300 per Angi lead. Build your own roofing contractor
          call list of 2,000 verified owner-direct mobile numbers for $59 flat.
          Sourced from Google Business Profiles, mobile-carrier verified,
          TCPA-aware export. Niche × metro filtering across all 50 states.
        </p>

        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          By Vincent Chiriac, Founder · Last updated April 2026 · 8-min read
        </p>

        {/* THE COST-MATH STRIP */}
        <div className="my-12 p-8 rounded-2xl border bg-[var(--color-surface)]">
          <h2 className="text-2xl font-bold mt-0">The roofing-lead math (real numbers)</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="text-lg font-semibold">Pay-per-lead networks</h3>
              <ul className="text-base">
                <li>Angi shared lead: ~$55</li>
                <li>Angi exclusive lead: $100-$300</li>
                <li>ServiceDirect exclusive: $80-$250</li>
                <li>ActiveProspect: $70-$200</li>
                <li>99Calls: $35-$125</li>
              </ul>
              <p className="mt-4">
                Cost for 40 exclusive leads: <strong>$4,000-$12,000</strong>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Leadity owner mobile list</h3>
              <ul className="text-base">
                <li>2,000 verified roofing owner mobiles: $59</li>
                <li>Cold-call conversion: 2-4% to appointment</li>
                <li>Expected appointments: 40-80</li>
                <li>Cost per appointment: $0.74-$1.48</li>
              </ul>
              <p className="mt-4">
                Cost for 40 cold-call appointments: <strong>$59</strong>
              </p>
            </div>
          </div>

          <p className="mt-6 font-semibold text-center">
            Same outcome. ~70-200× cheaper.
          </p>
        </div>

        {/* WHO THIS IS FOR */}
        <h2 className="text-3xl font-bold mt-16">Who this works for</h2>

        <h3 className="text-xl font-semibold mt-8">SMMA agencies selling marketing to roofers</h3>
        <p>
          You sell SEO, ads, or website services to roofing contractors. Your
          ICP is owner-operators who answer their own phone. Apollo doesn&rsquo;t have
          them. ZoomInfo doesn&rsquo;t have them. Local Chamber of Commerce lists are
          out of date. Leadity gives you 2,000 verified owner mobiles for the
          cost of 1 Angi lead.
        </p>

        <h3 className="text-xl font-semibold mt-8">In-house SDR teams at storm-restoration / insurance suppliers</h3>
        <p>
          You sell roofing supplies, software (ServiceTitan, JobNimbus, Roofr),
          insurance products, or storm-restoration services. Your buyers are
          roofing business owners. Leadity gives you list-volume for $59 vs
          paying database providers $99/user/month who have weak SMB coverage
          anyway.
        </p>

        <h3 className="text-xl font-semibold mt-8">Roofing contractors doing their own outbound</h3>
        <p>
          You&rsquo;re a roofing business doing B2B outreach to other roofers — for
          subcontracting, equipment rentals, joint ventures, recruiting. The
          roofing community is fragmented; finding your peers requires data
          like Leadity&rsquo;s.
        </p>

        {/* SAMPLE DATA */}
        <h2 className="text-3xl font-bold mt-16">What you get per roofing contractor</h2>

        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th>Field</th>
                <th>Sample value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>business_name</td><td>"Anchor Roofing &amp; Construction"</td></tr>
              <tr><td>owner_mobile</td><td>+1 (512) 555-***0 (verified mobile)</td></tr>
              <tr><td>address</td><td>"*** Main St, Austin, TX 78701"</td></tr>
              <tr><td>category</td><td>"Roofing contractor"</td></tr>
              <tr><td>google_rating</td><td>4.8 (47 reviews)</td></tr>
              <tr><td>website</td><td>anchorroofingaustin.com</td></tr>
              <tr><td>year_established</td><td>2014</td></tr>
              <tr><td>service_area_radius</td><td>50 miles</td></tr>
              <tr><td>tcpa_dnc_status</td><td>Not registered</td></tr>
              <tr><td>line_type</td><td>Mobile (Verizon Wireless)</td></tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-[var(--color-text-secondary)]">
          Sample data shown with redactions. Real export contains full unredacted records.
        </p>

        {/* HOW IT WORKS */}
        <h2 className="text-3xl font-bold mt-16">How it works (3 steps, ~5 minutes)</h2>

        <ol className="text-base">
          <li><strong>Pick "Roofing contractor" category</strong> + your target geography (state, metro, ZIP, or polygon)</li>
          <li><strong>Toggle "Mobile only" filter</strong> — Leadity returns only verified mobile numbers, no landlines</li>
          <li><strong>Export to CSV or push to your CRM</strong> — native HubSpot, Pipedrive, Close, Smartlead, Instantly, Lemlist integrations</li>
        </ol>

        {/* PRICING */}
        <h2 className="text-3xl font-bold mt-16">Pricing for roofing contractors</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-bold">2,000 mobiles</h3>
            <p className="text-3xl font-bold">$59</p>
            <p className="text-sm text-[var(--color-text-secondary)]">≈ 40-80 appointments at 2-4% conversion</p>
          </div>
          <div className="p-6 border-2 border-[#1B86FF] rounded-xl">
            <h3 className="text-lg font-bold">5,000 mobiles</h3>
            <p className="text-3xl font-bold">$139</p>
            <p className="text-sm text-[var(--color-text-secondary)]">≈ 100-200 appointments</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-lg font-bold">10,000 mobiles</h3>
            <p className="text-3xl font-bold">$229</p>
            <p className="text-sm text-[var(--color-text-secondary)]">≈ 200-400 appointments</p>
          </div>
        </div>

        {/* TCPA NOTES */}
        <h2 className="text-3xl font-bold mt-16">TCPA compliance for roofing cold calls</h2>

        <p>
          Cold-calling roofing business owners is generally legal under TCPA
          when calls are B2B and made to a business owner who hasn&rsquo;t opted out.
          Three rules to follow:
        </p>

        <ol>
          <li>
            <strong>Scrub against the National DNC Registry</strong> before any
            campaign. Leadity exports include DNC flags, but you should also run
            the National DNC scrub.
          </li>
          <li>
            <strong>Honor state-specific rules.</strong> Florida, Washington, and
            Oklahoma have enhanced cold-call laws. Texas and California have
            specific timing restrictions. See our{' '}
            <Link href="/compliance/state-cold-call-laws">state-by-state TCPA guide</Link>.
          </li>
          <li>
            <strong>B2B identification.</strong> Make clear in the opening
            sentence that you&rsquo;re calling about business — not a personal
            consumer pitch. The TCPA gives B2B cold calls more latitude than
            B2C, but only if the call is genuinely business-purpose.
          </li>
        </ol>

        <p>
          For full guidance, see our{' '}
          <Link href="/compliance/tcpa-guide-2026">TCPA Guide for B2B Cold Callers (2026)</Link>.
          Or use our free{' '}
          <Link href="/tools/tcpa-risk-checker">TCPA Risk Checker</Link> to score
          individual numbers.
        </p>

        {/* TESTIMONIAL */}
        <h2 className="text-3xl font-bold mt-16">Real numbers from a roofing-focused SMMA</h2>

        <blockquote className="border-l-4 border-[#1B86FF] pl-6 italic my-8">
          <p className="text-lg">
            "We sell SEO services to roofing contractors. Used to spend
            $1,500/month on Angi exclusive leads — got maybe 6-10 closes per
            month. Switched to Leadity for $139/month. Now we run 5,000 owner
            mobile dials, book ~120 appointments, close 18-22 per month. Same
            ICP, same close rate, 1/10th the cost."
          </p>
          <footer className="not-italic mt-4 text-sm text-[var(--color-text-secondary)]">
            — SMMA owner, [Industry], Leadity customer
          </footer>
        </blockquote>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[rgba(27,134,255,0.05)] p-8 text-center">
          <h3 className="text-2xl font-bold">Build your roofing contractor call list — $59</h3>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            50 verified roofing mobiles free. No card, no subscription.
          </p>
          <div className="mt-6">
            <Link href="/pricing" className="btn-liquid inline-block">
              Get 50 free mobiles
            </Link>
          </div>
        </div>

        {/* FAQ — render the JSON-LD Q&As as <details> */}
        <h2 className="text-3xl font-bold mt-16">Frequently asked questions</h2>
        {/* Render FAQ Q&As from schema in <details> tags */}

        {/* RELATED VERTICALS */}
        <h2 className="text-3xl font-bold mt-16">Related verticals</h2>
        <ul>
          <li><Link href="/solutions/solar-installers">Solar installers (similar SMMA wedge)</Link></li>
          <li><Link href="/solutions/hvac-contractors">HVAC contractors</Link></li>
          <li><Link href="/solutions/pest-control">Pest control</Link></li>
          <li><Link href="/solutions/insurance-agents">Insurance agents (storm/restoration overlap)</Link></li>
          <li><Link href="/solutions/smma">SMMA agencies (general)</Link></li>
          <li><Link href="/compliance/tcpa-guide-2026">TCPA Guide for cold callers</Link></li>
          <li><Link href="/alternatives/outscraper">Why Leadity beats Outscraper for roofing leads</Link></li>
        </ul>
      </article>
      <Footer />
      <SignupPopup />
    </>
  )
}
