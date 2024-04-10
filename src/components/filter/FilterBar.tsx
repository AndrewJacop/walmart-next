import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = () => {
  return (
    <div className="flex w-100 items-center ">
      <div className="mx-2">
        <Select >
          <SelectTrigger className="w-[100px] bg-[#f1f1f2] rounded-full h-[30px]">
            <SelectValue placeholder="All filters" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mx-2">
        <Select>
          <SelectTrigger className="w-[100px] bg-[#f1f1f2] rounded-full h-[30px]">
            <SelectValue placeholder="in-store" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mx-2">
        <Select>
          <SelectTrigger className="w-[100px] bg-[#f1f1f2] rounded-full h-[30px]">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mx-2">
        <Select>
          <SelectTrigger className="w-[100px] bg-[#f1f1f2] rounded-full h-[30px]">
            <SelectValue placeholder="Brand" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="mx-2 ">
        <Select>
          <SelectTrigger className="w-[100px] bg-[#f1f1f2] rounded-full h-[30px]">
            <SelectValue placeholder="fulfillment Speed" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="flex w-100  flex items-center  absolute right-[25%]">
        <h1 className="font-semibold text-sm">sort by |</h1>
        <div className="  border-none">
          <Select>
            <SelectTrigger className="w-[100px] bg-[white] border-none" >
              <SelectValue placeholder="Best match" />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
