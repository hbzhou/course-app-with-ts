import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import courseReducer, { CourseSliceState } from "./course/course.slice";
import authorReducer, { AuthorSliceState } from "./author/author.slice";
import userReducer, { UserSliceState } from "./user/user.slice";

export interface AppState {
  courses: CourseSliceState;
  authors: AuthorSliceState;
  currentUser: UserSliceState;
}

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    authors: authorReducer,
    currentUser: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectCourses = (state: RootState) => state.courses;
export const selectAuthors = (state: RootState) => state.authors;
export const selectCurrentUser = (state: RootState) => state.currentUser;
