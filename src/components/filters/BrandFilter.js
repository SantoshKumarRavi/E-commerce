import React from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts } from "../../store/actions/productActions";
const BrandFilter = () => {
  const products = useSelector((state) => {
    return state.products;
  });
  const dispatch = useDispatch();
  const handleBrandSelect = (selectedOptions) => {
    dispatch(filterProducts("brands", selectedOptions));
  };
  const brandOptions = Object.entries(products?.brands).map(
    ([brand, items]) => ({ value: brand, label: brand })
  );

  return (
    <div className="max-w-md mx-auto mb-6">
      <h2 className="text-md font-medium mb-2">Brand Filter</h2>
      <Select
        isMulti
        options={brandOptions}
        value={products.filteredSelected.brands}
        onChange={handleBrandSelect}
        className="w-full"
        classNamePrefix="select"
      />
    </div>
  );
};

export default BrandFilter;
