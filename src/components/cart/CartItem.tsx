import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

type CartItemProps = {
  CartItemData: CartItem;
};

/**
 * @brief Cart Item
 *
 * this component appears on cart when you add product
 * has details of the added product
 * @param CartItem {id,productId,quantity,price}
 */

export default function CartItem(item: CartItemProps) {
  const cartItem = item.CartItemData;
  const products: Product[] = [{
    id: "dbd86be64e58faa2c3a05fb916818a7f",
    title: 'Anagram International A11957001 Sesame Street 1st Birthday Foil Balloon, 18", Multicolor',
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61VF9CnU--L.jpg",
      "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
    ],
    brand: 70,
    colors: [],
    seller: 70,
    isBestSeller: false,
    quantity: 7,
    subCatergory: [0, 1, 2],
    discount: 0,
    originalPrice: "6.99",
    returnPolicy: 2,
    isGiftable: false,
    modelNumber: "",
    aboutProduct: "",
    productSpecification: "",
    technicalDetails: "",
    shippingWeight: "",
    productDimensions: "",
    warrenty: "",
    reviews: [],
    variants: []
  }];

  return (
    <Card className="w-2/4  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <CardHeader className="bg-blue-50 border border-gray-200 rounded-lg shadow flex flex-row space-x-24  ">
        <CardTitle>Pickup or delivery from store, as soon as today</CardTitle>
        <CardDescription>
          <a className="font-bold" href="#">
            Reserve a time
          </a>
        </CardDescription>
      </CardHeader>
      {products.map((prd) => (
        <div key={prd.id}>
          <CardHeader className="flex flex-row h-32 relative">
            <img  src={prd.images[0]} alt="product img" />

            <CardContent>
              <p>
                {prd.aboutProduct}{" "}
                <span className="font-bold absolute right-10">${prd.originalPrice}</span>
              </p>
            </CardContent>
          </CardHeader>
        </div>
      ))}

      <CardContent className="flex flex-row">
        <a className="ml-80 text-sm underline" href="#">
          remove
        </a>
        <a className="ml-10 text-sm underline" href="#">
          Save for Later
        </a>
        <button
          type="button"
          className=" ml-20 h-10   flex flex-row py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 x    x     "
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
          <span className="ml-10 w-3 h-3">{cartItem.quantity}</span>
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
