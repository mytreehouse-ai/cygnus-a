"use client";

import React from "react";
import Image from "next/image";

import { imageKitLoader } from "@/lib/utils";

/**
 * Type definition for responsive images.
 * This type is used when the image should automatically adjust to the container's width.
 */
type TResponsive = {
  responsive: true;
  sizes?: string;
};

/**
 * Type definition for non-responsive images.
 * This type is used when the image has fixed dimensions, requiring explicit width and height values.
 */
type TNoneResponsive = {
  responsive: false;
  width: number; // The width of the image in pixels.
  height: number; // The height of the image in pixels.
};

/**
 * Type definition for the properties accepted by the ImageKitLoader component.
 * This type combines common properties with either responsive or non-responsive image properties.
 *
 * @property {string} [className] - An optional CSS class for styling the image.
 * @property {string} src - The source URL of the image to be displayed.
 * @property {string} alt - A descriptive alternative text for the image, enhancing accessibility.
 * @property {TResponsive | TNoneResponsive} - Union type that includes either responsive or non-responsive image properties.
 */
type TImageKitLoaderProps = {
  className?: string;
  src: string;
  alt: string;
} & (TResponsive | TNoneResponsive);

/**
 * A component that renders an image using the ImageKit service with support for responsive and fixed dimensions.
 * This component utilizes the Next.js Image component for optimized image delivery.
 *
 * @param {TImageKitLoaderProps} props - The properties to configure the ImageKitLoader component.
 * @returns {JSX.Element} A Next.js Image component configured for use with ImageKit.
 */
export function ImageKitLoader(props: TImageKitLoaderProps): JSX.Element {
  const { className, src, alt, responsive } = props;
  return responsive ? (
    <Image
      className={className}
      loader={imageKitLoader}
      src={src}
      alt={alt}
      fill={true}
      priority={true}
      sizes={props.sizes ? props.sizes : "(max-width: 768px) 100vw, 700px"}
    />
  ) : (
    <Image
      className={className}
      loader={imageKitLoader}
      src={src}
      alt={alt}
      priority={true}
      width={props.width}
      height={props.height}
    />
  );
}
