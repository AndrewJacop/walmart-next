import { ProductCarouselLarge } from "@/components/product/ProductCarouselLarge";
import { isUserAuthenticated } from "@/lib/firebase/admin-config";
import { getProductsData } from "@/lib/supabase/fetch-data";
import Link from "next/link";
import React from "react";

export default async function ReOrder() {
  const isAuth = await isUserAuthenticated();

  const productData = await getProductsData();

  return (
    <>
      {!isAuth ? (
        <>
          <div className="mt-14 flex flex-row">
            <img
              className="w-24"
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-7717/k2-_a9270c7b-5e8d-47d5-a049-b477a2d87f05.v1.png"
              alt=""
            />
            <div>
            <p className="ml-10 text-lg mb-4   font-normal">
                Your essentials will show up here for quick and easy reordering
              </p>
              <Link
                href="/auth"
                className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ml-10 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in or create account
              </Link>
            </div>
          </div>
          <div className="mt-20 mb-20">
            <p className="text-2xl  font-bold mb-10">Build your cart</p>
            <ProductCarouselLarge
              basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
              testProduct={productData.slice(6, 11)}
            />
          </div>
        </>
      ) : (
        <>
        
        <div className=" flex items-center mt-8">
            <img
              className="w-[110px] h-[120px]"
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-7717/k2-_a9270c7b-5e8d-47d5-a049-b477a2d87f05.v1.png"
              alt=""
            />
            <div>
              <p className="ml-4  mb-2 text-[#46474a]">
                Your essentials will show up here for quick and easy reordering
              </p>
             
            </div>
          </div>
          <div className="mt-20 mb-20">
            <p className="text-2xl  font-bold mb-10">Build your cart</p>
            <ProductCarouselLarge
              basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
              testProduct={productData.slice(400, 411)}
            />
          </div>
        </>
      )}
    </>
  );
}
