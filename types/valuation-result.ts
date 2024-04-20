import type { PropertyListing } from "."

export type ValuationResult = {
	valuation:  {
		property_type: string,
		sqm: number,
		rent: {
			average_price: string,
			price_per_sqm: string,
			similar_properties: PropertyListing[]
		},
		sale: {
			average_price: string,
			price_per_sqm: string,
			similar_properties: PropertyListing[]
		}
	}
}