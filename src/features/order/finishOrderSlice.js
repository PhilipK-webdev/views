import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};
export const finishOrderSlice = createSlice({
  name: "finishOrder",
  initialState,
  reducers: {
    finishOrder: (state, action) => {
      state.value = !action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { finishOrder } = finishOrderSlice.actions;

export default finishOrderSlice.reducer;
