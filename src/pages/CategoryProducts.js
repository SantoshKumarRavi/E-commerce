import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sortByRating, sortByDiscount, sortByPrice } from "../utils/sortUtils";
import { AddtoCart } from "../store/actions/productActions";
import ProductCard from "../components/common/ProductCard";
const CategoryProducts = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const products = useSelector((state) => {
    return state.products;
  });
  const [ProductsList, setProductsList] = useState([]);
  const [ProductsListFiltered, setProductsListFiltered] = useState([]);
  useEffect(() => {
    if (products.filteredProducts.length === 0) {
      let filtered = Object.entries(products.productsByCategory)?.filter(
        ([category, items]) => {
          if (category === name) {
            return true;
          }
          return false;
        }
      );
      filtered[0]?.length > 0 && setProductsList(filtered[0][1]);
    } else {
      let filtered = Object.entries(
        products.filteredProductsByCategory
      )?.filter(([category, items]) => {
        if (category === name) {
          return true;
        }
        return false;
      });
      filtered[0]?.length > 0 && setProductsListFiltered(filtered[0][1]);
    }
  }, [products, name]);

  const [ratingOrder, setratingOrder] = useState("");
  const [discountOrder, setdiscountOrder] = useState("");
  const [priceOrder, setpriceOrder] = useState("");
  const handleSortByRating = () => {
    setratingOrder((prev) => (prev === "ASC" ? "DESC" : "ASC"));
    setProductsList(sortByRating(ProductsList, ratingOrder));
    setProductsListFiltered(sortByRating(ProductsListFiltered, ratingOrder));
  };

  const handleSortByDiscount = () => {
    setdiscountOrder((prev) => (prev === "ASC" ? "DESC" : "ASC"));
    setProductsList(sortByDiscount(ProductsList, discountOrder));
    setProductsListFiltered(
      sortByDiscount(ProductsListFiltered, discountOrder)
    );
  };

  const handleSortByPrice = () => {
    setpriceOrder((prev) => (prev === "ASC" ? "DESC" : "ASC"));
    setProductsList(sortByPrice(ProductsList, priceOrder));
    setProductsListFiltered(sortByPrice(ProductsListFiltered, priceOrder));
  };
  const handleAddcart = (product) => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    dispatch(AddtoCart(product));
  };
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="mt-2">
      <div className="flex justify-end gap-3 ">
        <button
          onClick={handleSortByRating}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition-colors duration-300"
        >
          Sort by Rating &#x2195;
        </button>
        <button
          onClick={handleSortByDiscount}
          className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 transition-colors duration-300"
        >
          Sort by Discount &#x2195;
        </button>
        <button
          onClick={handleSortByPrice}
          className="bg-purple-500 hover:bg-purple-600 text-white rounded-md px-4 py-2 transition-colors duration-300"
        >
          Sort by Price &#x2195;
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.filteredProducts.length === 0 &&
            ProductsList?.map((item, i) => (
              <ProductCard product={item} handleAddcart={handleAddcart} />
            ))}
        </div>
      </div>
      {products.filteredProducts.length > 0 &&
        ProductsListFiltered?.map((item, i) => (
          <ProductCard product={item} handleAddcart={handleAddcart} />
        ))}
      {showAlert && (
        <div className="fixed top-4 flex w-full justify-center z-999">
          <span className="bg-green-500 p-2 text-white rounded">
            Product added successfully to cart &#x2713;
          </span>
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
