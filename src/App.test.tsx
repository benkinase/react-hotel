import React from "react";
//import { render } from '@testing-library/react';
import { render } from "./test-utils";
import App from "./App";
// Using the custom render function

describe("App Test Suite", () => {
  // test("renders learn react link", () => {
  //   const { getByText } = render(<App />);
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  it("Renders the store connected app with initialState", () => {
    const { container } = render(<App />, {
      initialState: { auth: { localStore: {} } },
    });
    expect(container).toBeInTheDocument();
  });
});
