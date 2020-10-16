import renderer from "react-test-renderer";
import React from "react";
import Dashboard from "../components/Dashboard";

describe("Dashboard", () => {
  it("should match Dashboard Component", () => {
    const dashboardComponentTree = renderer.create(<Dashboard />);
    expect(dashboardComponentTree).toMatchSnapshot();
  });
});
