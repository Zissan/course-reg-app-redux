import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import beginApiCall, { apiCallError } from "./apiStatusActions";

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess(id) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, id };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function saveCourse(course) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function deleteCourse(id) {
  return function(dispatch) {
    return courseApi
      .deleteCourse(id)
      .then(() => {
        dispatch(deleteCourseSuccess(id));
      })
      .catch(error => {
        throw error;
      });
  };
}
