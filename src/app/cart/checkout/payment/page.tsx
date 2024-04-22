"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoWalletOutline } from "react-icons/io5";

export interface Payment {
  paymentMethod: string;
  cardNumber: string;
}
export default function Payment() {
  const [paymentMethod, setPayment] = useState("");
  const [cardNum, setCardNum] = useState("");
  const router = useRouter();

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem(
      "payment",
      JSON.stringify([{ paymentMethod: paymentMethod, cardNumber: cardNum }])
    );
    router.push("/cart/checkout/placeOrder");
  };
  return (
    
      
        <div className="w-1/2 border rounded-[10px] shadow-lg p-5 ">
          <div className="relative mb-5 flex items-center bg-[#f2f8fd] p-3">
            <IoWalletOutline />
            <p className="font-semibold text-[#2e2f32] mx-2 text-xl">
              2. Payment method
            </p>
            <p className="bg-[gray]  text-xl px-2 absolute right-3 text-[white]  rounded-full">
              -
            </p>
          </div>

          <div>
            <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit}>
              {[
                {
                  method: "Credit/debit Card",
                  img: "https://i5.walmartimages.com/dfw/63fd9f59-a0df/abc19199-c5c4-40ad-9d4e-8d13356fe6eb/v1/CC-bunch-logo-dark.svg",
                },
                {
                  method: "Gift Card",
                  img: "https://i5.walmartimages.com/dfw/63fd9f59-154b/e8c1d0bf-a4ad-4b20-8eac-939ab7f93063/v1/Gift-Card-Logo.png",
                },
                {
                  method: "Electronic Benefits Transfer",
                  img: "https://i5.walmartimages.com/dfw/63fd9f59-2845/2044d79e-92d5-4c08-90a2-0480444a877f/v1/EBT-Logo.svg",
                },
                {
                  method: "Benifits Card",
                  img: "https://i5.walmartimages.com/dfw/63fd9f59-8746/124e7571-efdd-4b6f-8846-fc57601437c5/v1/wallet-benefit-card-tile.svg",
                },
              ].map((payment,indx) => (
                <div key={indx}>
                  <div  className="mb-4 flex">
                    <input
                      name="paymentMethod"
                      className="p-2 outline-none focus:ring-0 "
                      id={payment.method}
                      type="radio"
                      value={payment.method}
                      checked={paymentMethod === payment.method}
                      onChange={(e) => setPayment(e.target.value)}
                    />
                    <img
                      src={payment.img}
                      width={58}
                      height={58}
                      className="mx-5"
                    />

                    <label className="p-2" htmlFor={payment.method}>
                      {payment.method}
                    </label>
                  </div>
                </div>
              ))}
              <p className="text-xs underline cursor-pointer font-semibold  pb-5">
                Learn More about payment methods we accept
              </p>

              <hr />
              <div className="py-2">
                <p className="pt-5 text-xs pb-2 ">Required Fiels*</p>
                <div className="flex w-full items-center  px-3 h-10 rounded border border-[1px] border-[darkgray] ">
                  <IoWalletOutline />
                  <input
                    type="text"
                    className="w-full mx-2 h-full px-2 border-none focus:border-none "
                    placeholder="Card Number*"
                    value={cardNum}
                    onChange={(e) => setCardNum(e.target.value)}
                  />{" "}
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-[white] rounded-[22px] px-5 py-2 ms-[80%] text-lg font-semibold my-2"
              >
                {" "}
                continue
              </button>
            </form>
          </div>
        </div>
    
  );
}
