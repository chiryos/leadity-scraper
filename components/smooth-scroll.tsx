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

    const getSectionOffset = (el: HTMLElement) => {
      // Each section has internal top padding (section-py: 96–160px). Without
      // accounting for it, we land at the section's box top — which means the
      // user sees 96–160px of empty padding before the heading. We want the
      // actual CONTENT to land just below the sticky nav, so we shift the scroll
      // target DOWN by the section's paddingTop.
      if (el === document.body) return 0;
      const style = getComputedStyle(el);
      const padTop = parseFloat(style.paddingTop) || 0;
      // Lenis-style offset: final scroll = element.top + offset
      // We want content (element.top + padTop) to sit at viewport y = NAV_HEIGHT + BREATHING_ROOM
      // → scroll position = element.top + padTop - (NAV_HEIGHT + BREATHING_ROOM)
      // → offset = padTop - NAV_HEIGHT - BREATHING_ROOM
      return padTop - NAV_HEIGHT - BREATHING_ROOM;
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
      const offset = getSectionOffset(el);
      if (lenis) {
        lenis.scrollTo(el, { offset, duration: 1.3 });
      } else {
        // Mobile: native smooth-scroll
        const top =
          el === document.body
            ? 0
            : el.getBoundingClientRect().top + window.scrollY + offset;
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
