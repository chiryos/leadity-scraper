"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;
const trustInitials = ["SK", "MR", "AJ", "LC", "TD"];

const stats = [
  { value: "95%", label: "Mobile · 5% Other", accent: true },
  { value: "32,741", label: "ZIPs covered" },
  { value: "1,255+", label: "Business niches" },
  { value: "4.65M+", label: "Mobiles to scrape" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] flex-col bg-white">
      {/* Apple-style ambient depth: a single restrained radial behind the H1 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]"
        style={{
          background:
            "radial-gradient(50% 55% at 50% 0%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />

      {/* Cinematic bottom glow — same blue palette as the top header, softer intensity */}
      <div
        aria-hidden
        className="glow-breathe pointer-events-none absolute inset-x-0 -z-10"
        style={{
          bottom: "-160px",
          height: "560px",
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(34, 201, 245, 0.38) 0%, rgba(27, 134, 255, 0.24) 22%, rgba(27, 134, 255, 0.12) 45%, rgba(27, 134, 255, 0.04) 65%, transparent 82%)",
        }}
      />
      {/* Softer wide halo for extra depth */}
      <div
        aria-hidden
        className="glow-breathe-slow pointer-events-none absolute inset-x-0 -z-10"
        style={{
          bottom: "-240px",
          height: "680px",
          background:
            "radial-gradient(85% 100% at 50% 100%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.08) 40%, transparent 78%)",
        }}
      />

      {/* Content vertically centered */}
      <div className="container-page relative flex flex-1 flex-col items-center justify-center pt-12 pb-10 md:pt-16 md:pb-12">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 4 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]"
        >
          Reach Decision Makers Directly
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-balance mt-6 text-center font-semibold text-[var(--color-text-primary)]"
          style={{
            fontSize: "clamp(48px, 8vw, 104px)",
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
          className="mt-7 max-w-[620px] text-balance text-center text-[18px] leading-[1.5] text-[var(--color-text-secondary)] md:text-[21px] md:leading-[1.45]"
        >
          Business owner mobile numbers, pulled from Google Maps in your exact
          niche — carrier-verified and exported as a clean CSV ready for SMS
          marketing.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-3"
        >
          <Button asChild size="lg" variant="gradient">
            <a href="#pricing">
              Start Scraping
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="#how-it-works">See how it works</a>
          </Button>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          <ul className="flex -space-x-2" aria-hidden>
            {trustInitials.map((n, i) => (
              <li
                key={n}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-brand-gradient text-[10px] font-semibold text-white"
                style={{ zIndex: 5 - i }}
              >
                {n}
              </li>
            ))}
          </ul>
          <span className="text-[13px] text-[var(--color-text-secondary)]">
            Trusted by{" "}
            <strong className="font-semibold text-[var(--color-text-primary)]">
              500+
            </strong>{" "}
            creators &amp; agencies
          </span>
          <span aria-hidden className="hidden h-4 w-px bg-[var(--color-border)] sm:block" />
          <div className="flex items-center gap-1.5">
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#F6B700] text-[#F6B700]" />
              ))}
            </div>
            <span className="text-[13px] font-medium text-[var(--color-text-primary)]">
              4.9/5
            </span>
          </div>
        </motion.div>
      </div>

      {/* Premium stat strip — anchored to bottom of viewport */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease }}
        className="container-page relative pb-8 md:pb-10"
      >
        <div
          className="mx-auto grid max-w-[1180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative rounded-2xl border border-white/80 backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(226,242,255,0.78) 100%)",
                boxShadow: [
                  "0 32px 60px -22px rgba(27,134,255,0.38)",
                  "0 16px 30px -14px rgba(34,201,245,0.30)",
                  "inset 0 1px 0 rgba(255,255,255,0.9)",
                  "inset 0 -20px 28px -22px rgba(34,201,245,0.22)",
                ].join(", "),
              }}
            >
              {/* inner bottom glow tying each card to the ambient light */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(34,201,245,0.15) 0%, rgba(34,201,245,0.03) 55%, transparent 100%)",
                }}
              />

              <div className="relative z-10 px-5 py-5 sm:px-6 sm:py-6">
                <div className="flex items-baseline justify-between gap-2">
                  <span
                    className={
                      s.accent
                        ? "font-semibold tabular-nums text-brand-gradient"
                        : "font-semibold tabular-nums text-[var(--color-text-primary)]"
                    }
                    style={{
                      fontSize: "clamp(32px, 4.6vw, 44px)",
                      letterSpacing: "-0.035em",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </span>
                  {s.accent ? (
                    <span
                      aria-hidden
                      className="inline-block h-2 w-2 rounded-full bg-brand-gradient"
                      style={{ boxShadow: "0 0 12px rgba(34,201,245,0.6)" }}
                    />
                  ) : null}
                </div>
                <span className="mt-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
