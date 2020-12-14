import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  interface IActiveStyle {
    color: string;
  }
  const activeStyle: IActiveStyle = { color: "#234b55" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>{" "}
      {" | "}
      <NavLink to="/documents" activeStyle={activeStyle}>
        Documents
      </NavLink>
    </nav>
  );
};

export default Navbar;
