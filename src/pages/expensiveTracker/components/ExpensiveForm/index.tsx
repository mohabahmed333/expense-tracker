import { useEffect } from "react";
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
import ExpensiveFormComponent from "./Form";

const ExpensiveForm = () => {
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
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-h-[800px] overflow-auto  max-sm:hidden">
      <FormHeader editingExpense={!!editingExpense} />

      <ExpensiveFormComponent
        onSubmit={onSubmit}
        RemoveEditExpense={RemoveEditExpense}
        editingExpense={!!editingExpense}
        form={form}
      />
    </div>
  );
};

export default ExpensiveForm;
