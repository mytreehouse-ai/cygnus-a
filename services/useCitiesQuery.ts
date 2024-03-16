import { useInfiniteQuery } from "@tanstack/react-query";
import { type ICity } from "@/types/city";
import type {
  IApiBaseResponse,
  IApiBaseRequestParams,
} from "@/types/property-api-filters";
import { env } from "@/env.mjs";
import apiClient from "@/lib/api-client";

const getCitiesQuery = async (filters: Partial<IApiBaseRequestParams> = {}) => {
  const url = `${env.NEXT_PUBLIC_OPENRED_BASEAPI_URL}/domains/cities`;

  try {
    const response = await apiClient.get<IApiBaseResponse<ICity[]>>(url, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch cities");
  }
};

const useCitiesQuery = (filters?: Partial<IApiBaseRequestParams>) => {
  return useInfiniteQuery<IApiBaseResponse<ICity[]>>({
    queryKey: ["cities", JSON.stringify(filters)],
    queryFn: () => getCitiesQuery(filters),
    initialPageParam: filters?.page,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export default useCitiesQuery;
