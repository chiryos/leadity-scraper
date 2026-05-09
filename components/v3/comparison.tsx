"use client";

/**
 * v3 Comparison — "Real cost per usable mobile" table inside a white-box
 * card. Same data as v2.1 but webild-style chrome.
 */

import * as React from "react";
import Link from "next/link";
import { SectionFrame } from "@/components/v3/section-frame";

type Row = {
  tool: string;
  headline: string;
  coverage: string;
  real: string;
  isUs?: boolean;
};

const rows: Row[] = [
  {
    tool: "Leadity",
    headline: "$59 / 2,000",
    coverage: "84.6%",
    real: "$0.027",
    isUs: true,
  },
  {
    tool: "Outscraper",
    headline: "$3 / 1,000 records",
    coverage: "~8.5%",
    real: "~$0.10",
  },
  {
    tool: "Apify",
    headline: "$2.10 / 1,000 places",
    coverage: "~12%",
    real: "~$0.022 (no TCPA)",
  },
  {
    tool: "Apollo",
    headline: "$99/user/month",
    coverage: "~10%",
    real: "~$0.50–$2+",
  },
  {
    tool: "Pay-per-lead",
    headline: "$55–$300 per lead",
    coverage: "100%",
    real: "$55–$300",
  },
];

export function ComparisonV3() {
  return (
    <SectionFrame
      id="compared"
      eyebrow="Compared"
      headlineLead="Real cost"
      headlineEmphasis="per usable mobile."
      ctaLabel="Read full benchmark"
      ctaHref="/blog/best-google-maps-scrapers-2026"
    >
      <p className="v3-font max-w-[640px] text-[14.5px] md:text-[15.5px] leading-relaxed text-[var(--v3-fg)]/65">
        Headline price isn&rsquo;t what you actually pay. Mobile coverage
        varies wildly between tools — that&rsquo;s the number that determines
        real cost-per-dial.
      </p>

      <div className="v3-white-box v3-grad-ring mt-10 overflow-x-auto rounded-[14px] p-5 md:p-7">
        <table className="w-full text-left v3-font">
          <thead>
            <tr className="text-[12px] uppercase tracking-wide text-[var(--v3-fg)]/45">
              <th className="py-3 pr-4 font-medium">Tool</th>
              <th className="py-3 pr-4 font-medium">Headline price</th>
              <th className="py-3 pr-4 font-medium">Mobile coverage</th>
              <th className="py-3 font-medium">$ / usable mobile</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--v3-fg)]/[0.06]">
            {rows.map((row) => (
              <tr
                key={row.tool}
                className={
                  row.isUs
                    ? "bg-[rgba(77,150,255,0.08)] [&>td:first-child]:rounded-l-lg [&>td:last-child]:rounded-r-lg"
                    : ""
                }
              >
                <td className="py-4 pr-4">
                  <span
                    className={`text-[15px] ${row.isUs ? "font-semibold" : "font-medium"} text-[var(--v3-fg)]`}
                  >
                    {row.tool}
                  </span>
                </td>
                <td className="py-4 pr-4 text-[14px] text-[var(--v3-fg)]/75 tabular-nums">
                  {row.headline}
                </td>
                <td className="py-4 pr-4 text-[14px] text-[var(--v3-fg)]/75 tabular-nums">
                  {row.coverage}
                </td>
                <td className="py-4 text-[14px] tabular-nums">
                  {row.isUs ? (
                    <span className="font-semibold text-[var(--v3-fg)]">
                      {row.real}
                    </span>
                  ) : (
                    <span className="text-[var(--v3-fg)]/75">{row.real}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="v3-font mt-5 text-center text-[12.5px] text-[var(--v3-fg)]/45">
        Pricing snapshot captured from public Outscraper + Clearoutphone +
        Apify rates, April 2026.{" "}
        <Link
          href="/blog/best-google-maps-scrapers-2026"
          className="underline hover:text-[var(--v3-fg)]/80"
        >
          Full 10-tool benchmark →
        </Link>
      </p>
    </SectionFrame>
  );
}
