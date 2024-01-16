import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalItems: 0,
};
export const totalItemsSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    setTotal: (state, action) => {
      state.totalItems = action.payload;
      state.status = "succeeded";
    },
  },
});

export const { setTotal } = totalItemsSlice.actions;

export default totalItemsSlice.reducer;
