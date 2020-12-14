import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./PageNotFound";

describe("PageNotFound", () => {
  it("should match snapshot", () => {
    const PageNotFoundTree = render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>
    );
    expect(PageNotFoundTree).toMatchSnapshot();
  });
});
