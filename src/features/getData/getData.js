import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    status: "idle",
    Products: [],
  },
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        items: action.payload,
        status: "succeeded",
      };
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
