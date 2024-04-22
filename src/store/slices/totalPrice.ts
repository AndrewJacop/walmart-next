import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { auth } from "@/lib/firebase/config";
import { getUserByUid } from "@/lib/supabase/fetch-data";

export interface TotalPriceState {
  totalPrice: number;
}

const initialState: TotalPriceState = {
  totalPrice: 0,
};

export const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    calculateTotalPrice(state, action) {
      const { product} = action.payload;
      const isAuth = auth.currentUser;
      let cartItems: CartItem[] = [];
      //1- if user is signed in
      if (isAuth) {
        const uId = isAuth.uid;
        const userCart: CartItem[] = JSON.parse(
          localStorage.getItem("userCart") || "[]"
        );
        cartItems = userCart;

      } else {
        const cartItemsData: CartItem[] = JSON.parse(
          localStorage.getItem("cart") || "[]"
        );
        cartItems = cartItemsData;
      }
      state.totalPrice = cartItems.reduce(
        (total: number, cartItem: CartItem) => {
          if (product) {
            total += cartItem.quantity * Number(product.originalPrice);
          }
          return total;
        },
        0
      );
    },
  },
});
export const totalPriceSelector = (state: RootState) =>
  state.totalPrice.totalPrice;

export const { calculateTotalPrice } = totalPriceSlice.actions;

export default totalPriceSlice.reducer;
