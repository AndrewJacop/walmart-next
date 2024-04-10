"use client";

import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { handleAddToCart, removeFromCart } from "@/lib/func/cart";

type CardProps = {
  cardData: Product;
};

/**
 * @brief  CardProduct with link
 *
 * this component is a simple CardProduct with a simple link with the title "shop now"
 * @param cardData string : the CardProduct data {id,title,imgLink,href,query}
 */
export default function ProductSmall(card: CardProps) {
  const product = card.cardData;
  const finalPrice =
    Number(product.originalPrice) * ((100 - product.discount) / 100);
  const [isAdded, setIsAdded] = useState(false); // State to track whether the product is added to cart
  const subDescreption =
    product.title.length > 20
      ? product.title.substring(0, 40) + "..."
      : product.title;

  return (
    <div className="container w-[212px] px-4">
      <div>
        <span className="relative ">
          <button className="absolute  mt-2 left-36 bg-[white] border-[1px] rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	">
            <CiHeart className="text-[black] text-2xl " />
          </button>
          <img
            className="h-[175px]"
            src={product.images[0]}
            alt="card img"
            width={175}
            height={175}
          />
        </span>
      </div>
      <div className="h-6"></div>

      <div className="mb-1">
        <div className="me-2">
          {product.discount > 0 ? (
            <>
              <span className="text-lg font-bold text-[green] me-1">
                Now ${finalPrice.toFixed(2)}{" "}
              </span>
              <span className="font-base text-[14px] text-[#46474a]">
                <del> ${product.originalPrice}</del>
              </span>
            </>
          ) : (
            <span className="font-bold text-lg ">
              {" "}
              ${finalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <span className="text-sm text-[#2e2f32]">{subDescreption}</span>
      </div>
      <div>
        {product.colors ? (
          <>
            {!isAdded ? ( // Render Add button only if the product is not added to cart
              <button
                className=" border-[1px] border-[#46474a] px-4 py-1 font-semibold text-sm rounded-[18px] hover:border-[2px]"
                onClick={() => {
                  setIsAdded(true);
                  handleAddToCart(product);
                }}>
                {" "}
                + Add{" "}
              </button>
            ) : (
              <div className="flex grid grid-cols-2  w-full mx-1  text-center items-center py-1 rounded-full">
                <span
                  className="cursor-pointer text-2xl bg-[#bfbfbf] rounded-full   text-[white]  me-14"
                  onClick={() => {
                    removeFromCart(product);
                  }}>
                  -
                </span>
                {/* <p className="font-bold"></p> */}

                <span
                  className="cursor-pointer text-2xl bg-[#bfbfbf] rounded-full  ms-14 text-[white]"
                  onClick={() => {
                    handleAddToCart(product);
                  }}>
                  +
                </span>
              </div>
            )}
          </>
        ) : (
          <Link href={`/product/${product.id}`}>
            <button className=" border-[1px] border-[#46474a] px-4 py-1 font-semibold text-sm rounded-[18px] hover:border-[2px]">
              {" "}
              Options{" "}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
