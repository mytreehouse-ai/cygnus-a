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

  if (src.startsWith("/")) {
    src = src.substring(1);
  }

  const parameters = [`w-${width}`];

  if (quality) {
    parameters.push(`q-${quality}`);
  }

  const parametersString = parameters.join(",");

  let urlEndpoint = "https://ik.imagekit.io/veaeev6wu";
  if (urlEndpoint.endsWith("/")) {
    urlEndpoint = urlEndpoint.slice(0, -1);
  }

  return `${urlEndpoint}/${src}?tr=${parametersString}`;
}

export function formatCurrency(
  amount: number,
  currencyCode: string = "PHP",
  locale: string = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
}

export function createSearchParams(queryParams: Record<string, any>) {
  const isValidJSONObject =
    queryParams !== null &&
    typeof queryParams === "object" &&
    !Array.isArray(queryParams);

  if (isValidJSONObject) {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined && value !== "" && value !== null) {
        searchParams.append(key, String(value));
      }
    }

    return searchParams;
  }
}
