import { useQuery } from "@tanstack/react-query";
import { City } from "@/types/city";
import apiClient from "@/lib/api-client";

const getCitiesQuery = async () => {
  const url = "/domains/all-cities";
  try {
    const response = await apiClient.get<City[]>(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cities", error);
    throw new Error("Failed to fetch cities");
  }
};

const useCitiesQuery = () => {
  return useQuery({
    queryKey: ["cities", "all"],
    queryFn: () => getCitiesQuery(),
  });
};

export default useCitiesQuery;
