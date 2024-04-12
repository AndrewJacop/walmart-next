import { Input } from "@/components/ui/input";

/**
 * @breif this component is a simple search bar
 */
export function SearchBar() {
  return (
    <div className=" m-5 grid w-full max-w-sm items-center gap-3">
      <Input type="search" placeholder="Search in Categories" />
    </div>
  );
}
