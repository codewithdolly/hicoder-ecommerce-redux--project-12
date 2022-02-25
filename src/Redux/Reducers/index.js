import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./ProductReducer";

const Reducers= combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
});

export default Reducers;