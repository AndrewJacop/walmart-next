// import Shopping from "./../../components/cart/ShippingOption";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { auth } from "@/lib/firebase/config";

// import { handleAddToCart, removeAllFromCart, removeFromCart } from "@/lib/func/cart";
// import { getCartItem, getProductsData, getUserByUid } from "@/lib/supabase/fetch-data";
// // import { getAdsDataId } from "@/lib/API-Functions/fetching";
// // import { adsData } from "../api/ads/data";
// // import { auth } from "@/lib/firebase/config";

// // async function res() {
// //   const currentUser = auth.currentUser
// //   console.log(currentUser?.uid);
// //   fetch(`http://localhost:3000/api/users/${currentUser?.uid}`, {
// //     cache: "no-cache",
// //   })
// //     .then((response) => response.json())
// //     .then((data) => {
// //       console.log("data from cart");
// //       console.log(data);
// //     });
// // }

// export async function Cart() {
//   // const [cartData, setCartData] = useState<CartItem[]>([]);
//   const products: Product[] =await getProductsData();
//   // let qty=0
//   // const router = useRouter();
//   // useEffect(() => {
//   //   setInterval(() => {
//   //     const data = localStorage.getItem("cart");
//   //     if (data) {
//   //       setCartData(JSON.parse(data));
//   //     }
//   //   }, 100);
//   // }, []);

//   const userId = auth.currentUser?.uid
//   console.log(userId)
//   const user=await getUserByUid(userId)
//   console.log(user)
//   const cartData=await getCartItem(`${userId}`)
//   console.log(cartData)


//   const date = new Date();

//   const handleCheckOut = () => {
//     if (userId) {
//       cartData.map((itm) => {
//         const order: Order = {
//           id: 1,
//           userId: userId,
//           pickUpOtions: 1,
//           status: "uncomfirmed",
//           createdAt: new Date(date.getTime()),
//           lastEditAt: new Date(date.getTime()),
//           arrivingAt: new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000), // Set arrivingAt to 5 days from now
//           productId: itm.productId,
//           quantity: itm.quantity,
//         };
//         fetch("http://localhost:3000/api/orders", {
//           method: "POST",
//           body: JSON.stringify(order),
//           cache: "no-store",
//         })
//           .then((_) => {
//             console.log("user added");
//             const res = fetch("http://localhost:3000/api/orders")
//               .then((response) => response.json())
//               .then((data) => {
//                 console.log("data from cart");
//                 console.log(data);
//               });
//           })

//           .then(() => {
//             console.log("daat");
//           });
//       });

//     } else {
//     }
//   };

//   return (
//     <>
//       {cartData.length < 1 ? (
//         <>
//           <div className="px-10 pt-10 text-xl mb-5 text-[#46474a]">
//             <span className="font-bold text-[black]">Cart </span>(0) Items
//           </div>
//           <div className="items-center flex justify-center pb-16">
//             <div>
//               <img
//                 className="t"
//                 src="https://i5.walmartimages.com/dfw/63fd9f59-e0d6/65ab57af-59d6-423a-9500-1fa5ab36d1c7/v1/empty-cart.svg?odnHeight=240&odnWidth=200&odnBg=ffffff"
//               />
//               <p className="font-bold text-lg text-center">
//                 Time to start shopping!
//               </p>
//               <p className="font-bold text-center pb-3">Your cart is empty</p>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           {/* //pickUpOtions */}
//           <div className="px-10 pt-10 text-xl mb-5">
//             <span className="font-bold">Cart </span>({cartData.length})
//           </div>
//           <div className="w-8/12 relative ml-10">
//             <Accordion type="single" collapsible>
//               <AccordionItem value="item-1">
//                 <img
//                   className="absolute mt-3"
//                   src="https://i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg"
//                   alt="image"
//                 />
//                 <AccordionTrigger className="text-xl font-bold ml-10 ">
//                   Pickup and delivery options
//                 </AccordionTrigger>
//                 <AccordionContent>
//                   <Shopping />
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//         </>
//       )}

//       {cartData.map((itm) => {
        

        
// const cartProducts = products.filter((prd) => prd.id === itm.productId);

//       return  cartProducts.map((prd) => (
//           <>
          
//         <div className="px-3 ml-10 float-end absolute top-[25%] right-16 fixed-top">
//         <div className="border rounded-lg px-4">
//           <div className="flex justify-center mt-5 ">
//             <button
//               onClick={handleCheckOut}
//               className="flex justify-center bg-mainColor text-white hover:bg-blue-600 px-28 py-3 text-sm font-bold rounded-full"
//             >
//               Continue to checkout
//             </button>
//           </div>
//           <div className="border my-5 border-gray-100"></div>
//           <div className="px-5 text-sm">
//             <div className="flex justify-between mb-8">
//               <p>
//                 <span className="font-bold">Subtotal</span> {(cartData.length)} Item
//               </p>
//               <span>$3.96</span>
//             </div>
//             <div className="flex justify-between">
//               <p className="font-bold">Taxes</p>
//               <span>Calculated at checkout</span>
//             </div>
//             <div className="border my-5 border-gray-100"></div>
//             <div className="flex justify-between mb-8">
//               <p className="font-bold">Estimated total</p>
//               <span className="font-bold">$3.96</span>
//             </div>
//           </div>
//         </div>
//       </div>
//             <div key={prd.id} className="flex p-10">
//               <div className="w-8/12 border rounded-lg">
//                 <div className="flex justify-between bg-blue-50 p-8 rounded-lg">
//                   <h1 className="text-xl font-bold">
//                     Pickup or delivery from store, as soon as Today
//                   </h1>
//                   <a
//                     href="#"
//                     className="underline text-sm hover:no-underline hover:text-blue-800"
//                   >
//                     Reserve a time
//                   </a>
//                 </div>

//                 <div className="border my-5 mx-7 border-gray-100">
//                   <div className="flex mx-7 mt-3">
//                     <img
//                       src={prd.images[0]}
//                       alt="prdImage"
//                       width={100}
//                       height={80}
//                     />

//                     <div>
//                       <div className="flex mt-3 ml-2">
//                         <a href="#" className=" flex justify-between mr-72">
//                           {prd.title}
//                         </a>
//                         <span className="font-bold absolute right-[42%] ">
//                           $
//                           {(
//                             Number(prd.originalPrice) *
//                             ((100 - Number(prd.discount)) / 100) *
//                             itm.quantity
//                           ).toFixed(2)}
//                         </span>
//                       </div>
//                       <p className="py-2 text-sm  px-2 text-[gray]">
//                         $
//                         {(
//                           Number(prd.originalPrice) *
//                           ((100 -Number(prd.discount)) / 100)
//                         ).toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex justify-end items-center mx-7 mb-3 text-sm">
//                     <p
//                       className="mr-7 underline hover:no-underline cursor-pointer hover:text-blue-500"
//                       onClick={() => {
//                         removeAllFromCart(prd);
//                       }}
//                     >
//                       Remove
//                     </p>
//                     <a
//                       href="#"
//                       className="mr-7 underline hover:no-underline hover:text-blue-500"
//                     >
//                       Save for later
//                     </a>
//                     <div className="flex border justify-center items-center border-gray-300 px-5 py-1 rounded-full">
//                       <span
//                         className="mr-8 cursor-pointer text-lg"
//                         onClick={() => {
//                           removeFromCart(prd);
//                         }}
//                       >
//                         -
//                       </span>
//                       <p className="font-bold">{itm.quantity}</p>
//                       <span
//                         className="ml-8 cursor-pointer text-lg"
//                         onClick={() => {
//                           handleAddToCart(prd);
//                         }}
//                       >
//                         +
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* fixed right sidebar */}
              
//             </div>
//           </>
//         ));
//       })}


//     </>
//   );
// }

// export default Cart;
