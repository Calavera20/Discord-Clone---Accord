import { combineReducers } from "redux";
import loginStatusReducer from "./loginReducer";

const allReducers = combineReducers({
  loginStatus: loginStatusReducer,
});

export default allReducers;
