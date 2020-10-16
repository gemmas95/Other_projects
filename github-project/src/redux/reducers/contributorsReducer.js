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
    default:
      return state;
  }
}
