"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
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

  // Subtle parallax on the image as it scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [0.98, 1.0, 0.98]);

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
              className="font-semibold tabular-nums text-brand-gradient"
              style={{ fontSize: 56, lineHeight: 1, letterSpacing: "-0.04em" }}
            >
              {shot.step}
            </span>
            <span className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
              {shot.label}
            </span>
          </div>
          <h3
            className="mt-5 font-semibold text-[var(--color-text-primary)]"
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            {shot.title}
          </h3>
          <p className="mt-4 max-w-[460px] text-[16px] leading-[1.6] text-[var(--color-text-secondary)] md:text-[17px]">
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
          style={{ y: imageY, scale: imageScale }}
          className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_30px_80px_-30px_rgba(27,134,255,0.35)] sm:p-4"
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

export function Showcase() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white py-24 md:py-28 lg:py-32">
      {/* Top glow — same tone + shape as hero's bottom glow, anchored at y=0 so the two peaks meet at the section boundary and the seam disappears */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[680px]"
        style={{
          background:
            "radial-gradient(85% 100% at 50% 0%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />
      <div className="relative container-page">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-eyebrow">A look inside</p>
            <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
              <span className="block">From a single niche</span>
              <span className="block text-brand-gradient">to verified Owners Mobiles.</span>
            </h2>
            <p className="mt-5 max-w-[640px] mx-auto text-balance text-[18px] leading-[1.55] text-[var(--color-text-secondary)]">
              Five screens tell the whole story. Scroll through each one to see
              exactly what you get - from the moment you click Start to the
              moment your CSV lands.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 lg:mt-24 divide-y divide-[var(--color-border)]">
          {shots.map((shot, i) => (
            <Step key={shot.id} shot={shot} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
