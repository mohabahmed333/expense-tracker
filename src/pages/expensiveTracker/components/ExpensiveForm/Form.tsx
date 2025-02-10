import React from "react";
import { UseFormReturn } from "react-hook-form";
import Input from "@/components/FormComponents/Input";
import TextArea from "@/components/FormComponents/TextArea";
import FormFooter from "./FormFooter";
import SelectInput from "@/components/FormComponents/Select";
import DateInput from "@/components/FormComponents/DateFormInput";
import { ExpensiveFormData } from "../../../../ts/types/ExpensiveForm";
import { Calendar, CreditCard, DollarSign, Tag } from "lucide-react";
import { categories, paymentMethods } from "@/constants/ExpensiveForm";

interface ExpensiveFormProps {
  onSubmit: (data: ExpensiveFormData) => void;
  editingExpense: boolean;
  RemoveEditExpense: () => void;
  form: UseFormReturn<ExpensiveFormData>;
}

const ExpensiveFormComponent: React.FC<ExpensiveFormProps> = ({
  onSubmit,
  editingExpense,
  RemoveEditExpense,
  form,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        errors={errors}
        labelText="Enter a name"
        name="name"
        placeholder="Enter name"
        register={register}
        className="py-2"
        type="text"
      />
      <Input
        errors={errors}
        labelText="Amount"
        name="amount"
        icon={<DollarSign className="w-5 h-5 text-gray-400" />}
        placeholder="Enter amount"
        register={register}
        className="py-2"
        type="number"
      />
      <DateInput
        name="date"
        register={register}
        errors={errors}
        labelText="Date"
        icon={<Calendar className="text-gray-400 w-5 h-5" />}
        className="py-2"
      />
      <SelectInput
        name="category"
        register={register}
        errors={errors}
        labelText="Category"
        icon={<Tag className="text-gray-400 w-5 h-5" />}
        options={categories}
        className="py-2"
      />
      <SelectInput
        name="paymentMethod"
        register={register}
        errors={errors}
        labelText="Payment Method"
        icon={<CreditCard className="w-5 h-5 text-gray-400" />}
        options={paymentMethods}
        className="py-2"
      />

      <TextArea
        errors={errors}
        labelText="Notes"
        name="notes"
        placeholder="Additional notes..."
        register={register}
        className="p-2"
      />
      <FormFooter
        isSubmitting={isSubmitting}
        editingExpense={editingExpense}
        reset={reset}
        RemoveEditExpense={RemoveEditExpense}
      />
    </form>
  );
};

export default ExpensiveFormComponent;
