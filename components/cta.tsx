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
      className="relative overflow-hidden py-28 text-white md:py-36 lg:py-44"
      style={{
        background: [
          // Specular corner highlight — sun hitting top-left of the glass
          "radial-gradient(140% 80% at 18% -5%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 30%, transparent 58%)",
          // Brand gradient base
          "linear-gradient(160deg, #22C9F5 0%, #1B86FF 45%, #0951FF 100%)",
        ].join(", "),
      }}
    >
      {/* Smooth top fade — bridges FAQ's white bg into the blue so the
          transition is seamless, not a hard color stop. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[260px]"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0.2) 65%, transparent 100%)",
        }}
      />

      {/* Faint hairline grid for texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-page relative">
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
