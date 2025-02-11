import { Edit, PlusCircle, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const FormHeader = ({
  editingExpense,
  setIsFormVisible,
  RemoveEditExpense,
  reset,
}: {
  editingExpense: boolean;
  setIsFormVisible?: Dispatch<SetStateAction<boolean>>;
  RemoveEditExpense?: () => void;
  reset?: () => void;
}) => {
  const mobile = window.innerWidth < 760;
  return (
    <div className="sticky top-0 bg-white z-10 h-fit  mb-0 flex justify-between items-center   p-3">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        {editingExpense ? (
          <>
            <Edit className="w-5 h-5 text-primary" />
            Edit Expense
          </>
        ) : (
          <>
            <PlusCircle className="w-5 h-5 text-primary" />
            Add New Expense
          </>
        )}
      </h2>
      {mobile && (
        <button
          onClick={() => {
            reset && reset();
            setIsFormVisible && setIsFormVisible(false);
            RemoveEditExpense && RemoveEditExpense();
          }}
          aria-label="close and cancel  form"
        >
          <X className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default FormHeader;
