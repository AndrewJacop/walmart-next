"use client";
import AddToCartBtn from "@/components/product/addToCartButton";
import { handleAddToCart, removeFromCart } from "@/lib/func/cart";
import { getFavoriteProducts, removeFromFavorites } from "@/lib/func/list";
import React, { useState, useEffect } from "react";


export default function MyFavoriteLists() {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [isAdded, setIsAdded] = useState(false); // State to track whether the product is added to cart

  useEffect(() => {
    const favoriteProducts = getFavoriteProducts();
    setFavoriteProducts(favoriteProducts);
  }, []);

  const handleRemoveFromFavorites = (product: Product) => {
    removeFromFavorites(product);
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== product.id)
    );
  };

  const favoriteProductsCount = favoriteProducts.length;

  return (
    <>
    {favoriteProductsCount!=0?(
      <><h1 className="font-bold text-xl mt-5">Favorites List</h1><p className="text-gray-500 text-xs mt-16">
                  {favoriteProductsCount} items
              </p><div className="w-9/12">
                      <ul>
                          {favoriteProducts.map((product) => (
                              <li key={product.id}>
                                  <div className="border my-5"></div>
                                  <div className="flex justify-between">
                                      <div className="flex">
                                          <img src={product.images[0]} alt="prdImage" width={120} />
                                          <a href="#" className="text-sm ml-5 hover:underline">
                                              {product.title}
                                          </a>
                                      </div>
                                      <div className="ml-4">
                                          <p className="font-bold">${product.originalPrice}</p>
                                      </div>
                                  </div>
                                  <div className="flex justify-between mt-5">
                                      <div>
                                          <button
                                              className="underline text-sm hover:no-underline hover:text-blue-500 ml-6"
                                              onClick={() => handleRemoveFromFavorites(product)}
                                          >
                                              Remove
                                          </button>
                                      </div>
                                      <div>
                                      {!isAdded ? ( // Render Add button only if the product is not added to cart
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
            

               <AddToCartBtn product={product} />
              </div>
            )}
                                      </div>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div></>
      ):(
        <div className=" mb-20 w-72 m-auto">
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-a9ea/k2-_c005f233-4ecc-4d99-beb8-6e7faf7b241d.v1.svg"
              alt=""
            />
           <p className="text-center font-bold ">This list is lonely</p>
           <p className="text-center ">You can add items individually or save
items while you shop.</p>

          </div>
      )}
    </>
  );
}