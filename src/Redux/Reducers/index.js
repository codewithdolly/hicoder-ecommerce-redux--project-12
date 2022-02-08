import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

const Reducers= combineReducers({
    allProducts: ProductReducer,
});

export default Reducers;