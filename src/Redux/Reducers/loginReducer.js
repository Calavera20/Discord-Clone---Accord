import {
  LOGIN_FAILURE,
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
} from "../Actions/types";

const initialState = {
  inProgress: false,
  isLoggedIn: false,
  error: null,
  username: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        inProgress: false,
        error: null,
        isLoggedIn: true,
        username: action.payload.username,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: action.payload.error,
        isLoggedIn: false,
      };
    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        inProgress: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
