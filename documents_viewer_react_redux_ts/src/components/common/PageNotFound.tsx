import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  margin: 70px;

  h2,
  h3,
  p {
    margin: 20px;
  }
`;
const PageNotFound: React.FC = () => {
  const history = useHistory();
  return (
    <Div>
      <h2>Ooops!! Page Not Found</h2>
      <h3>Error 404</h3>
      <p>Nothing to do here!</p>
      <button className="greenButton" onClick={() => history.push("/")}>
        Go back to home page
      </button>
    </Div>
  );
};

export default PageNotFound;
