import { lazy, Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ExpensiveFormSchema } from "./schema";
import {
  categories,
  paymentMethods,
} from "../../../../constants/ExpensiveForm";
import { TExpense } from "../../../../ts/types/Expensive";
import { ExpensiveFormData } from "../../../../ts/types/ExpensiveForm";
import { UseExpensiveFormMutation } from "../../hooks/UseExpensiveFormMutation";
import FormHeader from "./FormHeader";
import {
  clearEditExpensive,
  getEditExpensiveToEdit,
} from "../../store/ExpensiveTracker";
import { PlusCircle, X } from "lucide-react";
import ExpenseFormSkeleton from "./ExpensiveFormSkelton";
const ExpensiveFormComponent = lazy(() => import("./Form"));
const ExpensiveFormMobile = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const editingExpense = getEditExpensiveToEdit();
  const RemoveEditExpense = clearEditExpensive();

  const form = useForm<ExpensiveFormData>({
    resolver: yupResolver(ExpensiveFormSchema),
    defaultValues: {
      category: categories[0]?.value,
      paymentMethod: paymentMethods[0]?.value,
    },
  });

  const { createExpense, updateExpense } = UseExpensiveFormMutation({
    reset: form.reset,
  });

  useEffect(() => {
    if (editingExpense) {
      Object.keys(editingExpense).forEach((key) => {
        form.setValue(
          key as keyof ExpensiveFormData,
          editingExpense[key as keyof TExpense],
        );
      });
      setIsFormVisible(true);
    }
  }, [editingExpense, form.setValue]);

  const onSubmit = (data: ExpensiveFormData) => {
    if (editingExpense) {
      updateExpense.mutate({
        ...data,
        id: editingExpense.id,
        notes: data.notes || "",
      });
    } else {
      createExpense.mutate({ ...data, notes: data.notes || "" });
    }
    setIsFormVisible(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsFormVisible(true)}
        className="sm:hidden fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg flex items-center gap-2"
      >
        <PlusCircle className="w-5 h-5" /> Add Expense
      </button>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isFormVisible ? "opacity-100 visible" : "opacity-0 invisible"
        } sm:static sm:opacity-100 sm:visible`}
      >
        <div
          className={`bg-white rounded-xl shadow-lg p-6 max-h-[700px] overflow-auto transition-transform duration-300 transform
             ${isFormVisible ? "translate-y-0 scale-100" : "translate-y-full scale-95"}
              sm:translate-y-0 sm:scale-100 fixed bottom-0 left-0 right-0 sm:static w-full sm:w-auto`}
        >
          <button
            onClick={() => {
              setIsFormVisible(false);
              RemoveEditExpense();
            }}
            className="absolute top-4 right-4 text-gray-600 sm:hidden"
          >
            <X className="w-6 h-6" />
          </button>

          <FormHeader editingExpense={!!editingExpense} />
          <Suspense fallback={<ExpenseFormSkeleton />}>
            <ExpensiveFormComponent
              onSubmit={onSubmit}
              RemoveEditExpense={RemoveEditExpense}
              editingExpense={!!editingExpense}
              form={form}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ExpensiveFormMobile;
