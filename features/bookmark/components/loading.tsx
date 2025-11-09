import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
      <Skeleton className="h-[220px] bg-foreground w-[300px] xl:w-[360px] rounded-xl" />
      <Skeleton className="h-[220px] bg-foreground w-[300px] xl:w-[360px] rounded-xl" />
      <Skeleton className="h-[220px] bg-foreground w-[300px] xl:w-[360px] rounded-xl" />
      <Skeleton className="h-[220px] bg-foreground w-[300px] xl:w-[360px] rounded-xl" />
      <Skeleton className="h-[220px] bg-foreground w-[300px] xl:w-[360px] rounded-xl" />
      <Skeleton className="h-[220px] bg-foreground w-[300px] xl:w-[360px] rounded-xl" />
    </div>
  );
}
