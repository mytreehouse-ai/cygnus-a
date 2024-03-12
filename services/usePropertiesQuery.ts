import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { type IProperty } from "@/types/property";
import { type IApiBaseResponse, IPropertyFilters } from "@/types/api";
import { env } from "@/env.mjs";

const getPropertiesQuery = async (filters: IPropertyFilters = {}) => {

  const queryParams = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  try {
		const baseUrl = env.NEXT_PUBLIC_MYTREEHOUSE_BASEAPI_URL
    const url = `${baseUrl}/properties/public?${queryParams.toString()}`;
    const response = await axios.get<IApiBaseResponse<IProperty[]>>(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch properties');
  }
};

const usePropertiesQuery = (filters?: Partial<IPropertyFilters>) => {
  return useQuery<IApiBaseResponse<IProperty[]>>({
    queryKey: ['properties', filters],
    queryFn: () => getPropertiesQuery(filters)
  });
};

export default usePropertiesQuery;