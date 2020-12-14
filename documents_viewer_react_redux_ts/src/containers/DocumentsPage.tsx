import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// Components
import Spinner from "../components/common/Spinner";
import DocumentsList from "../components/documents/DocumentsList";
import Pagination from "../components/common/Pagination";
import Filter from "../components/common/Filter";

// Actions
import {
  loadDocuments,
  deleteDocument,
} from "../redux/actions/documentActions";

// Interfaces
import IDocument from "../models/document.interface";
import { AppState } from "../redux/reducers";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../redux/actions/actionTypes";

interface Props {
  loadDocuments: Function;
  documents: undefined | IDocument[];
  isLoading: boolean;
  deleteDocument: Function;
  visibleDocuments: any;
}

interface IError {
  message: string;
  error: string;
}

const DocumentsPage = ({
  loadDocuments,
  documents,
  visibleDocuments,
  isLoading,
}: Props): JSX.Element => {
  const history = useHistory();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [documentsPerPage] = useState<number>(5);

  // Get current posts
  const indexOfLastPost = currentPage * documentsPerPage;
  const indexOfFirstPost = indexOfLastPost - documentsPerPage;

  const currentDocuments = visibleDocuments?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  useEffect(() => {
    if (documents?.length === 0) {
      (async function () {
        await loadDocuments().catch((error: IError) =>
          alert("Loading contributors failed" + error.message)
        );
      })();
    }
  }, [documents, loadDocuments]);

  // Change page

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Documents</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <button
            className="greenButton"
            onClick={(event) => {
              event.preventDefault();
              history.push("/newdocument");
            }}
          >
            Add document
          </button>
          <Filter />
          <DocumentsList currentDocuments={currentDocuments} />
          <Pagination
            documentsPerPage={documentsPerPage}
            totalDocuments={visibleDocuments?.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

function mapStateToProps(state: AppState) {
  return {
    documents: state.documents.data,
    visibleDocuments: state.documents.visibleDocs,
    isLoading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, AppActions>) {
  return {
    loadDocuments: () => dispatch(loadDocuments()),
    deleteDocument: (documentId: string) =>
      dispatch(deleteDocument(documentId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
