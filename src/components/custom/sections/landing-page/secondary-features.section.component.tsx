import { CloudArrowUpIcon } from "@heroicons/react/20/solid";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { ServerIcon } from "lucide-react";
import { OrbitingCirclesComponent } from "../../animations/oribiting-circles.component";

export default function SecondaryFeaturesSection() {
  const secondary_features = [
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
    {
      id: 12,
      name: "Tanstack Query",
      description: "For client side fetching, caching, and revalidation.",
      image: "/tanstack.png",
    },
  ];
  return (
    <section
      id="secondary-features"
      className="pt-10 w-full flex flex-row items-center justify-center"
    >
      <div className="lg:w-2/3 p-4">
        <h1 className="scroll-m-20 text-3xl md:text-4xl tracking-tight font-semibold text-center">
          Built with the best
        </h1>
        <p className="text-gray-500 border-b dark:border-neutral-800 pb-4">
          Your customers deserve a product built with the best technologies
        </p>
        <div className="mt-5 flex flex-col lg:flex-row gap-5"></div>
      </div>
    </section>
  );
}
