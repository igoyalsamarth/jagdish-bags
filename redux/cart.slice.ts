import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action: PayloadAction<number>) => {
            const itemExists = localStorage.find((item: any) => item.id === action.payload);
            if (itemExists) {
                itemExists.quantity++;
            } else {
                localStorage.push({ ...action, quantity: 1 });
            }
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const itemExists = localStorage.find((item: any) => item.id === action.payload);
            if (itemExists) {
                itemExists.quantity++;
            }
        }
    }
})

export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    incrementQuantity,
  } = cartSlice.actions;