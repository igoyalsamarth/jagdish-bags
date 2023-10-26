import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const reducer={
    cart:cartReducer,
}

const store = configureStore({
    reducer
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;