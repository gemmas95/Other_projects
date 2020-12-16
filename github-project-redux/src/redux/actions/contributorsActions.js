import * as types from "./actionTypes";
import { getContributors } from "../../api/contributorsApi";
import { apiCallError } from "../actions/apiStatusAction";

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
      .catch((error) => {
        dispatch(apiCallError(error));
        console.error(error);
        throw error;
      });
  };
}

export function sortByLessContributions(contributors) {
  console.log("ai que LLEGAAAA ....", contributors);

  return function (dispatch) {
    dispatch({
      type: types.FILTER_CONTRIBUTORS_BY_LESS_CONTRIBUTIONS,
      contributors,
      /*       contributors: [
        ...contributors.sort((a, b) => {
          console.log("this is a", a, "and this is b", b);
          return a.contributions - b.contributions;
        }),
      ], */
    });
    console.log("ai pollito....", contributors);
  };

  /*  return {
    ...state,
    contributors:
      state.contributors.length > 0
        ? [
            ...state.contributors.sort(
              (a, b) => a.contributions - b.contributions
            ),
          ]
        : state.contributors,
  }; */
}

export function sortByMoreContributions(contributors) {
  return function (dispatch) {
    dispatch({
      type: types.FILTER_CONTRIBUTORS_BY_MORE_CONTRIBUTIONS,
      contributors,
    });
  };
}

export function sortByNameAscending(contributors) {
  return function (dispatch) {
    dispatch({
      type: types.FILTER_CONTRIBUTORS_BY_ASCENDING_NAME,
      contributors,
    });
  };
}

export function sortByNameDescending(contributors) {
  return function (dispatch) {
    dispatch({
      type: types.FILTER_CONTRIBUTORS_BY_DESCENDING_NAME,
      contributors,
    });
  };
}
