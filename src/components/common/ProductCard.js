import React from "react";

function ProductCard({ product, home = false, handleAddcart }) {
  const {
    description,
    discountPercentage,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = product;

  return (
    <div className="bg-white max-w-sm rounded-lg shadow-md m-4 p-4 shadow-md border border-gray-200">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 mb-2">
        {description.slice(0, 50)}
        {description.length > 0 ? "..." : ""}
      </p>
      {!home && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-green-500 font-bold">
            {discountPercentage}% OFF
          </span>
          <span className="text-yellow-500">{rating}</span>
        </div>
      )}
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-500 font-bold flex-1">${price}</span>
        {stock < 50 && (
          <div className="bg-red-100 rounded-md p-1 w-1/2">
            <p className="text-red-500 text-sm">
              Hurry! Only a few items left.
            </p>
          </div>
        )}
      </div>
      {!home && (
        <button
          className="bg-green-600 rounded-md p-2 text-white text-sm font-bold w-full mt-2"
          onClick={() => handleAddcart(product)}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
}

export default ProductCard;
