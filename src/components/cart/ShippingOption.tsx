const Shopping = () => {
  return (
    <div className="flex grid grid-cols-3">
      <div className="flex-auto border-[2px]  border-[#babbbe] items-center rounded-[10px] w-300 h-[100%] m-2">
      <button className="w-full h-full  font-bold py-2 px-4  flex-col items-center">
          <img
            src="https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png"
            alt="Your Image"
            
            className="mx-auto w-[33.3%] " // Center the image horizontally
          />
          <div className="mt-3 font-normal lg:text-sm md:text-xs">Shipping</div>
          <div className="font-normal  lg:text-xs xl:text-sm">Arrives Mar 14</div>
        </button>
      </div>
      <div className="flex-auto  border-[2px]  border-[#babbbe]  items-center rounded-[10px] w-300  h-[100%] m-2">
      <button className="w-full h-full  font-bold py-2 px-4 rounded flex-col items-center">
          <img
            src="https://i5.walmartimages.com/dfwrs/76316474-8720/k2-_d747b89f-5900-404d-a101-1a3452480882.v1.png"
            alt="Your Image"
          
        
            className="mx-auto w-[33.3%]" // Center the image horizontally
          />
          <div className="mt-3 font-normal lg:text-sm md:text-xs">Pickup</div>
          <div className="font-normal lg:text-sm md:text-xs">Not available</div>
        </button>
      </div>
      <div className="flex border-[2px]  border-[#babbbe]  items-center w-300 h-[100%]  m-2 rounded-[12px]">
        <button className="w-full h-full  font-bold py-2 px-4 rounded flex-col items-center">
          <img
            src="https://i5.walmartimages.com/dfwrs/76316474-39c2/k2-_8deea800-0d44-4984-b1ce-5a3f12b192b7.v1.png"
            alt="Your Image"
            
            className="mx-auto w-[33.3%]" // Center the image horizontally
          />
          <div className="mt-3 font-normal lg:text-sm md:text-xs">Delivery</div>
          <div className="font-normal lg:text-sm md:text-xs">Not available</div>
        </button>
      </div>
    </div>
  );
};

export default Shopping;
