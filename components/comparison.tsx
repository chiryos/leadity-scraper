import * as React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Row =
  | {
      kind: "tier";
      label: string;
      theirs: string;
      ours: string;
    }
  | {
      kind: "feature";
      label: string;
      theirsNote: string;
      oursNote: string;
    };

const rows: Row[] = [
  { kind: "tier", label: "2,000 Owners Mobiles", theirs: "$67 – $211", ours: "$59" },
  { kind: "tier", label: "5,000 Owners Mobiles", theirs: "$133 – $522", ours: "$139" },
  { kind: "tier", label: "10,000 Owners Mobiles", theirs: "$307 – $1,053", ours: "$229" },
  { kind: "feature", label: "All-in-one workflow", theirsNote: "2 tools, 2 bills", oursNote: "Single product" },
  { kind: "feature", label: "Quality filter built in", theirsNote: "Pay for VOIPs", oursNote: "4× stricter" },
  { kind: "feature", label: "Scraping speed", theirsNote: "Rate-limited", oursNote: "2× faster, tunable" },
  { kind: "feature", label: "Bad lead policy", theirsNote: "No safety net", oursNote: "Refund + 50% bonus" },
];

/**
 * Comparison — single liquid-glass card with TWO colored columns painted
 * underneath (dark for Theirs/Outscraper+Clearoutphone, brand blue for
 * Ours/Leadity). A heavy backdrop-blur overlay frosts the colors into
 * soft tinted washes; content (labels, prices, checks) sits crisp above.
 * Floating logo pills stick out above the card for each side.
 */
export function Comparison() {
  // Shared 3-col template (label | theirs | ours). Kept responsive via
  // a min-width on the label column so it doesn't collapse on mobile.
  const gridCols = "minmax(140px, 1.3fr) 1fr 1fr";

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
          <div className="relative mx-auto mt-24 max-w-[1040px] md:mt-28">
            {/* ───── Floating column headers (logos), stick out above card ───── */}
            <div
              className="pointer-events-none absolute inset-x-0 -top-[52px] z-[3] grid px-3 md:-top-[64px]"
              style={{ gridTemplateColumns: gridCols }}
            >
              <div />

              {/* Theirs: two competitor logos */}
              <div className="flex items-end justify-center">
                <div className="flex items-end gap-1.5">
                  <div
                    className="relative h-[58px] w-[58px] overflow-hidden rounded-xl ring-[3px] ring-white md:h-[70px] md:w-[70px]"
                    style={{
                      boxShadow:
                        "0 14px 24px rgba(15,23,42,0.22), 0 4px 8px rgba(15,23,42,0.14)",
                      transform: "rotate(-6deg)",
                    }}
                  >
                    <Image
                      src="/competitors/outscraper.png"
                      alt="Outscraper"
                      fill
                      sizes="70px"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="relative flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-xl bg-white ring-[3px] ring-white md:h-[70px] md:w-[70px]"
                    style={{
                      boxShadow:
                        "0 14px 24px rgba(15,23,42,0.22), 0 4px 8px rgba(15,23,42,0.14)",
                      transform: "rotate(6deg)",
                    }}
                  >
                    <Image
                      src="/competitors/clearoutphone.png"
                      alt="Clearoutphone"
                      width={48}
                      height={48}
                      className="h-[44px] w-[44px] object-contain md:h-[54px] md:w-[54px]"
                    />
                  </div>
                </div>
              </div>

              {/* Ours: Leadity ghost logo */}
              <div className="flex items-end justify-center">
                <div
                  className="relative h-[76px] w-[76px] md:h-[92px] md:w-[92px]"
                  style={{
                    filter:
                      "drop-shadow(0 14px 24px rgba(9,81,255,0.35)) drop-shadow(0 4px 8px rgba(15,23,42,0.18))",
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Leadity"
                    fill
                    sizes="92px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ───── Colored column backgrounds, BEHIND glass ───── */}
            <div
              aria-hidden
              className="absolute inset-0 z-0 grid overflow-hidden rounded-[28px] md:rounded-[32px]"
              style={{ gridTemplateColumns: gridCols }}
            >
              {/* Label column — clean white */}
              <div className="bg-white" />
              {/* Theirs column — deep near-black gradient */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #0b1220 0%, #1a2237 100%)",
                }}
              />
              {/* Ours column — brand blue gradient */}
              <div
                style={{
                  background:
                    "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
                }}
              />
            </div>

            {/* ───── Glass overlay — frosts the colored columns ───── */}
            <div
              aria-hidden
              className="absolute inset-0 z-[1] rounded-[28px] border-[1.5px] border-white/60 md:rounded-[32px]"
              style={{
                backdropFilter: "blur(42px) saturate(180%)",
                WebkitBackdropFilter: "blur(42px) saturate(180%)",
                background: "rgba(255,255,255,0.18)",
                boxShadow: [
                  "inset 0 1px 0 rgba(255,255,255,0.75)",
                  "inset 0 -1px 0 rgba(255,255,255,0.25)",
                  "0 1px 2px rgba(15,23,42,0.04)",
                  "0 24px 48px -16px rgba(15,23,42,0.22)",
                  "0 56px 96px -36px rgba(9,81,255,0.3)",
                ].join(", "),
              }}
            />

            {/* ───── Content grid on top of glass ───── */}
            <div
              className="relative z-[2] grid rounded-[28px] md:rounded-[32px]"
              style={{ gridTemplateColumns: gridCols }}
            >
              {/* Header row */}
              <div className="px-4 pt-8 pb-4 md:px-7 md:pt-10">
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] md:text-[18px]">
                  Compared
                </h3>
              </div>
              <div className="px-4 pt-8 pb-4 text-center md:px-7 md:pt-10">
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-white md:text-[18px]">
                  Theirs
                </h3>
              </div>
              <div className="px-4 pt-8 pb-4 text-center md:px-7 md:pt-10">
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-white md:text-[18px]">
                  Ours
                </h3>
              </div>

              {/* full-width divider */}
              <div className="col-span-3 h-px bg-white/25" />

              {/* Rows */}
              {rows.map((r, i) => {
                const isTier = r.kind === "tier";
                return (
                  <React.Fragment key={r.label}>
                    {/* Label */}
                    <div className="px-4 py-3.5 md:px-7 md:py-4">
                      <span className="text-[12px] font-medium text-[var(--color-text-secondary)] md:text-[14px]">
                        {r.label}
                      </span>
                    </div>

                    {/* Theirs */}
                    <div className="flex items-center justify-center px-4 py-3.5 text-center md:px-7 md:py-4">
                      {isTier ? (
                        <span
                          className="tabular-nums font-semibold text-[#FF8080]"
                          style={{
                            fontSize: "clamp(13px, 1.4vw, 16px)",
                            letterSpacing: "-0.02em",
                            textShadow: "0 0 16px rgba(255,120,120,0.35)",
                          }}
                        >
                          {r.theirs}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2">
                          <span
                            aria-hidden
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25"
                          >
                            <X className="h-3 w-3 text-white/85" strokeWidth={3} />
                          </span>
                          <span className="text-[11px] font-medium text-white/75 md:text-[12.5px]">
                            {r.theirsNote}
                          </span>
                        </span>
                      )}
                    </div>

                    {/* Ours */}
                    <div className="flex items-center justify-center px-4 py-3.5 text-center md:px-7 md:py-4">
                      {isTier ? (
                        <span
                          className="tabular-nums font-semibold text-white"
                          style={{
                            fontSize: "clamp(14px, 1.5vw, 18px)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {r.ours}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2">
                          <span
                            aria-hidden
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white"
                          >
                            <Check className="h-3 w-3 text-[#0951FF]" strokeWidth={3.5} />
                          </span>
                          <span className="text-[11px] font-medium text-white md:text-[12.5px]">
                            {r.oursNote}
                          </span>
                        </span>
                      )}
                    </div>

                    {i < rows.length - 1 ? (
                      <div className="col-span-3 h-px bg-white/25" />
                    ) : null}
                  </React.Fragment>
                );
              })}

              {/* bottom breathing room */}
              <div className="col-span-3 h-6 md:h-8" />
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
