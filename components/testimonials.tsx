"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * Testimonials — manual horizontal carousel inspired by the "retro-testimonial"
 * pattern (glass card grid with arrow navigation + expand-on-click modal),
 * restyled in the site's Apple Liquid Glass aesthetic.
 *
 * Each card:
 *   • Thumbnail of the real customer DM screenshot (the "receipt")
 *   • Pull quote (punchy line)
 *   • Verified customer attribution
 * Click → modal with the full-size screenshot.
 *
 * No auto-scroll. User drives the carousel with ← → arrows or native
 * overflow-x scroll / drag on touch.
 */

type Testimonial = {
  src: string;
  alt: string;
  pull: string;
  role: string;
  width: number;
  height: number;
};

const testimonials: Testimonial[] = [
  {
    src: "/testimonials/t1.jpg",
    alt: "DM saying 10x better than outscraper",
    pull: "10× better than Outscraper.",
    role: "Outbound agency",
    width: 1170,
    height: 1280,
  },
  {
    src: "/testimonials/t2.jpg",
    alt: "Customer DM about 4 meetings booked yesterday",
    pull: "Really like the leads — booked 4 meetings yesterday.",
    role: "Cold SMS operator",
    width: 1280,
    height: 590,
  },
  {
    src: "/testimonials/t3.jpg",
    alt: "Customer DM saying I love ur leads man",
    pull: "I love ur leads man. Direct business owner.",
    role: "Growth agency",
    width: 1280,
    height: 720,
  },
  {
    src: "/testimonials/t4.jpg",
    alt: "Customer DM with 4 meetings coming up",
    pull: "Got 4 meetings coming up. Let's run it.",
    role: "Performance outbound",
    width: 1280,
    height: 1280,
  },
  {
    src: "/testimonials/t5.jpg",
    alt: "Whop notification of new payment 300 dollars",
    pull: "Closed — $300 depo, 3k.",
    role: "Solo operator",
    width: 1280,
    height: 905,
  },
  {
    src: "/testimonials/t6.jpg",
    alt: "Customer DM went from no booked meetings to 5 tomorrow",
    pull: "From 0 to 5 booked meetings — only 600 texts.",
    role: "Cold SMS campaign",
    width: 1280,
    height: 1280,
  },
  {
    src: "/testimonials/t7.jpg",
    alt: "Customer DM saying SO GOOD, tons of responses to call",
    pull: "Tons of responses to call.",
    role: "Agency partner",
    width: 1180,
    height: 1170,
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

function TestimonialCard({
  t,
  index,
  onOpen,
}: {
  t: Testimonial;
  index: number;
  onOpen: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      layoutId={`card-${index}`}
      type="button"
      onClick={onOpen}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: easeOut }}
      aria-label={t.alt}
      className="group relative h-[460px] w-[320px] shrink-0 overflow-hidden rounded-[24px] border border-white/60 bg-white shadow-[0_10px_24px_-14px_rgba(15,23,42,0.14),0_26px_52px_-28px_rgba(27,134,255,0.2)] transition-shadow duration-300 hover:shadow-[0_14px_32px_-16px_rgba(15,23,42,0.18),0_40px_80px_-32px_rgba(27,134,255,0.35)] md:h-[500px] md:w-[360px]"
    >
      <motion.div
        layoutId={`thumb-${index}`}
        className="relative h-full w-full"
      >
        <Image
          src={t.src}
          alt={t.alt}
          fill
          sizes="(min-width: 768px) 360px, 320px"
          className="object-cover object-top"
          draggable={false}
        />
      </motion.div>
    </motion.button>
  );
}

function ExpandedModal({
  t,
  index,
  onClose,
}: {
  t: Testimonial;
  index: number;
  onClose: () => void;
}) {
  const overlayRef = React.useRef<HTMLDivElement>(null);

  // Escape + body scroll lock
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: easeOut }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        layoutId={`card-${index}`}
        className="relative max-h-[92vh] w-full max-w-[520px] overflow-hidden rounded-[24px] border border-white/60 bg-white shadow-[0_40px_80px_-20px_rgba(15,23,42,0.35)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="glass-chip absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full"
        >
          <X className="h-4 w-4 text-[var(--color-text-primary)]" />
        </button>

        <motion.div
          layoutId={`thumb-${index}`}
          className="h-full w-full overflow-auto"
        >
          <Image
            src={t.src}
            alt={t.alt}
            width={t.width}
            height={t.height}
            sizes="(min-width: 768px) 520px, 92vw"
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Testimonials() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(true);
  const [active, setActive] = React.useState<number | null>(null);

  const checkScroll = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanLeft(scrollLeft > 4);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  React.useEffect(() => {
    checkScroll();
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => checkScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollBy = (dx: number) => {
    trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-x-clip pt-24 pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid opacity-50"
        style={{
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 180px, #000 100%)",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 180px, #000 100%)",
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
              Every card is a real screenshot from a real customer. Tap any
              card to read the full conversation.
            </p>
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={0.1}>
          <div className="mt-12 md:mt-16">
            {/* Scrollable track with edge mask so cards fade in/out */}
            <div
              className="relative"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
              }}
            >
              <div
                ref={trackRef}
                className="flex gap-5 overflow-x-auto scroll-smooth px-6 pt-6 pb-12 [scrollbar-width:none] md:gap-6 md:px-[max(24px,calc((100vw-1200px)/2))] md:pt-8 md:pb-16 [&::-webkit-scrollbar]:hidden"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={t.src}
                    className="scroll-ml-6 shrink-0"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <TestimonialCard
                      t={t}
                      index={i}
                      onOpen={() => setActive(i)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow nav */}
            <div className="container-page mt-6 flex items-center justify-end gap-3 md:mt-8">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => scrollBy(-360)}
                disabled={!canLeft}
                className={cn(
                  "glass-chip inline-flex h-11 w-11 items-center justify-center rounded-full transition-opacity",
                  !canLeft && "cursor-not-allowed opacity-40",
                )}
              >
                <ArrowLeft className="h-4 w-4 text-[var(--color-text-primary)]" />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => scrollBy(360)}
                disabled={!canRight}
                className={cn(
                  "glass-chip inline-flex h-11 w-11 items-center justify-center rounded-full transition-opacity",
                  !canRight && "cursor-not-allowed opacity-40",
                )}
              >
                <ArrowRight className="h-4 w-4 text-[var(--color-text-primary)]" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Expanded modal */}
        <AnimatePresence>
          {active !== null ? (
            <ExpandedModal
              t={testimonials[active]}
              index={active}
              onClose={() => setActive(null)}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
