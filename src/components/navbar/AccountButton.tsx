"use client"
import Link from "next/link";
import Image from "next/image";

import { Heart, LogOut, ScrollText, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import WalmartPlus from "../../../public/wplus-icon-blue.svg";
import { signMeOut } from "@/lib/firebase/auth";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function AccountButton({
  params,
}: {
  params: { currentUser: string | undefined };
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white font-bold rounded-full">
          <Heart className="mr-2 h-4 w-4" />
          <div className="flex flex-col items-start">
            <p className="font-light">{params.currentUser ?? "Sign In"}</p>
            <p>Account</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pt-2 px-2 w-54 z-10 mt-5">
        {!params.currentUser ? (
          <>
            <DropdownMenuGroup>
              <Button
                className="bg-blue-600 rounded-full font-bold text-xs m-2"
                asChild>
                <Link href="/auth">Sign in or create account</Link>
              </Button>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ScrollText className="mr-2 h-4 w-4" />
                <Link href="/history">Purchase History</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Image
                  priority
                  className="mr-2 h-4 w-4"
                  src={WalmartPlus}
                  alt="Logo"
                />
                <Link href="/plus">Walmart+</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        ) : (
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ScrollText className="mr-2 h-4 w-4" />
                <span>Purchase History</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Image
                  priority
                  className="mr-2 h-4 w-4"
                  src={WalmartPlus}
                  alt="Logo"
                />
                <span>Walmart+</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserRound className="mr-2 h-4 w-4" />
                <Link href='/account'>Account</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Button
                  onClick={() => {
                    signMeOut();
                    window.location.assign("/");
                    window.location.reload();
                  }}
                  variant={"custom"}>
                  <>
                    <LogOut className="mr-2 h-4 w-4" />
                    <p>Sign Out</p>
                  </>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
