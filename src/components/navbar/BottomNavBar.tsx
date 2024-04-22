// // TODO: bottom nav bar

// "use client";
// import Image from "next/image";
// import Link from "next/link";

// import React, { useState } from "react";
// import { HiOutlineViewGrid } from "react-icons/hi";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoGridOutline } from "react-icons/io5";
// import { Key } from "lucide-react";
// import { signMeOut } from "@/lib/firebase/auth";
// import { auth } from "@/lib/firebase/config";
// // import { getUserById } from "@/lib/API-Functions/fetching";

// export default function BottmNavBar() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showDropdown2, setShowDropdown2] = useState(false);
//   const [showSideList, setShowSideList] = useState(false);
//   const [showSideList2, setShowSideList2] = useState(false);
//   const [showSideList3, setShowSideList3] = useState(false);
//   const [showSideList4, setShowSideList4] = useState(false);
//   const [showSideList5, setShowSideList5] = useState(false);
//   const [showSideList6, setShowSideList6] = useState(false);
//   const [showSideList7, setShowSideList7] = useState(false);
//   const [showSideList8, setShowSideList8] = useState(false);
//   const [showSideList9, setShowSideList9] = useState(false);
//   const [showSideList10, setShowSideList10] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//     if (showDropdown2 == true) {
//       setShowDropdown2(!setShowDropdown2);
//     }
//   };

//   const toggleDropdown2 = () => {
//     setShowDropdown2(!showDropdown2);
//     if (showDropdown == true) {
//       setShowDropdown(!setShowDropdown);
//     }
//   };

//   const toggleSideList = () => {
//     setShowSideList(!showSideList);
//     if (showSideList2 == true) {
//       setShowSideList2(!showSideList2);
//     } else if (showSideList3 == true) {
//       setShowSideList3(!showSideList3);
//     } else if (showSideList4 == true) {
//       setShowSideList4(!showSideList4);
//     } else if (showSideList5 == true) {
//       setShowSideList5(!showSideList5);
//     } else if (showSideList6 == true) {
//       setShowSideList6(!showSideList6);
//     } else if (showSideList7 == true) {
//       setShowSideList7(!showSideList7);
//     } else if (showSideList8 == true) {
//       setShowSideList8(!showSideList8);
//     } else if (showSideList9 == true) {
//       setShowSideList9(!showSideList9);
//     }
//   };
//   const toggleSideList2 = () => {
//     setShowSideList2(!showSideList2);
//     if (showSideList == true) {
//       setShowSideList(!showSideList);
//     } else if (showSideList3 == true) {
//       setShowSideList3(!showSideList3);
//     } else if (showSideList4 == true) {
//       setShowSideList4(!showSideList4);
//     } else if (showSideList5 == true) {
//       setShowSideList5(!showSideList5);
//     } else if (showSideList6 == true) {
//       setShowSideList6(!showSideList6);
//     } else if (showSideList7 == true) {
//       setShowSideList7(!showSideList7);
//     } else if (showSideList8 == true) {
//       setShowSideList8(!showSideList8);
//     } else if (showSideList9 == true) {
//       setShowSideList9(!showSideList9);
//     }
//   };
//   const toggleSideList3 = () => {
//     setShowSideList3(!showSideList3);
//     if (showSideList2 == true) {
//       setShowSideList2(!showSideList2);
//     } else if (showSideList3 == true) {
//       setShowSideList(!showSideList);
//     } else if (showSideList == true) {
//       setShowSideList4(!showSideList4);
//     } else if (showSideList5 == true) {
//       setShowSideList5(!showSideList5);
//     } else if (showSideList6 == true) {
//       setShowSideList6(!showSideList6);
//     } else if (showSideList7 == true) {
//       setShowSideList7(!showSideList7);
//     } else if (showSideList8 == true) {
//       setShowSideList8(!showSideList8);
//     } else if (showSideList9 == true) {
//       setShowSideList9(!showSideList9);
//     }
//   };
//   const toggleSideList4 = () => {
//     setShowSideList4(!showSideList4);
//     if (showSideList2 == true) {
//       setShowSideList2(!showSideList2);
//     } else if (showSideList3 == true) {
//       setShowSideList3(!showSideList3);
//     } else if (showSideList == true) {
//       setShowSideList(!showSideList);
//     } else if (showSideList5 == true) {
//       setShowSideList5(!showSideList5);
//     } else if (showSideList6 == true) {
//       setShowSideList6(!showSideList6);
//     } else if (showSideList7 == true) {
//       setShowSideList7(!showSideList7);
//     } else if (showSideList8 == true) {
//       setShowSideList8(!showSideList8);
//     } else if (showSideList9 == true) {
//       setShowSideList9(!showSideList9);
//     }
//   };
//   const toggleSideList5 = () => {
//     setShowSideList5(!showSideList5);
//     if (showSideList2 == true) {
//       setShowSideList2(!showSideList2);
//     } else if (showSideList3 == true) {
//       setShowSideList3(!showSideList3);
//     } else if (showSideList4 == true) {
//       setShowSideList4(!showSideList4);
//     } else if (showSideList == true) {
//       setShowSideList(!showSideList);
//     } else if (showSideList6 == true) {
//       setShowSideList6(!showSideList6);
//     } else if (showSideList7 == true) {
//       setShowSideList7(!showSideList7);
//     } else if (showSideList8 == true) {
//       setShowSideList8(!showSideList8);
//     } else if (showSideList9 == true) {
//       setShowSideList9(!showSideList9);
//     }
//   };
//   const toggleSideList6 = () => {
//     setShowSideList6(!showSideList6);
//     if (showSideList2 == true) {
//       setShowSideList2(!showSideList2);
//     } else if (showSideList3 == true) {
//       setShowSideList3(!showSideList3);
//     } else if (showSideList4 == true) {
//       setShowSideList4(!showSideList4);
//     } else if (showSideList5 == true) {
//       setShowSideList5(!showSideList5);
//     } else if (showSideList == true) {
//       setShowSideList(!showSideList);
//     } else if (showSideList7 == true) {
//       setShowSideList7(!showSideList7);
//     } else if (showSideList8 == true) {
//       setShowSideList8(!showSideList8);
//     } else if (showSideList9 == true) {
//       setShowSideList9(!showSideList9);
//     }
//   };
//   const toggleSideList7 = () => {
//     setShowSideList7(!showSideList7);
//     if (showSideList2 == true) {
//       setShowSideList2(!showSideList2);
//     } else if (showSideList3 == true) {
//       setShowSideList3(!showSideList3);
//     } else if (showSideList4 == true) {
//       setShowSideList4(!showSideList4);
//     } else if (showSideList5 == true) {
//       setShowSideList5(!showSideList5);
//     } else if (showSideList6 == true) {
//       setShowSideList6(!showSideList6);
//     } else if (showSideList == true) {
//       setShowSideList(!showSideList);
//     } else if (showSideList8 == true) {
//       setShowSideList8(!showSideList8);
//     } else if (showSideList9 == true) {
//       setShowSideList9(!showSideList9);
//     }
//   };
//   const toggleSideList8 = () => {
//     setShowSideList8(!showSideList8);
//     if (showSideList2 == true) {
//       setShowSideList2(!showSideList2);
//     } else if (showSideList3 == true) {
//       setShowSideList3(!showSideList3);
//     } else if (showSideList4 == true) {
//       setShowSideList4(!showSideList4);
//     } else if (showSideList5 == true) {
//       setShowSideList5(!showSideList5);
//     } else if (showSideList6 == true) {
//       setShowSideList6(!showSideList6);
//     } else if (showSideList7 == true) {
//       setShowSideList7(!showSideList7);
//     } else if (showSideList == true) {
//       setShowSideList(!showSideList);
//     } else if (showSideList9 == true) {
//       setShowSideList9(!showSideList9);
//     }
//   };
//   const toggleSideList9 = () => {
//     setShowSideList9(!showSideList9);
//     if (showSideList2 == true) {
//       setShowSideList2(!showSideList2);
//     } else if (showSideList3 == true) {
//       setShowSideList3(!showSideList3);
//     } else if (showSideList4 == true) {
//       setShowSideList4(!showSideList4);
//     } else if (showSideList5 == true) {
//       setShowSideList5(!showSideList5);
//     } else if (showSideList6 == true) {
//       setShowSideList6(!showSideList6);
//     } else if (showSideList7 == true) {
//       setShowSideList7(!showSideList7);
//     } else if (showSideList8 == true) {
//       setShowSideList8(!showSideList8);
//     } else if (showSideList == true) {
//       setShowSideList(!showSideList);
//     }
//   };

//   const toggleSideList10 = () => {
//     setShowSideList10(!showSideList10);
//     if (showSideList2 == true) {
//       setShowSideList2(!showSideList2);
//     } else if (showSideList3 == true) {
//       setShowSideList3(!showSideList3);
//     } else if (showSideList4 == true) {
//       setShowSideList4(!showSideList4);
//     } else if (showSideList5 == true) {
//       setShowSideList5(!showSideList5);
//     } else if (showSideList6 == true) {
//       setShowSideList6(!showSideList6);
//     } else if (showSideList7 == true) {
//       setShowSideList7(!showSideList7);
//     } else if (showSideList8 == true) {
//       setShowSideList8(!showSideList8);
//     } else if (showSideList == true) {
//       setShowSideList(!showSideList);
//     }
//   };

//   const links = [
//     { href: "#", title: "Deals" },
//     { href: "/category/1", title: "Grocery & Essentials" },
//     { href: "#", title: "Easter" },
//     { href: "#", title: "Women History Month" },
//     { href: "#", title: "Fashion" },
//     { href: "#", title: "Home" },
//     { href: "#", title: "Electronics" },
//     { href: "#", title: "Patio & Garden" },
//     { href: "#", title: "Auto" },
//   ];
//   const depLinks = [
//     { href: "#", sideList: toggleSideList, title: "Deals" },
//     { href: "#", sideList: toggleSideList2, title: "Grocery" },
//     { href: "#", sideList: toggleSideList3, title: "Easter" },
//     { href: "#", sideList: toggleSideList4, title: "Spring Shop" },
//     { href: "#", sideList: toggleSideList5, title: "Home, Garden & Tools" },
//     {
//       href: "",
//       sideList: toggleSideList6,
//       title: "Clothing, Shoes& Accessories",
//     },
//     { href: "", sideList: toggleSideList7, title: "Electronics" },
//     { href: "", sideList: toggleSideList8, title: " Baby" },
//     { href: "", sideList: toggleSideList9, title: "Kids" },
//   ];
//   const dealsLinks = [
//     { href: "#", title: "Deals" },
//     { href: "#", title: "Shop All Deals" },
//     { href: "#", title: "Electronics" },
//     { href: "#", title: "Toys" },
//     { href: "#", title: "Home" },
//     { href: "#", title: "Clothing & Accessories" },
//     { href: "#", title: " Seasonal Décor" },
//     { href: "#", title: "  Video Games" },
//     { href: "#", title: "Kitchen & Dining" },
//     { href: "#", title: "Food" },
//     { href: "#", title: "Patio & Garden" },
//     { href: "#", title: "Baby" },
//     { href: "#", title: "Sports & Outdoors" },
//     { href: "#", title: " Auto" },
//     { href: "#", title: "Beauty" },
//     { href: "#", title: " Home Improvement" },
//     { href: "#", title: "Books, Movies & Music" },
//     { href: "#", title: "Wellness & Personal Care" },
//     { href: "#", title: "Pets" },
//   ];

//   const handleSignOut = async () => {
//     try {
//       const signedOut = await signMeOut();
//       if (signedOut) {
//         console.log("doneeeeeeeee");
//       } else {
//         // Handle sign-in failure
//         console.log("errror");
//       }
//     } catch (error) {
//       // Handle sign-in error
//       console.error("Error signing in:", error);
//     }
//   };

//   return (
//     <div className="h-[48px]  bg-[#F2F8FD] ps-[1.5rem] pe-[1.5rem] items-center flex  ">
//       <div className="relative ">
//         <button
//           onClick={toggleDropdown}
//           className="inline-flex text-base	 items-center justify-center px-3 py-1 font-bold   text-[#002d58] bg-[#F2F8FF]  rounded-2xl  hover:border hover:border-[#002d58] focus:border focus:border-[#002d58] ">
//           <IoGridOutline className="-mr-1 w-4 text-[20px] ml-1 text-[#002d58] me-1 " />{" "}
//           Departments
//           <IoIosArrowDown className="ms-2" />
//         </button>

//         {showDropdown && (
//           <div className="absolute p-5 m-h-[530px]   overflow:auto w-[246px] max-h-96 -right-20 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-48 overflow-y-auto">
//             <div className="py-1 ">
//               <h1 className="font-semibold">All Departments</h1>
//               {depLinks.map((lin, index) => (
//                 <Link
//                   key={index}
//                   href={lin.href}
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]"
//                   onMouseOver={lin.sideList}>
//                   {lin.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}

//         {showSideList && (
//           <div
//             onMouseLeave={toggleSideList}
//             className="absolute w-[550px] top-[40px] left-[100%] flex left-[260px] max-h-96  shadow-lg">
//             <div className="flex grid grid-cols-2 gap-x-2 w-2/3 bg-[#e6f1fc] p-2	overflow-y-auto">
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Deals</h1>

//                 {dealsLinks.map((link, index) => (
//                   <li key={index} className="my-4 text-sm">
//                     <Link
//                       className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                       href={link.href}>
//                       {link.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" bg-white p-3  w-1/3 items-center content-center	 ">
//               <img
//                 src="../../../public/add1.jpg"
//                 width={150}
//                 height={100}
//                 alt="s"
//                 className="my-2">
//               <h1 className="font-bold my-4"> Lots to love for less</h1>
//               <p>Refresh? No stress! All you need is here.</p>
//               <button className="border-dark ">Shop Now</button>
//             </div>
//           </div>
//         )}

//         {showSideList2 && (
//           <div
//             onMouseLeave={toggleSideList2}
//             className="absolute w-[850px] top-[40px] left-[100%] flex left-[260px] max-h-96  shadow-lg">
//             <div className="flex grid grid-cols-4 gap-x-2 w-2/3 bg-[#e6f1fc] p-2	overflow-y-auto">
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Grocery</h1>
//                 <li className="mt-3 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Shop All{" "}
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Easter Meal
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     St.Patrick Day Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Flower Shop
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Recipes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Everyday Meals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Fresh Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Grocery & Essentials
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> Bakery & Bread</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Shop All
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Bread
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Artisan breads
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pastries
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Rolls
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Buns
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pies
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Bakery Cookies
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Cakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Cupcakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Snack Cakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     The Bread Shop
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> Bakery & Bread</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Shop All
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Bread
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Artisan breads
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pastries
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Rolls
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Buns
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pies
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Bakery Cookies
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Cakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Cupcakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Snack Cakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     The Bread Shop
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> Bakery & Bread</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Shop All
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Bread
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Artisan breads
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pastries
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Rolls
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Buns
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pies
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Bakery Cookies
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Cakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Cupcakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Snack Cakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     The Bread Shop
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" bg-light p-3  w-1/3 items-center content-center	 ">
//               <img
//                 src="../../../public/add1.jpg"
//                 width={150}
//                 height={100}
//                 alt="s"
//                 className="my-2"/>
//               <h1 className="font-bold my-4"> Lots to love for less</h1>
//               <p>Refresh? No stress! All you need is here.</p>
//               <button className="border-dark ">Shop Now</button>
//             </div>
//           </div>
//         )}
//         {showSideList3 && (
//           <div
//             onMouseLeave={toggleSideList3}
//             className="absolute w-[850px] top-[40px] left-[100%] flex left-[260px] max-h-96  shadow-lg">
//             <div className="flex grid grid-cols-4 gap-x-2 w-2/3 bg-[#e6f1fc] p-2	overflow-y-auto">
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Grocery</h1>
//                 <li className="mt-3 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Shop All{" "}
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Easter Meal
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     St.Patrick Day Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Flower Shop
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Recipes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Everyday Meals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Fresh Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Grocery & Essentials
//                   </Link>
//                 </li>
//               </ul>
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Grocery</h1>
//                 <li className="mt-3 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Shop All{" "}
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Easter Meal
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     St.Patrick Day Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Flower Shop
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Recipes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Everyday Meals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Fresh Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Grocery & Essentials
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> Bakery & Bread</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Shop All
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Bread
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Artisan breads
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pastries
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Rolls
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Buns
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pies
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Bakery Cookies
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Cakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Cupcakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Snack Cakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     The Bread Shop
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> Bakery & Bread</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Shop All
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Bread
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Artisan breads
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pastries
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Rolls
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Buns
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pies
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Bakery Cookies
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Cakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Cupcakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Snack Cakes
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     The Bread Shop
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" bg-light p-3  w-1/3 items-center content-center	 ">
//               <img
//                 src="../../../public/add1.jpg"
//                 width={150}
//                 height={100}
//                 alt="s"
//                 className="my-2"/>
//               <h1 className="font-bold my-4"> Lots to love for less</h1>
//               <p>Refresh? No stress! All you need is here.</p>
//               <button className="border-dark ">Shop Now</button>
//             </div>
//           </div>
//         )}
//         {showSideList4 && (
//           <div
//             onMouseLeave={toggleSideList4}
//             className="absolute w-[850px] top-[40px] left-[100%] flex left-[260px] max-h-96  shadow-lg">
//             <div className="flex grid grid-cols-4 gap-x-2 w-2/3 bg-[#e6f1fc] p-2	overflow-y-auto">
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Spring</h1>
//                 <li className="mt-3 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Shop All Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Electronics
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Toys
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Clothing & Accessories
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Seasonal Décor
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Video Games
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Kitchen & Dining
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Patio & Garden
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Sports & Outdoors
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Auto
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Beauty
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home Improvement
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Books, Movies & Music
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Wellness & Personal Care
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pets
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" bg-light p-3  w-1/3 items-center content-center	 ">
//               <img
//                 src="../../../public/add1.jpg"
//                 width={150}
//                 height={100}
//                 alt="s"
//                 className="my-2"/>
//               <h1 className="font-bold my-4"> Lots to love for less</h1>
//               <p>Refresh? No stress! All you need is here.</p>
//               <button className="border-dark ">Shop Now</button>
//             </div>
//           </div>
//         )}
//         {showSideList5 && (
//           <div
//             onMouseLeave={toggleSideList5}
//             className="absolute w-[850px] top-[40px] left-[100%] flex left-[260px] max-h-96  shadow-lg">
//             <div className="flex grid grid-cols-4 gap-x-2 w-2/3 bg-[#e6f1fc] p-2	overflow-y-auto">
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Deals</h1>
//                 <li className="mt-3 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Shop All Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Electronics
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Toys
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Clothing & Accessories
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Seasonal Décor
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Video Games
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Kitchen & Dining
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Patio & Garden
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Sports & Outdoors
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Auto
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Beauty
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home Improvement
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Books, Movies & Music
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Wellness & Personal Care
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pets
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>{" "}
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>{" "}
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>{" "}
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" bg-light p-3  w-1/3 items-center content-center	 ">
//               <img
//                 src="../../../public/add1.jpg"
//                 width={150}
//                 height={100}
//                 alt="s"
//                 className="my-2"/>
//               <h1 className="font-bold my-4"> Lots to love for less</h1>
//               <p>Refresh? No stress! All you need is here.</p>
//               <button className="border-dark ">Shop Now</button>
//             </div>
//           </div>
//         )}
//         {showSideList6 && (
//           <div
//             onMouseLeave={toggleSideList6}
//             className="absolute w-[850px] top-[40px] left-[100%] flex left-[260px] max-h-96  shadow-lg">
//             <div className="flex grid grid-cols-4 gap-x-2 w-2/3 bg-[#e6f1fc] p-2	overflow-y-auto">
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Deals</h1>
//                 <li className="mt-3 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Shop All Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Electronics
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Toys
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Clothing & Accessories
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Seasonal Décor
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Video Games
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Kitchen & Dining
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Patio & Garden
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Sports & Outdoors
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Auto
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Beauty
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home Improvement
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Books, Movies & Music
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Wellness & Personal Care
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pets
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>{" "}
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" bg-light p-3  w-1/3 items-center content-center	 ">
//               <img
//                 src="../../../public/add1.jpg"
//                 width={150}
//                 height={100}
//                 alt="s"
//                 className="my-2">
//               <h1 className="font-bold my-4"> Lots to love for less</h1>
//               <p>Refresh? No stress! All you need is here.</p>
//               <button className="border-dark ">Shop Now</button>
//             </div>
//           </div>
//         )}
//         {showSideList7 && (
//           <div
//             onMouseLeave={toggleSideList7}
//             className="absolute w-[850px] top-[40px] left-[100%] flex left-[260px] max-h-96  shadow-lg">
//             <div className="flex grid grid-cols-4 gap-x-2 w-2/3 bg-[#e6f1fc] p-2	overflow-y-auto">
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Deals</h1>
//                 <li className="mt-3 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Shop All Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Electronics
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Toys
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Clothing & Accessories
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Seasonal Décor
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Video Games
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Kitchen & Dining
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Patio & Garden
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Sports & Outdoors
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Auto
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Beauty
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home Improvement
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Books, Movies & Music
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Wellness & Personal Care
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pets
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" bg-light p-3  w-1/3 items-center content-center	 ">
//               <img
//                 src="../../../public/add1.jpg"
//                 width={150}
//                 height={100}
//                 alt="s"
//                 className="my-2"></Image>
//               <h1 className="font-bold my-4"> Lots to love for less</h1>
//               <p>Refresh? No stress! All you need is here.</p>
//               <button className="border-dark ">Shop Now</button>
//             </div>
//           </div>
//         )}
//         {showSideList8 && (
//           <div
//             onMouseLeave={toggleSideList8}
//             className="absolute w-[550px] top-[40px] left-[100%] flex left-[260px] max-h-96  shadow-lg">
//             <div className="flex grid grid-cols-4 gap-x-2 w-2/3 bg-[#e6f1fc] p-2	overflow-y-auto">
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Deals</h1>
//                 <li className="mt-3 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Shop All Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Electronics
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Toys
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Clothing & Accessories
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Seasonal Décor
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Video Games
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Kitchen & Dining
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Patio & Garden
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Sports & Outdoors
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Auto
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Beauty
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home Improvement
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Books, Movies & Music
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Wellness & Personal Care
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pets
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>{" "}
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" bg-light p-3  w-1/3 items-center content-center	 ">
//               <img
//                 src="../../../public/add1.jpg"
//                 width={150}
//                 height={100}
//                 alt="s"
//                 className="my-2"></Image>
//               <h1 className="font-bold my-4"> Lots to love for less</h1>
//               <p>Refresh? No stress! All you need is here.</p>
//               <button className="border-dark ">Shop Now</button>
//             </div>
//           </div>
//         )}
//         {showSideList9 && (
//           <div
//             onMouseLeave={toggleSideList9}
//             className="absolute w-[850px] top-[40px] left-[100%] flex left-[260px] max-h-96  shadow-lg">
//             <div className="flex grid grid-cols-2 gap-x-2 w-2/3 bg-[#e6f1fc] p-2	overflow-y-auto">
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Deals</h1>
//                 <li className="mt-3 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Shop All Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Electronics
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Toys
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Clothing & Accessories
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Seasonal Décor
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Video Games
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Kitchen & Dining
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Patio & Garden
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Sports & Outdoors
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Auto
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Beauty
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home Improvement
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Books, Movies & Music
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Wellness & Personal Care
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pets
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>{" "}
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" bg-light p-3  w-1/3 items-center content-center	 ">
//               <img
//                 src="../../../public/add1.jpg"
//                 width={150}
//                 height={100}
//                 alt="s"
//                 className="my-2"></Image>
//               <h1 className="font-bold my-4"> Lots to love for less</h1>
//               <p>Refresh? No stress! All you need is here.</p>
//               <button className="border-dark ">Shop Now</button>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="relative ml-4">
//         <button
//           onClick={toggleDropdown2}
//           className="inline-flex text-base 	 items-center justify-center px-3 py-1 font-bold   text-[#002d58] bg-[#F2F8FF]  rounded-2xl  hover:border hover:border-[#002d58] focus:border focus:border-[#002d58] ">
//           <HiOutlineViewGrid className="-mr-1 w-4 text-[20px]   text-[#002d58] me-2 " />{" "}
//           Services
//           <IoIosArrowDown className="ms-2" />
//         </button>

//         {showDropdown2 && (
//           <div className="absolute p-5 m-h-[530px]   overflow:auto w-[246px] max-h-96  -right-22 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-48 overflow-y-auto">
//             <div className="py-1 ">
//               <h1 className="font-semibold">All Departments</h1>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]"
//                 onMouseOver={toggleSideList10}>
//                 Deals
//               </Link>

//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Grocery
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Easter
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Spring Shop
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Home, Garden & Tools
//               </Link>

//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Toys, Viseo Games
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Beauty
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Personal Care
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Auto & Tires
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Sports & Outdoors
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Pets
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Household Essentials
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Seasonal Dcor & party supplies
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 School, Office & Art Supplies
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Movies,Music & Books
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Gift Cards
//               </Link>
//               <Link
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f1fc] hover:border-l-2 hover:border-[#0071dc]">
//                 Shop With purpose
//               </Link>
//             </div>
//           </div>
//         )}
//         {showSideList10 && (
//           <div
//             onMouseLeave={toggleSideList}
//             className="absolute w-[560px] top-[40px]  flex left-[245px] max-h-96  shadow-lg">
//             <div className="flex grid grid-cols-2 gap-x-2 w-2/3 bg-[#e6f1fc] p-2	overflow-y-auto">
//               <ul className="  p-4 ">
//                 <h1 className="font-bold mb-3">Deals</h1>
//                 <li className="mt-3 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Shop All Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Electronics
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Toys
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Clothing & Accessories
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Seasonal Décor
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Video Games
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Kitchen & Dining
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Food
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Patio & Garden
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Sports & Outdoors
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Auto
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Beauty
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Home Improvement
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Books, Movies & Music
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Wellness & Personal Care
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Pets
//                   </Link>
//                 </li>
//               </ul>
//               <ul className=" bg-[#e6f1fc] p-4 ">
//                 <h1 className="font-bold mb-3"> More Deals</h1>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Flash Deals
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Clearance
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Manufacturer Offers
//                   </Link>
//                 </li>
//                 <li className="my-4 text-sm">
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Baby Days
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     {" "}
//                     Restored tech and home starting at $99
//                   </Link>{" "}
//                 </li>
//                 <li className="my-4 text-sm">
//                   {" "}
//                   <Link
//                     className="text-[#46474a] text-sm  hover:underline hover:decoration-2  "
//                     href={"#"}>
//                     Medical Supplies & Caregiver Essentials
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" bg-light p-3  w-1/3 items-center content-center	 ">
//               <img
//                 src="../../../public/add1.jpg"
//                 width={150}
//                 height={100}
//                 alt="s"
//                 className="my-2"></Image>
//               <h1 className="font-bold my-4"> Lots to love for less</h1>
//               <p>Refresh? No stress! All you need is here.</p>
//               <button className="border-dark ">Shop Now</button>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="text-[#0071dc] px-2">|</div>

//       <div>
//         <ul className=" flex items-center  ">
//           {links.map((lin, index) => (
//             <li
//               key={index}
//               className="text-[#002d58] text-sm  hover:underline hover:decoration-2 px-2">
//               <Link href={lin.href}> {lin.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <li>
//         <button
//           className="text-[#002d58] text-sm  hover:underline hover:decoration-2 px-2"
//           onClick={async () => {
//             await handleSignOut();
//           }}>
//           logout
//         </button>
//       </li>
//     </div>
//   );
// }
