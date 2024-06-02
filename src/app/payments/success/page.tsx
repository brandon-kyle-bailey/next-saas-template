import { Button } from "@/components/ui/button";
import Link from "next/link";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      searchParams?.session_id as string
    );
    console.log(session);
  } catch (error) {
    console.error(`error getting session: ${error}`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mt-[35vh] mb-3 scroll-m-20  text-5xl font-semibold tracking-tight transition-colors first:mt-0">
        Welcome to Nextjs Starter Kit 🎉
      </h1>
      <p className="leading-7 text-center w-[60%]">Let&apos;s get cooking</p>
      <Link href="/" className="mt-4">
        <Button>Access Dashboard</Button>
      </Link>
    </main>
  );
}
