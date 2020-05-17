import {
  FETCH_FAILURE,
  FETCH_IN_PROGRESS,
  FETCH_SUCCESS,
} from "../Actions/types";

const initialState = {
  inProgress: false,
  usersArray: [],
  error: null,
};

const fetchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        inProgress: false,
        usersArray: action.payload.users,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        inProgress: false,
        usersArray: [],
        error: action.payload.error,
      };
    case FETCH_IN_PROGRESS:
      return {
        ...state,
        inProgress: true,
        usersArray: [],
        error: null,
      };
    default:
      return state;
  }
};

export default fetchUsersReducer;
