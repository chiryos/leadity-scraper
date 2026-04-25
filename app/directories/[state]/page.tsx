/**
 * /directories/[state] — Programmatic state directory page (Phase 6 skeleton)
 *
 * One page per US state. Production: each renders top business categories
 * + sample listings + verified-mobile counts. Currently this skeleton uses
 * the static state metadata in lib/state-directories.ts and a placeholder
 * "wire up DB for record counts" notice.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";
import { STATES, findState } from "@/lib/state-directories";

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await props.params;
  const data = findState(state);
  if (!data) return { title: "Not found", robots: { index: false } };

  return {
    title: `${data.name} Business Directory — Owner Mobiles for ~${data.business_count.toLocaleString()} Local Businesses | Leadity`,
    description: `Owner-direct mobile numbers for ~${data.business_count.toLocaleString()} local businesses in ${data.name}. 1,255+ categories. From $59 flat. TCPA-aware export.`,
    alternates: {
      canonical: `https://leadity.io/directories/${data.slug}`,
    },
  };
}

const TOP_CATEGORIES = [
  { slug: "roofing-contractors", label: "Roofing contractors" },
  { slug: "solar-installers", label: "Solar installers" },
  { slug: "hvac-contractors", label: "HVAC contractors" },
  { slug: "pest-control", label: "Pest control" },
  { slug: "insurance-agents", label: "Insurance agents" },
];

export default async function StateDirectoryPage(props: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await props.params;
  const data = findState(state);
  if (!data) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${data.name} Business Directory — Verified Owner Mobiles`,
        description: `Owner-direct mobile data for ~${data.business_count.toLocaleString()} ${data.name} local businesses.`,
        isPartOf: { "@id": "https://leadity.io/#website" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://leadity.io" },
          { "@type": "ListItem", position: 2, name: "Directories", item: "https://leadity.io/directories" },
          {
            "@type": "ListItem",
            position: 3,
            name: data.name,
            item: `https://leadity.io/directories/${data.slug}`,
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

        <nav className="text-sm text-[var(--color-text-secondary)] mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/directories" className="hover:underline">Directories</Link>
          <span className="mx-2">/</span>
          <span>{data.name}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {data.name} Business Directory
          <br />
          <span className="text-brand-gradient">
            ~{data.business_count.toLocaleString()} Local Businesses
          </span>
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Owner-direct mobile phone numbers for ~
          {data.business_count.toLocaleString()} local businesses in{" "}
          {data.name} ({data.abbr}). 1,255+ categories. Carrier-verified
          mobile-only, TCPA-aware export, flat $59 for 2,000 mobiles.
        </p>

        <h2 className="text-2xl font-bold mt-12">
          Top categories in {data.name}
        </h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {TOP_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/solutions/${c.slug}`}
              className="p-4 border rounded-xl hover:border-[#1B86FF] transition-colors text-base"
            >
              {c.label} in {data.name} →
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12">Compliance notes for {data.name}</h2>
        <p className="mt-4 text-base">
          B2B cold calls into {data.name} businesses are subject to federal
          TCPA + the National DNC Registry. See{" "}
          <Link
            href="/compliance/state-cold-call-laws"
            className="text-[#1B86FF] underline"
          >
            our state-by-state cold call law guide
          </Link>{" "}
          for any additional {data.name}-specific requirements.
        </p>

        <div className="mt-16 p-8 bg-[var(--color-surface)] rounded-2xl text-center">
          <h2 className="text-2xl font-bold">
            Build your {data.name} call list — 50 mobiles free
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            Free tier, no credit card.
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
