import { apiCallError } from "./apiStatusActions";
import * as types from "./actionTypes";

describe("apiStatusActions", () => {
  it("should call apiCallError", () => {
    expect(apiCallError).toBeDefined();
  });

  it("should return API_CALL_ERROR type action", () => {
    const expectedActions = { type: types.API_CALL_ERROR };

    expect(apiCallError()).toEqual(expectedActions);
  });
});
