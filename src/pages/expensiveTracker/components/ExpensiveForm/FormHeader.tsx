import { Edit, PlusCircle } from "lucide-react";

const FormHeader = ({ editingExpense }: { editingExpense: boolean }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
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
    </div>
  );
};

export default FormHeader;
