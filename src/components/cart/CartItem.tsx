"use client";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProductsData, getUserByUid } from "@/lib/supabase/fetch-data";
import {
  handleAddToCart,
  removeAllFromCart,
  removeFromCart,
} from "@/lib/func/cart";
import { useEffect, useState } from "react";
import AddToCartBtn from "../product/addToCartButton";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "@/store/slices/cartSlice";
import QtyBtn from "../product/qtyButton";
import { auth } from "@/lib/firebase/config";
import toast from "react-hot-toast";

/**
 * @brief Cart Item
 *
 * this component appears on cart when you add product
 * has details of the added product
 * @param CartItem {id,productId,quantity,price}
 */

export default function CartItem() {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProductsData();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const decreaseCartItemQuantity = (product: Product, cartItem: CartItem) => {
    if (cartItem.quantity > 1) {
      dispatch(decrement(product));
      setCartData((prevCartData) =>
        prevCartData.map((item) =>
          item.productId == product.id
            ? { ...item, quantity: item.quantity-- }
            : item
        )
      );
    } else {
      dispatch(decrement(product));
      setCartData((prevCartData) =>
        prevCartData.filter((item) => item.productId !== product.id)
      );
    }
  };

  const handleRemoveAll = (product: Product, cartItem: CartItem) => {
    removeAllFromCart(product);
    setCartData((prevCartData) =>
      prevCartData.filter((item) => item.productId !== product.id)
    );
  };

  const increaseCartItemQuantity = (product: Product, cartItem: CartItem) => {
    if (cartItem.quantity < product.quantity) {
      handleAddToCart(product);
      setCartData((prevCartData) =>
        prevCartData.map((item) =>
          item.productId == product.id
            ? { ...item, quantity: item.quantity++ }
            : item
        )
      );
    } else {
      toast.error('! Max quantity')
    }
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProductsData();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const isAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    return () => {
      isAuth();
    };
  }, []);

  useEffect(() => {
    if (userId) {
      getUserByUid(userId).then((user) => {
        if (user) {
          setCartData(user.cart);
        }
      });
    } else {
      const cartDataString = localStorage.getItem("cart");
      if (cartDataString) {
        const cartData: CartItem[] = JSON.parse(cartDataString);
        setCartData(cartData);
      }
    }
  }, [userId]);

  const cartQuantities = useAppSelector((state) =>
    cartData.map((item) => productQtyInCartSelector(state, item.productId))
  );

  return (
    <Card className="border-none">
      {cartData.map((itm, indx) => {
        const qty = cartQuantities[indx];

        const cartProducts = products.filter((prd) => prd.id === itm.productId);

        return cartProducts.map((prd) => (
          <div key={prd.id}>
            <CardHeader className="flex flex-row  relative">
              <img
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
                      itm.quantity
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
                    {!qty ? (
                      <div className="flex justify-center">
                        <button className=" border-[1px] border-[#46474a] w-20 h-8 font-semibold text-sm rounded-[18px] hover:border-2">
                          +Add
                        </button>
                      </div>
                    ) : (
                      <QtyBtn
                        onDecrease={() => decreaseCartItemQuantity(prd, itm)}
                        onIncrease={() => dispatch(increment(prd))}
                        qty={qty}
                      />
                    )}
                  </div>
                </div>
              </CardContent>
            </CardHeader>
          </div>
        ));
      })}
    </Card>
  );
}
