import renderer from "react-test-renderer";
import React from "react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("should match snapshot without data", () => {
    const PaginationTree = renderer.create(<Pagination />);
    expect(PaginationTree.toJSON()).toMatchSnapshot();
  });
});
