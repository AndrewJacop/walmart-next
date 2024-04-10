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
export function AnimatedAdCard() {
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
        <video
          ref={videoRef}
          className="relative w-full object-cover -z-10"
          autoPlay
          loop={true}
          src="https://download-video.akamaized.net/v3-1/playback/42ec8452-32b2-4ff5-8a0e-cdce5951e423/a005d866?__token__=st=1711541503~exp=1711555903~acl=%2Fv3-1%2Fplayback%2F42ec8452-32b2-4ff5-8a0e-cdce5951e423%2Fa005d866%2A~hmac=ce39ec241bd1dd2fa2ff1b445d24f946b5fafdf5e6e65ce494d5ec50bbed449d&r=dXMtd2VzdDE%3D"></video>
      </Link>
    </div>
  );
}
