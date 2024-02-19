"use client";

import React from "react";
import Image from "next/image";

import { imageKitLoader } from "@/lib/utils";

/**
 * Defines the properties for the ImageKitLoader component.
 * @property {string} [className] - Optional CSS class to apply to the image.
 * @property {string} src - The source URL of the image.
 * @property {string} alt - The alternative text for the image.
 * @property {boolean} responsive - Flag to indicate if the image should be responsive.
 * @property {number} [width] - The width of the image (required if responsive is false).
 * @property {number} [height] - The height of the image (required if responsive is false).
 */
export type TImageKitLoaderProps = {
  className?: string;
  src: string;
  alt: string;
} & (
  | {
      responsive: true;
    }
  | {
      responsive: false;
      width: number;
      height: number;
    }
);

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
      sizes="(max-width: 768px) 100vw, 700px"
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
