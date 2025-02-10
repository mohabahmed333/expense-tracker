import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { tags } from "../../../constants/tags";
import { expensesApi } from "../api/expenses";
import { clearEditExpensive } from "../store/ExpensiveTracker";

export const UseExpensiveFormMutation = ({ reset }: { reset?: () => void }) => {
  const RemoveEditExpense = clearEditExpensive();
  const queryClient = useQueryClient();
  const createExpense = useMutation({
    mutationFn: expensesApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tags.expensive] });
      toast.success("Expense added successfully");
      reset && reset();
    },
    onError: () => {
      toast.error("Failed to add expense");
    },
  });

  const updateExpense = useMutation({
    mutationFn: expensesApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tags.expensive] });
      toast.success("Expense updated successfully");
      RemoveEditExpense();
      reset && reset();
    },
    onError: () => {
      toast.error("Failed to update expense");
    },
  });

  const loading = createExpense.isPending || updateExpense.isPending;
  return {
    createExpense,
    updateExpense,
    loading,
  };
};
