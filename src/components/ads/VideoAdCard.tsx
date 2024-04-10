"use client";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import {
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
} from "react-icons/md";

/**
 * @brief Video Ad Card
 *
 * this component is a simple ad card with a video played locally with pulsing
 * takes the given width of the parent and the automatic hight based on that width
 * @todo ADD link to distinatsion of this card
 */
export function VideoAdCard() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleMediaButton = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="h-auto rounded-lg overflow-hidden relative animate-pulse">
      <div className="absolute right-3 top-3 text-2xl text-gray-400">
        <button
          onClick={() => {
            handleMediaButton();
          }}>
          {isPlaying ? (
            <MdOutlinePauseCircleFilled />
          ) : (
            <MdOutlinePlayCircleFilled />
          )}
        </button>
      </div>
      <Link href={""}>
        <img
          
          className="relative w-full object-cover -z-10"
         
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-a305/k2-_d0659449-43f8-4acc-9610-40fdc8747db8.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70"/>
      </Link>
    </div>
  );
}
