import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "../../animations/border-beam";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-32 w-full flex flex-row items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-5 p-2">
        <h1 className="scroll-m-20 text-4xl sm:text-4xl md:text-6xl font-semibold tracking-tight lg:text-7xl text-center bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text lg:w-2/3">
          Build & Ship Fast with the Ultimate Nextjs Starter Kit
        </h1>
        <p className=" text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400 lg:w-1/2">
          Everything you need to quickly build your SaaS, AI product, or any
          other web application fast giving you time to focus on what really
          matters
        </p>
        <div>
          <Link href="/dashboard" className="mt-5">
            <Button variant="default">Get Started</Button>
          </Link>
        </div>
        <div className="relative flex flex-col justify-center items-center mt-7 lg:w-2/3">
          <div className="rounded-xl">
            <img
              src="/dash-light.png"
              alt="Hero Image"
              className="block rounded-[inherit] border dark:border-neutral-800 object-contain shadow-lg dark:hidden"
            />
            <img
              src="/dash.png"
              alt="Hero Image"
              className="dark:block rounded-[inherit] border dark:border-neutral-800 object-contain shadow-lg hidden"
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </section>
  );
}
