"use client";

/**
 * v4 Guarantee + Compare — two panels side by side.
 *  Left:  signature gradient card with the "bonus, not a refund" math.
 *  Right: honest one-tool-vs-three-subscriptions table (NO fake
 *         competitor names — just role labels).
 */

import * as React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/v4/scroll-reveal";

export function GuaranteeCompareV4() {
  return (
    <section
      className="relative w-full"
      style={{ background: "var(--v4-canvas)" }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Guarantee — gradient card */}
          <ScrollReveal className="lg:col-span-6">
            <div className="v4-grad relative overflow-hidden rounded-[12px] p-7 md:p-9 h-full">
              <span
                className="v4-chip"
                style={{
                  background: "rgba(255,255,255,0.14)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.22)",
                  fontWeight: 600,
                  padding: "5px 12px",
                }}
              >
                <span
                  className="ms-icon"
                  style={{ fontSize: 14 }}
                  data-fill="1"
                  aria-hidden
                >
                  verified
                </span>
                THE GUARANTEE
              </span>

              <h3
                className="v4-headline mt-5 text-balance"
                style={{
                  fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
                  color: "#fff",
                }}
              >
                A bonus, not a refund.
              </h3>

              <p
                className="v4-font mt-4 max-w-[480px] text-[15px] leading-[1.6]"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                Buy 2,000 mobiles. If 150 come back bad, we send 150
                replacements plus 75 bonus mobiles. Verified at the source,
                replaced automatically, no support ticket.
              </p>

              {/* Math equation */}
              <div
                className="mt-6 flex flex-wrap items-center gap-2 rounded-[12px] p-4"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <Pill value="2,000" label="ordered" />
                <Plus />
                <Pill value="150" label="replaced" />
                <Plus />
                <Pill value="75" label="bonus" highlight />
                <Equals />
                <Pill value="2,225" label="in your CSV" big />
              </div>

              <Link href="/signup" className="v4-btn-on-grad mt-7">
                Start a verified run
                <span
                  className="ms-icon"
                  style={{ fontSize: 18 }}
                  aria-hidden
                >
                  arrow_forward
                </span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Compare — honest "three tools vs one" */}
          <ScrollReveal className="lg:col-span-6">
            <div className="v4-card h-full p-7 md:p-9">
              <p className="v4-eyebrow">HOW WE COMPARE</p>
              <h3
                className="v4-headline mt-3 text-balance"
                style={{
                  fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                  color: "var(--v4-text)",
                }}
              >
                Three tools. Or one tool.
              </h3>
              <p
                className="v4-font mt-3 text-[14.5px] leading-[1.6]"
                style={{ color: "var(--v4-text-secondary)" }}
              >
                One tool pulls the list. Another classifies the numbers.
                Leadity does both, in one CSV, in 60 seconds — no
                stitching three subscriptions together.
              </p>

              <div className="mt-6">
                <ComparisonGroup
                  title="The three-subscription way"
                  muted
                  rows={[
                    {
                      role: "Scraper",
                      caption: "Pulls businesses & raw phones",
                    },
                    {
                      role: "Phone validator",
                      caption: "Classifies mobile / landline / VoIP",
                    },
                    {
                      role: "List cleaner",
                      caption: "Removes duplicates & dead rows",
                    },
                  ]}
                />
                <ComparisonGroup
                  title="The Leadity way"
                  rows={[
                    {
                      role: "Leadity",
                      caption:
                        "All three. One CSV. Carrier-validated mobile leads, replaced on miss.",
                      highlight: true,
                    },
                  ]}
                />
              </div>

              <p
                className="v4-font mt-6 text-[12.5px]"
                style={{ color: "var(--v4-text-muted)" }}
              >
                Pricing snapshot from public scraper + phone-validator
                rates. One tool, one checkout — your numbers, not three
                logins.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Pill({
  value,
  label,
  highlight,
  big,
}: {
  value: string;
  label: string;
  highlight?: boolean;
  big?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-[10px] px-2.5 py-1.5"
      style={
        highlight
          ? {
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.32)",
            }
          : {
              background: "transparent",
            }
      }
    >
      <span
        className="v4-font tabular-nums"
        style={{
          fontSize: big ? 22 : 17,
          fontWeight: 600,
          color: "#fff",
        }}
      >
        {value}
      </span>
      <span
        className="v4-font"
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {label}
      </span>
    </span>
  );
}

function Plus() {
  return (
    <span
      className="v4-font"
      style={{
        fontSize: 18,
        fontWeight: 500,
        color: "rgba(255,255,255,0.55)",
        padding: "0 2px",
      }}
    >
      +
    </span>
  );
}
function Equals() {
  return (
    <span
      className="v4-font"
      style={{
        fontSize: 18,
        fontWeight: 500,
        color: "rgba(255,255,255,0.55)",
        padding: "0 2px",
      }}
    >
      =
    </span>
  );
}

function ComparisonGroup({
  title,
  rows,
  muted,
}: {
  title: string;
  rows: { role: string; caption: string; highlight?: boolean }[];
  muted?: boolean;
}) {
  return (
    <div className="mt-3 first:mt-0">
      <div
        className="v4-font flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.12em]"
        style={{
          color: muted ? "var(--v4-text-muted)" : "var(--v4-accent)",
        }}
      >
        {muted ? (
          <span className="ms-icon" style={{ fontSize: 16 }} aria-hidden>
            apps
          </span>
        ) : (
          <span
            className="ms-icon"
            style={{ fontSize: 16, color: "var(--v4-accent)" }}
            data-fill="1"
            aria-hidden
          >
            auto_awesome
          </span>
        )}
        {title}
      </div>
      <ul className="mt-3 space-y-2">
        {rows.map((r) => (
          <li
            key={r.role}
            className="flex items-start gap-3 rounded-[10px] border px-4 py-3"
            style={{
              borderColor: r.highlight
                ? "var(--v4-accent)"
                : "var(--v4-border)",
              background: r.highlight
                ? "var(--v4-soft-bg)"
                : "var(--v4-surface)",
              opacity: muted ? 0.78 : 1,
            }}
          >
            <span
              className="ms-icon mt-0.5"
              style={{
                fontSize: 18,
                color: r.highlight
                  ? "var(--v4-accent)"
                  : "var(--v4-text-muted)",
              }}
              data-fill={r.highlight ? "1" : undefined}
              aria-hidden
            >
              {r.highlight ? "check_circle" : "horizontal_rule"}
            </span>
            <div>
              <div
                className="v4-font text-[14px] font-semibold"
                style={{
                  color: r.highlight
                    ? "var(--v4-accent)"
                    : "var(--v4-text)",
                }}
              >
                {r.role}
              </div>
              <div
                className="v4-font text-[12.5px] leading-[1.45]"
                style={{ color: "var(--v4-text-secondary)" }}
              >
                {r.caption}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
