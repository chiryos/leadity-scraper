import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Where do the leads come from?",
    a: "We scrape publicly available business data from Google Maps and enrich it with live carrier validation so you only get mobile numbers.",
  },
  {
    q: "Are these really mobile numbers, or just numbers?",
    a: "Every number is checked against live carrier data before delivery. If a VOIP or landline slips through, you're covered by the refund + 50% bonus.",
  },
  {
    q: "How fast will I get my leads?",
    a: "Most orders under 5k Owners Mobiles are delivered the same day. 10k Owners Mobiles orders typically complete within 24 hours.",
  },
  {
    q: "What format are the leads delivered in?",
    a: "A clean CSV via email, or via webhook on the Scale plan. Columns include name, company, mobile, niche, location, and verified status.",
  },
  {
    q: "Can I pick a specific niche?",
    a: "Yes. Describe the niche in plain English — no SIC codes, no picklists. Examples: 'chiropractors in Miami', 'solar installers in Texas with 10+ employees'.",
  },
  {
    q: "How does the refund + 50% bonus work?",
    a: "If any lead is VOIP, a landline, or outside your niche, we automatically send you a replacement for the bad leads plus 50% of that amount as additional clean Owners Mobiles.",
  },
  {
    q: "Do I need to bring my own tools?",
    a: "No. Leadity replaces the Outscraper + Clearoutphone + spreadsheet workflow with a single product.",
  },
  {
    q: "Is there an affiliate / community price?",
    a: "Yes — members of Aditya's community get a standing discount. Toggle the switch on the pricing section to see it.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-py relative overflow-hidden">
      <div
        aria-hidden
        className="glow-blob"
        style={{
          width: 480,
          height: 480,
          left: "-140px",
          top: "30%",
          background:
            "radial-gradient(circle, rgba(34, 201, 245, 0.12) 0%, transparent 70%)",
        }}
      />
      <div className="relative container-page">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-eyebrow">FAQ</p>
            <h2 className="text-h2 text-balance mt-4 text-[var(--color-text-primary)]">
              Questions outbound teams actually ask.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-[720px]">
            <Accordion type="single" collapsible className="border-t border-[var(--color-border)]">
              {items.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
