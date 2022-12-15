import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockedCoursesList as courses } from "../../constants";

type State = {
  courses: Array<Course>;
};

const initialState: State = {
  courses,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state: State, action: PayloadAction<Array<Course>>) => {
      state.courses = action.payload;
    },
  },
});

export const actions = courseSlice.actions;

export default courseSlice.reducer;
