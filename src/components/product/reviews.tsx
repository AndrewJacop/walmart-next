"use client";
import { auth } from "@/lib/firebase/config";
import {
  addNewProductReview,
  addNewReview,
  getUserByUid,
} from "@/lib/supabase/fetch-data";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa6";
type RevProps = {
  productData: Product;
  currentUser: string | undefined;
};
export default function Reviews(reviewProps: RevProps) {
  const product = reviewProps.productData;

  const userName = reviewProps.currentUser;
  const [vote, setVote] = useState<number>(0);
  const [reviewTitle, setReviewTitle] = useState<string>("");
  const [reviewSubTitle, setreviewSubTitle] = useState<string>("");
  const handleAddReview = async () => {
    const isAuth = auth.currentUser;
    if (isAuth) {
      const uId = isAuth.uid;

      getUserByUid(uId)
        .then((user) => {
          if (user) {
            let newReview: Review = {
              id: Math.floor(Math.random() * 10000),
              date: new Date().toDateString(),
              userName: userName!,
              subtitle: reviewSubTitle,
              title: reviewTitle,
              vote: vote,
            };
            const newList = [...product.reviews, newReview.id];
            addNewReview(newReview);
            addNewProductReview(newList, product.id);
          }
        })
        .then(() => {
          setVote(0)
          setReviewTitle("")
          setreviewSubTitle('')
          toast.success('Successfully toasted!')
        })
        
    } else {
      window.location.assign("/auth/sign-in");
    }
  };

  return (
    <div className="my-10">
     
      <div className="w-full flex items-center p-5 cursor-pointer rounded-lg shadow-md mb-4 border">
        <p className="font-bold text-2xl">Rating:</p>
        {[...Array(5)].map((_, index) => (
          <span key={index} onClick={() => setVote(index + 1)}>
            <FaStar className={`hover:text-[gold] text-3xl text-gray ${vote >= index + 1 ? 'text-[gold]' : ''} mx-5`} />
          </span>
        ))}
      </div>

      <div className="p-5 rounded-lg border shadow-lg">
<p className="font-bold text-xl">Put it in your own words</p>
<p className="text-xs text-gray-600 mb-10">What do you want others to know?</p>

      <p className="font-bold mb-2">Title your review</p>
      <textarea
        className="w-full p-2 border h-16 rounded-md mb-3"
        placeholder="Short and decriptive works best..."
        value={reviewTitle}
        onChange={(e) => setReviewTitle(e.target.value)}
      />
      <p className="font-bold mt-3 mb-2">Your review</p>

      <textarea
        className="w-full p-2 border h-28 rounded-md"
        placeholder="Share what you liked or disliked, how you use the product, fun facts, etc..."
        value={reviewSubTitle}
        onChange={(e) => setreviewSubTitle(e.target.value)}
      />
      <a href={`/product/${product.id}`} className="me-60  border border-black px-4 ms-6 p-2 rounded-3xl font-bold text-lg"> Back </a>

      <button
        className="bg-blue-500 h-10 w-40 text-white rounded-3xl text-xl mt-4"
        onClick={handleAddReview}
      >
        Submit review
      </button>
      </div>
    </div>
  );
}
type BtnProps = {
  productData: Product;
};

export function ReviewBtn(btnProps: BtnProps) {
  const product = btnProps.productData;

  const handleAddReviewClick = () => {
    window.location.assign(`/product/reviews/${product.id}`);
  };
  return (
    <>
      <button className="bg-blue-500 text-white p-3 text-xl rounded-3xl"
        onClick={() => {
          handleAddReviewClick();
        }}
      >
        Add review
      </button>{" "}
    </>
  );
}
