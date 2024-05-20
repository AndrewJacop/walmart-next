"use client";
import { useEffect, useState } from "react";
import Shopping from "./../../components/cart/ShippingOption";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { auth } from "@/lib/firebase/config";
import {
  addNewOrder,
  getProductsData,
  getUserByUid,
} from "@/lib/supabase/fetch-data";
import {
  decrement,
  increment,
  productQtyInCartSelector,
  remove,
} from "@/store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import QtyBtn from "@/components/product/qtyButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { calculateTotalPrice } from "@/store/slices/totalPrice";
import Image from "next/image";
import toast from "react-hot-toast";

export default function CartPage() {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProductsData();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  function decreaseCartItemQuantity(product: Product, cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      dispatch(decrement(product));
      setCartData((prevCartData) =>
        prevCartData.map((item) =>
          item.productId == product.id
            ? { ...item, quantity: item.quantity-- }
            : item
        )
      );
    } else {
      dispatch(decrement(product));
      setCartData((prevCartData) =>
        prevCartData.filter((item) => item.productId !== product.id)
      );
    }
  }

  function handleRemoveAll(product: Product) {
    dispatch(remove(product));
    setCartData((prevCartData) =>
      prevCartData.filter((item) => item.productId !== product.id)
    );
    // dispatch(calculateTotalPrice({ products: products }));
  }

  function increaseCartItemQuantity(product: Product, cartItem: CartItem) {
    dispatch(increment(product));
    if (cartItem.quantity < product.quantity) {
      setCartData((prevCartData) =>
        prevCartData.map((item) =>
          item.productId == product.id
            ? { ...item, quantity: item.quantity++ }
            : item
        )
      );
    } 
    // dispatch(calculateTotalPrice({ products: products }));
  }

  useEffect(() => {
    const isAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    return () => {
      isAuth();
    };
  }, [userId]);

  useEffect(() => {
    if (userId) {
      getUserByUid(userId).then((user) => {
        if (user) {
          setCartData(user.cart);
        }
      });
    } else {
      const cartDataString = localStorage.getItem("cart");
      if (cartDataString) {
        const cartData: CartItem[] = JSON.parse(cartDataString);
        setCartData(cartData);
      }
    }
  }, [userId]);

  async function handleCheckOut() {
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
              status: "Unconfirmed",
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
      window.location.assign("/auth");
    }
  }

  const cartQuantities = useAppSelector((state) =>
    cartData.map((item) => productQtyInCartSelector(state, item.productId))
  );

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
                alt="background"
                src="https://i5.walmartimages.com/dfw/63fd9f59-e0d6/65ab57af-59d6-423a-9500-1fa5ab36d1c7/v1/empty-cart.svg"
                width={200}
                height={240}
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
          <div className="px-10 pt-10 text-xl mb-5">
            <span className="font-bold">Cart </span>({cartData.length})
          </div>
          <div className="w-8/12 relative ml-10">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <img
                  className="absolute mt-3"
                  src="https://i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg"
                  alt="image"
                  width={32}
                  height={32}
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

          <div className="px-3 ml-10 float-end absolute top-[25%] right-16 fixed-top">
            <div className="border rounded-lg px-4">
              <div className="flex justify-center mt-5 ">
                <button
                  onClick={handleCheckOut}
                  className="flex justify-center bg-blue-600  text-white hover:bg-blue-600 px-28 py-3 text-sm font-bold rounded-full">
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
          <div className="flex p-10">
            <div className="w-8/12 border rounded-lg">
              <div className="flex justify-between bg-blue-50 p-8 rounded-lg">
                <h1 className="text-xl font-bold">
                  Pickup or delivery from store, as soon as Today
                </h1>
                <a
                  href="#"
                  className="underline text-sm hover:no-underline hover:text-blue-800">
                  Reserve a time
                </a>
              </div>

              <Card className="border-none">
                {cartData.map((itm, indx) => {
                  const qty = cartQuantities[indx];

                  const cartProducts = products.filter(
                    (prd) => prd.id === itm.productId
                  );

                  return cartProducts.map((prd) => (
                    <div key={prd.id}>
                      <CardHeader className="flex flex-row  relative">
                        <img
                          src={prd.images[0]}
                          alt="product img"
                          height={96}
                          width={96}
                        />

                        <CardContent>
                          <p className="w-1/2 flex ">
                            {prd.title}{" "}
                            <span className="font-bold absolute right-10">
                              $
                              {(
                                Number(prd.originalPrice) *
                                ((100 - Number(prd.discount)) / 100) *
                                itm.quantity
                              ).toFixed(2)}
                            </span>
                          </p>
                          <div className="flex justify-end items-center mx-7 mb-3 text-sm absolute right-3">
                            <p
                              className="mr-7 underline hover:no-underline cursor-pointer hover:text-blue-500"
                              onClick={() => {
                                handleRemoveAll(prd);
                              }}>
                              Remove
                            </p>
                            <a
                              href="#"
                              className="mr-7 underline hover:no-underline hover:text-blue-500">
                              Save for later
                            </a>
                            <div className="flex border justify-center items-center border-gray-300 px-5 py-1 rounded-full">
                              {!qty ? (
                                <div className="flex justify-center">
                                  <button className=" border-[1px] border-[#46474a] w-20 h-8 font-semibold text-sm rounded-[18px] hover:border-2">
                                    +Add
                                  </button>
                                </div>
                              ) : (
                                <QtyBtn
                                  onDecrease={() =>
                                    decreaseCartItemQuantity(prd, itm)
                                  }
                                  onIncrease={() =>
                                    increaseCartItemQuantity(prd, itm)
                                  }
                                  qty={qty}
                                />
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </CardHeader>
                    </div>
                  ));
                })}
              </Card>
            </div>
            {/* fixed right sidebar */}
          </div>
        </>
      )}
    </>
  );
}
