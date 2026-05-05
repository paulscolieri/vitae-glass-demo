"use client";

import { useRef, useEffect } from "react";

interface VideoHeroProps {
  src: string;
  className?: string;
}

export default function VideoHero({ src, className = "" }: VideoHeroProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className={className}
    />
  );
}
