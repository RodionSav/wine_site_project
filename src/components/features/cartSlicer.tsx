import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

const storedCart = localStorage.getItem('productCart');

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[],
};

const cartState: CartState = {
  items: storedCart ? JSON.parse(storedCart) : [],
};

const saveToLocalStorage = (state: CartState) => {
  localStorage.setItem('productCart', JSON.stringify(state.items));
};

export const cartSlicer = createSlice({
  name: 'cart',
  initialState: cartState,
  reducers: {
    setCartProducts: (state, action) => {
      state.items.push({
        ...action.payload,
        quantity: 1
      });
      saveToLocalStorage(state);
    },
    deleteCartProducts: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveToLocalStorage(state);
    },
    increaseQuantity: (state, action) => {
      const foundItem = state.items.find(item => item.id === action.payload);

      if (foundItem) {
        foundItem.quantity += 1;
      }

      saveToLocalStorage(state);
    },
    decreaseQuantity: (state, action) => {
      const foundItemIndex = state.items.findIndex(item => item.id === action.payload);

      if (foundItemIndex !== -1) {
        const foundItem = state.items[foundItemIndex];
        foundItem.quantity -= 1;
        if (foundItem.quantity === 0) {
          state.items.splice(foundItemIndex, 1); // Удаление элемента из массива
        }
      }

      saveToLocalStorage(state);
    }
  }
});


export const {
  setCartProducts,
  deleteCartProducts,
  increaseQuantity,
  decreaseQuantity
} = cartSlicer.actions;

export default cartSlicer.reducer;