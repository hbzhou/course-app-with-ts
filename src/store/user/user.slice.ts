import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/user";

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
    logout: (_: UserSliceState, _action: PayloadAction) => {
      return {};
    },
    rehydrateFromStorage: (state: UserSliceState) => {
      const token = localStorage.getItem("token") ?? "";
      if (token) {
        return { ...state, token };
      }
      return state;
    },
  },
});

export const actions = userSlice.actions;

export const selectIsAuthed = (state: UserSliceState) => Boolean(state.token);

export default userSlice.reducer;
