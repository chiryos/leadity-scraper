/**
 * /compliance/is-scraping-google-maps-legal — Full page
 *
 * Drop into: app/compliance/is-scraping-google-maps-legal/page.tsx
 *
 * The legal pillar. Cloned from Lobstr.io's structure (which dominates this
 * SERP), adapted for US legal framing (hiQ v. LinkedIn) instead of EU/CNIL.
 *
 * Targets: "is scraping google maps legal", "is web scraping legal",
 * "google maps scraping legal", "is it legal to scrape google maps"
 *
 * The "commit to the answer" H1 is the SEO-killer move competitors hedge on.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SignupPopup } from "@/components/signup-popup"

export const metadata: Metadata = {
  title: 'Is Scraping Google Maps Legal in the US? Yes — for Public Business Data | Leadity',
  description:
    'Is scraping Google Maps legal in the United States? Yes, for public business data, per hiQ Labs v. LinkedIn (2019). The real legal risk for cold callers isn&rsquo;t scraping — it&rsquo;s TCPA. Here&rsquo;s the 2026 breakdown.',
  alternates: { canonical: 'https://leadity.io/compliance/is-scraping-google-maps-legal' },
  openGraph: {
    title: 'Is Scraping Google Maps Legal in the US? Yes.',
    description: 'The legal answer for B2B cold callers in 2026 — hiQ v. LinkedIn, TCPA, state laws.',
    type: 'article',
    url: 'https://leadity.io/compliance/is-scraping-google-maps-legal',
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Is Scraping Google Maps Legal in the US? Yes — Here&rsquo;s What That Actually Means',
      datePublished: '2026-04-25T00:00:00Z',
      dateModified: '2026-04-25T00:00:00Z',
      wordCount: 3200,
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
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is it legal to scrape Google Maps in the United States?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, scraping publicly available Google Maps data is generally legal in the US under hiQ Labs v. LinkedIn (Ninth Circuit, 2019, reaffirmed 2022). Public business information — name, address, phone, hours, reviews — is protected under First Amendment principles. The Ninth Circuit ruled that the Computer Fraud and Abuse Act (CFAA) does not prohibit scraping publicly accessible data. Google&rsquo;s Terms of Service may forbid scraping, but ToS violations are a contract matter, not a criminal statute.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Google&rsquo;s Terms of Service apply to scraping?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google&rsquo;s Terms of Service explicitly prohibits automated access to its services, including Google Maps. However, ToS violations are a private contract matter — Google can ban your account, block your IP, or potentially sue for breach of contract, but ToS violations are not a federal crime. The hiQ v. LinkedIn precedent specifically distinguished ToS violations from CFAA violations: scraping public data does not violate the CFAA even if it violates a website&rsquo;s ToS.',
          },
        },
        {
          '@type': 'Question',
          name: 'What did hiQ Labs v. LinkedIn establish?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'hiQ Labs v. LinkedIn (2019, Ninth Circuit; reaffirmed 2022 after remand) established that scraping publicly available data on the internet does not violate the Computer Fraud and Abuse Act (CFAA). LinkedIn had attempted to block hiQ from scraping public LinkedIn profile data; the court ruled that LinkedIn could not use the CFAA to prevent access to data that LinkedIn itself made publicly available. The case is the leading precedent for US web scraping legality and applies by analogy to Google Maps public business data.',
          },
        },
        {
          '@type': 'Question',
          name: 'What about Google v. SerpApi (2025)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In December 2025, Google filed suit against SerpApi alleging DMCA §1201 violations (circumvention of technological protection measures). The case is ongoing as of April 2026. The legal theory targets services that bypass Google&rsquo;s rate limits, CAPTCHAs, and anti-bot systems — not pure public-data scraping per se. The implication for B2B cold-call teams: avoid services or marketing language that emphasizes "bypassing rate limits" or "defeating CAPTCHAs." Scraping public business data through legitimate technical means is still protected under hiQ.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the cold outreach to scraped contacts legal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This is the actual legal risk for most cold-call teams — not the scraping itself. Cold outreach to scraped contacts is governed by separate statutes: TCPA (Telephone Consumer Protection Act), CAN-SPAM (for email), state-specific cold-call laws, and the National Do Not Call Registry. TCPA imposes $500-$1,500 per violation for unauthorized calls/SMS to mobile numbers. State laws (Florida, Washington, Oklahoma) add stricter rules. See our /compliance/tcpa-guide-2026 for the full compliant cold-call playbook.',
          },
        },
        {
          '@type': 'Question',
          name: 'What about GDPR if I&rsquo;m only marketing in the US?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GDPR applies to EU data subjects — if you cold-call US business owners only, GDPR is not in scope. CCPA (California Consumer Privacy Act) and similar state privacy laws apply within their jurisdictions. For US-only B2B cold outreach to business owner mobiles, the primary compliance frameworks are TCPA + state cold-call laws + DNC registry rules. GDPR becomes relevant only if you&rsquo;re marketing to EU subjects, which Leadity (US-only) does not support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Google sue me for scraping Google Maps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Theoretically yes — Google can pursue a breach-of-contract claim for ToS violations or a DMCA §1201 claim if you bypassed technical protection measures (the SerpApi theory). In practice: Google primarily addresses scraping through technical means (rate limits, IP bans, account suspensions) rather than civil lawsuits. The first wave of scraper lawsuits (Google v. SerpApi, Dec 2025) targets the largest commercial actors. Small-volume B2B scraping for legitimate cold-outreach use cases has not been a litigation target.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Leadity handle the legal stance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Leadity sources public business data via legitimate technical means and provides TCPA-aware export flags so customers can run compliant cold outreach. We do not market based on bypassing Google&rsquo;s rate limits, defeating CAPTCHAs, or other adversarial framing. Our customer agreement clarifies that data is provided as-is and TCPA compliance is the buyer&rsquo;s responsibility. We publish this guide and the TCPA guide because we believe cold-call teams should understand the actual legal landscape — not get sold marketing fluff.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leadity.io' },
        { '@type': 'ListItem', position: 2, name: 'Compliance', item: 'https://leadity.io/compliance' },
        { '@type': 'ListItem', position: 3, name: 'Is Scraping Google Maps Legal?', item: 'https://leadity.io/compliance/is-scraping-google-maps-legal' },
      ],
    },
  ],
}

export default function IsScrapingGoogleMapsLegalPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="prose mx-auto max-w-4xl px-6 py-20 dark:prose-invert">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/">Home</Link> / <Link href="/compliance">Compliance</Link> / <span>Is Scraping Google Maps Legal?</span>
        </nav>

        <h1 className="text-5xl font-bold tracking-tight">
          Is Scraping Google Maps Legal in the US?{' '}
          <span className="text-brand-gradient">Yes — for Public Business Data.</span>
        </h1>

        <p className="lead text-xl text-[var(--color-text-secondary)] mt-6">
          Scraping publicly available Google Maps data is legal in the United
          States under hiQ Labs v. LinkedIn (Ninth Circuit, 2019, reaffirmed
          2022). Public business information — name, address, phone, hours,
          reviews — is protected under First Amendment principles. The legal
          risk for cold callers isn&rsquo;t the scraping itself; it&rsquo;s the cold
          outreach that follows, which is governed by the TCPA and state laws.
        </p>

        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          By Vincent Chiriac, Founder, Leadity · Last updated April 2026 · 13-min read
        </p>

        <div className="my-8 p-6 rounded-xl border bg-amber-50 dark:bg-amber-950/20">
          <p className="m-0 text-sm">
            <strong>Disclaimer:</strong> Informational only, not legal advice.
            Web scraping case law evolves. Consult a telecom/IP attorney for
            your specific situation.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-16">The short answer</h2>

        <p>
          Scraping public Google Maps data is <strong>legal under US federal
          law</strong>. It may <strong>violate Google&rsquo;s Terms of Service</strong>
          (a private contract matter), and the <strong>cold outreach to
          scraped contacts is regulated separately</strong> under TCPA, CAN-SPAM,
          and state laws.
        </p>

        <p>
          For a B2B cold-call team using Leadity to extract owner mobile
          numbers from Google Business Profile listings, the legal risk profile is:
        </p>

        <ul>
          <li><strong>Federal scraping law</strong>: protected under hiQ v. LinkedIn (low risk)</li>
          <li><strong>Google ToS</strong>: theoretically violable, but Google primarily uses technical enforcement (account bans), not lawsuits, for small-volume scraping</li>
          <li><strong>TCPA + state cold-call laws</strong>: this is the real risk surface ($500-$1,500/violation), and it has nothing to do with scraping itself</li>
        </ul>

        <h2 className="text-3xl font-bold mt-16">Google&rsquo;s Terms vs US law: allowance is not legality</h2>

        <p>
          Google&rsquo;s Terms of Service prohibit automated access. Section 4 (Common
          Terms) and the specific Google Maps API Terms both forbid scraping.
        </p>

        <p>
          But ToS violations are a contract matter, not a criminal statute. The
          worst outcome from violating Google&rsquo;s ToS is:
        </p>

        <ul>
          <li>Google blocks your IP</li>
          <li>Google bans your account</li>
          <li>Google sends a cease-and-desist letter</li>
          <li>In rare cases, Google sues for breach of contract</li>
        </ul>

        <p>
          ToS violations don&rsquo;t put you in jail. They don&rsquo;t create criminal
          liability. They&rsquo;re not the same as violating the Computer Fraud and
          Abuse Act (CFAA) — which the Ninth Circuit has explicitly ruled does
          not apply to public-data scraping.
        </p>

        <h2 className="text-3xl font-bold mt-16">The authoritative case: hiQ Labs v. LinkedIn</h2>

        <p>
          <strong>hiQ Labs, Inc. v. LinkedIn Corp. (9th Cir. 2019, 2022)</strong>{' '}
          is the leading US precedent for web scraping legality.
        </p>

        <p>The facts:</p>

        <ul>
          <li>hiQ Labs scraped public LinkedIn profile data for analytics</li>
          <li>LinkedIn issued cease-and-desist, citing CFAA violations</li>
          <li>hiQ sued for declaratory judgment that scraping was lawful</li>
          <li>Ninth Circuit ruled in favor of hiQ, twice (2019 and after Supreme Court remand in 2022)</li>
        </ul>

        <p>The holding (paraphrased):</p>

        <blockquote className="border-l-4 border-[#1B86FF] pl-6 italic">
          The Computer Fraud and Abuse Act does not prohibit scraping
          publicly accessible data. "Without authorization" under the CFAA
          requires the data to be behind some access barrier (login, paywall,
          etc.). Public web data does not have such a barrier. Scraping it
          is not a federal crime.
        </blockquote>

        <p>
          Applied to Google Maps: business name, address, phone, hours,
          category, reviews, and ratings are all publicly visible without login.
          They&rsquo;re analogous to the public LinkedIn profile data hiQ scraped.
          The hiQ holding applies.
        </p>

        <h2 className="text-3xl font-bold mt-16">What about Google v. SerpApi (2025)?</h2>

        <p>
          In December 2025, Google filed suit against SerpApi alleging DMCA
          §1201 violations — specifically, circumvention of technological
          protection measures (CAPTCHAs, rate limits, anti-bot systems).
        </p>

        <p>
          The case is ongoing as of April 2026. Important distinctions:
        </p>

        <ul>
          <li>This is a <strong>contract + DMCA</strong> theory, not a CFAA theory. hiQ&rsquo;s holding still stands.</li>
          <li>SerpApi is a high-volume commercial service explicitly built around bypassing Google&rsquo;s rate limits — different risk profile than B2B owner-mobile data extraction.</li>
          <li>The DMCA §1201 theory targets <em>services that defeat technical protections</em>, not data scraping itself.</li>
        </ul>

        <p>
          Implication for B2B cold-call teams using Leadity: don&rsquo;t use
          providers that publicly market based on "bypassing Google&rsquo;s rate
          limits" or "defeating CAPTCHAs." The Leadity infrastructure does not
          rely on circumventing technical protections — we source through
          legitimate API quotas and traditional anti-detection patterns that
          Google&rsquo;s anti-bot systems have not been engineered to specifically
          target.
        </p>

        <h2 className="text-3xl font-bold mt-16">What CAN-SPAM, TCPA, and state laws say about cold outreach</h2>

        <p>
          The actual legal risk for cold-call teams isn&rsquo;t the scraping. It&rsquo;s
          what you do with the scraped contacts.
        </p>

        <h3 className="text-xl font-semibold mt-8">TCPA (Telephone Consumer Protection Act)</h3>
        <p>
          Imposes $500-$1,500 per violation for unauthorized calls or SMS to
          mobile numbers. Class action settlements regularly exceed $5M-$50M.
          Apply to B2B cold calls, with narrower carve-outs than B2C. See our{' '}
          <Link href="/compliance/tcpa-guide-2026">full TCPA guide</Link>.
        </p>

        <h3 className="text-xl font-semibold mt-8">CAN-SPAM</h3>
        <p>
          Federal email law. Permits cold email but requires: clear opt-out
          mechanism, accurate sender info, no deceptive subject lines.
          Penalties up to $50,120 per violation (FTC enforcement).
        </p>

        <h3 className="text-xl font-semibold mt-8">National DNC Registry</h3>
        <p>
          Operated by FTC. Calls to registered numbers are restricted.
          Subscription required ($80/area code or $720 unlimited US).
          Re-scrub every 30 days. Leadity exports include DNC flags.
        </p>

        <h3 className="text-xl font-semibold mt-8">State-specific laws</h3>
        <p>
          Several states have enhanced cold-call rules:
        </p>
        <ul>
          <li><strong>Florida</strong>: FTSA 2021 amendments — explicit prior written consent requirements</li>
          <li><strong>Washington</strong>: RCW 19.158 — time of day, disclosure</li>
          <li><strong>Oklahoma</strong>: enhanced penalties up to $5,000/call</li>
          <li><strong>Texas, California, others</strong>: various restrictions</li>
        </ul>
        <p>See our <Link href="/compliance/state-cold-call-laws">state-by-state breakdown</Link>.</p>

        <h2 className="text-3xl font-bold mt-16">GDPR / CCPA — when do they matter?</h2>

        <p>
          <strong>GDPR (EU)</strong>: applies to data of EU residents. If you&rsquo;re
          cold-calling US business owners only, GDPR is not in scope. Leadity
          is US-only and does not create GDPR exposure for US-only customers.
        </p>

        <p>
          <strong>CCPA (California)</strong>: applies within California. Limits
          how you can collect, use, and share personal data of California
          residents. Business owner data falls under CCPA when calling
          California-based businesses.
        </p>

        <p>
          <strong>State privacy laws</strong>: Virginia (VCDPA), Colorado (CPA),
          Connecticut (CTDPA), Utah (UCPA), and other emerging state privacy
          laws apply to their respective residents. Best practice: treat all
          US data subjects under the strictest applicable state law.
        </p>

        <h2 className="text-3xl font-bold mt-16">What you actually risk (account bans, not lawsuits)</h2>

        <p>
          For typical B2B cold-call use of Leadity-style data:
        </p>

        <ul>
          <li><strong>Realistic risks:</strong> account bans on Google services, IP blocks, cease-and-desist letters from Google</li>
          <li><strong>Less likely:</strong> breach-of-contract suit from Google (high-volume actors only)</li>
          <li><strong>Most likely actual risk:</strong> TCPA class action from a single recipient who happens to be a plaintiff-side attorney</li>
        </ul>

        <p>
          The realistic threat model: a TCPA plaintiff lawyer files a class
          action over an unauthorized cold call to a mobile number. Settlement
          ranges from $5K-$5M depending on class size.
        </p>

        <h2 className="text-3xl font-bold mt-16">Best practices for compliant cold outreach in 2026</h2>

        <ol>
          <li>Source public data only (Leadity&rsquo;s Google Business Profile sourcing qualifies)</li>
          <li>Don&rsquo;t publicly market based on bypassing rate limits / CAPTCHAs (avoids DMCA §1201 exposure)</li>
          <li>Scrub against National DNC Registry every 30 days</li>
          <li>Honor state-specific cold-call laws (Florida, Washington, Oklahoma especially)</li>
          <li>Identify yourself as B2B in first sentence of every cold call</li>
          <li>Honor opt-out requests immediately</li>
          <li>Time-of-day restriction: 8am-9pm local recipient time</li>
          <li>For SMS: explicit opt-in only, never cold-SMS</li>
          <li>Maintain call records for 4+ years (TCPA statute of limitations)</li>
          <li>Use a CRM with audit trails (HubSpot, Salesforce, Pipedrive, Close)</li>
        </ol>

        <p>
          Following these 10 practices, the realistic litigation risk for
          B2B cold-call teams approaches zero — even at scale.
        </p>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[rgba(27,134,255,0.05)] p-8 text-center">
          <h3 className="text-2xl font-bold">Get TCPA-aware mobile data — Try Leadity free</h3>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            DNC + line-type flags built in. 50 verified mobiles free, no card.
          </p>
          <div className="mt-6">
            <Link href="/pricing" className="btn-liquid inline-block">
              Get 50 free mobiles
            </Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-16">Frequently asked questions</h2>
        {/* Render FAQ Q&As as <details> */}

        <h2 className="text-3xl font-bold mt-16">Related compliance content</h2>
        <ul>
          <li><Link href="/compliance/tcpa-guide-2026">TCPA Guide for B2B Cold Callers (2026)</Link></li>
          <li><Link href="/compliance/state-cold-call-laws">State-by-state cold call laws</Link></li>
          <li><Link href="/compliance/dnc-guide">National DNC Registry guide</Link></li>
          <li><Link href="/compliance/cold-sms-rules">Cold SMS rules and 10DLC</Link></li>
          <li><Link href="/tools/tcpa-risk-checker">Free TCPA Risk Checker</Link></li>
        </ul>
      </article>
      <Footer />
      <SignupPopup />
    </>
  )
}
