"use client";

/**
 * v3 Final CTA — webild-style dark portal section with the conic
 * rainbow ring effect (same vibe as their domain search). Big white
 * headline + secondary CTA + supporting copy.
 */

import * as React from "react";
import Link from "next/link";
import { FadeWords } from "@/components/v3/fade-words";

export function CtaV3() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden v3-bg-portal-dark text-white"
    >
      {/* Top edge blue glow */}
      <div className="v3-portal-edge-glow" style={{ top: -180 }} />

      {/* Faint hairline grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[820px] flex-col items-center gap-7 px-5 py-32 md:py-44 text-center">
        <div className="v3-text-eyebrow" style={{ color: "var(--v3-blue)" }}>
          Ready when you are
        </div>

        <h2 className="v3-text-section-headline text-white">
          <span className="block">Scrape today.</span>
          <span className="block">
            <FadeWords>Text tomorrow.</FadeWords>
          </span>
        </h2>

        <p className="v3-font max-w-[560px] text-[15px] md:text-[17px] leading-relaxed text-white/75">
          400 verified US owner mobiles. Free. No credit card. Pick a niche
          and have the CSV in your inbox in under 5 minutes.
        </p>

        {/* Conic rainbow ring around the action area */}
        <div className="relative mt-3">
          <div
            aria-hidden
            className="v3-conic-rainbow absolute -inset-3 rounded-full opacity-60"
            style={{ filter: "blur(24px)" }}
          />
          <div className="relative flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="v3-font inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-white px-8 text-[14px] font-medium text-[#0951FF] shadow-[0_14px_28px_-10px_rgba(255,255,255,0.25)] transition-[filter] duration-200 hover:brightness-95"
            >
              Start free — 400 mobiles
            </Link>
            <a
              href="mailto:hello@leadity.io"
              className="v3-font inline-flex h-12 items-center justify-center gap-2 rounded-[12px] border border-white/20 bg-white/[0.04] px-8 text-[14px] font-medium text-white/90 transition-colors hover:bg-white/[0.08]"
            >
              Talk to founders
            </a>
          </div>
        </div>
      </div>

      {/* Bottom edge glow into footer */}
      <div className="v3-portal-edge-glow" style={{ bottom: -180 }} />
    </section>
  );
}
