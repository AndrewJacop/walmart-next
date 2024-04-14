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
} from "@/lib/supabase/fetch-data";
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
  const products: Product[] = await getProductsData();
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
  const isAuth = auth.currentUser;

  const uId = auth.currentUser?.uid;
  const user = await getUserByUid(uId!);
  console.log(user);

  const cartData = user?.cart!;
  console.log(cartData);

  const date = new Date();


  function getOrderId() {
    var number=0
    return getOrdersData()
      .then((ordersData) => {
        number= ordersData[0].id + 1;
        return number
      })
      .catch((error) => {
        console.error(error);
        throw error; 
      });
  }
  
  const handleCheckOut = async () => {
    if (isAuth) {
      cartData[0].map(async (itm, indx: number) => {
        const orderId = await getOrderId();
        console.log(orderId);

        const order: Order = {
          id: orderId ,
          userId: uId!,
          productId: itm.productId,
          status: "uncomfirmed",
          pickUpOptions: 1,
          createdAt: new Date(date.getTime()),
          lastEditAt: new Date(date.getTime()),
          arrivingAt: new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000),
          quantity: itm.quantity,
        };
        await addNewOrder(order);

        console.log("done");
      });
    } else {
      console.log("not found ");
    }
  };

  return (
    <>
      <h1>hi</h1>
      <button
        onClick={handleCheckOut}
        className="flex justify-center bg-blue-700 text-white hover:bg-blue-600 px-28 py-3 text-sm font-bold rounded-full"
      >
        Continue to checkout
      </button>
    </>
  );
}

export default Cart;
