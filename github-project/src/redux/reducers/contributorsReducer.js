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
  switch (action.type) {
    case types.LOAD_CONTRIBUTORS_SUCCESS:
      return action.contributors;
    case types.FILTER_CONTRIBUTORS_BY_DESCENDING_CONTRIBUTIONS:
      console.log("this is state", state);
      let newState = [...state];
      console.log("this is NEWstate", newState);
      return newState.sort((a, b) => a.contributions - b.contributions);
    case types.FILTER_CONTRIBUTORS_BY_ASCENDING_CONTRIBUTIONS:
      let newState1 = [...state];
      return newState1.sort((a, b) => b.contributions - a.contributions);
    default:
      return state;
  }
}
