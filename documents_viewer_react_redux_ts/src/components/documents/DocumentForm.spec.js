import React from "react";
import DocumentForm from "./DocumentForm";
import { BrowserRouter } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";

describe("DocumentForm", () => {
  const handleSubmit = () => {};
  const handleChange = () => {};
  let saving;

  beforeEach(() => {
    cleanup();
  });

  it("should match snapshot with saving false", () => {
    const DocumentFormTree = render(
      <BrowserRouter>
        <DocumentForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          saving={saving}
        />
      </BrowserRouter>
    );
    expect(DocumentFormTree).toMatchSnapshot();
  });

  it("should match snapshot with saving true", () => {
    saving = true;
    const DocumentFormTree = render(
      <BrowserRouter>
        <DocumentForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          saving={saving}
        />
      </BrowserRouter>
    );
    expect(DocumentFormTree).toMatchSnapshot();
  });
});
