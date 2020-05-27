import { combineReducers } from "redux";
import loginStatusReducer from "./loginReducer";
import fetchUsersReducer from "./fetchUsers";
import displayServerCreation from "./displayServerCreation";

const allReducers = combineReducers({
  displayServerForm: displayServerCreation,
  loginStatus: loginStatusReducer,
  fetchUsersReducer: fetchUsersReducer,
});

export default allReducers;
