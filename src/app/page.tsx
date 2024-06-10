"use client";
import FooterComponent from "@/components/custom/footer.component";
import { ModeToggleComponent } from "@/components/custom/mode-toggle.component";
import { NavBarComponent } from "@/components/custom/nav-bar.component";
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
      <main className="h-96">Hello world!</main>
      <FooterComponent />
    </>
  );
}
