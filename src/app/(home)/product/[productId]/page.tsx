// Product.jsx

import { LuAlertCircle } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { IoStarHalf } from "react-icons/io5";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Checkbox } from "@/components/ui/checkbox";

import Link from "next/link";
import Shopping from "@/components/cart/ShippingOption";
import { ProductCarouselLarge } from "@/components/product/ProductCarouselLarge";
import RelatedPage from "@/components/footer/RelatedPages";
import { calcRating, extractSecefications, getReviews } from "@/lib/utils";
import {
  addNewProductReview,
  addNewReview,
  getProductsData,
  getReviewsData,
  getUserByUid,
} from "@/lib/supabase/fetch-data";
import { AdBar } from "@/components/ads/AdBar";
import ProductCard from "@/components/product/ProductCard";
import  { ReviewBtn } from "@/components/product/reviews";
import { getCurrentUser } from "@/lib/firebase/admin-config";

const crumb = [
  { id: "1", title: "Grocery", link: "#" },
  { id: "2", title: "Fresh produce", link: "#" },
  { id: "3", title: "Organic Produce", link: "#" },
];

export default async function Product({params,}: {params: { productId: string };}) {
  // const [vot, setVote] = useState(0);
  // const [reviewTitle, setReviewTitle] = useState("");
  const products = await getProductsData();
  const indx = products.findIndex((prd) => prd.id === params.productId);
  const specs = extractSecefications(products[indx]);
  const reviewData = await getReviews(products[indx]);

  const allReviews = await getReviewsData();
  const ratingAverage = calcRating(reviewData);
  const reminStars = 5 - Math.floor(5 / ratingAverage) * ratingAverage;

  async function getData() {
    const firebaseUser = await getCurrentUser();
    if (firebaseUser) {
      const user = await getUserByUid(firebaseUser.uid);
      const userName = `${user?.firstName} ${user?.lastName.charAt(0)}.`;
      return userName;
    }
  }
  const user = await getData();

 

  return (
    <>
      <section>
        <Breadcrumb>
          <BreadcrumbList>
            {crumb.map((crumb, idx) => (
              <>
                <BreadcrumbItem key={idx}>
                  <BreadcrumbLink className="py-6" href="/components">
                    {crumb.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ))}

            <BreadcrumbItem>
              <BreadcrumbPage>
                {products[indx].title.slice(0, 16)}...
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <hr />
        <main className="h-[75px]"></main>

        <section className="flex ">
          <div className="w-[70%]">
            <div className=" flex">
              <div className="w-[30%]">
                <ul>
                  {products[indx].images
                    .slice(0, products[indx].images.length - 1)
                    .map((image, indx) => (
                      <li
                        key={indx}
                        // onMouseOver={() => handleImageClick(image)}
                      >
                        <img
                          src={image}
                          alt={`Image`}
                          width={100}
                          height={100}
                          className="cursor-pointer my-2	 border rounded-[10px] hover:border-[2px] hover:border-[blue] active:border-[blue] focus:border-[blue]"
                        />
                      </li>
                    ))}
                </ul>
              </div>
              <div className="w-[70%]">
                {/* Carousel */}

                <Carousel className="w-[500px]">
                  <CarouselContent>
                    {products[indx].images.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <img src={img} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            <div className="my-6">
              <h1 className="font-bold text-2xl">More items to consider</h1>
              <p className="text-xs pb-3 pt-1  text-muted-foreground">
                Based on what customers bought.{" "}
              </p>{" "}
              <ProductCarouselLarge
                basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/5"
                testProduct={products.slice(60, 71)}
              />
            </div>

            <div className="my-28">
              <h1 className="font-bold text-2xl">
                Popular items in this category
              </h1>
              <p className="text-xs pb-3 pt-1  text-muted-foreground">
                Best selling items that customers love{" "}
              </p>{" "}
              <ProductCarouselLarge
                basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/4"
                testProduct={products.slice(10, 22)}
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl py-3">About This Item</h1>
              <Accordion type="single" collapsible className="mx-2">
                <hr className="border-[1px]"></hr>

                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:no-underline">
                    Product details
                  </AccordionTrigger>
                  <AccordionContent className="ps-5">
                    <p className="font-bold">
                      {products[indx]["aboutProduct"].split("|").slice(0, 5)}
                    </p>
                    <p className="mt-10 mb-2 font-bold ">More Details:</p>
                    <p>
                      {products[indx]["aboutProduct"]
                        .split("|")
                        .slice(
                          5,
                          products[indx]["aboutProduct"].split("|").length
                        )}
                    </p>

                    <span className="flex my-7 items-center">
                      <LuAlertCircle />{" "}
                      <p className="font-bold px-2">
                        We aim to show you accurate product information.
                      </p>{" "}
                      <p>
                        {" "}
                        Manufacturers, suppliers and others provide what you see
                        here, and we have not verified it.{" "}
                      </p>{" "}
                      <a href="#" className="underline  ps-3">
                        See our disclaimer
                      </a>{" "}
                    </span>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="hover:no-underline">
                    Specifications
                  </AccordionTrigger>
                  <AccordionContent className="ps-5">
                    {specs.slice(0, 2).map((spec, idx) => (
                      <div key={idx}>
                        <p className="font-bold">
                          {spec.title}
                          <p className="font-normal py-2 text-[#595959]">
                            {" "}
                            {spec.value}
                          </p>
                        </p>
                      </div>
                    ))}
                    <div>
                      <Dialog>
                        <DialogTrigger className="underline text-[gray] py-4 hover:text-mainColor hover:no-underline ">
                          More details
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="pb-9">
                              More Details
                            </DialogTitle>
                            {specs.map((spec, idx) => (
                              <DialogDescription
                                key={idx}
                                className="font-[black]"
                              >
                                <p className="font-bold py-2">
                                  {spec.title}
                                  <p className="font-normal text-[gray]">
                                    {spec.value}
                                  </p>
                                </p>
                              </DialogDescription>
                            ))}
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3 ">
                  <AccordionTrigger className="hover:no-underline">
                    Warrenty
                  </AccordionTrigger>
                  <AccordionContent className="ps-5">
                    <p className="font-bold py-3 ">warrenty Information </p>
                    <p className="font-normal text-[gray]">
                      {products[indx]["warrenty"]}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <span className="flex  items-center py-2 mb-6 text-[#2e2f32]">
                <TbMessageCircle2 />{" "}
                <a
                  href="#"
                  className="underline px-2 py-2 hover:text-mainColor font-light hover:no-underline"
                >
                  Report incorrect product information
                </a>
              </span>
              <AdBar />
              {/* 
              <div className="my-10 ">
                <h1 className="text-3xl font-bold">Rate this product </h1>
                <p className="text-gray-600">Tell other what you think</p>

                <div className="w-full   flex p-5 cursor-pointer">
                  <span onClick={() => setVote(1)}>
                    <FaStar className="hover:text-[gold] text-3xl text-[gray] me-5 " />
                  </span>
                  <span onClick={() => setVote(2)}>
                    {" "}
                    <FaStar className="hover:text-[gold] text-3xl text-[gray] mx-5" />
                  </span>
                  <span onClick={() => setVote(3)}>
                    {" "}
                    <FaStar className="hover:text-[gold] text-3xl text-[gray] mx-5" />
                  </span>
                  <span onClick={() => setVote(4)}>
                    {" "}
                    <FaStar className="hover:text-[gold] text-3xl text-[gray] mx-5" />
                  </span>
                  <span onClick={() => setVote(5)}>
                    {" "}
                    <FaStar className="hover:text-[gold] text-3xl text-[gray] mx-5" />
                  </span>
                </div>
                <input
                  type="text"
                  className="w-full p-2 border h-20   "
                  placeholder="type your review........"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                />
                <button
                  className="bg-[#0071dc] h-10 w-40 text-white rounded-[18px] text-xl mt-4 "
                  onClick={() => adrev()}
                >
                  submit review
                </button>
              </div> */}
              <ReviewBtn productData={products[indx]}/>
              {/* <Reviews productData={products[indx]} currentUser={user} /> */}
              <h1 className="text-3xl my-5 font-bold">
                Customer ratings & reviews
              </h1>

              <div className="flex grid grid-cols-2 gap-x-6">
                {reviewData.map((review, index) => (
                  <>
                    {review.subtitle != "" && (
                      <div
                        key={index}
                        className="border my-2 shadow-md rounded-[10px] "
                      >
                        {review.vote < 5 ? (
                          <span className="flex relative px-5 py-3">
                            <p className="text-lg pe-5 py-3">
                              {"★".repeat(review.vote)}
                              {"☆".repeat(5 - review.vote)}
                            </p>
                            <p className="text-sm absolute right-0 text-[#666666] px-5 text-sm">
                              {review.date}
                            </p>
                          </span>
                        ) : (
                          <span className="flex relative px-5 py-3">
                            <p className="text-lg pe-5 py-3">
                              {" "}
                              {"★".repeat(review.vote)}
                            </p>{" "}
                            <p className="text-sm absolute right-0 text-[#666666] px-5 text-sm">
                              {review.date}
                            </p>{" "}
                          </span>
                        )}
                        <div key={index} className="p-4 border-b">
                          <p className="text-lg font-semibold mb-2">
                            {review.title}
                          </p>
                          <div className="items-center mt-2">
                            <p className="text-sm">{review.subtitle}</p>
                            <p className="text-sm pt-3 font-light text-[#666666]">
                              {review.userName}
                            </p>

                            <p className="pt-3 cursor-pointer flex text-[#666666] space-x-4 items-center">
                              <AiFillLike /> 0 <AiFillDislike /> 0
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
              <div className="flex justify-center my-4">
                <button className="border-[1px] border-[black] text-sm font-bold rounded-[21px] px-4 py-2 hover:text-[#0071dc] hover:border-[#0071dc]">
                  View All Reviews
                </button>
              </div>
            </div>
          </div>

          <div className="w-[30%]   border-left-[1px] ">
            <div className="border rounded-[8px]   p-5 ">
              {products[indx].isBestSeller && (
                <div className="my-2">
                  <span className="bg-[#E6F1FC] font-bold text-sm px-2 py-1 rounded text-[#2C547A] me-2">
                    Best seller
                  </span>
                  <span className="text-white font-bold text-sm  px-2 py-1 rounded bg-[#002d58]">
                    Popular Pick
                  </span>
                </div>
              )}
              <span>
                <Link
                  href={"#"}
                  className=" underline  hover:no-underline  hover:text-[#0073e6] text-sm"
                >
                  {" "}
                  {/* {products[indx].brand.title} */}
                </Link>
              </span>
              <span>
                <h1 className="text-[#2e2f32] font-bold pt-3 text-xl">
                  {products[indx].title}
                </h1>
                <div className="flex items-center pb-3 pt-1">
                  {reminStars > 0 ? (
                    <p className="text-xl flex  items-center">
                      {"★".repeat(ratingAverage)}{" "}
                      <IoStarHalf className="text-[15px]" />
                      {"☆".repeat(5 - ratingAverage)}
                    </p>
                  ) : (
                    <span className="flex relative  ">
                      <p className="text-lg px-5 py-3">
                        {"★".repeat(ratingAverage)}
                        {"☆".repeat(5 - ratingAverage)}
                      </p>
                    </span>
                  )}
                  <span className="flex ps-1 text-xs  ">
                    <p> &#40;{ratingAverage.toFixed(1)}&#41;</p>{" "}
                    <a href="#" className="px-1 underline hover:font-normal ">
                      {products[indx]["reviews"].length} reviews
                    </a>
                  </span>
                </div>
              </span>

              {Number(products[indx].discount) > 0 ? (
                <>
                  <span className="text-2xl font-bold py-3 text-[green] me-1">
                    Now $
                    {(
                      Number(products[indx].originalPrice) -
                      Number(products[indx].discount)
                    ).toFixed(2)}{" "}
                  </span>
                  <span className="font-base text-lg text-[#46474a]">
                    <del> ${products[indx].originalPrice}</del>
                  </span>
                  <p className="text-[#2a8703] font-semibold pb-4  text-sm">
                    <span className="bg-[#eaf3e6] rounded me-1 p-[3px] ">
                      You save{" "}
                    </span>
                    ${products[indx].discount}
                  </p>
                </>
              ) : (
                <>
                  <span className="font-bold text-3xl py-3 text-[#2e2f32] ">
                    ${products[indx].originalPrice}
                  </span>
                  <span className="text-xs  inline-block p-1 text-[gray]   ">
                    each72.0 ¢/lb
                  </span>
                </>
              )}

              <span>
                <p className="py-1">Final cost by weight</p>
                <p className="flex text-sm py-1">
                  Price when purchased online
                  <LuAlertCircle className="  ms-1 text-xl" />
                </p>
              </span>
              <span className="items-center flex align-center">
                {" "}
                <button className="my-3 border-[1px] border-[black] me-3 btext-[white] font-semibold p-2 rounded-[20px] px-20 hover:border-[2px]">
                  Buy Now
                </button>
                <button className="my-3 bg-mainColor text-[white] font-bold p-2 rounded-[20px] px-16 hover:bg-[#004f9a] ">
                  Add to cart
                </button>
              </span>

              <hr></hr>
              <div className="py-2 ">
                <span>
                  <h1 className="text-[#2e2f32] font-bold py-2 text-lg">
                    How do you want your item?
                  </h1>
                </span>
                <div className="items-top flex space-x-2 py-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className=" leading-none cursor-pointer text-sm flex peer-disabled:opacity-70 font-normal focus:font-bold active:font-bold "
                    >
                      I want shipping & delivery savings with Walmart plus
                      <img
                        src="https://i5.walmartimages.com/dfw/63fd9f59-3e1b/a3d2466d-fa02-4f2d-a401-aca52a4aac17/v1/walmartPlus-logo-blue.svg"
                        className="flex ms-1 items-center align-center"
                        width={60}
                        height={50}
                      />
                    </label>
                    <p className="text-sm p-0 text-muted-foreground">
                      You get 30 days free! Choose a plan at checkout.{" "}
                    </p>
                  </div>
                </div>
                <div className="py-2">
                  <Shopping />
                </div>

                <div className="my-4">
                  <span className="flex text-sm my-3">
                    <p>Pickup from</p>{" "}
                    <a className="font-bold underline text-sm hover:no-underline  cursor-pointer px-3 ">
                      Sacramento Supercenter
                    </a>
                    <p className="flex text-sm font-light">
                      | <LuMapPin className="mt-1 ms-2 me-3" /> Aisle A1
                    </p>
                  </span>
                  <span className="flex text-sm">
                    <p> Delevery To </p>{" "}
                    <a className="font-bold underline hover:no-underline text-sm cursor-pointer px-3 ">
                      Sacramento, 95829
                    </a>
                  </span>
                </div>
                <hr></hr>
                <div className="flex my-4">
                  <img src="https://i5.walmartimages.com/dfw/63fd9f59-2845/2044d79e-92d5-4c08-90a2-0480444a877f/v1/EBT-Logo.svg" />
                  <p className="text-sm text-muted-foreground px-2 ">
                    EBT eligible
                  </p>{" "}
                </div>
                <hr></hr>
                <div className="flex grid grid-cols-2 gap-x-4 my-4 align-center items-center ">
                  <span className="flex items-center justify-center  cursor-pointer">
                    <FaRegHeart className="me-4" />{" "}
                    <p className="underline hover:no-underline">Add to list</p>{" "}
                  </span>
                  <span className="flex items-center justify-center  cursor-pointer">
                    <IoGiftOutline className="me-4" />
                    <p className="underline hover:no-underline">
                      Add to registery
                    </p>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="border rounded-[12px] my-4 p-4 sticky top-[20%] shadow-lg">
              <ProductCard
                productData={products[2]}
                style="flex h-[200px] w-auto gap-x-4 align-center items-center "
              />
            </div>
          </div>
        </section>
        <hr />

        <section className="py-6 mt-6">
          <AdBar />
        </section>

        <section className="my-8">
          <h1 className="font-bold text-2xl py-7">More items to explore</h1>

          <ProductCarouselLarge
            basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
            testProduct={products.slice(740, 750)}
          />
        </section>

        <section className="my-16">
          <h1 className="font-bold text-2xl ">Recently viewed items</h1>
          <p className="text-xs pb-3 pt-1  text-muted-foreground">
            Based on your most recent browse history{" "}
          </p>

          <ProductCarouselLarge
            basisClass="sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
            testProduct={products.slice(4, 16)}
          />
        </section>
        <RelatedPage />
      </section>
    </>
  );
}
