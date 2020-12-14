import {
  loadDocuments,
  createDocument,
  deleteDocument,
  filterDocuments,
  // loadDocumentSuccess,
  createDocumentSuccess,
} from "./documentActions";
import * as documentActions from "./documentActions";
import { cleanup } from "@testing-library/react";
import * as types from "./actionTypes";

import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

jest.dontMock("./apiStatusActions");
jest.dontMock("../../api/documentAPI");

describe("documentActions", () => {
  afterEach(() => {
    cleanup();
    fetchMock.restore();
    jest.clearAllMocks();
  });
  describe("loadDocuments", () => {
    it("should be called loadDocuments ok", async () => {
      const dispatch = jest.fn();
      // const loadDocumentSuccess = jest.fn();

      await loadDocuments()(dispatch);
      expect(dispatch).toHaveBeenCalled();
      // expect(loadDocumentSuccess).toHaveBeenCalled();
    });

    xit("should be called loadDocuments and catch an error", async () => {
      const dispatch = jest.fn();

      let error = true;
      await createDocument({})(dispatch)
        .savedDocument(error)
        .catch((e) => expect(e).toHaveBeenCalled());
    });

    xit("should create BEGIN_API_CALL and LOAD_DOCUMENTS when loading documents", () => {
      let documents = [{}];

      const expectedActions = [
        { type: types.LOADING },
        { type: types.LOAD_DOCUMENTS, documents },
      ];

      const store = mockStore({ documents: [] });
      return store.dispatch(loadDocuments()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe("createDocument", () => {
    it("should be called createDocument ok", async () => {
      const dispatch = jest.fn();
      let document = [{}];

      await createDocument(document)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
    it("should create a CREATE_DOCUMENT_SUCCESS action", () => {
      //arrange
      const document = { title: "test" };
      const expectedAction = {
        type: types.CREATE_DOCUMENT_SUCCESS,
        document,
      };

      //act
      const action = createDocumentSuccess(document);

      //assert
      expect(action).toEqual(expectedAction);
    });
    xit("should be called createDocuments with spyon", async () => {
      const dispatch = jest.fn();

      let document = [{}];

      const createSpy = jest.spyOn(documentActions, "createDocumentSuccess");

      await documentActions.createDocument(document)(dispatch);
      //   const action = createDocumentSuccess(document);
      //   const createDocumentSuccess = jest.fn();

      //   await createDocument()(dispatch);
      //   expect(dispatch).toHaveBeenCalled();
      expect(createSpy).toHaveBeenCalled();
    });
  });

  describe("deleteDocuments", () => {
    it("should be called deleteDocument ok", async () => {
      const dispatch = jest.fn();
      let id = "14";

      await deleteDocument(id)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("filterDocuments", () => {
    it("should be called filterDocuments ok", () => {
      const dispatch = jest.fn();
      let docs = [{}];
      let type = "all";

      filterDocuments(docs, type)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
