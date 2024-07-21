import { Button } from "@/components/ui/button";
import { AreaChart, BadgeInfo, Banknote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const useCases = [
  {
    id: "1",
    description: "Some really compelling use case for this product!",
    symbol: () => {
      return <Banknote />;
    },
  },
  {
    id: "2",
    description: "Some really compelling use case for this product!",
    symbol: () => {
      return <AreaChart />;
    },
  },
  {
    id: "3",
    description: "Some really compelling use case for this product!",
    symbol: () => {
      return <BadgeInfo />;
    },
  },
];
export default function UseCaseSection() {
  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row gap-6 justify-evenly align-middle"
    >
      <Image
        src=""
        alt="Product showcase image"
        width="1920"
        height="1080"
        className="bg-muted-foreground h-full w-full rounded-lg shadow-2xl"
      />
      <div className="flex flex-col text-center justify-around lg:text-start w-full">
        <h1 className="text-4xl lg:text-4xl font-bold">
          Some amazing value proposition
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground">
          Here&apos;s some compelling reasons to use our product
        </p>
        <ul className="flex flex-col lg:p-6 gap-2 text-xl text-muted-foreground">
          {useCases.map((usecase) => {
            return (
              <li
                key={usecase.id}
                className="flex flex-row gap-4 border border-muted justify-start rounded-md bg-background shadow-lg p-4"
              >
                {usecase.symbol()}
                <p className="text-md">{usecase.description}</p>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center lg:justify-start gap-6">
          <Link href="/sign-up">
            <Button className="p-6">Get Started</Button>
          </Link>
          <Link href={"/request-a-demo"}>
            <Button className="shadow-lg p-6 bg-background border border-muted text-primary hover:text-background">
              Request a demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
