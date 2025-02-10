import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoading from "./components/utls/pageLoading";

const ExpensesTrackerPage = lazy(() => import("./pages/expensiveTracker/page"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoading />}>
              <ExpensesTrackerPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
