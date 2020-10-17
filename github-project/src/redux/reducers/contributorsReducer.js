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
      return {
        ...state,
        contributors: [
          ...state.sort((a, b) => a.contributions - b.contributions),
        ],
      };
    default:
      return state;
  }
}
