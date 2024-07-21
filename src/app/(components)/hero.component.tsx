import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <main id="hero" className="flex flex-col lg:flex-row gap-6">
      <div className="flex flex-col justify-center gap-6 text-center lg:text-start">
        <h1 className="text-4xl lg:text-6xl font-bold">
          The Startup Stack Starter Kit
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground">
          The all-in-one solution for launching your startup!
        </p>
        <div className="flex justify-center lg:justify-start gap-6">
          <Button className="p-6">Get Started</Button>
          <Button className="shadow-lg p-6 bg-background border border-muted text-primary hover:text-background">
            Request a demo
          </Button>
        </div>
      </div>
      <Image
        src=""
        alt="Product showcase image"
        width="1920"
        height="1080"
        className="bg-muted-foreground h-full w-full rounded-lg shadow-2xl"
      />
    </main>
  );
}
