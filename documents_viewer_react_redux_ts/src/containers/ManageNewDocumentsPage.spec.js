import React from "react";
import ManageNewDocumentsPage from "./ManageNewDocumentsPage";

import { BrowserRouter } from "react-router-dom";

import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// Actions
// import { saveDocument } from "../redux/actions/documentActions";

const mockStore = configureStore([]);

describe("ManageNewDocumentsPage", () => {
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
  it("should match snapshot", () => {
    const ManageNewDocumentsPageTree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ManageNewDocumentsPage />
        </BrowserRouter>{" "}
      </Provider>
    );
    expect(ManageNewDocumentsPageTree.toJSON()).toMatchSnapshot();
  });
});
