import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CategoryCard } from "@/components/category/CategoryCard";

type CarouselProps = {
  categoryData: Category[];
};
/**
 * @brief Category Carousel
 *
 * this component Carousel of Categories with its img and name
 * @param
 */
export function CategoryCarousel(props: CarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-8xl mb-6">
      <CarouselContent>
        {props.categoryData.map((cat, index) => (
          <CarouselItem key={index} className="pl-0 md:basis-1/4 lg:basis-1/12">
            <div>
              <Card className="border-0  shadow-none">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <CategoryCard categoryData={cat} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 border w-8 h-8 border-black top-16" />
      <CarouselNext className="absolute right-14 top-16 border w-8 h-8 border-black" />
    </Carousel>
  );
}
