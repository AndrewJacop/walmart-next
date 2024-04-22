import React from 'react'
import Image from "next/image";
import { HiOutlineMapPin } from "react-icons/hi2";
import { GrHomeRounded } from "react-icons/gr";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { GrNext } from "react-icons/gr";

export default function Addressbutton() {
  return (
<div className="flex">
        <img
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
          alt=""
          width={25}
          height={25}
       />
        <DropdownMenu>
          <DropdownMenuTrigger className="text-xs  font-bold ps-1">How do you want your items ? </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#0071dc] text-white  ">
            <DropdownMenuLabel>
            </DropdownMenuLabel>

            <DropdownMenuItem>
              <div className="mx-4 rounded-lg bg-white text-black p-4 flex gap-x-1">
                <HiOutlineMapPin />

                <span className="font-semibold text-xs">
                  <p className="font-semibold text-xs  items-center">
                    {" "}
                    Add an address for shipping and delivery
                  </p>
                  <p className="text-xs  ">Sacramento, CA 95829</p>
                  <button className="bg-[#0071dc]  rounded-xl mt-2 font-bold text-white w-full h-7">
                    Add Address
                  </button>
                </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="mx-4 rounded-lg bg-white text-black p-4 flex gap-x-4 ">
                <GrHomeRounded />
                <span>
                  <p className="font-semibold text-xs ">
                    Sacramento Supercenter
                  </p>
                  <p className="text-xs flex w-52 cursor-pointer ">
                    8915 GERBER ROAD, Sacramento, CA 95829
                    <GrNext />
                  </p>
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>  )
}
