import React, { useReducer, createContext } from "react";
import axiosAPI from "./authAxios";
import { actionTypes } from "./actionTypes";
import { AuthReducer, initialState } from "./authReducer";

const AuthContext = createContext(initialState);

function AuthContextProvider(props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  async function login(state) {
    const { username } = state;
    dispatch({ type: actionTypes.USER_LOGIN_REQUEST, payload: state });
    try {
      let { data } = await axiosAPI.post("/token/obtain/", state);
      let user = { token: data, username };
      //setNewHeaders(data);
      axiosAPI.defaults.headers["Authorization"] = "JWT " + data.access;
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: user });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_LOGIN_FAIL,
        payload: error.response.data.detail,
      });
    }
  }
  // register newUser
  async function register(state) {
    let newUser = JSON.stringify(state);
    dispatch({ type: actionTypes.USER_REGISTER_REQUEST, payload: newUser });
    try {
      const { data } = await axiosAPI.post("/user/register/", newUser);
      dispatch({ type: actionTypes.USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_REGISTER_FAIL,
        payload: error.response.data.detail,
      });
    }
  }
  const logMeOut = () => {
    let refresh_token = localStorage.getItem("refresh_token");
    axiosAPI
      .post("user/logout/blacklist/", { refresh_token })
      .then((res) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosAPI.defaults.headers["Authorization"] = null;
        dispatch({
          type: actionTypes.USER_LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.USER_LOGOUT_FAIL,
          payload: err.response.data.detail,
        });
      });
  };

  // remove user
  async function deleteUser(id) {
    dispatch({ type: actionTypes.USER_PROFILE_DELETE_REQUEST, payload: id });
    try {
      const { data } = axiosAPI.delete("/api/user/profile/" + id);
      dispatch({
        type: actionTypes.USER_PROFILE_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_PROFILE_DELETE_FAIL,
        payload: error.response.data.detail,
      });
    }
  }
  // update user
  async function updateUser(id, updateDetails) {
    dispatch({ type: actionTypes.USER_PROFILE_UPDATE_REQUEST });
    try {
      const { data } = axiosAPI.put("/api/user/profile/" + id, updateDetails);

      dispatch({
        type: actionTypes.USER_PROFILE_UPDATE_SUCCESS,
        payload: data,
      });
      localStorage.set("user", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: actionTypes.USER_PROFILE_UPDATE_FAIL,
        payload: error.response.data.message,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        error: state.error,
        loading: state.loading,
        login,
        logMeOut,
        register,
        deleteUser,
        updateUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const AuthConsumer = AuthContext.Consumer;

export { AuthContextProvider, AuthConsumer, AuthContext };
