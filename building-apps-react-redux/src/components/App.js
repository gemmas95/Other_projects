/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

function App() {
  return (
    <div className="container-fluid">
      <Route exact component path="/" component={HomePage} />
      <Route component path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
