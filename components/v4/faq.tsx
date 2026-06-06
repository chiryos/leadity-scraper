"use client";

/**
 * v4 FAQ — clean accordion.
 * Real factual answers: what a credit is, validation method, expiry,
 * data source, the guarantee, refunds vs replacement, scope, run time.
 * Inline expand (no page-shift below) via grid-template-rows transition.
 */

import * as React from "react";
import { ScrollReveal } from "@/components/v4/scroll-reveal";

const items = [
  {
    q: "What exactly is a credit?",
    a: "1 credit = 1 scraped, carrier-validated mobile lead. You only spend credits on numbers that pass the carrier check. Landlines and VoIP that get filtered out cost you nothing.",
  },
  {
    q: "Do credits expire?",
    a: "No. Buy a pack today, use it next quarter — credits never expire. There's no subscription, no monthly minimum, nothing to cancel.",
  },
  {
    q: "Where do the leads come from?",
    a: "Public Google Maps business listings — owners of US small businesses. We sweep ZIP codes for whichever category and states you pick, then run every match through carrier records before it ships.",
  },
  {
    q: "How is each number validated?",
    a: "Every number is checked against carrier line-type records at the source, before it reaches your CSV. Mobile = kept. Landline / VoIP / disconnected = filtered out automatically.",
  },
  {
    q: "What does the guarantee cover?",
    a: "If a number we delivered as 'mobile' turns out to be a landline, VoIP, or off-niche, we replace it free — and throw in 50% more clean mobiles on top. Verified at the source, replaced automatically, no support ticket.",
  },
  {
    q: "What's in the CSV?",
    a: "Owner, business name, city, phone, carrier, classification. Plug it straight into your dialer or SMS stack — no extra cleanup step.",
  },
  {
    q: "How fast does a run finish?",
    a: "Most runs ship in ~60 seconds. Bigger packs (10,000+) typically complete within a few minutes. You watch the carrier check happen live.",
  },
  {
    q: "Is there a website filter?",
    a: "Optional. Any sites (+0%), only businesses with a website (+25%), or only businesses without a website (+50%) — the premium is applied at scrape time.",
  },
];

export function FaqV4() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative w-full"
      style={{ background: "var(--v4-surface)" }}
    >
      <div className="mx-auto w-full max-w-[820px] px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <div className="text-center">
            <p className="v4-eyebrow">FAQ</p>
            <h2
              className="v4-headline mt-3 text-balance"
              style={{
                fontSize: "clamp(2rem, 3.4vw, 2.6rem)",
                color: "var(--v4-text)",
              }}
            >
              Questions, answered.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 flex flex-col gap-3">
            {items.map((item, i) => {
              const open = openIdx === i;
              return (
                <div
                  key={item.q}
                  className="v4-card overflow-hidden transition-colors"
                  style={
                    open
                      ? {
                          borderColor: "var(--v4-accent)",
                          background: "var(--v4-row-hover)",
                        }
                      : undefined
                  }
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    className="v4-font flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] md:text-[16px] font-medium"
                    style={{ color: "var(--v4-text)" }}
                  >
                    <span>{item.q}</span>
                    <span
                      className="ms-icon transition-transform duration-200"
                      style={{
                        fontSize: 22,
                        color: "var(--v4-accent)",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      aria-hidden
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{
                      gridTemplateRows: open ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="v4-font px-5 pb-5 text-[14px] leading-[1.6]"
                        style={{ color: "var(--v4-text-secondary)" }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
