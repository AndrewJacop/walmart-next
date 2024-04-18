import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { getReviewById, getReviewsData } from "./supabase/fetch-data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//
export function calcRating(rates: Review[]) {
  let totalRate = 0;
  let avRates = 0;

  rates.map((rate) => {
    totalRate += rate.vote;
    avRates = totalRate / rates.length;
  });
  return avRates;
}


export function extractSecefications(prdDetails: any) {
  const pattern = /([^:|]+):([^|]+)/g;
  const specs: { title: string; value: string }[] = [];
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(prdDetails.productSpecification)) !== null) {
    const title: string = match[1];
    const value: string = match[2];
    specs.push({ title, value });
  }
  return specs;
}

export async  function getReviews(prd: Product) {
  const prdReviews = prd.reviews
  let reviewsList: Review[] = [];

   
    prdReviews.map(async (pRev) => {
      const res = await getReviewById(pRev)
      // reviewsList.push(reviews);
      reviewsList.push(res!)
    })


  return reviewsList;
}