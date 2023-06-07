import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => {
    return state.products;
  });
  console.log("products c", products);
  const getTotalAmount = () => {
    let total = 0;
    products.cart.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl p-4 font-bold mb-4">Cart</h2>
      {products.cart.length === 0 ? (
        <div className="text-gray-500">Your cart is empty.</div>
      ) : (
        <div>
          {products.cart.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-2 bg-white rounded-md shadow-sm px-4 py-2"
            >
              <div className="flex-grow">
                <span className="">{product.title}</span>
              </div>
              <div className="text-gray-700">${product.price}</div>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <span className="font-bold">Total:</span>
            <span className="text-gray-700 ml-2 font-bold">
              ${getTotalAmount()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
