import { TExpense } from "../../../../../ts/types/Expensive";
import { Edit, Trash2 } from "lucide-react";
import {
  setEditExpensive,
  setMobileEdit,
} from "../../../store/ExpensiveTracker";
import DeleteExpenses from "@/pages/expensiveTracker/hooks/useDeleteExpenses";
import { lazy, Suspense, useState } from "react";
const ConfirmDelete = lazy(() => import("./confirmDelete"));
const CardActions = ({ expense }: { expense: TExpense }) => {
  const [open, setOpen] = useState(false);
  const EditExpense = setEditExpensive();
  const SetMobileEditF = setMobileEdit();
  const deleteExpense = DeleteExpenses();
  const handleEdit = (expense: TExpense) => {
    if (window.innerWidth < 760) {
      SetMobileEditF(expense);
      return;
    }
    EditExpense(expense);
  };
  const handleDelete = (id: string) => {
    deleteExpense.mutate(id);
  };
  return (
    <div className="flex gap-2">
      <Suspense fallback={"loading"}>
        <ConfirmDelete
          open={open}
          setOpen={setOpen}
          confirm={() => handleDelete(expense.id)}
        />
      </Suspense>
      <button
        onClick={() => handleEdit(expense)}
        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
      >
        <Edit className="w-4 h-4 text-gray-600" />
      </button>
      <button
        onClick={() => setOpen(true)}
        className="p-1 hover:bg-gray-200 rounded-full transition-colors"
      >
        <Trash2 className="w-4 h-4 text-red-600" />
      </button>
    </div>
  );
};

export default CardActions;
