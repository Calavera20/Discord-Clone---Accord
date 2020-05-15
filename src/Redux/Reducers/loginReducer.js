import {
  LOGIN_FAILURE,
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
} from "../Actions/types";

const initialState = {
  inProgress: false,
  isLoggedIn: false,
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        isLoggedIn: false,
      };
    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
