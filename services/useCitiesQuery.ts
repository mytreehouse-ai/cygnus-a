import { useInfiniteQuery } from "@tanstack/react-query";
import { type ICity } from "@/types/city";
import type { IApiBaseResponse } from "@/types/property-api-filters";
import { env } from "@/env.mjs";
import apiClient from "@/lib/api-client";
import { ReadonlyURLSearchParams } from "next/navigation";
import { getParams } from "@/lib/utils";

const getCitiesQuery = async (filters?: ReadonlyURLSearchParams) => {
  const url = `${env.NEXT_PUBLIC_OPENRED_BASEAPI_URL}/domains/cities`;
  const params = getParams(filters);
  try {
    const response = await apiClient.get<IApiBaseResponse<ICity[]>>(url, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cities", error);
    throw new Error("Failed to fetch cities");
  }
};

const useCitiesQuery = (filters?: ReadonlyURLSearchParams) => {
  const params = getParams(filters);
  return useInfiniteQuery<IApiBaseResponse<ICity[]>>({
    queryKey: ["cities", params],
    queryFn: () => getCitiesQuery(filters),
    initialPageParam: params?.page,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export default useCitiesQuery;
