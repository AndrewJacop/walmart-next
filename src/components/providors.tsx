"use client";
import { setCartItem } from "@/store/slices/cartSlice";
import { store, useAppDispatch } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;

}
const Providers = (props: Props) => {


  return (
    
    <Provider store={store}>{props.children}</Provider>
  );
};

export default Providers;
