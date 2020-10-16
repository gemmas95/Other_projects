import * as types from "./actionTypes";
import { getContributors } from "../../api/contributorsApi";

export function loadContributorsSuccess(contributors) {
  return { type: types.LOAD_CONTRIBUTORS_SUCCESS, contributors };
}
function loadingCall(commons) {
  return { type: types.LOADING, commons };
}
function loadingSuccess(commons) {
  return { type: types.NO_LOADING, commons };
}

export function loadContributors(data) {
  debugger;
  // console.log("this is DISPACTH CONTRIBUTORSACTIONS", dispatch);
  return function (dispatch) {
    // dispatch(loadingCall());
    debugger;
    console.log("BEFORE loadContributors----.....", data);
    // dispatch(beginApiCall());
    console.log("AFTER loadContributors----.....", data);

    return getContributors(data)
      .then((response) => response.json())

      .then((contributors) => {
        dispatch(loadContributorsSuccess(contributors));
        // dispatch(loadingSuccess());

        console.log("passing to get.....", contributors);
      })
      .catch((error) => console.log(error));
  };
}
