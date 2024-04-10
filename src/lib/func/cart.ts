import toast from "react-hot-toast";

export const handleAddToCart = (product: Product) => {
  let finalPrice =
    Number(product.originalPrice) * ((100 - product.discount) / 100);
  const cartData: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingItemIndex = cartData.findIndex(
    (item) => item.productId === product.id
  );

  if (existingItemIndex !== -1) {
    // If the product already exists in the cart, increase its quantity
    if (cartData[existingItemIndex].quantity <= product.quantity) {
      cartData[existingItemIndex].quantity++;
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
    // If the product doesn't exist in the cart, add it as a new item
    cartData.push({
      id: cartData.length,
      productId: product.id,
      quantity: 1,
      price: finalPrice,
    });
  }

  // Save the updated cart data to local storage
  localStorage.setItem("cart", JSON.stringify(cartData));
  console.log(cartData);
};

export const removeFromCart = (prd: Product) => {
  // console.log("remove")
  const cartData: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const itemIndex = cartData.findIndex((item) => item.productId === prd.id);

  if (itemIndex !== -1) {
    // If the product exists in the cart, remove it
    if (cartData[itemIndex].quantity == 1) {
      cartData.splice(itemIndex, 1);
    } else {
      cartData[itemIndex].quantity -= 1;
    }
    // Save the updated cart data to local storage
    localStorage.setItem("cart", JSON.stringify(cartData));
    console.log(cartData);
  }
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
