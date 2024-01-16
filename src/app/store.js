import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import getDataReducer from "../features/getData/getData";
import getTotalItems from "../features/totalItems/totalItems";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: getDataReducer,
    items: getTotalItems,
  },
});
