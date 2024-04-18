import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function CartToggle() {
  return (
    <div>
      <Link href='/cart'>
      <Button variant="custom" className="text-white font-bold rounded-full">
        <div className="flex flex-col relative">
          <ShoppingCart className="h-6 w-6" />
          <Badge
            variant="custom"
            className="bg-yellow-500 border border-black text-black w-4 h-4 p-[3px] justify-center absolute right-[-3px] top-[-5px]">
            0
          </Badge>
          <p className="font-normal text-[10px]">$0.00</p>
        </div>
      </Button>
      </Link>
    </div>
  );
}
