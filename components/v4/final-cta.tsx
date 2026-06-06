"use client";

/**
 * v4 Final CTA — a single gradient banner card with 24px radius.
 * White headline, white CTA pill (the only place we go to 24px radius).
 */

import * as React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/v4/scroll-reveal";

export function FinalCtaV4() {
  return (
    <section
      className="relative w-full"
      style={{ background: "var(--v4-canvas)" }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8 pb-24 md:pb-32">
        <ScrollReveal>
          <div
            className="v4-grad relative overflow-hidden px-7 py-16 md:px-14 md:py-24 text-center"
            style={{ borderRadius: 24 }}
          >
            {/* Subtle inner orb */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
            />

            <h2
              className="v4-display text-balance mx-auto max-w-[820px]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#fff",
              }}
            >
              Your next 5,000 leads are 60 seconds away.
            </h2>

            <p
              className="v4-font mt-5 mx-auto max-w-[560px] text-[15px] md:text-[17px] leading-[1.55]"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Pick a category. Watch it run. Take the CSV. One credit per
              validated mobile — and credits never expire.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/signup" className="v4-btn-on-grad">
                Get started
                <span
                  className="ms-icon"
                  style={{ fontSize: 18 }}
                  aria-hidden
                >
                  arrow_forward
                </span>
              </Link>
              <a
                href="#pricing"
                className="v4-font inline-flex h-11 items-center justify-center gap-2 rounded-[12px] border px-5 text-[14px] font-medium transition-colors"
                style={{
                  borderColor: "rgba(255,255,255,0.32)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                }}
              >
                See pricing
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
