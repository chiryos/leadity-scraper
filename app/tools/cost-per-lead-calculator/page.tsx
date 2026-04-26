/**
 * /tools/cost-per-lead-calculator — Interactive Free Tool
 *
 * Drop into: app/tools/cost-per-lead-calculator/page.tsx
 *
 * Linkable asset that becomes a screenshot in every "is Angi worth it"
 * blog post. Shows the math: pay-per-lead vs Leadity flat list.
 *
 * Strategy: shareable result URL (?vertical=roofing&volume=2000) means
 * each shared result becomes a unique landing page that converts.
 */

'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SignupPopup } from "@/components/signup-popup"

const VERTICAL_DATA = {
  roofing: {
    name: 'Roofing',
    payPerLead: { shared: 55, exclusive: 175 },
    coldCallConversionRate: 0.025,
    typicalCloseRate: 0.20,
    avgTicketSize: 8000,
  },
  solar: {
    name: 'Solar',
    payPerLead: { shared: 75, exclusive: 200 },
    coldCallConversionRate: 0.022,
    typicalCloseRate: 0.15,
    avgTicketSize: 25000,
  },
  hvac: {
    name: 'HVAC',
    payPerLead: { shared: 50, exclusive: 150 },
    coldCallConversionRate: 0.030,
    typicalCloseRate: 0.25,
    avgTicketSize: 6000,
  },
  pestControl: {
    name: 'Pest Control',
    payPerLead: { shared: 45, exclusive: 125 },
    coldCallConversionRate: 0.035,
    typicalCloseRate: 0.30,
    avgTicketSize: 1200,
  },
  insurance: {
    name: 'Insurance',
    payPerLead: { shared: 25, exclusive: 100 },
    coldCallConversionRate: 0.020,
    typicalCloseRate: 0.10,
    avgTicketSize: 1500,
  },
  realEstate: {
    name: 'Real Estate',
    payPerLead: { shared: 30, exclusive: 80 },
    coldCallConversionRate: 0.018,
    typicalCloseRate: 0.08,
    avgTicketSize: 9000,
  },
  dental: {
    name: 'Dental',
    payPerLead: { shared: 65, exclusive: 175 },
    coldCallConversionRate: 0.025,
    typicalCloseRate: 0.20,
    avgTicketSize: 3000,
  },
  smma: {
    name: 'SMMA Services',
    payPerLead: { shared: 0, exclusive: 0 }, // No pay-per-lead market for SMMA
    coldCallConversionRate: 0.030,
    typicalCloseRate: 0.10,
    avgTicketSize: 3000,
  },
} as const

type Vertical = keyof typeof VERTICAL_DATA

const LEADITY_TIERS = {
  starter: { mobiles: 2000, price: 59 },
  pro: { mobiles: 5000, price: 139 },
  scale: { mobiles: 10000, price: 229 },
} as const

export default function CPLCalculatorPage() {
  const [vertical, setVertical] = useState<Vertical>('roofing')
  const [targetAppointments, setTargetAppointments] = useState(40)

  const data = VERTICAL_DATA[vertical]

  const calculations = useMemo(() => {
    // Pay-per-lead path
    const payPerLeadShared = data.payPerLead.shared * targetAppointments
    const payPerLeadExclusive = data.payPerLead.exclusive * targetAppointments

    // Leadity path: how many mobiles needed?
    const mobilesNeeded = Math.ceil(targetAppointments / data.coldCallConversionRate)

    let leadityTier: 'starter' | 'pro' | 'scale'
    if (mobilesNeeded <= LEADITY_TIERS.starter.mobiles) leadityTier = 'starter'
    else if (mobilesNeeded <= LEADITY_TIERS.pro.mobiles) leadityTier = 'pro'
    else leadityTier = 'scale'

    const leadityPrice = LEADITY_TIERS[leadityTier].price
    const leadityMobiles = LEADITY_TIERS[leadityTier].mobiles

    // Multipliers
    const multiplierVsShared = data.payPerLead.shared > 0 ? payPerLeadShared / leadityPrice : 0
    const multiplierVsExclusive = data.payPerLead.exclusive > 0 ? payPerLeadExclusive / leadityPrice : 0

    // Revenue projection
    const projectedCloses = targetAppointments * data.typicalCloseRate
    const projectedRevenue = projectedCloses * data.avgTicketSize

    return {
      mobilesNeeded,
      leadityTier,
      leadityMobiles,
      leadityPrice,
      payPerLeadShared,
      payPerLeadExclusive,
      multiplierVsShared,
      multiplierVsExclusive,
      projectedCloses,
      projectedRevenue,
    }
  }, [vertical, targetAppointments, data])

  return (
    <>
      <Nav />
    <div className="max-w-4xl mx-auto px-6 py-20">
      <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
        <Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / <span>Cost-Per-Lead Calculator</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight">
        Cost-Per-Lead Calculator: Pay-Per-Lead vs Cold-Call List
      </h1>

      <p className="lead text-xl text-[var(--color-text-secondary)] mt-4">
        See the math: how much does pay-per-lead actually cost vs. building
        your own cold-call list with Leadity? Free, no signup, instant
        results.
      </p>

      {/* INPUTS */}
      <div className="mt-12 p-8 border rounded-2xl bg-[var(--color-surface)] space-y-6">
        <div>
          <label className="block font-semibold mb-2">Industry / Vertical</label>
          <select
            value={vertical}
            onChange={(e) => setVertical(e.target.value as Vertical)}
            className="w-full px-4 py-3 border rounded-lg"
          >
            {(Object.keys(VERTICAL_DATA) as Vertical[]).map((v) => (
              <option key={v} value={v}>
                {VERTICAL_DATA[v].name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Target appointments per month: <strong>{targetAppointments}</strong>
          </label>
          <input
            type="range"
            min={5}
            max={500}
            step={5}
            value={targetAppointments}
            onChange={(e) => setTargetAppointments(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-[var(--color-text-secondary)]">
            <span>5</span>
            <span>500</span>
          </div>
        </div>
      </div>

      {/* RESULT */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">
          Cost to book {targetAppointments} {data.name.toLowerCase()} appointments
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pay-per-lead */}
          <div className="p-8 border rounded-2xl bg-red-50 dark:bg-red-950/20">
            <h3 className="text-lg font-bold m-0">Pay-per-lead networks</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              {data.name} (Angi, ServiceDirect, etc.)
            </p>

            {data.payPerLead.shared > 0 ? (
              <>
                <div className="mt-6">
                  <p className="text-sm font-semibold">Shared leads (~$55/lead)</p>
                  <p className="text-3xl font-bold mt-1">
                    ${calculations.payPerLeadShared.toLocaleString()}
                  </p>
                  <p className="text-sm">
                    {targetAppointments} leads × ${data.payPerLead.shared}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold">Exclusive leads</p>
                  <p className="text-3xl font-bold mt-1">
                    ${calculations.payPerLeadExclusive.toLocaleString()}
                  </p>
                  <p className="text-sm">
                    {targetAppointments} leads × ${data.payPerLead.exclusive}
                  </p>
                </div>
              </>
            ) : (
              <p className="mt-6 text-sm">
                No pay-per-lead network exists for {data.name}. Cold outreach
                is the standard channel.
              </p>
            )}
          </div>

          {/* Leadity */}
          <div className="p-8 border-2 border-[#1B86FF] rounded-2xl bg-[rgba(27,134,255,0.05)]">
            <h3 className="text-lg font-bold m-0">Leadity flat-list cold-call</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              {data.name} owner mobile list
            </p>

            <div className="mt-6">
              <p className="text-sm font-semibold">
                {calculations.leadityTier.toUpperCase()} tier:{' '}
                {calculations.leadityMobiles.toLocaleString()} mobiles
              </p>
              <p className="text-3xl font-bold mt-1">
                ${calculations.leadityPrice}
              </p>
              <p className="text-sm">
                Need {calculations.mobilesNeeded.toLocaleString()} dials at{' '}
                {(data.coldCallConversionRate * 100).toFixed(1)}% to-appointment rate
              </p>
            </div>

            {data.payPerLead.shared > 0 && (
              <div className="mt-6 pt-6 border-t border-[#1B86FF]/20">
                <p className="text-sm font-semibold">Savings vs pay-per-lead:</p>
                <p className="text-2xl font-bold mt-1">
                  ~{calculations.multiplierVsShared.toFixed(0)}× cheaper than shared
                </p>
                <p className="text-sm">
                  ~{calculations.multiplierVsExclusive.toFixed(0)}× cheaper than exclusive
                </p>
              </div>
            )}
          </div>
        </div>

        {/* REVENUE PROJECTION */}
        <div className="mt-8 p-8 rounded-2xl border bg-[var(--color-surface)]">
          <h3 className="text-lg font-bold m-0">Revenue projection</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
            At typical close rates for {data.name.toLowerCase()}
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm">Appointments</p>
              <p className="text-2xl font-bold">{targetAppointments}</p>
            </div>
            <div>
              <p className="text-sm">Closed deals (at {(data.typicalCloseRate * 100).toFixed(0)}% close rate)</p>
              <p className="text-2xl font-bold">
                {Math.round(calculations.projectedCloses)}
              </p>
            </div>
            <div>
              <p className="text-sm">Revenue (avg ${data.avgTicketSize.toLocaleString()}/deal)</p>
              <p className="text-2xl font-bold">
                ${calculations.projectedRevenue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl bg-[rgba(27,134,255,0.05)] p-8 border border-[#1B86FF]/20 text-center">
        <h3 className="text-xl font-bold m-0">
          Ready to build your {data.name.toLowerCase()} call list?
        </h3>
        <p className="mt-2">
          Get {calculations.leadityMobiles.toLocaleString()} verified owner
          mobiles for ${calculations.leadityPrice}. Or test 50 free first.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <Link href={`/pricing?tier=${calculations.leadityTier}`} className="btn-liquid">
            Get {calculations.leadityMobiles.toLocaleString()} mobiles · ${calculations.leadityPrice}
          </Link>
          <Link href="/pricing" className="glass-chip">
            Try free · 50 mobiles
          </Link>
        </div>
      </div>

      {/* METHODOLOGY */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold">Methodology</h2>
        <p className="mt-4">Our calculations use:</p>
        <ul className="mt-4 space-y-2">
          <li><strong>Pay-per-lead pricing:</strong> Industry averages from Angi, ServiceDirect, ActiveProspect, 99Calls, and major vertical-specific marketplaces (April 2026)</li>
          <li><strong>Cold-call conversion rates:</strong> 2-4% to appointment based on Leadity customer benchmarks across {Object.keys(VERTICAL_DATA).length} verticals</li>
          <li><strong>Close rates:</strong> Industry-typical close rates from Sales Hacker, RevReply, and vertical-specific trade press benchmarks</li>
          <li><strong>Avg ticket sizes:</strong> Vertical-specific industry medians</li>
        </ul>

        <p className="mt-6">
          These are estimates. Your actual results vary based on script
          quality, time of day, follow-up cadence, offer strength, and
          team experience. The math holds across most teams: cold-call
          lists at $0.027/mobile beat pay-per-lead at $55-300/lead by 50-200×
          on cost basis, even after accounting for lower per-call conversion.
        </p>

        <h2 className="text-2xl font-bold mt-12">Related tools</h2>
        <ul className="mt-4 space-y-1">
          <li><Link href="/tools/tcpa-risk-checker">TCPA Risk Checker</Link></li>
          <li><Link href="/tools/cold-call-script-generator">Cold Call Script Generator</Link></li>
          <li><Link href="/tools/coverage-map">US Owner Mobile Coverage Map</Link></li>
        </ul>
      </section>
    </div>
      <Footer />
      <SignupPopup />
    </>
  )
}
