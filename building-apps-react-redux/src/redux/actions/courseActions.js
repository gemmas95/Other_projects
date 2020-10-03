import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

// Action creator, the only must is to have a type
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

// THUNK MIDDLEWARE, we don't need to pass dispatch as an argument, redux thunk injects dispacth
export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
