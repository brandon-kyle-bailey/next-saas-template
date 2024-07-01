"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center my-[5rem]">
      <SignUp />
    </div>
  );
}
