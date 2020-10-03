import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// THUNK MIDDLEWARE, we don't need to pass dispatch as an argument, redux thunk injects dispacth
export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
