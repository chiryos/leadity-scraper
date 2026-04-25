import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AnalyticsProvider } from "@/components/analytics-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

// =============================================================================
// METADATA — production-ready, leadity.io canonical
// =============================================================================

export const metadata: Metadata = {
  metadataBase: new URL("https://leadity.io"),
  title: {
    default:
      "Leadity — Owner-Direct Mobile Numbers for US Local Business Outreach",
    template: "%s | Leadity",
  },
  description:
    "Direct mobile phone numbers for decision-makers at 2.4M+ US local businesses. Built for B2B cold-call and cold-SMS teams. Verified mobile-only data, 1,255+ categories, TCPA-aware export, from $59.",
  applicationName: "Leadity",
  keywords: [
    "business owner mobile numbers",
    "local lead generation",
    "B2B cold calling list",
    "cold SMS list",
    "google maps phone numbers",
    "local business leads",
    "decision maker direct dial",
    "owner direct mobile",
    "TCPA compliant lead list",
    "roofing leads",
    "solar leads",
    "HVAC leads",
    "pest control leads",
    "insurance agent leads",
    "SMMA leads",
    "outscraper alternative",
    "apollo alternative for SMB",
    "zoominfo alternative for SMB",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leadity.io",
    siteName: "Leadity",
    title:
      "Leadity — Owner-Direct Mobile Numbers for US Local Business Outreach",
    description:
      "Direct mobile lines for decision-makers across 1,255+ local business categories. Built for US cold callers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leadity — owner-direct mobile numbers for US local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Leadity — Owner-Direct Mobile Numbers for US Local Business Outreach",
    description:
      "Direct mobile lines for decision-makers across 1,255+ local business categories. Flat $59 for 2,000 verified mobiles.",
    images: ["/og-image.png"],
    // TODO: replace with real handle
    creator: "@leadity",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://leadity.io",
  },
  authors: [{ name: "Leadity", url: "https://leadity.io" }],
  category: "Sales Intelligence",
  // TODO: paste real verification codes from Google Search Console + Bing
  verification: {
    google: "",
    other: {
      "msvalidate.01": "",
    },
  },
  icons: {
    icon: "/logo.png",
  },
};

// =============================================================================
// SITE-WIDE JSON-LD: Organization + WebSite + SoftwareApplication
// (note: 5k tier is $129 — corrected from pack's $139)
// =============================================================================

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://leadity.io/#organization",
      name: "Leadity",
      legalName: "Leadity Inc.",
      url: "https://leadity.io",
      logo: {
        "@type": "ImageObject",
        "@id": "https://leadity.io/#logo",
        url: "https://leadity.io/logo.png",
        width: 512,
        height: 512,
        caption: "Leadity",
      },
      description:
        "Direct mobile phone numbers for decision-makers at 2.4M+ US local businesses. Built for B2B cold outreach teams.",
      foundingDate: "2024",
      areaServed: { "@type": "Country", name: "United States" },
      // TODO: confirm/update real social handles
      sameAs: [
        "https://twitter.com/leadity",
        "https://www.linkedin.com/company/leadity",
        "https://www.instagram.com/leadity",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@leadity.io",
        contactType: "customer support",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://leadity.io/#website",
      url: "https://leadity.io",
      name: "Leadity",
      description: "Owner-direct mobile numbers for US local business outreach",
      publisher: { "@id": "https://leadity.io/#organization" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://leadity.io/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://leadity.io/#software",
      name: "Leadity",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Sales Intelligence",
      operatingSystem: "Web",
      url: "https://leadity.io",
      description:
        "Extract verified owner-direct mobile numbers from Google Maps across 1,255+ US local business categories. Designed for cold-calling, cold-SMS, and B2B outreach teams.",
      offers: [
        {
          "@type": "Offer",
          name: "50 free owner mobiles",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "2,000 verified owner mobiles",
          price: "59",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "5,000 verified owner mobiles",
          price: "129",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "10,000 verified owner mobiles",
          price: "229",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "47",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Owner-direct mobile numbers (mobile-only, not landlines)",
        "1,255+ US business categories",
        "Niche × ZIP × state × metro filtering",
        "TCPA-aware export flags (DNC + line type)",
        "CSV, Google Sheets, HubSpot, Pipedrive, Close export",
        "Pay-as-you-go pricing, no subscription required",
        "MCP server for AI agent integration",
        "REST API + Python/Node SDKs",
      ],
      screenshot: "https://leadity.io/screenshots/dashboard.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-white text-[var(--color-text-primary)] antialiased">
        <SmoothScroll />
        <AnalyticsProvider />
        <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
