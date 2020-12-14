import * as types from "../actions/actionTypes";
import initialState from "./initialState";

import { Action, Reducer } from "redux";

const apiCallsInProgress: Reducer<number, Action> = (
  state = initialState.apiCallsInProgress,
  action
) => {
  switch (action.type) {
    case types.LOADING:
      return state + 1;
    case types.NO_LOADING:
      return state - 1;
    case types.API_CALL_ERROR:
      return state - 1;
    default:
      return state;
  }
};

export default apiCallsInProgress;
