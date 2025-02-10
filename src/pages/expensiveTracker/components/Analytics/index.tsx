import DailyOverview from "../DailyOverview";
import MonthlyOverview from "../MonthlyOverview";
import MonthlyOverviewSkeleton from "../MonthlyOverview/MonthlyOverviewSkeleton";
import DailyOverviewSkeleton from "../DailyOverview/DailyOverviewSkeleton";
import { TExpense } from "@/ts/types/Expensive";
interface AnalyticsProps {
  loading: boolean;
  expenses: TExpense[];
}

const Analytics = ({ loading, expenses }: AnalyticsProps) => (
  <div className="grid md:grid-cols-2 gap-6 mb-8">
    {loading ? (
      <MonthlyOverviewSkeleton />
    ) : (
      <MonthlyOverview expenses={expenses} />
    )}
    {loading ? (
      <DailyOverviewSkeleton />
    ) : (
      <DailyOverview expenses={expenses} />
    )}
  </div>
);

export default Analytics;
