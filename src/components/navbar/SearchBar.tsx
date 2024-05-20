"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowUpLeft, Search } from "lucide-react";
import { getSearchReaults } from "@/lib/supabase/fetch-data";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([] as Product[]);

  async function fetchData() {
    const lst = await getSearchReaults(query);
    setResults([...lst]);
  }
  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <>
      <div className="flex flex-grow relative">
        <Input
          className="border-none px-4 rounded-full z-10"
          type="email"
          placeholder="Search everything at Walmart online and at store"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          className="rounded-full bg-yellow-500 absolute right-[2px] h-9 w-9 my-[2px] z-10"
          size="icon">
          <Search color="black" className="p-1" />
        </Button>
        {query && (
          <div className="h-auto w-full absolute top-5 bg-gray-100 pt-10 rounded-b-xl">
            {results.map((map) => (
              <div
                key={map.id}
                className="flex justify-between items-center py-3 px-5 hover:bg-slate-200 rounded-xl m-1">
                <a href={`/product/${map.id}`} className="">{map.title}</a>
                <ArrowUpLeft />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
