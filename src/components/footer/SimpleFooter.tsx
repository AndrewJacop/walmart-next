import Image from "next/image";

import PrivacyIcon from "../../../public/privacy_rights.png";

export default function SimpleFooter() {
  return (
    <div className="flex items-end w-auto h-min bg-white text-xs border-t-[1px] border-gray-300 mx-10">
      <div className="w-full text-gray-700 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-7 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            © 2024 Walmart. All Rights Reserved.
          </div>
          <div className="flex flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <a className="px-1 md:w-1/2 hover:underline">Give Feedback</a>
            <a className="px-1 md:w-1/2 hover:underline">CA Privacy Rights</a>
            <a className="px-1 md:w-1/2 hover:underline">
              <Image
                priority
                src={PrivacyIcon}
                alt="privacy"
                width={29}
                height={14}
                className="inline-block"
              />
              Your Privacy Rights
            </a>
            <a className="px-1 md:w-1/2 hover:underline">
              Notice at Collection
            </a>
            <a className="px-1 md:w-1/2 hover:underline">
              Request My Personal Information
            </a>
            <a className="px-1 md:w-1/2 hover:underline">
              California Supply Chains Act
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
