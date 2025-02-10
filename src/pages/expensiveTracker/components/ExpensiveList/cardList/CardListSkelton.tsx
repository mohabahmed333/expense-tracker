import { Skeleton } from "../../../../../components/ui/skeleton";
 
const CardListSkeleton = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-2">
          {/* Expense Description & Amount */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-40" /> {/* Expense Description */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-6 w-16" /> {/* Expense Amount */}
              <div className="flex gap-2">
                <Skeleton className="h-6 w-6 rounded-full" /> {/* Edit Button */}
                <Skeleton className="h-6 w-6 rounded-full" /> {/* Delete Button */}
              </div>
            </div>
          </div>

          {/* Expense Details (Date, Category, Payment Method) */}
          <div className="text-sm text-gray-500 flex flex-wrap gap-x-4">
            <Skeleton className="h-4 w-28" /> {/* Date */}
            <Skeleton className="h-4 w-20" /> {/* Category */}
            <Skeleton className="h-4 w-24" /> {/* Payment Method */}
          </div>

          {/* Notes (Optional) */}
          <Skeleton className="h-4 w-full mt-2" />
        </div>
      ))}
    </div>
  );
};

export default CardListSkeleton;
