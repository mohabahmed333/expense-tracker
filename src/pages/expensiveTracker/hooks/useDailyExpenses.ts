import { TExpense } from "@/ts/types/Expensive";
import { isSameDay, parse } from "date-fns";
import { useMemo } from "react";

const useDailyExpenses = ({ expenses }: { expenses: TExpense[] }) => {
  const dailyExpenses = useMemo(() => {
    return expenses.filter((expense) =>
      isSameDay(parse(expense.date, "yyyy-MM-dd", new Date()), new Date()),
    );
  }, [expenses]);

  const dailyTotal = useMemo(() => {
    return dailyExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [dailyExpenses]);

  const dailyByCategory = useMemo(() => {
    return dailyExpenses.reduce(
      (acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, [dailyExpenses]);

  return {
    dailyTotal,
    dailyByCategory,
  };
};
export default useDailyExpenses;
