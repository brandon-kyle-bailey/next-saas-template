import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import {
  createSubscriptionAction,
  CreateSubscriptionActionProps,
} from "@/lib/db/prisma/actions/create/create-subscription.prisma.action";
import { updateInvoiceAction } from "@/lib/db/prisma/actions/update/update-invoice.prisma.action";
import { updateUserAction } from "@/lib/db/prisma/actions/update/update-user.prisma.action";
import { getUserAction } from "@/lib/db/prisma/actions/get/get-user.prisma.action";
import {
  createPaymentAction,
  CreatePaymentActionProps,
} from "@/lib/db/prisma/actions/create/create-payment.prisma.action";

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
      const stripeSubscription = event.data.object as Stripe.Subscription;
      const customer = await stripe.customers.retrieve(
        stripeSubscription.customer.toString()
      );
      if (customer.deleted) {
        return NextResponse.json({
          status: 500,
          error: "Customer does not exist.",
        });
      }
      const subscription: CreateSubscriptionActionProps = {
        subscription_id: stripeSubscription.id,
        stripe_user_id: stripeSubscription.customer.toString(),
        status: stripeSubscription.status,
        start_date: new Date(stripeSubscription.created * 1000).toISOString(),
        plan_id: stripeSubscription.items.data[0]?.price.id,
        user_id: stripeSubscription.metadata?.userId ?? "",
        email: customer.email!,
      };
      const result = await createSubscriptionAction(subscription);
      return NextResponse.json({
        status: 200,
        message: "customer.subscription.created received received successfully",
      });
    }
    if (event.type === "customer.subscription.updated") {
      console.log("customer.subscription.updated received");
      const stripeSubscription = event.data.object as Stripe.Subscription;
      const customer = await stripe.customers.retrieve(
        stripeSubscription.customer.toString()
      );
      if (customer.deleted) {
        return NextResponse.json({
          status: 500,
          error: "Customer does not exist.",
        });
      }
      const subscription = {
        subscription_id: stripeSubscription.id,
        stripe_user_id: stripeSubscription.customer,
        status: stripeSubscription.status,
        start_date: new Date(stripeSubscription.created * 1000).toISOString(),
        plan_id: stripeSubscription.items.data[0]?.price.id,
        user_id: stripeSubscription.metadata?.userId ?? "",
        email: customer.email,
      };
      return NextResponse.json({
        status: 200,
        message: "customer.subscription.updated received received successfully",
      });
    }
    if (event.type === "customer.subscription.deleted") {
      console.log("customer.subscription.deleted received");
      const stripeSubscription = event.data.object as Stripe.Subscription;
      const customer = await stripe.customers.retrieve(
        stripeSubscription.customer.toString()
      );
      if (customer.deleted) {
        return NextResponse.json({
          status: 500,
          error: "Customer does not exist.",
        });
      }
      const subscription = {
        subscription_id: stripeSubscription.id,
        stripe_user_id: stripeSubscription.customer,
        status: stripeSubscription.status,
        start_date: new Date(stripeSubscription.created * 1000).toISOString(),
        plan_id: stripeSubscription.items.data[0]?.price.id,
        user_id: stripeSubscription.metadata?.userId ?? "",
        email: customer.email,
      };
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
      const session = event.data.object as Stripe.Checkout.Session;
      const metadata = session.metadata;
      if (metadata?.subscription) {
        const subscriptionId = session.subscription;
        await stripe.subscriptions.update(subscriptionId as string, {
          metadata,
        });
        const updateInvoiceResult = await updateInvoiceAction({
          email: metadata!.email,
          user_id: metadata!.userId,
        });
        const updateUserResult = await updateUserAction({
          email: metadata!.email,
          subscription: session.id,
        });
      } else {
        const now = new Date(session.created * 1000).toISOString();
        const user = await getUserAction({ user_id: metadata!.userId });
        const payment: CreatePaymentActionProps = {
          stripe_id: session.id,
          email: metadata!.email,
          amount: String(session.amount_total! / 100),
          payment_time: now,
          payment_date: now,
          currency: session.currency!,
          user_id: metadata!.userId,
          customer_details: JSON.stringify(session.customer_details),
          payment_intent: session.payment_intent!.toString(),
        };
        const createPaymentResult = await createPaymentAction(payment);
        const credits =
          Number(user!.credits ?? 0) + (session.amount_total ?? 0) / 100;
        const updateUserResult = await updateUserAction({
          email: metadata!.email,
          credits: String(credits),
        });
      }
      return NextResponse.json({
        status: 200,
        message: "checkout.session.completed received received successfully",
      });
    }
    return NextResponse.json({
      status: 500,
      error: `Unhandled event type: ${event.type}`,
    });
  } catch (error) {
    console.error("Stripe webhook handler experienced an error", error);
    return NextResponse.json({
      status: 500,
      error,
    });
  }
}
