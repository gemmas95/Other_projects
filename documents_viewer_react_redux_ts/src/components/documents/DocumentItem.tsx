import React from "react";
import { NavLink } from "react-router-dom";

import IDocument from "../../models/document.interface";

interface Props {
  onDeleteClick: Function;
  document: IDocument;
}

const DocumentItem = ({ onDeleteClick, document }: Props): JSX.Element => {
  return (
    <li key={document.id} className="document__item">
      <div>
        <NavLink to={`/documents/${document.id}`}>
          <p>{document.title}</p>
        </NavLink>
        <div>
          <p>{document.date}</p>
          <p>{document.type}</p>
        </div>
      </div>
      <button
        data-testid="button"
        onClick={(event) => {
          event.preventDefault();
          onDeleteClick(document.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default DocumentItem;
