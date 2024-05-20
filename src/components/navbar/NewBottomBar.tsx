import React from "react";
import Link from "next/link";

import { HiOutlineMapPin } from "react-icons/hi2";
import { GrHomeRounded } from "react-icons/gr";
import Addressbutton from "./addressbutton";
import { getCategoriesData } from "@/lib/supabase/fetch-data";



export default async function NewBottomBar() {

  const categories=await getCategoriesData()
  return (
    <div className="bg-[#0071dc] border-t-[1px] px-7 py-1  text-white flex items-center">
      <Addressbutton/>

        <div className="px-2 text-xs flex items-center gap-x-2 cursor-pointer">| 
      <HiOutlineMapPin />  
         Sacramento,95829 
         <GrHomeRounded />
         Sacramento Supercenter
      </div>

      <div className="xl:flex xl:flex-wrap font-bold text-xs  w-2/3 gap-x-5  justify-end overflow-hidden sm:hidden ">
      
        {categories.slice(0,7).map((cat,indx)=>(

            <Link key={indx} className="hover:underline" href={`/departments/${cat.id}`}>{cat.title}</Link>
        ))}
     
        </div>
    </div>
  );
}
