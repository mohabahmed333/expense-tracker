import { Skeleton } from "../../../../components/ui/skeleton";

const DailyOverviewSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="w-5 h-5" />
        <Skeleton className="h-6 w-40" />
      </div>

      <div className="space-y-4">
        {/* Total Today Skeleton */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-8 w-20" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <div className="space-y-2">
            {Array.from({ length: 1 }).map((_, index) => (
              <div key={index} className="flex justify-between items-center">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyOverviewSkeleton;
