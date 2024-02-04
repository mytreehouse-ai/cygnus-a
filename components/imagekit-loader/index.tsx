"use client";

import React from "react";
import Image from "next/image";

import { imageKitLoader } from "@/lib/utils";

export interface ImageKitLoaderProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const ImageKitLoader: React.FC<ImageKitLoaderProps> = ({
  className,
  src,
  alt,
}) => {
  return (
    <Image
      className={className}
      loader={imageKitLoader}
      src={src}
      alt={alt}
      fill={true}
      priority={true}
      sizes="(max-width: 768px) 100vw, 700px"
    />
  );
};
