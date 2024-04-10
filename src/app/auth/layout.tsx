import "../globals.css";
import WalmartLogo from "../../../public/walmart.png";

import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";

import SimpleFooter from "@/components/footer/SimpleFooter";
import { Toaster } from "@/components/ui/toaster";

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
      <header className="flex justify-center">
        <Image src={WalmartLogo} alt="logo" className="m-7" />
      </header>
      <Toaster />
      <main className="w-full mx-auto">{children}</main>
      <footer className="w-full absolute bottom-0">
        <SimpleFooter />
      </footer>
    </>
  );
}
