import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockedAuthorsList as authors } from "../../constants";

const initialState: AuthorSliceState = {
  authors,
};

type AuthorSliceState = {
  authors: Array<Author>;
};

export const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    setAuthors: (state: AuthorSliceState, action: PayloadAction<Array<Author>>) => {
      state.authors = action.payload;
    },
  },
});

export default authorSlice.reducer;
export const actions = authorSlice.actions;
