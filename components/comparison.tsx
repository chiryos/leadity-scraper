import * as React from "react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

type Row = {
  label: string;
  theirs: string;
  ours: string;
};

const rows: Row[] = [
  { label: "2,000 Owners Mobiles", theirs: "$67 – $211", ours: "$59" },
  { label: "5,000 Owners Mobiles", theirs: "$133 – $522", ours: "$139" },
  { label: "10,000 Owners Mobiles", theirs: "$307 – $1,053", ours: "$229" },
  { label: "All-in-one workflow", theirs: "2 tools, 2 bills", ours: "Single product" },
  { label: "Quality filter built in", theirs: "Pay for VOIPs", ours: "4× stricter" },
  { label: "Scraping speed", theirs: "Rate-limited", ours: "2× faster" },
  { label: "Bad lead policy", theirs: "No safety net", ours: "Refund + 50% bonus" },
];

// Tab extension height — how far the colored columns stick ABOVE the card.
const TAB_HEIGHT = 96;

/**
 * 5-column grid: [label · theirs · gap · ours · right-spacer]
 * The two colored columns are NARROW (138px) with a small visible gap
 * between them, and there's empty frosted space on the right edge of
 * the card — matching the reference mock.
 */
const GRID_COLS = "minmax(200px, 1fr) 138px 14px 138px 104px";

export function Comparison() {
  return (
    <section className="section-py relative overflow-hidden">
      <div className="relative container-page">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-eyebrow">Compared</p>
            <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
              <span className="block">Three bills or</span>
              <span className="block text-brand-gradient">One Tool?</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto max-w-[1040px]"
            style={{ marginTop: `${TAB_HEIGHT + 40}px` }}
          >
            {/* ───── Colored column TABS (behind glass) ─────
                5-col grid matches content grid so tabs sit exactly under
                their columns. Cols 1, 3, 5 are empty (no color). Cols 2
                and 4 are the narrow colored tabs with arched tops. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0"
              style={{ top: `-${TAB_HEIGHT}px` }}
            >
              <div
                className="grid h-full"
                style={{ gridTemplateColumns: GRID_COLS }}
              >
                <div />
                {/* Theirs — near-black */}
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #0a0f1c 0%, #1d2437 100%)",
                    borderRadius: "72px 72px 0 0",
                  }}
                />
                <div />
                {/* Ours — brand blue */}
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
                    borderRadius: "72px 72px 0 0",
                  }}
                />
                <div />
              </div>
            </div>

            {/* ───── Glass card overlay ───── */}
            <div
              aria-hidden
              className="absolute inset-0 z-[1] rounded-[32px] border-[1.5px] border-white/55"
              style={{
                backdropFilter: "blur(40px) saturate(180%)",
                WebkitBackdropFilter: "blur(40px) saturate(180%)",
                background: "rgba(255,255,255,0.12)",
                boxShadow: [
                  "inset 0 1px 0 rgba(255,255,255,0.6)",
                  "inset 0 -1px 0 rgba(255,255,255,0.22)",
                  "0 1px 2px rgba(15,23,42,0.06)",
                  "0 24px 48px -16px rgba(15,23,42,0.22)",
                  "0 56px 96px -36px rgba(9,81,255,0.28)",
                ].join(", "),
              }}
            />

            {/* ───── Floating logos on tab tops ───── */}
            <div
              className="pointer-events-none absolute inset-x-0 z-[3] grid"
              style={{
                top: `-${TAB_HEIGHT - 14}px`,
                gridTemplateColumns: GRID_COLS,
              }}
            >
              <div />
              {/* Theirs — Outscraper + Clearoutphone */}
              <div className="flex items-start justify-center">
                <div className="flex items-end gap-1.5">
                  <div
                    className="relative h-[54px] w-[54px] overflow-hidden rounded-[12px] ring-[2.5px] ring-white md:h-[60px] md:w-[60px]"
                    style={{
                      boxShadow:
                        "0 14px 24px rgba(0,0,0,0.35), 0 4px 10px rgba(0,0,0,0.22)",
                      transform: "rotate(-6deg)",
                    }}
                  >
                    <Image
                      src="/competitors/outscraper.png"
                      alt="Outscraper"
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="relative flex h-[54px] w-[54px] items-center justify-center overflow-hidden rounded-[12px] bg-white ring-[2.5px] ring-white md:h-[60px] md:w-[60px]"
                    style={{
                      boxShadow:
                        "0 14px 24px rgba(0,0,0,0.35), 0 4px 10px rgba(0,0,0,0.22)",
                      transform: "rotate(6deg)",
                    }}
                  >
                    <Image
                      src="/competitors/clearoutphone.png"
                      alt="Clearoutphone"
                      width={46}
                      height={46}
                      className="h-[40px] w-[40px] object-contain md:h-[44px] md:w-[44px]"
                    />
                  </div>
                </div>
              </div>
              <div />
              {/* Ours — Leadity white ghost */}
              <div className="flex items-start justify-center">
                <div
                  className="relative h-[58px] w-[58px] md:h-[66px] md:w-[66px]"
                  style={{
                    filter:
                      "drop-shadow(0 16px 26px rgba(9,81,255,0.45)) drop-shadow(0 4px 10px rgba(9,81,255,0.3))",
                  }}
                >
                  <Image
                    src="/logo-white.png"
                    alt="Leadity"
                    fill
                    sizes="66px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div />
            </div>

            {/* ───── Content grid ───── */}
            <div
              className="relative z-[2] grid"
              style={{ gridTemplateColumns: GRID_COLS }}
            >
              {/* Row 1 — COMPARED title + top clearance for logos on right cols */}
              <div className="px-6 pt-10 pb-4 md:px-10 md:pt-14 md:pb-6">
                <h3
                  className="font-black uppercase text-[var(--color-text-primary)]"
                  style={{
                    fontSize: "clamp(34px, 5.2vw, 60px)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Compared
                </h3>
              </div>
              {/* Right cols in row 1: empty spacers that still reserve
                  the top padding so the row height matches COMPARED's. */}
              <div className="pt-10 md:pt-14" />
              <div />
              <div className="pt-10 md:pt-14" />
              <div />

              {/* full-width divider */}
              <div className="col-span-5 mx-6 mb-2 h-px bg-white/30 md:mx-10" />

              {/* Data rows */}
              {rows.map((r, i) => {
                const isTier = i < 3;
                const isLastTier = i === 2;
                return (
                  <React.Fragment key={r.label}>
                    {/* Label */}
                    <div className="flex items-center px-6 py-3.5 md:px-10 md:py-4">
                      <span className="text-[13px] font-medium text-[var(--color-text-primary)] md:text-[14.5px]">
                        {r.label}
                      </span>
                    </div>
                    {/* Theirs */}
                    <div className="flex items-center justify-center px-2 py-3.5 text-center md:py-4">
                      <span
                        className={
                          "tabular-nums " +
                          (isTier
                            ? "font-semibold text-[#FF8B8B]"
                            : "font-medium text-white/80")
                        }
                        style={
                          isTier
                            ? {
                                fontSize: "clamp(13px, 1.4vw, 16px)",
                                letterSpacing: "-0.02em",
                                textShadow: "0 0 18px rgba(255,130,130,0.35)",
                              }
                            : { fontSize: "clamp(11px, 1.15vw, 13px)" }
                        }
                      >
                        {r.theirs}
                      </span>
                    </div>
                    {/* gap between columns — empty cell */}
                    <div />
                    {/* Ours */}
                    <div className="flex items-center justify-center px-2 py-3.5 text-center md:py-4">
                      <span
                        className={
                          "tabular-nums text-white " +
                          (isTier ? "font-semibold" : "font-medium")
                        }
                        style={
                          isTier
                            ? {
                                fontSize: "clamp(14px, 1.6vw, 18px)",
                                letterSpacing: "-0.02em",
                              }
                            : { fontSize: "clamp(11px, 1.2vw, 13.5px)" }
                        }
                      >
                        {r.ours}
                      </span>
                    </div>
                    {/* right spacer */}
                    <div />
                    {/* divider between rows */}
                    {i < rows.length - 1 ? (
                      <div
                        className={
                          "col-span-5 mx-6 h-px md:mx-10 " +
                          (isLastTier ? "my-2 bg-white/35" : "bg-white/22")
                        }
                      />
                    ) : null}
                  </React.Fragment>
                );
              })}

              {/* bottom breathing room */}
              <div className="col-span-5 h-8 md:h-12" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[720px] mx-auto text-center text-[13px] text-[var(--color-text-muted)]">
            Pricing snapshot captured from public Outscraper + Clearoutphone
            rates. Your actual mileage may vary - ours won&apos;t.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
