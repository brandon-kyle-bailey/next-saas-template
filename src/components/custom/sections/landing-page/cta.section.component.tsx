import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section id="cta" className="w-full flex flex-col justify-center gap-8">
      <h1 className="text-3xl lg:text-5xl font-bold text-center">
        Ready to get started?
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Link href="/dashboard">
          <Button className="animate-pulse rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white">
            Get Started Completely Free!
          </Button>
        </Link>
        <Link href="/book-a-demo" target="_blank">
          <Button
            variant="outline"
            className="flex gap-1 text-blue-600 hover:text-blue-600 hover:bg-blue-100"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
