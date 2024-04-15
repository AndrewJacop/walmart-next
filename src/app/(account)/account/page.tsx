"use client";
import React, { useEffect, useState } from "react";
import { LuNewspaper } from "react-icons/lu";
import { PiFolderThin } from "react-icons/pi";
import { LiaCarSolid } from "react-icons/lia";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbReorder } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { GoGift } from "react-icons/go";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { PiChecks } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { MdHelpOutline } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsBoxArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { PiHouseLight } from "react-icons/pi";
import { PiCirclesFourLight } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/config";
import Link from "next/link";

export default function Account() {
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(" ");

  const useCurrentUserEmail = () => {
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setCurrentUserEmail(user.email);
        }
      });

      return () => unsubscribe();
    }, []);

    return currentUserEmail;
  };
  useCurrentUserEmail();

  const isAuth = auth.currentUser;

  const router = useRouter();
  return (
    <>
      {isAuth ? (
        <>
          <div className="flex px-5 py-10">
            <div className="mr-5 border-r ">
              <div className="mt-7 ml-8">
                {/* <p className="text-xs">Thanks for being a Walmart customer</p> */}
              </div>
              <div className="border-b w-84 my-2 ml-3"></div>
              <div className="flex flex-col py-2 mt-6 text-sm font-light ml-7">
                <span className="flex flex-row">
                  <LuNewspaper />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Purchase history
                  </a>
                </span>
                <span className="flex flex-row">
                  <img
                    src="https://i5.walmartimages.com/dfw/63fd9f59-66db/28aceb87-1100-43cd-ab89-c2a4cf6d8ca9/v1/my-savings.svg"
                    alt="saving"
                    className="w-4 h-4"
                  />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    My saving
                  </a>
                </span>
                <span className="flex flex-row">
                  <PiFolderThin />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Wallet
                  </a>
                </span>
                <span className="flex flex-row">
                  <img
                    src="https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg"
                    alt="walmart"
                    className="w-4 h-4"
                  />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Walmart+
                  </a>
                </span>
              </div>
              <div className="border-b w-81 ml-7"></div>
              <div className="flex flex-col py-2 pt-4 text-sm font-light ml-7">
                <h4 className="font-bold pb-6">My profile</h4>
                <span className="flex flex-row">
                  <img
                    src="https://i5.walmartimages.com/dfw/63fd9f59-d9ed/eb8a7625-0eee-4cf5-b897-95d60421679c/v1/pets-account-icon.svg"
                    alt="pets"
                    className="w-4 h-4"
                  />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Pets
                  </a>
                </span>
                <span className="flex flex-row">
                  <LiaCarSolid />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Vehicles
                  </a>
                </span>
              </div>
              <div className="border-b w-81 ml-7"></div>
              <div className="flex flex-col py-2 pt-4 text-sm font-light ml-7">
                <h4 className="font-bold pb-6">Manage Account</h4>
                <span className="flex flex-row">
                  <BsPerson />
                  <Link
                    href="/account/profile"
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Personal info
                  </Link>
                </span>
                <span className="flex flex-row">
                  <LiaCarSolid />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Addresses
                  </a>
                </span>
                <span className="flex flex-row">
                  <MdOutlineEmail />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Communications & privacy
                  </a>
                </span>
                <span className="flex flex-row">
                  <TbHeartHandshake />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Giving & impact
                  </a>
                </span>
              </div>
              <div className="border-b w-81 ml-7"></div>
              <div className="flex flex-col py-2 pt-4 text-sm font-light ml-7">
                <h4 className="font-bold pb-6">My items</h4>
                <span className="flex flex-row">
                  <RiMoneyDollarCircleLine />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Walmart Cash
                  </a>
                </span>
                <span className="flex flex-row">
                  <TbReorder />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Reorder
                  </a>
                </span>
                <span className="flex flex-row">
                  <GoHeart />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Lists
                  </a>
                </span>
                <span className="flex flex-row">
                  <GoGift />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Registries
                  </a>
                </span>
              </div>
              <div className="border-b w-81 ml-7"></div>
              <div className="flex flex-col py-2 pt-4 text-sm font-light ml-7">
                <h4 className="font-bold pb-6">Subscriptions & plans</h4>
                <span className="flex flex-row">
                  <MdOutlinePrivacyTip />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Protection plans
                  </a>
                </span>
                <span className="flex flex-row">
                  <FaArrowRotateRight />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    My subscriptions
                  </a>
                </span>
              </div>
              <div className="border-b w-81 ml-7"></div>
              <div className="flex flex-col py-2 pt-4 text-sm font-light ml-7">
                <h4 className="font-bold pb-6">Other Accounts</h4>
                <span className="flex flex-row">
                  <MdOutlineLocalPharmacy />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Pharmacy
                  </a>
                </span>
                <span className="flex flex-row">
                  <HiOutlinePhoto />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Photo
                  </a>
                </span>
                <span className="flex flex-row">
                  <MdOutlineLibraryBooks />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Ebooks
                  </a>
                </span>
              </div>
              <div className="border-b w-81 ml-7"></div>
              <div className="flex flex-col py-2 pt-4 text-sm font-light ml-7">
                <h4 className="font-bold pb-6">Privacy</h4>
                <span className="flex flex-row">
                  <IoLockClosedOutline />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Privacy Policy
                  </a>
                </span>
                <span className="flex flex-row">
                  <PiChecks />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Your Privacy Choices
                  </a>
                </span>
                <span className="flex flex-row">
                  <GrNotes />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Request My Personal information
                  </a>
                </span>
              </div>
              <div className="border-b w-81 ml-7"></div>
              <div className="flex flex-col py-2 pt-4 text-sm font-light ml-7">
                <h4 className="font-bold pb-6">Customer Service</h4>
                <span className="flex flex-row">
                  <MdHelpOutline />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Help
                  </a>
                </span>
                <span className="flex flex-row">
                  <AiOutlineExclamationCircle />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Terms of Use
                  </a>
                </span>
              </div>
              <div className="border-b w-81 ml-7"></div>
              <div className="flex flex-col py-4 mt-4 text-sm font-light ml-7">
                <span className="flex flex-row">
                  <BsBoxArrowRight />
                  <a
                    href=""
                    className="-mt-1 mb-6 ml-2 hover:underline hover:text-mainColor"
                  >
                    Sign Out
                  </a>
                </span>
              </div>
            </div>

            <div>
              <div className="flex flex-row content-between justify-between mt-7">
                <h1 className="font-bold mr-28 text-2xl">
                  Welcome to your Account
                </h1>
                <span className="flex flex-row relative ml-28">
                  <img
                    src="https://i5.walmartimages.com/dfw/63fd9f59-b2d5/5c15110b-7c74-4282-8e87-43515087b5c9/v1/rewards-brand-yellow-logo.svg"
                    alt="doral"
                    className="w-10 -mt-2 absolute"
                  />
                  <h4 className="ml-12 mr-2 font-bold text-xl text-cashColor">
                    $0 Walmart Cash
                  </h4>
                  <a href="" className="mt-1 underline">
                    How to get more
                  </a>
                </span>
              </div>

              <div className="flex flex-row justify-between mt-14 border-2 p-5 bg-blue-50 rounded-xl">
                <a href="" className="flex flex-row font-bold">
                  <p className="text-2xl mr-4 font-normal">
                    <GrNotes />
                  </p>
                  Purchase history
                </a>
                <span className="mt-1 text-2xl">
                  <IoIosArrowForward />
                </span>
              </div>

              <div className="mt-6 border-2 p-5 bg-blue-50 rounded-xl">
                <div className="flex flex-row justify-between">
                  <a href="" className="flex flex-row font-bold mr-3">
                    <p className="text-2xl mr-4 font-normal">
                      <PiFolderThin />
                    </p>
                    Wallet
                    <span className="font-normal border-l-2 pl-3 ml-3 border-gray-400 text-lg">
                      Payment methods
                    </span>
                  </a>
                  <span className="mt-1 text-2xl">
                    <IoIosArrowForward />
                  </span>
                </div>
                <p className="text-sm mt-7">
                  Learn more about{" "}
                  <a
                    href=""
                    className="text-xs underline hover:text-mainColor hover:no-underline"
                  >
                    payment methods
                  </a>{" "}
                  we accept.
                </p>
                <div className="flex flex-row mt-5">
                  <div className="bg-white p-5 border-2 rounded-xl w-48 h-28 mr-6">
                    <a
                      href=""
                      className="flex flex-col justify-items-center items-center"
                    >
                      <img
                        src="https://i5.walmartimages.com/dfw/63fd9f59-a0df/abc19199-c5c4-40ad-9d4e-8d13356fe6eb/v1/CC-bunch-logo-dark.svg"
                        alt="payment"
                      />
                      <span className="text-xs font-bold mt-3">
                        Credit/debit card
                      </span>
                    </a>
                  </div>
                  <div className="bg-white p-5 border-2 rounded-xl w-48 h-28 mr-6">
                    <a
                      href=""
                      className="flex flex-col justify-items-center items-center"
                    >
                      <img
                        src="https://i5.walmartimages.com/dfw/63fd9f59-154b/e8c1d0bf-a4ad-4b20-8eac-939ab7f93063/v1/Gift-Card-Logo.png"
                        alt="payment"
                        className="w-16"
                      />
                      <span className="text-xs font-bold mt-2">Gift card</span>
                    </a>
                  </div>
                  <div className="bg-white p-5 border-2 rounded-xl w-48 h-28 mr-6">
                    <a
                      href=""
                      className="flex flex-col justify-items-center items-center"
                    >
                      <img
                        src="https://i5.walmartimages.com/dfw/63fd9f59-2845/2044d79e-92d5-4c08-90a2-0480444a877f/v1/EBT-Logo.svg"
                        alt="payment"
                        className="w-16"
                      />
                      <span className="text-xs font-bold mt-2">
                        Electronic Benefits
                      </span>
                      <span className="text-xs font-bold ">Transfer</span>
                    </a>
                  </div>
                  <div className="bg-white p-5 border-2 rounded-xl w-48  h-28">
                    <a
                      href=""
                      className="flex flex-col justify-items-center items-center"
                    >
                      <img
                        src="https://i5.walmartimages.com/dfw/63fd9f59-154b/e8c1d0bf-a4ad-4b20-8eac-939ab7f93063/v1/DS-OTHER-Logo.png"
                        alt="payment"
                        className="w-16"
                      />
                      <span className="text-xs font-bold mt-2">
                        Benefit card
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-2 rounded-xl">
                <div className="flex flex-row justify-between p-5 bg-blue-50 rounded-xl rounded-bl-none rounded-br-none">
                  <Link
                    href="/account/profile"
                    className="flex relative w-full flex-row font-bold"
                  >
                    <p className="text-2xl mr-4 font-normal">
                      <BsPerson />
                    </p>
                    Account info
                    <span className="mt-1 text-2xl absolute right-2">
                      <IoIosArrowForward />
                    </span>
                  </Link>
                </div>
                <div className="flex flex-row border-b mb-5 py-5 mx-7">
                  <div className="border-r pr-72">
                    <span className="font-bold">Email Address</span>
                    {}
                    <p className="text-sm">{currentUserEmail}</p>
                  </div>
                  <div className="ml-5">
                    <span className="font-bold">Phone number</span>
                    <p className="text-sm underline hover:text-mainColor hover:no-underline">
                      <a href="">Add phone number</a>
                    </p>
                  </div>
                </div>
                <div className="flex flex-row mx-7 justify-between mb-6">
                  <div>
                    <span className="font-bold">Add an Address</span>
                    <p className="text-sm">
                      Adding an address allows for quicker checkout and
                      approximation of delivery times
                    </p>
                  </div>
                  <div className="text-sm font-bold ">
                    <a
                      href=""
                      className="border rounded-full px-4 py-2 border-gray-800 hover:border-black hover:border-2"
                    >
                      Add an Address
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-2 rounded-xl">
                <div className="flex flex-row justify-between p-5 bg-blue-50 rounded-xl rounded-bl-none rounded-br-none">
                  <a href="" className="flex flex-row font-bold">
                    <p className="text-2xl mr-4 font-normal">
                      <GoHeart />
                    </p>
                    Lists(1)
                  </a>
                  <span className="mt-1 text-2xl">
                    <IoIosArrowForward />
                  </span>
                </div>
                <div className="flex flex-row mx-7 justify-between mb-3 mt-8">
                  <div className="flex flex-row ml-7">
                    <img
                      src="https://i5.walmartimages.com/seo/AILEEKISS-Baby-Bassinet-with-Wheels-Adjustable-Bedside-Sleeper-Bassinet-Newborn-Baby-Crib-Grey_f8125d8e-5108-45ea-b3d5-e2fcea68e36c.e8599ca3a9f5e33145c0b820a708a78d.jpeg"
                      alt="listImage"
                      className="w-12 mr-5 rounded-lg"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold">name List</span>
                      <p className="text-sm">1 items - Primary</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <a
                      href=""
                      className="underline mr-4 hover:no-underline hover:text-mainColor"
                    >
                      + create new list
                    </a>
                    <a
                      href=""
                      className="font-bold border rounded-full px-4 py-2 border-gray-800 hover:border-black hover:border-2"
                    >
                      View list
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="mt-6 border-2 rounded-xl mr-3">
                  <div className="flex flex-row justify-between p-5 bg-blue-50 rounded-xl rounded-bl-none rounded-br-none">
                    <a href="" className="flex flex-row font-bold">
                      <p className="text-2xl mr-4 font-normal">
                        <PiHouseLight />
                      </p>
                      Your selected Walmart store
                    </a>
                  </div>
                  <div className="flex flex-row py-3 px-5">
                    <div className="flex flex-col pr-5">
                      <div className="mr-9">
                        <span className="text-xs font-bold">
                          Sacramento Supercenter
                        </span>
                        <p className="font-light text-sm">
                          8915 GERBER ROAD, CA 95829
                        </p>
                      </div>
                      <div className="text-sm font-bold mt-20 flex justify-center justify-items-center">
                        <a
                          href=""
                          className="border border-gray-400 rounded-full px-11 py-1"
                        >
                          Update store
                        </a>
                      </div>
                    </div>
                    <img
                      src="https://i5.walmartimages.com/dfw/63fd9f59-53e5/41e513cb-7ea3-4cc9-b56e-1f647a22fb75/v1/store-default-image.png"
                      alt="storeImage"
                      className="w-36"
                    />
                  </div>
                </div>

                <div className="mt-6 border-2 rounded-xl">
                  <div className="flex flex-row justify-between p-5 bg-blue-50 rounded-xl rounded-bl-none rounded-br-none">
                    <a href="" className="flex flex-row font-bold">
                      <p className="text-2xl mr-4 font-normal">
                        <PiCirclesFourLight />
                      </p>
                      Discover popular services
                    </a>
                  </div>
                  <div className="flex flex-row py-3 px-5 justify-center justify-items-center">
                    <div className="flex justify-center justify-items-center mr-9">
                      <a
                        href=""
                        className="flex flex-col justify-center justify-items-center"
                      >
                        <img
                          src="https://i5.walmartimages.com/dfw/4ff9c6c9-64d0/k2-_f0d316e7-25a9-4436-a60d-2efd62702aa3.v1.png?odnHeight=96&odnWidth=96&odnBg=FFFFFF"
                          alt="imgdservice"
                          className="w-24"
                        />
                        <span className="font-light text-sm mt-4 ml-4">
                          Pharmacy
                        </span>
                      </a>
                    </div>
                    <div className="flex justify-center justify-items-center mr-9">
                      <a
                        href=""
                        className="flex flex-col justify-center justify-items-center"
                      >
                        <img
                          src="https://i5.walmartimages.com/dfw/4ff9c6c9-15ce/k2-_ad628e1a-53e3-4f61-9359-a2660f4792af.v1.png?odnHeight=96&odnWidth=96&odnBg=FFFFFF"
                          alt="imgdservice"
                          className="w-24 ml-2"
                        />
                        <span className="font-light text-sm mt-4">
                          Auto Care Center
                        </span>
                      </a>
                    </div>
                    <div className="flex justify-center justify-items-center">
                      <a
                        href=""
                        className="flex flex-col justify-center justify-items-center"
                      >
                        <img
                          src="https://i5.walmartimages.com/dfw/4ff9c6c9-7115/k2-_72d8477e-8b41-404f-b891-c6ee5b6e68ff.v1.png?odnHeight=96&odnWidth=96&odnBg=FFFFFF"
                          alt="imgdservice"
                          className="w-24"
                        />
                        <span className="font-light text-sm mt-4 ml-2">
                          Custom Cake
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="p-52 font-bold "> you must login!</h1>
        </>
      )}
    </>
  );
}
