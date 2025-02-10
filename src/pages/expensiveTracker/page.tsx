import HeaderSkeleton from "./components/header/HeaderSkeltonLoader";
import Header from "./components/header";
import Analytics from "./components/Analytics";
import ExpenseFormSkeleton from "./components/ExpensiveForm/ExpensiveFormSkelton";
import ExpensiveForm from "./components/ExpensiveForm";
import ExpensiveList from "./components/ExpensiveList";
import ExpensiveListSkeleton from "./components/ExpensiveList/ExpensiveListSkelton";
import ExpensiveFormMobile from "./components/ExpensiveForm/MobileExpensive";
import { UseFetchExpenses } from "./hooks/useFetchExpenses";

const ExpensesTrackerPage = () => {
  const { data: expenses = [], isLoading } = UseFetchExpenses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05e6763f] to-[#01309d50]">
      <div className="container mx-auto px-4 py-8">
        {isLoading ? <HeaderSkeleton /> : <Header expenses={expenses} />}
        <Analytics loading={isLoading} expenses={expenses} />

        <div className="grid md:grid-cols-2 gap-6">
          {isLoading ? <ExpenseFormSkeleton /> : <ExpensiveForm />}
          {isLoading ? <ExpensiveListSkeleton /> : <ExpensiveList />}
        </div>
        <p className="p-2 capitalize">powered by palm @copy right 2025</p>
      </div>

      <ExpensiveFormMobile />
    </div>
  );
};

export default ExpensesTrackerPage;
