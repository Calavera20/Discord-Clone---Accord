import registrationStatusReducer from "./registrationStatus";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import registStatusReducer from "./registrationStatus";

const allReducers = combineReducers({
  registrationStatus: registrationStatusReducer,
  isLogged: loggedReducer,
});

export default allReducers;
