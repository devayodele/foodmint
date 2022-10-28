import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addnRemoveCart(state, { payload }) {
      console.log(payload);
      console.log("clicked!");
      const find = state.cart.findIndex((item) => item.id === payload.id);
      console.log("find: ", find);
      if (find >= 0) {
        state.cart.splice(find, 1);
        console.log("removed");
        console.log(state.cart.length);
        return;
      }

      state.cart.push({
        ...payload,
        quantity: 1,
        subTotal: payload.price,
      });

      console.log("added");
      console.log(state.cart.length);
      return;
    },

    increment(state, { payload }) {
      const item = state.cart.find((item) => item.id === payload.id);

      item.quantity++;
      item.subTotal = item.quantity * item.price;
    },

    decrement(state, { payload }) {
      const item = state.cart.find((item) => item.id === payload.id);
      item.quantity--;
      item.subTotal = item.quantity * item.price;

      const findIndex = state.cart.findIndex((item) => item.id === payload.id);
      const { quantity } = item;

      if (quantity === 0) state.cart.splice(findIndex, 1);
    },

    remove(state, { payload }) {
      const findIndex = state.cart.findIndex((item) => item.id === payload.id);
      if (findIndex >= 0) state.cart.splice(findIndex, 1);
    },
    addTotalAmount(state, { payload }) {
      state.totalAmount.push(payload);
    },
  },
});

export const { addnRemoveCart, increment, decrement, remove, addTotalAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
