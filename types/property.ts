import { ICity } from "./city";
import { ListingType } from "./listing-type";
import { PropertyStatus } from "./property-status";
import { PropertyType } from "./property-type";

interface IFeatures {
  indoor_features: string[];
  outdoor_features: string[];
  other_features: string[];
}

interface IEstate extends IFeatures {
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
  city: ICity;
  longitude: number;
  latitude: number;
  image_url: string;
  description: string;
  markdown: string | null;
  created_at: string;
  updated_at: string;
}

export interface IProperty {
  id: number;
  listing_title: string;
  listing_url: string;
  estate: IEstate;
  property_type: PropertyType;
  listing_type: ListingType;
  property_status: PropertyStatus;
  price: string;
  price_formatted: string;
  is_delisted: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
