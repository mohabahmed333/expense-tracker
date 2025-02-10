import { TExpense } from "../../../../../ts/types/Expensive";
import { Calendar, CreditCard, Tag } from "lucide-react";
import { format, parse } from "date-fns";
import CardActions from "./cardActions";

const CardItem = ({ expense }: { expense: TExpense }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg space-y-2  ">
      <div className="flex items-center gap-4 justify-between">
        <p className="text-lg font-semibold text-primary">
          ${expense.amount.toFixed(2)}
        </p>
        <CardActions expense={expense} />
      </div>
      <div className="flex flex-col">
        <p>name</p>
        <p
          className="font-medium text-gray-800 border-b pb-3   
          max-md:max-w-sm  
        break-words"
        >
          {expense.name}
        </p>
      </div>

      {expense.notes && (
        <>
          {" "}
          <p>notes:</p>
          <p
            className="text-sm text-secondary mt-2 
                  max-md:max-w-sm   break-words"
          >
            {expense.notes}
          </p>
        </>
      )}
      <div className="text-sm text-gray-500 flex flex-wrap gap-x-4">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {format(parse(expense.date, "yyyy-MM-dd", new Date()), "MMM d, yyyy")}
        </span>
        <span className="flex items-center gap-1">
          <Tag className="w-4 h-4" />
          {expense.category}
        </span>
        <span className="flex items-center gap-1">
          <CreditCard className="w-4 h-4" />
          {expense.paymentMethod}
        </span>
      </div>
    </div>
  );
};

export default CardItem;
