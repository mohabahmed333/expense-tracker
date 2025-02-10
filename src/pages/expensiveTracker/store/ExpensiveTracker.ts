import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { TExpense } from "../../../ts/types/Expensive";

interface IExpensiveTracker {
  expensive: TExpense | null;
  setEditExpensive: (expense: TExpense) => void;
  cancelEditExpensive: () => void;
  SetMobileEdit: (expense: TExpense) => void;
  IsOpenMobileEdit: boolean;
  RemoveMobileEdit: () => void;
}

type ExpensivePersist = PersistOptions<IExpensiveTracker>;

const useEditExpensiveStore = create<IExpensiveTracker>()(
  persist<IExpensiveTracker>(
    (set) => ({
      expensive: null,
      IsOpenMobileEdit: false,
      SetMobileEdit: (expense) =>
        set({
          expensive: expense,
          IsOpenMobileEdit: true,
        }),
      RemoveMobileEdit: () =>
        set({
          expensive: null,
          IsOpenMobileEdit: false,
        }),
      setEditExpensive: (expense) =>
        set({
          expensive: expense,
        }),
      cancelEditExpensive: () =>
        set({
          expensive: null,
        }),
    }),
    {
      name: "expensive-storage",
      getStorage: () => localStorage,
    } as ExpensivePersist,
  ),
);

// Utility functions for easy access
export const getEditExpensiveToEdit = () =>
  useEditExpensiveStore((state) => state.expensive);
export const setEditExpensive = () =>
  useEditExpensiveStore((state) => state.setEditExpensive);
export const clearEditExpensive = () =>
  useEditExpensiveStore((state) => state.cancelEditExpensive);
export const setMobileEdit = () =>
  useEditExpensiveStore((state) => state.SetMobileEdit);
export const isOpenMobileEdit = () =>
  useEditExpensiveStore((state) => state.IsOpenMobileEdit);

export default useEditExpensiveStore;
