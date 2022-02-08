import { ActionTypes } from "../Contants/actionTypes"
export const SetProducts= (products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};



export const selectedProducts= (project)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }

}