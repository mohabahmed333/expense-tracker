import { Skeleton } from "../../../../components/ui/skeleton";
import CardList from "./cardList/CardListSkelton";
import ExpenseFilterSkeleton from "./Filters/FilterSkelton";
 
const ExpensiveListSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Title Skeleton */}
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="w-5 h-5" /> {/* PieChart Icon Skeleton */}
        <Skeleton className="h-6 w-40" /> {/* Recent Expenses Title Skeleton */}
      </div>

      {/* Filters Skeleton */}
      <ExpenseFilterSkeleton />

      {/* Expenses List Skeleton */}
      <CardList />
    </div>
  );
};

export default ExpensiveListSkeleton;
