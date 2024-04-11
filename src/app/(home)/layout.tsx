import "../globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NewTopNavBar from "@/components/navbar/NewTopBar";
import SimpleFooter from "@/components/footer/SimpleFooter";
import NewBottomBar from "@/components/navbar/NewBottomBar";

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
        <NewTopNavBar />
      </header>
      <main className="lg:mx-28 md:mx-6 pt-[9%]">{children}</main>
      <footer className="z-[1] w-full mt-[5%]">
      </footer>
    </>
  );
}
