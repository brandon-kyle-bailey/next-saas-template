"use client";
import { ModeToggleComponent } from "@/components/custom/mode-toggle.component";
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
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <ModeToggleComponent />
      <div className="flex flex-row items-center justify-evenly space-x-4">
        <Button
          onClick={() => {
            handleCheckout(user, "price_1PMLCOBPkmIjU4TJHCRHT0Om", true);
          }}
        >
          Purchase Basic Plan
        </Button>
        <Button
          onClick={() => {
            handleCheckout(user, "price_1PMLChBPkmIjU4TJfp6k50so", true);
          }}
        >
          Purchase Pro Plan
        </Button>
        <Button
          onClick={() => {
            handleCheckout(user, "price_1PMLD3BPkmIjU4TJdV1uoSPp", true);
          }}
        >
          Purchase Enterprise Plan
        </Button>
      </div>
      <div className="flex flex-row items-center justify-evenly space-x-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </main>
  );
}
