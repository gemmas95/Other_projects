import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  const NavBarTree = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  it("should match snapshot", () => {
    expect(NavBarTree).toMatchSnapshot();
  });
});
