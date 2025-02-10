import { TExpense } from "@/ts/types/Expensive";
import { isSameMonth, parse, startOfMonth } from "date-fns";
import { useMemo } from "react";

const usMonthlyExpenses = ({ expenses }: { expenses: TExpense[] }) => {
  const monthlyExpenses = useMemo(
    () =>
      expenses.filter((expense) =>
        isSameMonth(
          parse(expense.date, "yyyy-MM-dd", new Date()),
          startOfMonth(new Date()),
        ),
      ),
    [expenses],
  );
  const total = useMemo(
    () => monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0),
    [monthlyExpenses],
  );
  const monthlyByCategory = useMemo(
    () =>
      monthlyExpenses.reduce(
        (acc, expense) => {
          acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
          return acc;
        },
        {} as Record<string, number>,
      ),
    [monthlyExpenses],
  );

  return {
    total,
    monthlyByCategory,
  };
};
export default usMonthlyExpenses;
