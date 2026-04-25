/**
 * /tools — Free tools hub
 *
 * Linkable assets per pack strategy. Each tool stands alone as a shareable
 * page; this hub aggregates them and gives AI engines a directory to cite.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export const metadata: Metadata = {
  title: "Free Tools for B2B Cold Outreach Teams — Leadity",
  description:
    "Free tools for cold-call and cold-SMS operators: TCPA risk checker, cost-per-lead calculator, US owner mobile coverage map, cold call script generator. No signup required.",
  alternates: { canonical: "https://leadity.io/tools" },
};

const tools = [
  {
    href: "/tools/tcpa-risk-checker",
    title: "TCPA Risk Checker",
    desc: "Paste a number list, get DNC + line-type + state-risk flags. Score: 0-100. Free, no signup.",
    badge: "Most popular",
  },
  {
    href: "/tools/cost-per-lead-calculator",
    title: "Cost-Per-Lead Calculator",
    desc: "Compare pay-per-lead networks vs Leadity flat-list math. Shareable result URL.",
  },
  {
    href: "/tools/coverage-map",
    title: "US Owner Mobile Coverage Map",
    desc: "Interactive map of verified-mobile coverage by state and metro across 1,255+ categories.",
    badge: "New",
  },
  {
    href: "/tools/cold-call-script-generator",
    title: "Cold Call Script Generator",
    desc: "Generate a vertical-specific opening, qualifier, and objection-handler in seconds.",
  },
];

export default function ToolsHub() {
  return (
    <>
      <Nav />
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Free tools for{" "}
          <span className="text-brand-gradient">cold outreach operators</span>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--color-text-secondary)]">
          Working tools for the boring stuff that gates real outreach
          campaigns. No signup. Built and maintained by the Leadity team.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="p-6 border rounded-2xl hover:border-[#1B86FF] transition-colors block"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold">{t.title}</h3>
                {t.badge && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-[rgba(27,134,255,0.1)] text-[#1B86FF]">
                    {t.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {t.desc}
              </p>
              <p className="mt-3 text-sm text-[#1B86FF]">Open tool →</p>
            </Link>
          ))}
        </div>
      </article>
      <Footer />
      <SignupPopup />
    </>
  );
}
