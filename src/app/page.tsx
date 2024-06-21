"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FooterComponent from "@/components/custom/footer.component";
import { NavBarComponent } from "@/components/custom/nav-bar.component";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { BorderBeam } from "@/components/custom/animations/border-beam";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { OrbitingCirclesComponent } from "@/components/custom/animations/oribiting-circles.component";
import { CheckCircle2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

function HeroSection() {
  return (
    <section className="pt-32 w-full flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 p-2">
        <h1 className="scroll-m-20 text-4xl sm:text-4xl md:text-6xl font-semibold tracking-tight lg:text-7xl text-center bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text lg:w-2/3">
          Build & Ship Fast with the Ultimate Nextjs Starter Kit
        </h1>
        <p className=" text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400 lg:w-1/2">
          Everything you need to quickly build your SaaS, AI product, or any
          other web application fast giving you time to focus on what really
          matters
        </p>
        <div>
          <Link href="/dashboard" className="mt-5">
            <Button variant="default">Get Started</Button>
          </Link>
        </div>
        <div className="relative flex flex-col justify-center items-center mt-7 lg:w-2/3">
          <div className="rounded-xl">
            <img
              src="/dash-light.png"
              alt="Hero Image"
              className="block rounded-[inherit] border dark:border-neutral-800 object-contain shadow-lg dark:hidden"
            />
            <img
              src="/dash.png"
              alt="Hero Image"
              className="dark:block rounded-[inherit] border dark:border-neutral-800 object-contain shadow-lg hidden"
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const logos = [
    {
      name: "Prime",
      url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg",
    },
    {
      name: "Trustpilot",
      url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg",
    },
    {
      name: "Webflow",
      url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
    },

    {
      name: "Airbnb",
      url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg",
    },
    {
      name: "Tina",
      url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg",
    },
    {
      name: "Stackoverflow",
      url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg",
    },
    {
      name: "mistral",
      url: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg",
    },
  ];
  return (
    <section className="pt-32 w-full flex flex-row justify-center dark:hidden">
      <div className="w-3/4 px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-10 w-28 px-2"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      name: "Build faster.",
      description:
        "Get up and running in no time with pre-configured settings and best practices. Say goodbye to setup and focus on what truly matters - building your application.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Focus on business logic.",
      description:
        "Concentrate on solving business problems instead of dealing with the repetitive setup.",
      icon: LockClosedIcon,
    },
    {
      name: "Ready for scale.",
      description:
        "Prepare for growth from day one. With built-in optimizations and scalable architecture, your application will be ready to handle increased traffic and complexity.",
      icon: ServerIcon,
    },
  ];
  return (
    <section className="pt-32 w-full flex flex-row items-center justify-center">
      <div className="flex flex-col lg:flex-row lg:w-2/3 gap-5 p-4">
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Cook faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight  dark:text-white text-gray-900 sm:text-4xl">
            A faster way to production
          </p>
          <p className="mt-6 text-lg leading-8  dark:text-gray-400 text-gray-600">
            Accelerate your development with this powerful Next.js boilerplate
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold dark:text-gray-100 text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <OrbitingCirclesComponent />
      </div>
    </section>
  );
}

function BlogShowcaseSection() {
  const articles = [
    {
      id: 1,
      image:
        "https://seo-heist.s3.amazonaws.com/user_2cxTR5I0BjOLeNCnee3qUze0LUo/1af01aca-6ce1-4a3f-8e54-e945e3104889.png",
      title: "The Importance of Storytelling in Modern Branding",
      date: "2024-04-15 21:16:04.765648-05",
    },
    {
      id: 2,
      image:
        "https://seo-heist.s3.amazonaws.com/user_2cxTR5I0BjOLeNCnee3qUze0LUo/96bf3bb0-9e15-4745-b966-91d719651429.png",
      title: "How to Choose the Right Dog for Your Lifestyle",
      date: "2024-04-16 08:29:32.188999-05",
    },
    {
      id: 3,
      image:
        "https://seo-heist.s3.amazonaws.com/user_2cxTR5I0BjOLeNCnee3qUze0LUo/36292d36-cfae-4106-8d59-ace222f4bc82.png",
      title: "Top Automation Testing Suites for Seamless Software Testing",
      date: "2024-04-16 15:20:52.368844-05",
    },
  ];
  return (
    <section className="pt-32 w-full flex flex-row justify-center">
      <div className="lg:w-2/3 w-[70%]">
        <h1 className="scroll-m-20 text-3xl md:text-4xl tracking-tight font-semibold">
          Some sample blog posts
        </h1>
        <p className="text-gray-500 border-b dark:border-neutral-800 pb-4">
          Some brief description of blog posts here
        </p>
        <div className="mt-5 flex flex-col lg:flex-row gap-5">
          {articles.map((article) => (
            <Link href={"/"} key={article?.id}>
              <article className="flex flex-col space-y-2 p-4 rounded-md border dark:bg-black">
                <Image
                  src={article?.image!}
                  alt={""}
                  width={804}
                  height={452}
                  className="rounded-md border dark:border-neutral-800 bg-muted transition-colors"
                />
                <h2 className="text-md lg:text-lg font-bold">
                  {article?.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {new Date(article?.date!)?.toLocaleDateString()}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
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
    <section className="pt-32 w-full flex flex-row items-center justify-center">
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

function FaqSection() {
  return (
    <section className="pt-32 w-full flex flex-row items-center justify-center">
      <div className="flex flex-col w-[70%] lg:w-[50%]">
        <h1 className="scroll-m-20 pb-[3rem] text-center text-3xl font-semibold tracking-tight lg:text-4xl">
          Frequently Asked Questions (FAQs)
        </h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="dark:border-neutral-800">
            <AccordionTrigger>
              Do I get access to this landing page in the starter kit?
            </AccordionTrigger>
            <AccordionContent>
              Yes, this page isn&apos;t even a real landingpage more so a
              template for you to build on
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default function Home() {
  const { user } = useUser();
  return (
    <>
      <NavBarComponent />
      <main className="dark:bg-black bg-white bg-dotted-spacing-4 bg-dotted-gray-200 dark:bg-dotted-neutral-900 pb-32">
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <BlogShowcaseSection />
        <PricingSection />
        <FaqSection />
      </main>
      <FooterComponent />
    </>
  );
}
