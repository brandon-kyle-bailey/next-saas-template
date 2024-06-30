"use client";
import FooterComponent from "@/components/custom/footer.component";
import { NavBarComponent } from "@/components/custom/nav-bar.component";
import BlogShowcaseSection from "@/components/custom/sections/landing-page/blog-showcase.section.component";
import FaqSection from "@/components/custom/sections/landing-page/faq.section.component";
import FeaturesSection from "@/components/custom/sections/landing-page/features.section.component";
import HeroSection from "@/components/custom/sections/landing-page/hero.section.component";
import PricingSection from "@/components/custom/sections/landing-page/pricing.section.component";
import SecondaryFeaturesSection from "@/components/custom/sections/landing-page/secondary-features.section.component";
import SocialProofSection from "@/components/custom/sections/landing-page/social-proof.section.component";

export default function Home() {
  return (
    <>
      <NavBarComponent />
      <main className="dark:bg-black bg-white bg-dotted-spacing-4 bg-dotted-gray-200 dark:bg-dotted-neutral-900 pb-32">
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <SecondaryFeaturesSection />
        <BlogShowcaseSection />
        <PricingSection />
        <FaqSection />
      </main>
      <FooterComponent />
    </>
  );
}
