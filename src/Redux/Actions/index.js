import {
  LOGIN_FAILURE,
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  FETCH_FAILURE,
  FETCH_IN_PROGRESS,
  FETCH_SUCCESS,
} from "./types";

import axios from "axios";

export const AUTH_USER = "AUTH_USER";

export const authUser = ({ login, password }) => {
  return (dispatch) => {
    dispatch(logInProgress());

    const User = { login: login, password: password };

    axios
      .post("http://localhost:5000/users/authenticate", User)
      .then((res) => {
        console.log(res.data);

        dispatch(logInSuccessful(login));
        //TODO: set user status active
      })
      .catch((err) => {
        dispatch(logInFailed(err.message));
      });
  };
};

export const logInSuccessful = (username) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { username },
  };
};

export const logInProgress = () => {
  return {
    type: LOGIN_IN_PROGRESS,
  };
};

export const logInFailed = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: { error },
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersInProgress());

    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        console.log(res.data);

        dispatch(fetchUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUsersFailed(err.message));
      });
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: { users },
  };
};

export const fetchUsersInProgress = () => {
  return {
    type: FETCH_IN_PROGRESS,
  };
};

export const fetchUsersFailed = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: { error },
  };
};
