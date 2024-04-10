
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {CategoryCard} from "./CategoryCard";



type CarouselProps = {
    testCat:Category[]
};



export function CategoryCarousel(props:CarouselProps) {
//   const ItemclassName = `pl-0 md:basis-1/4 lg:basis-${basis}`;
//   const CuroselClassname=`w-${maxWidth}`
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-8xl mb-6"
    >
      <CarouselContent className="w-[147%]">
        {props.testCat.map((cat, index) => (
          <CarouselItem key={index} className="pl-0 md:basis-1/4 lg:basis-1/12">
            <div className="p-0 m-0 flex">
              <Card className="border-0 shadow-none">
                <CardContent className="flex aspect-square items-center  justify-center p-0">
                    <CategoryCard catData={cat}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 border-[1px] w-8 h-8  border-[black] top-16" />
      <CarouselNext className="absolute right-14 top-16 border-[1px] w-8 h-m8 border-[black]" />
    </Carousel>
  );
}