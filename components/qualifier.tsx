"use client";

import { Check, Minus } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * "Who it's for" qualifier section — honest two-column fit check.
 *
 * Copy: 4 items per side, same length, parallel "you …" structure so the
 * eye can sweep them in one read. Each list item is a short clause that
 * completes the column's "… if you" header.
 *
 * Design: divider-separated rows (no per-item pills) so the card reads
 * like a premium spec sheet. The positive column keeps its gradient ring
 * to signal it's the preferred side.
 */

type Item = { lead: string; body: string };

// Each column covers a DIFFERENT axis of buyer fit (audience, data scope,
// geography, usage pattern on the left; role, use-case, volume, delivery
// on the right) so the two sides are genuinely distinct qualifiers and
// not inverse-phrasings of each other.
const notFor: Item[] = [
  {
    lead: "Sell to consumers.",
    body: "We carry business-owner mobiles only — no D2C or residential lists.",
  },
  {
    lead: "Need emails, not phones.",
    body: "We don't enrich emails, firmographics, or LinkedIn data. Just mobiles.",
  },
  {
    lead: "Live outside the US.",
    body: "Coverage is US-only — 32,741 ZIPs. No EU, UK, Canada, or APAC data.",
  },
  {
    lead: "Want a one-off batch.",
    body: "We're built for recurring scrapes, not a single export-and-done job.",
  },
];

const isFor: Item[] = [
  {
    lead: "Run a lead-gen agency.",
    body: "Multi-client, multi-niche campaigns delivered as clean CSVs every month.",
  },
  {
    lead: "Text business owners direct.",
    body: "Roofers, dentists, HVAC, solar — owner mobiles, not front-desk lines.",
  },
  {
    lead: "Need production volume.",
    body: "5k+ verified mobiles a month without rate-limits, retries, or queues.",
  },
  {
    lead: "Live inside a dialer.",
    body: "CSV or webhook delivery that drops straight into your SMS stack.",
  },
];

export function Qualifier() {
  return (
    <section className="section-py relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-eyebrow">Honest fit check</p>
            <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
              <span className="block">Is this</span>
              <span className="block text-brand-gradient">for you?</span>
            </h2>
            <p className="mt-5 max-w-[640px] mx-auto text-balance text-[18px] leading-[1.55] text-[var(--color-text-secondary)]">
              We&apos;re not for everyone - and that&apos;s on purpose. If
              you&apos;re running cold SMS or cold-call outbound at any real
              volume, you&apos;re probably in the right room.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* ───────── NOT card ───────── */}
          <Reveal delay={0.05} className="h-full">
            <article className="flex h-full flex-col rounded-[20px] border border-[var(--color-border)] bg-white p-8 md:p-10">
              <header className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE6E8] text-[#C4314B]"
                >
                  <Minus className="h-5 w-5" strokeWidth={3} />
                </span>
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] md:text-[22px]">
                  Not for you if you
                  <span className="text-[var(--color-text-muted)]">…</span>
                </h3>
              </header>
              <StaggerGroup as="ul" className="mt-6 flex flex-col">
                {notFor.map((it, i) => (
                  <StaggerItem
                    as="li"
                    key={it.lead}
                    className={cn(
                      "flex items-start gap-4 py-5",
                      i > 0 && "border-t border-[var(--color-border)]",
                    )}
                  >
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFECEE] text-[#C4314B]"
                    >
                      <Minus className="h-3.5 w-3.5" strokeWidth={3.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold tracking-[-0.01em] text-[var(--color-text-primary)] text-[17px] md:text-[19px]">
                        {it.lead}
                      </div>
                      <div className="mt-1 text-[14px] leading-[1.55] text-[var(--color-text-secondary)] md:text-[15px]">
                        {it.body}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </article>
          </Reveal>

          {/* ───────── IS card (gradient-ring wrapper for emphasis) ───────── */}
          <Reveal delay={0.12} className="h-full">
            <div
              className="h-full rounded-[20px] p-px shadow-[0_22px_50px_-22px_rgba(27,134,255,0.45)]"
              style={{
                background:
                  "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
              }}
            >
              <article className="relative flex h-full flex-col rounded-[19px] bg-white p-8 md:p-10">
                <header className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                    style={{
                      background:
                        "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
                    }}
                  >
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </span>
                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] md:text-[22px]">
                    Made for you if you
                    <span className="text-[var(--color-text-muted)]">…</span>
                  </h3>
                </header>
                <StaggerGroup as="ul" className="mt-6 flex flex-col">
                  {isFor.map((it, i) => (
                    <StaggerItem
                      as="li"
                      key={it.lead}
                      className={cn(
                        "flex items-start gap-4 py-5",
                        i > 0 && "border-t border-[var(--color-border)]",
                      )}
                    >
                      <span
                        aria-hidden
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                        style={{
                          background:
                            "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
                        }}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold tracking-[-0.01em] text-[var(--color-text-primary)] text-[17px] md:text-[19px]">
                          {it.lead}
                        </div>
                        <div className="mt-1 text-[14px] leading-[1.55] text-[var(--color-text-secondary)] md:text-[15px]">
                          {it.body}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
