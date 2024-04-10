import Image from "next/image";

function AdBarLarge(props: {
  adsTilte: string;
  adsImage: any;
}) {
  const { adsTilte, adsImage } = props;
  return (
    <>
      <div className="flex justify-center px-6 py-11">
        <div className="w-11/12">
          <div className="relative flex justify-center ">
            <div className="absolute flex justify-center   flex-col">
              <h4 className="font-bold text-2xl mt-9">{adsTilte} Celebration ,Offers up to 50%</h4>
              <p className="m-auto text-lg ">Find all you need to celebrate</p>
              <span className="mt-3 ml-40">
                <a href="#" className="underline ms-16">
                  Shop now
                </a>
              </span>
            </div>
            <img src={adsImage} alt="ImgAdBarLarge" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdBarLarge;
