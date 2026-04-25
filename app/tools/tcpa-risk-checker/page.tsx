/**
 * /tools/tcpa-risk-checker — Interactive Free Tool
 *
 * Drop into: app/tools/tcpa-risk-checker/page.tsx
 *
 * The most strategic linkable asset Leadity has. TCPA is a top-of-mind
 * concern for cold-call teams. A free tool that scores any US phone for
 * TCPA risk gets shared organically, embedded in compliance blogs, cited
 * by AI engines, and converts to paid via the upsell CTA.
 *
 * Backend: calls /api/tcpa/check (Server Action) which proxies to:
 * 1. Carrier HLR lookup (line type + carrier)
 * 2. National DNC Registry API (DNC status)
 * 3. State-specific DNC databases (FL, WA, OK)
 *
 * UI strategy: simple input → instant result. No signup wall.
 * Conversion CTA appears AFTER the result, never before.
 */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SignupPopup } from "@/components/signup-popup"

type RiskCheckResult = {
  phone: string
  formatted: string
  lineType: 'Mobile' | 'Landline' | 'VoIP' | 'Unknown'
  carrier: string | null
  isOnNationalDNC: boolean
  isOnStateDNC: { state: string; status: boolean }[]
  riskScore: number // 0-100
  riskLabel: 'Low' | 'Medium' | 'High' | 'Critical'
  recommendations: string[]
}

export default function TCPARiskCheckerPage() {
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<RiskCheckResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault()
    if (!phone) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch('/api/tcpa/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      })

      if (!res.ok) {
        throw new Error('Failed to check TCPA status. Please try again.')
      }

      const data = (await res.json()) as RiskCheckResult
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />
    <div className="max-w-3xl mx-auto px-6 py-20">
      <nav className="text-sm text-[var(--color-text-secondary)] mb-6">
        <Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / <span>TCPA Risk Checker</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight">
        Free TCPA Risk Checker
      </h1>

      <p className="lead text-xl text-[var(--color-text-secondary)] mt-4">
        Check any US phone number&rsquo;s TCPA compliance risk in 5 seconds. Line
        type (mobile / landline / VoIP), carrier, National DNC Registry status,
        and state-specific DNC. Free, no signup.
      </p>

      {/* THE TOOL */}
      <form onSubmit={handleCheck} className="mt-12 p-8 border rounded-2xl bg-[var(--color-surface)]">
        <label htmlFor="phone" className="block font-semibold mb-2">
          US phone number
        </label>
        <div className="flex gap-3">
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 555-5555"
            className="flex-1 px-4 py-3 border rounded-lg text-lg"
            disabled={loading}
            autoComplete="off"
            required
          />
          <button
            type="submit"
            disabled={loading || !phone}
            className="btn-liquid px-6 py-3 text-base"
          >
            {loading ? 'Checking...' : 'Check TCPA risk'}
          </button>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)] mt-3">
          Any US format works: +1 555-555-5555, (555) 555-5555, 5555555555.
          We don&rsquo;t store the numbers you check.
        </p>
      </form>

      {/* ERROR */}
      {error && (
        <div className="mt-6 p-6 border rounded-xl bg-red-50 dark:bg-red-950/20">
          <p className="text-red-800 dark:text-red-300">{error}</p>
        </div>
      )}

      {/* RESULT */}
      {result && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold">Result for {result.formatted}</h2>

          {/* Risk score banner */}
          <div className={`mt-4 p-6 rounded-2xl ${
            result.riskLabel === 'Low' ? 'bg-green-50 dark:bg-green-950/20' :
            result.riskLabel === 'Medium' ? 'bg-yellow-50 dark:bg-yellow-950/20' :
            result.riskLabel === 'High' ? 'bg-orange-50 dark:bg-orange-950/20' :
            'bg-red-50 dark:bg-red-950/20'
          }`}>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold m-0">
                Risk: {result.riskLabel}
              </h3>
              <p className="text-3xl font-bold m-0">{result.riskScore}/100</p>
            </div>
          </div>

          {/* Details */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-6 border rounded-xl">
              <h4 className="font-bold mt-0">Line type</h4>
              <p className="text-2xl font-bold mt-2">{result.lineType}</p>
              {result.carrier && (
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">{result.carrier}</p>
              )}
            </div>

            <div className="p-6 border rounded-xl">
              <h4 className="font-bold mt-0">National DNC Registry</h4>
              <p className="text-2xl font-bold mt-2">
                {result.isOnNationalDNC ? '🚫 Registered' : '✅ Not registered'}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                {result.isOnNationalDNC
                  ? 'Calling this number violates federal TCPA — $500-$1,500 per call.'
                  : 'Federal DNC registry shows this number as not registered.'}
              </p>
            </div>
          </div>

          {/* State DNC */}
          {result.isOnStateDNC.length > 0 && (
            <div className="mt-4 p-6 border rounded-xl">
              <h4 className="font-bold mt-0">State DNC registries</h4>
              <ul className="mt-2 space-y-1">
                {result.isOnStateDNC.map((s) => (
                  <li key={s.state}>
                    {s.status ? '🚫' : '✅'} {s.state}: {s.status ? 'Registered' : 'Not registered'}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <div className="mt-4 p-6 border rounded-xl">
              <h4 className="font-bold mt-0">Recommendations</h4>
              <ul className="mt-2 space-y-2">
                {result.recommendations.map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>
            </div>
          )}

          {/* UPSELL CTA */}
          <div className="mt-12 rounded-2xl bg-[rgba(27,134,255,0.05)] p-8 border border-[#1B86FF]/20">
            <h3 className="text-xl font-bold mt-0">
              Want this for your whole list?
            </h3>
            <p className="mt-2">
              Leadity verifies TCPA status across thousands of numbers in one
              export. Mobile-only filter, DNC pre-scrubbed, line-type tagged
              for every record. Built into our $59 owner-mobile data export.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/pricing" className="btn-liquid">
                Try Leadity free · 50 mobiles
              </Link>
              <Link href="/compliance/tcpa-guide-2026" className="glass-chip">
                Read the TCPA guide
              </Link>
            </div>
          </div>

          {/* Share buttons */}
          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--color-text-secondary)]">Share this tool</p>
            <div className="mt-2 flex gap-2 justify-center">
              <ShareButton platform="twitter" url="https://leadity.io/tools/tcpa-risk-checker" />
              <ShareButton platform="linkedin" url="https://leadity.io/tools/tcpa-risk-checker" />
              <ShareButton platform="copy" url="https://leadity.io/tools/tcpa-risk-checker" />
            </div>
          </div>
        </div>
      )}

      {/* HOW IT WORKS / WHEN TO USE */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold">How this tool works</h2>
        <p className="mt-2">We check three data sources for any US phone number:</p>
        <ul className="mt-4 space-y-2">
          <li><strong>1. Carrier HLR (Home Location Register) lookup</strong> — determines if the number is mobile, landline, or VoIP, and identifies the carrier.</li>
          <li><strong>2. National DNC Registry</strong> — the FTC&rsquo;s federal Do Not Call list. Numbers here are protected from cold calls by federal law.</li>
          <li><strong>3. State-specific DNC databases</strong> — Florida, Washington, Oklahoma, and other states have stricter DNC rules. We check each.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12">When you should use this tool</h2>
        <ul className="mt-4 space-y-2">
          <li>Before adding any number to a cold-call campaign</li>
          <li>When evaluating a vendor&rsquo;s data quality (their numbers should pass our scrub)</li>
          <li>When a recipient claims "I&rsquo;m on the DNC" and you want to verify before refunding</li>
          <li>For TCPA-sensitive verticals (insurance, finance, healthcare)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12">Limitations</h2>
        <ul className="mt-4 space-y-2">
          <li>The National DNC database refreshes weekly — recently registered numbers may not show up for 7 days.</li>
          <li>Internal opt-out (your own DNC list) is not checked. Maintain that separately.</li>
          <li>We don&rsquo;t check international numbers. US-only.</li>
          <li>VoIP numbers may show as "Unknown" if the carrier hasn&rsquo;t reported HLR data.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12">Related compliance content</h2>
        <ul className="mt-4 space-y-1">
          <li>📖 <Link href="/compliance/tcpa-guide-2026">TCPA Compliance Guide 2026</Link></li>
          <li>📖 <Link href="/compliance/state-cold-call-laws">State-by-state cold call laws</Link></li>
          <li>📖 <Link href="/compliance/dnc-guide">National DNC Registry guide</Link></li>
          <li>📖 <Link href="/compliance/cold-sms-rules">Cold SMS rules and 10DLC</Link></li>
          <li>🛠️ <Link href="/tools/cost-per-lead-calculator">Cost-per-lead calculator (free tool)</Link></li>
        </ul>
      </section>
    </div>
      <Footer />
      <SignupPopup />
    </>
  )
}

function ShareButton({ platform, url }: { platform: 'twitter' | 'linkedin' | 'copy'; url: string }) {
  const handleShare = () => {
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent('Free TCPA Risk Checker — score any US phone in 5 seconds')}`)
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
    } else {
      navigator.clipboard.writeText(url)
    }
  }

  const labels = { twitter: 'Twitter', linkedin: 'LinkedIn', copy: 'Copy link' }

  return (
    <button onClick={handleShare} className="glass-chip text-sm">
      {labels[platform]}
    </button>
  )
}

/**
 * Server Action backend example (app/api/tcpa/check/route.ts):
 *
 * export async function POST(request: Request) {
 *   const { phone } = await request.json()
 *   const normalized = normalizeUSPhone(phone)
 *
 *   const [hlr, nationalDnc, stateDnc] = await Promise.all([
 *     hlrLookup(normalized),
 *     checkNationalDNC(normalized),
 *     checkStateDNC(normalized, ['FL', 'WA', 'OK', 'TX']),
 *   ])
 *
 *   const riskScore = calculateRiskScore({ hlr, nationalDnc, stateDnc })
 *
 *   return Response.json({
 *     phone: normalized,
 *     formatted: formatPhone(normalized),
 *     lineType: hlr.lineType,
 *     carrier: hlr.carrier,
 *     isOnNationalDNC: nationalDnc.registered,
 *     isOnStateDNC: stateDnc,
 *     riskScore,
 *     riskLabel: scoreToLabel(riskScore),
 *     recommendations: generateRecommendations({ hlr, nationalDnc, stateDnc }),
 *   })
 * }
 */
