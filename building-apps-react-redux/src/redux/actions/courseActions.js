import * as types from "./actionTypes";

// Action creator, the only must is to have a type
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
