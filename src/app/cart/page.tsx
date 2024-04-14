"use client";
import CartItem from "@/components/cart/CartItem";
import Shopping from "./../../components/cart/ShippingOption";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { auth } from "@/lib/firebase/config";

import {
  handleAddToCart,
  removeAllFromCart,
  removeFromCart,
} from "@/lib/func/cart";
import {
  addNewOrder,
  getProductsData,
  getUserByUid,
  getOrdersData,
  getOrderId,
} from "@/lib/supabase/fetch-data";
import { Button } from "@/components/ui/button";
// import { getAdsDataId } from "@/lib/API-Functions/fetching";
// import { adsData } from "../api/ads/data";
// import { auth } from "@/lib/firebase/config";

// async function res() {
//   const currentUser = auth.currentUser
//   console.log(currentUser?.uid);
//   fetch(`http://localhost:3000/api/users/${currentUser?.uid}`, {
//     cache: "no-cache",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("data from cart");
//       console.log(data);
//     });
// }

export async function Cart() {
  // const [cartData, setCartData] = useState<CartItem[]>([]);
  // const products: Product[] = await getProductsData();
  // let qty=0
  // const router = useRouter();
  // useEffect(() => {
  //   setInterval(() => {
  //     const data = localStorage.getItem("cart");
  //     if (data) {
  //       setCartData(JSON.parse(data));
  //     }
  //   }, 100);
  // }, []);

  const handleCheckOut = async () => {
    const date = new Date();
    const isAuth = auth.currentUser;
    if (isAuth) {
      const uId = isAuth.uid;
      getUserByUid(uId).then((user) => {
        if (user) {
          const orderList: Order[] = [];
          const cartData: CartItem[] = user.cart;
          cartData.map((itm, idx) => {
            const orderId = getOrderId();
            const order: Order = {
              id: orderId,
              userId: uId,
              productId: itm.productId,
              status: "uncomfirmed",
              pickUpOptions: 1,
              createdAt: new Date(date.getTime()),
              lastEditAt: new Date(date.getTime()),
              arrivingAt: new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000),
              quantity: itm.quantity,
            };
            orderList.push(order);
          });
          addNewOrder(orderList).then(() => {
            console.log("done");
          });
        }
      });
    } else {
      // get to auth page
    }
  };

  return (
    <>
      <h1>hi</h1>
      <Button
        onClick={() => {
          handleCheckOut();
        }}
        className="flex justify-center bg-blue-700 text-white hover:bg-blue-600 px-28 py-3 text-sm font-bold rounded-full">
        Continue to checkout
      </Button>
    </>
  );
}

export default Cart;
