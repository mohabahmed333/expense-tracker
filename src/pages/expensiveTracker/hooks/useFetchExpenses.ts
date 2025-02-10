import { useQuery } from "@tanstack/react-query";
import { expensesApi } from "../api/expenses";
import { tags } from "@/constants/tags";
import { TExpense } from "@/ts/types/Expensive";

export const UseFetchExpenses = () => {
  return useQuery<TExpense[]>({
    queryFn: expensesApi.getAll,
    queryKey: [tags.expensive],
  });
};
