import {
  BarChart3,
  Filter,
  LayoutDashboard,
  RefreshCw,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

type Tone = "blue" | "mint" | "amber" | "green";

type Feature = {
  badge: string;
  tone: Tone;
  title: string;
  body: string;
  icon: LucideIcon;
};

const tones: Record<Tone, { bg: string; text: string; iconBg: string; iconColor: string }> = {
  blue: {
    bg: "bg-[#EAF4FF]",
    text: "text-[#0B5394]",
    iconBg: "bg-[#EAF4FF]",
    iconColor: "text-[#0B5394]",
  },
  mint: {
    bg: "bg-[#DDFAF1]",
    text: "text-[#0A6E54]",
    iconBg: "bg-[#DDFAF1]",
    iconColor: "text-[#0A6E54]",
  },
  amber: {
    bg: "bg-[#FFF1D1]",
    text: "text-[#8A5A00]",
    iconBg: "bg-[#FFF1D1]",
    iconColor: "text-[#8A5A00]",
  },
  green: {
    bg: "bg-[#E5F8DC]",
    text: "text-[#266A12]",
    iconBg: "bg-[#E5F8DC]",
    iconColor: "text-[#266A12]",
  },
};

const features: Feature[] = [
  {
    badge: "Core",
    tone: "mint",
    title: "Instant lead capture",
    body: "Every Google Maps listing in your niche becomes a structured lead. Nothing slips through. Every record has a next step.",
    icon: Zap,
  },
  {
    badge: "AI-Powered",
    tone: "blue",
    title: "Mobile-only classification",
    body: "Live carrier checks split mobiles from VoIPs and landlines. You only pay for numbers your SMS stack can actually text.",
    icon: ShieldCheck,
  },
  {
    badge: "Smart Filter",
    tone: "mint",
    title: "Niche-precise scraping",
    body: "1,255+ business categories, full-US coverage by state or ZIP. Scrape one niche or a dozen - clean results either way.",
    icon: Filter,
  },
  {
    badge: "Always On",
    tone: "green",
    title: "Speed-tunable workers",
    body: "Careful, balanced, or aggressive scraping. Pick the throughput that matches your rate limits and timeline.",
    icon: RefreshCw,
  },
  {
    badge: "Critical",
    tone: "amber",
    title: "Live pipeline tracking",
    body: "Total leads, today, this week, this month. Every active job tracked with a queue-depth chart you can actually read.",
    icon: BarChart3,
  },
  {
    badge: "Visibility",
    tone: "blue",
    title: "Centralized dashboard",
    body: "Every job. Every batch. Every classification. One screen to see what's running, what landed, and what's next.",
    icon: LayoutDashboard,
  },
];

export function Features() {
  return (
    <section id="features" className="section-py relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(34, 201, 245, 0.16) 0%, rgba(27, 134, 255, 0.06) 40%, transparent 75%)",
        }}
      />
      <div className="relative container-page">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-eyebrow">What it does</p>
            <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
              <span className="block">Scrape. Classify.</span>
              <span className="block text-brand-gradient">Export.</span>
            </h2>
            <p className="mt-5 max-w-[640px] mx-auto text-balance text-[18px] leading-[1.55] text-[var(--color-text-secondary)]">
              One scraper that pulls from Google Maps, splits mobiles from
              landlines, and drops a clean CSV in your inbox. No second tool.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const t = tones[f.tone];
            const Icon = f.icon;
            return (
              <StaggerItem
                key={f.title}
                // Glassmorphism — semi-transparent bg + backdrop-blur over the
                // section's grid pattern for a premium frosted look.
                // Transforms are owned by framer-motion; only border + shadow
                // animate via CSS to avoid fighting the stagger intro.
                className="group rounded-2xl border border-white/60 bg-white/55 p-7 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.15)] backdrop-blur-xl transition-[border-color,box-shadow] duration-200 hover:border-white/90 hover:shadow-[0_18px_40px_-22px_rgba(27,134,255,0.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${t.bg} ${t.text}`}
                  >
                    {f.badge}
                  </span>
                  <span
                    aria-hidden
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${t.iconBg} ${t.iconColor}`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                </div>
                <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-[var(--color-text-secondary)]">
                  {f.body}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
