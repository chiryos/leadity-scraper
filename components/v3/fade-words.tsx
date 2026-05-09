"use client";

/**
 * <FadeWords /> — webild-style scroll-driven word reveal.
 *
 * Wraps a string of words. Each word becomes a <span> that starts
 * blurred + transparent. When the element scrolls into view (via
 * IntersectionObserver), the parent gets `.v3-in-view` and the spans
 * cascade into focus with a stagger (CSS transition-delay).
 *
 * Use inside an h2/h1 like:
 *   <h2 className="v3-text-section-headline">
 *     <FadeWords>Build and launch your website in minutes</FadeWords>
 *   </h2>
 *
 * The CSS for the transition is in globals.css under .v3-fade-words /
 * .v3-fade-words.v3-in-view.
 */

import * as React from "react";

type FadeWordsProps = {
  children: string;
  className?: string;
  /** Trigger threshold (0..1) for IntersectionObserver. Default 0.4. */
  amount?: number;
  /** Run only once on first enter (default true). */
  once?: boolean;
};

export function FadeWords({
  children,
  className,
  amount = 0.4,
  once = true,
}: FadeWordsProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting;
        if (isVisible) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: amount },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [amount, once]);

  // Split into words, preserving spaces.
  const tokens = children.split(/(\s+)/).filter(Boolean);

  return (
    <span
      ref={ref}
      className={[
        "v3-fade-words",
        inView ? "v3-in-view" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {tokens.map((tok, i) =>
        /^\s+$/.test(tok) ? (
          <React.Fragment key={i}>{tok}</React.Fragment>
        ) : (
          <span key={i}>{tok}</span>
        ),
      )}
    </span>
  );
}
