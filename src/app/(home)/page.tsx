import { AdBar } from "@/components/ads/AdBar";
import { AdCard } from "@/components/ads/AdCard";
import { AnimatedAdCard } from "@/components/ads/AnimatedAdCard";
import { VideoAdCard } from "@/components/ads/VideoAdCard";

import { CategoryCarousel } from "@/components/category/CategoryCarousel";
import DepartmentCard from "@/components/category/DepartmentCard";
import SubCategoryItem from "@/components/category/SubCategoryItem";
import FilterBar from "@/components/filter/FilterBar";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import {
  getAdsData,
  getCategoriesData,
  getProductsData,
} from "@/lib/supabase/fetch-data";
// const cartd: CartItem = { productId: "", quantity: 32 };
// const testAd: Ad[] = [
//   {
//     id: 10,
//     title: "Makeup on the glow",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-3079/k2-_ac3b69cc-77c4-46ca-a022-c3c5d10e39a8.v1.jpg?odnHeight=512&odnWidth=770&odnBg=&odnDynImageQuality=70",
//     href: "https://www.walmart.com/browse/home/beach-towels/4044_539095_1113072?athAsset=eyJhdGhjcGlkIjoiNWE4ZGI3YzctNzVlMC00NmM2LTkyYzMtNjVmYmY4Mjg3ZTQxIn0=&athena=true",
//     query: "",
//   },
//   {
//     id: 20,
//     title: "Fresh style trends",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-1eb3/k2-_a1cefc04-77f9-4df5-beac-7b2b7e4c849e.v1.jpg?odnHeight=1156&odnWidth=770&odnBg=&odnDynImageQuality=70",
//     href: "https://www.walmart.com/browse/home/beach-towels/4044_539095_1113072?athAsset=eyJhdGhjcGlkIjoiNWE4ZGI3YzctNzVlMC00NmM2LTkyYzMtNjVmYmY4Mjg3ZTQxIn0=&athena=true",
//     query: "",
//   },
//   {
//     id: 30,
//     title: "Refresh your space",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-f7e1/k2-_a6879945-962a-46c7-a5ab-c0fc23bc84a0.v1.jpg?odnHeight=432&odnWidth=770&odnBg=&odnDynImageQuality=70",
//     href: "https://www.walmart.com/browse/home/beach-towels/4044_539095_1113072?athAsset=eyJhdGhjcGlkIjoiNWE4ZGI3YzctNzVlMC00NmM2LTkyYzMtNjVmYmY4Mjg3ZTQxIn0=&athena=true",
//     query: "",
//   },
// ];
// const testCat: Category[] = [
//   {
//     id: 1,
//     title: "Grocery",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-6406/k2-_987b6e28-ac24-4c30-a150-afe57033daf2.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [2, 4, 6, 8, 9],
//     barLink: "",
//   },
//   {
//     barLink: "",
//     id: 2,
//     title: "Fashion",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-48f6/k2-_7aed4b13-f076-4785-8b0c-2a8343c2b70c.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     barLink: "",
//     id: 3,
//     title: "Electronics",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-9674/k2-_cd6b8be4-8bfb-47bc-9843-49e8ed571106.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     barLink: "",
//     id: 4,
//     title: "Home",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-8370/k2-_15a0a4d2-1619-4914-94cd-774567d41404.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     barLink: "",
//     id: 5,
//     title: "Pation & Gardin",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-16a3/k2-_f9b2f53c-a2c0-40bf-8e25-692c544b3baf.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     id: 6,
//     title: "Home Improvement",
//     barLink: "",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-a077/k2-_02b361d9-ab7b-45e9-95fb-3060dd6be190.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     id: 15,
//     title: "Baby",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-648f/k2-_c76e7139-cecb-4d48-893d-686d9bbbbfbe.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//     barLink: "",
//   },
//   {
//     id: 14,
//     title: "Toys",
//     barLink: "",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-6897/k2-_9d771225-ddc0-4ae4-8302-1921a8ace961.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     id: 1,
//     title: "Grocery",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-6406/k2-_987b6e28-ac24-4c30-a150-afe57033daf2.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//     barLink: "",
//   },
//   {
//     barLink: "",
//     id: 2,
//     title: "Fashion",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-48f6/k2-_7aed4b13-f076-4785-8b0c-2a8343c2b70c.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     barLink: "",
//     id: 3,
//     title: "Electronics",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-9674/k2-_cd6b8be4-8bfb-47bc-9843-49e8ed571106.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     barLink: "",
//     id: 4,
//     title: "Home",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-8370/k2-_15a0a4d2-1619-4914-94cd-774567d41404.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     barLink: "",
//     id: 5,
//     title: "Pation & Gardin",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-16a3/k2-_f9b2f53c-a2c0-40bf-8e25-692c544b3baf.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     id: 6,
//     title: "Home Improvement",
//     barLink: "",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-a077/k2-_02b361d9-ab7b-45e9-95fb-3060dd6be190.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
//   {
//     id: 15,
//     title: "Baby",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-648f/k2-_c76e7139-cecb-4d48-893d-686d9bbbbfbe.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//     barLink: "",
//   },
//   {
//     id: 14,
//     title: "Toys",
//     barLink: "",
//     imgLink:
//       "https://i5.walmartimages.com/dfw/4ff9c6c9-6897/k2-_9d771225-ddc0-4ae4-8302-1921a8ace961.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//     subCategories: [],
//   },
// ];
// // const testProd: Product[] = [
// //   {
// //     id: "dbd86be64e58faa2c3a05fb916818a7f",
// //     title:
// //       'Anagram International A11957001 Sesame Street 1st Birthday Foil Balloon, 18", Multicolor',
// //     images: [
// //       "https://images-na.ssl-images-amazon.com/images/I/31D-X5aC1fL.jpg",
// //       "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
// //     ],
// //     brand: 70,
// //     colors: [],
// //     seller: 70,
// //     isBestSeller: false,
// //     quantity: 7,
// //     subCatergory: [0, 1, 2],
// //     discount: 0,
// //     originalPrice: "6.99",
// //     returnPolicy: 2,
// //     isGiftable: false,
// //     modelNumber: "",
// //     aboutProduct: "",
// //     productSpecification: "",
// //     technicalDetails: "",
// //     shippingWeight: "",
// //     productDimensions: "",
// //     warrenty: "",
// //     reviews: [],
// //     variants: [],
// //   },
// //   {
// //     id: "b48da67f0a050112a8874a42ed6fb341",
// //     title: "Eat More Pie Dessert Plates 7",
// //     images: [
// //       "https://images-na.ssl-images-amazon.com/images/I/51nAxFmWv5L.jpg",
// //       "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
// //     ],
// //     brand: 11,
// //     colors: [],
// //     seller: 48,
// //     isBestSeller: false,
// //     quantity: 4,
// //     subCatergory: [0, 1],
// //     discount: 0,
// //     originalPrice: "8.69",
// //     returnPolicy: 0,
// //     isGiftable: false,
// //     modelNumber: "",
// //     aboutProduct: "",
// //     productSpecification: "",
// //     technicalDetails: "",
// //     shippingWeight: "",
// //     productDimensions: "",
// //     warrenty: "",
// //     reviews: [],
// //     variants: [],
// //   },
// //   {
// //     id: "63f33269bd408e3cfa627e90785a6560",
// //     title: "Beistle CN038 Tropical Breeze Confetti",
// //     images: [
// //       "https://images-na.ssl-images-amazon.com/images/I/61VF9CnU--L.jpg",
// //       "https://images-na.ssl-images-amazon.com/images/I/61keSYOJc3L.jpg",
// //       "https://images-na.ssl-images-amazon.com/images/I/41U7cljeWfL.jpg",
// //       "https://images-na.ssl-images-amazon.com/images/I/41Ju74o4BIL.jpg",
// //       "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
// //     ],
// //     brand: 3,
// //     colors: [],
// //     seller: 59,
// //     isBestSeller: false,
// //     quantity: 2,
// //     subCatergory: [3],
// //     discount: 0,
// //     originalPrice: "4.99",
// //     returnPolicy: 2,
// //     isGiftable: false,
// //     modelNumber: "",
// //     aboutProduct: "",
// //     productSpecification: "",
// //     technicalDetails: "",
// //     shippingWeight: "",
// //     productDimensions: "",
// //     warrenty: "",
// //     reviews: [],
// //     variants: [],
// //   },
// //   {
// //     id: "9e118f3be1a2f0dd14e50e0507827302",
// //     title: "Beistle CN145 Princess Confetti",
// //     images: [
// //       "https://images-na.ssl-images-amazon.com/images/I/61LwsUMnmAL.jpg",
// //       "https://images-na.ssl-images-amazon.com/images/I/41P%2BwpGuDdL.jpg",
// //       "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
// //     ],
// //     brand: 28,
// //     colors: [],
// //     seller: 4,
// //     isBestSeller: false,
// //     quantity: 8,
// //     subCatergory: [4, 5, 6, 7],
// //     discount: 0,
// //     originalPrice: "5.61",
// //     returnPolicy: 1,
// //     isGiftable: false,
// //     modelNumber: "",
// //     aboutProduct: "",
// //     productSpecification: "",
// //     technicalDetails: "",
// //     shippingWeight: "",
// //     productDimensions: "",
// //     warrenty: "",
// //     reviews: [],
// //     variants: [],
// //   },
// // ];
// const testSubCat: SubCategory = {
//   id: 0,
//   title: "Toys & Games",
//   imgLink:
//     "https://i5.walmartimages.com/dfw/4ff9c6c9-6897/k2-_9d771225-ddc0-4ae4-8302-1921a8ace961.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
//   queries: [],
// };

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function HomePage() {
  const apiAdData = await getAdsData();
  const productData = await getProductsData();
  const categoryData = await getCategoriesData();
  return (
    <>
      <section>
        {/* ads section 1  */}
        <section className="xl:flex xl:flex-row md:flex sm:inline sm:align-center">
          
          <div className="xl:w-1/4 xl:inline xl:mx-6  xl:mb-8 xl:order-1 sm:w-full sm:inline md:hidden sm:hidden">
            {apiAdData.slice(0, 3).map((data) => (
              <div key={data.id} className="mb-4">
                <AdCard adData={data} />
              </div>
            ))}
          </div>

         

            <div className="xl:w-1/2  xl:mb-3 xl:order-2 sm:inline sm:w-full sm:order-1">
            <VideoAdCard/>
            <div className="flex grid grid-cols-2 gap-x-6 mt-4">
              <AdCard adData={apiAdData[4]} />
              <AdCard adData={apiAdData[5]} />
            </div>

            <div className="mt-4">
              <AdCard adData={apiAdData[6]} />
            </div>
          </div>
          <div className="xl:w-1/4 xl:inline xl:mx-6 xl:mb-8 xl:order-3 md:hidden sm:inline sm:w-1/2 sm:order-3  sm:ms-36">
            {apiAdData.slice(13, 16).map((data) => (
              <div key={data.id} className="mb-4 sm:ms-24  lg:ms-1 ">
                <AdCard adData={data} />
              </div>
            ))}
          </div>
         
        </section>
        <AdBar />

{/* product carousel 1 "Flash Deals"*/}
<article className=" mt-0 mb-16  ">
  <p className="font-bold text-2xl  "> Flash Deals </p>
  <p className="text-[gray] font-light text-xs mb-5"> Up to 65% off</p>
  <div>
    <ProductCarousel
      basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
      testProduct={productData.slice(300,311)}
    />
  </div>
</article>

<hr />

{/* second Product Carousel "Continue Your shopping"*/}
<article className=" my-5 ">
  <p className="font-bold text-2xl mb-6 "> Continue your shopping </p>
  <div>
    <ProductCarousel
      basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
      testProduct={productData.slice(219, 230)}
    />
  </div>
</article>

<hr />

{/*1 product carousel 2 | large Ad */}
<article className=" my-5">
  <p className="font-bold text-2xl  "> Perfectly pinch-proof </p>
  <p className="text-[gray] font-light text-sm  ">
    {" "}
    Get green everything.
  </p>

  <div className=" lg:grid lg:grid-cols-2 lg:gap-x-5 md:inline ">
    <div className="mt-14">
      <ProductCarousel
        basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/3"
        testProduct={productData.slice(120, 131)}
      />
    </div >
    <div className="lg:ms-0 md:ms-12 ">
    <AdCard adData={apiAdData[7]} />

    </div>
  </div>
</article>

{/* ads section 2  */}
<section className="flex flex-col lg:flex-row  gap-x-6 lg:ms-0 md:ms-10 ">
<div className="basis-[42%] py-2 xl:inline lg:hidden lg:ms-0 md:ms-16">
    <AdCard adData={apiAdData[8]} />
  </div>

  <div className="xl:basis-1/3 py-2 h-full md:w-full lg:ms-0 md:ms-32">
    <AdCard adData={apiAdData[9]} />
    <div className="flex gap-x-6  py-4 lg:ms-0 md:ms-1">
      <AdCard adData={apiAdData[10]} />
      <AdCard adData={apiAdData[11]} />
    </div>
  </div>

  <div className="xl:basis-[24.5%] py-2 md:w-full lg:ms-0 md:ms-44">
    <AdCard adData={apiAdData[12]} />
  </div>
</section>

<hr />

{/* third Product Carosel "Get set..." */}
<article className=" mt-8 mb-16  ">
  <p className="font-bold text-2xl  ">Get set for the bunny </p>
  <p className="text-[gray] font-light text-xs mb-5">
    Find everything you need.
  </p>
  <div>
    <ProductCarousel
      basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
      testProduct={productData.slice(60, 72)}
    />
  </div>
</article>
<hr />

{/*2 product carousel | large Ad */}
<article className="my-2 ">
  <p className="font-bold text-2xl  ">Cheer on your team </p>
  <p className="text-[gray] font-light text-sm mb-1">
    TVs, supplies, snacks & more..
  </p>

  <div className=" lg:grid lg:grid-cols-2 lg:gap-x-5 md:inline">
    <div className="mt-14">
      <ProductCarousel
        basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/3"
        testProduct={productData.slice(2, 13)}
      />
    </div>
    <div className="lg:ms-0 md:ms-12">
    <AdCard adData={apiAdData[17]} />

    </div>
  </div>
</article>

{/* Category Carousel */}
<article className="ms-8  mt-4">
  <p className="font-bold lg:text-2xl md:text-xl mb-5 ">
    {" "}
    Get it all right here
  </p>
  <div className="lg:block md:hidden">
  <CategoryCarousel categoryData={categoryData}/>
  </div>
</article>

<AdBar />

{/* ads section 3  */}
<section className="flex flex-col lg:flex-row  gap-x-6  lg:ms-0 md:ms-10">
<div className="basis-[42%] py-2 xl:inline lg:hidden lg:ms-0 md:ms-16">
    <AdCard adData={apiAdData[18]} />
  </div>

  <div className="xl:basis-1/3 py-2 h-full md:w-full lg:ms-0 md:ms-32">
    <AdCard adData={apiAdData[19]} />
    <div className="flex gap-x-6  py-4 lg:ms-0 md:ms-1">
      <AdCard adData={apiAdData[20]} />
      <AdCard adData={apiAdData[21]} />
    </div>
  </div>

  <div className="xl:basis-[24.5%] py-2 md:w-full lg:ms-0 md:ms-56 ">
    <AdCard adData={apiAdData[22]} />
  </div>
</section>

{/* 4th Product Carosel "Refresh..." */}
<article className=" my-8">
  <p className="font-bold text-2xl mb-5 "> Refresh your yard </p>
  <div>
    <ProductCarousel
      basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
      testProduct={productData.slice(90, 101)}
    />
  </div>
</article>

<AdBar />
{/*3 product carousel | Video Ad */}
<article className="my-4">
  <p className="font-bold text-2xl  ">Get all you cheer </p>
  <p className="text-[gray] font-light text-sm">
    {" "}
    TVs, supplies, snacks & more..
  </p>

  <div className=" xl:grid xl:grid-cols-2 xl:gap-x-5 md:inline  ">
    <div className="mt-14">
      <ProductCarousel
        basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/3 "
        testProduct={productData.slice(200, 211)}
      />
    </div>
    <div>
    <AnimatedAdCard />
    </div>
  </div>
</article>

{/*  ads section 4 */}
<section className="flex flex-col lg:flex-row  gap-x-6 lg:ms-0 md:ms-10">
<div className="basis-[42%] py-2 xl:inline lg:hidden lg:ms-0 md:ms-32">
    <AdCard adData={apiAdData[23]} />
  </div>

  <div className="xl:basis-1/3 py-2 h-full md:w-full lg:ms-0 md:ms-44 ">
    <AdCard adData={apiAdData[24]} />
    <div className="flex gap-x-6  py-4">
      <AdCard adData={apiAdData[25]} />
      <AdCard adData={apiAdData[26]} />
    </div>
  </div>

  <div className="xl:basis-[24.5%] py-2 md:w-full lg:ms-0 md:ms-60">
    <AdCard adData={apiAdData[27]} />
  </div>
</section>

<hr />
{/* 5th Product Carosel "Dress..." */}
<article className=" mt-4">
  <p className="font-bold text-2xl mb-5 ">Dresses for less</p>
  <p className="text-[gray] font-light text-sm mb-5">
    {" "}
    Find fits for every occasion.
  </p>
  <div>
    <ProductCarousel
      basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
      testProduct={productData.slice(720, 731)}
    />
  </div>
</article>

{/*  Ads section 5 */}

<section className="flex flex-col lg:flex-row gap-x-6 ">
<div className="basis-[42%] py-2 xl:inline lg:hidden lg:ms-0 md:ms-32">
    <AdCard adData={apiAdData[28]} />
  </div>

  <div className="xl:basis-1/3 py-2 h-full md:w-full lg:ms-0 md:ms-44">
    <AdCard adData={apiAdData[29]} />
    <div className="flex gap-x-6  py-4">
      <AdCard adData={apiAdData[30]} />
      <AdCard adData={apiAdData[31]} />
    </div>
  </div>

  <div className="xl:basis-[24.5%] py-2 md:w-full lg:ms-0 md:ms-60">
    <AdCard adData={apiAdData[32]} />
  </div>
</section>

<hr />
{/* last Product Carosel "Dress..." */}

<article className=" mt-4">
  <p className="font-bold text-2xl mb-5 ">Explore mores</p>
  <p className="text-[gray] font-light text-sm mb-5">
    {" "}
    Support women-owned brands.
  </p>
  <div className="mb-6">
    <ProductCarousel
      basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
      testProduct={productData.slice(370, 381)}
    />
  </div>
</article>
</section>
</>
);
}