"use client";

/**
 * <ScrollReveal /> — IntersectionObserver wrapper that adds `.v4-in-view`
 * to its child element when it scrolls into view. The CSS for the
 * transition lives in globals.css (.v4-in / .v4-in.v4-in-view).
 *
 * IMPORTANT: only use for BELOW-the-fold content. Above-the-fold
 * elements should use the `.v4-reveal` mount-fired CSS animation
 * (whileInView equivalent does not fire for elements already visible
 * at first paint).
 */

import * as React from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Element type to render (default div). */
  as?: keyof React.JSX.IntrinsicElements;
  /** Trigger threshold for IntersectionObserver. Default 0.18. */
  amount?: number;
};

export function ScrollReveal({
  children,
  className = "",
  as = "div",
  amount = 0.18,
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: amount },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [amount]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`v4-in ${inView ? "v4-in-view" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
