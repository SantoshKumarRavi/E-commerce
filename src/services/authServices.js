import axios from "axios";

export const signup = async () => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const signin = async () => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
