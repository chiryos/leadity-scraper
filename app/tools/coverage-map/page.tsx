/**
 * /tools/coverage-map — Skeleton (Phase 7)
 *
 * Future: interactive D3 / Mapbox / react-simple-maps US choropleth showing
 * verified-mobile coverage by state. Currently: a static state-by-state
 * coverage table backed by lib/state-directories.ts. Production will hook
 * up to the live coverage DB.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";
import { STATES } from "@/lib/state-directories";

export const metadata: Metadata = {
  title: "US Owner Mobile Coverage Map — Verified Records by State | Leadity",
  description:
    "Interactive map of Leadity's verified owner mobile coverage across all 50 US states and 1,255+ business categories. Track coverage growth over time.",
  alternates: { canonical: "https://leadity.io/tools/coverage-map" },
};

export default function CoverageMapPage() {
  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-5xl">
        <nav className="text-sm text-[var(--color-text-secondary)] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="hover:underline">Tools</Link>
          <span className="mx-2">/</span>
          <span>Coverage map</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          US Owner Mobile{" "}
          <span className="text-brand-gradient">Coverage Map</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Verified owner-direct mobile records across all 50 states, refreshed
          monthly. Filter by category and metro on the live tool — this static
          version shows aggregate state-level inventory.
        </p>

        <div className="mt-10 p-6 border-l-4 border-amber-400 bg-amber-50 rounded-r-2xl text-sm">
          <strong>Phase 7 skeleton.</strong> The interactive choropleth + per-
          metro filtering ships in Phase 7 production. Currently this page
          renders the static state inventory table. The full inventory
          numbers below are approximate (based on US Census business counts
          per state).
        </div>

        <h2 className="text-2xl font-bold mt-12">State-by-state inventory</h2>
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 pr-4">State</th>
                <th className="text-right py-3 pr-4">Estimated businesses</th>
                <th className="text-left py-3">Browse</th>
              </tr>
            </thead>
            <tbody>
              {STATES.map((s) => (
                <tr key={s.slug} className="border-b">
                  <td className="py-3 pr-4">
                    <strong>{s.name}</strong> ({s.abbr})
                  </td>
                  <td className="py-3 pr-4 text-right tabular-nums">
                    {s.business_count.toLocaleString()}
                  </td>
                  <td className="py-3">
                    <Link
                      href={`/directories/${s.slug}`}
                      className="text-[#1B86FF] underline"
                    >
                      Directory
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">
            Get a sample list — 50 mobiles free
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            See the verified-mobile difference firsthand on your target
            state before you spend a dollar.
          </p>
          <div className="mt-6">
            <Link
              href="/pricing"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold"
            >
              Get 50 mobiles free
            </Link>
          </div>
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
