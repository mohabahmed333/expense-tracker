import { TExpense } from "@/ts/types/Expensive";
import { BarChart } from "lucide-react";
import useDailyExpenses from "../../hooks/useDailyExpenses";

interface DailyOverviewProps {
  expenses: TExpense[];
}

const DailyOverview = ({ expenses }: DailyOverviewProps) => {
  const { dailyByCategory, dailyTotal } = useDailyExpenses({ expenses });
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <BarChart className="w-5 h-5 text-primary" />
        Daily Overview
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Total Today</p>
          <p className="text-2xl font-bold text-primary">
            ${dailyTotal.toFixed(2)}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-secondary">
            Category Breakdown
          </p>
          {Object.entries(dailyByCategory).map(([category, amount]) => (
            <div key={category} className="flex justify-between items-center">
              <span className="text-gray-600">{category}</span>
              <span className="font-medium">${amount.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyOverview;
