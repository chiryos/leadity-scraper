"use client";

/**
 * v3 Testimonials — infinite right→left marquee inside a long
 * white-box container, webild styling. Real customer DM screenshots.
 */

import * as React from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { SectionFrame } from "@/components/v3/section-frame";

type T = { src: string; alt: string };

const items: T[] = [
  { src: "/testimonials/t1.jpg", alt: "10x better than outscraper" },
  { src: "/testimonials/t2.jpg", alt: "Booked 4 meetings yesterday" },
  { src: "/testimonials/t3.jpg", alt: "I love your leads" },
  { src: "/testimonials/t4.jpg", alt: "4 meetings coming up" },
  { src: "/testimonials/t5.jpg", alt: "Closed 300 depo 3k" },
  { src: "/testimonials/t6.jpg", alt: "0 to 5 booked meetings" },
  { src: "/testimonials/t7.jpg", alt: "Tons of responses to call" },
];

const track = [...items, ...items];

export function TestimonialsV3() {
  const reduce = useReducedMotion();

  return (
    <SectionFrame
      id="testimonials"
      eyebrow="Receipts"
      headlineLead="Real DMs."
      headlineEmphasis="Real customers."
      centered
    >
      <p className="v3-font mx-auto max-w-[640px] text-center text-[14.5px] md:text-[15.5px] leading-relaxed text-[var(--v3-fg)]/65">
        Every screenshot is a real DM from a real customer. Slow drift below.
      </p>

      <div className="v3-white-box v3-grad-ring mt-10 overflow-hidden rounded-[14px] py-5 md:py-6">
        <div
          className="flex gap-4 md:gap-5"
          style={{
            width: "max-content",
            willChange: "transform",
            animation: reduce
              ? "none"
              : "testimonials-scroll 50s linear infinite",
          }}
        >
          {track.map((t, i) => (
            <div
              key={i}
              className="relative h-[260px] w-[180px] md:h-[300px] md:w-[210px] shrink-0 overflow-hidden rounded-[12px] bg-white shadow-[0_5px_16px_-10px_rgba(15,23,42,0.18),0_10px_24px_-16px_rgba(77,150,255,0.18)]"
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
    </SectionFrame>
  );
}
