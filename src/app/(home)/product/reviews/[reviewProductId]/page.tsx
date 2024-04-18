import Reviews from "@/components/product/reviews";
import { getCurrentUser } from "@/lib/firebase/admin-config";
import { getProductsData, getUserByUid } from "@/lib/supabase/fetch-data";
import React from "react";
import { Toaster } from "react-hot-toast";

export default async function Review({params}: {params: { reviewProductId: string };}) {
  const products = await getProductsData();
  const indx = products.findIndex((prd) => prd.id === params.reviewProductId);
  async function getData() {
    const firebaseUser = await getCurrentUser();
    if (firebaseUser) {
      const user = await getUserByUid(firebaseUser.uid);
      const userName = `${user?.firstName} ${user?.lastName.charAt(0)}.`;
      return userName;
    }
  }
  const user = await getData();

  return (
    <div className="w-1/3 m-auto">
      {" "}
      
      <h1 className="text-3xl font-bold">Write a review</h1>
      <div className="flex items-center my-4 ">
        <img src={products[indx].images[0]} className="w-28 h-28"/>
        <p className="font-bold">{products[indx].title}</p>
      </div>
      <Reviews productData={products[indx]} currentUser={user} />

      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
}
