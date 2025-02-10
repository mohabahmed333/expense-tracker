import { TExpense } from "@/ts/types/Expensive";
import { TrendingUp } from "lucide-react";
import usMonthlyExpenses from "../../hooks/useMonthlyExpenses";

interface MonthlyOverviewProps {
  expenses: TExpense[];
}

const MonthlyOverview = ({ expenses }: MonthlyOverviewProps) => {
  const { monthlyByCategory, total } = usMonthlyExpenses({ expenses });
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-md md:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        Monthly Overview
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm md:text-md">Total This Month</p>
          <p className="text-sm md:text-2xl font-bold text-primary">
            ${total.toFixed(2)}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-secondary">
            Category Breakdown
          </p>
          {Object.entries(monthlyByCategory).map(([category, amount]) => (
            <div
              key={category}
              className="flex text-secondary justify-between items-center"
            >
              <span className="text-gray-600">{category}</span>
              <span className="font-medium">${amount.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyOverview;
