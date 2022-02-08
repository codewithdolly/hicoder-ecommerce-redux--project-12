import { combineReducers } from "redux";
import { Reducer } from "./Reducer";



const reducers= combineReducers({
    allProducts: Reducer,
});

export default reducers;