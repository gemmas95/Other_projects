import renderer from "react-test-renderer";
import React from "react";
import DocumentInfo from "./DocumentInfo";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { cleanup } from "@testing-library/react";

const mockStore = configureStore([]);
describe("DocumentInfo", () => {
  let store;

  let match = {
    params: {
      documentId: "1",
    },
  };
  beforeEach(() => {
    store = mockStore({
      myState: "sample text",
      documents: {
        data: [{ id: "1" }],
      },
    });

    store.dispatch = jest.fn();
  });

  afterEach(() => {
    cleanup();
  });

  it("should match snapshot with params match docId", () => {
    const DocumentInfoTree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <DocumentInfo match={match} />
        </BrowserRouter>
      </Provider>
    );
    expect(DocumentInfoTree.toJSON()).toMatchSnapshot();
  });
});
