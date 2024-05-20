import { LayoutGrid } from "lucide-react";

import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import CartToggle from "./CartToggle";
import { getCurrentUser } from "@/lib/firebase/admin-config";
import { getCategoriesData, getDepartmentData, getUserByUid } from "@/lib/supabase/fetch-data";
import { signMeOut } from "@/lib/firebase/auth";
import MyItemsButton from "./MyItemsButton";
import AccountButton from "./AccountButton";
import MainLogo from "./MainLogo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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
  const categories = await getCategoriesData();

  return (
    <div className="flex justify-center items-center px-4 py-6 bg-[#0071dc] gap-1 z-10">
      {/* Logo */}
      <MainLogo />

      {/* Departments Button */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="text-white font-bold text-sm rounded-full flex items-center hover:bg-blue-900/[.8] p-2">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Departments
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ms-32 mt-5">
          <DropdownMenuLabel><a href='/departments' className="font-bold hover:underline">All Departments</a></DropdownMenuLabel>
          <DropdownMenuSeparator />

          {categories?.map((cat) => (
          <DropdownMenuItem className="cursor-pointer" key={cat.id}>
              <a href={`/departments/${cat.id}`}>{cat.title}</a>
          </DropdownMenuItem>
          ))}
           
          </DropdownMenuContent>
       </DropdownMenu>

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
