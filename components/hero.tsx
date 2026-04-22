"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "32,741", label: "ZIPs Covered" },
  { value: "95%", label: "Mobile · 5% Other", accent: true },
  { value: "1,255+", label: "Business Niches" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] flex-col bg-white">
      {/* Apple-style ambient depth: wider horizontal wash, same softness vertically */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]"
        style={{
          background:
            "radial-gradient(80% 55% at 50% 0%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />

      {/* Seam glow — single plateau-linear gradient that extends DOWN
          past the hero's bottom into the showcase area. Lives inside
          hero's isolated stacking context at -z-10 so it sits BEHIND
          every hero element (h1, subtitle, CTAs, stats, trust row)
          and above hero's bg-white. The downward portion paints on
          top of the showcase (which now has no bg-white), so we get
          one continuous wash across the boundary. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -z-10"
        style={{
          bottom: "-500px",
          height: "1000px",
          background: [
            "radial-gradient(100% 100% at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 55%, rgba(255,255,255,0.55) 90%)",
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(34,201,245,0.06) 14%, rgba(34,201,245,0.16) 30%, rgba(34,201,245,0.24) 44%, rgba(34,201,245,0.24) 56%, rgba(34,201,245,0.16) 70%, rgba(34,201,245,0.06) 86%, rgba(255,255,255,0) 100%)",
          ].join(", "),
        }}
      />

      {/* Content vertically centered - mobile padding tightened */}
      <div className="container-page relative flex flex-1 flex-col items-center justify-center pt-8 pb-6 md:pt-16 md:pb-12">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 4 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)] md:text-[11px]"
        >
          Reach Decision Makers Directly
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-balance mt-4 text-center font-semibold text-[var(--color-text-primary)] md:mt-6"
          style={{
            fontSize: "clamp(36px, 6vw, 80px)",
            letterSpacing: "-0.045em",
            lineHeight: 0.98,
          }}
        >
          <span className="block">Scrape Google Maps.</span>
          <span className="block text-brand-gradient">Get Owners Mobiles.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-5 hidden max-w-[760px] text-balance text-center text-[13px] leading-[1.55] text-[var(--color-text-secondary)] md:mt-6 md:block md:text-[16px] md:leading-[1.5]"
        >
          Business Owners Mobiles, pulled from Google Maps in your exact niche
          - carrier-verified and exported as a clean CSV for SMS marketing.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-7 flex flex-row items-center justify-center gap-3 md:mt-10"
        >
          <Button asChild size="lg" variant="ghost">
            <a href="#how-it-works">See how it works</a>
          </Button>
          <Button asChild size="lg" variant="gradient">
            <a href="#pricing">
              Start Scraping
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:mt-8"
        >
          <span className="text-[12px] text-[var(--color-text-secondary)] md:text-[13px]">
            Trusted by{" "}
            <strong className="font-semibold text-[var(--color-text-primary)]">
              240+
            </strong>{" "}
            Agencies
          </span>
          <span aria-hidden className="h-4 w-px bg-[var(--color-border)]" />
          <div className="flex items-center gap-1.5">
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#F6B700] text-[#F6B700]" />
              ))}
            </div>
            <span className="text-[12px] font-medium text-[var(--color-text-primary)] md:text-[13px]">
              4.9/5
            </span>
          </div>
        </motion.div>
      </div>

      {/* Inline stat row - bare numbers with hairline dividers, sitting on the section's ambient glow */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease }}
        className="container-page relative pb-6 md:pb-10"
      >
        <div className="mx-auto flex max-w-[900px] items-center justify-center divide-x divide-[rgba(138,138,138,0.55)]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex min-w-0 flex-1 flex-col items-center px-2 sm:min-w-[140px] sm:flex-initial sm:px-8 md:px-12"
            >
              <span
                className={
                  s.accent
                    ? "font-semibold tabular-nums text-brand-gradient"
                    : "font-semibold tabular-nums text-[var(--color-text-primary)]"
                }
                style={{
                  fontSize: "clamp(20px, 5.4vw, 52px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              <span className="mt-2 text-center text-[9px] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)] md:text-[12px] md:tracking-[0.12em]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
