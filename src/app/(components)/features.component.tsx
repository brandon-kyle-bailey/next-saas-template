"use client";
import Image from "next/image";
import { ModeToggleComponentThemeNames } from "@/components/custom/mode-toggle.component";
import { useTheme } from "next-themes";

const features = [
  {
    id: 1,
    name: "Nextjs 14",
    description:
      "A framework for React that enables server-side rendering and effortless deployment.",
    image: "/nextjs.svg",
    imageDark: "/nextjs-dark.png",
  },
  {
    id: 2,
    name: "TypeScript",
    description:
      "A typed superset of JavaScript that enhances code maintainability and scalability.",
    image: "/typescript.png",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for building custom designs with ease.",
    image: "/tailwind.png",
  },
  {
    id: 4,
    name: "Shadcn UI",
    description: "Beautifully designed components by Shadcn.",
    image: "/shadcn.png",
    imageDark: "/shadcn-dark.png",
  },
  {
    id: 5,
    name: "Syntax UI",
    description: "Beautifully designed components by Syntax UI.",
    image: "/syntaxUI.svg",
  },
  {
    id: 6,
    name: "MagicUI",
    description: "Beautifully designed components by Magic UI.",
    image: "/magicui.png",
  },
  {
    id: 7,
    name: "Postgres (Supabase)",
    description:
      "PostgreSQL-based open-source database with Supabase for building scalable applications.",
    image: "/supabase.png",
  },
  {
    id: 8,
    name: "Prisma ORM",
    description:
      "Modern database toolkit for TypeScript and Node.js, simplifying database interactions.",
    image: "/prisma.png",
  },
  {
    id: 9,
    name: "Clerk Authentication",
    description:
      "Seamless and secure authentication service for web applications.",
    image: "/clerk.png",
  },
  {
    id: 10,
    name: "Stripe Subsctiptions & One time payments",
    description:
      "Payment processing solution for handling subscriptions and one-off transactions securely.",
    image: "/stripe.png",
  },
  {
    id: 11,
    name: "Upstash (Redis)",
    description: "Redis-based cloud database service for rate-limiting.",
    image: "/upstash.png",
  },
];
export default function FeaturesSection() {
  const { theme } = useTheme();
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="scroll-m-20 pb-[3rem] text-center text-3xl font-semibold tracking-tight lg:text-4xl">
        Built with the best
      </h1>
      <p className="text-lg lg:text-xl text-muted-foreground">
        Here are some of the features you&apos;re likely to see in the app.
      </p>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => {
          return (
            <div
              className="mt-5 text-left border border-muted p-6 rounded-md bg-background shadow"
              key={feature.id}
            >
              <Image
                src={
                  feature?.imageDark &&
                  theme === ModeToggleComponentThemeNames.DARK
                    ? feature.imageDark
                    : feature.image
                }
                width={40}
                height={30}
                className="mb-3 rounded"
                alt={feature.name}
              />
              <p className="text-sm font-medium">{feature.name}</p>
              <p className="text-sm font-normal text-gray-500">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
