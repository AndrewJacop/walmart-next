import { LiaHomeSolid } from "react-icons/lia";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const FilterBar = () => {
  return (
    <div className="flex w-100 items-center ">
      {/* 1 */}
      <div className="mx-2">
        <button className="w-[100px] bg-[#f1f1f2]  text-sm rounded-full h-[30px] focus:bg-black focus:text-white flex items-center p-1">
          {" "}
          <LiaHomeSolid className="text-lg mx-1" /> in-store
        </button>
      </div>

      {/* 2 */}
      <div className="mx-2">
        <Select>
          <SelectTrigger className="w-[100px] bg-[#f1f1f2] rounded-full h-[30px] ">
            <SelectValue placeholder="Price " />
          </SelectTrigger>
          <SelectContent>
            <Slider defaultValue={[33]} max={100} step={1} className="m-5" />
          </SelectContent>
        </Select>
      </div>
      <div className="mx-2">
        <Select>
          <SelectTrigger className="w-24 bg-gray-100 rounded-full h-8">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent />
        </Select>
      </div>
      <div className="mx-2">
        <Select>
          <SelectTrigger className="w-24 bg-gray-100 rounded-full h-8">
            <SelectValue placeholder="Brand" />
          </SelectTrigger>
          <SelectContent />
        </Select>
      </div>
      <div className="mx-2 ">
        <Select>
          <SelectTrigger className="w-24 bg-gray-100 rounded-full h-8">
            <SelectValue placeholder="fulfillment Speed" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="flex w-100 items-center  absolute right-[25%]">
        <h1 className="font-semibold text-sm">sort by |</h1>
        <div className="  border-none">
          <Select>
            <SelectTrigger className="w-24 bg-white border-none">
              <SelectValue placeholder="Best match" />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
