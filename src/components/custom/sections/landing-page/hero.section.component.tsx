import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "../../animations/border-beam";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 flex flex-row justify-center">
      <div className="flex flex-col items-center justify-center gap-4 lg:w-2/3 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 text-transparent bg-clip-text">
          Build & Ship Fast with the Ultimate Nextjs Starter Kit
        </h1>
        <p className="text-center md:text-lg mt-2 text-gray-500  dark:text-gray-400">
          Everything you need to quickly build your SaaS, AI product, or any
          other web application fast giving you time to focus on what really
          matters
        </p>
        <div>
          <Link href="/dashboard">
            <Button variant="default">Get Started</Button>
          </Link>
        </div>
        <div className="relative flex max-w-6xl justify-center overflow-hidden">
          <div className="relative rounded-xl">
            <img
              src="/dash-light.png"
              alt="Hero Image"
              className="block dark:hidden shadow-lg dark:border-neutral-800 border rounded-[inherit]"
            />
            <img
              src="/dash.png"
              alt="Hero Image"
              className="hidden dark:block shadow-lg dark:border-neutral-800 border rounded-[inherit]"
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </section>
  );
}
