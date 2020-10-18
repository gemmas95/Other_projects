import React from "react";
import HeaderMain from "./common/HeaderMain";
import Contributor from "./Contributor";
import { connect } from "react-redux";

function TableList(props) {
  const { contributors } = props;

  return (
    <>
      {contributors.length === 0 && (
        <>
          <p className="text-center m-5" data-testid="nullContributorsText">
            Please enter a repository name and his owner name to find it's
            contributors
          </p>
          <p className="text-center m-5">
            <span>
              Suggestions: skylab-bootcamp-202007 repository owned by
              SkylabCoders
            </span>
          </p>
        </>
      )}
      {contributors?.length > 0 && contributors[0].login && (
        <section>
          <p className="text-center mt-4" data-testid="contributorsLength">
            This repository has {contributors.length} contributor/s!
          </p>
          <HeaderMain contributors={contributors} />
          <ul className="card-deck flex-wrap cards__container">
            {contributors?.map((user) => (
              <Contributor user={user} key={user.id} />
            ))}
          </ul>
        </section>
      )}
      {contributors?.message && (
        <p data-testid="error" className="text-center m-5 alert alert-danger">
          Error: {contributors.message}
        </p>
      )}
    </>
  );
}

// Here mapStateToProps allow us to be alert what is contributors and update it when the state change
// This allows us not to depend of passing the data to fathers and childrens, only watch the state and if it change, it updates here

function mapStateToProps(state) {
  return {
    contributors: state.contributors,
  };
}

export default connect(mapStateToProps)(TableList);
