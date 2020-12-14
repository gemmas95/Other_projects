import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

describe("Home", () => {
  it("should match snapshot", () => {
    const HomeTree = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(HomeTree).toMatchSnapshot();
  });
});
