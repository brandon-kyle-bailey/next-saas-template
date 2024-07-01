"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center my-[5rem]">
      <SignIn />
    </div>
  );
}
