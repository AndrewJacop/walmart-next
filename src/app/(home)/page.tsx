import AdBar from "@/components/ads/AdBar";
import { AdCard } from "@/components/ads/AdCard";
import { VideoAdCard } from "@/components/ads/VideoAdCard";
import CartItem from "@/components/cart/CartItem";
import { CategoryCarousel } from "@/components/category/CategoryCarousel";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { getAdsData } from "@/lib/supabase/fetch-data";


const cartd:CartItem={id:90,price:90,productId:"",quantity:32}
const testAd: Ad[] = [
  {
    id: 10,
    title: "Makeup on the glow",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-3079/k2-_ac3b69cc-77c4-46ca-a022-c3c5d10e39a8.v1.jpg?odnHeight=512&odnWidth=770&odnBg=&odnDynImageQuality=70",
    href: "https://www.walmart.com/browse/home/beach-towels/4044_539095_1113072?athAsset=eyJhdGhjcGlkIjoiNWE4ZGI3YzctNzVlMC00NmM2LTkyYzMtNjVmYmY4Mjg3ZTQxIn0=&athena=true",
    query: "",
  },
  {
    id: 20,
    title: "Fresh style trends",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-1eb3/k2-_a1cefc04-77f9-4df5-beac-7b2b7e4c849e.v1.jpg?odnHeight=1156&odnWidth=770&odnBg=&odnDynImageQuality=70",
    href: "https://www.walmart.com/browse/home/beach-towels/4044_539095_1113072?athAsset=eyJhdGhjcGlkIjoiNWE4ZGI3YzctNzVlMC00NmM2LTkyYzMtNjVmYmY4Mjg3ZTQxIn0=&athena=true",
    query: "",
  },
  {
    id: 30,
    title: "Refresh your space",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-f7e1/k2-_a6879945-962a-46c7-a5ab-c0fc23bc84a0.v1.jpg?odnHeight=432&odnWidth=770&odnBg=&odnDynImageQuality=70",
    href: "https://www.walmart.com/browse/home/beach-towels/4044_539095_1113072?athAsset=eyJhdGhjcGlkIjoiNWE4ZGI3YzctNzVlMC00NmM2LTkyYzMtNjVmYmY4Mjg3ZTQxIn0=&athena=true",
    query: "",
  },
];
const testCat: Category[] = [
  {
    id: 1,
    title: "Grocery",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-6406/k2-_987b6e28-ac24-4c30-a150-afe57033daf2.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    subCategories: [],
    barLink: "",
  },
  {
    barLink: "",
    id: 2,
    title: "Fashion",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-48f6/k2-_7aed4b13-f076-4785-8b0c-2a8343c2b70c.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    subCategories: [],
  },
  {
    barLink: "",
    id: 3,
    title: "Electronics",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-9674/k2-_cd6b8be4-8bfb-47bc-9843-49e8ed571106.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    subCategories: [],
  },
  {
    barLink: "",
    id: 4,
    title: "Home",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-8370/k2-_15a0a4d2-1619-4914-94cd-774567d41404.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    subCategories: [],
  },
  {
    barLink: "",
    id: 5,
    title: "Pation & Gardin",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-16a3/k2-_f9b2f53c-a2c0-40bf-8e25-692c544b3baf.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    subCategories: [],
  },
  {
    id: 6,
    title: "Home Improvement",
    barLink: "",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-a077/k2-_02b361d9-ab7b-45e9-95fb-3060dd6be190.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    subCategories: [],
  },
  {
    id: 15,
    title: "Baby",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-648f/k2-_c76e7139-cecb-4d48-893d-686d9bbbbfbe.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    subCategories: [],
    barLink: "",
  },
  {
    id: 14,
    title: "Toys",
    barLink: "",
    imgLink:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-6897/k2-_9d771225-ddc0-4ae4-8302-1921a8ace961.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
    subCategories: [],
  },
];
const testProd: Product[] = [
  {
    id: "dbd86be64e58faa2c3a05fb916818a7f",
    title: 'Anagram International A11957001 Sesame Street 1st Birthday Foil Balloon, 18", Multicolor',
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/31D-X5aC1fL.jpg",
      "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
    ],
    brand: 70,
    colors: [],
    seller: 70,
    isBestSeller: false,
    quantity: 7,
    subCatergory: [0, 1, 2],
    discount: 0,
    originalPrice: "6.99",
    returnPolicy: 2,
    isGiftable: false,
    modelNumber: "",
    aboutProduct: "",
    productSpecification: "",
    technicalDetails: "",
    shippingWeight: "",
    productDimensions: "",
    warrenty: "",
    reviews: [],
    variants: []
  },
  {
    id: "b48da67f0a050112a8874a42ed6fb341",
    title: "Eat More Pie Dessert Plates 7",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/51nAxFmWv5L.jpg",
      "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
    ],
    brand: 11,
    colors: [],
    seller: 48,
    isBestSeller: false,
    quantity: 4,
    subCatergory: [0, 1],
    discount: 0,
    originalPrice: "8.69",
    returnPolicy: 0,
    isGiftable: false,
    modelNumber: "",
    aboutProduct: "",
    productSpecification: "",
    technicalDetails: "",
    shippingWeight: "",
    productDimensions: "",
    warrenty: "",
    reviews: [],
    variants: []
  },
  {
    id: "63f33269bd408e3cfa627e90785a6560",
    title: "Beistle CN038 Tropical Breeze Confetti",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61VF9CnU--L.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61keSYOJc3L.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41U7cljeWfL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41Ju74o4BIL.jpg",
      "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
    ],
    brand: 3,
    colors: [],
    seller: 59,
    isBestSeller: false,
    quantity: 2,
    subCatergory: [3],
    discount: 0,
    originalPrice: "4.99",
    returnPolicy: 2,
    isGiftable: false,
    modelNumber: "",
    aboutProduct: "",
    productSpecification: "",
    technicalDetails: "",
    shippingWeight: "",
    productDimensions: "",
    warrenty: "",
    reviews: [],
    variants: []
  },
  {
    id: "9e118f3be1a2f0dd14e50e0507827302",
    title: "Beistle CN145 Princess Confetti",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61LwsUMnmAL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41P%2BwpGuDdL.jpg",
      "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
    ],
    brand: 28,
    colors: [],
    seller: 4,
    isBestSeller: false,
    quantity: 8,
    subCatergory: [4, 5, 6, 7],
    discount: 0,
    originalPrice: "5.61",
    returnPolicy: 1,
    isGiftable: false,
    modelNumber: "",
    aboutProduct: "",
    productSpecification: "",
    technicalDetails: "",
    shippingWeight: "",
    productDimensions: "",
    warrenty: "",
    reviews: [],
    variants: []
  },
];

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function HomePage() {
  const mytestAdsData = await getAdsData();

  return (
    <>
      <section>
        <div className="flex flex-col">
          <div className="w-1/4 mx-6 mt-3 mb-8  ">
            {mytestAdsData.map((data) => (
              <div key={data.id} className="mb-4">
                <AdCard adData={data} />
              </div>
            ))}
          </div>

          <div>
            <AdBar />
          </div>

          <div className=" mt-0 mb-16  ">
            <p className="font-bold text-2xl  "> Flash Deals </p>
            <p className="text-[gray] font-light text-xs mb-5">
              {" "}
              Up to 65% off
            </p>
            <div>
              <ProductCarousel
                basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                testProduct={testProd}
              />
            </div>
          </div>

          <hr />

          <div className=" my-5">
            <p className="font-bold text-2xl  "> Perfectly pinch-proof </p>
            <p className="text-[gray] font-light text-sm ">
              {" "}
              Get green everything.
            </p>

            <div className="grid grid-cols-2 gap-x-5">
              <div className="mt-14">
                <ProductCarousel
                  basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/3"
                  testProduct={testProd}
                />
              </div>
              <div>
                <AdCard adData={testAd[1]} />
              </div>
            </div>
          </div>

          <div className="ms-8  mt-4">
            <p className="font-bold lg:text-2xl md:text-xl mb-5 ">
              {" "}
              Get it all right here
            </p>
            <CategoryCarousel testCat={testCat} />
          </div>
          <AdBar />

          <div className=" my-8">
            <p className="font-bold text-2xl mb-5 "> Refresh your yard </p>
            <div>
              <ProductCarousel
                basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                testProduct={testProd}
              />
            </div>
          </div>

          <AdBar />

          <div className="my-4">
            <p className="font-bold text-2xl  ">Get all you cheer </p>
            <p className="text-[gray] font-light text-sm">
              {" "}
              TVs, supplies, snacks & more..
            </p>

            <div className="grid grid-cols-2 gap-x-5  ">
              <div className="mt-14">
                <ProductCarousel
                  basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/3"
                  testProduct={testProd}
                />
              </div>
              <div>
                <VideoAdCard />
              </div>
            </div>
          </div>
        </div>

<CartItem CartItemData={cartd}/>
      </section>
    </>
  );
}
