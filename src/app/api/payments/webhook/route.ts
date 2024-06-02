import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const stripe_signature = req.headers.get("Stripe-Signature");
    const text = await req.text();
    const event = await stripe.webhooks.constructEventAsync(
      text,
      stripe_signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    if (event.type === "customer.subscription.created") {
      console.log("customer.subscription.created received");
      return NextResponse.json({
        status: 200,
        message: "customer.subscription.created received received successfully",
      });
    }
    if (event.type === "customer.subscription.updated") {
      console.log("customer.subscription.updated received");
      return NextResponse.json({
        status: 200,
        message: "customer.subscription.updated received received successfully",
      });
    }
    if (event.type === "customer.subscription.deleted") {
      console.log("customer.subscription.deleted received");
      return NextResponse.json({
        status: 200,
        message: "customer.subscription.deleted received received successfully",
      });
    }
    if (event.type === "invoice.payment_succeeded") {
      console.log("invoice.payment_succeeded received");
      return NextResponse.json({
        status: 200,
        message: "invoice.payment_succeeded received received successfully",
      });
    }
    if (event.type === "invoice.payment_failed") {
      console.log("invoice.payment_failed received");
      return NextResponse.json({
        status: 200,
        message: "invoice.payment_failed received received successfully",
      });
    }
    if (event.type === "checkout.session.completed") {
      console.log("checkout.session.completed received");
      return NextResponse.json({
        status: 200,
        message: "checkout.session.completed received received successfully",
      });
    }
  } catch (error) {
    console.error("Stripe webhook handler experienced an error", error);
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
