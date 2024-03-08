
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from 'axios';
import { type ICity } from "@/types/city";
import { type IApiBaseResponse, IApiBaseRequestParams } from "@/types/api";


const getCitiesQuery = async (filters: IApiBaseRequestParams = {}) => {
  const queryParams = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  try {
    const url = `https://api-gateway.politemeadow-bfb234a8.southeastasia.azurecontainerapps.io/domains/cities?${queryParams.toString()}`;
    const response = await axios.get<IApiBaseResponse<ICity[]>>(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cities');
  }
};

const useCitiesQuery = (filters?: Partial<IApiBaseRequestParams>) => {
 return useInfiniteQuery<IApiBaseResponse<ICity[]>>({
    queryKey: ['cities'],
    queryFn: () => getCitiesQuery(filters),
		initialPageParam: filters?.page,
		getNextPageParam: (lastPage) => lastPage.next
  });

};

export default useCitiesQuery;