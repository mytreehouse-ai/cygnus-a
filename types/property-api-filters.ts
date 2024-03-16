interface ApiBaseResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

interface ApiBaseRequestParams {
  search: string;
  ordering: string;
  page: number;
  page_size: number;
}

interface PropertyFilters extends ApiBaseRequestParams {
  property_type: number;
  listing_type: number;
  property_status: number;
  price_min: number;
  price_max: number;
  lot_size_min: number;
  lot_size_max: number;
  floor_size_min: number;
  floor_size_max: number;
  building_size_min: number;
  building_size_max: number;
  num_bedrooms_min: number;
  num_bedrooms_max: number;
  num_bathrooms_min: number;
  num_bathrooms_max: number;
  num_carspaces_min: number;
  num_carspaces_max: number;
  city: number;
  indoor_features: string;
  outdoor_features: string;
  other_features: string;
}

export type { ApiBaseResponse, ApiBaseRequestParams, PropertyFilters };
