import { useInfiniteQuery } from "@tanstack/react-query";
import { City } from "@/types/city";
import apiClient from "@/lib/api-client";
import { ReadonlyURLSearchParams } from "next/navigation";
import { getParams } from "@/lib/utils";
import { ApiBaseResponse } from "@/types";

const getCitiesQuery = async (filters?: ReadonlyURLSearchParams) => {
  const url = "/domains/cities";
  const params = getParams(filters);
  try {
    const response = await apiClient.get<ApiBaseResponse<City[]>>(url, {
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
  return useInfiniteQuery({
    queryKey: ["cities", params],
    queryFn: () => getCitiesQuery(filters),
    initialPageParam: params?.page,
    getNextPageParam: (lastPage) => lastPage.next,
  });
};

export default useCitiesQuery;
