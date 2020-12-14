import documentReducer from "./documentReducer";
import initialState from "./initialState";
import * as types from "../actions/actionTypes";

describe("documentsReducer", () => {
  let state;
  let action = {
    type: types,
  };
  it("should exist documentReducer", () => {
    expect(documentReducer).toBeDefined();
  });

  it("should state equal initialState", () => {
    expect(documentReducer(state, action.type)).toEqual(initialState.documents);
  });

  it("should do LOAD_DOCUMENTS", () => {
    state = {
      data: [{}],
      visibleDocs: [{}],
    };
    action = {
      type: types.LOAD_DOCUMENTS,
      documents: [{ title: "team bombasto" }],
    };

    const expectedResult = {
      data: [{ title: "team bombasto" }],
      visibleDocs: [{ title: "team bombasto" }],
    };

    const actionTest = documentReducer(state, action);

    expect(actionTest).toBeTruthy();
    expect(actionTest).toEqual(expectedResult);
  });

  it("should do CREATE_DOCUMENT_SUCCESS", () => {
    state = {
      data: [{}],
      visibleDocs: [{}],
    };

    action = {
      type: types.CREATE_DOCUMENT_SUCCESS,
      document: { team: "bombasto" },
    };

    const data = {
      data: [{}, { team: "bombasto" }],
      visibleDocs: [{}, { team: "bombasto" }],
    };

    const actionTest = documentReducer(state, action);

    expect(actionTest).toBeTruthy();
    expect(actionTest).toEqual(data);
  });

  it("should do DELETE_DOCUMENT_SUCCESS", () => {
    state = {
      data: [
        { name: "team bombasto", id: "13" },
        { name: "celeritas", id: "14" },
      ],
      visibleDocs: [
        { name: "team bombasto", id: "13" },
        { name: "celeritas", id: "14" },
      ],
    };

    action = {
      type: types.DELETE_DOCUMENT_SUCCESS,
      documentId: "14",
    };
    const data = {
      data: [{ name: "team bombasto", id: "13" }],
      visibleDocs: [{ name: "team bombasto", id: "13" }],
    };
    expect(documentReducer(state, action)).toEqual(data);
  });

  it("should do FILTER_DOCUMENTS_BY_TYPE with specific type", () => {
    state = {
      data: [
        { name: "team bombasto", type: "13" },
        { name: "celeritas", type: "14" },
      ],
      visibleDocs: [
        { name: "team bombasto", type: "13" },
        { name: "celeritas", type: "14" },
      ],
    };

    action = {
      type: types.FILTER_DOCUMENTS_BY_TYPE,
      typeFilter: "13",
    };

    const expectedState = {
      data: [
        { name: "team bombasto", type: "13" },
        { name: "celeritas", type: "14" },
      ],
      visibleDocs: [{ name: "team bombasto", type: "13" }],
    };
    expect(documentReducer(state, action)).toBeDefined();
    expect(documentReducer(state, action)).toEqual(expectedState);
  });

  it("should do FILTER_DOCUMENTS_BY_TYPE and return all with no type", () => {
    state = {
      data: [
        { name: "team bombasto", type: "13" },
        { name: "celeritas", type: "14" },
      ],
      visibleDocs: [
        { name: "team bombasto", type: "13" },
        { name: "celeritas", type: "14" },
      ],
    };

    action = {
      type: types.FILTER_DOCUMENTS_BY_TYPE,
      typeFilter: "",
    };

    expect(documentReducer(state, action)).toBeDefined();
    expect(documentReducer(state, action)).toEqual(state);
  });
});
