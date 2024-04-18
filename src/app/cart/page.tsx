"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CartItem from "@/components/cart/CartItem";
import Shopping from "./../../components/cart/ShippingOption";
import { addNewOrder, getUserByUid } from "@/lib/supabase/fetch-data";



export function Cart() {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

 



  useEffect(() => {
    const isAuth = auth.onAuthStateChanged((user) =>
    {
      if (user) {setUserId(user.uid);}
    });

    return () => {isAuth()};
  }, []);

  
  useEffect(() => {
    if (userId) {
      getUserByUid(userId).then((user) => {
        if (user) {
          setCartData(user.cart);
        }
      });
        } 
        else{
          const cartDataString = localStorage.getItem("cart");
          if (cartDataString) {
            const cartData: CartItem[] = JSON.parse(cartDataString);
            setCartData(cartData);
          }
          
         }
         
  }, [userId]);


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
            const order: Order = {
              id: Math.floor(Math.random() * 10000),
              userId: uId,
              productId: itm.productId,
              status: "unconfirmed",
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
      window.location.assign("/cart/checkout/shipping");
    } else {
      window.location.assign("/auth/sign-in");
    }
  };
  return (
    <>
      {cartData.length < 1 ? (
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
      ) : (
        <>
          {/* //pickUpOtions */}
          <div className="w-8/12 pt-10 text-xl mb-5">
            <span className="font-bold">Cart </span>({cartData.length}) item
          </div>
          <div className="w-8/12 relative">
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
          {/* Checkout */}
          <div className="px-10 ml-10  absolute top-[25%] right-40 fixed-top">
            <div className="border rounded-lg px-4">
              <div className="flex justify-center mt-5 ">
                <button
                  onClick={handleCheckOut}
                  className="flex justify-center bg-blue-500 text-white hover:bg-blue-600 px-28 py-3 text-sm font-bold rounded-full"
                >
                  Continue to checkout
                </button>
              </div>
              <div className="border my-5 border-gray-100"></div>
              <div className="px-5 text-sm">
                <div className="flex justify-between mb-8">
                  <p>
                    <span className="font-bold">Subtotal</span>{" "}
                    {cartData.length} Item
                  </p>
                  <span>$3.96</span>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold">Taxes</p>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border my-5 border-gray-100"></div>
                <div className="flex justify-between mb-8">
                  <p className="font-bold">Estimated total</p>
                  <span className="font-bold">$3.96</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="w-8/12  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <CardHeader className="bg-blue-50 border border-gray-200 rounded-lg shadow flex flex-row space-x-24  ">
              <CardTitle>
                Pickup or delivery from store, as soon as today
              </CardTitle>
              <CardDescription>
                <a className="font-bold" href="#">
                  Reserve a time
                </a>
              </CardDescription>
            </CardHeader>
            {cartData.map((itm) => (
              <CartItem CartItemData={itm} key={itm.productId} />
            ))}
          </Card>
        </>
      )}
    </>
  );
}

export default Cart;
