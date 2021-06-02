import { createStore, applyMiddleware, compose, Store } from "redux";
import rootReducer, { RootState } from "./reducers";
import thunk from "redux-thunk";
import { UserAction, DispatchType } from "../types";

//const user = JSON.parse(localStorage.getItem("user")) || null;
let initialState = {};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<RootState, UserAction> & { dispatch: DispatchType } =
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
export default store;
