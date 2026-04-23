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

// Tab extension height — how far the colored columns stick ABOVE the card top.
const TAB_HEIGHT = 96;

/**
 * Comparison — one liquid-glass card with two colored vertical tabs
 * behind it. The tabs are FULL-HEIGHT columns with arched rounded tops
 * that extend above the card by TAB_HEIGHT px. The card's backdrop-blur
 * frosts the portion of the columns that lives inside the card, while
 * the tab tops (above the card) stay solid and carry the logos.
 *
 * Layout mirrors the provided reference: big COMPARED title on the
 * left, label rows beneath; two columns on the right (dark for the
 * Outscraper+Clearoutphone stack, brand blue for Leadity) holding text
 * values per row.
 */
export function Comparison() {
  // Shared 3-col template — used for both the coloured columns behind
  // AND the content grid on top, so they align perfectly.
  const gridCols = "minmax(180px, 1.5fr) 1fr 1fr";

  return (
    <section className="section-py relative overflow-hidden">
      <div className="relative container-page">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-eyebrow">Compared</p>
            <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
              <span className="block">One tool or</span>
              <span className="block text-brand-gradient">three bills.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto max-w-[1040px]"
            style={{ marginTop: `${TAB_HEIGHT + 40}px` }}
          >
            {/* ───── Colored column TABS ─────
                Absolute-positioned behind everything. Extend from
                -TAB_HEIGHT (above card) to bottom of card. Rounded tops
                form the arches that stick up above the card. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0"
              style={{ top: `-${TAB_HEIGHT}px` }}
            >
              <div
                className="grid h-full"
                style={{ gridTemplateColumns: gridCols }}
              >
                <div />
                {/* Theirs — near-black gradient */}
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #0a0f1c 0%, #1d2437 100%)",
                    borderRadius: "84px 84px 0 0",
                  }}
                />
                {/* Ours — brand blue gradient */}
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
                    borderRadius: "84px 84px 0 0",
                  }}
                />
              </div>
            </div>

            {/* ───── Glass card overlay ─────
                Sits ON TOP of the colored columns within the card area.
                backdrop-filter frosts the columns behind it into soft
                tinted washes. Tab portions ABOVE the card stay solid. */}
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

            {/* ───── Floating logos on the tab tops ─────
                Positioned above the card, centered within each column. */}
            <div
              className="pointer-events-none absolute inset-x-0 z-[3] grid"
              style={{
                top: `-${TAB_HEIGHT - 14}px`,
                gridTemplateColumns: gridCols,
              }}
            >
              <div />
              {/* Theirs — overlap of Outscraper + Clearoutphone */}
              <div className="flex items-start justify-center">
                <div className="flex items-end gap-1.5">
                  <div
                    className="relative h-[58px] w-[58px] overflow-hidden rounded-[14px] ring-[3px] ring-white md:h-[66px] md:w-[66px]"
                    style={{
                      boxShadow:
                        "0 16px 28px rgba(0,0,0,0.35), 0 4px 10px rgba(0,0,0,0.2)",
                      transform: "rotate(-6deg)",
                    }}
                  >
                    <Image
                      src="/competitors/outscraper.png"
                      alt="Outscraper"
                      fill
                      sizes="66px"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="relative flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-[14px] bg-white ring-[3px] ring-white md:h-[66px] md:w-[66px]"
                    style={{
                      boxShadow:
                        "0 16px 28px rgba(0,0,0,0.35), 0 4px 10px rgba(0,0,0,0.2)",
                      transform: "rotate(6deg)",
                    }}
                  >
                    <Image
                      src="/competitors/clearoutphone.png"
                      alt="Clearoutphone"
                      width={52}
                      height={52}
                      className="h-[44px] w-[44px] object-contain md:h-[50px] md:w-[50px]"
                    />
                  </div>
                </div>
              </div>
              {/* Ours — Leadity white ghost */}
              <div className="flex items-start justify-center">
                <div
                  className="relative h-[62px] w-[62px] md:h-[70px] md:w-[70px]"
                  style={{
                    filter:
                      "drop-shadow(0 16px 28px rgba(9,81,255,0.45)) drop-shadow(0 4px 10px rgba(9,81,255,0.3))",
                  }}
                >
                  <Image
                    src="/logo-white.png"
                    alt="Leadity"
                    fill
                    sizes="70px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ───── Content grid on top of glass ───── */}
            <div
              className="relative z-[2] grid"
              style={{ gridTemplateColumns: gridCols }}
            >
              {/* HEADER ROW */}
              {/* Left: big COMPARED title. Spans 2 rows so the title sits
                  tall on the left while the Theirs/Ours headers + their
                  "under-logo" text row live to the right. */}
              <div
                className="flex flex-col justify-start px-6 pt-10 pb-2 md:px-10 md:pt-14"
                style={{ gridColumn: "1", gridRow: "1 / span 2" }}
              >
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
                <p className="mt-4 max-w-[320px] text-[13px] leading-[1.55] text-[var(--color-text-secondary)] md:text-[14px]">
                  Same niche, same geo, same volume. What a real outbound
                  stack costs vs. what Leadity costs.
                </p>
              </div>

              {/* Theirs header */}
              <div className="flex flex-col items-center px-4 pt-10 pb-2 text-center md:px-6 md:pt-14">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white md:text-[19px]">
                  Theirs
                </h3>
                <p className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/60 md:text-[11px]">
                  Outscraper + Clearoutphone
                </p>
              </div>

              {/* Ours header */}
              <div className="flex flex-col items-center px-4 pt-10 pb-2 text-center md:px-6 md:pt-14">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white md:text-[19px]">
                  Ours
                </h3>
                <p className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/85 md:text-[11px]">
                  Leadity
                </p>
              </div>

              {/* Row 2 spacer on the right side to keep grid clean */}
              <div />
              <div />

              {/* full-width divider before data rows */}
              <div className="col-span-3 mx-6 my-3 h-px bg-white/30 md:mx-10" />

              {/* Data rows */}
              {rows.map((r, i) => {
                const isTier = i < 3;
                const isLastTier = i === 2;
                return (
                  <React.Fragment key={r.label}>
                    <div className="flex items-center px-6 py-3.5 md:px-10 md:py-4">
                      <span className="text-[13px] font-medium text-[var(--color-text-primary)] md:text-[14.5px]">
                        {r.label}
                      </span>
                    </div>
                    <div className="flex items-center justify-center px-4 py-3.5 text-center md:px-6 md:py-4">
                      <span
                        className={
                          "tabular-nums font-semibold " +
                          (isTier ? "text-[#FF8B8B]" : "text-white/80 font-medium")
                        }
                        style={
                          isTier
                            ? {
                                fontSize: "clamp(14px, 1.5vw, 17px)",
                                letterSpacing: "-0.02em",
                                textShadow: "0 0 18px rgba(255,130,130,0.35)",
                              }
                            : { fontSize: "clamp(12px, 1.25vw, 14px)" }
                        }
                      >
                        {r.theirs}
                      </span>
                    </div>
                    <div className="flex items-center justify-center px-4 py-3.5 text-center md:px-6 md:py-4">
                      <span
                        className={
                          "tabular-nums font-semibold text-white " +
                          (!isTier ? "font-medium" : "")
                        }
                        style={
                          isTier
                            ? {
                                fontSize: "clamp(15px, 1.7vw, 19px)",
                                letterSpacing: "-0.02em",
                              }
                            : { fontSize: "clamp(12px, 1.3vw, 14.5px)" }
                        }
                      >
                        {r.ours}
                      </span>
                    </div>
                    {/* Divider between rows — slightly stronger after the
                        tier block to separate prices from features */}
                    {i < rows.length - 1 ? (
                      <div
                        className={
                          "col-span-3 mx-6 h-px md:mx-10 " +
                          (isLastTier ? "my-2 bg-white/35" : "bg-white/22")
                        }
                      />
                    ) : null}
                  </React.Fragment>
                );
              })}

              {/* bottom breathing room */}
              <div className="col-span-3 h-8 md:h-12" />
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
