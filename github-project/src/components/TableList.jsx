import React from "react";
import { useState } from "react";
import HeaderMain from "./common/HeaderMain";
import Contributor from "./Contributor";

function TableList({ contributors }) {
  const [updateContributors] = useState(contributors);
  console.log("THIS IS CONTRIBUTORS", contributors);
  return (
    <>
      {updateContributors.length === 0 && (
        <>
          <p className="text-center m-5" data-testid="nullContributorsText">
            Please enter a repository name and his owner name to find it's
            updateContributors
          </p>
          <p className="text-center m-5">
            <span>
              Suggestions: skylab-bootcamp-202007 repository owned by
              SkylabCoders
            </span>
          </p>
        </>
      )}
      {updateContributors?.length > 0 && updateContributors[0].login && (
        <section>
          <p
            className="text-center mt-4"
            data-testid="updateContributorsLength"
          >
            This repository has {updateContributors.length} contributor/s!
          </p>
          <HeaderMain contributors={updateContributors} />
          <ul className="card-deck flex-wrap cards__container">
            {updateContributors?.map((user) => (
              <Contributor user={user} key={user.id} />
            ))}
          </ul>
        </section>
      )}
      {updateContributors?.message && (
        <p data-testid="error" className="text-center m-5 alert alert-danger">
          Error: {updateContributors.message}
        </p>
      )}
    </>
  );
}

export default TableList;
