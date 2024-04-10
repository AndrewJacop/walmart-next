import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col text-center items-center justify-center">
      <Image
        src={"/error-page-not-found-search.svg"}
        width={224}
        height={224}
        alt="error"
        className="mb-[64px]"
      />
      <p className="text-4xl font-bold mb-[28px]">Uh-oh...</p>
      <p className="text-base font-normal mb-[48px]">
        This page could not be found.
      </p>
      <Button className="bg-blue-600 rounded-full p-6 mb-[60px]" asChild>
        <Link href="/">Return to home</Link>
      </Button>
    </div>
  );
}
