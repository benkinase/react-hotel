// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import thunk from "redux-thunk";

// async
const middleware = [thunk];

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(...middleware)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export file
export * from "@testing-library/react";
// override RTL render method
export { render };
// mock state data
export const mockData = {
  "2021-04-10": [
    {
      main: { temp: 285.66, feels_like: 284.22, pressure: 1018 },
      day: "2021-04-10",
      time: " 12:00:00",
    },
    {
      main: { temp: 265.45, feels_like: 254.22, pressure: 1013 },
      day: "2021-04-10",
      time: " 12:00:00",
    },
  ],
  "2021-04-11": [
    {
      main: { temp: 285.66, feels_like: 284.22, pressure: 1048 },
      day: "2021-04-10",
      time: " 12:00:00",
    },
    {
      main: { temp: 265.45, feels_like: 254.22, pressure: 1015 },
      day: "2021-04-10",
      time: " 12:00:00",
    },
  ],
};
export const mockItems = [
  {
    temp: 265.45,
    feels: 254.22,
    pres: 1013,
    time: " 12:00:00",
  },
  {
    temp: 275.31,
    feels: 274.24,
    pres: 1029,
    time: " 15:00:00",
  },
];
export const mockCities = [
  { id: 1, name: "Berlin" },
  { id: 2, name: "Cologne" },
  { id: 3, name: "Dortmund" },
];
