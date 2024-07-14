"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export interface DashboardOnboardingComponentProps {
  redirectTo: string;
}
export default function DashboardOnboardingComponent(
  props: DashboardOnboardingComponentProps,
) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 lg:gap-2 min-h-[90vh] w-full text-black dark:text-white">
      <div className="dark:bg-black bg-gray-100 flex flex-1 items-center justify-center rounded-lg border border-dashed border-neutral-300 dark:border-neutral-600 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Looks like you haven&apos;t been here before.
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Let&apos;s get started, shall we?
          </p>
          <Button onClick={() => router.push(props.redirectTo)}>
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
