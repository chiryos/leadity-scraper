"use client";

/**
 * v4 How it works — 3 alternating editorial rows.
 * Each row: huge ghost numeral (01/02/03) + step name + copy on one
 * side; small on-brand inline UI mockup on the other.
 * Steps: Pick a category → Watch it run → Take the CSV.
 */

import * as React from "react";
import { ScrollReveal } from "@/components/v4/scroll-reveal";

const steps = [
  {
    num: "01",
    label: "Choose",
    heading: "Pick a category.",
    body:
      "Auto body shops in California. Dental practices in Texas. Restaurants in Brooklyn. Pick what you want to call — no SIC codes, no filter wizards.",
    Mock: NichePickMock,
  },
  {
    num: "02",
    label: "Track",
    heading: "Watch it run.",
    body:
      "The dashboard shows the carrier check happening live. Mobiles pass through. Landlines and VoIP get filtered before they ship. Most runs finish in under a minute.",
    Mock: LiveRunMock,
  },
  {
    num: "03",
    label: "Ship",
    heading: "Take the CSV.",
    body:
      "When the run finishes, your file downloads automatically. Owner, business, city, phone, carrier, classification — every column your dialer needs. Bad numbers come back replaced, plus a 50% bonus.",
    Mock: CsvFileMock,
  },
];

export function HowItWorksV4() {
  return (
    <section
      id="how-it-works"
      className="relative w-full"
      style={{
        background: "var(--v4-surface)",
        borderTop: "1px solid var(--v4-border)",
        borderBottom: "1px solid var(--v4-border)",
      }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <p className="v4-eyebrow">HOW IT WORKS</p>
          <h2
            className="v4-headline mt-3 text-balance"
            style={{
              fontSize: "clamp(2rem, 3.6vw, 2.8rem)",
              color: "var(--v4-text)",
            }}
          >
            Pick a niche. Watch it run. Take the CSV.
          </h2>
        </ScrollReveal>

        <div className="mt-16 md:mt-20 space-y-20 md:space-y-28">
          {steps.map((s, i) => {
            const Mock = s.Mock;
            const reverse = i % 2 === 1;
            return (
              <ScrollReveal key={s.num}>
                <div
                  className={`grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Copy column */}
                  <div className="relative lg:col-span-5">
                    <span
                      className="v4-ghost-numeral pointer-events-none absolute -left-1 -top-12 md:-top-16 select-none"
                      style={{ fontSize: "clamp(96px, 12vw, 168px)" }}
                      aria-hidden
                    >
                      {s.num}
                    </span>
                    <div className="relative">
                      <p
                        className="v4-font text-[11.5px] font-semibold uppercase tracking-[0.14em]"
                        style={{ color: "var(--v4-accent)" }}
                      >
                        Step {s.num} · {s.label}
                      </p>
                      <h3
                        className="v4-headline mt-2"
                        style={{
                          fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)",
                          color: "var(--v4-text)",
                        }}
                      >
                        {s.heading}
                      </h3>
                      <p
                        className="v4-font mt-4 text-[15px] md:text-[16px] leading-[1.6]"
                        style={{ color: "var(--v4-text-secondary)" }}
                      >
                        {s.body}
                      </p>
                    </div>
                  </div>

                  {/* Mock column */}
                  <div className="lg:col-span-7">
                    <Mock />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── inline mock UIs ────────────────────────── */

function NichePickMock() {
  return (
    <div className="v4-card p-5 md:p-6">
      <div
        className="v4-chip"
        style={{
          background: "var(--v4-soft-bg)",
          color: "var(--v4-accent)",
          fontWeight: 600,
        }}
      >
        <span className="ms-icon" style={{ fontSize: 14 }} aria-hidden>
          tune
        </span>
        New scrape
      </div>

      <div className="mt-5">
        <label
          className="v4-font block text-[12px] font-medium"
          style={{ color: "var(--v4-text-secondary)" }}
        >
          Category
        </label>
        <div
          className="mt-2 flex items-center gap-2 rounded-[12px] border px-3 py-3"
          style={{ borderColor: "var(--v4-border)", background: "var(--v4-canvas)" }}
        >
          <span
            className="ms-icon"
            style={{ fontSize: 18, color: "var(--v4-accent)" }}
            data-fill="1"
            aria-hidden
          >
            directions_car
          </span>
          <span
            className="v4-font text-[14px] font-medium"
            style={{ color: "var(--v4-text)" }}
          >
            Auto body shops
          </span>
          <span
            className="ms-icon ml-auto"
            style={{ fontSize: 18, color: "var(--v4-text-muted)" }}
            aria-hidden
          >
            expand_more
          </span>
        </div>
      </div>

      <div className="mt-4">
        <label
          className="v4-font block text-[12px] font-medium"
          style={{ color: "var(--v4-text-secondary)" }}
        >
          State
        </label>
        <div
          className="mt-2 flex items-center gap-2 rounded-[12px] border px-3 py-3"
          style={{ borderColor: "var(--v4-border)", background: "var(--v4-canvas)" }}
        >
          <span
            className="ms-icon"
            style={{ fontSize: 18, color: "var(--v4-accent)" }}
            data-fill="1"
            aria-hidden
          >
            location_on
          </span>
          <span
            className="v4-font text-[14px] font-medium"
            style={{ color: "var(--v4-text)" }}
          >
            California
          </span>
          <span
            className="ms-icon ml-auto"
            style={{ fontSize: 18, color: "var(--v4-text-muted)" }}
            aria-hidden
          >
            expand_more
          </span>
        </div>
      </div>

      <div
        className="mt-5 flex items-center justify-between rounded-[12px] border px-3 py-3"
        style={{ borderColor: "var(--v4-border)" }}
      >
        <span
          className="v4-font text-[13px]"
          style={{ color: "var(--v4-text-secondary)" }}
        >
          Owner mobiles, scrubbed
        </span>
        <span
          className="v4-font tabular-nums text-[18px] font-semibold"
          style={{ color: "var(--v4-success)" }}
        >
          1,284
        </span>
      </div>
    </div>
  );
}

function LiveRunMock() {
  return (
    <div className="v4-card p-5 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: "var(--v4-success)" }}
          />
          <span
            className="v4-font text-[13px] font-medium"
            style={{ color: "var(--v4-text)" }}
          >
            Carrier check · live
          </span>
        </div>
        <span
          className="v4-font tabular-nums text-[12.5px]"
          style={{ color: "var(--v4-text-muted)" }}
        >
          0:41
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <span
            className="v4-font text-[12.5px]"
            style={{ color: "var(--v4-text-secondary)" }}
          >
            Coverage
          </span>
          <span
            className="v4-font tabular-nums text-[12.5px] font-semibold"
            style={{ color: "var(--v4-text)" }}
          >
            78%
          </span>
        </div>
        <div
          className="mt-2 h-2 w-full overflow-hidden rounded-full"
          style={{ background: "var(--v4-border)" }}
        >
          <div
            className="h-full rounded-full"
            style={{ width: "78%", background: "var(--v4-accent)" }}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <RunTile value="1,002" label="Mobile" tone="success" />
        <RunTile value="214" label="Landline" tone="muted" />
        <RunTile value="68" label="VoIP" tone="danger" />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span
          className="v4-chip"
          style={{ background: "var(--v4-success-bg)", color: "var(--v4-success)" }}
        >
          <span className="ms-icon" style={{ fontSize: 14 }} data-fill="1" aria-hidden>
            smartphone
          </span>
          Mobile · ships
        </span>
        <span
          className="v4-chip"
          style={{ background: "var(--v4-row-hover)", color: "var(--v4-text-secondary)" }}
        >
          <span className="ms-icon" style={{ fontSize: 14 }} aria-hidden>
            call
          </span>
          Landline · cut
        </span>
        <span
          className="v4-chip"
          style={{ background: "var(--v4-danger-bg)", color: "var(--v4-danger)" }}
        >
          <span className="ms-icon" style={{ fontSize: 14 }} aria-hidden>
            wifi_calling_3
          </span>
          VoIP · cut
        </span>
      </div>
    </div>
  );
}

function RunTile({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone: "success" | "muted" | "danger";
}) {
  const color =
    tone === "success"
      ? "var(--v4-success)"
      : tone === "danger"
        ? "var(--v4-danger)"
        : "var(--v4-text)";
  return (
    <div
      className="rounded-[10px] border px-3 py-3 text-center"
      style={{ borderColor: "var(--v4-border)" }}
    >
      <div
        className="v4-display tabular-nums"
        style={{ fontSize: "26px", color }}
      >
        {value}
      </div>
      <div
        className="v4-font mt-1 text-[11.5px]"
        style={{ color: "var(--v4-text-muted)" }}
      >
        {label}
      </div>
    </div>
  );
}

function CsvFileMock() {
  return (
    <div className="v4-card overflow-hidden">
      <div
        className="flex items-center justify-between gap-3 border-b px-5 py-4"
        style={{ borderColor: "var(--v4-border)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-[10px]"
            style={{ background: "var(--v4-soft-bg)" }}
          >
            <span
              className="ms-icon"
              style={{ fontSize: 22, color: "var(--v4-accent)" }}
              aria-hidden
            >
              description
            </span>
          </div>
          <div>
            <div
              className="v4-font text-[14px] font-semibold"
              style={{ color: "var(--v4-text)" }}
            >
              auto_body_ca.csv
            </div>
            <div
              className="v4-font tabular-nums text-[11.5px]"
              style={{ color: "var(--v4-text-muted)" }}
            >
              1,002 rows · 38 KB
            </div>
          </div>
        </div>
        <span
          className="v4-chip"
          style={{ background: "var(--v4-success-bg)", color: "var(--v4-success)" }}
        >
          <span className="ms-icon" style={{ fontSize: 14 }} aria-hidden>
            download
          </span>
          Ready
        </span>
      </div>

      <div
        className="grid border-b text-[10.5px] uppercase tracking-[0.08em]"
        style={{
          gridTemplateColumns: "1fr 1.1fr 0.8fr 1fr 0.9fr 0.7fr",
          color: "var(--v4-text-muted)",
          borderColor: "var(--v4-border)",
        }}
      >
        {["Owner", "Business", "City", "Phone", "Carrier", "Class"].map((h) => (
          <div key={h} className="px-3 py-2.5">
            {h}
          </div>
        ))}
      </div>

      <ul>
        {[
          ["J. Alva…", "Bayvie…", "Oakland", "(510) …", "AT&T", "mobile"],
          ["M. Tran", "Pacific…", "Fresno", "(559) …", "T-Mob…", "mobile"],
          ["S. Patel", "Coast Ga…", "San Diego", "(619) …", "Verizon", "mobile"],
        ].map((row, i) => (
          <li
            key={i}
            className="grid items-center border-b last:border-b-0 text-[12.5px]"
            style={{
              gridTemplateColumns: "1fr 1.1fr 0.8fr 1fr 0.9fr 0.7fr",
              borderColor: "var(--v4-border)",
              color: "var(--v4-text)",
            }}
          >
            {row.map((c, j) => (
              <span
                key={j}
                className="v4-font px-3 py-3 truncate"
                style={{
                  color:
                    j === 5
                      ? "var(--v4-success)"
                      : "var(--v4-text)",
                  fontWeight: j === 5 ? 600 : 400,
                }}
              >
                {c}
              </span>
            ))}
          </li>
        ))}
      </ul>

      <div
        className="border-t px-5 py-3"
        style={{ borderColor: "var(--v4-border)", background: "var(--v4-canvas)" }}
      >
        <span
          className="v4-font text-[12.5px]"
          style={{ color: "var(--v4-text-secondary)" }}
        >
          Bad numbers come back replaced, plus a{" "}
          <span
            style={{ color: "var(--v4-success)", fontWeight: 600 }}
          >
            50% bonus
          </span>
          .
        </span>
      </div>
    </div>
  );
}
