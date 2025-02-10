import * as yup from "yup";

export const ExpensiveFormSchema = yup
  .object({
    name: yup.string().required("name is required"),
    amount: yup
      .number()
      .typeError("Amount must be a number")
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value,
      )
      .required("Amount is required")
      .positive("Amount must be positive"),
    category: yup.string().required("Category is required"),
    date: yup.string().required("Date is required"),
    paymentMethod: yup.string().required("Payment method is required"),
    notes: yup.string().max(500, "Notes must be less than 500 characters"),
  })
  .required();
