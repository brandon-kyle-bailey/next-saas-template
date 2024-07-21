"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "1",
    productId: "price_1PMLCOBPkmIjU4TJHCRHT0Om",
    name: "Free",
    description: "What's included in the FREE plan",
    features: [
      "Freature 1",
      "Freature 2",
      "Freature 3",
      "Freature 4",
      "Freature 5",
    ],
    price: "$0",
  },
  {
    id: "2",
    productId: "price_1PMLCOBPkmIjU4TJHCRHT0Om",
    name: "Free",
    description: "What's included in the FREE plan",
    features: [
      "Freature 1",
      "Freature 2",
      "Freature 3",
      "Freature 4",
      "Freature 5",
    ],
    price: "$0",
  },
  {
    id: "3",
    productId: "price_1PMLCOBPkmIjU4TJHCRHT0Om",
    name: "Free",
    description: "What's included in the FREE plan",
    features: [
      "Freature 1",
      "Freature 2",
      "Freature 3",
      "Freature 4",
      "Freature 5",
    ],
    price: "$0",
  },
];

const stripeClient = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
export default function PricingSection() {
  const handleCheckout = async (productId: string) => {
    try {
      const { data } = await axios.post(
        `/api/payments/create-checkout-session`,
        {
          priceId: productId,
          subscription: true,
        },
      );

      console.log("data", data);
      if (data.sessionId) {
        const stripe = await stripeClient;
        console.log("stripe", stripe);

        const response = await stripe?.redirectToCheckout({
          sessionId: data.sessionId,
        });

        console.log("response", response);

        return response;
      } else {
        console.error("Failed to create checkout session");
        toast({ title: "Failed to create checkout session" });
        return;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      toast({ title: "Error during checkout" });
      return;
    }
  };
  return (
    <section id="pricing" className="text-center flex flex-col gap-6">
      <h2 className="text-4xl lg:text-6xl font-semibold">Pricing</h2>
      <p className="text-lg lg:text-xl text-muted-foreground">
        Here are some of the features you&apos;re likely to see in the app.
      </p>
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        {pricingPlans.map((plan) => {
          return (
            <div
              key={plan.id}
              className={cn(
                "flex flex-col gap-4 text-left border border-muted p-6 rounded-md bg-background shadow-lg lg:w-1/3",
                {
                  "ring ring-primary": plan.id === "2",
                },
              )}
            >
              <div className="flex flex-col-reverse lg:flex-row justify-between">
                <p className="text-2xl font-bold">{plan.name}</p>
                <Badge
                  className={cn("shadow-lg bg-primary hidden", {
                    flex: plan.id === "2",
                  })}
                >
                  Our most popular plan
                </Badge>
              </div>
              <div>
                <p className="text-xl font-medium">{plan.price}</p>
                <p className="text-sm font-normal text-muted-foreground">
                  billed Monthly
                </p>
              </div>
              <p className="text-md font-normal text-muted-foreground">
                {plan.description}
              </p>
              <ul className="flex flex-col gap-6 text-muted-foreground">
                {plan.features.map((feature) => {
                  return (
                    <li key={feature} className="flex flex-row gap-4">
                      <Check />
                      {feature}
                    </li>
                  );
                })}
              </ul>

              <Button
                onClick={() => {
                  handleCheckout(plan.productId);
                }}
                className={cn("w-full", {
                  "bg-primary": plan.id === "2",
                })}
              >
                Get Started
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
