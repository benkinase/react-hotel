import { ActionTypes as Action } from "./ActionTypes";
import { axiosAPI } from "../../utils";
import { INewUser, IUser } from "../../types";

// load user
export const loadUser = () => async (dispatch: any) => {
  dispatch({
    type: Action.LOAD_REQUEST,
    payload: {},
  });
  try {
    const { data } = await axiosAPI.get(`api/v1/users/me/`);
    dispatch({ type: Action.LOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: Action.LOAD_FAIL,
      payload: error.message || error.detail,
    });
  }
};

// log in existing user
export const login = (user: IUser) => async (dispatch: any) => {
  dispatch({ type: Action.LOGIN_REQUEST, payload: user });
  try {
    const { data } = await axiosAPI.post("/api/v1/token/login/", user);

    dispatch({ type: Action.LOGIN_SUCCESS, payload: data.auth_token });
    localStorage.setItem("token", JSON.stringify(data.auth_token));
  } catch (error) {
    dispatch({
      type: Action.LOGIN_FAIL,
      payload: error.message || error.detail || error.non_field_errors,
    });
  }
};

// register new user
export const register = (newUser: INewUser) => async (dispatch: any) => {
  console.log(newUser);
  dispatch({
    type: Action.REGISTER_REQUEST,
    payload: newUser,
  });
  try {
    const { data } = await axiosAPI.post("/api/v1/users/", newUser);
    dispatch({ type: Action.REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: Action.REGISTER_FAIL,
      payload: error,
    });
  }
};

// LOGOUT USER
export const logoutUser = () => (dispatch: any) => {
  try {
    localStorage.removeItem("token");
    dispatch({
      type: Action.LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: Action.LOGOUT_FAIL,
      payload: error,
    });
  }
};
