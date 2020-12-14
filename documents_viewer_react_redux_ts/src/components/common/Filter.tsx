import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../redux/actions/actionTypes";
import { filterDocuments } from "../../redux/actions/documentActions";
import styled from "styled-components";

// Interfaces
import IDocument from "../../models/document.interface";
import { AppState } from "../../redux/reducers";

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-weight: bolder;
  }
`;

interface Props {
  filterDocuments: Function;
  documents: IDocument[];
}

const Filter = (props: Props): JSX.Element => {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    props.filterDocuments(event.target.value);
  }

  return (
    <FilterRow>
      <p>{props.documents.length} documents found</p>
      <label>
        Filter by
        <select
          data-testid="select"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <option value="">All</option>
          <option value="simple">Simple</option>
          <option value="custom">Custom</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>
    </FilterRow>
  );
};

function mapStateToProps(state: AppState) {
  return {
    documents: state.documents.visibleDocs,
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, AppActions>) {
  return {
    filterDocuments: (type: string) => dispatch(filterDocuments(type)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
