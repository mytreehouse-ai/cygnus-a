import { ICity } from "./city";

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

interface IPropertyType {
  id: number;
  description: string;
}

interface IListingType {
  id: number;
  description: string;
}

interface IPropertyStatus {
  id: number;
  description: string;
}

export interface IProperty {
  id: number;
  listing_title: string;
  listing_url: string;
  estate: IEstate;
  property_type: IPropertyType;
  listing_type: IListingType;
  property_status: IPropertyStatus;
  price: string;
  price_formatted: string;
  is_delisted: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
