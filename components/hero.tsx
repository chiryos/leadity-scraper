"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] flex-col overflow-hidden bg-white">
      {/* Apple-style ambient depth: wider horizontal wash, same softness vertically */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]"
        style={{
          background:
            "radial-gradient(80% 55% at 50% 0%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />

      {/* Blue preview at the bottom — teases the Showcase section below
          with an organic cloud-shape peek of blue, not a straight linear
          fade. Three overlapping radial gradients create uneven bumps so
          the transition feels abstract and painterly. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[360px]"
        style={{
          background: [
            "radial-gradient(ellipse 70% 110% at 22% 100%, rgba(27, 134, 255, 0.55) 0%, rgba(34, 201, 245, 0.28) 32%, rgba(27, 134, 255, 0.08) 60%, transparent 80%)",
            "radial-gradient(ellipse 65% 95% at 78% 100%, rgba(9, 81, 255, 0.5) 0%, rgba(27, 134, 255, 0.22) 34%, transparent 72%)",
            "radial-gradient(ellipse 45% 70% at 50% 100%, rgba(34, 201, 245, 0.4) 0%, rgba(27, 134, 255, 0.15) 45%, transparent 70%)",
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

        {/* Trust line — 240+ agencies · 4.9 / 5 */}
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
    </section>
  );
}
