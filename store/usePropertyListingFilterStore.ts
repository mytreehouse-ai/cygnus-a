import { create } from "zustand";
import { PropertyFilters } from "@/types";

const initialState: PropertyFilters = {
  search: "",
  ordering: "",
  page: 1,
  page_size: 10,
  property_type: "",
  listing_type: "",
  property_status: 0,
  price_min: 0,
  price_max: 0,
  lot_size_min: 0,
  lot_size_max: 0,
  floor_size_min: 0,
  floor_size_max: 0,
  building_size_min: 0,
  building_size_max: 0,
  num_bedrooms_min: 0,
  num_bedrooms_max: 0,
  num_bathrooms_min: 0,
  num_bathrooms_max: 0,
  num_carspaces_min: 0,
  num_carspaces_max: 0,
  location: "",
  indoor_features: "",
  outdoor_features: "",
  other_features: "",
};

const usePropertyListingFilterStore = create((set) => ({
  ...initialState,
  updateFilters: (filters: Partial<PropertyFilters>) =>
    set((state: PropertyFilters) => ({ ...state, ...filters })),
}));

export default usePropertyListingFilterStore;
