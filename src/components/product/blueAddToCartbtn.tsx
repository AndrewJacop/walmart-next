
import {
    decrement,
    increment,
    productQtyInCartSelector,
    remove,
    setCartItem,
  } from "@/store/slices/cartSlice";
  import { useAppDispatch, useAppSelector } from "@/store/store";
  import QtyBtn from "./qtyButton";
  import {
    addCartItem,
    addNewOrder,
    getProductsData,
    getUserByUid,
  } from "@/lib/supabase/fetch-data";
  import { auth } from "@/lib/firebase/config";
  
  interface Props {
    product: Product;
  }
  
  const BlueAddToCartBtn = (props: Props) => {
    const qty = useAppSelector((state) =>
      productQtyInCartSelector(state, props.product.id)
    );
    const dispatch = useAppDispatch();
  
  
    const decreaseCartItemQuantity = (product: Product) => {
      const isAuth = auth.currentUser;
      if (isAuth) {
        dispatch(decrement(product));
       
        const uId = isAuth.uid;
        const userCart: CartItem[] = JSON.parse(
          localStorage.getItem("userCart") || "[]"
        )
        addCartItem(userCart, uId);
  
      }else{
        dispatch(decrement(product));
  
      }
    };
  
    const increaseCartItemQuantity =  (product: Product) => {
      const isAuth = auth.currentUser;
      if (isAuth) {
        dispatch(increment(product));
       
        const uId = isAuth.uid;
        const userCart: CartItem[] = JSON.parse(
          localStorage.getItem("userCart") || "[]"
        )
        addCartItem(userCart, uId);
      }else{
        dispatch(increment(product));
  
      }
  
    };
  
  
  
  
  
  
  
    if (!qty)
      return (
        <div className="flex justify-center">
          <button
            className=" absolute bottom-1 -left-1 bg-blue-600 text-white font-bold w-16 h-7 border-none rounded-3xl hover:border-2"
            onClick={() => increaseCartItemQuantity(props.product)}
          >
            + Add
          </button>
        </div>
      );
    return (
        <div className="w-20">
            <QtyBtn
        onDecrease={() => decreaseCartItemQuantity(props.product)}
        onIncrease={() => increaseCartItemQuantity(props.product)}
        qty={qty}
      />
        </div>
      
    );
  };
  
  export default BlueAddToCartBtn;
  