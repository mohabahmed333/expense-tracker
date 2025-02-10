import { Skeleton } from "../../../../components/ui/skeleton";

const ExpenseFormSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Title Skeleton */}
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="w-5 h-5" />
        <Skeleton className="h-6 w-40" />
      </div>

      <form className="space-y-4">
        <div>
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>

        <div>
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>

        <div>
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>

        <div>
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>

        <div>
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>

        <div>
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-20 w-full rounded-lg" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-10 w-32 rounded-lg" />
          <Skeleton className="h-10 w-24 rounded-lg" />
        </div>
      </form>
    </div>
  );
};

export default ExpenseFormSkeleton;
