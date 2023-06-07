// sortUtils.js

export const sortByRating = (products, order = "") => {
  const sortedProducts = products.slice().sort((a, b) => b.rating - a.rating);
  let AscendingOrder = [...sortedProducts].reverse();
  return order === "ASC" ? AscendingOrder : sortedProducts;
};

export const sortByDiscount = (products, order = "") => {
  const sortedProducts = products
    .slice()
    .sort((a, b) => b.discountPercentage - a.discountPercentage);
  let AscendingOrder = [...sortedProducts].reverse();
  return order === "ASC" ? AscendingOrder : sortedProducts;
};

export const sortByPrice = (products, order = "") => {
  const sortedProducts = products.slice().sort((a, b) => b.price - a.price);
  let AscendingOrder = [...sortedProducts].reverse();
  return order === "ASC" ? AscendingOrder : sortedProducts;
};
