import React from "react";
import Contributor from "./Contributor";

function TableList({ contributors }) {
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

export default TableList;
