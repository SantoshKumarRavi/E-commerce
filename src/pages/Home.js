import React from "react";
import CategoryFilter from "../components/filters/CategoryFilter";
import BrandFilter from "../components/filters/BrandFilter";
import ProductList from "../components/lisitings/ProductList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cart from "../assests/svg/cart";
const Home = () => {
  const navigate = useNavigate();

  const products = useSelector((state) => {
    return state.products;
  });
  function handleCartItems() {
    navigate(`/cart`);
  }
  return (
    <div className="p-4">
      <div className="flex justify-between  mb-4">
        <div className="flex">
          <div className="mr-4">
            <CategoryFilter />
          </div>
          <div>
            <BrandFilter />
          </div>
        </div>
        <div>
          <div
            className="relative inline-flex items-center justify-center rounded-full bg-blue-500 text-white p-2"
            onClick={handleCartItems}
          >
            {cart()}
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {products.cart.length}
            </span>
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default Home;
