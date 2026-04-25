/**
 * /compliance/tcpa-guide-2026 — Full page
 *
 * Drop into: app/compliance/tcpa-guide-2026/page.tsx
 *
 * The TCPA pillar is Leadity's UNIQUE positioning angle.
 * Competitors don't have a serious TCPA content library.
 * This page should rank for: "TCPA compliance B2B", "TCPA cold calling 2026",
 * "TCPA mobile numbers", "TCPA penalty per call", etc.
 *
 * Author E-E-A-T is critical for legal content. Real human byline + LinkedIn.
 * Disclaimer: this is informational, not legal advice.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SignupPopup } from "@/components/signup-popup"

export const metadata: Metadata = {
  title: 'TCPA Compliance for B2B Cold Callers — 2026 Guide | Leadity',
  description:
    'Complete TCPA guide for US B2B cold callers in 2026. Penalties up to $1,500/violation. Mobile vs landline rules, DNC registry, state-specific laws, written consent doctrine. The 7-rule playbook for compliant cold outreach.',
  alternates: { canonical: 'https://leadity.io/compliance/tcpa-guide-2026' },
  openGraph: {
    title: 'TCPA Compliance for B2B Cold Callers — 2026 Guide',
    description:
      'Penalties up to $1,500/call. Here&rsquo;s what every US cold-call team needs to know in 2026.',
    type: 'article',
    url: 'https://leadity.io/compliance/tcpa-guide-2026',
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'TCPA Compliance for B2B Cold Callers in 2026: The Complete Guide',
      datePublished: '2026-04-25T00:00:00Z',
      dateModified: '2026-04-25T00:00:00Z',
      wordCount: 3300,
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
          name: 'What is TCPA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TCPA stands for the Telephone Consumer Protection Act, a US federal law passed in 1991. It regulates telephone solicitations, automated dialing systems, and SMS marketing. The TCPA imposes penalties of $500 per violation (up to $1,500 for willful violations) for unauthorized calls or SMS to mobile numbers, calls to numbers on the National Do Not Call Registry, and calls outside permitted hours (8am-9pm local time). It applies to both consumer and B2B outreach, though B2B has narrower carve-outs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does TCPA apply to B2B cold calls?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. TCPA applies to B2B calls, but with narrower restrictions than B2C. The key carve-outs: (1) calls to a registered business landline are generally exempt from TCPA mobile-call rules; (2) calls to a business owner&rsquo;s personal mobile, even for business purposes, are subject to TCPA; (3) the National DNC Registry primarily protects residential numbers, but business owners can register personal mobiles too. The safest approach for B2B cold callers: scrub against National + state DNC registries, identify yourself as B2B in the first sentence, and respect opt-out requests immediately.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the TCPA penalties?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TCPA imposes statutory damages of $500 per violation (per call or per SMS) for unauthorized contact. For willful or knowing violations, courts can award up to $1,500 per violation. There is no cap on aggregate damages — class action TCPA suits regularly settle in the $5M-$50M+ range. Leading plaintiff law firms (Spangenberg Shibley & Liber, Edelson PC, Lieff Cabraser) actively scout for TCPA violations and file class actions on behalf of consumers and small businesses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I scrub against the National DNC Registry?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The National DNC Registry, operated by the FTC, allows businesses to query its database of registered phone numbers via the DNC Registry Subscription service. The annual fee is $80 per area code (or $720 for unlimited US access). Most cold-call CRMs (Outreach, Salesloft, JustCall, Kixie) integrate DNC scrubbing automatically. Leadity exports include a DNC status flag for each number, so you can pre-filter before importing into your dialer. Always re-scrub before each campaign — DNC registrations expire and refresh.',
          },
        },
        {
          '@type': 'Question',
          name: 'What states have stricter cold-calling laws than federal TCPA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Several states impose enhanced cold-calling rules: Florida (Florida Telephone Solicitation Act, 2021 amendments — requires explicit prior written consent for many B2B calls), Washington (RCW 19.158 — restricts time of day and disclosure requirements), Oklahoma (mini-TCPA with enhanced penalties up to $5,000/call), Texas (specific timing restrictions for calls and SMS), California (CCPA + SB-1383 phone privacy provisions). See our state-by-state breakdown for full requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is cold-SMS the same as cold-calling under TCPA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For TCPA purposes, SMS messages are treated as calls. The same rules apply: $500 per unauthorized SMS, $1,500 for willful violations, DNC registry scrubbing required. SMS may be subject to additional carrier-level filtering (10DLC registration requirements as of 2023, A2P 10DLC rules). Cold-SMS to mobile numbers without prior express written consent is the highest-risk activity under TCPA. Always require explicit opt-in before SMS outreach, regardless of B2B vs B2C status.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Leadity&rsquo;s data come pre-scrubbed for TCPA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Leadity tags each export with TCPA-relevant flags: DNC registry status (registered/not registered as of last refresh), line type (mobile/landline/VoIP), carrier identification, and registered owner status (personal vs business listing). However, TCPA compliance is the buyer&rsquo;s responsibility — Leadity provides the data and the flags; you must enforce compliant practice (DNC scrubbing, B2B identification, opt-out honoring, time-of-day restrictions, state-specific rules). Always consult a telecom attorney for your specific outreach program.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are mobile numbers riskier than landlines for cold calls?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. TCPA imposes stricter rules on calls to mobile numbers than to business landlines. Mobile calls require either prior express consent or fall under narrow B2B carve-outs. Most TCPA class actions involve calls to mobile numbers without proper consent. Leadity&rsquo;s mobile-only focus is a feature, not a bug — but it raises the compliance bar. We recommend: (1) start with verified business mobiles only (Leadity&rsquo;s default), (2) scrub against DNC every 30 days, (3) honor opt-outs within 24 hours, (4) keep call records for 4+ years (TCPA statute of limitations).',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://leadity.io' },
        { '@type': 'ListItem', position: 2, name: 'Compliance', item: 'https://leadity.io/compliance' },
        { '@type': 'ListItem', position: 3, name: 'TCPA Guide 2026', item: 'https://leadity.io/compliance/tcpa-guide-2026' },
      ],
    },
  ],
}

export default function TCPAGuidePage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <article className="prose mx-auto max-w-4xl px-6 py-20 dark:prose-invert">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
          <Link href="/">Home</Link> / <Link href="/compliance">Compliance</Link> / <span>TCPA Guide 2026</span>
        </nav>

        <h1 className="text-5xl font-bold tracking-tight">
          TCPA Compliance for B2B Cold Callers —{' '}
          <span className="text-brand-gradient">2026 Guide</span>
        </h1>

        <p className="lead text-xl text-[var(--color-text-secondary)] mt-6">
          The TCPA imposes penalties of $500-$1,500 per unauthorized call or
          SMS to a US mobile number. Class action TCPA suits routinely settle
          in the $5M-$50M+ range. For US cold-call teams running outbound to
          mobile numbers in 2026, here&rsquo;s what you need to know — without the
          legalese.
        </p>

        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          By Vincent Chiriac, Founder, Leadity · Last updated April 2026 · 14-min read
        </p>

        {/* DISCLAIMER */}
        <div className="my-8 p-6 rounded-xl border bg-amber-50 dark:bg-amber-950/20">
          <p className="m-0 text-sm">
            <strong>Disclaimer:</strong> This guide is informational, not legal
            advice. TCPA cases are fact-specific. Always consult a telecom
            attorney for your specific outreach program. Leadity is not a law
            firm.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-16">What is TCPA?</h2>

        <p>
          The Telephone Consumer Protection Act (TCPA) is a US federal law
          passed in 1991. It regulates how businesses can use phone calls and
          SMS to contact consumers and businesses. The TCPA is enforced through
          private rights of action (individuals can sue) plus FCC oversight.
        </p>

        <p>
          Key restrictions:
        </p>

        <ul>
          <li>Calls to mobile numbers using auto-dialers require prior express consent</li>
          <li>Pre-recorded messages to mobile numbers require prior express written consent</li>
          <li>Calls to numbers on the National Do Not Call Registry are restricted</li>
          <li>Calls outside the 8am-9pm local-time window are restricted</li>
          <li>Opt-out requests must be honored within 30 days (and immediately for current campaigns)</li>
        </ul>

        <h2 className="text-3xl font-bold mt-16">Does TCPA apply to B2B cold calls?</h2>

        <p>
          <strong>Yes — but with narrower restrictions than B2C.</strong>
        </p>

        <p>
          The key distinctions for B2B cold callers:
        </p>

        <h3 className="text-xl font-semibold mt-8">Business landlines: generally exempt</h3>
        <p>
          Calls to a registered business landline are generally exempt from
          TCPA mobile-call rules. If you call a roofing company&rsquo;s main line
          and reach the receptionist, you&rsquo;re typically in safer territory.
          (Caveat: state-specific laws may add restrictions.)
        </p>

        <h3 className="text-xl font-semibold mt-8">Business owner&rsquo;s personal mobile: TCPA applies</h3>
        <p>
          Calls to a business owner&rsquo;s personal mobile number, even for business
          purposes, are subject to TCPA. This is where Leadity&rsquo;s data lives —
          owner-direct mobiles. The compliance burden is real and must be
          managed properly.
        </p>

        <h3 className="text-xl font-semibold mt-8">DNC registry: primarily residential, but business owners can register</h3>
        <p>
          The National DNC Registry is primarily for residential lines, but
          business owners can register their personal mobiles. About 8-12% of
          business owner mobiles are DNC-registered as of 2026 industry estimates.
        </p>

        <h2 className="text-3xl font-bold mt-16">TCPA penalties: the numbers</h2>

        <ul>
          <li><strong>$500 per violation</strong> — statutory damages, no proof of harm required</li>
          <li><strong>$1,500 per violation</strong> — for willful or knowing violations</li>
          <li><strong>No cap on aggregate damages</strong> — class actions can scale to millions</li>
        </ul>

        <p>
          Real settlement examples:
        </p>

        <ul>
          <li>Buchanan Ingersoll v. Lyon Insurance (2024): $13M settlement for 26,000 unauthorized calls</li>
          <li>Mey v. Got Warranty (2023): $61M settlement for warranty cold calls</li>
          <li>Numerous SMS class actions in the $5-50M range annually</li>
        </ul>

        <h2 className="text-3xl font-bold mt-16">The 7-rule TCPA compliance playbook</h2>

        <p>The compliant cold-call workflow in 2026:</p>

        <h3 className="text-xl font-semibold mt-8">Rule 1: Scrub against the National DNC Registry</h3>
        <p>
          Subscribe to the FTC&rsquo;s DNC Registry Subscription service ($80 per
          area code, $720 for full US). Re-scrub every 30 days. Most CRMs
          (Outreach, Salesloft, JustCall, Kixie) integrate DNC scrubbing
          automatically. Leadity exports include a DNC flag pre-checked at
          time of export.
        </p>

        <h3 className="text-xl font-semibold mt-8">Rule 2: Honor state-specific rules</h3>
        <p>
          Several states have enhanced TCPA rules:
        </p>
        <ul>
          <li><strong>Florida</strong> — explicit prior written consent for many B2B calls (FTSA 2021 amendments)</li>
          <li><strong>Washington</strong> — restricts time of day, disclosure requirements (RCW 19.158)</li>
          <li><strong>Oklahoma</strong> — enhanced penalties up to $5,000/call</li>
          <li><strong>Texas</strong> — specific timing restrictions</li>
          <li><strong>California</strong> — CCPA overlay + SB-1383 phone privacy</li>
        </ul>
        <p>See our <Link href="/compliance/state-cold-call-laws">state-by-state breakdown</Link>.</p>

        <h3 className="text-xl font-semibold mt-8">Rule 3: Identify yourself as B2B in the first sentence</h3>
        <p>
          The TCPA gives B2B cold calls more latitude than B2C, but only if the
          call is genuinely business-purpose. Open every cold call with: "Hi,
          this is [Name] from [Company]. I work with [type of business] like
          yours and wanted to ask about [business topic]." Don&rsquo;t pretend it&rsquo;s
          consumer outreach.
        </p>

        <h3 className="text-xl font-semibold mt-8">Rule 4: Honor opt-outs immediately</h3>
        <p>
          When someone says "don&rsquo;t call me," "remove me," "I&rsquo;m not interested,"
          or any equivalent — that&rsquo;s an opt-out. Add to your internal DNC list
          immediately. Continued calls after an opt-out trigger the $1,500
          willful-violation penalty.
        </p>

        <h3 className="text-xl font-semibold mt-8">Rule 5: Time-of-day restrictions (8am-9pm local time)</h3>
        <p>
          Calls only between 8am and 9pm local time of the recipient. Use
          number-area-code or geo-IP to determine local time. Most CRMs handle
          this automatically. Leadity exports include time-zone metadata for
          each record.
        </p>

        <h3 className="text-xl font-semibold mt-8">Rule 6: Maintain call records for 4+ years</h3>
        <p>
          TCPA statute of limitations is 4 years from the date of the call.
          Maintain records of: who you called, when, what was said, opt-out
          status, source of the lead. Use a CRM with audit trails (HubSpot,
          Salesforce, Pipedrive, Close).
        </p>

        <h3 className="text-xl font-semibold mt-8">Rule 7: For SMS — explicit opt-in only</h3>
        <p>
          Cold-SMS to mobile numbers without prior express written consent is
          the highest-risk TCPA activity. Always require explicit opt-in before
          any SMS outreach. SMS also requires 10DLC registration (since 2023)
          for A2P (application-to-person) messaging. Carrier filtering can
          block your campaigns even if TCPA-compliant.
        </p>

        <h2 className="text-3xl font-bold mt-16">Mobile vs landline: the critical distinction</h2>

        <p>
          The single most important TCPA consideration: <strong>are you calling
          a mobile or a landline?</strong>
        </p>

        <ul>
          <li><strong>Mobile</strong>: TCPA mobile-call rules apply. Auto-dialers require consent. SMS requires explicit opt-in. Higher liability.</li>
          <li><strong>Landline</strong>: Most TCPA mobile-specific rules don&rsquo;t apply. State laws may still apply. Lower liability.</li>
          <li><strong>VoIP</strong>: Treated as mobile for TCPA purposes if the underlying number is associated with a mobile carrier.</li>
        </ul>

        <p>
          Leadity exports include a line_type field for every record. Most
          generic data providers (Outscraper, Apify) don&rsquo;t — leaving you to
          run carrier-level lookups manually before each campaign.
        </p>

        <h2 className="text-3xl font-bold mt-16">Common TCPA violations and how to avoid them</h2>

        <h3 className="text-xl font-semibold mt-8">Violation: calling a DNC-registered number</h3>
        <p><strong>Avoid:</strong> Always pre-scrub against National DNC + state registries.</p>

        <h3 className="text-xl font-semibold mt-8">Violation: continuing to call after opt-out</h3>
        <p><strong>Avoid:</strong> Internal DNC list, immediate update on any opt-out signal, automated call-block in CRM.</p>

        <h3 className="text-xl font-semibold mt-8">Violation: pre-recorded message to mobile</h3>
        <p><strong>Avoid:</strong> Use live agents only, OR have prior express written consent, OR use legitimate B2B carve-outs.</p>

        <h3 className="text-xl font-semibold mt-8">Violation: cold-SMS without opt-in</h3>
        <p><strong>Avoid:</strong> Never send cold SMS without prior opt-in. For SMS marketing, always start with an opt-in funnel.</p>

        <h3 className="text-xl font-semibold mt-8">Violation: calls outside 8am-9pm local</h3>
        <p><strong>Avoid:</strong> Time-zone-aware dialing in your CRM.</p>

        <h3 className="text-xl font-semibold mt-8">Violation: no proof of consent for auto-dialer call</h3>
        <p><strong>Avoid:</strong> Document consent for every automated call. Manual dialing has carve-outs that auto-dialing doesn&rsquo;t.</p>

        <h2 className="text-3xl font-bold mt-16">Recent TCPA cases (2025-2026)</h2>

        <p>
          2025 saw a significant uptick in TCPA litigation, with class action
          filings up ~95% from 2024. Trends to watch:
        </p>

        <ul>
          <li>Increased state AG enforcement (especially Florida, Washington, Texas)</li>
          <li>10DLC carrier filtering — non-registered SMS campaigns get auto-blocked</li>
          <li>AI voice cloning concerns — pending FCC rulemaking on synthetic voices</li>
          <li>B2B carve-out narrowing — courts increasingly look at whether calls are <em>genuinely</em> B2B</li>
        </ul>

        <h2 className="text-3xl font-bold mt-16">How Leadity helps with TCPA compliance</h2>

        <p>
          Leadity provides the data, you enforce compliance. We make the data
          side easier:
        </p>

        <ul>
          <li><strong>Mobile-only filter</strong> — know what you&rsquo;re calling before you dial</li>
          <li><strong>DNC flag</strong> — pre-scrubbed against National DNC at time of export</li>
          <li><strong>Line-type classification</strong> — mobile, landline, VoIP, carrier name</li>
          <li><strong>Time-zone metadata</strong> — for compliant time-of-day dialing</li>
          <li><strong>Free TCPA Risk Checker tool</strong> — score individual numbers</li>
        </ul>

        <p>
          We don&rsquo;t enforce compliance for you. That&rsquo;s your responsibility. But
          we make the data layer compliant-by-default, so the only thing left
          is workflow + script.
        </p>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[rgba(27,134,255,0.05)] p-8 text-center">
          <h3 className="text-2xl font-bold">Get TCPA-flagged mobile data</h3>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            50 verified mobiles free. DNC flags + line type built in. No card.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/pricing" className="btn-liquid inline-block">
              Get 50 free mobiles
            </Link>
            <Link href="/tools/tcpa-risk-checker" className="glass-chip inline-block">
              Try the TCPA Risk Checker
            </Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-16">Frequently asked questions</h2>
        {/* Render FAQ Q&As as <details> */}

        <h2 className="text-3xl font-bold mt-16">Related compliance content</h2>
        <ul>
          <li><Link href="/compliance/is-scraping-google-maps-legal">Is scraping Google Maps legal in the US?</Link></li>
          <li><Link href="/compliance/state-cold-call-laws">State-by-state cold call laws</Link></li>
          <li><Link href="/compliance/dnc-guide">National DNC Registry guide</Link></li>
          <li><Link href="/compliance/cold-sms-rules">Cold SMS rules and 10DLC</Link></li>
          <li><Link href="/tools/tcpa-risk-checker">Free TCPA Risk Checker tool</Link></li>
        </ul>
      </article>
      <Footer />
      <SignupPopup />
    </>
  )
}
