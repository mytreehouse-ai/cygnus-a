import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { type IProperty } from "@/types/property";
import { type IApiBaseResponse } from "@/types/api";

const getPropertiesQuery = async () => {
  try {
    // Specify the expected return type of the axios.get call
    const response = await axios.get<IApiBaseResponse<IProperty[]>>("https://api-gateway.politemeadow-bfb234a8.southeastasia.azurecontainerapps.io/properties/public");
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch properties');
  }
};

const usePropertiesQuery = () => {
  return useQuery<IApiBaseResponse<IProperty[]>>({
    queryKey: ['properties'],
    queryFn: getPropertiesQuery
  });
};

export default usePropertiesQuery;