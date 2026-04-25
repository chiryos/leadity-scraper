import Image from "next/image";
import { Reveal } from "@/components/reveal";

const chips = [
  "Verified at source",
  "Automatic replacement",
  "Human account manager",
];

/**
 * Guarantee — full-bleed blue glass section, matching the closing CTA.
 * Sandwiched between Pricing (white) and Testimonials (white), so it
 * fades FROM white at the top AND BACK TO white at the bottom — the eye
 * reads it as one continuous surface change, not a hard boundary.
 */
export function Guarantee() {
  return (
    <section
      className="relative isolate py-28 text-white md:py-36 lg:py-44"
    >
      {/* Blue bg canvas — extends 200px above and below so it bleeds into
          the adjacent white Pricing / Testimonials sections. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[200px] -bottom-[200px] z-0 overflow-hidden"
        style={{
          background: [
            "radial-gradient(140% 80% at 18% -5%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 30%, transparent 58%)",
            "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
          ].join(", "),
        }}
      >
        <div
          className="glow-breathe-slow absolute -top-[10%] -left-[5%] h-[720px] w-[720px] opacity-75"
          style={{
            background:
              "radial-gradient(circle, rgba(180, 140, 255, 0.95) 0%, rgba(120, 180, 255, 0.65) 40%, transparent 70%)",
            filter: "blur(180px)",
            mixBlendMode: "plus-lighter",
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
          }}
        />
        <div
          className="glow-breathe absolute -bottom-[15%] -right-[10%] h-[820px] w-[820px] opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(100, 220, 255, 1) 0%, rgba(60, 140, 255, 0.7) 45%, transparent 75%)",
            filter: "blur(200px)",
            mixBlendMode: "plus-lighter",
            borderRadius: "42% 58% 67% 33% / 48% 52% 48% 52%",
          }}
        />
        <div
          className="glow-breathe-slow absolute top-[40%] left-[50%] h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 220, 240, 0.7) 0%, rgba(180, 160, 255, 0.4) 45%, transparent 75%)",
            filter: "blur(160px)",
            mixBlendMode: "screen",
            borderRadius: "58% 42% 45% 55% / 52% 48% 52% 48%",
          }}
        />

        {/* Faint hairline grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* Top fade — simple smooth linear. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[200px] z-[1] h-[460px]"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #ffffff 200px, transparent 100%)",
        }}
      />

      {/* Bottom fade — mirrored */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-[200px] z-[1] h-[460px]"
        style={{
          background:
            "linear-gradient(0deg, #ffffff 0%, #ffffff 200px, transparent 100%)",
        }}
      />

      <div className="container-page relative z-[2] grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="flex justify-center lg:col-span-4 lg:justify-start">
          <div className="relative">
            {/* soft ambient halo behind the seal — warmer on the blue */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: 360,
                height: 360,
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 45%, transparent 75%)",
              }}
            />
            <Image
              src="/leadity-refund-recycle-v2.png"
              alt="Leadity refund plus 50% bonus - replace and recycle bad leads"
              width={320}
              height={320}
              className="h-[260px] w-[260px] object-contain md:h-[300px] md:w-[300px]"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
            The Leadity guarantee
          </p>
          <h2
            className="text-balance mt-4 font-semibold text-white"
            style={{
              fontSize: "clamp(32px, 4.6vw, 56px)",
              letterSpacing: "-0.04em",
              lineHeight: 1.06,
            }}
          >
            Bad lead? We don&apos;t just replace it. We pay you back in bonus
            leads.
          </h2>
          <p className="mt-6 max-w-[640px] text-[15px] leading-[1.55] text-white/85 md:text-[17px]">
            Every mobile number we deliver is live-verified before it hits your
            inbox. If any number turns out to be VOIP, a landline, or off-niche,
            we replace it free - and throw in 50% more clean Owners Mobiles on top. No
            support tickets. No chasing us down. Buy 2,000 Owners Mobiles, 150 come
            back bad? You get 150 replacements plus 75 bonus numbers. Simple as
            that.
          </p>
          {/* Transparent liquid-glass chips — .btn-liquid-clear keeps the
              same subtle blob hints + glass blur but lets the brand-blue
              section read through instead of stamping a white pill on it.
              pointer-events-none = decorative only. */}
          <ul className="mt-8 flex flex-wrap items-center gap-3">
            {chips.map((c) => (
              <li
                key={c}
                className="btn-liquid-clear pointer-events-none inline-flex items-center rounded-full px-4 py-1.5 text-[12px] font-medium"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
