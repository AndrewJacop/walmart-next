"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { TotalPriceSelector, setCartItem, totalCartItemsSelector } from "@/store/slices/cartSlice";
import {
  addCartItem,
  getProductsData,
  getUserByUid,
} from "@/lib/supabase/fetch-data";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function CartToggle() {
  const totalItems: number = useAppSelector(totalCartItemsSelector);
  const totalPrice: number = useAppSelector(TotalPriceSelector);
  const [userId, setUserId] = useState<string | null>(null);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = () => {
      const productsData = getProductsData().then((productsData) => {
        if (productsData) {
          setProducts(productsData);
        }
      });
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
    const fetchCartData = async () => {
      if (userId) {
        getUserByUid(userId).then((user) => {
          if (user) {
            const supaCartdata: CartItem[] = user.cart;
            localStorage.setItem("userCart", JSON.stringify(supaCartdata));
            dispatch(setCartItem(supaCartdata));
          }
        });
      } else {
        const localCartData = JSON.parse(localStorage.getItem("cart") || "[]");
        dispatch(setCartItem(localCartData));
      }
    };

    fetchCartData();
  }, [userId]);

  const dispatch = useAppDispatch();

  return (
    <div>
      <Link href="/cart">
        <Button
          variant="custom"
          className="text-white font-bold rounded-full"
          onClick={() => {
            window.location.assign("/cart");
          }}
        >
          <div className="flex flex-col relative">
            <ShoppingCart className="h-6 w-6" />
            <Badge
              variant="custom"
              className="bg-yellow-500 border border-black text-black w-4 h-4 p-[3px] justify-center absolute right-[-3px] top-[-5px]"
            >
              {totalItems}
            </Badge>
            <p className="font-normal text-[10px]">${totalPrice.toFixed(2)}</p>
          </div>
        </Button>
      </Link>
    </div>
  );
}
