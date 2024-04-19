"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";

import { handleAddToCart, removeFromCart } from "@/lib/func/cart";
import { addToFavorites, removeFromFavorites } from "@/lib/func/list";
import WalmartPlus from "../../../public/wplus-icon-blue.svg";
import { auth } from "@/lib/firebase/config";

type CardProps = {
  productData: Product;
  style: string;
};

export default function ProductCard(card: CardProps) {
  const product = card.productData;
  const styling = card.style;

  const [isAdded, setIsAdded] = useState(false); // State to track whether the product is added to cart
  const [isFav, setIsFav] = useState(false); // State to track whether the product is added to Favorite List

  const subDescreption = product.title;
  const finalPrice =
    Number(product.originalPrice) * (100 - Number(product.discount) / 100);

  const handleAddToFav = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
      console.log(user)
      setIsFav(true);
      addToFavorites(product);
      }
    });
  };

  const handleRemoveFromFav = () => {
    setIsFav(false);
    removeFromFavorites(product);
  };

  return (
    <div className={`container ${styling} px-3`}>
      <div className="relative">
        {!isFav ? (
          <button
            className="absolute mt-2 left-36 bg-white border rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	"
            onClick={handleAddToFav}
          >
            <CiHeart className="text-black text-2xl " />
          </button>
        ) : (
          <button
            className="absolute mt-2 left-36 bg-white border rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	"
            onClick={handleRemoveFromFav}
          >
            <IoMdHeart className="text-2xl text-blue-600" />
          </button>
        )}
        <a href={`/product/${product.id}`}>
          <img src={product.images[0]} alt="card img" className="h-32 w-32" />
        </a>
        <div>
          {product.colors ? (
            <>
              {!isAdded ? ( // Render Add button only if the product is not added to cart
                <button
                  className="absolute bottom-1 -left-2 bg-blue-600 text-white font-bold w-20 h-8 border-none rounded-3xl hover:border-2"
                  onClick={() => {
                    setIsAdded(true);
                    handleAddToCart(product);
                  }}
                >
                  {" "}
                  + Add{" "}
                </button>
              ) : (
                <div className="grid grid-cols-2 w-full mx-1 items-center py-1 rounded-full">
                  <span
                    className="cursor-pointer text-2xl bg-gray-300 rounded-full text-white me-14"
                    onClick={() => {
                      removeFromCart(product);
                    }}
                  >
                    -
                  </span>

                  <span
                    className="cursor-pointer text-2xl bg-gray-300 rounded-full ms-14 text-white"
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
              <button className=" border border-gray-700 w-20 h-8 font-semibold text-sm rounded-[18px] hover:border-2">
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

        <span className="text-sm text-gray-800 text-ellipsis">
          {subDescreption}
        </span>
        <div>
          <div className="flex items-center">
            <span className="mt-2 flex items-center">
              <FaStar className="text-xs w-3 h-3" />
              <FaStar className="text-xs w-3 h-3" />
              <FaStar className="text-xs w-3 h-3" />
              <FaStar className="text-xs w-3 h-3" />
              <FaStarHalfAlt className="text-xs w-3 h-3" />
            </span>
            <span className="text-xs text-gray-500 mt-2 ms-1">
              {product.discount}
            </span>
          </div>
          <div>
            <div className="flex items-center my-2">
              <span className="text-xs me-1 text-blue-600 font-bold">
                Save with{" "}
              </span>
              <Image
                src={WalmartPlus}
                alt="walmart icon"
                height={20}
                width={25}
              />
            </div>
            <div className="my-2 text-xs text-gray-800">
              Shipping, arrives{" "}
              <span className="font-bold"> in {product.returnPolicy} days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
