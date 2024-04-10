import Image from "next/image";

export default function AdBar() {
  return (
    <main className="flex  flex-col p-0 px-6 mb-6">
      <div className="text-center justify-center  flex items-center bg-blue-50 rounded-lg py-2 w-full px-20 ">
        <img
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-5626/k2-_9f1ca88f-5819-4c4c-8ae1-e15a46420d9b.v1.png?odnHeight=64&odnWidth=107&odnBg=FFFFFF"
          alt="Your Image"
          width={80}
          height={80}
        />
        <div className=" px-3">
          <h1 className="text-[12px]  font-bold text-[#172026] inline">
            Earn 5% cash back on Walmart.com.
          </h1>
          <p className="text-[11px] text-[#36485C] lg:leading-7 inline">
            See if youre pre-approved with no credit risk.
          </p>
          <p className=" px-4 text-[10px]  text-[#36485C] lg:leading-7 inline">
            <a
              href="https://example.com"
              className="text-[#36485C] text-sm px-4 hover:border-[2px] border-[1px] border-[black] bg-[white] rounded-[20px] py-2"
            >
              Learn how.
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
