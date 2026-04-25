/**
 * lib/lead-pages.ts — Programmatic /leads/[slug] data layer
 *
 * Phase 6 skeleton. The full strategy (per pack MASTER-PLAN.md):
 *   - Generate ~5,000 pages of {industry} × {metro} combinations
 *   - Each page must have ≥100 real records to be indexed (HCU gate)
 *   - Pages with <100 records: still render but with `noindex`
 *
 * Currently: returns empty array because the production database isn't
 * wired up yet. Once `db.leadPages.findMany()` exists, replace
 * `loadAllLeadPages()` with the real query and `loadLeadPage(slug)` with
 * a single-record fetch.
 *
 * Sitemap consumption: app/sitemap.ts can call loadIndexableLeadPages()
 * to emit the URL inventory (only pages with ≥100 records get a sitemap
 * entry; thin pages stay noindex but still resolve at the URL).
 */

export type LeadPage = {
  slug: string; // e.g. "roofing-contractors-in-dallas"
  industry: string; // e.g. "Roofing contractors"
  industrySlug: string;
  metro: string; // e.g. "Dallas, TX"
  metroSlug: string;
  state: string; // 2-letter
  recordCount: number; // verified mobiles available
  sampleBusinesses: { name: string; rating: number; reviews: number }[];
  updatedAt: string; // ISO date
};

export const MIN_RECORDS_FOR_INDEX = 100;

/**
 * Production: replace with real DB query.
 *   return await db.leadPage.findMany({ orderBy: { updatedAt: 'desc' } })
 */
export async function loadAllLeadPages(): Promise<LeadPage[]> {
  // TODO Phase 6 production: wire up to database.
  return [];
}

export async function loadLeadPage(slug: string): Promise<LeadPage | null> {
  const all = await loadAllLeadPages();
  return all.find((p) => p.slug === slug) ?? null;
}

/**
 * Sitemap-eligible pages: only those with enough records to merit an
 * index. Below the threshold, render the page (so deep links work) but
 * mark it noindex via metadata.
 */
export async function loadIndexableLeadPages(): Promise<LeadPage[]> {
  const all = await loadAllLeadPages();
  return all.filter((p) => p.recordCount >= MIN_RECORDS_FOR_INDEX);
}
