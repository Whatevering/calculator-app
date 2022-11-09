import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "theme",
  initialState: {
    mode: 0,
  },
  reducers: {
    changeTo(state, action: PayloadAction<number>) {
      state.mode = action.payload;
    },
  },
});

export const actions = slice.actions;
export const reducer = slice.reducer;
