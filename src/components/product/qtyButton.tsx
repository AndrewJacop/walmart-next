import React from "react";
import { TrashIcon } from "lucide-react";
import { Toaster } from "react-hot-toast";
interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <button
        className="w-10 h-10  rounded-full text-3xl hover:bg-gray-200"
        onClick={props.onDecrease}
      >
          -
      </button>
      
      <p className="px-5">{props.qty}</p>
      <button
    
        className="w-10 h-10  text-2xl rounded-full hover:bg-gray-200 "
        onClick={props.onIncrease}
      >
        +
      </button>
      <Toaster position="top-center" />

    </div>
  );
};

export default QtyBtn;
