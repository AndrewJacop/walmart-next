"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
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
      <Link href={"/"}>
        <Image
          alt="video ad vard"
          height={447}
          width={794}
          className="relative w-full object-cover -z-10"
          src="https://player.vimeo.com/progressive_redirect/playback/892046818/rendition/1080p/file.mp4?loc=external&signature=b17d4e94e2cbf913d7fa0081e248f9738d403e74496424afc2da03a6d595e339"
        />
      </Link>
    </div>
  );
}
