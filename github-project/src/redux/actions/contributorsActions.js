import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { getContributors } from "../../api/contributorsApi";

export function loadContributorsSuccess(contributors) {
  return { type: types.LOAD_CONTRIBUTORS_SUCCESS, contributors };
}

export function loadContributors(data) {
  debugger;
  // console.log("this is DISPACTH CONTRIBUTORSACTIONS", dispatch);
  return (function (dispatch) {
    debugger;
    console.log("BEFORE loadContributors----.....", data);
    // dispatch(beginApiCall());
    console.log("AFTER loadContributors----.....", data);

    return getContributors(data)
      .then((response) => response.json())

      .then((contributors) => {
        dispatch(loadContributorsSuccess(contributors));
        console.log("passing to get.....", contributors);
      });
  })();
}
