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
    <div className="min-h-screen flex flex-col  bg-gradient-to-br from-[#05e6763f] to-[#01309d50]">
      <header>
        {isLoading ? <HeaderSkeleton /> : <Header expenses={expenses} />}
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-0 lg:px-4 py-8">
          <Analytics loading={isLoading} expenses={expenses} />

          <section className="grid md:grid-cols-2 gap-6">
            {isLoading ? <ExpenseFormSkeleton /> : <ExpensiveForm />}
            {isLoading ? <ExpensiveListSkeleton /> : <ExpensiveList />}
          </section>

          <p className="p-2 capitalize text-center">
            Powered by Palm &copy; 2025
          </p>
        </div>
      </main>

      <aside>
        <ExpensiveFormMobile />
      </aside>
    </div>
  );
};

export default ExpensesTrackerPage;
