import { useQuery } from "@tanstack/react-query";
import { type IProperty } from "@/types/property";
import type { IApiBaseResponse } from "@/types/property-api-filters";
import { env } from "@/env.mjs";
import apiClient from "@/lib/api-client";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { getParams } from "@/lib/utils";

const getPropertiesQuery = async (filters?: ReadonlyURLSearchParams) => {
  const url = `${env.NEXT_PUBLIC_OPENRED_BASEAPI_URL}/properties/public`;
  const params = getParams(filters);
  try {
    const response = await apiClient.get<IApiBaseResponse<IProperty[]>>(url, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cities:", error);
    throw new Error("Failed to fetch properties");
  }
};

const usePropertiesQuery = (filters?: ReadonlyURLSearchParams) => {
  const params = getParams(filters);
  return useQuery<IApiBaseResponse<IProperty[]>>({
    queryKey: ["properties", JSON.stringify(params)],
    queryFn: () => getPropertiesQuery(filters),
  });
};

export default usePropertiesQuery;
