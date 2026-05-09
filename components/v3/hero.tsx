"use client";

/**
 * v3 Hero — webild-style cloud-sky background, tight Inter Tight h1,
 * white-box prompt input.
 *
 * Layout:
 *   [rainbow accent badge — "Verified at the source"]
 *   [BIG h1 with FadeWords — "Scrape Google Maps. Get owners' mobiles."]
 *   [white-box prompt input — placeholder + 2 chips + send button]
 *   [trust strip — "1,255+ categories · 32,741 ZIPs · TCPA-aware"]
 *
 * The cloud-sky background is a pure-CSS layered radial gradient (no
 * external image dep yet — can swap to an actual photo later by
 * dropping it in /public/cloud-sky.jpg and replacing the bg style).
 */

import * as React from "react";
import { Search } from "lucide-react";
import { FadeWords } from "@/components/v3/fade-words";

export function HeroV3() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] flex-col items-center justify-center overflow-hidden v3-bg"
    >
      {/* Sky / cloud background — layered radial gradients evoking
          a soft sky with cloud blooms. Replace with an actual sky
          image (/public/sky.jpg) once available for an even closer
          match to webild. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: [
            // Distant blue sky at top
            "linear-gradient(180deg, #DCE6F8 0%, #EBF1FB 38%, #F5F8FF 62%, #E8EFFA 88%, #DAE6F4 100%)",
            // Cloud blooms (white radials)
            "radial-gradient(45% 35% at 18% 32%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)",
            "radial-gradient(40% 28% at 78% 22%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)",
            "radial-gradient(55% 30% at 50% 55%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 75%)",
            // Soft "ground" suggestion at bottom
            "radial-gradient(80% 35% at 50% 100%, rgba(170, 195, 230, 0.45) 0%, rgba(170, 195, 230, 0) 70%)",
          ].join(", "),
        }}
      />

      {/* Faint hairline grid (very subtle, like webild) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120, 140, 175, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 140, 175, 0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Content stack */}
      <div className="relative z-10 flex w-full max-w-[940px] flex-col items-center gap-7 px-5 pt-10 md:pt-0">
        {/* Rainbow accent badge */}
        <div className="v3-font v3-rainbow-text text-[13px] md:text-[14px] font-medium tracking-tight">
          Verified at the source · 95% mobile rate
        </div>

        {/* Headline — big tight Inter Tight */}
        <h1
          className="text-center v3-text-h1"
          style={{
            fontSize: "clamp(2.6rem, 5.8vw, 4.6rem)",
          }}
        >
          <FadeWords>Owners&rsquo; mobiles.</FadeWords>
          <br />
          <FadeWords>Scraped. Verified. Yours.</FadeWords>
        </h1>

        {/* Search categories input — webild-style search picker.
            Cmd icon left, placeholder text, "/" hotkey hint right. */}
        <div className="w-full max-w-[760px]">
          <div className="text-center">
            <p className="v3-font text-[14.5px] md:text-[15.5px] text-[var(--v3-fg)]/75">
              Select one or more business categories to scrape{" "}
              <span className="text-[var(--v3-fg)]/55">
                (1,255+ available)
              </span>
            </p>
          </div>

          <CategorySearchInput />
        </div>

        {/* Trust strip */}
        <p
          className="v3-font mt-2 text-center text-[13px] md:text-[14px] tracking-tight"
          style={{ color: "var(--v3-fg)", opacity: 0.55 }}
        >
          1,255+ categories &middot; 32,741 US ZIP codes &middot; TCPA-aware
          export
        </p>
      </div>
    </section>
  );
}

/**
 * Category search input — focusable, with Cmd hint left and `/` hotkey
 * right. Matches the reference image (large, white, blue focus ring).
 *
 * Pressing `/` anywhere on the page focuses it. Pressing Esc blurs.
 */
function CategorySearchInput() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [focused, setFocused] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        inputRef.current?.blur();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="mt-5 w-full">
      <div
        className={`v3-white-box v3-grad-ring relative flex h-[60px] md:h-[68px] items-center rounded-[14px] pl-4 pr-3 transition-shadow duration-200 ${
          focused
            ? "shadow-[0_0_0_3px_rgba(77,150,255,0.18),0_8px_28px_-12px_rgba(58,137,253,0.45)]"
            : ""
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Cmd hint */}
        <kbd
          className="v3-font mr-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--v3-fg)]/10 bg-[var(--v3-fg)]/[0.04] text-[12.5px] text-[var(--v3-fg)]/55 select-none"
          aria-hidden
        >
          ⌘
        </kbd>

        {/* Search icon */}
        <Search
          className="hidden md:block mr-2 h-[18px] w-[18px] text-[var(--v3-fg)]/35 shrink-0"
          strokeWidth={1.7}
          aria-hidden
        />

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder='Search categories — "plumber", "dentist", "roofer"…'
          aria-label="Search business categories"
          className="v3-font flex-1 min-w-0 bg-transparent border-none outline-none text-[15px] md:text-[18px] text-[var(--v3-fg)] placeholder:text-[var(--v3-fg)]/40"
        />

        {/* `/` hotkey hint */}
        <kbd
          className="v3-font ml-2 hidden sm:inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--v3-fg)]/10 bg-[var(--v3-fg)]/[0.04] text-[12.5px] text-[var(--v3-fg)]/55 select-none"
          aria-hidden
        >
          /
        </kbd>
      </div>
    </div>
  );
}
