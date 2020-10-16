import React, { useEffect, useState } from "react";
import TableList from "./TableList";
// import * as contributorsActions from "../redux/actions/contributorsActions";

import { loadContributors } from "../redux/actions/contributorsActions";
import SearchForm from "./SearchForm";
import "./Dashboard.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Dashboard = ({ loadContributors, contributors }) => {
  // const [contributorsList, setContributorsList] = useState(null);
  const [error, setError] = useState(null);

  // Data, handleSubmit and handleChange that will be send to form component
  const [dataRepo, setDataRepo] = useState({
    repoName: "",
    ownerName: "",
  });

  /*   useEffect(() => {
    loadContributors(dataRepo);
    console.log("use effect......");
  }, []); */

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
      // setContributorsList([]);
      console.log("passing to dashboard....", dataRepo);
      debugger;
      loadContributors(dataRepo);
      // .then(setContributorsList).catch(setError);
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
      <TableList contributors={contributors} error={error} />
    </div>
  );
};

function mapStateToProps(state) {
  console.log("this is STATE....", state);
  return {
    contributors: state.contributors,
  };
}

function mapDispatchToProps(dispatch) {
  // console.log("this is DISPACTH", dispatch);
  debugger;
  return {
    loadContributors: (dataRepo) => dispatch(loadContributors(dataRepo)), // loadContributors: (dataRepo) => dispatch(loadContributors(dataRepo)),
  };

  // dispatch(contributorsActions.loadContributors(data)),
  /*       loadContributors: bindActionCreators(
        contributorsActions.loadContributors,
        dispatch
      ), */

  // loadContributors: dispatch(loadContributors),
  // loadContributors: bindActionCreators(loadContributors, dispatch),

  // loadContributors,
  //  (dataRepo) => dispatch(loadContributors(dataRepo)),
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
