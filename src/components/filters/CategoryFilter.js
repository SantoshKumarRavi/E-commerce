import React from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts } from "../../store/actions/productActions";
const CategoryFilter = () => {
  const products = useSelector((state) => {
    return state.products;
  });
  const dispatch = useDispatch();

  const handleCategorySelect = (selectedOptions) => {
    dispatch(filterProducts("categories", selectedOptions));
  };
  const CategoryOptions = Object.entries(products?.productsByCategory).map(
    ([category, items]) => ({ value: category, label: category })
  );

  return (
    <div className="max-w-md mx-auto mb-6">
      <p className="text-md font-medium mb-2">Category Filter</p>
      <Select
        isMulti
        options={CategoryOptions}
        value={products.filteredSelected.categories}
        onChange={handleCategorySelect}
        className="w-full"
        classNamePrefix="select"
      />
    </div>
  );
};

export default CategoryFilter;
