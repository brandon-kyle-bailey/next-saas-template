import { withStripeCheckout } from "@/lib/hooks/payments/with-stripe-checkout";
import { toast } from "sonner";

export const handleCheckout = async (
  user: any,
  productId: string,
  subscription: boolean
) => {
  try {
    const { createCheckoutSession, redirectToCheckout } = withStripeCheckout();
    const session = await createCheckoutSession(user, productId, subscription);
    if (!session.sessionId) {
      console.error(`Failed to create checkout session: ${session}`);
      toast.error("Failed to create checkout session");
      return;
    }
    return await redirectToCheckout(session);
  } catch (error) {
    console.error(`handleCheckout encountered an error: ${error}`);
    toast.error("Failed to create checkout session");
    return;
  }
};
