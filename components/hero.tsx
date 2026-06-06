"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Hero — split layout, exactly one viewport tall.
 *
 *   ┌──────────────────────────────────────────────────────────┐
 *   │ [H1 + sub + CTA + trust]      │     [product mockup]     │
 *   └──────────────────────────────────────────────────────────┘
 *
 * Sizing rules (per brief):
 *   • Section height = exactly `100svh` so any scroll reveals the
 *     next section immediately — no min-h overflow.
 *   • Both columns vertically centered in the row.
 *   • Stretches edge-to-edge (max content width 1280px) so on a
 *     large display the image lands large rather than floating in
 *     dead space.
 *   • Mobile: columns stack — text on top, image below — and the
 *     section grows from svh to a content-driven min so nothing
 *     gets cut off on small screens.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-white"
      style={{
        // Mobile: tall enough to fit stacked content but still
        // viewport-anchored. md+: locked to exactly one viewport so
        // any scroll reveals the next section.
        minHeight: "100svh",
        height: "100svh",
      }}
    >
      {/* Apple-style ambient depth (top wash) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]"
        style={{
          background:
            "radial-gradient(80% 55% at 50% 0%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />

      {/* Full-height grid, true-center vertical alignment.
          Nav is `position: fixed` and floats above transparently, so
          the section doesn't need top padding to clear it — content
          centers around the real viewport middle. Mobile keeps a small
          top pad so the H1 doesn't sit under the nav island. */}
      <div className="relative mx-auto flex h-full w-full max-w-[1360px] items-center px-5 pt-[80px] pb-6 md:px-10 md:pt-0 md:pb-0">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-14 lg:gap-20">
          {/* ─────────────── Left column: text + CTAs + trust ─────────────── */}
          <div className="flex flex-col items-start text-left">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="text-balance font-semibold text-[var(--color-text-primary)]"
              style={{
                fontSize: "clamp(30px, 4.2vw, 60px)",
                letterSpacing: "-0.045em",
                lineHeight: 0.98,
              }}
            >
              <span className="block">Scrape Google Maps.</span>
              <span className="block text-brand-gradient">
                Get Owners Mobiles.
              </span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-5 max-w-[540px] text-balance text-[14px] leading-[1.55] text-[var(--color-text-secondary)] md:mt-6 md:text-[16px] md:leading-[1.55]"
            >
              Business Owners Mobiles, pulled from Google Maps in your exact
              niche — carrier-verified and exported as a clean CSV for SMS
              marketing.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="mt-7 flex flex-row items-center gap-3 md:mt-9"
            >
              <Button asChild size="lg" variant="gradient">
                <a href="#pricing">
                  Start Scraping
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Trust line — 240+ agencies · 4.9 / 5 */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
              className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 md:mt-7"
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
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[#F6B700] text-[#F6B700]"
                    />
                  ))}
                </div>
                <span className="text-[12px] font-medium text-[var(--color-text-primary)] md:text-[13px]">
                  4.9 / 5
                </span>
              </div>
            </motion.div>
          </div>

          {/* ─────────────── Right column: product mockup ─────────────── */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="relative w-full"
          >
            {/* Ambient brand-blue glow behind the image */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] md:-inset-10"
              style={{
                background:
                  "radial-gradient(60% 55% at 55% 50%, rgba(27, 134, 255, 0.22) 0%, rgba(34, 201, 245, 0.08) 45%, transparent 75%)",
                filter: "blur(40px)",
              }}
            />
            <Image
              src="/hero/landing-mock.png"
              alt="Leadity dashboard — credit balance card and a scraped CSV of carrier-validated US owner mobiles (mobile kept, landline and VoIP filtered out)"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 820px"
              className="block h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
