import { useQuery } from "@tanstack/react-query";
import { type IProperty } from "@/types/property";
import {
  type IApiBaseResponse,
  IPropertyFilters,
} from "@/types/property-api-filters";
import { env } from "@/env.mjs";
import apiClient from "@/lib/api-client";

const getPropertiesQuery = async (filters: Partial<IPropertyFilters> = {}) => {
  const queryParams = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  const url = `${env.NEXT_PUBLIC_OPENRED_BASEAPI_URL}/properties/public?${queryParams.toString()}`;

  try {
    const response = await apiClient.get<IApiBaseResponse<IProperty[]>>(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cities:", error);
    throw new Error("Failed to fetch properties");
  }
};

const usePropertiesQuery = (filters?: Partial<IPropertyFilters>) => {
  return useQuery<IApiBaseResponse<IProperty[]>>({
    queryKey: ["properties", filters],
    queryFn: () => getPropertiesQuery(filters),
  });
};

export default usePropertiesQuery;
