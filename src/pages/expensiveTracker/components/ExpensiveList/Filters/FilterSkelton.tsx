import { Skeleton } from "../../../../../components/ui/skeleton";
 
const ExpenseFilterSkeleton = () => {
  return (
    <div className="mb-6 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Skeleton className="h-4 w-24 mb-1" /> {/* From Date Label */}
          <Skeleton className="h-10 w-full rounded-lg" /> {/* From Date Input */}
        </div>
        <div>
          <Skeleton className="h-4 w-24 mb-1" /> {/* To Date Label */}
          <Skeleton className="h-10 w-full rounded-lg" /> {/* To Date Input */}
        </div>
      </div>

      <div>
        <Skeleton className="h-4 w-32 mb-1" /> {/* Filter by Category Label */}
        <Skeleton className="h-10 w-full rounded-lg" /> {/* Category Dropdown */}
      </div>
    </div>
  );
};

export default ExpenseFilterSkeleton;
