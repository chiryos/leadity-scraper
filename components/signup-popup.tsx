"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

/**
 * Delayed lead-magnet popup.
 *
 * - Appears ~6.5s after first load so it doesn't pre-empt the hero.
 * - Dismissal is remembered in localStorage so returning visitors aren't
 *   pestered.
 * - Closeable via X button, backdrop click, or Escape key.
 */

const DISMISS_KEY = "leadity-signup-popup-dismissed-v1";
const SHOW_AFTER_MS = 6500;

export function SignupPopup() {
  const [open, setOpen] = React.useState(false);
  const reduce = useReducedMotion();

  // Schedule the reveal (once per device/session, respecting dismissal).
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(DISMISS_KEY)) return;
    } catch {
      // localStorage may be blocked in private mode — still show.
    }
    const t = window.setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => window.clearTimeout(t);
  }, []);

  const close = React.useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  // Escape-to-close + lock body scroll while open.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signup-popup-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={close}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.94 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 24,
              mass: 1,
            }}
            onClick={(e) => e.stopPropagation()}
            className="glass-brand relative w-full max-w-[440px] overflow-hidden rounded-[28px] px-7 pb-7 pt-8 text-white sm:px-8"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="glass-chip-dark absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Ghost logo */}
            <div className="relative flex justify-center">
              <Image
                src="/logo.png"
                alt=""
                aria-hidden
                width={76}
                height={76}
                className="h-[76px] w-[76px] object-contain"
                style={{
                  filter:
                    "drop-shadow(0 14px 26px rgba(0,0,0,0.35)) drop-shadow(0 4px 10px rgba(0,0,0,0.25))",
                }}
              />
            </div>

            {/* Eyebrow */}
            <p className="relative mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
              Limited offer
            </p>

            {/* Headline */}
            <h3
              id="signup-popup-title"
              className="relative mt-2 text-balance text-center font-semibold text-white"
              style={{
                fontSize: "clamp(22px, 3.2vw, 28px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              <span className="block">
                Sign Up <span className="font-extrabold">NOW</span> and get
              </span>
              <span className="block">
                300 Owners Mobile Phones for{" "}
                <span className="font-extrabold">FREE</span>
              </span>
            </h3>

            <p className="relative mt-3 text-center text-[13.5px] leading-[1.55] text-white/85">
              Carrier-verified Owners Mobiles in your niche, delivered as a
              clean CSV. No credit card.
            </p>

            {/* CTA */}
            <a
              href="#pricing"
              onClick={close}
              className="btn-liquid relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[15px] font-semibold"
            >
              Claim my 300 free leads
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={close}
              className="relative mt-3 block w-full text-center text-[12px] font-medium text-white/70 transition-colors hover:text-white"
            >
              No thanks, I&apos;ll browse first
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
