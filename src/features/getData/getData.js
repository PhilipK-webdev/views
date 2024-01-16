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
    updateData: (state, action) => {
      const { updatedItem, val } = action.payload;
      state.items.forEach((item) => {
        if (item.id === updatedItem.id) {
          item.Products.push(val);
        }
      });
      setData(state.items);
      //   return {
      //     ...state,
      //     items: [...state.items],
      //   };
    },
    updateSubArrayItem: (state, action) => {
      const { itemId, newSubArray } = action.payload;

      // Use map to create a new array with the updated subArray for the specified itemId
      const updatedItems = state.items.map((item) =>
        item.id === itemId ? { ...item, subArray: newSubArray } : item
      );

      // Update the state with the new array of items

      return {
        ...state,
        items: updatedItems,
      };
    },
  },
});

export const { setData, updateData, updateSubArrayItem } = dataSlice.actions;
export default dataSlice.reducer;
