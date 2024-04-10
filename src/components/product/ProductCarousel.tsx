'use client'
import * as React from "react";
import ProductCardSmall from "./ProductCardSmall";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { redirect, useRouter } from "next/navigation";


//   maxWidth:string

// }

type CarouselProps = {
  basisClass: string;
  testProduct:Product[]
};

export function ProductCarousel(props: CarouselProps) {
  // const ItemclassName = `pl-0 md:basis-1/4 lg:basis-${basis}`;
  // const CuroselClassname=`w-${maxWidth}`
  const router=useRouter()
  return (
    <Carousel
      opts={{
        align: "start",
      }}>
      <CarouselContent>
        {props.testProduct.map((product, index) => (
          <CarouselItem key={index} className={(cn("pl-0"), props.basisClass)}>
            <div className="p-0 m-0 flex">
              <Card className="border-0 shadow-none">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                <span  className="cursor-pointer"> <ProductCardSmall cardData={product} /></span> 
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 border-[1px] w-10 h-10  border-[black] top-28" />
      <CarouselNext className="absolute right-14 top-28 border-[1px] w-10 h-10  border-[black]" />
    </Carousel>
  );
}
