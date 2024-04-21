import {
  configureStore,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { removeAllFromCart, removeFromCart } from "@/lib/func/cart";
import { auth } from "@/lib/firebase/config";
import {
  addCartItem,
  getProductsData,
  getUserByUid,
} from "@/lib/supabase/fetch-data";
import toast from "react-hot-toast";

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem: (state, action: PayloadAction<CartItem[]>) => {
      try {
        state.cartItems = action.payload;
      } catch (error) {
        console.error("Error setting cart items:", error);
      }
    },
    increment: (state, action: PayloadAction<Product>) => {
      const isAuth = auth.currentUser;

      //1- if user is signed in
      if (isAuth) {
        const uId = isAuth.uid;
        const user = getUserByUid(uId).then((user) => {
          if (user) {
            let supaCartdata: CartItem[] = user.cart;
            state.cartItems = supaCartdata;

            const existingItemIndex = supaCartdata.findIndex(
              (item) => item.productId === action.payload.id
            );

            if (existingItemIndex !== -1) {
              if (
                supaCartdata[existingItemIndex].quantity <=
                action.payload.quantity
              ) {
                supaCartdata[existingItemIndex].quantity++;
              } else {
                toast("Max quantity", {
                  icon: "❕",
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              }
            } else {
              supaCartdata.push({
                productId: action.payload.id,
                quantity: 1,
              });
            }

            addCartItem(supaCartdata, uId);
          }
        });
      } else {
        const cartItems: CartItem[] = JSON.parse(
          localStorage.getItem("cart") || "[]"
        );
        state.cartItems = cartItems;
        const existingItemIndex = cartItems.findIndex(
          (item) => item.productId === action.payload.id
        );

        if (existingItemIndex !== -1) {
          if (
            cartItems[existingItemIndex].quantity <= action.payload.quantity
          ) {
            cartItems[existingItemIndex].quantity++;
          } else {
            toast("Max quantity");
          }
        } else {
          cartItems.push({
            productId: action.payload.id,
            quantity: 1,
          });
        }
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
    },

    decrement: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cartItems.find(
        (el) => el.productId === action.payload.id
      );
      if (cartItem) {
        if (cartItem.quantity >= 1) {
          cartItem.quantity--;
          removeFromCart(action.payload);
        }

        if (cartItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.productId !== action.payload.id
          );
        }
      }
    },
    remove: (state, action: PayloadAction<Product>) => {
      const isAuth = auth.currentUser;

      if (isAuth) {
        const uId = isAuth.uid;
        const user = getUserByUid(uId).then((user) => {
          if (user) {
            let supaCartdata: CartItem[] = user.cart;
            state.cartItems = supaCartdata;

            const existingItemIndex = supaCartdata.findIndex(
              (item) => item.productId === action.payload.id
            );
            if (existingItemIndex !== -1) {
              supaCartdata.splice(existingItemIndex, 1);
              //use addCartItem to add cart to database
              addCartItem(supaCartdata, uId);
            }
          }
        });
      } else {
        const cartData: CartItem[] = JSON.parse(
          localStorage.getItem("cart") || "[]"
        );
        state.cartItems = cartData;

        const itemIndex = cartData.findIndex(
          (item) => item.productId === action.payload.id
        );
        if (itemIndex !== -1) {
          cartData.splice(itemIndex, 1);
          localStorage.setItem("cart", JSON.stringify(cartData));
        }
      }
    },
  },
});

const cartItems = (state: RootState) => state.cart.cartItems;

export const productQtyInCartSelector = createSelector(
  [cartItems, (cartItems, productId: string) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.productId === productId)?.quantity
);

export const totalCartItemsSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.quantity),
    0
  )
);

export const { increment, decrement, setCartItem, remove } = cartSlice.actions;

export default cartSlice.reducer;
