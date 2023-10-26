import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartState {
    initial : number
  }
  
  const initialState: ICartState = {
    initial: (JSON.parse(localStorage.getItem('local_cart') || '{}').length)
  };

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCar: (state, action: PayloadAction<number>) => {
            state.initial = action.payload
        }
    }
})

export const { addToCar } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
