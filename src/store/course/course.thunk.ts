import { actions } from "./course.slice";

interface QueryAllCoursesResponse {
  successful: boolean;
  result: Course[];
}

export const fetchCourses = () => async (dispatch: any) => {
  const token = localStorage.getItem("token") ?? "";
  const response = await fetch("/courses/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const queryAllCoursesResponse: QueryAllCoursesResponse = await response.json();
  if (queryAllCoursesResponse.successful) {
    dispatch(actions.setCourses(queryAllCoursesResponse.result));
  }
};
