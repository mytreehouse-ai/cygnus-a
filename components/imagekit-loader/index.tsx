"use client";

import React from "react";
import Image from "next/image";

import { imageKitLoader } from "@/lib/utils";

export interface ImageKitLoaderProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * Renders an Image component with properties for use with ImageKit.
 * @param {ImageKitLoaderProps} props - The properties passed to the Image component.
 * @returns {JSX.Element} The Image component configured for ImageKit.
 */
export function ImageKitLoader(props: ImageKitLoaderProps): JSX.Element {
  const { className, src, alt } = props;
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
}
