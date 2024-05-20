"use client";
import FilterBar from "@/components/filter/FilterBar";
import ProductCard from "@/components/product/ProductCard";
import {
  Filter,
  getFilteredProductsData,
  getProductsData,
} from "@/lib/supabase/fetch-data";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { policyData } from "./../../../../../lib/models/Policy";
import { Input } from "@/components/ui/input";

export default function SubCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([] as Product[]);
  // const [query, setQuery] = useState();
  // const [minP, setMinP] = useState(0);
  // const [maxP, setMaxP] = useState(10000);
  // const [isBestSeller, setIsBestSeller] = useState(false);
  // const [isGiftable, setIsGiftable] = useState(false);
  // const [onlyAvailabe, setOnlyAvailabe] = useState(false);
  const [filter, setFilter] = useState({
    query: undefined,
    priceMin: 0,
    priceMax: 10000,
    isBestSeller: false,
    isGiftable: false,
    onlyAvailabe: false,
    returnIdxList: [0, 1, 2, 3],
    pageIdx: 1,
  } as Filter);

  // initial data
  useEffect(() => {
    setIsLoading(true);
    getProductsData().then((products) => {
      setProduct([...products]);
      setIsLoading(false);
    });
  }, []);

  // filtered data
  // const filter: Filter = {
  //   query: undefined,
  //   priceMin: 0,
  //   priceMax: 10000,
  //   isBestSeller: false,
  //   isGiftable: false,
  //   onlyAvailabe: false,
  //   returnIdxList: [0, 1, 2, 3],
  //   pageIdx: 1,
  // };
  useEffect(() => {
    setIsLoading(true);
    getFilteredProductsData(filter).then((products) => {
      if (products) setProduct([...products]);
      setIsLoading(false);
    });
  }, [filter, setFilter]);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // } else
  return (
    <>
      <div className="mt-4">
        <FilterBar />
      </div>

      <div className="-ml-[22px] mt-2 mb-5">
        <hr />
        <h1 className="mt-5 font-bold">Search</h1>
        <div className=" m-5 grid w-full max-w-sm items-center gap-3">
          <Input
            type="search"
            placeholder="Search in Categories"
            value={filter.query}
            onChange={(e) => {
              setFilter({
                ...filter,
                query: e.target.value,
              });
            }}
          />
        </div>
      </div>

      <hr />
      <section className="flex">
        <aside className="w-1/5 h-screen border-r mx-2">
          <div className="mx-4">
            <h1>Filter</h1>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Availability</AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center space-x-2 h-10">
                    <Switch
                      id="available"
                      checked={filter.onlyAvailabe}
                      onCheckedChange={() =>
                        setFilter({
                          ...filter,
                          onlyAvailabe: !filter.onlyAvailabe,
                        })
                      }
                    />
                    <Label htmlFor="available">Only Available Products</Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Price</AccordionTrigger>
                <AccordionContent>
                  <div className="flex">
                    <Input />

                    <Input />
                  </div>
                  <Slider
                    defaultValue={[10000]}
                    max={10000}
                    step={10}
                    value={[filter.priceMax!]}
                    onValueChange={(value) =>
                      setFilter({
                        ...filter,
                        priceMax: value[0],
                      })
                    }
                    className="w-[60%] h-10 mx-auto"
                  />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center space-x-2 h-10">
                    <Checkbox id="rp0" />
                    <label
                      htmlFor="rp0"
                      className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {policyData[0].title}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 h-10">
                    <Checkbox id="rp1" />
                    <label
                      htmlFor="rp1"
                      className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {policyData[1].title}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 h-10">
                    <Checkbox id="rp2" />
                    <label
                      htmlFor="rp2"
                      className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {policyData[2].title}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 h-10">
                    <Checkbox id="rp3" />
                    <label
                      htmlFor="rp3"
                      className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {policyData[3].title}
                    </label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>More</AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center space-x-2 h-10">
                    <Switch
                      id="bestseller"
                      checked={filter.isBestSeller}
                      onCheckedChange={() =>
                        setFilter({
                          ...filter,
                          isBestSeller: !filter.isBestSeller,
                        })
                      }
                    />
                    <Label htmlFor="bestseller">Best Sellers</Label>
                  </div>
                  <div className="flex items-center space-x-2 h-10">
                    <Switch
                      id="giftables"
                      checked={filter.isGiftable}
                      onCheckedChange={() =>
                        setFilter({
                          ...filter,
                          isGiftable: !filter.isGiftable,
                        })
                      }
                    />
                    <Label htmlFor="giftables">Giftables</Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* <div className="text-center my-20">
            <Button
              className="text-[16px] font-bold text-center bg-white text-black h-10 px-6 inline-flex cursor-pointer rounded-full justify-center items-center border-black border shadow-sm"
              onClick={() => {
                
              }}>
              Apply filter
            </Button>
          </div> */}
        </aside>
        <main className="w-4/5 h-full mx-2">
          <div className="grid grid-cols-5 my-10">
            {product.slice(0, 100).map((prd) => (
              <ProductCard key={prd.id} productData={prd} style={""} />
            ))}
          </div>
        </main>
      </section>
    </>
  );
}