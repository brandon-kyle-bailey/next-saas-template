"use client";
import FooterComponent from "@/components/custom/footer.component";
import { NavBarComponent } from "@/components/custom/nav-bar.component";
import CtaSection from "@/components/custom/sections/landing-page/cta.section.component";
import FaqSection from "@/components/custom/sections/landing-page/faq.section.component";
import FeaturesSection from "@/components/custom/sections/landing-page/features.section.component";
import HeroSection from "@/components/custom/sections/landing-page/hero.section.component";
import PricingSection from "@/components/custom/sections/landing-page/pricing.section.component";
import SecondaryFeaturesSection from "@/components/custom/sections/landing-page/secondary-features.section.component";
import TestimonialSection from "@/components/custom/sections/landing-page/testimonial.section.component";

export default function Home() {
  return (
    <>
      <NavBarComponent />
      <main className="dark:bg-black bg-white bg-dotted-spacing-4 bg-dotted-gray-200 dark:bg-dotted-neutral-900 pb-32">
        <HeroSection />
        <div className="mt-32">
          <FeaturesSection />
        </div>
        <TestimonialSection />
        <SecondaryFeaturesSection />
        <div className="mt-32">
          <PricingSection />
        </div>
        <div className="mt-32">
          <FaqSection />
        </div>
        <div className="mt-32">
          <CtaSection />
        </div>
      </main>
      <FooterComponent />
    </>
  );
}
