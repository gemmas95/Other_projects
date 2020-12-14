import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("should match snapshot", () => {
    const SpinnerTree = render(
      <BrowserRouter>
        <Spinner />
      </BrowserRouter>
    );
    expect(SpinnerTree).toMatchSnapshot();
  });
});
