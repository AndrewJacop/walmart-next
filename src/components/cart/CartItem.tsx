import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import React from "react";

const cardDetails = {
    mainTitle: "Pickup or delivery from store, as soon as today",
    upperAncorTag: "Reserve a time",
    imgUrl: "https://i5.walmartimages.com/seo/Reese-s-Pieces-Peanut-Butter-Easter-Candy-Gift-Bag-1-75-oz_d6705324-9912-4960-bd8a-ceb1888db427.d82e2b83af8e79107ce1780f45fe80d1.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    productDescription: "Reese's Pieces Peanut Butter Easter Candy, Gift Bag",
    weight: "1.75 oz",
    ozPrice: "57.1 ¢/oz",
    similar: "Shop similar for shipping",
    price: "$1.00",
    remove: "Remove",
    saveForLater: "Save for later ",
    quantity: "1",
};

export default function CartItem() {
    return (
        <Card className="w-2/4 m-20 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <CardHeader className="bg-blue-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-row space-x-24  ">
                <CardTitle>{cardDetails.mainTitle}</CardTitle>
                <CardDescription>
                    <a className="font-bold" href="#">
                        {cardDetails.upperAncorTag}
                    </a>
                </CardDescription>
            </CardHeader>
            <CardHeader className="flex flex-row">
                <img className="w-28" src={cardDetails.imgUrl} alt="" />

                <CardContent>
                    <p>
                        {cardDetails.productDescription}{" "}
                        <span className="ml-28 font-bold">
                            {cardDetails.price}
                        </span>
                    </p>
                    <p>{cardDetails.weight}</p>
                    <p className="my-2">{cardDetails.ozPrice}</p>
                    <a className="text-blue-500" href="#">
                        {cardDetails.similar}
                    </a>
                </CardContent>
            </CardHeader>

            <CardContent className="flex flex-row">
                <a className="ml-80 text-sm" href="#">
                    {cardDetails.remove}
                </a>
                <a className="ml-10 text-sm " href="#">
                    {cardDetails.saveForLater}
                </a>
                <button
                    type="button"
                    className=" ml-10 h-10   flex flex-row py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    <span>
                        <svg
                            className="w-3 h-3 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h16"
                            />
                        </svg>
                    </span>
                    <span className="ml-10 w-3 h-3">
                        {cardDetails.quantity}
                    </span>
                    <span className="ml-10">
                        <svg
                            className="w-3 h-3 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 1v16M1 9h16"
                            />
                        </svg>
                    </span>
                </button>
            </CardContent>
        </Card>
    );
}
