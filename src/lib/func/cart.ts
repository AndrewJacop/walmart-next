import toast from "react-hot-toast";
import { auth } from "../firebase/config";
import { addCartItem, getUserByUid } from "../supabase/fetch-data";

//Add To Cart:

let supaCartdata: CartItem[] = [];
export const handleAddToCart = (product: Product) => {
  const isAuth = auth.currentUser;

  //1- if user is signed in
  if (isAuth) {

    const uId = isAuth.uid;
    const user = getUserByUid(uId).then((user) => {
      if (user) {
        let supaCartdata: CartItem[] = user.cart;
        const existingItemIndex = supaCartdata.findIndex(
          (item) => item.productId === product.id
        );

        if (existingItemIndex !== -1) {
          // If the product already exists in the cart, increase its quantity
          if (supaCartdata[existingItemIndex].quantity <= product.quantity) {
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
        }else {
        // If the product doesn't exist in the cart, add it as a new item
        supaCartdata.push({
          productId: product.id,
          quantity: 1,
        });
      }

      //use addCartItem to add cart to database
      addCartItem(supaCartdata, uId);
  }});
  }
  //2- if user isn't signed in
  else {
    const cartData: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    const existingItemIndex = cartData.findIndex(
      (item) => item.productId === product.id
    );

    if (existingItemIndex !== -1) {
      // If the product already exists in the cart, increase its quantity
      if (cartData[existingItemIndex].quantity <= product.quantity) {
        cartData[existingItemIndex].quantity++;
      } else {
        toast("Max quantity");
      }
    } else {
      // If the product doesn't exist in the cart, add it as a new item
      cartData.push({
        productId: product.id,
        quantity: 1,
      });
    }
    // save the updated cart data to local storage
    localStorage.setItem("cart", JSON.stringify(cartData));
    console.log(cartData);
  }
};

export const removeFromCart = async (product: Product) => {
  // const isAuth = auth.currentUser;
  // const uId = isAuth?.uid;
  // //1- if user is signed in
  // if (isAuth) {
  //   const user = await getUserByUid(`${uId}`);
  //   let supaCartdata: CartItem[] = user?.cart![0] || []; // Get the first (and only) array from user's cart data
  //   // Find the index of the product in the cart
  //   const existingItemIndex = supaCartdata.findIndex(
  //     (item) => item.productId === product.id
  //   );
  //   // If the product exists in the cart
  //   if (existingItemIndex !== -1) {
  //     supaCartdata[existingItemIndex].quantity--;
  //     // If the quantity 0, remove the item from the cart
  //     if (supaCartdata[existingItemIndex].quantity === 0) {
  //       supaCartdata.splice(existingItemIndex, 1);
  //     }
  //     //use addCartItem() to add cart to database
  //     addCartItem(supaCartdata, `${uId}`);
  //   } else {
  //     console.log("not found");
  //   }
  // }
  // //2- if user isn't signed in
  // else {
  //   const cartData: CartItem[] = JSON.parse(
  //     localStorage.getItem("cart") || "[]"
  //   );
  //   const itemIndex = cartData.findIndex(
  //     (item) => item.productId === product.id
  //   );
  //   if (itemIndex !== -1) {
  //     // If the product exists in the cart, remove it
  //     if (cartData[itemIndex].quantity == 1) {
  //       cartData.splice(itemIndex, 1);
  //     } else {
  //       cartData[itemIndex].quantity -= 1;
  //     }
  //     // Save the updated cart data to local storage
  //     localStorage.setItem("cart", JSON.stringify(cartData));
  //     console.log(cartData);
  //   }
  // }
};

export const removeAllFromCart = (prd: Product) => {
  // console.log("remove")
  const cartData: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const itemIndex = cartData.findIndex((item) => item.productId === prd.id);

  if (itemIndex !== -1) {
    // If the product exists in the cart, remove it

    cartData.splice(itemIndex, 1);

    // Save the updated cart data to local storage
    localStorage.setItem("cart", JSON.stringify(cartData));
    console.log(cartData);
  }
};


export const getLocalStorageCart = () => {
  const cartData: CartItem[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  return cartData;
};