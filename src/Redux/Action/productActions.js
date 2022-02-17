import { ActionTypes } from "../Contants/ActionTypes";

export const SetProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
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
