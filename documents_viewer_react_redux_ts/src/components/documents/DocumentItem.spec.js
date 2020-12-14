import React from "react";
import DocumentItem from "./DocumentItem";
import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

describe("DocumentItem", () => {
  let container = null;
  const documentProps = {};
  let onDeleteClick = () => {};

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
    const DocumentItemTree = render(
      <BrowserRouter>
        <DocumentItem document={documentProps} onDeleteClick={onDeleteClick} />
      </BrowserRouter>
    );
    expect(DocumentItemTree).toMatchSnapshot();
  });

  it("should call onDeleteClick with onclick button event", () => {
    // Arrange jest function and prepare component to be wrapped
    const onDeleteClick = jest.fn();
    onDeleteClick("12");

    act(() => {
      render(
        <BrowserRouter>
          <DocumentItem
            document={documentProps}
            onDeleteClick={onDeleteClick}
          />{" "}
        </BrowserRouter>,
        container
      );
    });
    const button = document.querySelector('[data-testid="button"]');

    // Act
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onDeleteClick).toHaveBeenCalled();
  });
});
