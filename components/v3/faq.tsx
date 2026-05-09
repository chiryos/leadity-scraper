"use client";

/**
 * v3 FAQ — webild-style. White-box rows with blue + button on the
 * right per item. Click expands inline. Page does NOT shift below
 * because the wrapper has `overflow-hidden` + the whole list reserves
 * a fixed min-height.
 */

import * as React from "react";
import { Plus } from "lucide-react";
import { SectionFrame } from "@/components/v3/section-frame";

const items = [
  {
    q: "Where do the leads come from?",
    a: "We scrape publicly available business data from Google Maps and enrich it with live carrier validation so you only get mobile numbers.",
  },
  {
    q: "Are these really mobile numbers, or just numbers?",
    a: "Every number is checked against live carrier data before delivery. If a VOIP or landline slips through, you're covered by the refund + 50% bonus.",
  },
  {
    q: "How fast will I get my leads?",
    a: "Most orders under 5k Owners Mobiles are delivered the same day. 10k orders typically complete within 24 hours.",
  },
  {
    q: "What format are the leads delivered in?",
    a: "A clean CSV via email, or via webhook on the Scale plan. Columns include name, company, mobile, niche, location, and verified status.",
  },
  {
    q: "Can I pick a specific niche?",
    a: "Yes. Describe the niche in plain English — no SIC codes, no picklists. Examples: 'chiropractors in Miami', 'solar installers in Texas with 10+ employees'.",
  },
  {
    q: "How does the refund + 50% bonus work?",
    a: "If any lead is VOIP, a landline, or outside your niche, we automatically send you a replacement for the bad leads plus 50% of that amount as additional clean Owners Mobiles.",
  },
  {
    q: "Do I need to bring my own tools?",
    a: "No. Leadity replaces the Outscraper + Clearoutphone + spreadsheet workflow with a single product.",
  },
  {
    q: "Is there an affiliate / community price?",
    a: "Yes — members of Aditya's community get a standing discount. Toggle the switch on the pricing section to see it.",
  },
];

export function FaqV3() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <SectionFrame
      id="faq"
      eyebrow="Frequently asked"
      headlineLead="Questions outbound"
      headlineEmphasis="teams actually ask."
      centered
    >
      <div className="mx-auto mt-4 flex max-w-[820px] flex-col gap-3">
        {items.map((item, i) => {
          const open = openIdx === i;
          return (
            <div
              key={item.q}
              className="v3-white-box v3-grad-ring overflow-hidden rounded-[14px]"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(open ? null : i)}
                aria-expanded={open}
                className="v3-font flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] md:text-[16px] font-medium text-[var(--v3-fg)] transition-colors"
              >
                <span>{item.q}</span>
                <span
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] transition-transform duration-200 ${
                    open ? "rotate-45" : ""
                  } v3-btn-blue v3-grad-ring text-white`}
                  style={{ borderRadius: 999 }}
                  aria-hidden
                >
                  <Plus className="h-4 w-4" strokeWidth={2.4} />
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="v3-font px-5 pb-5 text-[14px] leading-relaxed text-[var(--v3-fg)]/70">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionFrame>
  );
}
