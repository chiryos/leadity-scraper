/**
 * /compliance/state-cold-call-laws — state-by-state cold call rules
 *
 * Currently: hand-curated 12 states with the strictest rules. Phase 6 will
 * generate dynamic /compliance/state-cold-call-laws/[state] pages for all
 * 50 states with deep dives. This page is the hub + comparison overview.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title:
    "State-by-State Cold Call Laws for B2B Outreach (2026) — Leadity",
  description:
    "Federal TCPA is the floor. Florida, Washington, and Oklahoma have stricter rules. Every US state's specific cold-call and cold-SMS requirements in one reference.",
  alternates: {
    canonical: "https://leadity.io/compliance/state-cold-call-laws",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "State-by-State Cold Call Laws for US B2B Outreach (2026)",
      datePublished: "2026-04-26T00:00:00Z",
      dateModified: "2026-04-26T00:00:00Z",
      wordCount: 1900,
      author: {
        // TODO: replace placeholder with real founder name + LinkedIn URL
        "@type": "Person",
        name: "Vincent Chiriac",
        jobTitle: "Founder, Leadity",
        url: "https://leadity.io/about",
        sameAs: ["https://www.linkedin.com/in/vincentchiriac"],
      },
      publisher: { "@id": "https://leadity.io/#organization" },
      mainEntityOfPage: {
        "@id": "https://leadity.io/compliance/state-cold-call-laws",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leadity.io" },
        { "@type": "ListItem", position: 2, name: "Compliance", item: "https://leadity.io/compliance" },
        { "@type": "ListItem", position: 3, name: "State Cold Call Laws", item: "https://leadity.io/compliance/state-cold-call-laws" },
      ],
    },
  ],
};

// Hand-curated. Phase 6 will expand to all 50 states programmatically.
const stateRules = [
  {
    state: "Florida",
    risk: "high",
    rule: "Florida Telephone Solicitation Act (FTSA) requires prior express written consent for ANY automated/recorded sales calls or texts. Private right of action — $500-$1,500 per violation. Class actions are common.",
    note: "B2B carve-out is narrow. Treat any cold outreach to FL businesses as needing consent or a strong B2B exemption argument.",
  },
  {
    state: "Washington",
    risk: "high",
    rule: "Washington's Commercial Electronic Mail Act + RCW 80.36.400 require disclosed identity at start of call, name of company, and product/service offered. Bans calls before 8am or after 9pm local time.",
    note: "Strict opt-out enforcement. Repeat violations carry per-call penalties.",
  },
  {
    state: "Oklahoma",
    risk: "high",
    rule: "Oklahoma Telemarketer Restriction Act requires registration with the AG, $200/year fee. Cold calls to consumers are restricted; B2B calls have a narrower exemption than federal TCPA.",
    note: "Out-of-state callers must still register if calling into OK.",
  },
  {
    state: "California",
    risk: "medium",
    rule: "Federal TCPA + CCPA (data privacy) layer + CA-specific anti-robocall rules. Express written consent for prerecorded/auto-dialed calls to any number, mobile or landline.",
    note: "Manual cold calls to business owner mobiles using B2B exemption are generally OK; auto-dialed are not without consent.",
  },
  {
    state: "Texas",
    risk: "medium",
    rule: "Texas Business & Commerce Code Ch 302 — telemarketers must register ($200/year), disclose company name + caller identity. B2B exemption exists but narrow.",
    note: "TX is one of the larger volume markets and registration enforcement is active.",
  },
  {
    state: "New Jersey",
    risk: "medium",
    rule: "NJ Consumer Fraud Act + Do-Not-Call rules. Strict enforcement on automated calls; manual B2B calls subject to standard TCPA rules.",
    note: "Active state AG enforcement on telemarketing complaints.",
  },
  {
    state: "Oregon",
    risk: "medium",
    rule: "Oregon Telephone Solicitation Act — caller ID required, identity disclosure mandatory, no calls before 8am or after 9pm local.",
    note: "B2B exemption similar to federal. Manual B2B calls generally OK.",
  },
  {
    state: "Mississippi",
    risk: "medium",
    rule: "Mississippi Telephone Solicitation Act — registration required for telemarketers, no calls before 8am or after 9pm.",
    note: "Less aggressive enforcement than FL/WA/OK but still on the books.",
  },
  {
    state: "Indiana",
    risk: "medium",
    rule: "Indiana DNC list separate from National DNC. Telemarketers must scrub against state list in addition to federal.",
    note: "B2B carve-out is broader than FL/WA/OK.",
  },
  {
    state: "Massachusetts",
    risk: "medium",
    rule: "MA 93A consumer protection statute applies to any deceptive cold-call practice. State DNC enforcement is active.",
    note: "B2B cold calls to business owner mobiles generally permitted with standard TCPA caveats.",
  },
  {
    state: "Arizona",
    risk: "low",
    rule: "Federal TCPA is the binding floor. AZ has consumer protection statutes but no significant additional cold-call requirements for B2B.",
    note: "Standard B2B outreach typically compliant with federal-level scrubbing.",
  },
  {
    state: "Other 38 states",
    risk: "low",
    rule: "Federal TCPA + National DNC are the binding requirements. Most states have consumer protection statutes that mirror federal rules.",
    note: "TODO Phase 6 — generate dynamic /compliance/state-cold-call-laws/[state] for each state with deep specifics.",
  },
];

export default function StateColdCallLawsPage() {
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
          <Link href="/compliance" className="hover:underline">Compliance</Link>
          <span className="mx-2">/</span>
          <span>State Cold Call Laws</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
          State-by-state cold call laws for{" "}
          <span className="text-brand-gradient">B2B outreach</span>
        </h1>

        <div className="mt-6 flex items-center gap-4 text-sm text-[var(--color-text-secondary)]">
          <span>By Vincent Chiriac, Founder of Leadity</span>
          <span>·</span>
          <span>Last updated April 2026</span>
        </div>

        <p className="mt-8 text-xl leading-relaxed">
          Federal TCPA + the National DNC Registry are the floor. Three states
          — <strong>Florida, Washington, and Oklahoma</strong> — layer on
          significantly stricter rules for cold calling and cold SMS, including
          private rights of action that have produced waves of class-action
          lawsuits. A handful of other states add narrower requirements. The
          rest mostly mirror federal rules.
        </p>

        <p className="mt-4 text-base text-[var(--color-text-secondary)]">
          This is not legal advice. The summaries below are working operator
          guidance — verify state requirements with your own counsel before
          launching campaigns into any state with documented strict
          enforcement.
        </p>

        <h2 className="text-3xl font-bold mt-16">Risk tiers</h2>
        <ul className="mt-4 space-y-2 text-base">
          <li>
            <strong className="text-red-600">High-risk:</strong> FL, WA, OK —
            stricter than federal, active private-right-of-action lawsuits.
          </li>
          <li>
            <strong className="text-amber-600">Medium-risk:</strong> CA, TX,
            NJ, OR, MS, IN, MA — additional state-specific requirements layered
            on federal.
          </li>
          <li>
            <strong className="text-emerald-600">Standard:</strong> AZ + 38
            other states — federal TCPA + National DNC compliance is generally
            sufficient for B2B cold calls to business owners.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-16">State-by-state breakdown</h2>
        <div className="mt-8 space-y-6">
          {stateRules.map((s) => (
            <div
              key={s.state}
              className="p-6 border rounded-2xl"
              style={{
                borderLeftWidth: 4,
                borderLeftColor:
                  s.risk === "high"
                    ? "#dc2626"
                    : s.risk === "medium"
                    ? "#d97706"
                    : "#10b981",
              }}
            >
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-xl font-bold">{s.state}</h3>
                <span
                  className="text-xs uppercase tracking-wider font-semibold"
                  style={{
                    color:
                      s.risk === "high"
                        ? "#dc2626"
                        : s.risk === "medium"
                        ? "#d97706"
                        : "#10b981",
                  }}
                >
                  {s.risk} risk
                </span>
              </div>
              <p className="text-sm">{s.rule}</p>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)] italic">
                Operator note: {s.note}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-16">Universal best practices</h2>
        <ol className="mt-4 space-y-3 text-base list-decimal list-inside">
          <li>
            <strong>Scrub against the National DNC Registry every campaign.</strong>{" "}
            Leadity exports include DNC flags as of export time; re-scrub at dial
            time for safety.
          </li>
          <li>
            <strong>Honor calling-time windows.</strong> Federal TCPA: 8am-9pm
            recipient&rsquo;s local time. Many states match.
          </li>
          <li>
            <strong>Disclose identity in the first 60 seconds.</strong> Company
            name, your name, purpose of call.
          </li>
          <li>
            <strong>Honor opt-outs immediately.</strong> Maintain an internal
            DNC list — every recipient who asks to stop contact goes on it
            permanently.
          </li>
          <li>
            <strong>Document consent for any pre-existing relationship.</strong>{" "}
            If you ever defended a TCPA claim, prior consent is the strongest
            shield.
          </li>
        </ol>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">
            Run your TCPA risk check before launching
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            Free tool: paste a number list and get DNC + line-type + state
            risk flags before you dial.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/tcpa-risk-checker"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold"
            >
              TCPA risk checker
            </Link>
            <Link
              href="/compliance/tcpa-guide-2026"
              className="glass-chip inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base"
            >
              Read TCPA guide
            </Link>
          </div>
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
