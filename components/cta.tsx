import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

/**
 * Closing CTA — the climactic blue-gradient card that lands right before
 * the footer. Mirrors the Ours comparison card and the Growth pricing card
 * so the page closes on a consistent, unmistakable brand moment.
 */
export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
      {/* Soft ambient glow under the card so it feels like it's floating */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[520px]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />

      <div className="container-page relative">
        <Reveal>
          <div
            className="glass-brand relative mx-auto max-w-[1120px] overflow-hidden rounded-[28px] px-6 py-14 text-white md:rounded-[32px] md:px-14 md:py-20 lg:px-20 lg:py-24"
          >
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

            <div className="relative flex flex-col items-center text-center">
              {/* White ghost logo — flat, no shadow, no halo */}
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

              {/* Headline — concrete, benefit-anchored, ties to the 5k plan */}
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

              {/* Subtitle — cut filler, keep the guarantee anchor */}
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
