import * as types from "./actionTypes";
import { AppActions } from "./actionTypes";

export function beginApiCall(): AppActions {
  return { type: types.LOADING };
}

export function endApiCall(): AppActions {
  return { type: types.NO_LOADING };
}

export function apiCallError(): AppActions {
  return { type: types.API_CALL_ERROR };
}
