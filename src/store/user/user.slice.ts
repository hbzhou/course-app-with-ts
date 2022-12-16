import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserSliceState = {
  username?: string;
  email?: string;
  token?: string;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (_: UserSliceState, action: PayloadAction<User>) => {
      return { ...action.payload };
    },
    logout: (_: UserSliceState, action: PayloadAction) => {
      return {};
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
