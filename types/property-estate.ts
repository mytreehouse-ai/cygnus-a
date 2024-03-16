import { PropertyFeatures } from "./property-features";
import { City } from "./city";

interface PropertyEstate extends PropertyFeatures {
  id: number;
  building_name: string | null;
  subdivision_name: string | null;
  address: string;
  lot_size: number | null;
  floor_size: number | null;
  building_size: number | null;
  num_bedrooms: number;
  num_bathrooms: number;
  num_carspaces: number;
  city: City;
  longitude: number;
  latitude: number;
  image_url: string;
  description: string;
  markdown: string | null;
  created_at: string;
  updated_at: string;
}

export type { PropertyEstate };
