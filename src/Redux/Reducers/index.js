import { combineReducers } from "redux";
import loginStatusReducer from "./loginReducer";
import fetchUsersReducer from "./fetchUsers";

const allReducers = combineReducers({
  loginStatus: loginStatusReducer,
  fetchUsersReducer: fetchUsersReducer,
});

export default allReducers;
