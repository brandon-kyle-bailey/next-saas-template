import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroComponent() {
  return (
    <main id="hero" className="text-center lg:p-40 flex flex-col gap-6">
      <h1 className="text-4xl lg:text-8xl font-bold">
        The Startup Stack Starter Kit
      </h1>
      <p className="text-lg lg:text-xl text-muted-foreground">
        The all-in-one solution for launching your startup!
      </p>
      <div className="flex gap-6 justify-center">
        <Button className="p-6">Get Started</Button>
        <Button className="p-6 bg-background border border-neutral-200 text-primary">
          Request a demo
        </Button>
      </div>
      <Image
        src=""
        alt="Product showcase image"
        width="1920"
        height="1080"
        className="bg-muted-foreground h-full w-full rounded-lg"
      />
    </main>
  );
}
