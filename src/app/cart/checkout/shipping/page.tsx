"use client";
import React, { useEffect, useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { getUserByUid } from "@/lib/supabase/fetch-data";
import { auth } from "@/lib/firebase/config";

export interface Shipment {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  zipCode: string;
  phoneNum: string;
}
export default function Shipping() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZibCode] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

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
    }
  }, [userId]);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem(
      "shipping",
      JSON.stringify([
        { firstname, lastname, address, city, zipCode, phoneNum },
      ])
    );
    router.push("/cart/checkout/payment");
  };

  return (
    <div className="mt-5">
      <div className="w-[50%] ">
        <div className="border rounded-[10px] shadow-lg">
          <div className="relative flex items-center bg-[#f2f8fd] p-3">
            <img src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" />
            <p className="font-semibold text-[#2e2f32] mx-2">
              1. Free shipping, arrives between tomorrow, Apr 6—Fri, Apr 12
            </p>
            <p className="bg-[gray]  text-xl px-2 absolute right-3 text-[white]  rounded-full">
              -
            </p>
          </div>

          <div className="p-6">
            <div>
              <p className="text-[#2e2f32] text-sm font-light my-4">
                * Required fields
              </p>
              <h1 className="font-bold">Shipping address</h1>
              <p className="text-[#2e2f32] text-sm font-light mb-4">
                Where should we deliver your order?
              </p>
            </div>

            <div className="pb-5">
              <form onSubmit={handleSubmit}>
                <div className="flex  grid grid-cols-2 gap-x-10">
                  <div>
                    <label className="font-bold text-sm">First name*</label>
                    <br />
                    <input
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      className="border border-[1px] border-[darkgray] text-black w-full py-3 rounded px-2 mb-2"
                    />
                    <label className="font-bold text-sm">
                      {" "}
                      Street Address*
                    </label>
                    <br />
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="border border-[1px] border-[darkgray] text-black w-full py-3 rounded px-2 mb-2"
                    />
                    <label className="font-bold text-sm">City*</label>
                    <br />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="border border-[1px] border-[darkgray] text-black w-full py-3 rounded px-2 mb-2"
                    />
                    <label className="font-bold text-sm">Phone number*</label>
                    <br />
                    <input
                      type="text"
                      value={phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      className="border border-[1px] border-[darkgray] text-black w-full py-3 rounded px-2 mb-2"
                    />
                  </div>
                  <div>
                    {" "}
                    <label className="font-bold text-sm">Last name*</label>
                    <br />
                    <input
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      className="border border-[1px] border-[darkgray] text-black w-full py-3 rounded px-2 mb-2"
                    />
                    <label className="font-bold text-sm">
                      Apt, suite, etc. (optional)
                    </label>
                    <br />
                    <input
                      type="text"
                      className="border border-[1px] border-[darkgray] text-black w-full py-3 rounded px-2 mb-2"
                    />
                    <label className="font-bold text-sm">State*</label>
                    <br />
                    <input
                      type="text"
                      className="border border-[1px] border-[darkgray] text-black w-full py-3 rounded px-2 mb-2"
                    />
                    <label className="font-bold text-sm">postal code</label>
                    <br />
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZibCode(e.target.value)}
                      className="border border-[1px] border-[darkgray] text-black w-full py-3 rounded px-2 mb-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-sm">Delivery notes</label>
                  <br />
                  <input
                    placeholder=""
                    className="border border-[1px] border-[darkgray] w-full h-20  px-1 rounded "></input>
                </div>
                <p className="my-2 font-bold mt-3 text-sm">
                  More delivery instructions
                </p>

                <div className="flex items-center space-x-2 my-2">
                  <input
                    type="checkbox"
                    id="preferredDeliveryAddress"
                    name="preferredDeliveryAddress"
                  />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Set as my preferred delivery address
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-[white] rounded-[22px] px-5 py-2 ms-[80%] text-lg font-semibold mb-2">
                  {" "}
                  continue
                </button>
                <hr></hr>
                <div>
                  <span className="flex text-sm py-3 mb-3">
                    <p className="font-bold me-1 underline">WARRNING:</p>
                    <p> California&apos;s Proposition 65</p>{" "}
                  </span>
                </div>
                <hr />
                <div className="my-3">
                  <h1 className="font-bold">Items details</h1>

                  <p className="text-sm font-light py-3">
                    {cartData.length} items
                  </p>
                  {/* <div className="flex py-3">
                    {cartData.map((itm) => {
                      const cartProducts = products.filter(
                        (prd) => prd.id === itm.productId
                      );
                      return cartProducts.map((prd) => (
                        <img
                          className="me-4"
                          src={prd.images[0]}
                          height={48}
                          width={48}
                        />
                      ));
                    })}
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="relative flex text-[#babbbe] items-center font-bold text-2xl border border-[1px] rounded shadow-lg mt-5 p-6">
          <IoWalletOutline />
          <p className="px-4">2. Payment method</p>
          <p className="bg-[#babbbe]  text-2xl px-3 absolute right-3 text-[white]  rounded-[20px]">
            -
          </p>
        </div>

        <div className="relative flex text-[#babbbe] items-center font-bold text-2xl border border-[1px] rounded shadow-lg mt-5 p-6">
          <CiMobile1 />

          <p className="px-4">3. Mobile contact</p>
          <p className="bg-[#babbbe]  text-2xl px-3 absolute right-3 text-[white]  rounded-[20px]">
            -
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
