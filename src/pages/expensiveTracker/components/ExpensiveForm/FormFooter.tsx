import { Dispatch, SetStateAction } from "react";

const FormFooter = ({
  isSubmitting,
  editingExpense,
  reset,
  RemoveEditExpense,
  setIsFormVisible,
}: {
  isSubmitting: boolean;
  editingExpense: boolean;
  reset: () => void;
  RemoveEditExpense: () => void;
  setIsFormVisible?: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex gap-2">
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex-1 bg-secondary text-white py-2 px-4   rounded-md
           hover:bg-primary hover:text-white transition-colors duration-400"
        aria-label="submit form"
      >
        {isSubmitting ? (
          <>loading ...</>
        ) : editingExpense ? (
          "Update Expense"
        ) : (
          "Add Expense"
        )}
      </button>
      {editingExpense && (
        <button
          type="button"
          onClick={() => {
            setIsFormVisible && setIsFormVisible(false);
            RemoveEditExpense();
            reset();
          }}
          className="bg-secondary text-white py-2 px-4 rounded-lg
             hover:bg-primary hover:text-white transition-colors duration-200"
          aria-label="cancel form"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default FormFooter;
