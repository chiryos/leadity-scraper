"use client";

import * as React from "react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

type Testimonial = {
  src: string;
  alt: string;
  pull: string;
  width: number;
  height: number;
};

const testimonials: Testimonial[] = [
  {
    src: "/testimonials/t1.jpg",
    alt: "DM saying 10x better than outscraper",
    pull: "10× better than outscraper.",
    width: 1170,
    height: 1280,
  },
  {
    src: "/testimonials/t2.jpg",
    alt: "Customer DM about 4 meetings booked yesterday",
    pull: "Really like the leads, booked 4 meetings yesterday.",
    width: 1280,
    height: 590,
  },
  {
    src: "/testimonials/t3.jpg",
    alt: "Customer DM saying I love ur leads man",
    pull: "I love ur leads man. Direct business owner.",
    width: 1280,
    height: 720,
  },
  {
    src: "/testimonials/t4.jpg",
    alt: "Customer DM with 4 meetings coming up",
    pull: "Got 4 meetings coming up. Let's run it.",
    width: 1280,
    height: 1280,
  },
  {
    src: "/testimonials/t5.jpg",
    alt: "Whop notification of new payment 300 dollars",
    pull: "Closed G — $300 depo, 3k.",
    width: 1280,
    height: 905,
  },
  {
    src: "/testimonials/t6.jpg",
    alt: "Customer DM went from no booked meetings to 5 tomorrow",
    pull: "From 0 to 5 booked meetings — only 600 texts.",
    width: 1280,
    height: 1280,
  },
  {
    src: "/testimonials/t7.jpg",
    alt: "Customer DM saying SO GOOD, tons of responses to call",
    pull: "Tons of responses to call.",
    width: 1180,
    height: 1170,
  },
];

// Triple the list for a seamless infinite loop buffer.
const looped = [...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const cardsRef = React.useRef<(HTMLButtonElement | null)[]>([]);
  const pausedRef = React.useRef(false);
  const offsetRef = React.useRef(0);
  const [active, setActive] = React.useState<number | null>(null);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SET_COUNT = testimonials.length;
    const SPEED = 0.55; // px per frame ≈ 33px/sec at 60fps

    const measureSetWidth = () => {
      const children = Array.from(track.children) as HTMLElement[];
      if (children.length <= SET_COUNT) return 0;
      const first = children[0].getBoundingClientRect();
      const nextSet = children[SET_COUNT].getBoundingClientRect();
      return nextSet.left - first.left;
    };

    let setWidth = 0;
    let rafId = 0;

    const smoothstep = (t: number) => t * t * (3 - 2 * t);

    const tick = () => {
      if (!pausedRef.current && !reduce) {
        offsetRef.current += SPEED;
        if (setWidth === 0) setWidth = measureSetWidth();
        if (setWidth > 0 && offsetRef.current >= setWidth) {
          offsetRef.current -= setWidth;
        }
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      // Per-card scale + opacity falloff based on distance from viewport center
      const vw = window.innerWidth;
      const centerX = vw / 2;
      const cards = cardsRef.current;
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - centerX);
        const maxDistance = vw / 2 + rect.width * 0.6;
        const t = Math.min(distance / maxDistance, 1);
        const e = smoothstep(t);
        // Softened falloff so edge cards remain legible while moving
        const scale = 1 - e * 0.18; // 1.0 at center, 0.82 at far edges
        const opacity = 1 - e * 0.55; // 1.0 at center, 0.45 at far edges
        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
        card.style.zIndex = `${Math.round(100 - distance / 10)}`;
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onResize = () => {
      setWidth = measureSetWidth();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-48 md:pt-28 md:pb-56 lg:pt-32 lg:pb-64">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(34, 201, 245, 0.12), transparent 70%)",
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
              Every card below is a real screenshot from a real customer. Hover
              to pause — tap any card to read the full conversation.
            </p>
          </div>
        </Reveal>

        {/* Infinite coverflow carousel */}
        <Reveal delay={0.1}>
          <div
            className="relative mt-16 select-none"
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
          >
            {/* Spotlight glow behind the focused card */}
            <div
              aria-hidden
              className="glow-breathe pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "min(1100px, 90vw)",
                height: "min(900px, 80vh)",
                background:
                  "radial-gradient(closest-side, rgba(34,201,245,0.45) 0%, rgba(27,134,255,0.28) 30%, rgba(27,134,255,0.10) 55%, transparent 80%)",
              }}
            />
            <div
              aria-hidden
              className="glow-breathe-slow pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "min(1600px, 110vw)",
                height: "min(1100px, 90vh)",
                background:
                  "radial-gradient(closest-side, rgba(34,201,245,0.18) 0%, rgba(27,134,255,0.10) 45%, transparent 75%)",
              }}
            />

            {/* Track wrapper with edge mask so cards fade into the background */}
            <div
              className="relative"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
            <div
              ref={trackRef}
              className="flex items-center gap-6 md:gap-8"
              style={{ willChange: "transform" }}
            >
              {looped.map((t, i) => (
                <button
                  key={i}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  type="button"
                  onClick={() => setActive(i % testimonials.length)}
                  className="group relative flex-shrink-0 overflow-hidden rounded-[26px] border border-[var(--color-border)] bg-white text-left shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)] transition-shadow duration-300 hover:shadow-[0_40px_80px_-30px_rgba(27,134,255,0.45)]"
                  style={{
                    width: "clamp(320px, 30vw, 460px)",
                    transformOrigin: "center center",
                  }}
                >
                  <div className="w-full bg-[var(--color-surface)]">
                    <Image
                      src={t.src}
                      alt={t.alt}
                      width={t.width}
                      height={t.height}
                      sizes="(min-width: 1024px) 460px, 80vw"
                      className="block h-auto w-full"
                      draggable={false}
                    />
                  </div>
                  <div className="border-t border-[var(--color-border)] p-5 md:p-6">
                    <p className="text-[15px] font-medium leading-[1.4] text-[var(--color-text-primary)] md:text-[16px]">
                      &ldquo;{t.pull}&rdquo;
                    </p>
                  </div>
                </button>
              ))}
            </div>
            </div>
          </div>
        </Reveal>

        {active !== null ? (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-[640px] w-full overflow-auto rounded-2xl bg-white p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={testimonials[active].src}
                alt={testimonials[active].alt}
                width={testimonials[active].width}
                height={testimonials[active].height}
                className="h-auto w-full rounded-xl"
              />
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[var(--color-text-primary)] shadow-md hover:bg-white"
              >
                ×
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
