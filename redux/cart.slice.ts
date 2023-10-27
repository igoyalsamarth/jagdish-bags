import { LocalCart } from "@/components/nonWovenTile";
import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

const initialState: Array<LocalCart> = [
  {
    "borderColor":null,
    "borderGSM":0,
    "handleColor":null,
    "handleType":null
  }
]
console.log(typeof initialState)
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCar: (state, action: PayloadAction<LocalCart>) => {
      console.log(current(state));
      console.log(action);
      console.log(initialState);
      console.log(typeof initialState)
      state.push(action.payload)
      //return [...state,{"borderColor":action.payload.borderColor,"borderGSM":action.payload.borderGSM,"handleColor":action.payload.handleColor,"handleType":action.payload.handleType}]
      console.log(current(state));
    }
  }
})

export const { addToCar } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
