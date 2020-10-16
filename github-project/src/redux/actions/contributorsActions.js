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
  // console.log("this is DISPACTH CONTRIBUTORSACTIONS", dispatch);
  return function (dispatch) {
    dispatch(loadingCall());
    // dispatch(beginApiCall());

    return getContributors(data)
      .then((response) => response.json())

      .then((contributors) => {
        dispatch(loadContributorsSuccess(contributors));
        dispatch(loadingSuccess());
      })
      .catch((error) => console.log(error));
  };
}
