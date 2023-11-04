import { LocalCart } from "@/components/nonWovenTile";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICartState{
  cart:Array<LocalCart>;
}
const initialState: ICartState = {cart:[]}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addQuantity: (state, action: PayloadAction<LocalCart>) => {
      if(state.cart.find(item => (item.bagType === action.payload.bagType && item.panelSize === action.payload.panelSize && item.borderSize === action.payload.borderSize && item.panelGSM === action.payload.panelGSM && item.borderGSM === action.payload.borderGSM && item.handleType === action.payload.handleType && item.panelColor === action.payload.panelColor && item.borderColor === action.payload.borderColor  && item.handleColor === action.payload.handleColor && item.handleType === action.payload.handleType))){
        state.cart[state.cart.findIndex(item => (item.bagType === action.payload.bagType && item.panelSize === action.payload.panelSize && item.borderSize === action.payload.borderSize && item.panelGSM === action.payload.panelGSM && item.borderGSM === action.payload.borderGSM && item.handleType === action.payload.handleType && item.panelColor === action.payload.panelColor && item.borderColor === action.payload.borderColor  && item.handleColor === action.payload.handleColor && item.handleType === action.payload.handleType))
        ].amount+=100
      } else {
        state.cart.push(action.payload)
      }
    },
    minusQuantity: (state, action: PayloadAction<LocalCart>) => {
      state.cart[state.cart.findIndex(item => (item.bagType === action.payload.bagType && item.panelSize === action.payload.panelSize && item.borderSize === action.payload.borderSize && item.panelGSM === action.payload.panelGSM && item.borderGSM === action.payload.borderGSM && item.handleType === action.payload.handleType && item.panelColor === action.payload.panelColor && item.borderColor === action.payload.borderColor  && item.handleColor === action.payload.handleColor && item.handleType === action.payload.handleType))
      ].amount-=100;
    },
    deleteFromCart: (state, action: PayloadAction<LocalCart>) => {
      state.cart.splice((state.cart.findIndex(item => (item.bagType === action.payload.bagType && item.panelSize === action.payload.panelSize && item.borderSize === action.payload.borderSize && item.panelGSM === action.payload.panelGSM && item.borderGSM === action.payload.borderGSM && item.handleType === action.payload.handleType && item.panelColor === action.payload.panelColor && item.borderColor === action.payload.borderColor  && item.handleColor === action.payload.handleColor && item.handleType === action.payload.handleType))
      ),1);
    },
  }
})

export const { addQuantity, minusQuantity, deleteFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
