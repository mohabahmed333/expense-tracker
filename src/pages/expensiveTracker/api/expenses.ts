import axios from "axios";
import { API_URL } from "../../../constants/urls";
import { TExpense } from "../../../ts/types/Expensive";

export const expensesApi = {
  getAll: async () => {
    const response = await axios.get<TExpense[]>(`${API_URL}/expenses`);
    return response.data;
  },

  getFiltered: async ({
    startDate,
    endDate,
    category,
  }: {
    startDate?: string;
    endDate?: string;
    category?: string;
  }) => {
    let url = `${API_URL}/expenses?_sort=date&_order=desc`;

    if (startDate && endDate) {
      url += `&date_gte=${startDate}&date_lte=${endDate}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

    const response = await axios.get<TExpense[]>(url);
    return response.data;
  },

  create: async (expense: Omit<TExpense, "id">) => {
    const response = await axios.post<TExpense>(`${API_URL}/expenses`, expense);
    return response.data;
  },

  update: async (expense: TExpense) => {
    const response = await axios.put<TExpense>(
      `${API_URL}/expenses/${expense.id}`,
      expense,
    );
    return response.data;
  },

  delete: async (id: string) => {
    await axios.delete(`${API_URL}/expenses/${id}`);
    return id;
  },
};
