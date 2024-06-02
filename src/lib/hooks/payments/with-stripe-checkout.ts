import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripeClient = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export function withStripeCheckout(): {
  createCheckoutSession: any;
  redirectToCheckout: any;
} {
  const createCheckoutSession = async (
    user: any,
    priceId: string,
    subscription: boolean
  ) => {
    try {
      console.log(user, priceId, subscription);
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_CREATE_STRIPE_CHECKOUT_SESSION_ENDPOINT!,
        {
          userId: user?.id,
          email: user?.emailAddresses?.[0]?.emailAddress,
          priceId,
          subscription,
        }
      );
      return data;
    } catch (error) {
      throw new Error(`createCheckoutSession encountered an error ${error}`);
    }
  };

  const redirectToCheckout = async (session: any) => {
    try {
      const stripe = await stripeClient;
      const response = await stripe?.redirectToCheckout({
        sessionId: session.sessionId,
      });
      return response;
    } catch (error) {
      throw new Error(`redirectToCheckout encountered an error ${error}`);
    }
  };

  return {
    createCheckoutSession,
    redirectToCheckout,
  };
}
