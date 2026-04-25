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
    <section className="relative overflow-x-clip pt-16 pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
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

        {/* One long liquid-glass strip holding the entire marquee. Wider
            (max-w 1400px) and shorter than before so it reads as a horizontal
            band of receipts. Glass recipe matches the white .btn-liquid:
            light cyan from the LEFT, white-frosted middle, saturated deeper
            blue from the RIGHT. */}
        <div className="mt-8 md:mt-10 mx-auto max-w-[1400px] px-4 md:px-8">
          <div
            className="relative overflow-hidden rounded-[32px] border-[1.5px] border-white/65 py-4 md:py-5"
            style={{
              backdropFilter: "blur(50px) saturate(200%) brightness(1.02)",
              WebkitBackdropFilter: "blur(50px) saturate(200%) brightness(1.02)",
              background: [
                // Right-edge saturated blue blob (mirrors .btn-liquid)
                "radial-gradient(ellipse 28% 130% at 100% 50%, rgba(40,110,245,0.6) 0%, rgba(80,150,250,0.32) 35%, rgba(140,195,255,0.14) 60%, transparent 82%)",
                // Left-edge soft light cyan blob (mirrors .btn-liquid)
                "radial-gradient(ellipse 24% 130% at 0% 50%, rgba(150,220,255,0.45) 0%, rgba(180,230,255,0.2) 40%, transparent 78%)",
                // White-frosted base
                "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(248,252,255,0.66) 100%)",
              ].join(", "),
              boxShadow: [
                "inset 0 1px 0 rgba(255,255,255,0.95)",
                "inset 0 -1px 0 rgba(220,228,242,0.4)",
                "0 1px 2px rgba(15,23,42,0.04)",
                "0 18px 36px -12px rgba(15,23,42,0.18)",
                "0 40px 80px -24px rgba(60,130,255,0.45)",
              ].join(", "),
            }}
          >
            <div
              className="flex gap-4 md:gap-5"
              style={{
                width: "max-content",
                willChange: "transform",
                animation: reduce ? "none" : "testimonials-scroll 50s linear infinite",
              }}
            >
              {track.map((t, i) => (
                <div
                  key={i}
                  className="relative h-[260px] w-[180px] shrink-0 overflow-hidden rounded-[16px] bg-white shadow-[0_5px_16px_-10px_rgba(15,23,42,0.18),0_10px_24px_-16px_rgba(27,134,255,0.2)] md:h-[300px] md:w-[210px]"
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 768px) 210px, 180px"
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
