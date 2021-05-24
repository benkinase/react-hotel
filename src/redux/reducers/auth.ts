import { ActionTypes as Action } from "../actions/ActionTypes";
import { authState, RegisterState } from "../../types";
let pre_Token = localStorage.getItem("token");
let token = pre_Token ? JSON.parse(pre_Token) : null;
const initialState: authState = {
  token: token,
  isAuth: true,
  error: null,
  loading: false,
};

export const loginReducer = (
  state: typeof initialState = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case Action.LOAD_REQUEST:
      return Object.assign({}, state, { loading: true });
    case Action.LOAD_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        isAuth: true,
        ...payload,
        error: null,
      });
    case Action.LOAD_FAIL:
      return Object.assign({}, state, {
        error: payload,
        loading: false,
      });
    case Action.LOGIN_REQUEST:
      return Object.assign({}, state, { loading: true });
    case Action.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        isAuth: true,
        token: payload.key,
        error: null,
      });
    case Action.LOGIN_FAIL:
      return Object.assign({}, state, {
        loading: false,
        error: payload,
      });

    case Action.LOGOUT_SUCCESS:
      return {};
    case Action.LOGOUT_FAIL:
      return {};
    default:
      return state;
  }
};

export function registerReducer(
  state: RegisterState = {},
  { type, payload }: any
) {
  switch (type) {
    case Action.REGISTER_REQUEST:
      return { loading: true };
    case Action.REGISTER_SUCCESS:
      return { loading: false, user: payload };
    case Action.REGISTER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
}
