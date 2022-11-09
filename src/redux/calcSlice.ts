import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const calc = (prev: string, current: string, method: string) => {
  switch (method) {
    case "+":
      return String(Number(prev) + Number(current));
    case "-":
      return String(Number(prev) - Number(current));
    case "x":
      return String(Number(prev) * Number(current));
    case "/":
      return String(Number(prev) / Number(current));
    default:
      return current;
  }
};

const slice = createSlice({
  name: "calc",
  initialState: {
    prev: "0",
    method: "",
    current: "0",
  },
  reducers: {
    pushNumber(state, action: PayloadAction<string>) {
      if (action.payload === "." && state.current.includes(".")) return;

      if (state.current == "0" && action.payload !== ".") {
        state.current = action.payload;
      } else {
        state.current += action.payload;
      }
    },
    delNumber(state) {
      state.current = state.current.substring(0, state.current.length - 1);
      if (!state.current.length) {
        state.current = "0";
      }
    },
    calc(state, action: PayloadAction<string>) {
      state.prev = calc(state.prev, state.current, state.method);
      state.method = action.payload;
      state.current = "0";
    },
    equal(state) {
      state.current = calc(state.prev, state.current, state.method);
      state.method = "";
      state.prev = "0";
    },
    reset(state) {
      state.prev = "0";
      state.method = "";
      state.current = "0";
    },
  },
});

export const actions = slice.actions;
export const reducer = slice.reducer;
