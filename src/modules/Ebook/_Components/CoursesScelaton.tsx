import { Skeleton } from '@/shadecn/components/ui/skeleton';

export default function EbookCardSkeleton(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-10">
      <Skeleton className="h-[450px] w-[356px] animate-pulse bg-gray-400/50"></Skeleton>
      <Skeleton className="h-[450px] w-[356px] animate-pulse bg-gray-400/50"></Skeleton>
      <Skeleton className="h-[450px] w-[356px] animate-pulse bg-gray-400/50"></Skeleton>
      <Skeleton className="h-[450px] w-[356px] animate-pulse bg-gray-400/50"></Skeleton>
    </div>
  );
}
