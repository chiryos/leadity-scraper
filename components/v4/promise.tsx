"use client";

/**
 * v4 Promise — pure-typography section, no cards.
 * Headline + body + 3 tabular-num stat blocks from a single real run.
 * Mobile shipped in accent; landline / VoIP filtered in muted.
 */

import * as React from "react";
import { ScrollReveal } from "@/components/v4/scroll-reveal";

export function PromiseV4() {
  return (
    <section
      className="relative w-full"
      style={{ background: "var(--v4-canvas)" }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8 py-24 md:py-32">
        <ScrollReveal>
          <h2
            className="v4-headline text-balance"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "var(--v4-text)",
            }}
          >
            Mobile, only mobile.
          </h2>
          <p
            className="v4-font mt-5 max-w-[640px] text-[16px] md:text-[18px] leading-[1.55]"
            style={{ color: "var(--v4-text-secondary)" }}
          >
            Every number runs through carrier records before it ships.
            Landlines, VoIP and disconnected lines never reach your CSV.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
          <Stat
            label="Mobile shipped"
            value="1,997"
            color="var(--v4-accent)"
          />
          <Stat label="Landline filtered" value="102" />
          <Stat label="VoIP filtered" value="43" />
        </div>

        <ScrollReveal>
          <p
            className="v4-font mt-10 text-[13px]"
            style={{ color: "var(--v4-text-muted)" }}
          >
            From a single 2,142-record run.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  color = "var(--v4-text)",
}: {
  value: string;
  label: string;
  color?: string;
}) {
  return (
    <ScrollReveal>
      <div
        className="v4-font text-[11.5px] font-semibold uppercase tracking-[0.12em]"
        style={{ color: "var(--v4-text-muted)" }}
      >
        {label}
      </div>
      <div
        className="v4-display tabular-nums mt-2"
        style={{ fontSize: "clamp(2.6rem, 4.4vw, 3.4rem)", color }}
      >
        {value}
      </div>
    </ScrollReveal>
  );
}
