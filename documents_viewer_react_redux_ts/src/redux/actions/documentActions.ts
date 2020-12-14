import * as types from "./actionTypes";
import { AppActions } from "./actionTypes";
import IDocument from "../../models/document.interface";
import { Dispatch } from "react";

// Imports of fake api calls
import {
  getDocuments,
  saveDocument,
  deletingDocument,
} from "../../api/documentAPI";

import { beginApiCall, apiCallError, endApiCall } from "./apiStatusActions";

// Action types from action creators

export function loadDocumentSuccess(documents: IDocument[]): AppActions {
  return { type: types.LOAD_DOCUMENTS, documents };
}

export function createDocumentSuccess(document: IDocument): AppActions {
  // New documents it's saved in action property document
  return { type: types.CREATE_DOCUMENT_SUCCESS, document };
}

export function removeDocument(documentId: string): AppActions {
  return { type: types.DELETE_DOCUMENT_SUCCESS, documentId };
}

export function filterDocumentsByType(typeFilter: string): AppActions {
  return { type: types.FILTER_DOCUMENTS_BY_TYPE, typeFilter };
}

// Action creators

export function loadDocuments() {
  return async function (dispatch: Dispatch<AppActions>) {
    dispatch(beginApiCall());
    return await getDocuments()
      .then((documents) => {
        dispatch(loadDocumentSuccess(documents));
        dispatch(endApiCall());
      })
      .catch((error) => {
        dispatch(apiCallError());
        console.error(error);
        throw error;
      });
  };
}

// Notifications with toast to improve user experience could be handled here or in the component. I don't want
// to do action creators and the functions that handle them  too verbose so notifications are handled in components
export function createDocument(document: IDocument) {
  return async function (dispatch: Dispatch<AppActions>) {
    dispatch(beginApiCall());
    return await saveDocument(document)
      .then((savedDocument) => {
        dispatch(createDocumentSuccess(savedDocument));
        dispatch(endApiCall());
      })
      .catch((error) => {
        dispatch(apiCallError());
        console.error(error);
        throw error;
      });
  };
}

// Here I delete document optimistically for a better user experience
export function deleteDocument(id: string) {
  return async function (dispatch: Dispatch<AppActions>) {
    dispatch(removeDocument(id));
    return await deletingDocument(id).catch((error) => {
      console.error(error);
      throw error;
    });
  };
}

export function filterDocuments(type: string) {
  return function (dispatch: Dispatch<AppActions>) {
    dispatch(filterDocumentsByType(type));
  };
}
