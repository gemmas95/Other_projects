import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./DocumentInfo.css";

// Interfaces
import { RouteComponentProps } from "react-router";
import IDocument from "../../models/document.interface";
import { AppState } from "../../redux/reducers";

interface MatchParams {
  documentId: string;
}

interface Props {
  documents: IDocument[];
}

interface Props extends RouteComponentProps<MatchParams> {}

const DocumentInfo: React.FC<Props> = (props) => {
  const [documentId] = useState<string>(props.match.params.documentId);
  const { documents } = props;

  const [document, setDocument] = useState<null | undefined | IDocument>(null);

  useEffect(() => {
    setDocument(
      (function getDocument(documentId: string): IDocument | undefined {
        return documents.find((doc: IDocument) => {
          return doc.id === documentId;
        });
      })(documentId)
    );
  }, [documentId, documents]);

  return (
    <>
      {document && (
        <div className="documentInfo">
          <h1>{document.title}</h1>
          <div className="shortInfo">
            <p>{document.date}</p>
            <p>{document.type}</p>
          </div>
          {document.type !== "simple" && <p>{document.text}</p>}
          {document.type === "advanced" && document.image && (
            <img src={document.image} alt={document.title} />
          )}
        </div>
      )}
    </>
  );
};

function mapStateToProps(state: AppState) {
  return {
    documents: state.documents.data,
  };
}

export default connect(mapStateToProps)(DocumentInfo);
