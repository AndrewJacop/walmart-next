"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

import { handleAddToCart, removeFromCart } from "@/lib/func/cart";
import { addToFavorites, removeFromFavorites } from "@/lib/func/list";

type CardProps = {
  productData: Product;
};

/**
 * @brief  CardProduct with link
 *
 * this component is a simple CardProduct with a simple link with the title "shop now"
 * @param cardData string : the CardProduct data {id,title,imgLink,href,query}
 */
export default function ProductSmall(card: CardProps) {
  const product = card.productData;
  const finalPrice =
    Number(product.originalPrice) * ((100 - Number(product.discount)) / 100);

  const [isAdded, setIsAdded] = useState(false); // State to track whether the product is added to cart
  const [isFav, setIsFav] = useState(false); // State to track whether the product is added to Favorite List
  const subDescreption = product.title;
  const handleAddToFav = () => {
    setIsFav(true);
    addToFavorites(product);
  };
  const handleRemoveFromFav = () => {
    setIsFav(false);
    removeFromFavorites(product);
  };

  return (
    <div className="container w-56 px-4">
      <div className="relative mb-5">
        {!isFav ? (
          <button
            className="absolute mt-2 left-36 bg-white border rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	"
            onClick={handleAddToFav}>
            <CiHeart className="text-black text-2xl " />
          </button>
        ) : (
          <button
            className="absolute mt-2 left-36 bg-white border rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	"
            onClick={handleRemoveFromFav}>
            <IoMdHeart className="text-2xl text-blue-600" />
          </button>
        )}
        <a href={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt="card img"
            className="h-40 w-40 cursor-pointer"
          />
        </a>
      </div>

      <div className="mb-1">
        <div className="me-2">
          {Number(product.discount) > 0 ? (
            <>
              <span className="text-lg font-bold text-green-700 me-1">
                Now ${finalPrice.toFixed(2)}{" "}
              </span>
              <span className="text-sm text-gray-700">
                <del> ${product.originalPrice}</del>
              </span>
            </>
          ) : (
            <span className="font-bold text-lg"> ${finalPrice.toFixed(2)}</span>
          )}
        </div>
        <span className="text-sm text-gray-800 text-ellipsis ">
          {subDescreption}
        </span>
      </div>
      <div>
        {product.colors ? (
          <>
            {!isAdded ? ( //  Add button only if the product is not added to cart
              <button
                className="border border-gray-700 w-20 h-8 font-semibold text-sm rounded-[18px] hover:border-2"
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
                  className="cursor-pointer text-2xl bg-gray-300 rounded-full text-white me-14"
                  onClick={() => {
                    removeFromCart(product);
                  }}>
                  -
                </span>
                {/* <p className="font-bold"></p> */}

                <span
                  className="cursor-pointer text-2xl bg-gray-300 rounded-full ms-14 text-white"
                  onClick={ () => {
                    handleAddToCart(product);
                  }}>
                  +
                </span>
              </div>
            )}
          </>
        ) : (
          <Link href={`/product/${product.id}`}>
            <button className=" border border-gray-700 w-20 h-8 font-semibold text-sm rounded-[18px] hover:border-2">
              {" "}
              Options{" "}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
