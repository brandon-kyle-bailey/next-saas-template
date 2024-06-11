"use client";
import FooterComponent from "@/components/custom/footer.component";
import { ModeToggleComponent } from "@/components/custom/mode-toggle.component";
import { NavBarComponent } from "@/components/custom/nav-bar.component";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { handleCheckout } from "@/lib/functions/payments/checkout/handle-checkout";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <NavBarComponent />
      <main>
        <section className="w-full flex flex-row items-center justify-center mt-32 mb-32">
          <div className="flex flex-col w-[70%] lg:w-[50%]">
            <h1 className="scroll-m-20 pb-[3rem] text-center text-3xl font-semibold tracking-tight lg:text-4xl">
              Frequently Asked Questions (FAQs)
            </h1>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Do I get access to this landing page in the starter kit?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, this page isn&apos;t even a real landingpage more so a
                  template for you to build on
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
