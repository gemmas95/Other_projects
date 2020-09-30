// Action creator, the only must is to have a type
export function createCourse(course) {
  return { type: "CREATE_COURSE", course };
}
