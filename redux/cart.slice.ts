import { LocalCart } from "@/components/nonWovenTile";
import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

interface ICartState{
  cart:Array<LocalCart>;
}
const initialState: ICartState = {cart:[]}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCar: (state, action: PayloadAction<LocalCart>) => {
      state.cart.push(action.payload)
    }
  }
})

export const { addToCar } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
