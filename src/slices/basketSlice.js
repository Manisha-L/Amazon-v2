import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter(
        (filteredItem) => filteredItem.title !== action.payload.title
      );
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;
export const selectPrice = (state) =>
  state.basket.items.reduce(
    (total, item) => total + item.price * item.itemQuantity,
    0
  );

export default basketSlice.reducer;
