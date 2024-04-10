import Image from "next/image";
/**
 * @breif Ad Bar
 * this component is Ad bar for credits with offer description and credit img
 */
export default function AdBar() {
  return (
    <div className="justify-center flex items-center bg-blue-50 rounded-lg py-2 my-2 w-full shadow-sm shadow-slate-400">
      <Image
        src="https://i5.walmartimages.com/dfw/4ff9c6c9-5626/k2-_9f1ca88f-5819-4c4c-8ae1-e15a46420d9b.v1.png?odnBg=FFFFFF"
        alt="Ad bar image"
        width={81}
        height={51}
        className="mx-4"
      />
      <p className="px-1 text-base font-bold">
        Earn 5% cash back on Walmart.com.
      </p>
      <p className="px-1 text-base text-gray-700 lg:leading-7">
        See if youre pre-approved with no credit risk.
      </p>
      <p className="px-2 text-sm text-gray-700 lg:leading-7">
        <a
          href="/"
          className="text-gray-700 text-sm px-4 border-2 border-black bg-white rounded-full py-2">
          Learn More
        </a>
      </p>
    </div>
  );
}
