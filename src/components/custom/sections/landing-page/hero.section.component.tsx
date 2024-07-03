import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "../../animations/border-beam";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 flex flex-row justify-center">
      <div className="flex flex-col items-center justify-center gap-4 lg:w-2/3 p-4">
        <h1 className="lg:w-3/4 text-4xl md:text-6xl lg:text-7xl font-semibold text-center tracking-tight bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 text-transparent bg-clip-text">
          Build & Ship Fast with the Ultimate Nextjs Starter Kit
        </h1>
        <p className="lg:w-1/2 text-center md:text-lg mt-2 text-gray-500  dark:text-gray-400">
          Everything you need to quickly build your SaaS, AI product, or any
          other web application fast giving you time to focus on what really
          matters
        </p>
        <div className="flex justify-center items-center gap-3">
          <Link href="/dashboard" className="mt-5">
            <Button
              size="sm"
              className="animate-pulse rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white"
            >
              Get Started Completely Free!
            </Button>
          </Link>
          <Link href="/book-a-demo" target="_blank" className="mt-5">
            <Button
              size="sm"
              variant="outline"
              className="flex gap-1 text-blue-600 hover:text-blue-600 hover:bg-blue-100"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
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
