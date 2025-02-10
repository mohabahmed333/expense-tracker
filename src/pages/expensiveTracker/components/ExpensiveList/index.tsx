import { PieChart } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { expensesApi } from "../../api/expenses";
import CardList from "./cardList";
import Filters from "./Filters";
import { tags } from "../../../../constants/tags";
import searchParamsUtils from "../../../../lib/searchParams";
import CardListSkeleton from "./cardList/CardListSkelton";

const ExpensiveList = () => {
  const { getAllSearchParams } = searchParamsUtils();
  const [searchParams, setSearchParams] = useState(getAllSearchParams());
  const {
    data: expenses = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [tags.expensive, searchParams],
    queryFn: () =>
      expensesApi.getFiltered({
        startDate: searchParams.start,
        endDate: searchParams.end,
        category: searchParams.category,
      }),
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-3 max-h-fit">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <PieChart className="w-5 h-5 text-primary" />
        Recent Expenses
      </h2>

      <Filters searchParams={searchParams} setSearchParams={setSearchParams} />
      {isLoading || isFetching ? <CardListSkeleton /> : null}
      <CardList expenses={expenses} />
    </div>
  );
};

export default ExpensiveList;
