import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { env } from "@/env.mjs";

const getPropertyValuationQuery = async () => {
  try {
    const response = await axios.get(env.NEXT_PUBLIC_AZURE_BASEAPI_URL);
    return response.data; 

  } catch (error) {

    throw error;
  }
};

export const usePropertyValuationQuery = () => {
	const valuationQuery = useQuery({
		queryKey: ["valuation"],
		queryFn: getPropertyValuationQuery 
	})

	return valuationQuery
}