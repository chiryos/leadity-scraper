/**
 * Analytics Setup for Leadity
 *
 * PostHog is recommended (better than GA4 for SaaS):
 * - Free up to 1M events/month
 * - Session replay
 * - Funnel analysis
 * - Feature flags
 * - Self-hostable
 *
 * Install: npm install posthog-js
 *
 * Drop into: lib/analytics.ts
 *
 * Why PostHog over GA4:
 * - GA4 is hostile to product-led growth analytics
 * - PostHog handles signed-in user attribution natively
 * - Event-level filtering is non-negotiable for understanding which pages convert
 *
 * Why not Plausible:
 * - Plausible is great for privacy-first marketing analytics
 * - But lacks event-level attribution needed for measuring SEO → conversion
 * - Run Plausible alongside PostHog if you want both perspectives
 */

import posthog from 'posthog-js'

// =============================================================================
// INITIALIZATION (call from app/providers.tsx or layout.tsx)
// =============================================================================

export function initAnalytics() {
  if (typeof window === 'undefined') return
  if (process.env.NODE_ENV !== 'production') return

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.posthog.com',
    person_profiles: 'identified_only', // Only create profiles after signup (privacy)
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    session_recording: {
      maskAllInputs: true, // Don't capture form inputs
      maskInputOptions: {
        password: true,
        email: false, // OK to capture emails (we need them for support)
      },
    },
    // GDPR / CCPA compliance
    respect_dnt: true,
    opt_out_capturing_by_default: false,
  })
}

// =============================================================================
// EVENT SCHEMA — every critical event Leadity needs to measure
// =============================================================================

export const events = {
  // FUNNEL: Awareness → Consideration → Conversion
  // Page views are auto-tracked by PostHog

  // Signup funnel
  signupStarted: (source: string) => track('signup_started', { source }),
  signupCompleted: (userId: string, plan: 'free' | 'starter' | 'pro' | 'scale') =>
    track('signup_completed', { plan, userId }),

  // Pricing page interactions
  pricingViewed: (referrer: string) => track('pricing_viewed', { referrer }),
  pricingPlanClicked: (plan: 'free' | 'starter' | 'pro' | 'scale') =>
    track('pricing_plan_clicked', { plan }),
  pricingComparisonClicked: (competitor: string) =>
    track('pricing_comparison_clicked', { competitor }),

  // Comparison page interactions
  comparisonViewed: (competitor: string, page_type: 'alternatives' | 'vs') =>
    track('comparison_viewed', { competitor, page_type }),
  comparisonCtaClicked: (competitor: string, cta_type: 'primary' | 'secondary') =>
    track('comparison_cta_clicked', { competitor, cta_type }),
  comparisonExternalClicked: (competitor: string) =>
    track('comparison_external_clicked', { competitor }),

  // Vertical solution page interactions
  solutionViewed: (vertical: string) => track('solution_viewed', { vertical }),
  solutionCtaClicked: (vertical: string) => track('solution_cta_clicked', { vertical }),
  solutionCostMathViewed: (vertical: string) =>
    track('solution_cost_math_viewed', { vertical }),

  // Compliance content (lead-quality signal)
  complianceViewed: (topic: string) => track('compliance_viewed', { topic }),
  complianceFAQExpanded: (topic: string, question: string) =>
    track('compliance_faq_expanded', { topic, question }),

  // Free tools (lead-magnets)
  toolViewed: (tool: 'tcpa_risk_checker' | 'cpl_calculator' | 'coverage_map' | 'cold_call_script') =>
    track('tool_viewed', { tool }),
  toolUsed: (tool: string, inputs: Record<string, any>) =>
    track('tool_used', { tool, ...inputs }),
  toolResultShared: (tool: string, share_method: 'link' | 'twitter' | 'linkedin') =>
    track('tool_result_shared', { tool, share_method }),

  // Search / discovery
  searchPerformed: (query: string, results_count: number) =>
    track('search_performed', { query, results_count }),

  // Product usage (after signup)
  scrapeStarted: (industry: string, metro: string | undefined, count: number) =>
    track('scrape_started', { industry, metro, count }),
  scrapeCompleted: (industry: string, recordsReturned: number, mobileRate: number) =>
    track('scrape_completed', { industry, recordsReturned, mobileRate }),
  exportPerformed: (format: 'csv' | 'sheets' | 'hubspot' | 'pipedrive' | 'close' | 'smartlead') =>
    track('export_performed', { format }),

  // Purchases
  checkoutStarted: (plan: 'starter' | 'pro' | 'scale', amount: number) =>
    track('checkout_started', { plan, amount }),
  purchaseCompleted: (plan: string, amount: number, currency: string) => {
    track('purchase_completed', { plan, amount, currency })
    // Also track to revenue specifically
    posthog.capture('$set', { $set: { plan, total_revenue: amount } })
  },

  // Refunds
  refundRequested: (reason: string) => track('refund_requested', { reason }),
  refundApproved: (recordCount: number, amount: number) =>
    track('refund_approved', { recordCount, amount }),

  // Support
  supportContactStarted: (topic: string) => track('support_contact_started', { topic }),

  // MCP server adoption
  mcpInstallationStarted: () => track('mcp_installation_started'),
  mcpToolCalled: (tool: string, success: boolean) => track('mcp_tool_called', { tool, success }),

  // Social proof
  testimonialClicked: (author: string) => track('testimonial_clicked', { author }),
  reviewSiteClicked: (site: 'g2' | 'capterra' | 'trustpilot' | 'product_hunt') =>
    track('review_site_clicked', { site }),

  // Outbound link tracking (where do users go from Leadity?)
  outboundClicked: (destination: string, context: string) =>
    track('outbound_clicked', { destination, context }),
}

// =============================================================================
// HELPER
// =============================================================================

function track(event: string, properties: Record<string, any> = {}) {
  if (typeof window === 'undefined') return
  if (process.env.NODE_ENV !== 'production') {
    console.log('[analytics:dev]', event, properties)
    return
  }
  posthog.capture(event, properties)
}

// =============================================================================
// USER IDENTIFICATION (call after signup/login)
// =============================================================================

export function identifyUser(userId: string, traits: {
  email: string
  plan?: string
  signupDate?: string
  vertical?: string
  companyName?: string
}) {
  if (typeof window === 'undefined') return
  posthog.identify(userId, traits)
}

export function resetUser() {
  if (typeof window === 'undefined') return
  posthog.reset()
}

// =============================================================================
// FUNNEL DEFINITIONS (configure these in PostHog UI)
// =============================================================================

/**
 * CRITICAL FUNNELS to set up in PostHog:
 *
 * 1. Acquisition → Signup
 *    - $pageview on /
 *    - $pageview on /pricing OR /alternatives/* OR /solutions/*
 *    - signup_started
 *    - signup_completed
 *
 * 2. Free → Paid
 *    - signup_completed (plan: free)
 *    - scrape_started
 *    - scrape_completed
 *    - checkout_started
 *    - purchase_completed
 *
 * 3. Comparison page → Conversion
 *    - $pageview on /alternatives/outscraper
 *    - comparison_cta_clicked
 *    - signup_completed
 *
 * 4. Vertical solution → Conversion
 *    - $pageview on /solutions/[vertical]
 *    - solution_cta_clicked
 *    - signup_completed
 *
 * 5. Tool → Signup (tools as lead magnets)
 *    - $pageview on /tools/*
 *    - tool_used
 *    - signup_completed (within 30 days)
 */

// =============================================================================
// COHORT DEFINITIONS (configure in PostHog)
// =============================================================================

/**
 * Key cohorts to track:
 *
 * - "Outscraper switchers" — users who came from /alternatives/outscraper page
 * - "Vertical-specific buyers" — bucketed by which /solutions/* they viewed
 * - "Compliance-conscious" — users who viewed compliance content before signup
 * - "Tool users" — users who used a free tool before signup
 * - "MCP adopters" — users who installed the MCP server
 */

// =============================================================================
// USAGE EXAMPLE (in your components)
// =============================================================================

/*
// app/pricing/page.tsx
'use client'

export default function PricingPage() {
  useEffect(() => {
    events.pricingViewed(document.referrer)
  }, [])

  return (
    <div>
      <button onClick={() => {
        events.pricingPlanClicked('starter')
        // continue to checkout
      }}>
        Get 2,000 mobiles
      </button>
    </div>
  )
}
*/
