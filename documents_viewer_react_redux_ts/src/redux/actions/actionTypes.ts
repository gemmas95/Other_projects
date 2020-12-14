import IDocument from "../../models/document.interface";

// Documents actions
export const LOAD_DOCUMENTS: string = "LOAD_DOCUMENTS";
export const CREATE_DOCUMENT_SUCCESS: string = "CREATE_DOCUMENT_SUCCESS";
export const DELETE_DOCUMENT_SUCCESS: string = "DELETE_DOCUMENT_SUCCESS";
export const FILTER_DOCUMENTS_BY_TYPE: string = "FILTER_DOCUMENTS_BY_TYPE";

// Api calls actions
export const LOADING: string = "LOADING";
export const NO_LOADING: string = "NO_LOADING";

export const API_CALL_ERROR: string = "API_CALL_ERROR";

// Interfaces actions
export interface LoadDocumentsAction {
  type: typeof LOAD_DOCUMENTS;
  documents: IDocument[];
}

export interface CreateDocumentSuccessAction {
  type: typeof CREATE_DOCUMENT_SUCCESS;
  document: IDocument;
}

export interface DeleteDocumentSuccessAction {
  type: typeof DELETE_DOCUMENT_SUCCESS;
  documentId: string;
}

export interface FilterDocumentsByType {
  type: typeof FILTER_DOCUMENTS_BY_TYPE;
  typeFilter: string;
}

export interface LoadingAction {
  type: typeof LOADING;
}

export interface NoLoadingAction {
  type: typeof NO_LOADING;
}

export interface ApiCallErrorAction {
  type: typeof API_CALL_ERROR;
}

export type DocumentsActionTypes =
  | LoadDocumentsAction
  | CreateDocumentSuccessAction
  | DeleteDocumentSuccessAction
  | FilterDocumentsByType;

export type ApiCallActionTypes =
  | LoadingAction
  | NoLoadingAction
  | ApiCallErrorAction;

export type AppActions = DocumentsActionTypes | ApiCallActionTypes;
