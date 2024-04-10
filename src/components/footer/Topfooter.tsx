import { isUserAuthenticated } from "@/lib/firebase/admin-config";
import { auth } from "@/lib/firebase/config";
import Link from "next/link";
import React from "react";

export default function TopFooter() {
 
  
  return (
    <>
        <div className="bg-[#e6f1fc] flex justify-center items-center h-[144px]">

            <div >
            <p> </p>
                <p className="mb-6">We’d love to hear what you think!</p> 
                <Link className="ms-12 bg-[white] text-[#2e2f32] font-bold px-4 py-3 border-[1px] border-[black] h-9 rounded-[29px]" href={"#"}> Give Feedback</Link>
            </div>

            

      </div>
    </>
  );
}