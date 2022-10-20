import {ActionTypes} from "../Contants/actionTypes"
import productApi from "../../Components/apis/productApi";
import axios from "axios";

export const fetchProducts = async () => {
  const response= await axios.get("/products")
  console.log(response);
  
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: response,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};


export const removeSelectedProduct=()=>{
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  }
}
