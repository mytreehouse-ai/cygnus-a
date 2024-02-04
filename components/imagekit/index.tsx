"use client";

import React from "react";
import Image from "next/image";

import { imageKitLoader } from "@/lib/utils";

export const ImageKitLoader: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement>
> = ({ className, src, alt }) => {
  return (
    <Image
      className={className}
      loader={imageKitLoader}
      src={src!}
      alt={alt!}
      fill={true}
      priority={true}
      sizes="(max-width: 768px) 100vw, 700px"
    />
  );
};
