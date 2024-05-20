import { isUserAuthenticated } from "@/lib/firebase/admin-config";
import { auth } from "@/lib/firebase/config";
import Link from "next/link";
import { TiHeartFullOutline } from "react-icons/ti";

export default async function MyLists() {
  const isAuth = await isUserAuthenticated();


  return (
    <>
      {!isAuth ? (
        <>
          <div className="flex flex-col justify-center items-center mb-20">
            <img
              className="w-96"
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-a9ea/k2-_c005f233-4ecc-4d99-beb8-6e7faf7b241d.v1.svg"
              alt=""
            />
            <p>Sign in to see your saved lists </p>
            <a
              href="/auth"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ml-10 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in or create account
            </a>
          </div>
        </>
      ) : (
        <div className="my-6 pb-20">
          <button className="text-[white] bg-blue-600 rounded-[25px] h-[3rem] px-6 font-semibold my-2  text-lg hover:bg-blue-800 ">
            Create a new list
          </button>

          <div className="my-4 flex flex-wrap pe-[40%] grid grid-cols-2 gap-x-5 ">
            <div className="relative flex bg-[#e6f1fc] p-6 rounded-[12px] shadow-md border border-[1px] items-top cursor-pointer">
              <Link href="my-lists/favorites">
                <p className="font-bold flex items-center text-lg">
                  <TiHeartFullOutline className="text-blue-700 text-2xl me-1" />{" "}
                  {/* Andrew's List */}
                  list
                </p>
                <p className="text-xs">Favorites</p>
              </Link>
              <img
                className="absolute right-6   "
                src="https://i5.walmartimages.com/seo/Algherohein-Wood-Litter-Box-Enclosure-Multi-Function-Pet-House-Cat-Condo-Nightstand-with-Furniture-Drawer-White_0457f9ef-253b-4498-8218-8cb3d837a709.a70f7ad98f2a035431e2aa1ba8f80e75.jpeg?odnHeight=80&odnWidth=80&odnBg=e6f1fc"
              />
            </div>
            <div className="flex bg-[#e6f1fc] p-6 rounded-[12px] shadow-md border border-[1px] items-top cursor-pointer">
              <span>
                <p className="font-bold">Your claimed offers</p>
                <p className="text-xs">No special offers claimed yet!</p>
              </span>
              <img
                className="ps-20"
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-98c3/k2-_6ea0a29e-93b2-4068-9bc6-2f49f4d0a335.v1.png?odnHeight=80&odnWidth=80&odnBg=FFFFFF"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}