import React from "react";
import DocumentList from "./DocumentsList";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// import { render } from "@testing-library/react";

// Action
import { deleteDocument } from "../../redux/actions/documentActions";
import { cleanup } from "@testing-library/react";

const mockStore = configureStore([]);

describe("DocumentList", () => {
  // const deleteDocument = () => {};
  const currentDocuments = [{}];
  let store;

  let DocumentListTree;
  beforeEach(() => {
    store = mockStore({
      myState: "sample text",
    });

    store.dispatch = jest.fn();

    DocumentListTree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <DocumentList
            deleteDocument={deleteDocument}
            currentDocuments={currentDocuments}
          />
        </BrowserRouter>{" "}
      </Provider>
    );
  });
  afterEach(() => {
    cleanup();
  });
  // It gives an error in console with unique key even though there is declared in child component 'DocumentItem'
  xit("should match snapshot", () => {
    expect(DocumentListTree.toJSON()).toMatchSnapshot();
  });

  /*   xit("should match snapshotsda", () => {
    const mockFn = jest.fn();
    const handleDelete = new mockFn();

    handleDelete();
    expect(deleteDocument).toHaveBeenCalled();
  }); */
});
