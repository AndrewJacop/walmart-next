"use client";
import React, { useEffect, useState } from "react";

import {
  decrement,
  increment,
  productQtyInCartSelector,
  remove,
  setCartItem,
} from "@/store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import QtyBtn from "./qtyButton";
import {
  addNewOrder,
  getProductsData,
  getUserByUid,
} from "@/lib/supabase/fetch-data";
import { auth } from "@/lib/firebase/config";
import { calculateTotalPrice } from "@/store/slices/totalPrice";

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );

  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProductsData();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const decreaseCartItemQuantity = (product: Product) => {
    dispatch(decrement(product));

    dispatch(calculateTotalPrice({ products: products }));
  };

  const increaseCartItemQuantity = (product: Product) => {
    dispatch(increment(product));

    dispatch(calculateTotalPrice({ products: products }));
  };

  if (!qty)
    return (
      <div className="flex justify-center">
        <button
          className=" border-[1px] border-[#46474a] w-20 h-8 font-semibold text-sm rounded-[18px] hover:border-2"
          onClick={() => increaseCartItemQuantity(props.product)}
        >
          +Add
        </button>
      </div>
    );
  return (
    <QtyBtn
      onDecrease={() => decreaseCartItemQuantity(props.product)}
      onIncrease={() => increaseCartItemQuantity(props.product)}
      qty={qty}
    />
  );
};

export default AddToCartBtn;
