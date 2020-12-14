import * as types from "../actions/actionTypes";
import initialState from "./initialState";

import IDocument from "../../models/document.interface";
import { Action, Reducer } from "redux";

interface IAction extends Action {
  documents: IDocument[];
  document: IDocument;
  type: string;
  documentId: string;
  typeFilter: string;
}

// Using spread operator to improve the performance of app and immutability of state
const documentReducer: Reducer<IDocument[] | any, IAction> = (
  state = initialState.documents,
  action
) => {
  switch (action.type) {
    case types.LOAD_DOCUMENTS:
      return {
        data: [...action.documents],
        visibleDocs: [...action.documents],
      };
    case types.CREATE_DOCUMENT_SUCCESS:
      return {
        data: [...state.data, action.document],
        visibleDocs: [...state.visibleDocs, action.document],
      };
    case types.DELETE_DOCUMENT_SUCCESS:
      return {
        data: [
          ...state.data.filter(
            (document: IDocument) => document.id !== action.documentId
          ),
        ],
        visibleDocs: [
          ...state.visibleDocs.filter(
            (document: IDocument) => document.id !== action.documentId
          ),
        ],
      };
    case types.FILTER_DOCUMENTS_BY_TYPE:
      return {
        ...state,
        visibleDocs:
          action.typeFilter === ""
            ? state.data
            : state.data.filter(
                (doc: IDocument) => doc.type === action.typeFilter
              ),
      };

    default:
      return state;
  }
};

export default documentReducer;
