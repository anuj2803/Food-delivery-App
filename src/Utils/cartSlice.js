// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Your initial state here
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,  // Use consistent casing here
  reducers: {
    // Your reducer logic here
    addItem: (state, action) => {
      // Logic to add an item to the cart
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
        state.items.pop();
      // Logic to remove an item from the cart
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
