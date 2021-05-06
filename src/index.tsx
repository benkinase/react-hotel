import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { RoomContextProvider } from "./context/RoomContext";
import { ToggleContextProvider } from "./context/toggle/ToggleContext";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <RoomContextProvider>
    <ToggleContextProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ToggleContextProvider>
  </RoomContextProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
