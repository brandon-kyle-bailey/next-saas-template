"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <main className="flex flex-col gap-2 lg:gap-2 w-full h-screen">
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You&apos;ve gotten lost somehow!
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            The page you&apos;re looking for either doesn&apos;t exist or is
            currently under construction.
          </p>
          <Button onClick={() => router.back()}>Take me back!</Button>
        </div>
      </div>
    </main>
  );
}
