import React from "react";
import PropTypes from "prop-types";
import "./Contributor.scss";

// To render contributors change user.name for user.login change the commented loadContributors in logic/contributorsActions
function Contributor({ user }) {
  return (
    <li className="profile__card">
      <img
        src={`${user.avatar_url}`}
        alt={user.id}
        data-testid="avatar_url"
      ></img>
      <p
        data-testid="user__login"
        className="text-uppercase text-monospace font-weight-bold"
      >
        {user.login}
      </p>
      <p data-testid="contributions">
        Number of contributions: {user.contributions}
      </p>
      <a data-testid="html_url" href={user.html_url} className="btn btn-dark">
        {" "}
        Link to profile
      </a>
    </li>
  );
}

Contributor.propTypes = {
  user: PropTypes.object.isRequired,
  contributions: PropTypes.number,
};

export default Contributor;
