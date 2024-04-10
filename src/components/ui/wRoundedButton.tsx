import Link from "next/link";
import React from "react";

type ButtonProps = {
  title: string;
  href: string;
};
/**
 * @brief walmart rounded button
 *
 * this component is a rounded button with white background
 * @param title string : the title of the button
 * @param href string : the destination link of the button
 */
export const WRoundedButton = (buttonData: ButtonProps) => {
  return (
    <div className="text-[16px] font-bold text-center bg-white text-black h-10 px-6 inline-flex cursor-pointer rounded-full justify-center items-center border-black border shadow-sm">
      <Link className="no-underline z-2" href={buttonData.href}>
        {buttonData.title}
      </Link>
    </div>
  );
};
