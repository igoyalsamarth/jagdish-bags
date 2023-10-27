'use client';
    
import { Provider } from "react-redux";
import {store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }:any) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      {children}
      </PersistGate>
    </Provider>
  );
}