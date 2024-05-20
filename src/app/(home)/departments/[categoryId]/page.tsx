// navbar (top & bottom)
// ad bar large
// ad cards (3 with button)
// side bar + main section
// side bar: 3 category accordion
// main section:
// product carousel 1
// product carousel 2
// category carousel 1
// ad bar large
// ad cards (3 with button)
// ad bar large
// product carousel 3
// product carousel 4
// category carousel 2
// ad bar large
// category carousel 3
// related pages
// footer (top & buttom)

//extra :
// shop by price
// shop by brand
import { AdBar } from "@/components/ads/AdBar";
import AdBarLarge from "@/components/ads/AdBarLarge";
import AdCardSmall from "@/components/ads/AdCardSmall";
import CategoryAccordion from "@/components/category/CategoryAccordion";
import { CategoryCard } from "@/components/category/CategoryCard";
import RelatedPage from "@/components/footer/RelatedPages";

import { ProductCarouselLarge } from "@/components/product/ProductCarouselLarge";
import { getCategoriesData, getProductsData } from "@/lib/supabase/fetch-data";
import React from "react";

const adCard = [
  {
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-fd24/k2-_b7614009-6645-429e-abfc-7300607c01ed.v1.jpg?odnHeight=444&odnWidth=790&odnBg=FFFFFF",
    title: "Candy stock-up",
    description: "Chocolate bunnies, jelly beans & egg fillers for way less",
  },
  {
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-2884/k2-_2cd40d4c-3ef3-4a20-95cb-6b1cddfc0fd3.v1.jpg?odnHeight=444&odnWidth=790&odnBg=FFFFFF",
    title: "Easy entertaining",
    description: "Disposable tableware & more make cleanup a breeze.",
  },
  {
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-23ff/k2-_c18c5169-6d56-41a0-aa3b-c67b1e8e3dd8.v1.jpg?odnHeight=444&odnWidth=790&odnBg=FFFFFF",
    title: "Go full-on spring",
    description: "Set the scene with light & bright décor.",
  },
];

export default async function Category({
  params,
}: {
  params: { categoryId: string };
}) {
  const categoryData = await getCategoriesData();
  const indx = categoryData.findIndex(
    (cat: any) => String(cat.id) === params.categoryId
  );
  const category = categoryData[indx];
  const productData = await getProductsData();
  return (
    <section className="px-20 mb-10 ">
      <div className="">
        <AdBarLarge imgLink={category.carouselImg} title={category.title}/>
        <div className="flex ">
          {/* sidebar */}
          <div className="w-[20%]  me-6">
            <div>
              <CategoryAccordion categoryData={category} />
            </div>
          </div>

          {/* right bar */}
          <div className="w-[80%] ps-24  px-4">
            <div className="my-4 ">
              <p className="font-bold text-2xl">Shop groceries</p>
              <div className="flex items-center ">
                {categoryData.slice(0, 6).map((cat,indx) => (
                  <CategoryCard key={indx} categoryData={cat} />
                ))}
              </div>
            </div>
            <div className=" my-4">
              <p className="font-bold mb-6 text-2xl">Shop Essential</p>
              <div className="flex items-center ">
                {categoryData.slice(6, 12).map((cat) => (
                  <CategoryCard key={cat.id} categoryData={cat} />
                ))}
              </div>
            </div>
            <div className=" my-4">
              <p className="font-bold mb-6 text-2xl">Build Your Card</p>
              <div className="flex mb-10 items-center  ">
                <ProductCarouselLarge
                  basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                  testProduct={productData.slice(0, 10)}
                />
              </div>
            </div>

            {/* ////////////////// */}
            <div className="grid grid-cols-3 gap-x-">
              {adCard.map((data, index) => (
                <AdCardSmall
                  key={index}
                  imgLink={data.imgLink}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </div>

            <div className=" my-6">
              <p className="font-bold mb-6 text-2xl">Easter meal must-haves</p>
              <div className="flex mb-20 items-center ">
                <ProductCarouselLarge
                  basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                  testProduct={productData.slice(100, 110)}
                />
              </div>
            </div>
            <div className=" my-6">
              <p className="font-bold mb-3 text-2xl">Easter Basket Suffer</p>
              <div className="flex mb-10 items-center ">
                <ProductCarouselLarge
                  basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                  testProduct={productData.slice(200, 210)}
                />
              </div>
            </div>

            <div className=" my-6">
              <p className="font-bold mb-6 text-2xl">Easter candy</p>
              <div className="flex mb-10 items-center ">
                <ProductCarouselLarge
                  basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                  testProduct={productData.slice(70, 80)}
                />
              </div>
            </div>

            <div className=" my-4">
              <p className="font-bold mb-10 text-2xl">Easter baking</p>
              <div className="flex mb-10 items-center ">
                <ProductCarouselLarge
                  basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                  testProduct={productData.slice(90, 100)}
                />
              </div>
            </div>

            <div className="my-6">
              <AdBarLarge
                title={categoryData[0].title}
                imgLink={categoryData[0].carouselImg}
              />
            </div>

            <div className=" my-4 pb-[100px]">
              <p className="font-bold mb-10 text-2xl">
                St. Patrick’s Day picks
              </p>
              <div className="flex mb-10 items-center ">
                <ProductCarouselLarge
                  basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                  testProduct={productData.slice(200, 210)}
                />
              </div>
            </div>

            <AdBar />
          </div>
        </div>

        <div className="md:mt-26 lg:mt-20">
          <RelatedPage />
        </div>
      </div>
    </section>
  );
}
