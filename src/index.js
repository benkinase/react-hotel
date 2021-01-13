import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomContextProvider } from "./context/RoomContext";
import { AuthContextProvider } from "./context/auth/AuthContext";
import { ToggleContextProvider } from "./context/modal/ModalContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <AuthContextProvider>
    <RoomContextProvider>
      <ToggleContextProvider>
        <React.StrictMode>
          <Router>
            <App />
          </Router>
        </React.StrictMode>
      </ToggleContextProvider>
    </RoomContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
