import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dashboard from "./components/Dashboard";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
// import initialState from "./redux/reducers/initialState";

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
