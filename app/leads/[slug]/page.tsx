/**
 * /leads/[slug] — Programmatic industry × metro page (Phase 6 skeleton)
 *
 * Each slug is "{industry-slug}-in-{metro-slug}" e.g. "roofing-contractors-in-dallas".
 * Production: ~5,000 such pages backed by real DB records.
 *
 * Indexability: only pages with ≥100 records get full schema + indexable
 * metadata. Below that threshold the page renders (deep links work) but
 * is marked `noindex` to avoid HCU penalties for thin programmatic content.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";
import {
  loadAllLeadPages,
  loadLeadPage,
  MIN_RECORDS_FOR_INDEX,
} from "@/lib/lead-pages";

export async function generateStaticParams() {
  // Pre-render every page that exists in the DB at build time
  const pages = await loadAllLeadPages();
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const page = await loadLeadPage(slug);
  if (!page) return { title: "Not found", robots: { index: false, follow: false } };

  const indexable = page.recordCount >= MIN_RECORDS_FOR_INDEX;
  return {
    title: `${page.industry} in ${page.metro} — ${page.recordCount.toLocaleString()} Verified Owner Mobiles | Leadity`,
    description: `${page.recordCount.toLocaleString()} verified owner-direct mobile numbers for ${page.industry.toLowerCase()} in ${page.metro}. TCPA-aware export, mobile-only filter, from $59 flat.`,
    alternates: { canonical: `https://leadity.io/leads/${page.slug}` },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function LeadProgrammaticPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const page = await loadLeadPage(slug);
  if (!page) notFound();

  const indexable = page.recordCount >= MIN_RECORDS_FOR_INDEX;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: `${page.industry} in ${page.metro}`,
        numberOfItems: page.recordCount,
        itemListElement: page.sampleBusinesses.slice(0, 10).map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://leadity.io" },
          { "@type": "ListItem", position: 2, name: "Leads", item: "https://leadity.io/leads" },
          {
            "@type": "ListItem",
            position: 3,
            name: `${page.industry} in ${page.metro}`,
            item: `https://leadity.io/leads/${page.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {!indexable && (
          <div className="mb-8 p-4 border border-amber-300 bg-amber-50 rounded-lg text-sm">
            <strong>Limited inventory.</strong> Only {page.recordCount} verified
            mobiles currently available for this segment. Page is not indexed.
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {page.industry} in {page.metro}
          <br />
          <span className="text-brand-gradient">
            {page.recordCount.toLocaleString()} Verified Owner Mobiles
          </span>
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Owner-direct mobile phone numbers for {page.industry.toLowerCase()}{" "}
          located in {page.metro}. Mobile-only carrier-verified, TCPA-aware
          export. {page.recordCount.toLocaleString()} records as of last
          refresh.
        </p>

        <h2 className="text-2xl font-bold mt-12">Sample businesses in this segment</h2>
        <ul className="mt-4 space-y-2 text-base">
          {page.sampleBusinesses.slice(0, 10).map((b) => (
            <li key={b.name} className="border-b py-2">
              {b.name} — {b.rating} ({b.reviews} reviews)
            </li>
          ))}
        </ul>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">
            Get all {page.recordCount.toLocaleString()} mobiles for $59
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            Flat pricing. No credits. Free tier: 50 mobiles, no card.
          </p>
          <div className="mt-6">
            <Link
              href="/pricing"
              className="btn-liquid inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold"
            >
              Get this list
            </Link>
          </div>
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
