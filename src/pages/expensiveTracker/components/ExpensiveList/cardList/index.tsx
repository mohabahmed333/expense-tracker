import { TExpense } from "../../../../../ts/types/Expensive";
import CardItem from "./cardItem";

const CardList = ({ expenses }: { expenses: TExpense[] }) => {
  return (
    <div className="space-y-4 max-h-[500px] overflow-y-auto">
      {expenses.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          No expenses recorded yet
        </p>
      ) : (
        expenses.map((expense) => (
          <CardItem expense={expense} key={expense.id + Math.random() * 10} />
        ))
      )}
    </div>
  );
};

export default CardList;
