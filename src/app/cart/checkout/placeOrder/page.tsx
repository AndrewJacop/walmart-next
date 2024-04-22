"use client";
import React, { useEffect, useState } from "react";
import { Payment } from "../payment/page";
import Link from "next/link";
import { Shipment } from "../shipping/page";
import { IoWalletOutline } from "react-icons/io5";
import { getProductsData, getUserByUid } from "@/lib/supabase/fetch-data";
import { auth } from "@/lib/firebase/config";
import Image from "next/image";

export default function PlaceOrder() {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [payment, setPayment] = useState<Payment[]>([]);
  const [shipping, setShipping] = useState<Shipment[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const isAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    return () => {
      isAuth();
    };
  }, []);

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
  useEffect(() => {
    getProductsData().then((data) => {
      setProducts([...data]);
    });

    const shippingDataString = localStorage.getItem("shipping");
    const paymentDataString = localStorage.getItem("payment");
    if (shippingDataString) {
      setShipping(JSON.parse(shippingDataString));
    }

    if (paymentDataString) {
      setPayment(JSON.parse(paymentDataString));
    }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("shipping", "[]");
    localStorage.setItem("payment", "[]");
    window.location.assign("/");
  };

  // TODO: use effect
  // const products: Product[] = getProductsData();

  return (
    <div className="grid md:grid-cols-4 md:gap-5">
      <div className=" md:col-span-3">
        <div className="card pb-5 border border-[darkgray] rounded ">
          <h2 className="mb-2 text-xl p-5 font-bold bg-[#f2f8fd] py-4">
            Shipping Info
          </h2>
          <div className="ps-8">
            {shipping.map((ship) => (
              <>
                <span className="flex text-lg">
                  {" "}
                  <p className="font-bold pe-24"> For : </p> {ship.firstname}
                </span>
                <br />
                <hr />
                <span className="flex my-5 text-lg">
                  {" "}
                  <p className="font-bold pe-14">Address: </p> st.{ship.address}
                  , {ship.city},{ship.zipCode}
                </span>
                <hr />
                <span className="flex items-center mt-5">
                  {" "}
                  <p className="font-bold  pe-2 ">Phone Number: </p>
                  <p> {ship.phoneNum}</p>{" "}
                </span>
              </>
            ))}
          </div>
          <div className="ms-8">
            <Link
              className="default-button inline-block bg-blue-600 mt-4 px-3 py-1 rounded text-[white]"
              href="/cart/checkout/shipping">
              Edit
            </Link>
          </div>
        </div>
        <div className="card mt-5  pb-5  border border-[darkgray] rounded">
          <h2 className="mb-2 text-xl p-5 flex items-center   font-bold bg-[#f2f8fd] py-4">
            {" "}
            <IoWalletOutline className="me-3" />
            Payment Method
          </h2>
          {payment.map((pay, index) => (
            <div className="ps-8" key={index}>
              {pay.paymentMethod}
            </div>
          ))}
          <div className="ms-8">
            <a
              className="default-button inline-block bg-blue-600 mt-4 px-3 py-1 rounded text-[white]"
              href="/cart/checkout/payment">
              Edit
            </a>
          </div>
        </div>
        <div className="card overflow-x-auto mt-5 p-5 border border-[darkgray] rounded">
          <h2 className="mb-2 text-xl font-bold ">Order Items</h2>
          <table className="min-w-full ">
            <thead className="border-b">
              <tr>
                <th className="px-5 text-left">Item</th>
                <th className="    p-5 text-right">Quantity</th>
                <th className="  p-5 text-right">Price</th>
                <th className="p-5 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((itm) => {
                const cartProducts = products.filter(
                  (prd) => prd.id === itm.productId
                );

                return cartProducts.map((prd) => (
                  <tr key={prd.id} className="border-b ">
                    <td>
                      <Link
                        href={`/product/${prd.id}`}
                        className="flex items-center">
                        <Image
                          alt="product image"
                          src={prd.images[0]}
                          width={50}
                          height={50}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                          }}
                          className="m-3 me-5"
                        />
                        {prd.title}
                      </Link>
                    </td>
                    <td className=" p-5 text-right">{itm.quantity}</td>
                    <td className="p-5 text-right">${prd.originalPrice}</td>
                    <td className="p-5 text-right">
                      ${itm.quantity * Number(prd.originalPrice)}
                    </td>
                  </tr>
                ));
              })}
            </tbody>
          </table>
          <div className="ms-4">
            <Link
              className="default-button inline-block bg-blue-600 mt-4 px-3 py-1 rounded text-[white]"
              href="/cart">
              Edit
            </Link>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className=" bg-blue-600 text-white float-end mt-4 p-1 rounded font-bold px-4">
          Done{" "}
        </button>
      </div>
    </div>
  );
}
