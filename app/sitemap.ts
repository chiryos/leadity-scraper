import type { MetadataRoute } from 'next'

const BASE = 'https://leadity.io'

/**
 * Production sitemap for Leadity
 *
 * Strategy:
 * - Static priority pages have explicit URLs
 * - Programmatic /leads/[industry]-in-[metro] generates from DB
 * - Each page has priority based on commercial intent + ranking potential
 *
 * Run after every content deploy. Submit to Google Search Console + Bing Webmaster Tools.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // Core marketing pages
  const core: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE}/leadity-reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
  ]

  // Raw-keyword SEO landing pages (soft cornerstone — not in main nav)
  const seoLanding: MetadataRoute.Sitemap = [
    'google-maps-scraper',
    'google-maps-data-extractor',
    'google-maps-phone-number-extractor',
    'google-maps-email-extractor',
    'business-owner-mobile-numbers',
    'local-business-leads',
    'b2b-cold-calling-list',
    'local-businesses-extractor',
    'lead-scraper',
    'owner-mobile-scraper',
  ].map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Alternatives (parasite SEO — captures competitor brand search)
  const alternatives: MetadataRoute.Sitemap = [
    'outscraper',
    'apify',
    'scrap-io',
    'lobstr',
    'phantombuster',
    'octoparse',
    'bright-data',
    'lemlist',
    'clay',
    'instantly',
  ].map((competitor) => ({
    url: `${BASE}/alternatives/${competitor}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Direct comparisons
  const versus: MetadataRoute.Sitemap = [
    'apollo',
    'zoominfo',
    'lusha',
    'seamless-ai',
    'uplead',
    'cognism',
    'hunter',
  ].map((competitor) => ({
    url: `${BASE}/vs/${competitor}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Vertical solutions (the wedge)
  const solutions: MetadataRoute.Sitemap = [
    'roofing-contractors',
    'solar-installers',
    'hvac-contractors',
    'pest-control',
    'insurance-agents',
    'real-estate-agents',
    'med-spas',
    'dentists',
    'restaurants',
    'lawyers',
    'recruiters',
    'saas-sellers',
    'agencies',
    'smma',
    'cold-callers',
  ].map((vertical) => ({
    url: `${BASE}/solutions/${vertical}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Compliance content (TCPA wedge)
  const compliance: MetadataRoute.Sitemap = [
    { url: `${BASE}/compliance`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/compliance/is-scraping-google-maps-legal`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/compliance/tcpa-guide-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/compliance/state-cold-call-laws`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/compliance/dnc-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/compliance/cold-sms-rules`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  // Integration pages (each = high-DR backlink)
  const integrations: MetadataRoute.Sitemap = [
    'zapier',
    'n8n',
    'make',
    'hubspot',
    'pipedrive',
    'close',
    'smartlead',
    'instantly',
    'lemlist',
  ].map((tool) => ({
    url: `${BASE}/integrations/${tool}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // MCP / Developer (forward-positioning)
  const mcp: MetadataRoute.Sitemap = [
    { url: `${BASE}/mcp`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/mcp/google-maps-mcp-server`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/mcp/owner-mobile-mcp-server`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/api`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/api/google-maps-api`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/api/business-mobile-api`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  // Free tools (linkable assets)
  const tools: MetadataRoute.Sitemap = [
    { url: `${BASE}/tools/tcpa-risk-checker`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/tools/cost-per-lead-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/tools/coverage-map`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/tools/cold-call-script-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]

  // Reports (linkable assets, evergreen citations)
  const reports: MetadataRoute.Sitemap = [
    { url: `${BASE}/reports/state-of-local-b2b-lead-gen-2026`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ]

  // Trust / legal
  const trust: MetadataRoute.Sitemap = [
    { url: `${BASE}/security`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  // TODO Phase 2: programmatic pages
  // const programmaticLeads = await db.leadPages.findMany({
  //   where: { recordCount: { gte: 100 } }, // HCU safety: only index pages with ≥100 records
  //   select: { slug: true, updatedAt: true },
  // })
  // const programmatic: MetadataRoute.Sitemap = programmaticLeads.map(page => ({
  //   url: `${BASE}/leads/${page.slug}`,
  //   lastModified: page.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  // TODO Phase 2: state directories
  // const stateDirectories: MetadataRoute.Sitemap = US_STATES.map(state => ({
  //   url: `${BASE}/directories/${state}-business-directory`,
  //   lastModified: now,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.5,
  // }))

  return [
    ...core,
    ...seoLanding,
    ...alternatives,
    ...versus,
    ...solutions,
    ...compliance,
    ...integrations,
    ...mcp,
    ...tools,
    ...reports,
    ...trust,
    // ...programmatic,
    // ...stateDirectories,
  ]
}
