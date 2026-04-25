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
    const glowA = (t * 0.42).toFixed(3);
    arr.push(
      `0 20px 48px -16px rgba(15,23,42,${darkA}),` +
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

        {/* Cards travel right→left through two liquid-glass tubes anchored on
            the section's edges. Cards inside a tube get blurred by its
            backdrop-filter; cards in the center stay crisp. The inner edge
            of each tube fades via mask-image so the transition is seamless. */}
        <div
          ref={outerRef}
          className="relative mt-12 md:mt-16 py-10 md:py-14"
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
                className="relative h-[460px] w-[300px] shrink-0 overflow-hidden rounded-[20px] bg-white md:h-[480px] md:w-[340px]"
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

          {/* Left liquid-glass tube — cards entering from the left appear to
              dissolve into it. Inner edge fades to transparent via mask so
              the boundary into the sharp center area is seamless. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10"
            style={{
              width: "clamp(140px, 16%, 260px)",
              backdropFilter: "blur(22px) saturate(180%) brightness(1.04)",
              WebkitBackdropFilter: "blur(22px) saturate(180%) brightness(1.04)",
              background: [
                "radial-gradient(120% 80% at 0% 50%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.18) 45%, transparent 75%)",
                "linear-gradient(to right, rgba(238,244,255,0.55) 0%, rgba(228,236,250,0.22) 55%, rgba(220,230,245,0) 100%)",
              ].join(", "),
              maskImage:
                "linear-gradient(to right, black 0%, black 35%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 35%, transparent 100%)",
              borderRadius: "0 96px 96px 0",
              boxShadow: [
                "inset 0 1px 0 rgba(255,255,255,0.7)",
                "inset 0 -1px 0 rgba(190,205,225,0.25)",
                "inset 1.5px 0 0 rgba(255,255,255,0.55)",
              ].join(", "),
            }}
          />

          {/* Right liquid-glass tube — mirror of the left. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10"
            style={{
              width: "clamp(140px, 16%, 260px)",
              backdropFilter: "blur(22px) saturate(180%) brightness(1.04)",
              WebkitBackdropFilter: "blur(22px) saturate(180%) brightness(1.04)",
              background: [
                "radial-gradient(120% 80% at 100% 50%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.18) 45%, transparent 75%)",
                "linear-gradient(to left, rgba(238,244,255,0.55) 0%, rgba(228,236,250,0.22) 55%, rgba(220,230,245,0) 100%)",
              ].join(", "),
              maskImage:
                "linear-gradient(to left, black 0%, black 35%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 0%, black 35%, transparent 100%)",
              borderRadius: "96px 0 0 96px",
              boxShadow: [
                "inset 0 1px 0 rgba(255,255,255,0.7)",
                "inset 0 -1px 0 rgba(190,205,225,0.25)",
                "inset -1.5px 0 0 rgba(255,255,255,0.55)",
              ].join(", "),
            }}
          />
        </div>
      </div>
    </section>
  );
}
