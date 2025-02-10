import React, { useEffect } from "react";
import { X } from "lucide-react";
import searchParamsUtils from "../../../../../lib/searchParams";
import { categories } from "../../../../../constants/ExpensiveForm";

const FiltersComponent = ({
  setSearchParams,
  searchParams,
}: {
  setSearchParams: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  searchParams: Record<string, string>;
}) => {
  const {
    getAllSearchParams,
    removeSearchParam,
    resetSearchParams,
    updateSearchParam,
  } = searchParamsUtils();
  useEffect(() => {
    const handleSearchParamsChanges = () => {
      setSearchParams(getAllSearchParams());
    };

    window.addEventListener("popstate", handleSearchParamsChanges);

    return () => {
      window.removeEventListener("popstate", handleSearchParamsChanges);
    };
  }, []);
  const handleRemoveSearchParam = (key: string) => {
    removeSearchParam(key);
    setSearchParams(getAllSearchParams());
  };

  const handleResetSearchParams = () => {
    resetSearchParams();
    setSearchParams({});
  };
  const updateSearchParamF = (key: string, value: string) => {
    updateSearchParam(key, value);
    setSearchParams(getAllSearchParams());
  };

  return (
    <div>
      <div className="mb-6 space-y-4 ">
        <div>
          <label className="block text-sm font-medium text-secondary mb-1">
            Filter by Category
          </label>
          <select
            value={searchParams.category || ""}
            onChange={(e) => updateSearchParamF("category", e.target.value)}
            className="p-2 w-full rounded-lg border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat?.label} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {Object.entries(searchParams).length > 0 ? (
          <div className="flex items-center  justify-start gap-3 flex-wrap flex-1">
            {Object.entries(searchParams).map(([key, value]) => (
              <button
                key={key}
                className=" bg-primary text-white px-2 py-1 rounded-lg"
              >
                {key}: {value}
                <X
                  className="w-4 h-4 inline-block ml-2 bg-primary  hover:bg-secondary transition-colors "
                  onClick={() => handleRemoveSearchParam(key)}
                />
              </button>
            ))}
            <button
              className="bg-secondary text-white shadow-sm text-default border px-2 py-1 rounded-lg"
              onClick={handleResetSearchParams}
            >
              Clear All Filters
              <X className="w-4 h-4 inline-block ml-2" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FiltersComponent;
