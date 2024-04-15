import Link from "next/link";

import { Gift, Heart, RotateCcwSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MyItemsButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white font-bold rounded-full">
          <Heart className="mr-2 h-4 w-4" />
          <div className="flex flex-col items-start">
            <p className="font-light">Reorder</p>
            <p>My items</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pt-6 px-4 w-50 ms-20 z-10 mt-5">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <RotateCcwSquare className="mr-2 h-4 w-4" />
            <Link href="/lists/reorder">Reorder</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Heart className="mr-2 h-4 w-4" />
            <Link href="/lists/my-lists">Lists</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Gift className="mr-2 h-4 w-4" />
            <Link href="/lists/registries">Registries</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
