import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Image
        src="/loading.gif"
        alt="loading"
        priority
        width={800}
        height={600}
        unoptimized
      />
    </div>
  );
}
