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
import BlueAddToCartBtn from "./blueAddToCartbtn";

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
          setIsFav(true);
          addToFavorites(product);
        }else{
          window.location.assign('/auth')
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
            className="absolute mt-2 left-16 bg-white border rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	"
            onClick={handleAddToFav}>
            <CiHeart className="text-black text-2xl " />
          </button>
        ) : (
          <button
            className="absolute mt-2 left-16 bg-white border rounded-full p-0 w-7 h-7 flex items-center text-center justify-center	"
            onClick={handleRemoveFromFav}>
            <IoMdHeart className="text-2xl text-blue-600" />
          </button>
        )}
        <a href={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt="card img"
            className="w-20 h-36"
          />
        </a>
        <div>
          {product.colors ? (
            <>
             <BlueAddToCartBtn product={product}/>
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

        <div className="text-sm text-gray-800 text-ellipsis overflow-hidden  max-h-9">
          {subDescreption}
        </div>
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
                width={20}
                height={20}
              
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
