interface IApiBaseResponse<T> {
	count: number,
	next: string | null,
	previous: string | null,
	results: T
}

interface IPropertyFilters {
  property_type_id?: number;
  listing_type_id?: number;
  property_status_id?: number;
  price_min?: number;
  price_max?: number;
  lot_size_min?: number;
  lot_size_max?: number;
  floor_size_min?: number;
  floor_size_max?: number;
  building_size_min?: number;
  building_size_max?: number;
  num_bedrooms_min?: number;
  num_bedrooms_max?: number;
  num_bathrooms_min?: number;
  num_bathrooms_max?: number;
  num_carspaces_min?: number;
  num_carspaces_max?: number;
  city_id?: number;
  indoor_features?: string;
  outdoor_features?: string;
  other_features?: string;
	search?: string
}

export type {
	IApiBaseResponse,
	IPropertyFilters
}