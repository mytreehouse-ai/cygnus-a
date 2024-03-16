import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ImageKitLoaderParams } from "@/types";
import { ReadonlyURLSearchParams } from "next/navigation";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function imageKitLoader(params: ImageKitLoaderParams): string {
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

export function getParams(filters?: ReadonlyURLSearchParams) {
  return filters?.size ? Object.fromEntries(filters.entries()) : {};
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

export function createSearchParams(
  queryParams: Record<string, any>,
): URLSearchParams | undefined {
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
