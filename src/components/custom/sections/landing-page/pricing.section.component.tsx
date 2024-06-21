import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const togglePricingPeriod = (value: string) =>
    setIsYearly(parseInt(value) === 1);
  const { user } = useUser();
  const handleCheckout = async (priceId: string, subscription: boolean) => {
    try {
      const { data } = await axios.post(
        `/api/payments/create-checkout-session`,
        {
          userId: user?.id,
          email: user?.emailAddresses?.[0]?.emailAddress,
          priceId,
          subscription,
        }
      );

      console.log("data", data);
      if (data.sessionId) {
        const stripe = await stripePromise;
        console.log("stripe", stripe);

        const response = await stripe?.redirectToCheckout({
          sessionId: data.sessionId,
        });

        console.log("response", response);

        return response;
      } else {
        console.error("Failed to create checkout session");
        toast("Failed to create checkout session");
        return;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      toast("Error during checkout");
      return;
    }
  };
  const plans = [
    {
      title: "Basic",
      monthlyPrice: 10,
      yearlyPrice: 100,
      description: "Essential features you need to get started",
      features: [
        "Example Feature Number 1",
        "Example Feature Number 2",
        "Example Feature Number 3",
      ],
      priceIdMonthly: "price_1PMLCOBPkmIjU4TJHCRHT0Om",
      priceIdYearly: "price_1PMLCOBPkmIjU4TJHCRHT0Om",
      actionLabel: "Get Started",
    },
    {
      title: "Pro",
      monthlyPrice: 25,
      yearlyPrice: 250,
      description: "Perfect for owners of small & medium businessess",
      features: [
        "Example Feature Number 1",
        "Example Feature Number 2",
        "Example Feature Number 3",
      ],
      actionLabel: "Get Started",
      priceIdMonthly: "price_1PMLChBPkmIjU4TJfp6k50so",
      priceIdYearly: "price_1PMLChBPkmIjU4TJfp6k50so",
      popular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Dedicated support and infrastructure to fit your needs",
      features: [
        "Example Feature Number 1",
        "Example Feature Number 2",
        "Example Feature Number 3",
        "Super Exclusive Feature",
      ],
      actionLabel: "Contact Sales",
      priceIdMonthly: "price_1PMLD3BPkmIjU4TJdV1uoSPp",
      priceIdYearly: "price_1PMLD3BPkmIjU4TJdV1uoSPp",
      exclusive: true,
    },
  ];
  return (
    <section
      id="pricing"
      className="pt-32 w-full flex flex-row items-center justify-center"
    >
      <div className="text-center">
        <h2 className="text-3xl lg:text-5xl font-bold">
          Some sample pricing data
        </h2>
        <p className="text-lg text-gray-400 pt-1">
          Use these pricing cards in your saas
        </p>
        <Tabs
          defaultValue="0"
          className="mt-7 w-40 mx-auto"
          onValueChange={togglePricingPeriod}
        >
          <TabsList className="py-6 px-2">
            <TabsTrigger value="0" className="text-base">
              Monthly
            </TabsTrigger>
            <TabsTrigger value="1" className="text-base">
              Yearly
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
          {plans.map((plan) => {
            return (
              <Card
                key={plan.priceIdMonthly}
                className={cn(
                  `gap-4 w-72 flex flex-col justify-between py-1 ${
                    plan.popular ? "border-rose-400" : "border-zinc-700"
                  } mx-auto sm:mx-0`,
                  {
                    "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
                      plan.exclusive,
                  }
                )}
              >
                <CardHeader>
                  {isYearly && plan.yearlyPrice && plan.monthlyPrice ? (
                    <div className="flex justify-between">
                      <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
                        {plan.title}
                      </CardTitle>
                      <div
                        className={cn(
                          "px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white",
                          {
                            "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ":
                              plan.popular,
                          }
                        )}
                      >
                        Save ${plan.monthlyPrice * 12 - plan.yearlyPrice}
                      </div>
                    </div>
                  ) : (
                    <CardTitle className="text-start text-zinc-700 dark:text-zinc-300 text-lg">
                      {plan.title}
                    </CardTitle>
                  )}
                  <div className="flex gap-0.5">
                    <h3 className="text-3xl font-bold">
                      {plan.yearlyPrice && isYearly
                        ? "$" + plan.yearlyPrice
                        : plan.monthlyPrice
                        ? "$" + plan.monthlyPrice
                        : "Custom"}
                    </h3>
                    <span className="flex flex-col justify-end text-sm mb-1">
                      {plan.yearlyPrice && isYearly
                        ? "/year"
                        : plan.monthlyPrice
                        ? "/month"
                        : null}
                    </span>
                  </div>
                  <CardDescription className="text-start">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  {plan.features.map((feature) => {
                    return (
                      <div key={feature} className="flex gap-2">
                        <CheckCircle2
                          size={18}
                          className="my-auto text-green-400"
                        />
                        <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">
                          {feature}
                        </p>
                      </div>
                    );
                  })}
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() =>
                      handleCheckout(
                        isYearly ? plan.priceIdYearly : plan.priceIdMonthly,
                        true
                      )
                    }
                    className="w-full"
                  >
                    {plan.actionLabel}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </section>
      </div>
    </section>
  );
}
