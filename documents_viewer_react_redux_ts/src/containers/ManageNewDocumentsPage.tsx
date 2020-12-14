import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import DocumentForm from "../components/documents/DocumentForm";

// Actions
import { createDocument } from "../redux/actions/documentActions";

// Interfaces and types
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../redux/actions/actionTypes";
import IDocument from "../models/document.interface";

interface Props {
  saveDocument: Function;
}

interface IError {
  message: string;
  error: string;
}

const ManageNewDocumentsPage: React.FC<Props> = ({ saveDocument }) => {
  const history = useHistory();
  const [newData, setNewData] = useState({
    id: Math.ceil(Math.random() * 10000000000) + "",
    title: "",
    type: "",
    date: "",
    text: "",
    image: "",
  });
  const [saving, setSaving] = useState<boolean>(false);

  function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setSaving(true);
    saveDocument(newData)
      .then(() => {
        toast.success("Document saved!");
        history.push("/documents");
      })
      .catch((error: IError) => {
        setSaving(false);
        console.error(error);
        toast.error("Oops, something went wrong...", { autoClose: false });
      });
  }

  function handleChange(event: any) {
    event.preventDefault();
    const { name, value } = event.target;
    setNewData({ ...newData, [name]: value });
  }

  return (
    <>
      <h1>Add Document</h1>
      <DocumentForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        saving={saving}
      />
    </>
  );
};

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, AppActions>) {
  return {
    saveDocument: (newData: IDocument) => dispatch(createDocument(newData)),
  };
}

export default connect(null, mapDispatchToProps)(ManageNewDocumentsPage);
