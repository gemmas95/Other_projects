import rootReducer from "./index";
import { createStore } from "redux";

describe("index of combineReducers", () => {
  const store = createStore(rootReducer);
  it("should exist", () => {
    expect(store.loadDocs).not.toBeDefined();
  });
});
