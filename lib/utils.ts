import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { IImageKitLoaderParams } from "@/types";

/**
 * Combines class names using clsx and merges them with tailwind-merge.
 * This function takes any number of arguments which can be a string, array, or object.
 *
 * @param {ClassValue[]} inputs - An array of class values to be combined and merged.
 * @returns {string} The final string of combined and deduplicated class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Constructs a URL for loading images with ImageKit with specified parameters.
 *
 * @param {IImageKitLoaderParams} params - The parameters for the image loader.
 * @returns {string} The constructed ImageKit URL.
 */
export function imageKitLoader(params: IImageKitLoaderParams): string {
  let { src, width, quality } = params;

  // Remove leading slash from the source path if present
  if (src.startsWith("/")) {
    src = src.substring(1);
  }

  // Initialize the parameters array with width
  const parameters = [`w-${width}`];

  // Add quality to the parameters if provided
  if (quality) {
    parameters.push(`q-${quality}`);
  }

  // Join parameters into a single string
  const parametersString = parameters.join(",");

  // Define the ImageKit endpoint, ensuring no trailing slash
  let urlEndpoint = "https://ik.imagekit.io/veaeev6wu";
  if (urlEndpoint.endsWith("/")) {
    urlEndpoint = urlEndpoint.slice(0, -1);
  }

  // Construct and return the full ImageKit URL
  return `${urlEndpoint}/${src}?tr=${parametersString}`;
}
