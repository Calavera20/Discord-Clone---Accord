import { LOGIN_FAILURE, LOGIN_IN_PROGRESS, LOGIN_SUCCESS } from "./types";

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

        dispatch(logInSuccessful());
      })
      .catch((err) => {
        dispatch(logInFailed(err.message));
      });
  };
};

export const logInSuccessful = () => {
  return {
    type: LOGIN_SUCCESS,
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
