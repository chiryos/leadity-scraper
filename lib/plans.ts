export type Plan = {
  name: string;
  standard: number;
  affiliate: number;
  mobiles: number;
  popular: boolean;
  description: string;
  features: string[];
  cta: string;
  compareNote: string;
  badgeText?: string; // overrides "Most popular" when set
  isFree?: boolean; // suppresses strike-through + affiliate toggle effect
};

export const plans: Plan[] = [
  {
    name: "Free",
    standard: 0,
    affiliate: 0,
    mobiles: 400,
    popular: true,
    isFree: true,
    badgeText: "Start free",
    description:
      "Test data quality risk-free. Sign up in 30 seconds, no credit card needed.",
    features: [
      "400 verified Owners Mobiles",
      "Full mobile-only filter",
      "TCPA-aware export (DNC + line-type)",
      "CSV + Sheets export",
      "Real human in chat",
    ],
    cta: "Create free account",
    compareNote: "No credit card. No expiry. No catch.",
  },
  {
    name: "Starter",
    standard: 59,
    affiliate: 35,
    mobiles: 2000,
    popular: false,
    description: "For testing a new niche or running a first outbound campaign.",
    features: [
      "2,000 verified Owners Mobiles",
      "4× higher quality than legacy scrapers",
      "2× faster scraping",
      "Refund + 50% bonus on bad leads",
      "Live human support",
    ],
    cta: "Get 2k Owners Mobiles",
    compareNote: "vs. $67–$211 with Outscraper + Clearoutphone",
  },
  {
    name: "Growth",
    standard: 129,
    affiliate: 77,
    mobiles: 5000,
    popular: false,
    description: "For agencies and outbound teams running multiple campaigns.",
    features: [
      "5,000 verified Owners Mobiles",
      "Everything in Starter",
      "Priority scraping queue",
      "Dedicated account manager in chat",
      "CSV + webhook delivery",
    ],
    cta: "Get 5k Owners Mobiles",
    compareNote: "vs. $133–$522 with Outscraper + Clearoutphone",
  },
  {
    name: "Scale",
    standard: 229,
    affiliate: 137,
    mobiles: 10000,
    popular: false,
    description: "For teams running high-volume outbound or list-building at scale.",
    features: [
      "10,000 verified Owners Mobiles",
      "Everything in Growth",
      "Multi-niche splitting",
      "Same-day turnaround on most orders",
      "Private Slack channel with your AM",
    ],
    cta: "Get 10k Owners Mobiles",
    compareNote: "vs. $307–$1,053 with Outscraper + Clearoutphone",
  },
];
