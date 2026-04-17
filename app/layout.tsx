import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/smooth-scroll";
import { plans } from "@/lib/plans";

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

const siteUrl = "https://leadity.com";
const title =
  "Leadity Scraper — Scrape Google Maps. Get real mobiles.";
const description =
  "Leadity Scraper pulls business mobile numbers from Google Maps in your exact niche — carrier-verified, niche-precise, and exported as a clean CSV ready for SMS marketing. Trusted by 500+ creators and agencies.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Leadity Scraper",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Leadity Scraper",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/logo.png",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Leadity Scraper",
  description,
  brand: { "@type": "Brand", name: "Leadity Scraper" },
  offers: plans.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.standard.toString(),
    priceCurrency: "USD",
    description: p.description,
    availability: "https://schema.org/InStock",
  })),
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
        <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </body>
    </html>
  );
}
