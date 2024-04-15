"use client";

import React from "react";
import { Payment } from "../payment/page";
import Link from "next/link";
import { Shipment } from "../shipping/page";
import { IoWalletOutline } from "react-icons/io5";
import { getProductsData } from "@/lib/supabase/fetch-data";

export default async function PlaceOrder() {
  const payment: Payment = JSON.parse(localStorage.getItem("payment") || "[]");
  const shipping: Shipment = JSON.parse(localStorage.getItem("shipping") || "[]"
  );
  const cartData: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const products: Product[] = await getProductsData();

  return (
    <div className="grid md:grid-cols-4 md:gap-5">
      <div className="overflow-x-auto md:col-span-3">
        <div className="card pb-5  border border-[1px] border-[darkgray] rounded ">
          <h2 className="mb-2 text-xl p-5 font-bold bg-[#f2f8fd] py-4">Shipping Info</h2>
          <div className="ps-8">

           <span className="flex text-lg">  <p className="font-bold pe-24"> For : </p> {shipping.firstname}</span><br/>
           <hr/>
           <span className="flex my-5 text-lg">  <p className="font-bold pe-14">Address: </p>  st.{shipping.address}, {shipping.city},
            {shipping.zipCode}</span>
            <hr/>
            <span className="flex"> <p className="font-bold mt-5 pe-2">Phone Number: </p>  {shipping.PhoneNum} </span>
          </div>
          <div className="ms-8">
            <Link
              className="default-button inline-block bg-blue-600 mt-4 px-3 py-1 rounded text-[white]"
              href="/shipping"
            >
              Edit
            </Link>
          </div>
        </div>
        <div className="card mt-5  pb-5  border border-[1px] border-[darkgray] rounded">
          <h2 className="mb-2 text-xl p-5 flex items-center   font-bold bg-[#f2f8fd] py-4">
            {" "}
            <IoWalletOutline className="me-3" />
            Payment Method
          </h2>
          <div className="ps-8">
            {payment.paymentMethod}
            </div>
          <div className="ms-8">
            <a
              className="default-button inline-block bg-blue-600 mt-4 px-3 py-1 rounded text-[white]"
              href="/payment"
            >
              Edit
            </a>
          </div>
        </div>
        <div className="card overflow-x-auto mt-5 p-5 border border-[1px] border-[darkgray] rounded">
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
                        className="flex items-center"
                      >
                        <img
                          src={prd.images[0]}
                          width={50}
                          height={50}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                          }}
                          className="m-3   me-5"
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
              href="/cart"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="card  p-5">
        <h2 className="mb-2 text-lg">Order Summary</h2>
        <ul>
          <li>
            <div className="mb-2 flex justify-between">
              <div>Items</div>
              <div>${itemsPrice}</div>
            </div>
          </li>
          <li>
            <div className="mb-2 flex justify-between">
              <div>Tax</div>
              <div>${taxPrice}</div>
            </div>
          </li>
          <li>
            <div className="mb-2 flex justify-between">
              <div>Shipping</div>
              <div>${shippingPrice}</div>
            </div>
          </li>
          <li>
            <div className="mb-2 flex justify-between">
              <div>Total</div>
              <div>${totalPrice}</div>
            </div>
          </li>
          <li>
            <button
              onClick={() => alert('Not implemented')}
              className="primary-button w-full"
            >
              Place Order
            </button>
          </li>
        </ul>
      </div> */}
      </div>
    </div>
  );
}
