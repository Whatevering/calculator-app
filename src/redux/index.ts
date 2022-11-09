import { configureStore } from "@reduxjs/toolkit";
import { actions as themeActions, reducer as themeReducer } from "./themeSlice";
import { actions as calcActions, reducer as calcReducer } from "./calcSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    calc: calcReducer,
  },
});

export const actions = {
  theme: themeActions,
  calc: calcActions,
};

export type RootState = ReturnType<typeof store.getState>;
