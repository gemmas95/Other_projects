import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "./DocumentsList.css";

import { deleteDocument } from "../../redux/actions/documentActions";

import DocumentItem from "./DocumentItem";

// Interfaces
import IDocument from "../../models/document.interface";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../redux/actions/actionTypes";

interface Props {
  currentDocuments: IDocument[];
  deleteDocument: any;
}

interface IError {
  message: string;
  error: string;
}

const DocumentsList = ({
  deleteDocument,
  currentDocuments,
}: Props): JSX.Element => {
  function handleDelete(id: string) {
    deleteDocument(id)
      .then(() => {
        toast.success("Deleted document!");
      })
      .catch((error: IError) => {
        console.error(error);
        toast.error("Oops, something went wrong...", {
          pauseOnHover: true,
        });
      });
  }

  return (
    <>
      <ul className="document__container">
        {currentDocuments &&
          currentDocuments.map((document: IDocument) => {
            return (
              <DocumentItem
                key={document.id}
                document={document}
                onDeleteClick={handleDelete}
              />
            );
          })}
      </ul>
    </>
  );
};

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, AppActions>) {
  return {
    deleteDocument: (documentId: string) =>
      dispatch(deleteDocument(documentId)),
  };
}

export default connect(null, mapDispatchToProps)(DocumentsList);
