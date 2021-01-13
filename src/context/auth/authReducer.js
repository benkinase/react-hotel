import { actionTypes } from "./actionTypes";

const token = localStorage.getItem("access_token") || null;

export const initialState = {
  username: "",
  token: token,
  loading: false,
  error: "",
};
console.log(initialState);
export const AuthReducer = (state, { type, payload }) => {
  console.log(state, payload);
  switch (type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return { loading: true };
    case actionTypes.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        username: payload.username,
        token: payload.token.access,
        loading: false,
      });
    case actionTypes.USER_LOGIN_FAIL:
      return Object.assign({}, state, { loading: false, error: payload });

    case actionTypes.USER_LOGOUT_SUCCESS:
      return {};

    case actionTypes.USER_REGISTER_REQUEST:
      return { loading: true };
    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        loading: false,
      };
    case actionTypes.USER_REGISTER_FAIL:
      return Object.assign({}, state, { loading: false, error: payload });

    case actionTypes.USER_PROFILE_REQUEST:
      return { loading: true };
    case actionTypes.USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: payload.profile,
        loading: false,
        error: payload,
      };
    case actionTypes.USER_PROFILE_FAIL:
      return Object.assign({}, state, { loading: false, error: payload });

    case actionTypes.USER_PROFILE_UPDATE_REQUEST:
      return { loading: true };
    case actionTypes.USER_PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        //message: payload.message,
      };
    case actionTypes.USER_PROFILE_UPDATE_FAIL:
      return Object.assign({}, state, { loading: false, error: payload });

    case actionTypes.USER_PROFILE_DELETE_REQUEST:
      return { loading: true };
    case actionTypes.USER_PROFILE_DELETE_SUCCESS:
      return {
        loading: false,
        user: null,
        isLoggedIn: false,
      };
    case actionTypes.USER_PROFILE_DELETE_FAIL:
      return { loading: false, error: payload };

    case actionTypes.USERS_LIST_REQUEST:
      return { loading: true };
    case actionTypes.USERS_LIST_SUCCESS:
      return { users: payload, loading: false };
    case actionTypes.USERS_LIST_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
