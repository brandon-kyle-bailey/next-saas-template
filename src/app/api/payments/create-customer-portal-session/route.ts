import { getSubscriptionAction } from "@/lib/db/prisma/actions/get/get-subscription.prisma.action";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { userId, return_url } = await req.json();
    const subscription = await getSubscriptionAction({
      user_id: userId,
    });
    if (!subscription) {
      throw new Error("subscription not found.");
    }
    const session = await stripe.billingPortal.sessions.create({
      return_url: `${process.env.FRONTEND_URL}${return_url}`,
      customer: subscription.stripe_user_id,
    });

    console.log(session);

    return NextResponse.json({ status: 200, url: session.url });
  } catch (error) {
    console.error("Error creating billingPortal session:", error);
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
