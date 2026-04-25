/**
 * / — Full Homepage (SEO master-pack version, Plan A)
 *
 * Replaces the v1 design-polished homepage with the SEO-first homepage from
 * the master pack (sections per 02-IMPLEMENTATION-GUIDE.md). Apollo-framed
 * positioning, hybrid hero, full conversion funnel, no scraper-forward copy.
 *
 * Sections (in order):
 *   1.  Nav (existing)
 *   2.  Hero — Apollo framing + 10x-Outscraper testimonial anchor
 *   3.  Problem — why Apollo / Outscraper / pay-per-lead don't work
 *   4.  How it works — 3 steps
 *   5.  Features — 6-card grid
 *   6.  Comparison strip — vs alternatives, real cost-per-usable-mobile
 *   7.  Pricing mini — link to /pricing
 *   8.  Guarantee
 *   9.  Testimonials — 6 quotes
 *   10. FAQ — 8 questions
 *   11. Final CTA
 *   12. Footer (existing)
 *
 * Migration notes from pack file:
 *   - \' JSX escapes normalized to plain apostrophes / HTML entities
 *   - Utility classes that don't exist in this Tailwind v4 @theme setup
 *     remapped:
 *       text-muted-foreground -> text-[var(--color-text-secondary)]
 *       bg-muted/30           -> bg-[var(--color-surface)]
 *       bg-background         -> bg-white
 *       text-brand            -> text-[#1B86FF]
 *       border-brand          -> border-[#1B86FF]
 *       bg-brand/10           -> bg-[rgba(27,134,255,0.1)]
 *       text-foreground       -> text-[var(--color-text-primary)]
 *       btn-primary           -> btn-liquid (existing in globals.css)
 *       btn-secondary         -> glass-chip
 *   - 5k Growth tier price = $129 (not $139 in pack — recent pricing change)
 *   - Wrapped with existing <Nav />, <Footer />, <SignupPopup />
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title:
    "Leadity — Owner-Direct Mobile Numbers for US Local Business Outreach",
  description:
    "Direct mobile phone numbers for decision-makers at 2.4M+ US local businesses. Built for B2B cold-call and cold-SMS teams. Verified mobile-only data, 1,255+ categories, TCPA-aware export, from $59 flat.",
  alternates: { canonical: "https://leadity.io" },
};

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO SECTION */}
      <section className="hero relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 max-w-6xl">
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-[rgba(27,134,255,0.1)] text-[#1B86FF]">
              Built for US cold-call, cold-SMS, and SMMA outreach teams
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center text-balance">
            Owner-direct mobile lines for{" "}
            <span className="text-brand-gradient">
              2.4M+ US local businesses.
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-[var(--color-text-secondary)] text-center max-w-3xl mx-auto text-balance">
            Decision-maker mobile numbers, filtered by niche, city, or ZIP —
            built for agencies, SMMA contractors, AI sellers, insurance, solar,
            roofing, and HVAC teams who need to reach owners, not gatekeepers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-text-secondary)]">
            <span>✓ US-only verified data</span>
            <span>✓ Mobile-only (no landlines)</span>
            <span>✓ TCPA-aware export</span>
            <span>✓ Flat pricing, no credits</span>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pricing"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold"
            >
              Get 50 owner mobiles free
            </Link>
            <Link
              href="/how-it-works"
              className="glass-chip inline-flex items-center justify-center rounded-full px-8 py-4 text-lg"
            >
              See how it works
            </Link>
          </div>

          <p className="mt-12 text-center text-sm text-[var(--color-text-secondary)]">
            <strong className="text-[var(--color-text-primary)]">
              2,473,891
            </strong>{" "}
            verified owner mobiles available · updated weekly · 1,255+ business
            categories
          </p>

          {/* Conversion-anchor testimonial */}
          <div className="mt-20 max-w-3xl mx-auto">
            <blockquote className="border-l-4 border-[#1B86FF] pl-6 italic">
              <p className="text-lg md:text-xl">
                &ldquo;We ran 16,000 leads through Outscraper last quarter and
                found about 500 that were workable mobiles. With Leadity&rsquo;s
                mobile-only filter we bought 2,000 mobiles for $59 and booked 4
                meetings from the first day&rsquo;s calls.{" "}
                <strong>10× better than Outscraper.</strong>&rdquo;
              </p>
              <footer className="not-italic mt-4 text-sm text-[var(--color-text-secondary)]">
                {/* TODO: replace placeholder with real customer name + company */}
                — Cold-call agency owner, Leadity customer ·{" "}
                <Link
                  href="/alternatives/outscraper"
                  className="text-[#1B86FF] underline"
                >
                  See full Outscraper comparison
                </Link>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-balance">
            Why Apollo, Outscraper, and pay-per-lead don&rsquo;t work for local
            SMB outreach
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 border rounded-2xl">
              <h3 className="text-xl font-bold">Apollo / ZoomInfo</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                B2B data champions
              </p>
              <p className="mt-4 text-base">
                275M+ contacts focused on enterprise. Local SMB owners — roofers,
                dentists, HVAC contractors — aren&rsquo;t on LinkedIn or have
                minimal profiles with no mobile. SMB mobile coverage: 8-12%.
              </p>
              <Link
                href="/vs/apollo"
                className="mt-4 inline-block text-[#1B86FF] text-sm underline"
              >
                See full Apollo comparison →
              </Link>
            </div>

            <div className="p-8 border rounded-2xl">
              <h3 className="text-xl font-bold">Outscraper / Apify</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Generic Google Maps scrapers
              </p>
              <p className="mt-4 text-base">
                Return whatever Google publishes — typically receptionist
                landlines mixed with occasional mobiles. No mobile-only filter.
                Credit math that triples your headline cost. Mobile coverage:
                ~8-15%.
              </p>
              <Link
                href="/alternatives/outscraper"
                className="mt-4 inline-block text-[#1B86FF] text-sm underline"
              >
                See full Outscraper comparison →
              </Link>
            </div>

            <div className="p-8 border rounded-2xl">
              <h3 className="text-xl font-bold">Pay-per-lead networks</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Angi, ServiceDirect, etc.
              </p>
              <p className="mt-4 text-base">
                $55 shared / $100-$300 exclusive per lead. Math destroys unit
                economics for any team running consistent outbound. The roofer
                getting 6 closes/month at $1,500 in lead spend = $250/CAC.
              </p>
              <Link
                href="/solutions/roofing-contractors"
                className="mt-4 inline-block text-[#1B86FF] text-sm underline"
              >
                See the math →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center">How it works</h2>
          <p className="text-center mt-4 text-[var(--color-text-secondary)]">
            From signup to CSV in under 5 minutes.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1B86FF] text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold mt-4">Pick niche + geography</h3>
              <p className="mt-2 text-base text-[var(--color-text-secondary)]">
                Choose from 1,255+ US business categories. Filter by state,
                metro, ZIP, or polygon.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1B86FF] text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold mt-4">
                Toggle &ldquo;Mobile only&rdquo;
              </h3>
              <p className="mt-2 text-base text-[var(--color-text-secondary)]">
                Carrier-level line-type lookup. Returns verified mobiles only —
                no landlines, no VoIP, no false positives.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1B86FF] text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold mt-4">Export to your stack</h3>
              <p className="mt-2 text-base text-[var(--color-text-secondary)]">
                CSV, Google Sheets, or native push to HubSpot, Pipedrive, Close,
                Smartlead, Instantly, Lemlist, n8n, Zapier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center">
            Why teams switch to Leadity
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <FeatureCard
              icon="📞"
              title="Mobile-Only Verified"
              description="Carrier HLR lookup before delivery. 84%+ verified mobile rate."
            />
            <FeatureCard
              icon="🇺🇸"
              title="US-Only Coverage"
              description="All 50 states, 2.4M+ businesses, 1,255+ categories."
            />
            <FeatureCard
              icon="⚖️"
              title="TCPA-Aware Export"
              description="DNC flags + line-type tags + carrier metadata built into every export."
            />
            <FeatureCard
              icon="💰"
              title="Flat Pricing"
              description="$0.0295 per verified mobile. No credits, no per-task multipliers."
            />
            <FeatureCard
              icon="🎯"
              title="Niche × Geo Filter"
              description="By state, metro, ZIP, or polygon. Combine with category for precise targeting."
            />
            <FeatureCard
              icon="🔌"
              title="Native CRM Integrations"
              description="HubSpot, Pipedrive, Close, Smartlead, Instantly, Lemlist, Zapier, n8n, Make."
            />
          </div>
        </div>
      </section>

      {/* COMPARISON STRIP */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center">
            Real cost-per-usable-mobile
          </h2>
          <p className="text-center mt-4 text-[var(--color-text-secondary)]">
            Headline price ≠ real cost. Here&rsquo;s what you actually pay per
            usable mobile:
          </p>

          <div className="overflow-x-auto mt-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 pr-4">Tool</th>
                  <th className="text-left py-3 pr-4">Headline price</th>
                  <th className="text-left py-3 pr-4">Mobile coverage</th>
                  <th className="text-left py-3">Real $/usable mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[rgba(27,134,255,0.08)]">
                  <td className="py-3 pr-4">
                    <strong>Leadity</strong>
                  </td>
                  <td className="py-3 pr-4">$59 / 2,000</td>
                  <td className="py-3 pr-4">84.6%</td>
                  <td className="py-3">
                    <strong>$0.027</strong>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 pr-4">Outscraper</td>
                  <td className="py-3 pr-4">$3 / 1,000 records</td>
                  <td className="py-3 pr-4">~8.5%</td>
                  <td className="py-3">~$0.10</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 pr-4">Apify</td>
                  <td className="py-3 pr-4">$2.10 / 1,000 places</td>
                  <td className="py-3 pr-4">~12%</td>
                  <td className="py-3">~$0.022 (no TCPA)</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 pr-4">Apollo</td>
                  <td className="py-3 pr-4">$99/user/month</td>
                  <td className="py-3 pr-4">~10%</td>
                  <td className="py-3">~$0.50-$2+</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 pr-4">Pay-per-lead</td>
                  <td className="py-3 pr-4">$55-$300 per lead</td>
                  <td className="py-3 pr-4">100%</td>
                  <td className="py-3">$55-$300</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center mt-8">
            <Link
              href="/blog/best-google-maps-scrapers-2026"
              className="text-[#1B86FF] underline"
            >
              See full benchmark across 10 tools →
            </Link>
          </p>
        </div>
      </section>

      {/* PRICING MINI (5k tier $129 — matches /pricing) */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold">Simple flat pricing</h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Pay only for verified mobiles. No credits.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-12">
            <div className="p-6 border rounded-2xl">
              <h3 className="text-base font-bold">Free</h3>
              <p className="text-3xl font-bold mt-2">$0</p>
              <p className="text-sm">50 mobiles</p>
            </div>
            <div className="p-6 border rounded-2xl">
              <h3 className="text-base font-bold">Starter</h3>
              <p className="text-3xl font-bold mt-2">$59</p>
              <p className="text-sm">2,000 mobiles</p>
            </div>
            <div className="p-6 border-2 border-[#1B86FF] rounded-2xl">
              <h3 className="text-base font-bold">Growth</h3>
              <p className="text-3xl font-bold mt-2">$129</p>
              <p className="text-sm">5,000 mobiles</p>
            </div>
            <div className="p-6 border rounded-2xl">
              <h3 className="text-base font-bold">Scale</h3>
              <p className="text-3xl font-bold mt-2">$229</p>
              <p className="text-sm">10,000 mobiles</p>
            </div>
          </div>

          <Link
            href="/pricing"
            className="glass-chip mt-8 inline-flex items-center justify-center rounded-full px-6 py-3"
          >
            See full pricing →
          </Link>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl font-bold">The Leadity guarantee</h2>
          <p className="mt-4 text-xl text-[var(--color-text-secondary)]">
            Bad lead? We don&rsquo;t just replace it — we refund it.
          </p>
          <p className="mt-8 text-base">
            If a number we delivered as &ldquo;verified mobile&rdquo; turns out
            to be a landline, we refund that record. If a number was
            DNC-registered at time of export, we refund. 7-day refund window.
            No questions.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center">
            Real DMs · real customers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Testimonial
              quote="10× better than Outscraper. Booked 4 meetings yesterday."
              author="Cold-call agency owner"
            />
            <Testimonial
              quote="Switched our roofing client from Angi at $1,500/mo to Leadity at $129/mo. 18 closes vs 6."
              author="SMMA owner"
            />
            <Testimonial
              quote="TCPA scared us off cold calling for years. The DNC flags + mobile filter let us run safely."
              author="Insurance recruiter"
            />
            <Testimonial
              quote="Apollo had zero of our local SMB targets. Leadity had every one."
              author="SaaS sales lead"
            />
            <Testimonial
              quote="5,000 verified solar installer mobiles in 12 minutes. Pay-per-lead can't compete."
              author="Solar SMMA"
            />
            <Testimonial
              quote="The math was decisive. $0.027/usable mobile vs $0.10 from Outscraper."
              author="Cold-call ops director"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-center">
            Frequently asked questions
          </h2>

          <div className="mt-12 space-y-3">
            <FAQItem
              q="What is Leadity?"
              a="A B2B SaaS that extracts and verifies owner-direct mobile phone numbers from US Google Business Profile listings across 1,255+ business categories. Built for cold-call and cold-SMS teams."
            />
            <FAQItem
              q="How is Leadity different from Outscraper?"
              a="Outscraper returns whatever Google publishes — typically receptionist landlines (~8.5% mobile). Leadity filters for verified mobile numbers only via carrier-level lookup. 84%+ verified mobile rate. Plus flat pricing instead of credit math, and TCPA-aware export."
            />
            <FAQItem
              q="Is Leadity legal to use?"
              a="Yes. Public Google Maps data is legally scrapeable in the US under hiQ Labs v. LinkedIn (2019). The legal risk for cold callers isn't scraping — it's the cold outreach (TCPA + state laws). See /compliance for full breakdown."
            />
            <FAQItem
              q="What's included in the free tier?"
              a="50 verified owner mobiles, no credit card, no expiration. Full feature set including TCPA-aware export."
            />
            <FAQItem
              q="Can I integrate with my CRM?"
              a="Yes — native HubSpot, Pipedrive, Close, Smartlead, Instantly, Lemlist. Plus Zapier, n8n, Make.com. CSV/Sheets export. MCP server for AI agents."
            />
            <FAQItem
              q="What's your refund policy?"
              a="7-day refund on any number that fails our quality guarantee — wrong line type, DNC-listed at time of export, or geographic mismatch."
            />
            <FAQItem
              q="Do you offer enterprise pricing?"
              a="Yes — for 10K+ mobiles per request or recurring monthly volume, contact hello@leadity.io for custom pricing."
            />
            <FAQItem
              q="Is Leadity TCPA compliant?"
              a="Leadity provides TCPA-aware export flags (DNC + line-type). Compliance is the buyer's responsibility — we provide the tools, you enforce them. See /compliance/tcpa-guide-2026."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-balance">
            Ready when you are.
            <br />
            <span className="text-brand-gradient">
              Scrape today. Text tomorrow.
            </span>
          </h2>
          <p className="mt-6 text-xl text-[var(--color-text-secondary)]">
            50 verified US owner mobiles. Free. No credit card.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold"
            >
              Get 50 mobiles free
            </Link>
            <Link
              href="/contact"
              className="glass-chip inline-flex items-center justify-center rounded-full px-8 py-4 text-lg"
            >
              Talk to founders
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <SignupPopup />
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border rounded-2xl">
      <p className="text-3xl">{icon}</p>
      <h3 className="text-lg font-bold mt-3">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
        {description}
      </p>
    </div>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="p-6 border rounded-2xl bg-white">
      <p className="text-base italic">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
        — {author}
      </p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-lg border p-4">
      <summary className="font-semibold cursor-pointer">{q}</summary>
      <p className="mt-2 text-sm">{a}</p>
    </details>
  );
}
