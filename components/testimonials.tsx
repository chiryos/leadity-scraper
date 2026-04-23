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

// Shadow at edges (t=0) → shadow at center (t=1)
function buildShadow(t: number): string {
  // Dark layer fades out as blue takes over
  const darkAlpha = 0.14 - t * 0.08;
  const darkSpread = 0.1 - t * 0.06;
  // Blue ring + glow fade in toward center
  const ringAlpha = t * 0.22;
  const glowAlpha = t * 0.42;

  return [
    `0 10px 24px -14px rgba(15,23,42,${darkAlpha.toFixed(3)})`,
    `0 28px 56px -28px rgba(15,23,42,${darkSpread.toFixed(3)})`,
    `0 0 0 1.5px rgba(27,134,255,${ringAlpha.toFixed(3)})`,
    `0 16px 64px -12px rgba(27,134,255,${glowAlpha.toFixed(3)})`,
  ].join(", ");
}

export function Testimonials() {
  const reduce = useReducedMotion();
  const outerRef = React.useRef<HTMLDivElement>(null);
  const rafRef = React.useRef<number>(0);

  React.useEffect(() => {
    if (reduce) return;

    const tick = () => {
      const outer = outerRef.current;
      if (!outer) return;

      const cards = outer.querySelectorAll<HTMLElement>("[data-tc]");
      const vCx = window.innerWidth / 2;
      // Cards fully blue within 28% of center; fully dark beyond 45%
      const blueZone = window.innerWidth * 0.28;
      const darkZone = window.innerWidth * 0.45;

      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const cardCx = rect.left + rect.width / 2;
        const dist = Math.abs(cardCx - vCx);
        // t = 1 at center, 0 at edges, smooth ramp between zones
        const t = Math.max(0, Math.min(1, 1 - (dist - blueZone) / (darkZone - blueZone)));
        card.style.boxShadow = buildShadow(t);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
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
            className="flex gap-5 md:gap-6"
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
