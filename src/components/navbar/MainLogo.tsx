"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";
import WalmartLogo from "../../../public/walmartLogo.svg";

export default function MainLogo() {
  return (
    <>
      <Link href="/">
        <Button
          variant="ghost"
          className="text-white font-bold rounded-full py-4"
          onClick={() => {
            window.location.assign("/");
          }}>
          <Image priority src={WalmartLogo} alt="Logo" />
        </Button>
      </Link>
    </>
  );
}
