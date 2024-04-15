import Filter from "@/components/filter/FilterBar";
import { SearchBar } from "@/components/filter/SearchBar";
import ProductCard from "@/components/product/ProductCard";
import { getProductsData } from "@/lib/supabase/fetch-data";
import React from "react";

export default async function SubCategory() {
  const product =await getProductsData()
  return (
    <>
      <div className="mt-4">
        <Filter />
      </div>
      <div className="-ml-[22px] mt-2 mb-5">
        <hr />

        <h1 className="mt-5 font-bold">Search</h1>
        <SearchBar />
      </div>
      <hr />
      <div className="flex grid grid-cols-5  -mx-4 my-10">
        {product.slice(0,100).map((prd) => (
          <ProductCard key={prd.id} productData={prd} style={""} />
        ))}
      </div>
    </>
  );
}
