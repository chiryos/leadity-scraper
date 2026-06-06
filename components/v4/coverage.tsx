"use client";

/**
 * v4 Coverage — asymmetric tile: US heatmap on the left, tall rail
 * with headline + phone-mix mini-bar on the right.
 *
 * The heatmap is a tile-map representation of US states (each state is
 * a rounded square in an approximate geographic grid), shaded by an
 * arbitrary "coverage" weight. This is honest about what it represents
 * — it's a stylized tile map, not a real choropleth, but it visually
 * conveys "we cover every state" cleanly.
 */

import * as React from "react";
import { ScrollReveal } from "@/components/v4/scroll-reveal";

// Coverage weight 0..1 per state.
type StateTile = { code: string; col: number; row: number; w: number };

// Approximate geographic grid (columns 1..11, rows 1..7). Every US state
// plus DC. Weights are illustrative — change with real numbers as the
// product collects them.
const STATES: StateTile[] = [
  // Row 1
  { code: "AK", col: 1, row: 7, w: 0.62 },
  { code: "ME", col: 11, row: 1, w: 0.78 },
  // Row 2
  { code: "VT", col: 10, row: 2, w: 0.66 },
  { code: "NH", col: 11, row: 2, w: 0.72 },
  // Row 3
  { code: "WA", col: 2, row: 2, w: 0.92 },
  { code: "MT", col: 3, row: 2, w: 0.5 },
  { code: "ND", col: 5, row: 2, w: 0.4 },
  { code: "MN", col: 6, row: 2, w: 0.78 },
  { code: "WI", col: 7, row: 2, w: 0.74 },
  { code: "MI", col: 8, row: 2, w: 0.86 },
  { code: "NY", col: 10, row: 3, w: 0.95 },
  { code: "MA", col: 11, row: 3, w: 0.84 },
  // Row 4
  { code: "OR", col: 2, row: 3, w: 0.74 },
  { code: "ID", col: 3, row: 3, w: 0.46 },
  { code: "WY", col: 4, row: 3, w: 0.42 },
  { code: "SD", col: 5, row: 3, w: 0.4 },
  { code: "IA", col: 6, row: 3, w: 0.68 },
  { code: "IL", col: 7, row: 3, w: 0.9 },
  { code: "IN", col: 8, row: 3, w: 0.76 },
  { code: "OH", col: 9, row: 3, w: 0.88 },
  { code: "PA", col: 10, row: 4, w: 0.92 },
  { code: "CT", col: 11, row: 4, w: 0.74 },
  { code: "RI", col: 11, row: 5, w: 0.68 },
  // Row 5
  { code: "CA", col: 2, row: 4, w: 0.97 },
  { code: "NV", col: 3, row: 4, w: 0.62 },
  { code: "UT", col: 4, row: 4, w: 0.6 },
  { code: "CO", col: 5, row: 4, w: 0.74 },
  { code: "NE", col: 6, row: 4, w: 0.5 },
  { code: "MO", col: 7, row: 4, w: 0.72 },
  { code: "KY", col: 8, row: 4, w: 0.7 },
  { code: "WV", col: 9, row: 4, w: 0.62 },
  { code: "VA", col: 10, row: 5, w: 0.82 },
  { code: "MD", col: 10, row: 6, w: 0.78 },
  { code: "DE", col: 11, row: 6, w: 0.6 },
  { code: "NJ", col: 11, row: 7, w: 0.86 },
  // Row 6
  { code: "AZ", col: 3, row: 5, w: 0.84 },
  { code: "NM", col: 4, row: 5, w: 0.56 },
  { code: "KS", col: 5, row: 5, w: 0.58 },
  { code: "AR", col: 6, row: 5, w: 0.62 },
  { code: "TN", col: 7, row: 5, w: 0.8 },
  { code: "NC", col: 8, row: 5, w: 0.86 },
  { code: "SC", col: 9, row: 5, w: 0.72 },
  // Row 7
  { code: "OK", col: 5, row: 6, w: 0.66 },
  { code: "MS", col: 6, row: 6, w: 0.6 },
  { code: "AL", col: 7, row: 6, w: 0.72 },
  { code: "GA", col: 8, row: 6, w: 0.84 },
  // Row 8
  { code: "TX", col: 4, row: 6, w: 0.96 },
  { code: "LA", col: 6, row: 7, w: 0.68 },
  { code: "FL", col: 9, row: 7, w: 0.95 },
  // Hawaii
  { code: "HI", col: 1, row: 6, w: 0.5 },
];

export function CoverageV4() {
  return (
    <section
      id="coverage"
      className="relative w-full"
      style={{ background: "var(--v4-canvas)" }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 lg:items-center">
            {/* Heatmap tile */}
            <div className="lg:col-span-8">
              <div
                className="v4-card p-5 md:p-7"
                aria-label="US coverage tile map"
              >
                <div className="flex items-center justify-between">
                  <span className="v4-eyebrow">LIVE COVERAGE</span>
                  <span
                    className="v4-font tabular-nums text-[12.5px]"
                    style={{ color: "var(--v4-text-muted)" }}
                  >
                    51/51 states &amp; DC
                  </span>
                </div>

                <Heatmap />

                <Legend />
              </div>
            </div>

            {/* Rail */}
            <div className="lg:col-span-4">
              <p className="v4-eyebrow">COVERAGE</p>
              <h2
                className="v4-headline mt-3 text-balance"
                style={{
                  fontSize: "clamp(1.7rem, 2.4vw, 2.2rem)",
                  color: "var(--v4-text)",
                }}
              >
                Every US state. Every owner mobile we can reach.
              </h2>
              <p
                className="v4-font mt-4 text-[15px] leading-[1.6]"
                style={{ color: "var(--v4-text-secondary)" }}
              >
                We sweep US ZIPs across every category — Alaska and Hawaii
                included. The map shades by how deep our coverage runs.
              </p>

              <PhoneMixBar className="mt-7" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Heatmap() {
  // Grid is 11 cols × 7 rows. Tile size adjusts via container.
  return (
    <div
      className="mt-5 grid w-full gap-1.5 md:gap-2"
      style={{
        gridTemplateColumns: "repeat(11, 1fr)",
        gridTemplateRows: "repeat(7, minmax(0, 1fr))",
        aspectRatio: "11 / 7",
      }}
    >
      {STATES.map((s) => {
        // Map weight to blue intensity via accent token.
        const opacity = 0.18 + s.w * 0.78;
        return (
          <div
            key={s.code}
            className="rounded-[8px] flex items-center justify-center"
            style={{
              gridColumn: s.col,
              gridRow: s.row,
              background: `rgba(59, 91, 219, ${opacity.toFixed(3)})`,
              border: "1px solid rgba(59, 91, 219, 0.18)",
            }}
            title={`${s.code} — ${Math.round(s.w * 100)}% coverage`}
          >
            <span
              className="v4-font text-[10px] font-semibold"
              style={{
                color: opacity > 0.6 ? "#fff" : "var(--v4-deep-ink)",
              }}
            >
              {s.code}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Legend() {
  return (
    <div className="mt-6 flex items-center justify-between gap-4">
      <span
        className="v4-font text-[12px]"
        style={{ color: "var(--v4-text-muted)" }}
      >
        Lower coverage
      </span>
      <div
        className="h-2 flex-1 rounded-full mx-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(59,91,219,0.18) 0%, rgba(59,91,219,1) 100%)",
        }}
      />
      <span
        className="v4-font text-[12px]"
        style={{ color: "var(--v4-text-muted)" }}
      >
        Deeper coverage
      </span>
    </div>
  );
}

function PhoneMixBar({ className = "" }: { className?: string }) {
  return (
    <div className={`v4-card p-5 ${className}`.trim()}>
      <div className="flex items-center justify-between">
        <span className="v4-eyebrow">PHONE MIX</span>
        <span
          className="v4-chip"
          style={{ background: "var(--v4-success-bg)", color: "var(--v4-success)" }}
        >
          <span className="ms-icon" style={{ fontSize: 13 }} data-fill="1" aria-hidden>
            verified
          </span>
          Mobile only ships
        </span>
      </div>

      <div
        className="mt-4 flex h-2.5 w-full overflow-hidden rounded-full"
        style={{ background: "var(--v4-row-hover)" }}
        aria-label="Carrier mix on a representative run"
      >
        <span style={{ width: "62%", background: "var(--v4-accent)" }} />
        <span style={{ width: "21%", background: "var(--v4-text-secondary)" }} />
        <span style={{ width: "11%", background: "var(--v4-danger)" }} />
        <span style={{ width: "6%", background: "var(--v4-border-strong)" }} />
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-3">
        <Legendish color="var(--v4-accent)" label="Mobile" value="62%" />
        <Legendish color="var(--v4-text-secondary)" label="Landline" value="21%" />
        <Legendish color="var(--v4-danger)" label="VoIP" value="11%" />
        <Legendish color="var(--v4-border-strong)" label="Other" value="6%" />
      </ul>

      <p
        className="v4-font mt-4 text-[12px]"
        style={{ color: "var(--v4-text-muted)" }}
      >
        Every run ships only the Mobile share.
      </p>
    </div>
  );
}

function Legendish({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center gap-2">
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ background: color }}
      />
      <span
        className="v4-font text-[13px]"
        style={{ color: "var(--v4-text)" }}
      >
        {label}
      </span>
      <span
        className="v4-font tabular-nums text-[12.5px] ml-auto"
        style={{ color: "var(--v4-text-muted)" }}
      >
        {value}
      </span>
    </li>
  );
}
