import FaqSection from "@/app/(components)/faq.component";
import FeaturesSection from "@/app/(components)/features.component";
import FooterSection from "@/app/(components)/footer.component";
import HeroSection from "@/app/(components)/hero.component";
import NavigationSection from "@/app/(components)/navigation.component";
import PricingSection from "@/app/(components)/pricing.component";
import TestimonialSection from "@/app/(components)/testimonial.component";
import UseCaseSection from "@/app/(components)/use-case.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Startup Stack - An awesome starter kit",
  description: "Starter SAAS kit",
};
export default function Home() {
  return (
    <div className="min-h-screen bg-dotted-spacing-4 bg-dotted-neutral-200 dark:bg-dotted-neutral-800 flex flex-col px-10 lg:px-60 py-6 gap-20 lg:gap-40">
      <NavigationSection />
      <HeroSection />
      <TestimonialSection />
      <UseCaseSection />
      <FeaturesSection />
      <FaqSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
}
