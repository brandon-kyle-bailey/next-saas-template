import Stripe from "stripe";

import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import DashboardRedirectAction from "@/app/payments/(components)/actions/dashboard-redirect.component";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export const metadata: Metadata = {
  title: "The Startup Stack - Payment Successful",
  description: "Starter SAAS kit",
};

// TODO:... log user in and create session if possible?
export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      searchParams?.session_id as string,
    );
    console.log(session);
  } catch (error) {
    console.error(`error getting session: ${error}`);
  }

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Acme Inc
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-4xl font-semibold tracking-tight">Welcome!</h1>
            <p className="text-muted-foreground">
              Congratulations on your purchase! let&apos;s get you started. You
              will be redirected in a moment. If you&apos;re not redirected,
              click here
            </p>
            <Link href={"/dashboard"}>
              <Button>Let me in!</Button>
            </Link>
          </div>
        </div>
      </div>
      <DashboardRedirectAction url="/dashboard" delay={5000} />
    </div>
  );
}
