import FooterSection from "@/app/(components)/footer.component";
import NavigationSection from "@/app/(components)/navigation.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Startup Stack - An awesome starter kit",
  description: "Starter SAAS kit",
};
export default function RequestADemo() {
  return (
    <div className="min-h-screen bg-dotted-spacing-4 bg-dotted-neutral-200 dark:bg-dotted-neutral-800 flex flex-col px-10 lg:px-60 py-6 gap-20 lg:gap-40">
      <NavigationSection />
      <main className="">Request a demo</main>
      <FooterSection />
    </div>
  );
}
