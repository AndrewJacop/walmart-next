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
import { useRouter } from "next/navigation";
import { addNewOrder, getProductsData, getUserByUid } from "@/lib/supabase/fetch-data";
import { handleAddToCart, removeAllFromCart, removeFromCart } from "@/lib/func/cart";


export function Cart() {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProductsData();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);



  
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

  const decreaseCartItemQuantity = (product: Product,cartItem:CartItem) => {
    if(cartItem.quantity>1){
      removeFromCart(product);
      setCartData(
        (prevCartData) =>
        prevCartData.map((item) =>
          item.productId==product.id?{...item, quantity: item.quantity--}: item)

      );
    }else{
      removeAllFromCart(product);
      setCartData((prevCartData) =>
        prevCartData.filter((item) => item.productId !== product.id))
    }
    
    }
  
    const handleRemoveAll = (product: Product,cartItem:CartItem) => {
      
        removeAllFromCart(product);
        setCartData((prevCartData) =>
          prevCartData.filter((item) => item.productId !== product.id))
     
      
      }
    

    const increaseCartItemQuantity = (product: Product,cartItem:CartItem) => {
      if(cartItem.quantity<product.quantity){
        handleAddToCart(product);
        setCartData(
          (prevCartData) =>
          prevCartData.map((item) =>
            item.productId==product.id?{...item, quantity: item.quantity++}: item)
  
        );
      }else{
        
        alert("max quantity")
      }
      
      }


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
      )}

      {cartData.map((itm) => {
        

        
const cartProducts = products.filter((prd) => prd.id === itm.productId);

      return  cartProducts.map((prd) => (
          <>
          
        <div  className="px-3 ml-10 float-end absolute top-[25%] right-16 fixed-top">
        <div className="border rounded-lg px-4">
          <div className="flex justify-center mt-5 ">
            <button
              onClick={handleCheckOut}
              className="flex justify-center bg-blue-600  text-white hover:bg-blue-600 px-28 py-3 text-sm font-bold rounded-full"
            >
              Continue to checkout
            </button>
          </div>
          <div className="border my-5 border-gray-100"></div>
          <div className="px-5 text-sm">
            <div className="flex justify-between mb-8">
              <p>
                <span className="font-bold">Subtotal</span> {(cartData.length)} Item
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
            <div key={prd.id} className="flex p-10">
              <div className="w-8/12 border rounded-lg">
                <div className="flex justify-between bg-blue-50 p-8 rounded-lg">
                  <h1 className="text-xl font-bold">
                    Pickup or delivery from store, as soon as Today
                  </h1>
                  <a
                    href="#"
                    className="underline text-sm hover:no-underline hover:text-blue-800"
                  >
                    Reserve a time
                  </a>
                </div>

                <div className="border my-5 mx-7 border-gray-100">
                  <div className="flex mx-7 mt-3">
                    <img
                      src={prd.images[0]}
                      alt="prdImage"
                      width={100}
                      height={80}
                    />

                    <div>
                      <div className="flex mt-3 ml-2">
                        <a href="#" className=" flex justify-between mr-72">
                          {prd.title}
                        </a>
                        <span className="font-bold absolute right-[42%] ">
                          $
                          {(
                            Number(prd.originalPrice) *
                            ((100 - Number(prd.discount)) / 100) *
                            itm.quantity
                          ).toFixed(2)}
                        </span>
                      </div>
                      <p className="py-2 text-sm  px-2 text-[gray]">
                        $
                        {(
                          Number(prd.originalPrice) *
                          ((100 - Number(prd.discount)) / 100)
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end items-center mx-7 mb-3 text-sm">
                    <p
                      className="mr-7 underline hover:no-underline cursor-pointer hover:text-blue-500"
                      onClick={() => {
                        handleRemoveAll(prd,itm);
                      }}
                    >
                      Remove
                    </p>
                    <a
                      href="#"
                      className="mr-7 underline hover:no-underline hover:text-blue-500"
                    >
                      Save for later
                    </a>
                    <div className="flex border justify-center items-center border-gray-300 px-5 py-1 rounded-full">
                      <span
                        className="mr-8 cursor-pointer text-lg"
                        onClick={() => {
                          decreaseCartItemQuantity(prd,itm);
                        }}
                      >
                        -
                      </span>
                      <p className="font-bold">{itm.quantity}</p>
                      <span
                        className="ml-8 cursor-pointer text-lg"
                        onClick={() => {
                          increaseCartItemQuantity(prd,itm);
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* fixed right sidebar */}
              
            </div>
          </>
        ));
      })}


    </>
  );
}

export default Cart;
