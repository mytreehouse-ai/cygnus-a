import { useQuery } from "@tanstack/react-query";
import { env } from "@/env.mjs";
import apiClient from "@/lib/api-client";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { getParams } from "@/lib/utils";
import { ApiBaseResponse, PropertyListing } from "@/types";

const getPropertiesQuery = async (filters?: ReadonlyURLSearchParams) => {
  const url = `${env.NEXT_PUBLIC_OPENRED_BASEAPI_URL}/properties/public`;
  const params = getParams(filters);
  try {
    const response = await apiClient.get<ApiBaseResponse<PropertyListing[]>>(
      url,
      {
        params,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cities:", error);
    throw new Error("Failed to fetch properties");
  }
};

const usePropertiesQuery = (filters?: ReadonlyURLSearchParams) => {
  const params = getParams(filters);
  return useQuery({
    queryKey: ["properties", JSON.stringify(params)],
    queryFn: () => getPropertiesQuery(filters),
  });
};

export default usePropertiesQuery;
