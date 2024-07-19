import { SkeletonCard } from "@/components/custom/skeleton-card.component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Startup Stack - Dashboard",
  description: "Starter SAAS kit",
};
export default function LoadingPage() {
  return (
    <div className="m-6">
      <SkeletonCard />
    </div>
  );
}
