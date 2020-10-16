import renderer from "react-test-renderer";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TableList from "../components/TableList";

describe("TableList", () => {
  let fakecontributorsList = null;
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should match", () => {
    const tableListTree = renderer.create(
      <TableList contributorsList={fakecontributorsList} />
    );
    expect(tableListTree).toMatchSnapshot();
  });

  it("should render a text when there are no contributorsList", () => {
    fakecontributorsList = null;

    act(() => {
      render(<TableList contributorsList={fakecontributorsList} />, container);
    });

    expect(
      container.querySelector('[data-testid="nullContributorsText"]')
        .textContent
    ).toBe(
      `Please enter a repository name and his owner name to find it's contributors`
    );
  });

  it("should render a loading image when exist a list of contributors and it's length is 0", () => {
    fakecontributorsList = [];

    act(() => {
      render(<TableList contributorsList={fakecontributorsList} />, container);
    });

    expect(container.querySelector('[data-testid="isLoading"]').alt).toBe(
      "loading"
    );
  });

  it("should render contributors", () => {
    fakecontributorsList = [{ login: "Bombasto", id: 13 }];

    act(() => {
      render(
        <TableList
          contributorsList={fakecontributorsList}
          key={fakecontributorsList.id}
        />,
        container
      );
    });

    expect(
      container.querySelector('[data-testid="contributorsLength"]').textContent
    ).toBe(`This repository has ${fakecontributorsList.length} contributor/s!`);
  });

  it("should render a message error when there is an error", () => {
    fakecontributorsList = { message: "I'm a fake error!" };

    act(() => {
      render(<TableList contributorsList={fakecontributorsList} />, container);
    });

    expect(container.querySelector('[data-testid="error"]').textContent).toBe(
      `Error: ${fakecontributorsList.message}`
    );
  });
});
