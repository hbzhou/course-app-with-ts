import { AppDispatch } from "@/store/store";
import {actions} from "./course.slice";
import { Course } from "@/types/course";

interface QueryAllCoursesResponse {
  successful: boolean;
  result: Course[];
}

export const fetchCourses = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token") ?? "";
  const response = await fetch("/api/courses/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const queryAllCoursesResponse: QueryAllCoursesResponse = await response.json();
  if (queryAllCoursesResponse.successful) {
    dispatch(actions.setCourses(queryAllCoursesResponse.result));
  }
};

export const createCourse = (course: Course) => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token") ?? "";
  const response = await fetch("/api/courses/add", {
    method: "POST",
    body: JSON.stringify(course),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (data.successful) {
    dispatch(actions.addCourse(data.result));
  } else {
    alert(data.result);
  }
};
