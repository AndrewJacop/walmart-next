import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProductsData } from "@/lib/supabase/fetch-data";
import { handleAddToCart, removeAllFromCart, removeFromCart } from "@/lib/func/cart";

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

export default async function CartItem(item: CartItemProps) {
  const cartItem = item.CartItemData;
 const products= await getProductsData()
 const cartProducts = products.filter((prd) => prd.id === cartItem.productId);


  return (
    <Card className="  shadow dark:bg-gray-800 dark:border-gray-700 ">
      
      
      {cartProducts.map((prd) => (
        <div key={prd.id}>
          <CardHeader className="flex flex-row  relative">
            <Image
              src={prd.images[0]}
              alt="product img"
              height={96}
              width={96}
            />

            <CardContent>
              <p className="w-1/2 flex ">
                {prd.title}{" "}
                <span className="font-bold absolute right-10">
                $
                          {(
                            Number(prd.originalPrice) *
                            ((100 - Number(prd.discount)) / 100) *
                            cartItem.quantity
                          ).toFixed(2)}
                </span>
              </p>
              <div className="flex justify-end items-center mx-7 mb-3 text-sm absolute right-3">
                    <p  
                      className="mr-7 underline hover:no-underline cursor-pointer hover:text-blue-500"
                      onClick={() => {
                        removeAllFromCart(prd);
                      }}
                    >
                      Remove
                    </p>
                    <a
                      href="#"
                      className="mr-7 underline hover:no-underline hover:text-blue-500"
                    >
                      Save for later
                    </a>
                    <div className="flex border justify-center items-center border-gray-300 px-5 py-1 rounded-full">
                      <span
                        className="mr-8 cursor-pointer text-lg"
                        onClick={() => {
                          removeFromCart(prd);
                        }}
                      >
                        -
                      </span>
                      <p className="font-bold">{cartItem.quantity}</p>
                      <span
                        className="ml-8 cursor-pointer text-lg"
                        onClick={() => {
                          handleAddToCart(prd);
                        }}
                      >
                        +
                      </span>
                    </div>
                    </div>
            </CardContent>
          </CardHeader>
        </div>
      ))}

    </Card>
  );
}
