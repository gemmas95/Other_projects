import React from "react";
import { connect } from "react-redux";
import {
  sortByLessContributions,
  sortByMoreContributions,
} from "../../redux/actions/contributorsActions";

function HeaderMain(props) {
  console.log("this is props...", props);
  return (
    <div className="flex-row">
      <p>Ordenar por:</p>
      <button
        onClick={(event) => {
          event.preventDefault();
          props.sortByLessContributions(props.contributors);
        }}
      >
        Nombre ascendente
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          props.sortByMoreContributions(props.contributors);
        }}
      >
        Nombre descendente
      </button>
      <button>Menos contribuciones</button>
      <button>Más contribuciones</button>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMain);
