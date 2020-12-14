import renderer from "react-test-renderer";
import React from "react";
import Filter from "./Filter";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";

import { fireEvent } from "@testing-library/react";

// Action
import { filterDocuments } from "../../redux/actions/documentActions";

const mockStore = configureStore([]);

describe("Filter", () => {
  let container;
  let store;

  let documents;

  beforeEach(() => {
    // To have acces to select element
    container = document.createElement("div");
    document.body.appendChild(container);

    // To wrap component with a Provider and store
    store = mockStore({
      myState: "sample text",
      documents: {
        visibleDocs: [{}],
      },
    });

    store.dispatch = jest.fn();
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it("should match snapshot", () => {
    documents = [{}];

    const FilterTree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Filter filterDocuments={filterDocuments} documents={documents} />
        </BrowserRouter>{" "}
      </Provider>,
      container
    );
    expect(FilterTree.toJSON()).toMatchSnapshot();
  });

  it("should dispacth filterDocuments", () => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Filter filterDocuments={filterDocuments} documents={documents} />
          </BrowserRouter>
        </Provider>,
        container
      );
    });

    // getByTestId not working so I use querySelector instead
    fireEvent.change(document.querySelector('[data-testid="select"]'), {
      target: { value: "advanced" },
    });

    documents = [{}];

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
