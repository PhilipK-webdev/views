import { configureStore } from "@reduxjs/toolkit";
import finishOrderSlice from "../features/order/finishOrderSlice";
import getDataReducer from "../features/getData/getData";
import getTotalItems from "../features/totalItems/totalItems";
export const store = configureStore({
  reducer: {
    order: finishOrderSlice,
    data: getDataReducer,
    items: getTotalItems,
  },
});
