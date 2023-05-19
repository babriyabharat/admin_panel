import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
  productReducer,authReducer
});

export default rootReducer;