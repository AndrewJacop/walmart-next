import Image from "next/image";
import { LayoutGrid } from "lucide-react";

import { Button } from "@/components/ui/button";

import WalmartLogo from "../../../public/walmartLogo.svg";
import SearchBar from "./SearchBar";
import CartToggle from "./CartToggle";
import { getCurrentUser } from "@/lib/firebase/admin-config";
import { getUserByUid } from "@/lib/supabase/fetch-data";
import { signMeOut } from "@/lib/firebase/auth";
import MyItemsButton from "./MyItemsButton";
import AccountButton from "./AccountButton";
import Link from "next/link";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getData() {
  const firebaseUser = await getCurrentUser();
  if (firebaseUser) {
    const user = await getUserByUid(firebaseUser.uid);
    const userName = `${user?.firstName} ${user?.lastName.charAt(0)}.`;
    return userName;
  }
}

async function handleSignOut() {
  const res = await signMeOut();
  if (res) window.location.reload();
}
export default async function NewTopNavBar() {
  const currentUser = await getData();

  return (
    <div className="flex justify-center items-center px-4 py-6 bg-[#0071dc] gap-1 z-10">
      {/* Logo */}
      <Link href='/'>
      <Button
        variant="ghost"
        className="text-white font-bold rounded-full py-4">
        <Image priority src={WalmartLogo} alt="Logo" />
      </Button>
      </Link>
      {/* Departments Button */}
      <Button variant="ghost" className="text-white font-bold rounded-full">
        <LayoutGrid className="mr-2 h-4 w-4" />
        Departments
      </Button>
      {/* Services Button */}
      <Button variant="ghost" className="text-white font-bold rounded-full">
        <LayoutGrid className="mr-2 h-4 w-4" />
        Services
      </Button>
      {/* search bar */}
      <SearchBar />
      {/* My Itmes Button */}
      <MyItemsButton />
      {/* Account Button */}
      <AccountButton
        params={{
          currentUser: currentUser,
        }}
      />
      {/* Cart */}
      <CartToggle />
    </div>
  );
}
