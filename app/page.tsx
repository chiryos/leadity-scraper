import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Showcase } from "@/components/showcase";
import { Features } from "@/components/features";
import { Comparison } from "@/components/comparison";
import { Pricing } from "@/components/pricing";
import { Guarantee } from "@/components/guarantee";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { SignupPopup } from "@/components/signup-popup";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <Comparison />
        <Pricing />
        <Guarantee />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <SignupPopup />
    </>
  );
}
