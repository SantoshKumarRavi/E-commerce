// productActions.js

import axios from "axios";
import {
  FETCH_PRODUCTS,
  CATEGORIZE_PRODUCTS,
  CATEGORIZE_BRANDS,
  FILTER_PRODUCTS,
  UPDATE_FILTER_PRODUCTS,
  UPDATE_FILTER_PRODUCTS_BY_CATEGORY,
  ADD_TO_CART,
} from "../types/productTypes";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response?.data?.products,
      });
      dispatch({
        type: CATEGORIZE_PRODUCTS,
        payload: response?.data?.products,
      });
      dispatch({
        type: CATEGORIZE_BRANDS,
        payload: response?.data?.products,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProducts = (type, list) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_PRODUCTS,
        payload: { type, list },
      });
      dispatch({
        type: UPDATE_FILTER_PRODUCTS,
        payload: null,
      });
      dispatch({
        type: UPDATE_FILTER_PRODUCTS_BY_CATEGORY,
        payload: null,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const AddtoCart = (product) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADD_TO_CART,
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
