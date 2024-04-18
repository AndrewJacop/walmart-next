import NewTopNavBar from "@/components/navbar/NewTopBar";
import "../globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <header className="fixed z-[2] w-full"><NewTopNavBar/></header>
      <main className="lg:mx-72 md:mx-6 pt-[7%]">{children}</main>
      <footer className="z-[1] w-full mt-[5%]"></footer>
    </>
  );
}
