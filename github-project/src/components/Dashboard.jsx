import React, { useState } from "react";
import TableList from "./TableList";
import { loadContributors } from "./../logic/contributorsActions";
import SearchForm from "./SearchForm";
import "./Dashboard.scss";

function Dashboard() {
  const [contributorsList, setContributorsList] = useState(null);
  const [error, setError] = useState(null);

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
      setContributorsList([]);
      loadContributors(dataRepo).then(setContributorsList).catch(setError);
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
      <TableList contributorsList={contributorsList} error={error} />
    </div>
  );
}

export default Dashboard;
