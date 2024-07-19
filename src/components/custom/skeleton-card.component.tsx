import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-6 h-full w-full">
      <div className="w-full h-full flex flex-col space-y-4">
        <Skeleton className="w-1/2 h-8 rounded-xl" />
        <Skeleton className="w-2/3 h-8 rounded-xl" />
        <Skeleton className="w-1/4 h-8 rounded-xl" />
      </div>
      <div className="w-full h-full flex flex-col space-y-4">
        <Skeleton className="w-1/3 h-40 rounded-xl" />
        <Skeleton className="w-1/2 h-8 rounded-xl" />
        <Skeleton className="w-1/4 h-8 rounded-xl" />
      </div>
    </div>
  );
}
