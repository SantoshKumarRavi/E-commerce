// productReducer.js

import {
  FETCH_PRODUCTS,
  CATEGORIZE_PRODUCTS,
  CATEGORIZE_BRANDS,
  FILTER_PRODUCTS,
  UPDATE_FILTER_PRODUCTS,
  UPDATE_FILTER_PRODUCTS_BY_CATEGORY,
  ADD_TO_CART,
} from "../types/productTypes";

const initialState = {
  products: [],
  productsByCategory: {},
  filteredSelected: {
    brands: [],
    categories: [],
  },
  filteredProducts: [],
  filteredProductsByCategory: {},
  brands: {},
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case CATEGORIZE_PRODUCTS:
      let updatedCategory = {};
      action.payload.forEach((x) => {
        if (updatedCategory[x.category]) {
          updatedCategory[x.category] = [...updatedCategory[x.category], x];
        } else {
          updatedCategory[x.category] = [x];
        }
      });
      return {
        ...state,
        productsByCategory: updatedCategory,
      };
    case CATEGORIZE_BRANDS:
      let updatedBrands = {};
      action.payload.forEach((x) => {
        if (updatedBrands[x.brand]) {
          updatedBrands[x.brand] = [...updatedBrands[x.brand], x];
        } else {
          updatedBrands[x.brand] = [x];
        }
      });
      return {
        ...state,
        brands: updatedBrands,
      };
    case FILTER_PRODUCTS:
      let obj = {};
      obj[action.payload.type] = action.payload.list;
      return {
        ...state,
        filteredSelected: {
          ...state.filteredSelected,
          ...obj,
        },
      };
    case UPDATE_FILTER_PRODUCTS:
      let brands = state.filteredSelected.brands.map((x) => x.value);
      let categories = state.filteredSelected.categories.map((x) => x.value);
      let filtered = state.products.filter((x) => {
        if (brands.includes(x.brand) || categories.includes(x.category)) {
          return true;
        }
        return false;
      });
      return {
        ...state,
        filteredProducts: filtered,
      };
    case UPDATE_FILTER_PRODUCTS_BY_CATEGORY:
      let updatedfilterProductsByCategory = {};
      state?.filteredProducts?.forEach((x) => {
        if (updatedfilterProductsByCategory[x.category]) {
          updatedfilterProductsByCategory[x.category] = [
            ...updatedfilterProductsByCategory[x.category],
            x,
          ];
        } else {
          updatedfilterProductsByCategory[x.category] = [x];
        }
      });
      return {
        ...state,
        filteredProductsByCategory: updatedfilterProductsByCategory,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default productReducer;
