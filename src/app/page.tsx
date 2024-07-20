import FaqSection from "@/app/(components)/faq.component";
import FeaturesSection from "@/app/(components)/features.component";
import HeroComponent from "@/app/(components)/hero.component";
import NavigationComponent from "@/app/(components)/navigation.component";
import TestimonialSection from "@/app/(components)/testimonial.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Startup Stack - An awesome starter kit",
  description: "Starter SAAS kit",
};
export default function Home() {
  return (
    <div className="bg-dotted-spacing-4 bg-dotted-neutral-200 dark:bg-dotted-neutral-800 flex flex-col px-10 lg:px-60 py-6 gap-40">
      <NavigationComponent />
      <HeroComponent />
      <TestimonialSection />
      <FeaturesSection />
      <section id="pricing" className="text-center flex flex-col gap-6">
        <h2 className="text-4xl lg:text-6xl font-semibold">Pricing</h2>
        <p className="text-lg lg:text-xl text-muted-foreground">
          Here are some of the features you&apos;re likely to see in the app.
        </p>
      </section>
      <FaqSection />
      <footer id="footer" className="flex justify-between">
        <h2 className="text-4xl lg:text-6xl font-semibold">Footer</h2>
        <p className="text-lg lg:text-xl text-muted-foreground">
          Here are some of the features you&apos;re likely to see in the app.
        </p>
      </footer>
    </div>
  );
}
