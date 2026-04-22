import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

/**
 * Closing CTA — no longer a contained card; this is the SECTION itself.
 * Spans the full viewport width, uses the brand blue gradient with a
 * specular-glass treatment, and blends into the previous (FAQ) section
 * via a tall white-to-transparent top fade so the eye reads it as one
 * continuous surface change, not a hard boundary.
 */
export function CTA() {
  return (
    <section
      className="relative isolate py-28 text-white md:py-36 lg:py-44"
    >
      {/* Blue bg canvas — extends 200px above the section so it bleeds
          into the FAQ area above (no bottom extension — Footer follows).
          Mask fades the top 140-200px of canvas so the FAQ accordion
          cards / shadows above aren't polluted by the blue. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[200px] bottom-0 z-0 overflow-hidden"
        style={{
          background: [
            "radial-gradient(140% 80% at 18% -5%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 30%, transparent 58%)",
            "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
          ].join(", "),
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0px, transparent 140px, #000 200px, #000 100%)",
          maskImage:
            "linear-gradient(180deg, transparent 0px, transparent 140px, #000 200px, #000 100%)",
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

      {/* Top fade — extends 200px UP into the FAQ area. Short solid-white
          cap at the top edge hides the blue bg canvas boundary; organic
          radial clouds below. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[200px] z-[1] h-[460px]"
        style={{
          background: [
            "linear-gradient(180deg, #ffffff 0%, #ffffff 20px, rgba(255,255,255,0.5) 50px, transparent 110px)",
            "radial-gradient(ellipse 70% 110% at 22% 0%, #ffffff 0%, rgba(255,255,255,0.6) 32%, rgba(255,255,255,0.12) 62%, transparent 82%)",
            "radial-gradient(ellipse 65% 95% at 78% 0%, #ffffff 0%, rgba(255,255,255,0.55) 34%, rgba(255,255,255,0.08) 64%, transparent 80%)",
            "radial-gradient(ellipse 45% 70% at 52% 0%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 40%, transparent 72%)",
          ].join(", "),
        }}
      />

      <div className="container-page relative z-[2]">
        <Reveal>
          <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
            {/* Ghost logo — white variant, no shadow */}
            <Image
              src="/logo-white.png"
              alt=""
              aria-hidden
              width={96}
              height={96}
              className="h-[80px] w-[80px] object-contain md:h-[92px] md:w-[92px]"
              priority={false}
            />

            {/* Eyebrow */}
            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
              Less stack. More pipeline.
            </p>

            {/* Headline */}
            <h2
              className="text-balance mt-4 font-semibold text-white"
              style={{
                fontSize: "clamp(36px, 5.2vw, 64px)",
                letterSpacing: "-0.04em",
                lineHeight: 1.04,
              }}
            >
              <span className="block">Your next 5,000 leads,</span>
              <span className="block">pulled in one click.</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-6 max-w-[620px] text-balance text-[15px] leading-[1.55] text-white/85 md:text-[17px]">
              Pick a niche. Hit start. We deliver carrier-verified Owners
              Mobiles straight to a clean CSV - refund plus 50% bonus on
              anything that doesn&apos;t text.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-5 md:mt-10">
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-[#0951FF] shadow-[0_18px_36px_-14px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                Get my 5k leads
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@leadity.com"
                className="text-[14px] font-medium text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Talk to the founders →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
