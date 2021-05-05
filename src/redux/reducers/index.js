import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./auth";
import projects from "./projects";

const rootReducer = combineReducers({
  auth: loginReducer,
  register: registerReducer,
  projects,
});

export default rootReducer;
