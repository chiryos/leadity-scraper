import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-24 md:py-28 lg:py-[160px]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(34, 201, 245, 0.18) 0%, rgba(27, 134, 255, 0.06) 50%, transparent 75%)",
        }}
      />
      <div className="relative container-page">
        <Reveal>
          <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
            <h2 className="text-h2 text-balance text-[var(--color-text-primary)]">
              <span className="block">Stop stitching tools.</span>
              <span className="block">
                Start <span className="text-brand-gradient">shipping</span> lists.
              </span>
            </h2>
            <p className="mt-6 max-w-[640px] text-balance text-[18px] leading-[1.55] text-[var(--color-text-secondary)]">
              Your next 2,000 verified Owners Mobiles are one click away - with a refund
              policy that means you&apos;re never paying for bad data.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
              <Button asChild size="lg">
                <a href="#pricing">Get leads</a>
              </Button>
              <a
                href="mailto:hello@leadity.com"
                className="text-[14px] font-medium text-[var(--color-text-primary)] underline-offset-4 hover:underline"
              >
                Talk to a human →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
