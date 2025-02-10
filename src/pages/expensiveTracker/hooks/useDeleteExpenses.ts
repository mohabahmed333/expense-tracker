import { useMutation, useQueryClient } from "@tanstack/react-query";
import { expensesApi } from "../api/expenses";
import { tags } from "@/constants/tags";
import toast from "react-hot-toast";

const DeleteExpenses = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: expensesApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tags.expensive] });
      toast.success("Expense deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete expense");
    },
  });
};

export default DeleteExpenses;
