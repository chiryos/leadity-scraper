"use client";

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

export function Testimonials() {
  const reduce = useReducedMotion();

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

        {/* One long liquid-glass card holding the entire marquee. The card
            uses overflow-hidden so cards never escape its bounds — they
            slide in from the right edge and out the left edge. The glass
            recipe matches the Comparison card. */}
        <div className="container-page mt-12 md:mt-16">
          <div
            className="relative overflow-hidden rounded-[40px] border-[1.5px] border-white/60 py-8 md:py-10"
            style={{
              backdropFilter: "blur(50px) saturate(200%) brightness(1.02)",
              WebkitBackdropFilter: "blur(50px) saturate(200%) brightness(1.02)",
              background: [
                "radial-gradient(130% 85% at 16% -2%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.06) 30%, transparent 58%)",
                "linear-gradient(176deg, rgba(230,238,250,0.12) 0%, rgba(220,228,242,0.08) 55%, rgba(215,225,240,0.1) 100%)",
              ].join(", "),
              boxShadow: [
                "inset 0 10px 32px rgba(255,255,255,0.28)",
                "inset 0 -8px 28px rgba(170,188,212,0.14)",
                "inset 0 1.5px 0 rgba(255,255,255,0.85)",
                "inset 1.5px 0 0 rgba(255,255,255,0.4)",
                "inset -1.5px 0 0 rgba(255,255,255,0.14)",
                "inset 0 -1.5px 0 rgba(190,205,225,0.28)",
                "0 1px 2px rgba(15,23,42,0.04)",
                "0 24px 48px -16px rgba(15,23,42,0.22)",
                "0 56px 96px -36px rgba(9,81,255,0.3)",
              ].join(", "),
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
                  className="relative h-[420px] w-[280px] shrink-0 overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18),0_18px_40px_-22px_rgba(27,134,255,0.22)] md:h-[440px] md:w-[320px]"
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 768px) 320px, 280px"
                    className="object-cover object-top"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
