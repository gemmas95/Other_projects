import React, { useState } from "react";
import TableList from "./TableList";
import Spinner from "./common/Spinner";
// import * as contributorsActions from "../redux/actions/contributorsActions";

import PropTypes from "prop-types";
import { loadContributors } from "../redux/actions/contributorsActions";
import SearchForm from "./SearchForm";
import "./Dashboard.scss";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const { loadContributors, isLoading } = props;
  console.log("this is props", props);
  // Data, handleSubmit and handleChange that will be send to form component
  const [dataRepo, setDataRepo] = useState({
    repoName: "",
    ownerName: "",
  });

  const handleChange = ({ target }) => {
    setDataRepo({
      ...dataRepo,

      [target.name]: target.value,
    });
  };

  function handleSubmit(event) {
    if (dataRepo.repoName === "" || dataRepo.ownerName === "") {
      alert("You must enter all fields!");
      return false;
    } else {
      event.preventDefault();
      loadContributors(dataRepo);
      // We could handle error in other ways, p.e. using <then(____).catch(____);
    }
  }

  return (
    <div className="container-fluid">
      <h1 className="jumbotron">Contributors List</h1>
      <SearchForm
        dataRepo={dataRepo}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {isLoading ? <Spinner /> : <TableList />}
    </div>
  );
};

// We will be passing via props all inside mapStateToProps and mapDispacthToProps
function mapStateToProps(state) {
  return {
    contributors: state.contributors,
    isLoading: state.apiCallsInProgress > 0,
  };
}

// Important dipatch the action creator you want to do, if not in the document of the action call
// p.e. contributorsAction.js won't recognize dispacth and won't enter inside dispacth functions...
// Also take into consideration <import { bindActionCreators } from "redux";> if necessary
function mapDispatchToProps(dispatch) {
  return {
    loadContributors: (dataRepo) => dispatch(loadContributors(dataRepo)), // loadContributors: (dataRepo) => dispatch(loadContributors(dataRepo)),
  };
}

Dashboard.propTypes = {
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
