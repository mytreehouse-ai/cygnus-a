import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from 'axios';
import { type ICity } from "@/types/city";
import { type IApiBaseResponse, IPropertyFilters, IApiBaseRequestParams } from "@/types/api";

const getCitiesQuery = async (filters: IApiBaseRequestParams = {}) => {
  const queryParams = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  try {
    const url = `https://api-gateway.politemeadow-bfb234a8.southeastasia.azurecontainerapps.io/domains/cities
		`
		;
    const response = await axios.get<IApiBaseResponse<ICity[]>>(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch properties');
  }
};

const useCitiesQuery = (filters?: Partial<IApiBaseRequestParams>) => {

	const queryResults = useInfiniteQuery<IApiBaseResponse<ICity[]>>({
    queryKey: ['cities'],
    queryFn: () => getCitiesQuery(filters),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.next,
	
  });

  return {
    ...queryResults,
    results: queryResults.data?.pages.flatMap(page => page.results) ?? [],
  };
};

export default useCitiesQuery;