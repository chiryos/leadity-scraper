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

    const lenis = new Lenis({
      duration: 1.15,
      // cubic-bezier-ish easing for smooth deceleration (classic Stripe feel)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Expose for debugging + cross-component anchor scroll
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // RAF loop
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Intercept anchor-link clicks so nav jumps glide through Lenis
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      // Skip plain "#" or empty hashes so buttons with href="#" don't jump to top weirdly
      if (href.length < 2) return;
      // Skip links that open a new tab or have modifiers
      if (anchor.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey) return;

      const id = href.slice(1);
      const el = id === "top" ? document.body : document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el, { offset: -72, duration: 1.3 });
      // Update URL hash for deep-linking without jumping
      if (typeof history !== "undefined") {
        history.pushState(null, "", `#${id}`);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
