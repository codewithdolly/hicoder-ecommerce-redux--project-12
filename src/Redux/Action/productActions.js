import { ActionType } from "../Contants/actionType"
export const SetProducts= (products)=>{
    return{
        type: ActionType.SET_PRODUCTS,
        payload: products,
    };
};



export const selectedProducts= (project)=>{
    return{
        type: ActionType.SELECTED_PRODUCT,
        payload: product,
    }

}