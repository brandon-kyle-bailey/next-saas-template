import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Cancel() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mt-[20rem] scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Payment Cancelled 😢
      </h1>
      <p className="leading-7">The good news is, you can try again 😊</p>
      <div className="mt-5">
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </div>
    </main>
  );
}
