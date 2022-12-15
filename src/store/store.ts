import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import courseReducer from "./course/course.slice";
import authorReducer from "./author/author.slice";

export interface AppState {
  courses: { courses: Array<Course> };
  authors: { authors: Array<Author> };
}

export const store = configureStore({
  reducer: combineReducers<AppState>({
    courses: courseReducer,
    authors: authorReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export const selectCourses = (state: RootState) => state.courses.courses;
export const selectAuthors = (state: RootState) => state.authors.authors;
