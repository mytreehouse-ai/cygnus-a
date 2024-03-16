import { PropertyEstate } from "./property-estate";
import { ListingType } from "./listing-type";
import { PropertyStatus } from "./property-status";
import { PropertyType } from "./property-type";

export interface PropertyListing {
  id: number;
  listing_title: string;
  listing_url: string;
  estate: PropertyEstate;
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
