import React from "react";
import "./Pagination.css";

interface Props {
  documentsPerPage: number;
  totalDocuments: number;
  paginate: Function;
}

const Pagination = ({
  documentsPerPage,
  totalDocuments,
  paginate,
}: Props): JSX.Element => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDocuments / documentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="paginationList">
        {pageNumbers.map((number: number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
