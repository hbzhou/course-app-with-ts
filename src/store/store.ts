import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import courseReducer from "./course/course.slice";
import authorReducer from "./author/author.slice";

export interface AppState {
  courses: Array<Course>;
  authors: Array<Author>;
}

export const store = configureStore({
  reducer: combineReducers<AppState>({
    courses: courseReducer,
    authors: authorReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const selectCourses = (state: RootState) => state.courses;
export const selectAuthors = (state: RootState) => state.authors;
