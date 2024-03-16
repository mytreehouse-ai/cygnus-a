import { useInfiniteQuery } from "@tanstack/react-query";
import { type ICity } from "@/types/city";
import type {
  IApiBaseResponse,
  IApiBaseRequestParams,
} from "@/types/property-api-filters";
import { env } from "@/env.mjs";
import apiClient from "@/lib/api-client";

const getCitiesQuery = async (filters: Partial<IApiBaseRequestParams> = {}) => {
  const queryParams = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });
  try {
    const url = `${env.NEXT_PUBLIC_OPENRED_BASEAPI_URL}/domains/cities?${queryParams.toString()}`;
    const response = await apiClient.get<IApiBaseResponse<ICity[]>>(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch cities");
  }
};

const useCitiesQuery = (filters?: Partial<IApiBaseRequestParams>) => {
  return useInfiniteQuery<IApiBaseResponse<ICity[]>>({
    queryKey: ["cities"],
    queryFn: () => getCitiesQuery(filters),
    initialPageParam: filters?.page,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export default useCitiesQuery;
