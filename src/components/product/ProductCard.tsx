"use client";

import { handleAddToCart } from "@/lib/func/cart";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

type cardProps = {
  cardData: Product;
  style: string;
};
export let cartItems: CartItem[] = [];
export default function ProductCard(card: cardProps) {
  const productCard = card.cardData;
  const styling = card.style;

  const subDescreption =
    productCard.title.length > 20
      ? productCard.title.substring(0, 26) + "..."
      : productCard.title;

  return (
    <div className={`container ${styling}  px-3`}>
      <div>
        <span className="relative ">
          <button className="absolute  mt-2 left-[80%] bg-[white] border-[1px] rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	">
            <CiHeart className="text-[black] text-2xl " />
          </button>
          <img
            src={productCard.images[0]}
            alt="card img"
            className="h-[175px]"
          />
          <button
            className={`absolute bottom-1 -left-2  bg-[#0071dc]  text-[white] font-bold px-3 py-1 border-none rounded-[24px]`}
            onClick={() => {
              handleAddToCart(productCard);
            }}>
            +Add
          </button>
        </span>
      </div>
      <div className="h-6"></div>

      <div className="mb-1">
        <div className="me-2">
          <span className="text-xs font-bold inline-block align-top">$</span>
          <span className="text-lg font-bold ">
            {productCard.originalPrice}
          </span>
          <span className="text-xs font-bold inline-block align-top">67</span>
        </div>

        <div className="mt-2 mb-1 me-1 font-bold text-sm">
          {" "}
          {productCard.brand.title}
        </div>
        <span className="text-sm text-[#2e2f32]">{subDescreption}</span>
        <div>
          <div className="flex items-center">
            <span className="mt-2 flex items-center">
              <FaStar className="text-xs w-3 h-3" />
              <FaStar className="text-xs w-3 h-3" />
              <FaStar className="text-xs w-3 h-3" />
              <FaStar className="text-xs w-3 h-3" />
              <FaStarHalfAlt className="text-xs w-3 h-3" />
            </span>
            <span className="text-xs text-[#74767c] mt-2 ms-1 ">
              {productCard.discount}
            </span>
          </div>
          <div>
            <div className="flex items-center my-2">
              <span className="text-xs me-1 text-[#0071dc] font-bold">
                Save with{" "}
              </span>
              <img
                src="https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg"
                alt="walmart icon"
                height={20}
                width={25}
              />
            </div>
            <div className="my-2 text-xs text-[#2e2f32]">
              Shipping, arrives{" "}
              <span className="font-bold">
                {" "}
                in {productCard.returnPolicy.returnWithin} days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// // import React from "react";
// // import { CiHeart } from "react-icons/ci";
// // import { FaStar } from "react-icons/fa";
// // import { FaStarHalfAlt } from "react-icons/fa";

// // import CardImg from "../../../public/cardim2.webp";
// // import walmartIcon from "../../../public/walmartIcon.svg";
// // import Image from "next/image";

// // export default function productCard() {
// //   const title =" George Big & Tall Men Pleated Cuffed Microfiber Dress Pants with Adjustable Waistband";

// //   const truncatedTitle =
// //     title.length > 20 ? title.substring(0, 70) + "..." : title;

// //   return (
// //     <div className="container ms-[20px] w-[212px] px-4">
// //       <div>
// //         <span className="relative ">
// //           <button className="absolute  mt-2 left-36 bg-[white] border-[1px] rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	">
// //             <CiHeart className="text-[black] text-2xl " />
// //           </button>
// //           <Image src={CardImg} alt="card img" width={276} height={374}></Image>
// //         </span>
// //       </div>
// //       <div className="h-6"></div>

// //       <div className="mb-1">
// //         <div className="me-2">
// //           <span className="text-xs font-bold inline-block align-top">$</span>
// //           <span className="text-lg font-bold ">21</span>
// //           <span className="text-xs font-bold inline-block align-top">88</span>
// //         </div>

// //         <div className="mt-2 mb-1 me-1 font-bold text-sm"> George</div>
// //         <span className="text-sm text-[#2e2f32]">{truncatedTitle}</span>
// //       </div>
// //       <div className="flex items-center">
// //         <span className="mt-2 flex items-center">
// //           <FaStar className="text-xs w-3 h-3" />
// //           <FaStar className="text-xs w-3 h-3" />
// //           <FaStar className="text-xs w-3 h-3" />
// //           <FaStar className="text-xs w-3 h-3" />
// //           <FaStarHalfAlt className="text-xs w-3 h-3" />
// //         </span>
// //         <span className="text-xs text-[#74767c] mt-2 ms-1 ">956</span>
// //       </div>
// //       <div>
// //         <div className="flex items-center my-2">
// //           <span className="text-xs me-1 text-[#0071dc] font-bold">
// //             Save with{" "}
// //           </span>
// //           <Image
// //             src={walmartIcon}
// //             alt="walmart icon"
// //             height={20}
// //             width={25}
// //           ></Image>
// //         </div>
// //       </div>

// //       <div className="my-2 text-xs text-[#2e2f32]">
// //         Shipping, arrives <span className="font-bold"> in 3+ days</span>

// //       </div>
// //     </div>
// //   );
// // }
