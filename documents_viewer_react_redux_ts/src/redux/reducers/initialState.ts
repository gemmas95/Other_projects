import IDocument from "../../models/document.interface";

// Documents property of initialState will be saved data related to documents
const initialState: any = {
  documents: {
    data: [],
    visibleDocs: [],
  },
  apiCallsInProgress: 0,
};

export interface IInitialState {
  documents: {
    data: [] | IDocument[];
    visibleDocs: [] | IDocument[];
  };
  apiCallsInProgress: number;
}

export default initialState;
