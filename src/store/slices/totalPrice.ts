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
      const { products } = action.payload;
      const isAuth = auth.currentUser;
      let cartItems: CartItem[] = [];
      if (isAuth) {
        const uId = isAuth.uid;
        const user = getUserByUid(uId).then((user) => {
          if (user) {
            let cartItemsData = user.cart;
            cartItems = cartItemsData;
          }
        });
      } else {
        const cartItemsData: CartItem[] = JSON.parse(
          localStorage.getItem("cart") || "[]"
        );
        cartItems = cartItemsData;
      }
      state.totalPrice = cartItems.reduce(
        (total: number, cartItem: CartItem) => {
          const product = products.find(
            (prd: Product) => prd.id === cartItem.productId
          );
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
