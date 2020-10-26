import React from "react";
import { connect } from "react-redux";
import {
  sortByLessContributions,
  sortByMoreContributions,
  sortByNameAscending,
  sortByNameDescending,
} from "../../redux/actions/contributorsActions";
import "./HeaderMain.scss";

function HeaderMain(props) {
  console.log("this is props...", props);
  return (
    <div className="flex-row">
      <p>Ordenar por:</p>
      <button
        className="btn btn-default btn-sm"
        onClick={(event) => {
          event.preventDefault();
          props.sortByNameAscending(props.contributors);
        }}
      >
        Nombre ascendente
      </button>
      <button
        className="btn btn-default btn-sm"
        onClick={(event) => {
          event.preventDefault();
          props.sortByNameDescending(props.contributors);
        }}
      >
        Nombre descendente
      </button>
      <button
        className="btn btn-default btn-sm"
        onClick={(event) => {
          event.preventDefault();
          props.sortByLessContributions(props.contributors);
        }}
      >
        Menos contribuciones
      </button>
      <button
        className="btn btn-default btn-sm"
        onClick={(event) => {
          event.preventDefault();
          props.sortByMoreContributions(props.contributors);
        }}
      >
        Más contribuciones
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contributors: state.contributors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sortByLessContributions: (contrib) =>
      dispatch(sortByLessContributions(contrib)),
    sortByMoreContributions: (contrib) =>
      dispatch(sortByMoreContributions(contrib)),
    sortByNameAscending: (contrib) => dispatch(sortByNameAscending(contrib)),
    sortByNameDescending: (contrib) => dispatch(sortByNameDescending(contrib)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMain);
