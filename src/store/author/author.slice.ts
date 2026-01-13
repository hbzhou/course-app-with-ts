import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Author } from "../../types/author";

export type AuthorSliceState = Array<Author>;

const initialState: AuthorSliceState = [];

export const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    setAuthors: (state: AuthorSliceState, action: PayloadAction<Array<Author>>) => {
      return [...action.payload];
    },
  },
});

export default authorSlice.reducer;
export const actions = authorSlice.actions;
