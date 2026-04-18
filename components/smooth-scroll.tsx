"use client";

import * as React from "react";
import Lenis from "lenis";

/**
 * Buttery Apple-style inertial smooth scroll across the whole site.
 * Anchor links (a[href^="#..."] and the "back to top" link) are intercepted
 * so nav jumps glide instead of teleporting.
 */
export function SmoothScroll() {
  React.useEffect(() => {
    // Respect prefers-reduced-motion: no inertia, let native scroll handle it.
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Mobile: native scroll is already smooth; JS interception causes lag. Only init Lenis on >=md.
    // The anchor-link handler still works via a lightweight native scrollTo fallback below.
    const isMobile =
      typeof window !== "undefined" &&
      (window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
        window.innerWidth < 768);

    const lenis = isMobile
      ? null
      : new Lenis({
          duration: 1.15,
          // cubic-bezier-ish easing for smooth deceleration (classic Stripe feel)
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          syncTouch: false,
          touchMultiplier: 1,
        });

    // Expose for debugging + cross-component anchor scroll
    (window as unknown as { __lenis?: Lenis | null }).__lenis = lenis;

    // RAF loop only if Lenis is active
    let rafId = 0;
    if (lenis) {
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    // Intercept anchor-link clicks so nav jumps glide smoothly (Lenis on desktop, native on mobile)
    const NAV_HEIGHT = 72;
    const BREATHING_ROOM = 8; // small gap between nav and content

    // Find the actual "first content" inside a section (eyebrow, heading, or an
    // explicit [data-section-start]). Each section has 96–160px of internal
    // top padding for the ambient glow — without this, we'd land at the section's
    // box top and see a big empty gap before the heading. Targeting the first
    // content element directly is more reliable than measuring paddingTop
    // (which can be flaky on iOS Safari under smooth-scroll animations).
    const getScrollTarget = (el: HTMLElement): HTMLElement => {
      if (el === document.body) return el;
      const firstContent = el.querySelector<HTMLElement>(
        "[data-section-start], .text-eyebrow, h1, h2",
      );
      return firstContent ?? el;
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (href.length < 2) return;
      if (anchor.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;

      const id = href.slice(1);
      const el = id === "top" ? document.body : document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const scrollEl = getScrollTarget(el);
      // We want the first content to sit at viewport y = NAV + BREATH
      // → scroll position = scrollEl.top − (NAV + BREATH)
      const offset = scrollEl === document.body ? 0 : -(NAV_HEIGHT + BREATHING_ROOM);
      if (lenis) {
        lenis.scrollTo(scrollEl, { offset, duration: 1.3 });
      } else {
        // Mobile: native smooth-scroll
        const top =
          scrollEl === document.body
            ? 0
            : scrollEl.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      if (typeof history !== "undefined") {
        history.pushState(null, "", `#${id}`);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
