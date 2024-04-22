import Image from "next/image";

import { Button } from "@/components/ui/button";

const shippingOptions = [
  {
    id: 1,
    optionName: "shipping",
    deliver: "All items available",
    imgLink:
      "https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png",
    available: Math.round(Math.random()),
  },
  {
    id: 2,
    optionName: "Pickup",
    deliver: "Check your nearest location",
    imgLink:
      "https://i5.walmartimages.com/dfwrs/76316474-8720/k2-_d747b89f-5900-404d-a101-1a3452480882.v1.png",
    available: Math.round(Math.random()),
  },
  {
    id: 3,
    optionName: "Delivery",
    deliver: "All items available",
    imgLink:
      "https://i5.walmartimages.com/dfwrs/76316474-39c2/k2-_8deea800-0d44-4984-b1ce-5a3f12b192b7.v1.png",
    available: Math.round(Math.random()),
  },
];

/**
 * @brief ShippingOption
 *
 * this component is  3 of shiping options (shipping , Pickup , delivery)
 */
const ShippingOption = () => {
  return (
    <div className="flex items-center">
      {shippingOptions.map((option: any) => (
        <Button asChild key={option.id} variant={"custom"}>
          <div className="flex flex-col items-center justify-center m-2 rounded-lg border-2 border-gray-300 w-full h-full font-bold py-4 gap-y-1">
            {option.available ? (
              <img
                height={40}
                width={40}
                src={option.imgLink}
                alt="shipping option Image"
              />
            ) : (
              <img
                height={40}
                width={40}
                src={option.imgLink}
                alt="shipping option Image in grayscale"
                className="grayscale"
              />
            )}
            <p className="font-bold lg:text-sm md:text-xs">
              {option.optionName}
            </p>
            <p className="font-normal lg:text-xs">
              {option.available ? option.deliver : "Not Available"}
            </p>
          </div>
        </Button>
      ))}
    </div>
  );
};
export default ShippingOption;
