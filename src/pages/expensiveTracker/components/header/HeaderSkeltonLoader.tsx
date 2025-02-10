import { Skeleton } from "../../../../components/ui/skeleton";

const HeaderSkeleton = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Title Skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton className="w-8 h-8" />
        <Skeleton className="h-8 w-40" />
      </div>

      {/* Expenses Card Skeleton */}
      <div className="bg-white rounded-lg shadow-md px-4 py-2">
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  );
};

export default HeaderSkeleton;
