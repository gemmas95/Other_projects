import renderer from "react-test-renderer";
import React from "react";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent } from "@testing-library/dom";

import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  let container = null;
  let dataRepo = { repoName: "tour-of-heroes", ownerName: "Bombasto" };
  const searchFormTree = renderer.create(<SearchForm dataRepo={dataRepo} />);
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it("should match snapshot", () => {
    expect(searchFormTree).toMatchSnapshot();
  });
  it("should call onSubmit and go to handleSubmit", () => {
    const handleSubmit = jest.fn((event) => event.preventDefault());
    const handleChange = jest.fn();

    act(() => {
      render(
        <SearchForm
          dataRepo={dataRepo}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />,
        container
      );
      const submit = document.querySelector('[data-testid="form"]');

      fireEvent.submit(submit);
    });

    const button = document.querySelector('[data-testid="button"]');

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(handleSubmit).toHaveBeenCalled();
  });
});
