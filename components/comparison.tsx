"use client";

import * as React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const GROW_EASE = [0.22, 1, 0.36, 1] as const;

type Row = {
  label: string;
  // For tier rows we show the prices as text strings; for feature rows
  // we show a check (ours) / x (theirs). The `kind` discriminator tells
  // the renderer which branch to take.
  kind: "tier" | "feature";
  theirs?: string;
  ours?: string;
};

const rows: Row[] = [
  { kind: "tier", label: "2,000 Owners Mobiles", theirs: "$67 – $211", ours: "$59" },
  { kind: "tier", label: "5,000 Owners Mobiles", theirs: "$133 – $522", ours: "$139" },
  { kind: "tier", label: "10,000 Owners Mobiles", theirs: "$307 – $1,053", ours: "$229" },
  { kind: "feature", label: "All-in-one workflow" },
  { kind: "feature", label: "Quality filter built in" },
  { kind: "feature", label: "Fast, tunable scraping" },
  { kind: "feature", label: "Refund + 50% bonus policy" },
];

// Tab extension height — how far the colored columns stick ABOVE the card.
const TAB_HEIGHT = 96;

/**
 * 5-column grid: [label · theirs · gap · ours · right-spacer]
 * The two colored columns are NARROW (138px) with a small visible gap
 * between them, and there's empty frosted space on the right edge of
 * the card — matching the reference mock.
 */
const GRID_COLS = "minmax(220px, 1fr) 138px 14px 138px 104px";

export function Comparison() {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();
  // Start grown when reduced-motion user — no animation flash.
  const initial = reduce ? { scaleY: 1 } : { scaleY: 0 };
  const animate = reduce || inView ? { scaleY: 1 } : { scaleY: 0 };
  const logosInitial = reduce ? { opacity: 1 } : { opacity: 0 };
  const logosAnimate = reduce || inView ? { opacity: 1 } : { opacity: 0 };

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

        {/* No Reveal wrapper around the card: Reveal animates
            opacity + transform, and browsers skip backdrop-filter
            rendering while those are animating — you get a half-
            second flash of unblurred card on scroll-in. Keep the
            card static so the frosted glass is correct from the
            very first paint. */}
        <div
          ref={cardRef}
          className="relative mx-auto max-w-[720px]"
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
                {/* Theirs — grows up from the bottom on scroll-into-view */}
                <motion.div
                  initial={initial}
                  animate={animate}
                  transition={{ duration: 1.0, ease: GROW_EASE, delay: 0 }}
                  style={{
                    background:
                      "linear-gradient(180deg, #000000 0%, #0a0f1c 100%)",
                    borderRadius: "72px 72px 0 0",
                    transformOrigin: "bottom",
                    willChange: "transform",
                  }}
                />
                <div />
                {/* Ours — same grow, slight stagger after the black column */}
                <motion.div
                  initial={initial}
                  animate={animate}
                  transition={{ duration: 1.0, ease: GROW_EASE, delay: 0.12 }}
                  style={{
                    background:
                      "linear-gradient(180deg, #00D4FF 0%, #118BFF 40%, #0443FF 100%)",
                    borderRadius: "72px 72px 0 0",
                    transformOrigin: "bottom",
                    willChange: "transform",
                  }}
                />
                <div />
              </div>
            </div>

            {/* ───── Glass card overlay — proper liquid glass ─────
                • Slight blue-gray base tint (not pure white)
                • Radial specular highlight top-left (catches an imaginary
                  light source)
                • Pooled-light inset glow top, shadow pool bottom for depth
                • Asymmetric rim lights (top+left bright, bottom+right dim)
                  to fake 3D curvature
                • Brand-tinted elevation shadow
                Columns underneath still punch through because the base tint
                stays at low alpha. */}
            <div
              aria-hidden
              className="absolute inset-0 z-[1] rounded-[32px] border-[1.5px] border-white/60"
              style={{
                backdropFilter: "blur(50px) saturate(200%) brightness(1.02)",
                WebkitBackdropFilter: "blur(50px) saturate(200%) brightness(1.02)",
                background: [
                  "radial-gradient(130% 85% at 16% -2%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.06) 30%, transparent 58%)",
                  "linear-gradient(176deg, rgba(230,238,250,0.12) 0%, rgba(220,228,242,0.08) 55%, rgba(215,225,240,0.1) 100%)",
                ].join(", "),
                boxShadow: [
                  "inset 0 10px 32px rgba(255,255,255,0.28)",
                  "inset 0 -8px 28px rgba(170,188,212,0.14)",
                  "inset 0 1.5px 0 rgba(255,255,255,0.85)",
                  "inset 1.5px 0 0 rgba(255,255,255,0.4)",
                  "inset -1.5px 0 0 rgba(255,255,255,0.14)",
                  "inset 0 -1.5px 0 rgba(190,205,225,0.28)",
                  "0 1px 2px rgba(15,23,42,0.04)",
                  "0 24px 48px -16px rgba(15,23,42,0.22)",
                  "0 56px 96px -36px rgba(9,81,255,0.3)",
                ].join(", "),
              }}
            />

            {/* ───── Floating logos on tab tops ─────
                Fade in once the columns have finished growing up. */}
            <motion.div
              initial={logosInitial}
              animate={logosAnimate}
              transition={{ duration: 0.45, ease: GROW_EASE, delay: reduce ? 0 : 0.85 }}
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
              {/* Ours — Leadity white ghost (no shadow per user request) */}
              <div className="flex items-start justify-center">
                <div className="relative h-[58px] w-[58px] md:h-[66px] md:w-[66px]">
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
            </motion.div>

            {/* ───── Content grid ───── */}
            <div
              className="relative z-[2] grid"
              style={{ gridTemplateColumns: GRID_COLS }}
            >
              {/* Row 1 — tight top clearance; logos already float above
                  the card via TAB_HEIGHT. No divider here — first data
                  row follows directly. */}
              <div className="col-span-5 h-4 md:h-6" />

              {/* Data rows */}
              {rows.map((r, i) => {
                const isTier = r.kind === "tier";
                const isLastTier =
                  isTier && rows[i + 1] && rows[i + 1].kind !== "tier";
                return (
                  <React.Fragment key={r.label}>
                    {/* Label — left-aligned, dark text on milky white
                        glass. */}
                    <div className="flex items-center justify-start px-6 py-3.5 md:pl-10 md:pr-4 md:py-4">
                      <span className="text-[13px] font-medium text-left text-[var(--color-text-primary)] md:text-[14.5px]">
                        {r.label}
                      </span>
                    </div>
                    {/* Theirs */}
                    <div className="flex items-center justify-center px-2 py-3.5 text-center md:py-4">
                      {isTier ? (
                        <span
                          className="tabular-nums font-semibold text-[#FF3333]"
                          style={{
                            fontSize: "clamp(13px, 1.4vw, 16px)",
                            letterSpacing: "-0.02em",
                            textShadow: "0 0 22px rgba(255,60,60,0.55)",
                          }}
                        >
                          {r.theirs}
                        </span>
                      ) : (
                        <X
                          aria-label="Not included"
                          className="h-6 w-6 text-white md:h-7 md:w-7"
                          strokeWidth={3}
                        />
                      )}
                    </div>
                    {/* gap between columns — empty cell */}
                    <div />
                    {/* Ours */}
                    <div className="flex items-center justify-center px-2 py-3.5 text-center md:py-4">
                      {isTier ? (
                        <span
                          className="tabular-nums font-semibold text-white"
                          style={{
                            fontSize: "clamp(14px, 1.6vw, 18px)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {r.ours}
                        </span>
                      ) : (
                        <Check
                          aria-label="Included"
                          className="h-6 w-6 text-white md:h-7 md:w-7"
                          strokeWidth={3}
                        />
                      )}
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
