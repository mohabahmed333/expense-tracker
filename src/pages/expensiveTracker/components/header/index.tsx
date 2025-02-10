import Logo from "@/public/logo/Outlook-Palm (1).png";
import { TExpense } from "@/ts/types/Expensive";
import { useMemo } from "react";
interface HeaderProps {
  expenses: TExpense[];
}

const Header = ({ expenses }: HeaderProps) => {
  const totalExpenses = useMemo(
    () => expenses.reduce((sum, expense) => sum + expense.amount, 0),
    [expenses],
  );

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
        {/* <Wallet className="w-8 h-8" /> */}
        <img loading="lazy" width={50} height={50} src={Logo} alt="palm logo" />
        Expense Tracker
      </h1>
      <div className="bg-white rounded-lg shadow-md px-4 py-2">
        <p className="text-sm text-gray-600">Total Expenses</p>
        <p className="text-2xl font-bold text-primary">
          ${totalExpenses.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Header;
