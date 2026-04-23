"use client";

import * as React from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";

type Testimonial = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const testimonials: Testimonial[] = [
  { src: "/testimonials/t1.jpg", alt: "DM saying 10x better than outscraper", width: 1170, height: 1280 },
  { src: "/testimonials/t2.jpg", alt: "Customer DM about 4 meetings booked yesterday", width: 1280, height: 590 },
  { src: "/testimonials/t3.jpg", alt: "Customer DM saying I love ur leads man", width: 1280, height: 720 },
  { src: "/testimonials/t4.jpg", alt: "Customer DM with 4 meetings coming up", width: 1280, height: 1280 },
  { src: "/testimonials/t5.jpg", alt: "Whop notification of new payment 300 dollars", width: 1280, height: 905 },
  { src: "/testimonials/t6.jpg", alt: "Customer DM went from no booked meetings to 5", width: 1280, height: 1280 },
  { src: "/testimonials/t7.jpg", alt: "Customer DM saying SO GOOD, tons of responses to call", width: 1180, height: 1170 },
];

// Duplicate for seamless loop: animate translateX(0 → -50%)
const track = [...testimonials, ...testimonials];

// Pre-bake 21 shadow strings (t = 0.00, 0.05, … 1.00) — avoids per-frame string
// concat. We just pick an index. Each card only re-sets style when its bucket
// changes, so most frames = zero style writes.
const SHADOWS: readonly string[] = (() => {
  const arr: string[] = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    const darkA = (0.14 - t * 0.08).toFixed(3);
    const ringA = (t * 0.22).toFixed(3);
    const glowA = (t * 0.42).toFixed(3);
    arr.push(
      `0 20px 48px -16px rgba(15,23,42,${darkA}),` +
        `0 0 0 1.5px rgba(27,134,255,${ringA}),` +
        `0 20px 56px -14px rgba(27,134,255,${glowA})`,
    );
  }
  return arr;
})();

export function Testimonials() {
  const reduce = useReducedMotion();
  const outerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (reduce) return;
    const outer = outerRef.current;
    if (!outer) return;

    const trackEl = outer.querySelector<HTMLElement>("[data-track]");
    if (!trackEl) return;

    const cards = Array.from(outer.querySelectorAll<HTMLElement>("[data-tc]"));
    // Track last bucket index per card so we skip no-op style writes.
    const lastBucket: number[] = cards.map(() => -1);

    let rafId = 0;
    let running = false;

    const tick = () => {
      // ONE getBoundingClientRect per frame (on the track); cards' offsetLeft
      // is cached layout, free to read.
      const trackRect = trackEl.getBoundingClientRect();
      const vCx = window.innerWidth / 2;
      const blueZone = window.innerWidth * 0.28;
      const darkZone = window.innerWidth * 0.45;
      const range = darkZone - blueZone;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardCx = trackRect.left + card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCx - vCx);
        let t = 1 - (dist - blueZone) / range;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        const bucket = (t * 20 + 0.5) | 0; // round → int, 0..20
        if (lastBucket[i] !== bucket) {
          lastBucket[i] = bucket;
          card.style.boxShadow = SHADOWS[bucket];
        }
      }

      if (running) rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
    };

    // Pause the rAF loop when the marquee isn't near the viewport.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "200px 0px" },
    );
    io.observe(outer);

    return () => {
      stop();
      io.disconnect();
    };
  }, [reduce]);

  return (
    <section className="relative overflow-x-clip pt-24 pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid opacity-50"
        style={{
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 180px, #000 100%)",
          maskImage: "linear-gradient(180deg, transparent 0%, #000 180px, #000 100%)",
        }}
      />

      <div className="relative">
        <Reveal>
          <div className="container-page mx-auto max-w-[820px] text-center">
            <p className="text-eyebrow">Real DMs · real customers</p>
            <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
              <span className="block">Receipts,</span>
              <span className="block text-brand-gradient">not testimonials.</span>
            </h2>
            <p className="mt-5 max-w-[640px] mx-auto text-balance text-[18px] leading-[1.55] text-[var(--color-text-secondary)]">
              Every screenshot is a real DM from a real customer.
            </p>
          </div>
        </Reveal>

        {/* Edges fade via mask; center-spotlight shadow done via rAF.
            No overflow-hidden here — that clips top/bottom shadows.
            The section's overflow-x-clip handles horizontal containment. */}
        <div
          ref={outerRef}
          className="mt-12 md:mt-16 py-10 md:py-14"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div
            data-track
            className="relative flex gap-5 md:gap-6"
            style={{
              width: "max-content",
              willChange: "transform",
              animation: reduce ? "none" : "testimonials-scroll 50s linear infinite",
            }}
          >
            {track.map((t, i) => (
              <div
                key={i}
                data-tc
                className="relative h-[460px] w-[300px] shrink-0 overflow-hidden rounded-[20px] border border-white/60 bg-white md:h-[480px] md:w-[340px]"
                style={{ contain: "paint" }}
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 768px) 340px, 300px"
                  className="object-cover object-top"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
