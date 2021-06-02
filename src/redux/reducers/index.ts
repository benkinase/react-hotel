import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./auth";

const rootReducer = combineReducers({
  auth: loginReducer,
  register: registerReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
