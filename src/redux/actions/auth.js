import { ActionTypes as Action } from "./ActionTypes";
import { axiosAPI } from "../../utils";

// load user
export const loadUser = (token) => async (dispatch) => {
  dispatch({
    type: Action.LOAD_REQUEST,
    payload: { token },
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
export const login = (user) => async (dispatch) => {
  dispatch({ type: Action.LOGIN_REQUEST, payload: user });
  try {
    const { data } = await axiosAPI.post("/api/v1/token/login/", user);

    dispatch({ type: Action.LOGIN_SUCCESS, payload: data });
    localStorage.setItem("token", JSON.stringify(data.auth_token));
  } catch (error) {
    dispatch({
      type: Action.LOGIN_FAIL,
      payload: error.message || error.detail || error.non_field_errors,
    });
  }
};

// register new user
export const register = (newUser) => async (dispatch) => {
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

export const logMeOut = () => async (dispatch) => {
  let refresh_token = localStorage.getItem("refresh_token");
  axiosAPI
    .post("user/logout/blacklist/", { refresh_token })
    .then((res) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      axiosAPI.defaults.headers["Authorization"] = null;
      dispatch({
        type: Action.LOGOUT_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: Action.LOGOUT_FAIL,
        payload: error,
      });
    });
};

// LOGOUT USER
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  axiosAPI
    .post("/rest-auth/logout/")
    .then((res) => {
      dispatch({
        type: Action.LOGOUT_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: Action.LOGOUT_FAIL,
        payload: error,
      });
    });
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from auth state
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  // If token, add to headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};
