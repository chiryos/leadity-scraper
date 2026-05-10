"use client";

/**
 * v3 Final CTA — light v3 bg, the action wraps inside a big blue
 * gradient card so it's visually anchored without a dark portal.
 *
 * Replaces the previous dark-navy portal section. Smooth on both
 * edges (light bg → blue card → light bg → bright blue footer).
 */

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeWords } from "@/components/v3/fade-words";

export function CtaV3() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden v3-bg py-20 md:py-28"
    >
      <div className="relative mx-auto w-full max-w-[1080px] px-5 md:px-8">
        {/* Big blue gradient card — the visual anchor */}
        <div
          className="relative overflow-hidden rounded-[28px] px-6 py-16 text-center md:px-12 md:py-24"
          style={{
            background:
              "linear-gradient(160deg, #4591FC 0%, #5BA3FF 45%, #6DADF8 100%)",
            boxShadow:
              "0 30px 60px -22px rgba(58, 137, 253, 0.45), 0 14px 30px -10px rgba(27, 134, 255, 0.25)",
          }}
        >
          {/* Subtle conic rainbow halo center */}
          <div
            aria-hidden
            className="v3-conic-rainbow pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full opacity-25"
            style={{ filter: "blur(60px)" }}
          />

          {/* Faint hairline grid for depth */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-7">
            <div
              className="v3-font text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-white/85"
              style={{ letterSpacing: "0.16em" }}
            >
              Ready when you are
            </div>

            <h2 className="v3-text-section-headline text-white max-w-[820px]">
              <span className="block">Scrape today.</span>
              <span className="block">
                <FadeWords>Text tomorrow.</FadeWords>
              </span>
            </h2>

            <p className="v3-font max-w-[560px] text-[15px] md:text-[17px] leading-relaxed text-white/85">
              400 verified US owner mobiles. Free. No credit card. Pick a
              niche and have the CSV in your inbox in under 5 minutes.
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#pricing"
                className="v3-font inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-white px-8 text-[14px] font-medium text-[#0951FF] shadow-[0_14px_28px_-10px_rgba(0,0,0,0.18)] transition-[filter] duration-200 hover:brightness-95"
              >
                Start free — 400 mobiles
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:hello@leadity.io"
                className="v3-font inline-flex h-12 items-center justify-center gap-2 rounded-[12px] border border-white/25 bg-white/[0.08] px-8 text-[14px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/[0.14]"
              >
                Talk to founders
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
