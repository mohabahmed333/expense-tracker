import { InferType } from "yup";
import { ExpensiveFormSchema } from "../../pages/expensiveTracker/components/ExpensiveForm/schema";

export type ExpensiveFormData =  InferType<typeof ExpensiveFormSchema>;
