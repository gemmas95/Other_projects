import React from "react";
import Contributor from "./Contributor";

function TableList({ contributorsList }) {
  return (
    <>
      {!contributorsList && (
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
      {contributorsList?.length === 0 && (
        <img
          alt="loading"
          data-testid="isLoading"
          src="https://trello-attachments.s3.amazonaws.com/5f7c8ab9b80a927f1f047d20/300x300/a35a54d93989cc51ca3226d2220477b3/Gif_loaging.gif"
        ></img>
      )}
      {contributorsList?.length > 0 && contributorsList[0].login && (
        <section>
          <p className="text-center mt-4" data-testid="contributorsLength">
            This repository has {contributorsList.length} contributor/s!
          </p>
          <ul className="card-deck flex-wrap cards__container">
            {contributorsList?.map((user) => (
              <Contributor user={user} key={user.id} />
            ))}
          </ul>
        </section>
      )}
      {contributorsList?.message && (
        <p data-testid="error" className="text-center m-5 alert alert-danger">
          Error: {contributorsList.message}
        </p>
      )}
    </>
  );
}

export default TableList;
