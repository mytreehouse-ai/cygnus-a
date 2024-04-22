import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { env } from "@/env.mjs";
import { PropertyValuation } from "@/schema/valuation";
import type { UseQueryOptions } from "@tanstack/react-query";
import { ValuationResult } from "@/types/valuation-result";
import type { UseQueryResult } from "@tanstack/react-query";

interface PropertyValuationProps extends Partial<UseQueryOptions<any, any, any, any>> {
  params: Pick<PropertyValuation, "propertyDetails">
}

const getPropertyValuationQuery = async (params: Pick<PropertyValuation, "propertyDetails">) => {
  try {
    const response = await axios.get(`${env.NEXT_PUBLIC_AZURE_BASEAPI_URL}/api/property-valuation`, {	
			params: params.propertyDetails
		});
    return response.data; 

  } catch (error) {

    throw error;
  }
};

export const usePropertyValuationQuery = ({params, enabled}:PropertyValuationProps) => {
	const valuationQuery = useQuery<UseQueryResult<ValuationResult>>({
		queryKey: ["valuation"],
		queryFn: () => getPropertyValuationQuery(params),
		enabled
	} )

	return valuationQuery
}
