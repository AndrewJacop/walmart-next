"use client";

import Link from "next/link";
import React, { useState } from "react";

import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";

import { handleAddToCart, removeFromCart } from "@/lib/func/cart";
import { addToFavorites, removeFromFavorites } from "@/lib/func/list";


type CardProps = {
  productData: Product;
  style: string;
};
export default function productCard(card: CardProps) {
  const product = card.productData;
  const styling = card.style;
  
  const [isAdded, setIsAdded] = useState(false); // State to track whether the product is added to cart
  const [isFav, setIsFav] = useState(false); // State to track whether the product is added to Favorite List

  const subDescreption =
    product.title.length > 20
      ? product.title.substring(0, 40) + "..."
      : product.title;
  const finalPrice =
    Number(product.originalPrice) * (100 - Number((product.discount)) / 100);

  const handleAddToFav = () => {
    setIsFav(true);
    addToFavorites(product);
  };
  const handleRemoveFromFav = () => {
    setIsFav(false);
    removeFromFavorites(product);
  };

  return (
    <div className={`container ${styling}  px-3`}>
        <div className="relative ">
          {!isFav ? (
               <button
               className="absolute  mt-2 left-36 bg-[white] border-[1px] rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	"
               onClick={handleAddToFav}
             >
               <CiHeart className="text-[black] text-2xl " />
             </button>
           ) : (
             <button
               className="absolute  mt-2 left-36 bg-[white] border-[1px] rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	"
               onClick={handleRemoveFromFav}
             >
               <IoMdHeart className="text-2xl text-blue-600" />
             </button>
          )}
          <Link href={`/product/${product.id}`}>
            <img src={product.images[0]} alt="card img" className="h-[175px]" />
          </Link>
          <div>
            {product.colors ? (
              <>
                {!isAdded ? ( // Render Add button only if the product is not added to cart
                  <button
                    className={`absolute bottom-1 -left-2  bg-[#0071dc]  text-[white] font-bold  w-20 h-8 border-none rounded-[24px] hover:border-2`}
                    onClick={() => {
                      setIsAdded(true);
                      handleAddToCart(product);
                    }}
                  >
                    {" "}
                    + Add{" "}
                  </button>
                ) : (
                  <div className="flex grid grid-cols-2  w-full mx-1 items-center py-1 rounded-full">
                    <span
                      className="cursor-pointer text-2xl bg-[#bfbfbf] rounded-full text-[white]  me-14"
                      onClick={() => {
                        removeFromCart(product);
                      }}
                    >
                      -
                    </span>

                    <span
                      className="cursor-pointer text-2xl bg-[#bfbfbf] rounded-full  ms-14 text-[white]"
                      onClick={() => {
                        handleAddToCart(product);
                      }}
                    >
                      +
                    </span>
                  </div>
                )}
              </>
            ) : (
              <Link href={`/product/${product.id}`}>
                <button className=" border-[1px] border-[#46474a]  w-20 h-8 font-semibold text-sm rounded-[18px] hover:border-2">
                  {" "}
                  Options{" "}
                </button>
              </Link>
            )}
          </div>
      </div>
      <div className="h-6"></div>

      <div className="mb-1">
        <div className="me-2">
          <span className="text-xs font-bold inline-block align-top">$</span>
          <span className="text-lg font-bold ">{finalPrice.toFixed(2)}</span>
          <span className="text-xs font-bold inline-block align-top">67</span>
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
              {product.discount}
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
                in {product.returnPolicy} days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
