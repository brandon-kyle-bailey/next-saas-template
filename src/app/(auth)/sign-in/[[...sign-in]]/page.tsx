"use client";
import FooterComponent from "@/components/custom/sections/landing-page/footer.component";
import { NavBarComponent } from "@/components/custom/nav-bar.component";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <NavBarComponent />
      <main className="dark:bg-black bg-white bg-dotted-spacing-4 bg-dotted-gray-200 dark:bg-dotted-neutral-900 flex flex-row items-center justify-center p-32">
        <SignIn />
      </main>
      <FooterComponent />
    </>
  );
}
