import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function contributorsReducer(
  state = initialState.contributors,
  action
) {
  console.log(
    "this is state after initial state----contributors.js.....",
    state
  );
  let newState;
  switch (action.type) {
    case types.LOAD_CONTRIBUTORS_SUCCESS:
      return action.contributors;
    case types.FILTER_CONTRIBUTORS_BY_LESS_CONTRIBUTIONS:
      console.log("this is state", state);
      newState = [...state];
      console.log("this is NEWstate", newState);
      return newState.sort((a, b) => a.contributions - b.contributions);
    case types.FILTER_CONTRIBUTORS_BY_MORE_CONTRIBUTIONS:
      newState = [...state];
      return newState.sort((a, b) => b.contributions - a.contributions);
    case types.FILTER_CONTRIBUTORS_BY_ASCENDING_NAME:
      newState = [...state];

      function compareAsc(a, b) {
        // Use toUpperCase() to ignore character casing
        const objA = a.login.toUpperCase();
        const objB = b.login.toUpperCase();

        let comparison = 0;
        if (objA > objB) {
          comparison = 1;
        } else if (objA < objB) {
          comparison = -1;
        }
        return comparison;
      }

      newState.sort(compareAsc);
      return newState;

    case types.FILTER_CONTRIBUTORS_BY_DESCENDING_NAME:
      newState = [...state];
      function compareDesc(a, b) {
        // Use toUpperCase() to ignore character casing
        const objA = a.login.toUpperCase();
        const objB = b.login.toUpperCase();

        let comparison = 0;
        if (objA < objB) {
          comparison = 1;
        } else if (objA > objB) {
          comparison = -1;
        }
        return comparison;
      }

      newState.sort(compareDesc);
      return newState;
    default:
      return state;
  }
}
