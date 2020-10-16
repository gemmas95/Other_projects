import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCallsInProgress(
  state = initialState.apiCallsInProgress,
  action
) {
  switch (action.type) {
    case types.LOADING:
      return state + 1;
    case types.NO_LOADING:
      return state - 1;
    default:
      return state;
  }
}
