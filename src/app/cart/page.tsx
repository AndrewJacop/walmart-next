// "use client";
import Shopping from "./../../components/cart/ShippingOption";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import { getProductsData } from "@/lib/supabase/fetch-data";
import { handleAddToCart, removeAllFromCart, removeFromCart } from "@/lib/func/cart";
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

export async function CartPage() {
  // const [cartData, setCartData] = useState<CartItem[]>([]);
  const products = await getProductsData();
  let qty = 0;


  const userId = auth.currentUser?.uid;
  const date = new Date();

  // const handleCheckOut = () => {
  //   if (userId) {
  //     cartData.map((itm) => {
  //       const order: Order = {
  //         id: 1,
  //         userId: userId,
  //         pickUpOtions: 1,
  //         status: "uncomfirmed",
  //         createdAt: new Date(date.getTime()),
  //         lastEditAt: new Date(date.getTime()),
  //         arrivingAt: new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000), // Set arrivingAt to 5 days from now
  //         productId: itm.productId,
  //         quantity: itm.quantity,
  //       };
  //       fetch("http://localhost:3000/api/orders", {
  //         method: "POST",
  //         body: JSON.stringify(order),
  //         cache: "no-store",
  //       })
  //         .then((_) => {
  //           console.log("user added");
  //           const res = fetch("http://localhost:3000/api/orders")
  //             .then((response) => response.json())
  //             .then((data) => {
  //               console.log("data from cart");
  //               console.log(data);
  //             });
  //         })

  //         .then(() => {
  //           console.log("daat");
  //         });
  //     });

  //     router.push("/shipping");
  //   } else {
  //     router.push("/auth/sign-in");
  //   }
  // };

  return (
    <>
      
        <>
          <div className="px-10 pt-10 text-xl mb-5 text-[#46474a]">
            <span className="font-bold text-[black]">Cart </span>(0) Items
          </div>
          <div className="items-center flex justify-center pb-16">
            <div>
              <img
                className="t"
                src="https://i5.walmartimages.com/dfw/63fd9f59-e0d6/65ab57af-59d6-423a-9500-1fa5ab36d1c7/v1/empty-cart.svg?odnHeight=240&odnWidth=200&odnBg=ffffff"
              />
              <p className="font-bold text-lg text-center">
                Time to start shopping!
              </p>
              <p className="font-bold text-center pb-3">Your cart is empty</p>
            </div>
          </div>
        </>
      
        <>
          {/* //pickUpOtions */}
          <div className="px-10 pt-10 text-xl mb-5">
            <span className="font-bold">Cart </span>
          </div>
          <div className="w-8/12 relative ml-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <img
                  className="absolute mt-3"
                  src="https://i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg"
                  alt="image"
                />
                <AccordionTrigger className="text-xl font-bold ml-10 ">
                  Pickup and delivery options
                </AccordionTrigger>
                <AccordionContent>
                  <Shopping />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </>
    

    </>
  );
}

export default CartPage;
