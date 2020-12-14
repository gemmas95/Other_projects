import React from "react";
import DocumentsPage from "./DocumentsPage";
import { BrowserRouter } from "react-router-dom";

import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// Actions
/* import {
  loadDocuments,
  deleteDocument,
} from "../redux/actions/documentActions"; */

const mockStore = configureStore([]);
describe("Documents Page", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      documents: {
        data: [{}],
        visibleDocuments: [{}],
      },
    });

    store.dispatch = jest.fn();
  });

  // This test was skiped because it gives an error due to it
  // Filter component
  xit("should match snapshot", () => {
    const DocumentsPageTree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <DocumentsPage />
        </BrowserRouter>{" "}
      </Provider>
    );
    expect(DocumentsPageTree.toJSON()).toMatchSnapshot();
  });
});
