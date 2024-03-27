import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";
import { PropertyListing } from "@/types";

const getPropertyQuery = async (slug: string) => {
  const url = "/properties/public" + "/" + slug;
  try {
    const response = await apiClient.get<PropertyListing>(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch property:", error);
    throw new Error("Failed to fetch property");
  }
};

const usePropertyQuery = (slug: string, initialData?: PropertyListing) => {
  return useQuery({
    queryKey: ["property-listing", slug],
    queryFn: () => getPropertyQuery(slug),
    initialData,
  });
};

export default usePropertyQuery;
