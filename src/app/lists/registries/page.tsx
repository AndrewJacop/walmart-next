import { isUserAuthenticated } from "@/lib/firebase/admin-config";
import Link from "next/link";
import React from "react";

export default async function MyRegister() {
  const isAuth = await isUserAuthenticated();

  return (
    <>
      {!isAuth ? (
        <>
          <div className="flex flex-col justify-center items-center mb-20">
            <img
              className="w-96"
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-4047/k2-_20ee2089-a6f8-4200-8ec4-a8ad44742e4b.v1.svg"
              alt=""
            />
            <p>Sign in to see your registries. Or find a friends registry.</p>
            <div>
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Find a regirstry
              </button>
              <Link
                href={"/auth"}
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ml-10 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in or create account
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center my-6 items-center mb-20">
          <img
            className="w-96"
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-4047/k2-_20ee2089-a6f8-4200-8ec4-a8ad44742e4b.v1.svg"
            alt=""
          />
          <p className="text-sm">
            Make it easy for everyone to find the perfect gift
          </p>
          <div className="items-center ps-4 my-4 flex grid grid-cols-2 gap-x-2">
            <button
              type="button"
              className="py-3 px-6  mb-2 font-semibold focus:outline-none bg-white rounded-full border border-[black] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Find a regirstry
            </button>
            <Link
              type="button"
              className="py-3 px-6  mb-2 font-semibold bg-blue-600 focus:outline-none text-[white] rounded-full  hover:bg-[#004f9a] "
              href={""}
            >
              Create a regirstry
            </Link>
          </div>
          <Link
            href=""
            className="text-xs underline hover:no-underline hover:text-[#004f9a]"
          >
            Learn more about registries
          </Link>
        </div>
      )}
    </>
  );
}
