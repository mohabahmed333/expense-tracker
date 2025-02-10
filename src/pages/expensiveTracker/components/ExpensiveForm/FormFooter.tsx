const FormFooter = ({
  isSubmitting,
  editingExpense,
  reset,
  RemoveEditExpense,
}: {
  isSubmitting: boolean;
  editingExpense: boolean;
  reset: () => void;
  RemoveEditExpense: () => void;
}) => {
  return (
    <div className="flex gap-2">
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex-1 bg-secondary text-white py-2 px-4   rounded-md
           hover:bg-primary hover:text-white transition-colors duration-400"
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
            RemoveEditExpense();
            reset();
          }}
          className="bg-secondary text-white py-2 px-4 rounded-lg
             hover:bg-primary hover:text-white transition-colors duration-200"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default FormFooter;
