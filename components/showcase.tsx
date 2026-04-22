"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Shot = {
  id: string;
  step: string;
  label: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const shots: Shot[] = [
  {
    id: "categories",
    step: "01",
    label: "Choose",
    title: "Pick your niche.",
    body:
      "1,255+ business categories, already organised into clean sectors. Start with Roofing, Dentist, or any of the other 1,254. Plain English - no SIC codes, no picklists.",
    src: "/product/01-categories.png",
    alt: "Category picker with Roofing Contractor selected and 16 sector groups",
    width: 1600,
    height: 1100,
  },
  {
    id: "location",
    step: "02",
    label: "Target",
    title: "Choose where to scrape.",
    body:
      "By state, by ZIP, or the full US - 32,741 ZIPs included. Dial in the exact regions your team can actually service, and leave the rest on the shelf.",
    src: "/product/02-location.png",
    alt: "Location picker showing By State, By ZIP Codes, and Full US Coverage options",
    width: 1600,
    height: 1100,
  },
  {
    id: "launch",
    step: "03",
    label: "Launch",
    title: "Launch at your pace.",
    body:
      "Careful, balanced, or aggressive workers. Pick the throughput that matches your rate limits and deadline - we handle the retries, the backoff, and the clean-up.",
    src: "/product/03-launch.png",
    alt: "Launch screen with Careful, Balanced, and Aggressive worker options",
    width: 1600,
    height: 1100,
  },
  {
    id: "dashboard",
    step: "04",
    label: "Track",
    title: "Watch your pipeline fill.",
    body:
      "Total leads, today, this week, this month - side by side. Every active job shows real-time progress, and the queue chart tells you when you'll land.",
    src: "/product/04-dashboard.png",
    alt: "Dashboard with 200,010 total leads and live job tracking",
    width: 1600,
    height: 1100,
  },
  {
    id: "classification",
    step: "05",
    label: "Ship",
    title: "Mobile-only, every time.",
    body:
      "Live carrier classification splits Mobile, Landline, VoIP, Toll-Free, and Unknown. Pay only for numbers your SMS stack can actually text. Export any segment as a clean CSV.",
    src: "/product/05-classification.png",
    alt: "Phone classification screen showing 172 mobile, 46 landline, 30 VoIP, 4 toll-free, 1 unknown",
    width: 1600,
    height: 1100,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function Step({ shot, index }: { shot: Shot; index: number }) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const textFirst = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28"
    >
      <div
        className={cn(
          "lg:col-span-5",
          textFirst ? "lg:order-1" : "lg:order-2",
        )}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex items-center gap-3">
            <span
              className="font-semibold tabular-nums text-white"
              style={{ fontSize: 56, lineHeight: 1, letterSpacing: "-0.04em" }}
            >
              {shot.step}
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-md">
              {shot.label}
            </span>
          </div>
          <h3
            className="mt-5 font-semibold text-white"
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            {shot.title}
          </h3>
          <p className="mt-4 max-w-[460px] text-[16px] leading-[1.6] text-white/85 md:text-[17px]">
            {shot.body}
          </p>
        </motion.div>
      </div>

      <div
        className={cn(
          "lg:col-span-7",
          textFirst ? "lg:order-2" : "lg:order-1",
        )}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="glass-card relative rounded-2xl p-3 sm:p-4"
        >
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-white">
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-contain object-top"
              priority={index === 0}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Showcase — full-bleed blue glass section, matching the Guarantee / CTA
 * treatment. Sandwiched between Hero (white) and Features (white), so it
 * fades FROM white at the top AND BACK TO white at the bottom. Because the
 * section is tall (5 steps), glow blobs are distributed vertically instead
 * of clustered at the ends.
 */
export function Showcase() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-28 text-white md:py-36 lg:py-44"
      style={{
        background: [
          // Specular corner highlight — sun hitting top-left of the glass
          "radial-gradient(140% 60% at 18% -2%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 28%, transparent 55%)",
          // Brand gradient base
          "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
        ].join(", "),
      }}
    >
      {/* Top fade — organic cloud-shape (three overlapping radial
          gradients with uneven x-positions) so the transition from the
          white Hero into the blue feels abstract/painterly, not a flat
          horizontal line. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[360px]"
        style={{
          background: [
            "radial-gradient(ellipse 70% 110% at 22% 0%, #ffffff 0%, rgba(255,255,255,0.6) 32%, rgba(255,255,255,0.12) 62%, transparent 82%)",
            "radial-gradient(ellipse 65% 95% at 78% 0%, #ffffff 0%, rgba(255,255,255,0.55) 34%, rgba(255,255,255,0.08) 64%, transparent 80%)",
            "radial-gradient(ellipse 45% 70% at 52% 0%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 40%, transparent 72%)",
          ].join(", "),
        }}
      />

      {/* Bottom fade — same organic recipe, mirrored, bridging back into
          the white Comparison section below. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[360px]"
        style={{
          background: [
            "radial-gradient(ellipse 70% 110% at 22% 100%, #ffffff 0%, rgba(255,255,255,0.6) 32%, rgba(255,255,255,0.12) 62%, transparent 82%)",
            "radial-gradient(ellipse 65% 95% at 78% 100%, #ffffff 0%, rgba(255,255,255,0.55) 34%, rgba(255,255,255,0.08) 64%, transparent 80%)",
            "radial-gradient(ellipse 45% 70% at 52% 100%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 40%, transparent 72%)",
          ].join(", "),
        }}
      />

      {/* ───── Gaussian-blur glow blobs ─────
          Distributed along the section's full height (not just clustered
          at top/bottom like in Guarantee/CTA) so the long body doesn't
          feel empty in the middle. Same recipe: organic asymmetric
          border-radius, huge blurs, plus-lighter blend. */}
      <div
        aria-hidden
        className="glow-breathe-slow pointer-events-none absolute -top-[5%] -left-[8%] h-[720px] w-[720px] opacity-75"
        style={{
          background:
            "radial-gradient(circle, rgba(180, 140, 255, 0.95) 0%, rgba(120, 180, 255, 0.65) 40%, transparent 70%)",
          filter: "blur(180px)",
          mixBlendMode: "plus-lighter",
          borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
        }}
      />
      <div
        aria-hidden
        className="glow-breathe pointer-events-none absolute top-[22%] -right-[8%] h-[680px] w-[680px] opacity-75"
        style={{
          background:
            "radial-gradient(circle, rgba(100, 220, 255, 1) 0%, rgba(60, 140, 255, 0.7) 45%, transparent 75%)",
          filter: "blur(190px)",
          mixBlendMode: "plus-lighter",
          borderRadius: "42% 58% 67% 33% / 48% 52% 48% 52%",
        }}
      />
      <div
        aria-hidden
        className="glow-breathe-slow pointer-events-none absolute top-[48%] -left-[10%] h-[720px] w-[720px] opacity-75"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 200, 240, 0.75) 0%, rgba(180, 160, 255, 0.55) 45%, transparent 75%)",
          filter: "blur(180px)",
          mixBlendMode: "screen",
          borderRadius: "58% 42% 45% 55% / 52% 48% 52% 48%",
        }}
      />
      <div
        aria-hidden
        className="glow-breathe pointer-events-none absolute top-[72%] -right-[10%] h-[760px] w-[760px] opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(100, 220, 255, 1) 0%, rgba(60, 140, 255, 0.7) 45%, transparent 75%)",
          filter: "blur(200px)",
          mixBlendMode: "plus-lighter",
          borderRadius: "42% 58% 67% 33% / 48% 52% 48% 52%",
        }}
      />

      {/* Faint hairline grid for texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-[2] container-page">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
              A look inside
            </p>
            <h2
              className="text-balance mt-4 font-semibold text-white"
              style={{
                fontSize: "clamp(32px, 4.6vw, 56px)",
                letterSpacing: "-0.04em",
                lineHeight: 1.06,
              }}
            >
              <span className="block">From a single niche</span>
              <span className="block text-white/85">
                to verified Owners Mobiles.
              </span>
            </h2>
            <p className="mt-5 max-w-[640px] mx-auto text-balance text-[18px] leading-[1.55] text-white/85">
              Five screens tell the whole story. Scroll through each one to see
              exactly what you get - from the moment you click Start to the
              moment your CSV lands.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 lg:mt-24 divide-y divide-white/15">
          {shots.map((shot, i) => (
            <Step key={shot.id} shot={shot} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
