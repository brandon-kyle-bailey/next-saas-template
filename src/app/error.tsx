"use client";
import { Metadata } from "next";
import GoBackButton from "@/components/custom/go-back.buttom";
import AuthenticationMarketingComponent from "@/components/custom/authentication-marketing.component";

export const metadata: Metadata = {
  title: "The Startup Stack - Error",
  description: "Some error",
};

export default function NotFoundPage() {
  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <AuthenticationMarketingComponent />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-4xl font-semibold tracking-tight">
              It&apos;s not you, it&apos;s me...
            </h1>
            <p className="text-muted-foreground">
              It appears something has gone wrong! Don&apos;t worry, we&apos;re
              looking into it.
            </p>
            <GoBackButton />
          </div>
        </div>
      </div>
    </div>
  );
}
