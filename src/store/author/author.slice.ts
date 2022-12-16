import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthorSliceState = [];

type AuthorSliceState = Array<Author>;

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
