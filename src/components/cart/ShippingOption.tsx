const shippingOptions = [
  {
    id: 1,
    optionName: "shipping",
    deliver: " within 3 days",
    imgLink:
      "https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png",
  },
  {
    id: 2,
    optionName: "Pickup",
    deliver: "Check nearby",
    imgLink:
      "https://i5.walmartimages.com/dfwrs/76316474-8720/k2-_d747b89f-5900-404d-a101-1a3452480882.v1.png",
  },
  {
    id: 3,
    optionName: "Delivery",
    deliver: "Not available",
    imgLink:
      "https://i5.walmartimages.com/dfwrs/76316474-39c2/k2-_8deea800-0d44-4984-b1ce-5a3f12b192b7.v1.png",
  },
];

/**
 * @brief ShippingOption
 *
 * this component is  3 of shiping options (shipping , Pickup , delivery) 
 */
const ShippingOption = () => {
  return (
    <div className="flex  items-center  ">
      {shippingOptions.map((option: any) => (
        <button
          key={option.id}
          className="m-2 rounded-lg border border-[2px] border-[#babbbe] w-full h-full font-bold py-2 px-4"
        >
          {option.deliver === "Not available" ? (
            <img
              src={option.imgLink}
              alt="Your Image"
              className="mx-auto w-10   grayscale"
            />
          ) : (
            <img
              src={option.imgLink}
              alt="shipping option Image"
              className="mx-auto w-10 h-10"
            />
          )}
          <p className="mt-3 font-normal lg:text-sm md:text-xs">
            {option.optionName}
          </p>
          <p className="font-normal lg:text-xs">{option.deliver}</p>
        </button>
      ))}
    </div>
  );
};
export default ShippingOption;
