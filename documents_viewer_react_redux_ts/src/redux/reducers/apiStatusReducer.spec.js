import apiCallsInProgress from "./apiStatusReducer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

describe("apiStatusReducer", () => {
  let action;
  let state;

  it("should apiCallsInProgress be defined", () => {
    expect(apiCallsInProgress).toBeDefined();
  });

  it("should do LOADING action and return state + 1", () => {
    action = {
      type: types.LOADING,
    };
    state = 3;
    expect(apiCallsInProgress(state, action)).toEqual(4);
  });

  it("should do NO LOADING and return state - 1", () => {
    action = {
      type: types.NO_LOADING,
    };
    state = 3;
    expect(apiCallsInProgress(state, action)).toEqual(2);
  });

  it("should do API_CALL_ERROR and return state - 1", () => {
    action = {
      type: types.API_CALL_ERROR,
    };
    state = 5;
    expect(apiCallsInProgress(state, action)).toEqual(4);
  });

  it("should break if action is not and return default", () => {
    action = {
      type: types.TEST_ACTION,
    };
    state = 1;
    expect(apiCallsInProgress(state, action)).toBeDefined();
    expect(apiCallsInProgress(state, action)).toEqual(state);
  });

  it("should state be equal to initialState", () => {
    let state = 3;
    expect(apiCallsInProgress(undefined, state)).toEqual(
      initialState.apiCallsInProgress
    );
  });
});
