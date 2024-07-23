"use client";
import { ModeToggleComponentThemeNames } from "@/components/custom/mode-toggle.component";
import { Button } from "@/components/ui/button";
import { AreaChart, BadgeInfo, Banknote } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
const useCases = [
  {
    id: "1",
    description: "Some really compelling use case for this product!",
    symbol: () => {
      return <Banknote className="w-8 h-8" />;
    },
  },
  {
    id: "2",
    description: "Some really compelling use case for this product!",
    symbol: () => {
      return <AreaChart className="h-8 w-8" />;
    },
  },
  {
    id: "3",
    description: "Some really compelling use case for this product!",
    symbol: () => {
      return <BadgeInfo className="h-8 w-8" />;
    },
  },
];
export default function UseCaseSection() {
  const { theme } = useTheme();
  return (
    <section
      id="use-case"
      className="flex flex-col lg:flex-row gap-6 justify-evenly align-middle"
    >
      <Image
        src={
          theme === ModeToggleComponentThemeNames.LIGHT
            ? "/settings_light.png"
            : "/settings_dark.png"
        }
        alt="Product showcase image"
        width="1920"
        height="1080"
        className="bg-muted-foreground h-full w-full rounded-lg shadow-2xl dark:shadow-primary"
      />
      <div className="flex flex-col max-sm:gap-4 text-center justify-around lg:text-start w-full">
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
                className="flex flex-row gap-4 border border-muted justify-center lg:justify-start align-middle items-center text-center rounded-md bg-background shadow-lg p-4"
              >
                {usecase.symbol()}
                <p className="text-sm text-start">{usecase.description}</p>
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
