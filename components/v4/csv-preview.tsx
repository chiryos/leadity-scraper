"use client";

/**
 * <CsvPreviewV4 /> — inline mini CSV-output card.
 *
 * Shows what the product literally ships: a small table with each row
 * tagged as mobile (kept), or landline / VoIP (struck through and
 * dropped). This is the conversion-anchor visual on the hero.
 *
 * All data is illustrative/representative — generic example businesses,
 * generic numbers, no real customer PII.
 */

import * as React from "react";

type Row = {
  business: string;
  city: string;
  phone: string;
  kind: "mobile" | "landline" | "voip";
};

const ROWS: Row[] = [
  { business: "Brightline Plumbing", city: "Austin, TX", phone: "(512) 408…", kind: "mobile" },
  { business: "Cedar & Oak Dental", city: "Denver, CO", phone: "(303) 555…", kind: "mobile" },
  { business: "Harbor Auto Body", city: "Tampa, FL",   phone: "(813) 555…", kind: "landline" },
  { business: "Summit HVAC",      city: "Mesa, AZ",   phone: "(480) 555…", kind: "mobile" },
  { business: "Riverside Notary", city: "Reno, NV",   phone: "(775) 555…", kind: "voip" },
];

export function CsvPreviewV4({ className = "" }: { className?: string }) {
  return (
    <div className={`v4-card overflow-hidden ${className}`.trim()}>
      {/* Window chrome */}
      <div
        className="flex items-center justify-between gap-3 border-b px-4 py-3"
        style={{ borderColor: "var(--v4-border)" }}
      >
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28C840" }} />
          <span
            className="ms-icon ml-2"
            style={{ fontSize: 16, color: "var(--v4-text-muted)" }}
            aria-hidden
          >
            description
          </span>
          <span
            className="v4-font text-[12.5px] font-medium"
            style={{ color: "var(--v4-text)" }}
          >
            owner-mobiles.csv
          </span>
        </div>
        <span
          className="v4-font tabular-nums text-[11.5px]"
          style={{ color: "var(--v4-text-muted)" }}
        >
          2,000 rows · 47s
        </span>
      </div>

      {/* Header row */}
      <div
        className="grid border-b text-[10.5px] uppercase tracking-[0.08em]"
        style={{
          gridTemplateColumns: "1.4fr 1fr 1fr auto",
          color: "var(--v4-text-muted)",
          borderColor: "var(--v4-border)",
        }}
      >
        <div className="px-4 py-2.5">Business</div>
        <div className="px-2 py-2.5">City</div>
        <div className="px-2 py-2.5">Phone</div>
        <div className="px-4 py-2.5">Type</div>
      </div>

      {/* Data rows */}
      <ul>
        {ROWS.map((r) => {
          const dropped = r.kind !== "mobile";
          return (
            <li
              key={r.business}
              className="grid items-center border-b last:border-b-0"
              style={{
                gridTemplateColumns: "1.4fr 1fr 1fr auto",
                borderColor: "var(--v4-border)",
              }}
            >
              <span
                className="v4-font px-4 py-3 text-[13px]"
                style={{
                  color: dropped ? "var(--v4-text-muted)" : "var(--v4-text)",
                  textDecoration: dropped ? "line-through" : "none",
                }}
              >
                {r.business}
              </span>
              <span
                className="v4-font px-2 py-3 text-[12.5px]"
                style={{
                  color: dropped ? "var(--v4-text-muted)" : "var(--v4-text-secondary)",
                  textDecoration: dropped ? "line-through" : "none",
                }}
              >
                {r.city}
              </span>
              <span
                className="v4-font px-2 py-3 text-[12.5px] tabular-nums"
                style={{
                  color: dropped ? "var(--v4-text-muted)" : "var(--v4-text-secondary)",
                  textDecoration: dropped ? "line-through" : "none",
                }}
              >
                {r.phone}
              </span>
              <span className="px-4 py-3">
                <KindPill kind={r.kind} />
              </span>
            </li>
          );
        })}
      </ul>

      {/* Footer summary */}
      <div
        className="flex items-center justify-between gap-3 border-t px-4 py-3"
        style={{ borderColor: "var(--v4-border)", background: "var(--v4-canvas)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="ms-icon"
            style={{ fontSize: 16, color: "var(--v4-success)" }}
            data-fill="1"
            aria-hidden
          >
            verified
          </span>
          <span
            className="v4-font text-[12px] font-medium"
            style={{ color: "var(--v4-success)" }}
          >
            Mobiles only — landline &amp; VoIP filtered out
          </span>
        </div>
        <span
          className="v4-font tabular-nums text-[11.5px]"
          style={{ color: "var(--v4-text-muted)" }}
        >
          1 credit / row
        </span>
      </div>
    </div>
  );
}

function KindPill({ kind }: { kind: Row["kind"] }) {
  if (kind === "mobile")
    return (
      <span
        className="v4-chip"
        style={{ background: "var(--v4-success-bg)", color: "var(--v4-success)" }}
      >
        <span className="ms-icon" style={{ fontSize: 14 }} data-fill="1" aria-hidden>
          check_circle
        </span>
        Mobile
      </span>
    );
  if (kind === "landline")
    return (
      <span
        className="v4-chip"
        style={{
          background: "var(--v4-row-hover)",
          color: "var(--v4-text-secondary)",
        }}
      >
        <span className="ms-icon" style={{ fontSize: 14 }} aria-hidden>
          block
        </span>
        Landline
      </span>
    );
  return (
    <span
      className="v4-chip"
      style={{ background: "var(--v4-danger-bg)", color: "var(--v4-danger)" }}
    >
      <span className="ms-icon" style={{ fontSize: 14 }} aria-hidden>
        cancel
      </span>
      VoIP
    </span>
  );
}
