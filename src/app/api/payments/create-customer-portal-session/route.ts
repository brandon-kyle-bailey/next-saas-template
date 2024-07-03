import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { userId, email, priceId, subscription } = await req.json();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { userId, email, subscription },
      mode: subscription ? "subscription" : "payment",
      success_url: `${process.env.FRONTEND_URL}/payments/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/payments/cancel`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ status: 200, sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
