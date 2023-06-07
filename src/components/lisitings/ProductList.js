import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import { useNavigate } from "react-router-dom";
import ProductCard from "../common/ProductCard";
const ProductList = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => {
    return state.products;
  });
  const [Productsbycategory, setProductsbycategory] = useState({});
  const [FilterProductsbycategory, setFilterProductsbycategory] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setProductsbycategory(products.productsByCategory);
    setFilterProductsbycategory(products.filteredProductsByCategory);
    console.log("products", products);
  }, [products]);

  const handleClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="p-4">
      {products.filteredProducts.length === 0 &&
        Object.entries(Productsbycategory)?.map(([category, items]) => (
          <div key={category} className="">
            <div className="flex justify-between p-4">
              <h2 className="font-semibold text-xl">
                <span>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </h2>
              <button
                className="text-gray-800 font-semibold rounded bg-yellow-300 px-2 py-1 hover:bg-yellow-400"
                onClick={() => handleClick(category)}
              >
                See All
              </button>
            </div>
            <div className="flex justify-center items-center bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <ProductCard key={index} product={item} home />
                ))}
              </div>
            </div>
          </div>
        ))}
      {products.filteredProducts.length > 0 &&
        Object.entries(FilterProductsbycategory)?.map(([category, items]) => (
          <div key={category} className="">
            <div className="flex justify-between p-4">
              <h2 className="font-semibold text-xl">
                <span>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </h2>
              <button
                className="text-gray-800 font-semibold rounded bg-yellow-300 px-2 py-1 hover:bg-yellow-400"
                onClick={() => handleClick(category)}
              >
                See All
              </button>
            </div>
            <div className="flex justify-center items-center bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <ProductCard key={index} product={item} home />
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
