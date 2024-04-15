import NewTopNavBar from "@/components/navbar/NewTopBar";
import "../globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NewBottomBar from "@/components/navbar/NewBottomBar";
import Link from "next/link";
import TopFooter from "@/components/footer/Topfooter";
import BottomFooter from "@/components/footer/Bottomfooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Walmart",
  description: "Th e-king of e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="fixed z-[2] w-full">
        <NewTopNavBar /> <NewBottomBar />
      </header>

      <main className="lg:mx-80 md:mx-6 pt-36">
          <h1 className="text-2xl ps-4 font-bold font-serif text-gray-700">My Items</h1>

          <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mt-10 ml-5 ">
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium pb-4 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li className="mb-3">
                    <Link className="hover:text-blue-700" href="/lists/reorder">
                      Reorder
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-700"
                      href="/lists/my-lists"
                      aria-current="page"
                    >
                      Lists
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-700"
                      href="/lists/registries"
                    >
                      Registries
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr></hr>
          </nav>

          <div>{children}</div>
      </main>

      <footer className="z-[1] w-full mt-[5%]">
        <TopFooter />
        <BottomFooter />
      </footer>
    </>
  );
}
